<?php

/**
 * The user registration class
 *
 * @package WordPress
 * @subpackage Bonami
 * @since Bonami 1.0
 */

class UserRegistratiron
{
    private $_first_name_min_length = 3;
    private $_first_name_max_length = 35;
    private $_second_name_min_length = 3;
    private $_second_name_max_length = 35;
    private $_surname_min_length = 3;
    private $_surname_max_length = 35;
    private $_password_min_length = 8;
    private $_password_max_length = 25;
    
    public function __construct() {
        add_action( 'wp_ajax_bonami_register', array($this,'bonami_register_action'));
        add_action( 'wp_ajax_nopriv_bonami_register', array($this,'bonami_register_action'));        
        
        add_action( 'wp_ajax_user_change_data', array($this,'user_change_data'));
        add_action( 'wp_ajax_nopriv_user_change_data', array($this,'user_change_data'));        
        
        add_action( 'wp_ajax_user_change_password', array($this,'change_password'));
        add_action( 'wp_ajax_nopriv_user_change_password', array($this,'change_password'));        
        
        add_action( 'wp_ajax_change_profile', array($this,'change_profile'));
        add_action( 'wp_ajax_nopriv_change_profile', array($this,'change_profile'));        
        
        add_action( 'init', array($this,'bonami_register_get_email_verification'));        
    }
    private function _validation_error($message, $field='')
    {
        wp_die(json_encode(array(
            'result'=>0, 
            'field'=>$field, 
            'title'=>'Регистрация', 
            'message'=>__($message)
        )));
    }

    public function bonami_register_action($validate_othe_data=TRUE)
    {
        $userdata = $this->_get_userdata();
        $user_add_data = $this->_get_user_add_data();
        if($validate_othe_data)
        {
            $this->_validate_othe_data();
        }
        
        $user_id = wp_insert_user($userdata);

        // Return
        if (!is_wp_error($user_id)) 
        {
            
            foreach($user_add_data as $key=>$value)
            {
                add_user_meta( $user_id, $key, $value);
            }
            if($validate_othe_data)
            {
                $this->bonami_register_set_email_verification($user_id);
            }
            $msg = $validate_othe_data?'Для завершения регистрации проверьте почту':'Для завершения регистрации клиенту необходимо проверить почту, либо активируйте учетную запись вручную';
            echo json_encode(array('result'=>1, 'title'=>'Регистрация', 'message'=>__($msg)));
        }
        else 
        {
            echo json_encode(array('result'=>0, 'title'=>'Регистрация', 'message'=>__($user_id->get_error_message())));
        }
        wp_die();
    }
    private function _get_userdata()
    {
        // Post values
        $email = $username = $this->_check_email_input($_POST['register_email']);
        $password = $this->_check_password($_POST['register_password']);
        $nick = $name = $this->_check_first_name($_POST['register_name']);

        return array(
            'user_login' => $username,
            'user_pass' => $password,
            'user_password' => $password,
            'user_email' => $email,
            'first_name' => $name,
            'nickname' => $nick,
        ); 
    }
    private function _get_user_profile_data()
    {
        $res = array(
            'surname' => $this->_check_surname('register_surname'),
            'second_name' => $this->_check_second_name($_POST['register_second_name']),
            'phone' => $this->_check_phone_input($_POST['register_phone']),
        );
        return $res;
    }
    private function _get_user_add_data()
    {
        $res = $this->_get_user_profile_data();
        $services = $this->_get_servisces();
        $validate_service = FALSE;
        foreach ($services as $service)
        {
            $res[$service] = (int)$_POST[$service];
            if($res[$service])
            {
                $validate_service = TRUE;
            }
        }
        if(!$validate_service)
        {
            $this->_validation_error('Не указан род предполагаемых занятий');
        }
        return $res;
    }

