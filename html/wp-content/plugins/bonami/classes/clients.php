<?php

/**
 * The Clients class
 *
 * @package WordPress
 * @subpackage Bonami
 * @since Bonami 1.0
 */
class Clients {

    private $_session_flt_key = 'ml_clients_flt';

    public function __construct() {

        add_action('wp_ajax_edit_client_balans', array($this, 'edit_client_balans'));
        add_action('wp_ajax_nopriv_edit_client_balans', array($this, 'edit_client_balans'));

        add_action('wp_ajax_mk_add_client', array($this, 'add_client'));
        add_action('wp_ajax_nopriv_mk_add_client', array($this, 'add_client'));

        add_action('wp_ajax_mk_edit_client_profile', array($this, 'edit_client_profile'));
        add_action('wp_ajax_nopriv_mk_edit_client_profile', array($this, 'edit_client_profile'));

        add_action('wp_ajax_client_remove', array($this, 'client_remove'));
        add_action('wp_ajax_nopriv_client_remove', array($this, 'client_remove'));

        add_action('wp_ajax_client_profile_activate', array($this, 'client_profile_activate'));
        add_action('wp_ajax_nopriv_client_profile_activate', array($this, 'client_profile_activate'));

        add_action('wp_ajax_client_profile_deactivate', array($this, 'client_profile_deactivate'));
        add_action('wp_ajax_nopriv_client_profile_deactivate', array($this, 'client_profile_deactivate'));

        add_action('wp_ajax_mk_add_client_profile', array($this, 'add_client_profile'));
        add_action('wp_ajax_nopriv_mk_add_client_profile', array($this, 'add_client_profile'));

        add_action('delete_user', array($this, 'remove_client_data'));
    }

    private function _get_fam_flt_data() {
        if (isset($_GET['action']) AND $_GET['action'] == 'mk_clients_flt') {
            if (!empty($_GET['user_fam_flt'])) {
                $user_fam_flt = sanitize_text_field($_GET['user_fam_flt']);
            } else {
                $user_fam_flt = '';
            }
            $data = array(
                'user_fam_flt' => $user_fam_flt,
            );
            $_SESSION[$this->_session_flt_key] = $data;
        }
        if (!isset($_SESSION[$this->_session_flt_key])) {
            $_SESSION[$this->_session_flt_key] = array(
                'user_fam_flt' => '',
            );
        }
        return $_SESSION[$this->_session_flt_key];
    }

    public function get_fam_flt() {
        $flt_data = $this->_get_fam_flt_data();
        return $flt_data['user_fam_flt'];
    }
    public function mt_get_active_clients()
    {
        global $wpdb;
        $query = 'SELECT * FROM wp_users as user'
                . ' INNER JOIN wp_usermeta as meta on meta.user_id = user.id'
                . ' WHERE meta.meta_key = "is_registered"'
                . ' AND meta.meta_value = 1';
        $users = $wpdb->get_results($query, ARRAY_A);
        $result = array();
        foreach ($users as $user)
        {
            $result[$user['ID']] = $this->_build_user_full_name($user['ID']);
        }
        return $result;
    }

    public function mt_get_clients() {
        global $wpdb;

        $fam_flt = $this->get_fam_flt();
        $query = 'SELECT * FROM wp_users as user'
                . ' LEFT JOIN wp_usermeta as meta on meta.user_id = user.id'
                . ' WHERE meta.meta_key = "surname"';
        if(!empty($fam_flt))
        {
            $query .= 'AND meta.meta_value LIKE "'.$fam_flt.'%"';
        }
        $users = $wpdb->get_results($query, ARRAY_A);
        $result = array();
        foreach ($users as $user) {
            $balans = BonamiHelper::get_user_balanse($user['ID']);
            $user_class = $balans < 0 ? ' red ' : '';
            $result[$user['ID']] = array(
                'user_name' => array(
                    'title'=> $this->_build_user_full_name($user['ID']),
                    'class' => 'fl_left' . $user_class,
                ),
                'phone' => array(
                    'title' => get_user_meta($user['ID'], 'phone', TRUE),
                    'class' => '',
                ),
                'email' => array(
                    'title' => $user['user_email'],
                    'class' => '',
                ),
                'user_balans' => array(
                    'title' => $balans,
                    'class' => 'fl_right',
                ),
                'overdraft' => array(
                    'title' => get_user_meta($user['ID'], 'user_overdraft', TRUE),
                    'class' => 'fl_right',
                ),
            );
        }
        return $result;
    }
    private function _build_user_full_name($user_id)
    {
        return get_user_meta($user_id, 'surname', TRUE)
                    . ' ' . get_user_meta($user_id, 'first_name', TRUE)
                    . ' ' . get_user_meta($user_id, 'second_name', TRUE);
    }

    public function add_client() {
        $user_id = (int) $_POST['user_id'];
        $number = $this->_get_new_number();
        if ($id = $this->_add(array('number' => $number, 'user_id' => $user_id))) {
            wp_die(json_encode(array('result' => 1, 'title' => 'Добавить шкафчик', 'message' => 'Шкафчик добавлен')));
        }
        wp_die(json_encode(array('result' => 0, 'title' => 'Добавить шкафчик', 'message' => 'Ошибка записи шкафчика в БД')));
    }

