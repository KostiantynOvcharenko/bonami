<?php
/**
 * The Orders
 *
 * @package WordPress
 * @subpackage Bonami
 * @since Bonami 1.0
**/
include_once BONAMI_PATH.'/classes/bonami_table.php';

class BonamiOrders extends BonamiTable
{
    public function __construct() {
        parent::__construct('bonami_orders', 'id');
        add_action( 'wp_ajax_bonami_new_payment', array($this, 'new_payment'));
        add_action( 'wp_ajax_nopriv_bonami_new_payment', array($this, 'new_payment'));
        add_action( 'wp_ajax_bonami_check_payment', array($this, 'check_payment'));
        add_action( 'wp_ajax_nopriv_bonami_check_payment', array($this, 'check_payment'));
//        add_action( 'template_redirect', array($this, 'check_order_payd_listener'));
    }
    
    protected function _get_new_fields()
    {
        return array(
            'user_id'=>array('name'=>'Пользователь','format'=>'%d'),
            'sum'=>array('name'=>'Сумма','format'=>'%d'),
        );
    }    
    protected function _get_fields()
    {
        return array(
            'user_id'=>array('name'=>'Пользователь','format'=>'%d'),
            'sum'=>array('name'=>'Сумма','format'=>'%d'),
            'comment'=>array('name'=>'Комментарий','format'=>'%s'),
            'merchant_id'=>array('name'=>'Идентификатор платежа','format'=>'%s'),
            'status'=>array('name'=>'Статус платежа','format'=>'%d'),
            'payd_time'=>array('name'=>'Статус платежа','format'=>'%s'),
            'payment_response'=>array('name'=>'Отет платежной системы','format'=>'%s'),
        );
    }    
    public function new_payment()
    {
        $user_id = sanitize_text_field($_POST['user_id']);
        $sum = ($_POST['sum']);
        $order_id = $this->_add(array(
                'user_id'=>$user_id,
                'sum'=> $sum,
        ));
        if(!$order_id)
        {
            wp_die(json_encode(array('result'=>0, 'title'=>'Новый ордер на оплату','Ошибка при создании нового ордара')));
        }
        $AlfaBank = new AlfaBank;
        $res = $AlfaBank->register($order_id, $sum);
        if(!$res['orderId'])
        {
            $this->_update($order_id, array('comment'=>$res['message']?$res['message']:'Ошибка связи с банком'));
            wp_die(json_encode($res));
        }
        $this->_update($order_id, array('merchant_id'=>$res['orderId']));
        wp_die(json_encode(array('result'=>1, 'url'=>$res['formUrl'])));
    }
    /**
     * После возврата со страницы оплаты
     * проверяем статус оплаты
     */
    public function check_payment()
    {
        $merchant_id = sanitize_text_field($_POST['orderId']);
        $AlfaBank = new AlfaBank;
        $json_res = $AlfaBank->get_order_status($merchant_id);
        $res = json_decode($json_res, TRUE);
        $orderStatus = isset($res['orderStatus'])?$res['orderStatus']:'0';
        if($orderStatus == '1' OR $orderStatus == '2')
        {
            $credit_balanse = $this->_credit_balanse($merchant_id);
            $amount = $res['amount']/100;
            echo (json_encode(array('result'=>1, 'message'=>'Счет пополнен успешно на '.$amount.' руб.')));
        }
        else
        {
            echo (json_encode(array('result'=>0, 'message'=>'Счет не пополнен. '.$res['actionCodeDescription'])));
        }
        $this->_update(
                array('merchant_id'=>$merchant_id), 
                    array(
                        'status'=>$orderStatus,
                        'comment'=>!empty($res['actionCodeDescription'])?$res['actionCodeDescription']:'Успешно',
                        'payd_time'=>date('Y-m-d H:i:s'),
                        'payment_response'=>$json_res,
        ));
        wp_die();
    }
    private function _credit_balanse($merchant_id)
    {
        $row = $this->find_row(array('merchant_id'=>$merchant_id));
        if(empty($row['status']))
        {
            $UserBalanse = new UserBalanse;
            if(!$UserBalanse->find_row(array('order_id'=>$row['id'])))
            {
                $UserBalanse->add_row(array(
                    'user_id'=>$row['user_id'],
                    'owner_id'=> $row['user_id'],
                    'sum'=> $row['sum'],
                    'comment'=> 'Оплата картой',
                    'order_id'=> $row['id'],
                ), $row['user_id']);
                
            }
        }
    }
}

new BonamiOrders;