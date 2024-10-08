<?php

/**
 * The Services class
 *
 * @package WordPress
 * @subpackage Bonami
 * @since Bonami 1.0
 */

// Brones
include_once BONAMI_PATH.'/classes/brones.php';


class Services {
    
    private $_price_parent_key = 'cervice_price';
    private $_vip_key = 'month_1';
    private $_full_day_key = 'time_9-22';
    private $_min_period_value = 60;
    private $_start_work_at = 9;
    private $_end_work_at = 22;
    private $_active_conv_time = 'hour_10';
    private $_db;
    private $_Brones;
    private $_places = array();
    private $_twist = array('visage','brovist');

    public function __construct() {
        global $wpdb;
        $this->_db = $wpdb;
        $this->_Brones = new Brones;
        add_action('init', array($this, 'create_bonami_services'));
        
        add_action( 'wp_ajax_bonami_get_convint_times', array($this, 'get_convint_times'));
        add_action( 'wp_ajax_nopriv_bonami_get_convint_times', array($this, 'get_convint_times'));
        
        add_action( 'wp_ajax_bonami_get_month_convint_times', array($this, 'get_month_convint_times'));
        add_action( 'wp_ajax_nopriv_bonami_get_month_convint_times', array($this, 'get_month_convint_times'));
        
        add_action( 'wp_ajax_bonami_get_periods_list', array($this, 'get_periods_list'));
        add_action( 'wp_ajax_nopriv_bonami_get_periods_list', array($this, 'get_periods_list'));
    }

    public function get_vip_key()
    {
        return $this->_vip_key;
    }

    public function create_bonami_services() {
        register_post_type('BonamiService', array(
                    'labels' => array(
                    'name' => __('Услуги'),
                    'singular_name' => __('Услуги')
                ),
                'public' => true,
                'has_archive' => true,
            )
        );
    }
    public function get_start_time($date=NULL)
    {
        return $this->_get_start_work_time($date);
    }
    public function get_end_time($date=NULL)
    {
        return $this->_get_end_work_time($date);
    }

    private function _get_start_work_time($_date=NULL, $_start_work_at=NULL)
    {
        $start_work_at = $_start_work_at?$_start_work_at:$this->_start_work_at;
        $date = $_date?$_date:date('Y-m-d');
        return strtotime($date) + ($start_work_at*60*60);
    }
    private function _get_end_work_time($_date=NULL, $_end_work_at=NULL)
    {
        $end_work_at = $_end_work_at?$_end_work_at:$this->_end_work_at;
        $date = $_date?$_date:date('Y-m-d');
        return strtotime($date) + ($end_work_at*60*60);
    }

