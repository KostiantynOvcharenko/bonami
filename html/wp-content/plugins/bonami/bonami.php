<?php
/**
 * The main file
 *
 * @package WordPress
 * @subpackage Bonami
 * @since Bonami 1.0
 */

/*
Plugin Name: Bonami
Version: 1.00
Author: Ovcharenko K.N.
Description: Функционал для Bonami
License: GPLv2 or later
*/

define('BONAMI_PATH', plugin_dir_path(__FILE__));

// Abstract table class
include_once BONAMI_PATH.'/classes/bonami_table.php';
// Alfa Bank gateway
include_once BONAMI_PATH.'/classes/alfa_bank.php';
// Register
include_once BONAMI_PATH.'/classes/user_registration.php';
// Services
include_once BONAMI_PATH.'/classes/services.php';
// Brones
include_once BONAMI_PATH.'/classes/brones.php';
// Testimonials
include_once BONAMI_PATH.'/classes/testimonials.php';
// Calendar
include_once BONAMI_PATH.'/classes/calendar.php';
// Gallery
include_once BONAMI_PATH.'/classes/gallery.php';
// Feedbacks
include_once BONAMI_PATH.'/classes/feedbacks.php';
// Settings
include_once BONAMI_PATH.'/classes/bonami_settings.php';
// User profile administration
include_once BONAMI_PATH.'/classes/admin_user_profile.php';
// User balanse data
include_once BONAMI_PATH.'/classes/user_balanse.php';
// Lockerse data
include_once BONAMI_PATH.'/classes/lockers.php';
// Clients
include_once BONAMI_PATH.'/classes/clients.php';
// Orders
include_once BONAMI_PATH.'/classes/bonami_orders.php';
// Helper
include_once BONAMI_PATH.'/classes/bonami_helper.php';
// Helper
include_once BONAMI_PATH.'/classes/manager_helper.php';
// Manager Cabinet
include_once BONAMI_PATH.'/classes/manager_cabinet.php';

function register_session(){
    if( !session_id() ){
        session_start();
    }
}
add_action('init','register_session');

function bonami_enqueue($hook) {
    // Only add to the edit.php admin page.
    // See WP docs.
    if ('user-edit.php' !== $hook) {
        return;
    }
    wp_enqueue_script('bonami_custom_script', plugin_dir_url(__FILE__) . '/bonami.js', array('jquery'),TRUE,TRUE);
}

add_action('admin_enqueue_scripts', 'bonami_enqueue');

/*
 * Добавляем новое меню в Админ Консоль 
 */
 
// Хук событие 'admin_menu', запуск функции 'mfp_Add_My_Admin_Link()'
add_action( 'admin_menu', 'mfp_add_bonami_menu_link' );
 
// Добавляем новую ссылку в меню Админ Консоли
function mfp_add_bonami_menu_link()
{
    add_menu_page(
    'Bonami', // Название страниц (Title)
    'Bonami', // Текст ссылки в меню
    'manage_options', // Требование к возможности видеть ссылку 
    'bonami/includes/mfp_add_bonami_menu_link.php' // 'slug' - файл отобразится по нажатию на ссылку
 );
}



// Ajax
// Login
add_action( 'wp_ajax_bonami_login', 'bonami_login_action' );
add_action( 'wp_ajax_nopriv_bonami_login', 'bonami_login_action' );
function bonami_login_action()
{
    // Nonce is checked, get the POST data and sign user on
    $info = array();
    $info['user_login'] = sanitize_text_field($_POST['log']);
    $info['user_password'] = sanitize_text_field($_POST['pwd']);
    $info['remember'] = !empty($_POST['rememberme'])?TRUE:FALSE;
    if(empty($info['user_login']) OR empty($info['user_login']))
    {
        echo json_encode(array('result'=>0, 'title'=>'Проверка авторизации', 'message'=>__('Вы не ввели имя пользователя или пароль.')));
    }
    $user_signon = wp_signon( $info, false );
    if ( is_wp_error($user_signon) )
    {
        echo json_encode(array('result'=>0, 'title'=>'Проверка авторизации', 'message'=>__('Неправильный пользователь или пароль.')));
    }
    else 
    {
        echo json_encode(array('result'=>1, 'title'=>'Проверка авторизации', 'message'=>__('Авторизация прошла успешно...')));
    }
    wp_die();
}