    private function _check_first_name($first_name)
    {
        $mb_strlen = mb_strlen($first_name);
        if($mb_strlen < $this->_first_name_min_length)
        {
            $this->_validation_error('Имя должно быть не меньше '.$this->_first_name_min_length.' символов');
        }
        if($mb_strlen > $this->_first_name_max_length)
        {
            $this->_validation_error('Имя не должно быть меньше '.$this->_first_name_max_length.' символов');
        }
        return sanitize_text_field($first_name);
    }
    private function _check_second_name($second_name)
    {
        $mb_strlen = mb_strlen($second_name);
        if($mb_strlen < $this->_second_name_min_length)
        {
            $this->_validation_error('Отчество должно быть не меньше '.$this->_second_name_min_length.' символов');
        }
        if($mb_strlen > $this->_second_name_max_length)
        {
            $this->_validation_error('Отчество не должно быть меньше '.$this->_second_name_max_length.' символов');
        }
        return sanitize_text_field($second_name);
    }
    private function _check_surname($_surname)
    {
        $surname = $_POST[$_surname];
        $mb_strlen = mb_strlen($surname);
        if($mb_strlen < $this->_surname_min_length)
        {
            $this->_validation_error('Фамилия должна быть не меньше '.$this->_surname_min_length.' символов', $_surname);
        }
        if($mb_strlen > $this->_surname_max_length)
        {
            $this->_validation_error('Фамилия не должна быть меньше '.$this->_surname_max_length.' символов');
        }
        return sanitize_text_field($surname);
    }
    private function _check_email_input($_email)
    {
        $email = sanitize_text_field($_email);
        if(!filter_var($email,FILTER_VALIDATE_EMAIL))
        {
            $this->_validation_error('E-mail указан не правильно');
        }
        return $email;
    }
    private function _check_phone_input($phone)
    {
        if(!preg_match('/^\+375\s\([0-9]{2}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}$/', $phone))
        {
            $this->_validation_error('Неправильный формат номера телефона');
        }
        return sanitize_text_field($phone);
    }
    private function _check_password($password)
    {
        $mb_strlen = mb_strlen($password);
        if($mb_strlen < $this->_password_min_length)
        {
            $this->_validation_error('Пароль должен быть не меньше '.$this->_password_min_length.' символов');
        }
        if($mb_strlen > $this->_password_max_length)
        {
            $this->_validation_error('Пароль не должен быть меньше '.$this->_password_max_length.' символов');
        }
        return sanitize_text_field($password);
    }
    private function _validate_othe_data()
    {
        if(empty($_POST['accept']))
        {
            $this->_validation_error('Примите условия договора публичной оферты,<br> чтобы продолжить регистрацию');
        }
        if(empty($_POST['accept_all']))
        {
//            $this->_validation_error('Нет согласия с условиями договора и правилами оказания услуг');
        }
    }
    
    public function bonami_register_set_email_verification($user_id)
    {
        // get user data
        $user_info = get_userdata($user_id);
        // create md5 code to verify later
        $code = md5(time());
        // make it into a code to send it to user via email
        $string = array('id'=>$user_id, 'code'=>$code);
        // create the activation code and activation status
        update_user_meta($user_id, 'is_registered', 0);
        update_user_meta($user_id, 'activation_code', $code);
        // create the url
        $url = get_site_url(). '/?email_verification=' .base64_encode( serialize($string));
        // basically we will edit here to make this nicer
        $html = 'Для активации учетной записи перейдите по ссылке <br/><br/> <a href="'.$url.'">'.$url.'</a>';
        // send an email out to user
        $send_email = BonamiHelper::send_email( $user_info->user_email, __('Email регистрация') , $html);
        if(!$send_email)
        {
            $this->_validation_error('При отправке письма для регистрации произошла ошибка');
        }
    }
    public function bonami_register_get_email_verification()
    {
        if(isset($_GET['email_verification'])){
//            return $this->_signon(9);
            $data = unserialize(base64_decode($_GET['email_verification']));
            $user_id = $data['id'];
            $code = get_user_meta($user_id, 'activation_code', true);
            // verify whether the code given is the same as ours
            if($code == $data['code']){
                // update the user meta
                update_user_meta($user_id, 'is_registered', 1);
                $this->_signon($user_id);
            }
        }
    }
    private function _signon($user_id)
    {
        $userdata = get_userdata($user_id);
        wp_set_current_user( $user_id, $userdata->user_login );
        wp_set_auth_cookie( $user_id );
        do_action( 'wp_login', $userdata->user_login, $userdata );        
    }
    
    private function _get_user_change_data()
    {
        $email = $this->_check_email_input($_POST['user_email']);
        $nick = $name = $this->_check_first_name($_POST['first_name']);
        return array(
            'user_email' => $email,
            'first_name' => $name,
            'nickname' => $nick,
        ); 
    }

