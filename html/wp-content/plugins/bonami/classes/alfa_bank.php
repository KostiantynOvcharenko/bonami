<?php
/**
 * The Alfa Bank payment gateway
 *
 * @package WordPress
 * @subpackage Bonami
 * @since Bonami 1.0
**/

class AlfaBank
{
    private $_login;
    private $_password;
    private $_test;
    private $_returnUrl;
    private $_prod_usl = 'https://ecom.alfabank.by/payment/rest/';
    private $_test_usl = 'https://web.rbsuat.com/ab_by/rest/';
    
    public function __construct() {
        do_settings_sections( 'bonami_options_group' );
        $this->_login = get_option('bonami_abank_login');
        $this->_password = get_option('bonami_abank_password');
        $this->_test = get_option('bonami_abank_test');
        $this->_returnUrl = get_site_url().'/cabinet';
    }
    
    public function register($orderNumber, $amount)
    {
        $url = $this->_test?$this->_test_usl:$this->_prod_usl;
        $url .= 'register.do';
        $args = array(
            'userName' => $this->_login,
            'password' => $this->_password,
            'orderNumber' => $orderNumber,
            'amount' => $amount*100,
            'returnUrl' => $this->_returnUrl,
        );
        $rbsCurl = curl_init();
        curl_setopt_array($rbsCurl, array(
            CURLOPT_HTTPHEADER => array(
                'CMS: Wordpress ' . get_bloginfo('version'),
                'Module-Version: ' . get_file_data(BONAMI_PATH.'bonami.php', array('Version'), 'plugin'),
            ),
            CURLOPT_URL => $url,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_SSL_VERIFYPEER => false,
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => http_build_query($args, '', '&')
        ));

        $_response = curl_exec($rbsCurl);
        $response = json_decode($_response, TRUE);
        if (!empty($response['errorCode'])) {
            return(array('result'=>'0', 'message' => 'Ошибка #' . $response['errorCode'] . ': ' . $response['errorMessage']));
        }
        return(array('result'=>'1', 'formUrl' => $response['formUrl'], 'orderId'=> $response['orderId']));
    }
    public function get_order_status($merchant_order_id)
    {
        $url = $this->_test?$this->_test_usl:$this->_prod_usl;
        $url .= 'getOrderStatusExtended.do';
        $args = array(
            'userName' => $this->_login,
            'password' => $this->_password,
            'orderId' => $merchant_order_id,
        );
        $rbsCurl = curl_init();
        curl_setopt_array($rbsCurl, array(
            CURLOPT_URL => $url,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_POST => true,
            CURLOPT_SSL_VERIFYPEER => false,
            CURLOPT_POSTFIELDS => http_build_query($args, '', '&'),
            CURLOPT_HTTPHEADER => array(
                'CMS: Wordpress ' . get_bloginfo('version'),
                'Module-Version: ' . get_file_data(BONAMI_PATH.'bonami.php', array('Version'), 'plugin'),
                ),
        ));

        $response = curl_exec($rbsCurl);
        curl_close($rbsCurl);
        return $response;
    }
}