    public function add_client_profile() {
        $UserRegistratiron = new UserRegistratiron();
        $UserRegistratiron->bonami_register_action(FALSE);
    }
    public function edit_client_profile() {
        $UserRegistratiron = new UserRegistratiron;
        
        $user_id = (int) $_POST['id'];
        $register_password = sanitize_text_field($_POST['newpassword']);
        if(!empty($register_password))
        {
            $user = get_user_by('ID',$user_id);
            if($UserRegistratiron->change_password($user, $register_password, FALSE))
            {
                wp_die(json_encode(array('result' => 1, 'title' => 'Изменение пароля клиента', 'message' => 'Пароль изменен')));
            }
            wp_die(json_encode(array('result' => 0, 'title' => 'Изменение пароля клиента', 'message' => 'Оибка изменения пароля клиента')));
        }
        $register_surname = sanitize_text_field($_POST['register_surname']);
        $register_name = sanitize_text_field($_POST['register_name']);
        $register_second_name = sanitize_text_field($_POST['register_second_name']);
        $register_phone = sanitize_text_field($_POST['register_phone']);
        $register_email = sanitize_text_field($_POST['register_email']);
        $user_data = array(
            'ID' => $user_id,
            'first_name' => $register_name,
            'user_email' => $register_email,
            'user_metas' => array(
                'surname' => $register_surname,
                'second_name' => $register_second_name,
                'phone' => $register_phone,
            )
        );
        $res = $UserRegistratiron->update_user($user_data);
        if(is_wp_error($res))
        {
            wp_die(json_encode(array('result' => 0, 'title' => 'Обновление профиля клиента', 'message' =>$res->get_error_message())));
        }
        wp_die(json_encode(array('result' => 1, 'title' => 'Обновление профиля клиента', 'message' => 'Профиль обновлен')));
    }

    public function edit_client_balans()
    {
        $user_id = (int)$_POST['id'];
        $credit = (int)$_POST['credit'];
        $overdraft = (int)$_POST['overdraft'];
        if(!empty($credit))
        {
            $UserBalanse = new UserBalanse;
            $data = array(
                'user_id'=>$user_id,
                'owner_id'=> get_current_user_id(),
                'sum'=> $credit,
                'comment'=> $credit>0?'Пополение счета менеджером':'Сняти со счета менеджером',
                'order_id'=> '0',
            );
            wp_die($UserBalanse->add_row($data, $user_id));
        }
        if(update_user_meta( $user_id, 'user_overdraft', $overdraft))
        {
            wp_die(json_encode(array('result' => 1, 'title' => 'Изменение овердрафта', 'message' => 'Овердрафт изменен')));
        }
        wp_die(json_encode(array('result' => 0, 'title' => 'Изменение овердрафта', 'message' => 'Ошибка изменения овердрафта')));
    }
    public function get_client_servisces($user_id)
    {
        global $wpdb;
        
        $Services = new Services;
        $slugs = $Services->get_servise_slugs();
        $query = 'SELECT `meta_key` FROM `'.$wpdb->prefix.'usermeta`'
                . ' WHERE `user_id` = '.$user_id
                . ' AND `meta_key` IN ("'.implode('", "', $slugs).'")'
                . ' AND `meta_value` = 1';
        return $wpdb->get_col($query);
    }
    public function client_remove()
    {
        $user_id = (int)$_POST['id'];
        $delete_user = wp_delete_user($user_id);
        if(is_wp_error($delete_user))
        {
            wp_die(json_encode(array('result' => 0, 'title' => 'Удаление клиента', 'message' =>$delete_user->get_error_message())));
        }
        wp_die(json_encode(array('result' => 1, 'title' => 'Удаление клиента', 'message' =>'Клиент удален')));
    }
    public function remove_client_data($id)
    {
        $Testimonials = new Testimonials;
        $Testimonials->remove_user_testimonials($id);
        $Lockers = new Lockers;
        $Lockers->client_removing($id);
        $UserBalanse = new UserBalanse;
        $UserBalanse->bonami_user_delete($id);
    }
    public function client_profile_activate()
    {
        $user_id = (int)$_POST['id'];
        if(update_user_meta($user_id,'is_registered','1'))
        {
            wp_die(json_encode(array('result'=>1, 'title'=>'Зарегистрировать клиента', 'message'=>__('Клиент зарегистрирован.'))));
        }
        wp_die(json_encode(array('result'=>0, 'title'=>'Зарегистрировать клиента', 'message'=>__('Ошибка регистрации клиента.'))));
    }
    public function client_profile_deactivate()
    {
        $user_id = (int)$_POST['id'];
        if(update_user_meta($user_id,'is_registered','0'))
        {
            wp_die(json_encode(array('result'=>1, 'title'=>'Снять с регистрации клиента', 'message'=>__('Клиент снят с регистрации.'))));
        }
        wp_die(json_encode(array('result'=>0, 'title'=>'Снять с регистрации клиента', 'message'=>__('Ошибка снятия с регистрации клиента.'))));
    }
}

new Clients;