    public function user_change_data()
    {
        $user_id = get_current_user_id();
        $user_data = $this->_get_user_change_data();
        $user_data['ID'] = $user_id;
        wp_update_user($user_data);
        $user_profile_data = $this->_get_user_profile_data();
        foreach($user_profile_data as $key=>$value)
        {
            update_user_meta( $user_id, $key, $value);
        }
        wp_die(json_encode(array('result'=>1, 'title'=>'Обновление профиля пользователя', 'message'=>'Профиль пользователя обновлен.')));
    }
    private function _get_servisces()
    {
        $slugs = array();
        foreach(BonamiHelper::get_services_ids() as $service_id)
        {
            $slugs[] = get_field('service_slug', $service_id);
        }
        return $slugs;
    }
    public function change_password($user=NULL, $_newpassword=NULL, $check_password = TRUE) {
        $_newpassword = isset($_newpassword)?$_newpassword:$_POST['newpassword'];
        $newpassword = $this->_check_password($_newpassword);
        if(!isset($user))
        {
            $user = wp_get_current_user();
        }
        if ($check_password AND !wp_check_password($_POST['currentpassword'], $user->user_pass, $user->ID)) 
        {
            wp_die(json_encode(array('result'=>0, 'title'=>'Изменение пароля', 'message'=>'Старый неправильный')));
        }
        wp_set_password($newpassword, $user->ID);
        wp_update_user(array(
            'ID' => $user->ID,
            'user_pass' => $newpassword
        ));
        wp_die(json_encode(array('result'=>1, 'title'=>'Изменение пароля', 'message'=>'Пароль изменен.')));
    }
    public function change_profile()
    {
        $user_id = get_current_user_id();
        $checked = (int) $_POST['checked'];
        $slug = $_POST['slug'];
        if(!$this->_service_exist($slug))
        {
            $this->_validation_error('Услуги не существует', $slug);
        }
        if($checked)
        {
            update_user_meta( $user_id, $slug, '1');
        }
        else
        {
            delete_user_meta( $user_id, $slug);
        }
        wp_die(json_encode(array('result'=>1, 'title'=>'Изменение услуги', 'message'=>'Услуга изменена')));
    }
    private function _service_exist($slug)
    {
        foreach(BonamiHelper::get_services_ids() as $service_id)
        {
            if($slug == get_field('service_slug', $service_id))
            {
                return TRUE;
            }
        }
        return FALSE;
    }
    public function get_user_role()
    {
        $user_id = get_current_user_id();
        if($user = get_userdata( $user_id ))
        {
            $user_roles = $user->roles;
            if(in_array('editor', $user_roles))
            {
                return 'manager';
            }
            if(in_array('subscriber', $user_roles))
            {
                return 'user';
            }
            return !empty($user_roles[0])?$user_roles[0]:'';
        }
        return '';
    }
    public function mt_get_flt_users($flt)
    {
        return get_users([
            'meta_key' => 'surname',
            'meta_value' => $flt,
            'fields' => 'ID'
        ]);
        
    }
    public function mt_det_users()
    {
//            'role' => 'subscriber',
        $users = get_users([
            'meta_key' => 'is_registered',
            'meta_value' => '1',
        ]);
        $result = array();
        foreach ($users as $user)
        {
            $result[$user->ID] = array(
                'user_id'=>$user->ID,
                'user_name' => $this->get_user_full_name($user->ID),
                'email'=> $user->user_email,
                'phone'=> get_user_meta($user->ID, 'phone', TRUE),
                'overdraft'=> get_user_meta($user->ID, 'user_overdraft', TRUE),
                'user_balans'=> BonamiHelper::get_user_balanse($user->ID),
                'user_brones_count'=> BonamiHelper::get_user_brones_count($user->ID),
            );
        }
        return $result;
    }
    public function get_user_full_name($user_d)
    {
        return get_user_meta($user_d, 'surname', TRUE)
                .' '.get_user_meta($user_d, 'first_name', TRUE)
                .' '.get_user_meta($user_d, 'second_name', TRUE);
    }
    public function update_user($data)
    {
        $user_id = $data['ID'];
        $user_metas = $data['user_metas'];
        unset($data['user_metas']);
        foreach ($user_metas as $key=>$value)
        {
            update_user_meta( $user_id, $key, $value);
        }
        return wp_update_user($data);
    }
}

new UserRegistratiron;