    public function get_periods_list()
    {
        $servise_id = $_POST['servise_id'];
        $price_period_id = $_POST['price_period_id'];
        $day = (int)$_POST['day'];
        $month = (int)$_POST['month']+1;
        $year = (int)$_POST['year'];
        $date = $year.'-'.$month.'-'.$day;
        $format_date = $this->_date_format($date);
        $_periods_list = $this->_pget_periods_list($date, $format_date, $servise_id, $price_period_id);
        wp_die(json_encode($_periods_list));
    }
    public function _pget_periods_list($date, $format_date, $servise_id, $price_period_id)
    {
        $user_id = wp_get_current_user()->ID;
        $brones = $this->_Brones->get_user_brones_by_date($user_id,$format_date, $servise_id, $price_period_id);
        return $this->_get_price_periods($price_period_id,$date, $brones, $servise_id);
    }
    private function _date_format($date)
    {
        list($y,$m,$d) = explode('-', $date);
        $_m = (int)$m-1;
        $_d = (int)$d;
        return $y.'_'.$_m.'_'.$_d;
    }
    public function get_month_convint_times()
    {
        if( !session_id())
        {
            session_start();
        }
        $user_id = wp_get_current_user()->ID;
        if(isset($_POST['init_session']))
        {
            $date_start = date('Y-m-d');
        }
        else
        {
            $date_start = isset($_SESSION['convint_times_date_start'])?
                    $_SESSION['convint_times_date_start']:date('Y-m-d');
        }
        
        $convint_times = array();
        $price_periods = array();
        $days = 7;
        for($i=0;$i<$days;$i++)
        {
            $date = date("Y-m-d", strtotime("+$i day", strtotime($date_start)));
            foreach (BonamiHelper::get_services_ids() as $service_id)
            {
                $format_date = $this->_date_format($date);
                $slug = get_field('service_slug', $service_id);
                if(get_user_meta($user_id, $slug, TRUE))
                {
                    $format_date = $this->_date_format($date);
                    $convint_time = $this->_get_convint_times($service_id,$format_date);
                    $convint_times[$format_date.'_'.$slug] = $convint_time;
                    foreach (array_keys($convint_time) as $price_period_id)
                    {
                        $price_periods[$format_date][$slug][$price_period_id] = 
                            $this->_pget_periods_list($date, $format_date, $slug, $price_period_id);
                    }
                }
            }
            
        }
        $date = date("Y-m-d", strtotime("+1 day", strtotime($date)));
        $_SESSION['convint_times_date_start'] = $date;
        wp_die(json_encode(array(
            'convint_times'=>$convint_times,
            'price_periods'=>$price_periods,
        )));
    }
    public function get_convint_times()
    {
        $service_id = (int)$_POST['service_id'];
        $date = $_POST['date'];
        $convint_times = $this->_get_convint_times($service_id,$date);
        wp_die(json_encode($convint_times));
        
    }
    private function _get_convint_times($service_id,$date)
    {
        $post = get_post($service_id);
        $get_service_price_titles = $this->get_service_price_titles();
        $my_brones = $this->_get_my_brones_date_services($post->post_name, $date);
        $convint_times = array();
        foreach (get_field('cervice_price', $post->ID) as $key=>$price)
        {
            if($price AND isset($get_service_price_titles[$key]) AND $key !== $this->_vip_key)
            {
                $class = 'enabled';
                $active = '';
                if(!empty($my_brones))
                {
                    $class = $my_brones === $key?'my_checked':'deprecated';
                    $active = $my_brones === $key?'active':'';
                }
                elseif($key === $this->_active_conv_time)
                {
                    $active = 'active';
                }
                $convint_times[$key] = array(
                    'title'=>$get_service_price_titles[$key],
                    'class' => $class,
                    'active' => $active,
                );
            }
        }
        return $convint_times;
    }

    public function get_period_seconds()
    {
        $price_periods = array(
            'hour_05' => 30*60,
            'hour_10' => 60*60,
            'time_9-18' => 60*60*9,
            'time_13-22' => 60*60*9,
            'time_9-22' => 60*60*18,
            'month_1' => 0,
        );
        wp_die(json_encode($price_periods));
    }
    