// Login
add_action( 'wp_ajax_bonami_logout', 'bonami_logout_action' );
add_action( 'wp_ajax_nopriv_bonami_logout', 'bonami_logout_action' );
function bonami_logout_action()
{

    if ( !wp_logout())
    {
        echo json_encode(array('result'=>1, 'title'=>'Выход', 'message'=>__('Выход не состоялся.')));
    }
    else 
    {
        echo json_encode(array('result'=>0, 'title'=>'Выход', 'message'=>__('Вы вышли из системы')));
    }
    wp_die();
}

// Fogot password
add_action( 'wp_ajax_bonami_password', 'bonami_password_action' );
add_action( 'wp_ajax_nopriv_bonami_password', 'bonami_password_action' );
function bonami_password_action()
{
	global $wpdb;
	
	$account = $_POST['login'];
        $error = '';
	
	if( empty( $account ) ) {
		$error = 'Enter an username or e-mail address.';
	} else {
		if(is_email( $account )) {
			if( email_exists($account) ) 
				$get_by = 'email';
			else	
				$error = 'С этим email адресом пользователь не зарегистрирован.';			
		}
		else if (validate_username( $account )) {
			if( username_exists($account) ) 
				$get_by = 'login';
			else	
				$error = 'Пользователь с таким именем не зарегистрирован.';				
		}
		else
			$error = 'Неправильный пользователь или e-mail.';		
	}	
	
	if(empty ($error)) {
		// lets generate our new password
		//$random_password = wp_generate_password( 12, false );
		$random_password = wp_generate_password();
 
			
		// Get user data by field and data, fields are id, slug, email and login
		$user = get_user_by( $get_by, $account );
			
		$update_user = wp_update_user( array ( 'ID' => $user->ID, 'user_pass' => $random_password ) );
			
		// if  update user return true then lets send user an email containing the new password
		if( $update_user ) {
			
			$to = $user->user_email;
                        $subject = 'Смена пароля на сайте: '.get_bloginfo('name');
                        $message = 'Ваш новый пароль: '.$random_password;
                        $mail = BonamiHelper::send_email($to, $subject, $message);
                        
			if( $mail ) 
				$success = 'Проверьте email адрес. Новый пароль отправлен.';
			else
				$error = 'Невозможно отправить пароль на Вашу почту.';						
		} else {
			$error = 'Что-то пошло не так.';
		}
	}
	echo json_encode(array(
            'result'=> empty($success)?0:1, 
            'title'=>'Забыли пароль', 
            'message'=>__(!empty($success)?$success:$error)
        ));
    wp_die();
}

// Фильтр отправки стандартного сообщения на emai о смене пароля
function bonami_send_password_change_email() {
    return FALSE;
}
add_filter( 'send_password_change_email', 'bonami_send_password_change_email' );

function change_name($name) {
    return get_option('bonami_meta_title');
}
  
add_filter('wp_mail_from_name','change_name');

function change_email($email) {
    return get_option('admin_email');
}
  
add_filter('wp_mail_from','change_email');

$Calendar = new Calendar;
add_action( 'wp_ajax_bonami_get_new_days', array($Calendar, 'get_new_days'));
add_action( 'wp_ajax_nopriv_bonami_get_new_days', array($Calendar, 'get_new_days'));

add_filter( 'wp_mail_from', 'filter_function_mail_from' );
function filter_function_mail_from( $from_email ){
	// filter...
        $from_email = get_option('bonami_contact_email');
	return $from_email;
}