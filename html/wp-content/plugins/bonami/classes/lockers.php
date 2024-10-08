<?php

/**
 * The Testimonials class
 *
 * @package WordPress
 * @subpackage Bonami
 * @since Bonami 1.0
 */
class Lockers extends BonamiTable {

    private $_session_flt_key='ml_lockers_flt';
    
    public function __construct() {
        
        parent::__construct('lockers', 'id');
        
        add_action( 'wp_ajax_mk_add_locker', array($this,'add_locker'));
        add_action( 'wp_ajax_noprivmt_mk_add_locker', array($this,'add_locker'));        
        
        add_action( 'wp_ajax_mk_edit_locker', array($this,'edit_locker'));
        add_action( 'wp_ajax_noprivmt_mk_edit_locker', array($this,'edit_locker'));        
    }
    protected function _get_fields() {
        return $this->_get_new_fields();
    }
    protected function _get_new_fields() {
        return array(
            'user_id' => array('name' => 'Пользователь', 'format' => '%d'),
            'number' => array('name' => 'Номер шкафчика', 'format' => '%d'),
        );
    }
    
    private function _get_fam_flt_data()
    {
        if(isset($_GET['action']) AND $_GET['action']=='find_user_flt')
        {
            if(!empty($_GET['user_fam_flt']))
            {
                $user_fam_flt = sanitize_text_field($_GET['user_fam_flt']);
            }
            else
            {
                $user_fam_flt = '';
            }
            $data = array(
                'user_fam_flt' => $user_fam_flt,
            );
            $_SESSION[$this->_session_flt_key] = $data;
        }
        if(!isset($_SESSION[$this->_session_flt_key]))
        {
            $_SESSION[$this->_session_flt_key] = array(
                'user_fam_flt' => '',
            );
        }
        return $_SESSION[$this->_session_flt_key];
        
    }
    public function get_fam_flt()
    {
        $flt_data = $this->_get_fam_flt_data();
        return $flt_data['user_fam_flt'];
    }

    public function add_locker()
    {
        $user_id = (int)$_POST['user_id'];
        $number = $this->_get_new_number();
        if($id = $this->_add(array('number'=>$number, 'user_id'=>$user_id)))
        {
            wp_die(json_encode(array('result'=>1, 'title'=>'Добавить шкафчик', 'message'=>'Шкафчик добавлен')));
        }
        wp_die(json_encode(array('result'=>0, 'title'=>'Добавить шкафчик', 'message'=>'Ошибка записи шкафчика в БД')));
    }
    public function edit_locker()
    {
        $user_id = (int)$_POST['user_id'];
        $id = (int)$_POST['id'];
        if(!$this->_update($id, array('user_id'=>$user_id)))
        {
            wp_die(json_encode(array('result'=>0, 'title'=>'Изменить шкафчик', 'message'=> $this->get_error())));
        }
        wp_die(json_encode(array('result'=>1, 'title'=>'Изменить шкафчик', 'message'=> 'Шкафчик изменен')));
    }
    private function _get_new_number()
    {
        return $this->_db->get_var('SELECT MAX(`number`) FROM `'.$this->_table.'`')+1;
    }
    
    public function mt_get_lockers()
    {
        $fam_flt = $this->get_fam_flt();
        $query = 'SELECT * FROM `'.$this->_table.'` l ';
        if($fam_flt)
        {
            $query .= ' WHERE `user_id` IN (SELECT `user_id` FROM `'.$this->_db->prefix.'usermeta` WHERE `meta_key`="surname" AND `meta_value` LIKE "'.$fam_flt.'%") ';
        }
        $query .= ' ORDER BY `number`';
        $UserRegistratiron = new UserRegistratiron;
        $data = array();
        foreach($this->_db->get_results($query, ARRAY_A) as $row)
        {
            $data[$row['id']] = array(
                'number'=>array(
                    'title'=>$row['number'],
                    'class'=>''
                ),
                'user_id'=>array(
                    'title'=>$UserRegistratiron->get_user_full_name($row['user_id']),
                    'class'=>'fl_left'
                ),
            );
        }
        return $data;
    }
    public function client_removing($user_id)
    {
        $query = 'UPDATE `'.$this->_table.'`'
                . ' SET `user_id` = 0'
                . ' WHERE `user_id` = '.$user_id;
        return $this->_db->query($query);
    }

    private function _create_table()
    {
        $this->_db->query('CREATE TABLE `wp_lockers` (
            `id` int(10) NOT NULL,
            `user_id` int(10) NOT NULL,
            `number` int(10) NOT NULL
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8;');
        $this->_db->query('ALTER TABLE `wp_lockers`
            ADD PRIMARY KEY (`id`),
            ADD KEY `user_id` (`user_id`);');
    }
}

new Lockers;