    private function _get_services_query()
    {
        $query_1 = 'SELECT `ID` FROM `wp_posts`'
                . ' WHERE `post_excerpt` = "'. $this->_price_parent_key.'"';
        $query = 'SELECT * FROM `wp_posts`'
                . ' WHERE `post_parent` IN ('.$query_1.')';
        return $query;
    }
    public function get_service_price_titles()
    {
        $service_price_titles = array();
        $query = $this->_get_services_query();
        foreach ($this->_db->get_results($query, ARRAY_A) as $row)
        {
            $service_price_titles[$row['post_excerpt']] = $row['post_title'];
        }
        return $service_price_titles;
    }
    private function _get_price_periods($price_period_id, $date, $my_brones, $servise_id)
    {

        switch ($price_period_id)
        {
            case 'time_9-22':
                $time_start =  $this->_get_start_work_time($date);
                $time_end = $this->_get_end_work_time($date);
                $class = 'enabled';
                if(!empty($my_brones))
                {
                    $class = 'my_checked';
                }
                elseif($this->_is_deprecated_period($time_start, $time_end, $servise_id))
                {
                    $class = 'deprecated';
                }
                return array(array(
                    'title' => '9:00-22:00',
                    'time_start' => $time_start,
                    'time_end' => $time_end,
                    'class' => $class,
                    'active' => ''
                ));
            case 'time_13-22':
                $time_start =  $this->_get_start_work_time($date,13);
                $time_end = $this->_get_end_work_time($date);
                $class = 'enabled';
                if(!empty($my_brones))
                {
                    $class = 'my_checked';
                }
                elseif($this->_is_deprecated_period($time_start, $time_end, $servise_id))
                {
                    $class = 'deprecated';
                }
                return array(array(
                    'title' => '13:00-22:00',
                    'time_start' => $time_start,
                    'time_end' => $time_end,
                    'class' => $class,
                    'active' => ''
                ));
            case 'time_9-18':
                $time_start =  $this->_get_start_work_time($date);
                $time_end = $this->_get_end_work_time($date,18);
                $class = 'enabled';
                if(!empty($my_brones))
                {
                    $class = 'my_checked';
                }
                elseif($this->_is_deprecated_period($time_start, $time_end, $servise_id))
                {
                    $class = 'deprecated';
                }
                return array(array(
                    'title' => '09:00-18:00',
                    'time_start' => $time_start,
                    'time_end' => $time_end,
                    'class' => $class,
                    'active' => ''
                ));
            case 'hour_10':
                return $this->_get_periods_list(60, $date, $my_brones, $servise_id);
            case 'hour_05':
                return $this->_get_periods_list(30, $date, $my_brones, $servise_id);
        }
    }
    public function is_deprecated_day_for_servise($date, $servise_id)
    {
        $period_list = $this->_get_periods_list(30, $date, array(), $servise_id);
        foreach ($period_list as $period)
        {
            if($period['class'] === 'enabled')
            {
                return FALSE;
            }
        }
        return TRUE;
    }

    private function _get_periods_list($time_minutes_interval, $date, $my_brones, $servise_id)
    {
        $t = $time_minutes_interval*60;
        $start_time = $this->_get_start_work_time($date);
        $end_time = $this->_get_end_work_time($date);
        for($i=$start_time;$i<$end_time;$i+=$t)
        {
            $str_1 = date('H',$i).':'.date('i',$i);
            $str_2 = date('H',$i+$t).':'.date('i',$i+$t);
            $time_end = $i+$t;
            $class = 'enabled';
            if(in_array($i, $my_brones))
            {
                $class = 'my_checked';
            }
            elseif($servise_id AND $this->_is_deprecated_period($i, $time_end, $servise_id))
            {
                $class = 'deprecated';
            }
            $periods[] = array(
                'title' => $str_1.'-'.$str_2,
                'time_start' => $i,
                'time_end' => $time_end,
                'class' => $class,
                'active' => ''
            );
        }
        return $periods;
    }
    public function build_servise_array($servise_id)
    {
        if(in_array($servise_id, $this->_twist))
        {
            $servise_ids = $this->_twist;
        }
        else if($servise_id == $this->_vip_key)
        {
            $servise_ids = array($this->_full_day_key);
        }
        return $servise_ids;
    }

    public function is_deprecated_period($time_start, $time_end, $servise_id)
    {
        return $this->_is_deprecated_period($time_start, $time_end, $servise_id);
    }

    private function _is_deprecated_period($time_start, $time_end, $servise_id)
    {
        $servise_ids = $this->build_servise_array($servise_id);
        $count_brones = $this->_Brones->get_count_brones($time_start, $time_end, $servise_ids);
        $places = $this->_get_places($servise_id);
        return (int)$places <= (int)$count_brones;
    }
    public function get_places($servise_id)
    {
        return $this->_get_places($servise_id);
    }
    private function _get_places($servise_id)
    {
        if(empty($this->_places))
        {
            $services = BonamiHelper::get_services_ids();
            foreach($services as $id)
            {
                $this->_places[get_field('service_slug', $id)] = get_field('places_count', $id);
            }
        }
        return isset($this->_places[$servise_id])?$this->_places[$servise_id]:0;
    }

