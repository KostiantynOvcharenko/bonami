<?php

/**
 * The static helper class
 *
 * @package WordPress
 * @subpackage Bonami
 * @since Bonami 1.0
**/

class BonamiHelper{
    
    public static function phone_link()
    {
        $str_phone = get_option('bonami_contact_phone');
        $patern = '/\((\d{2})\)\s?(\d{7})$/';
        if(preg_match($patern, $str_phone, $match))
        {
            return 'tel:+375'.$match[1].$match[2];
        }
        return '';
    }
    public static function email_link()
    {
        $str_phone = get_option('bonami_contact_email');
        return 'mailto:'.$str_phone;
    }
    public static function send_email($to, $subject, $message)
    {
        $from = get_option('bonami_contact_email'); // Set whatever you want like mail@yourdomain.com
        $sender = 'From: '.$from."\r\n";
        $headers[] = 'MIME-Version: 1.0' . "\r\n";
        $headers[] = 'Content-type: text/html;' . "\r\n";
        $headers[] = "X-Mailer: PHP \r\n";
        $headers[] = $sender;
        $send = wp_mail( $to, $subject, $message, $headers );
        return $send;
    }
    
    public static function user_role()
    {
        $UserRegistratiron = new UserRegistratiron;
        return $UserRegistratiron->get_user_role();
    }
    public static function get_link($class='', $link='cabinet')
    {
        $user_role = self::user_role();
        if(self::is_user_activated() OR $user_role === 'administrator')
        {
            switch ($user_role)
            {
                case 'manager':
                case 'administrator':
                    return 'class="'.$class.'" href="'.site_url().'/manager_cabinet" ';
                case 'user':
                    return 'class="'.$class.'" href="'.site_url().'/'.$link.'" ';
            }
            return 'class="'.$class.'" href="'.site_url().'/';
        }
        return 'class="'.$class.' im-popup-link" data-id="#login" ';
    }
    public static function is_user_activated($user_id=NULL)
    {
        
        if(!$user_id)
        {
            $user_id = is_user_logged_in()?wp_get_current_user()->ID:0;
        }
        return get_user_meta($user_id, 'is_registered', true);
    }
    public static function get_services_ids()
    {
        return get_posts(array(  
            'post_type' => 'BonamiService',
            'posts_per_page' => 6, 
            'orderby'  => 'meta_value',
            'meta_key' => 'ordering',
            'order' => 'ASC', 
            'fields' => 'ids', 
        ));
   }
    public static function get_services_title($servise_slug)
    {
        foreach(self::get_services_ids() as $service_id)
        {
            if(get_field('service_slug', $service_id) === $servise_slug)
            {
                return get_the_title($service_id);
            }
        }
        return '';
    }
    public static function get_testimonial_ids()
    {
        return get_posts(array(  
            'post_type' => 'BonamiTestimonial',
            'posts_per_page' => 6, 
            'orderby' => 'ID', 
            'order' => 'DESC', 
            'fields' => 'ids',
            'meta_key'	=> 'testimonial_published',
            'meta_value'=> '1'            
        ));
   }
    public static function get_user_overdraft($user_id)
    {
        $user_overdraft = get_field('user_overdraft', 'user_'.$user_id);
        if(!empty($user_overdraft))
        {
            return $user_overdraft;
        }
        return get_option('bonami_overdraft');
    }
    public static function get_user_balanse($user_id)
    {
        $UserBalanse = new UserBalanse;
        $balance = $UserBalanse->get_user_balans($user_id);
        return $balance?$balance:'0';
    }
    public static function get_user_balanse_transactions($user_id)
    {
        $UserBalanse = new UserBalanse;
        $REQUEST_URI = explode('/', $_SERVER['REQUEST_URI']);
        $page_param = array_pop($REQUEST_URI);
        $page = 1;
        if(!empty($page) AND preg_match('/^page_([0-9a-z]+)$/', $page_param, $match))
        {
            $page = $match[1];
        }
        return $UserBalanse->get_user_balanse_transactions($user_id, $page);
    }
    public static function get_user_balanse_transaction_pages_count($user_id)
    {
        $UserBalanse = new UserBalanse;
        return $UserBalanse->get_user_balanse_transaction_pages_count($user_id);
    }
    public static function get_page_slug()
    {
        if($slug = basename(get_permalink()))
        {
            return $slug;
        }
        $uri = explode('/', $_SERVER['REQUEST_URI']);
        return isset($uri[1])?$uri[1]:'';
    }
    public static function get_gallery_images()
    {
        $Gallery = new Gallery;
        $content = $Gallery->get_images();
        if(preg_match_all('/src="([^"]+)/', $content, $maches))
        {
            return $maches[1];
        }
        return array();
    }
    public static function get_price($servise, $period)
    {
        $Services = new Services;
        return $Services->get_service_price($servise, $period);
    }
    public static function get_calendar_days($mk=NULL)
    {
        $Calendar = new Calendar;
        return $Calendar->get_calendar_days(date('Y-m-d'), $mk);
    }
    public static function get_my_brones()
    {
        $Brones = new Brones;
        return $Brones->get_my_brones(date('Y-m-d'));
    }
    public static function mt_table()
    {
        $Brones = new Brones;
        return $Brones->get_mt_table();
    }
    public static function get_min_period_keys()
    {
        $Services = new Services;
        return $Services->get_min_period_keys();
    }
    public static function get_flt_data()
    {
        $ManagerCabinet = new ManagerCabinet;
        return $ManagerCabinet->get_flt_data();
    }
    public static function get_user_brones_count($user_id)
    {
        $Brones = new Brones;
        return $Brones->get_user_brones_count($user_id);

    }
    
}
