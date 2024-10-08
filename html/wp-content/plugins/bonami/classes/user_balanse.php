<?php
/**
 * The User balanse class
 *
 * @package WordPress
 * @subpackage Bonami
 * @since Bonami 1.0
 */
include_once BONAMI_PATH.'/classes/bonami_table.php';

class UserBalanse extends BonamiTable
{
    private $_rows_count = 10;

    public function __construct() {
        parent::__construct('user_balans', 'id');
        add_action( 'wp_loaded', array($this,'add_user_balans_able'));
        add_action( 'wp_ajax_bonami_user_balanse_credit', array($this, 'bonami_user_balanse_credit'));
        add_action( 'wp_ajax_nopriv_bonami_user_balanse_credit', array($this, 'bonami_user_balanse_credit'));
        add_action( 'delete_user', array($this, 'bonami_user_delete'));
    }
    public function add_user_balans_able() {
        global $wpdb;
        if ( ! in_array( $this->_table_name, $wpdb->tables ) ) {
             $wpdb->tables[] = $this->_table_name;
        }
    }    
    public function get_user_balans($user_id)
    {
        return $this->_db->get_var( "SELECT SUM(sum) FROM {$this->_db->prefix}user_balans WHERE `user_id` = ".$user_id );
    }

    protected function _get_new_fields()
    {
        return array(
            'user_id'=>array('name'=>'Пользователь','format'=>'%d'),
            'owner_id'=>array('name'=>'Владелец','format'=>'%d'),
            'sum'=>array('name'=>'Сумма','format'=>'%d'),
            'comment'=>array('name'=>'Примечание','format'=>'%s'),
            'order_id'=>array('name'=>'Номер оплаты','format'=>'%d'),
        );
    }
    protected function _get_fields()
    {
        return array(
            'user_id'=>array('name'=>'Пользователь','format'=>'%d'),
            'owner_id'=>array('name'=>'Владелец','format'=>'%d'),
            'sum'=>array('name'=>'Сумма','format'=>'%d'),
            'comment'=>array('name'=>'Примечание','format'=>'%s'),
            'order_id'=>array('name'=>'Номер оплаты','format'=>'%d'),
        );
    }
    public function bonami_user_balanse_credit()
    {
        $credit = sanitize_text_field($_POST['credit']);
        $user_id = sanitize_text_field($_POST['user_id']);
        $comment = sanitize_text_field($_POST['comment']);
        $res = $this->add_row(array(
                'user_id'=>$user_id,
                'owner_id'=> get_current_user_id(),
                'sum'=> $credit,
                'comment'=> $comment?$comment:'Пополение счета',
                'order_id'=> '0',
        ), $user_id);
        wp_die($res, $user_id);
    }
    public function add_row($data, $user_id)
    {
        try{
            $row_id = $this->_add($data);
            if($row_id)
            {
                $res = json_encode(array('result'=>1, 'title'=>'Пополнение счета','balans'=>BonamiHelper::get_user_balanse($user_id), 'message'=>__('Счет пополнен на '.$credit.'руб.')));
            }
            else
            {
                $res = json_encode(array('result'=>0, 'title'=>'Пополнение счета', 'message'=>__('Ошиба при пополнении счета')));
            }
        } catch (Exception $ex) {
                $res = json_encode(array('result'=>0, 'title'=>'Пополнение счета', 'message'=>__('Ошиба при пополнении счета: '.$ex->getMessage())));
        }
        return $res;
    }
    public function bonami_user_delete($user_id)
    {
        $this->_db->delete($this->_table, array('user_id'=>$user_id));
    }
    public function get_user_balanse_transactions($user_id, $_page=1)
    {
        $rows_count = $this->_rows_count;
        switch ($_page)
        {
            case 'start':
                $page = 1;
                break;
            case 'end':
                $page = $this->get_user_balanse_transaction_pages_count($user_id);
                break;
            default:
                $page = $_page;
        }
        $limit = array(
            (($page-1)*$rows_count),
            $rows_count,
        );
        
        $query = 'SELECT * FROM '.$this->_table.
                ' WHERE `user_id` = '.$user_id.
                ' ORDER BY id DESC '.
                ' LIMIT '. implode(',', $limit);
        return $this->_db->get_results($query, ARRAY_A);
    }
    
    public function get_user_balanse_transaction_pages_count($user_id)
    {
        $rows_count = $this->_rows_count;
        $transactions_count =  $this->_db->get_var( "SELECT COUNT(id) FROM `{$this->_table}` WHERE `user_id` = ".$user_id );
        return ceil($transactions_count/$rows_count);
    }
    public function add_row_debet($data)
    {
        return $this->_add($data);
    }
}

new UserBalanse;