    public function get_service_price($servise, $period)
    {
        $query = 'SELECT `ID` FROM wp_posts'
                . ' WHERE `post_type` = "bonamiservice"'
                . ' AND `post_name` = "'.$servise.'" ';
        $id = $this->_db->get_var($query);
        $prices = get_field('cervice_price',$id);
        return isset($prices[$period])?$prices[$period]:0;
    }
    private function _get_my_brones_date_services($service_id, $date)
    {
        $query = 'SELECT DISTINCT `period` FROM `wp_brones` '
                . ' WHERE `user_id` = '.wp_get_current_user()->ID
                . ' AND `date` = "'.$date.'"'
                . ' AND `servise` = "'.$service_id.'"';
        return $this->_db->get_var($query);
    }
    private function _get_flt_time_period()
    {
        $ManagerCabinet = new ManagerCabinet;
        $flt_data = $ManagerCabinet->get_flt_data();
        return $flt_data['time_period'];
    }
    private function _get_flt_date()
    {
        $ManagerCabinet = new ManagerCabinet;
        $flt_data = $ManagerCabinet->get_flt_data();
        return $flt_data['flt_date'];
    }

    public function vip_period_keys($date=NULL)
    {
        if(empty($date))
        {
            $date = $this->_get_flt_date();
        }
        list($y,$m,$d) = explode('-', $date);
        $last_d = (int) cal_days_in_month(CAL_GREGORIAN, $m, $y);
        $vip_key = $this->get_vip_key();
        $first_day = $this->get_min_period_keys($y.'-'.$m.'-01', $vip_key);
        $last_day =  $this->get_min_period_keys($y.'-'.$m.'-'.$last_d, $vip_key);
        return array(0=>array(
            'time_start' => $first_day[0]['time_start'],
            'time_end' => $last_day[0]['time_start'],
        ));
    }
    public function get_min_period_keys($date=NULL, $time_period=NULL)
    {
        if(empty($date))
        {
            $date = $this->_get_flt_date();
        }
        $t = $this->_min_period_value*60;
        $start_time = $this->_get_start_work_time($date);
        $end_time = $this->_get_end_work_time($date);
        $str2 = false;
        $time_period = isset($time_period)?$time_period:$this->_get_flt_time_period();
        if($time_period)
        {
            switch ($time_period)
            {
                case 'hour_05':
                    $t = 30*60;
                break;
            case 'time_13-22':
                $start_time =  $this->_get_start_work_time($date,13);
                $t = 9*60*60;
                $str2 = TRUE;
                break;
            case 'time_9-18':
                $end_time = $this->_get_end_work_time($date,18);
                $t = 9*60*60;
                $str2 = TRUE;
                    break;
            case 'time_9-22':
            case 'month_1':
                $t = 13*60*60;
                $str2 = TRUE;
                break;
            }
        }
        for($i=$start_time;$i<$end_time;$i+=$t)
        {
            $str_1 = date('H',$i).':'.date('i',$i);
            $str_2 = $str2?'-'.date('H',$i+$t).':'.date('i',$i+$t):'';
            $time_end = $i+$t;
            $periods[] = array(
                'title' => $str_1.$str_2,
                'time_period' => $time_period,
                'time_start' => $i,
                'time_end' => $time_end,
            );
        }
        return $periods;
    }
    public function get_servise_slugs()
    {
        $slugs = array();
        foreach (BonamiHelper::get_services_ids() as $servise_id)
        {
            $slugs[$servise_id] = get_field('service_slug', $servise_id);;
        }
        return $slugs;
    }
}

new Services;
