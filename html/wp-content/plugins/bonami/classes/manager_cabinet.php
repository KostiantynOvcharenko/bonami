<?php

class ManagerCabinet
{
    private $_session_flt_key = 'bonami_mg_flt_brones';
    
    public function __construct() {
        
        add_action( 'wp_ajax_remove_user_brone', array($this, 'remove_user_brone'));
        add_action( 'wp_ajax_nopriv_remove_user_brone', array($this, 'remove_user_brone'));
        
        add_action( 'wp_ajax_mk_add_user_brone', array($this, 'add_user_brone'));
        add_action( 'wp_ajax_nopriv_mk_add_user_brone', array($this, 'add_user_brone'));
        
        add_action( 'wp_ajax_mk_remove_user_brones', array($this, 'remove_user_brones'));
        add_action( 'wp_ajax_nopriv_mk_remove_user_brones', array($this, 'remove_user_brones'));
        
        add_action( 'wp_ajax_mk_move_user_brones', array($this, 'move_user_brones'));
        add_action( 'wp_ajax_nopriv_mk_move_user_brones', array($this, 'move_user_brones'));
    }
    public function get_flt_data()
    {
        if(isset($_GET['action']) AND $_GET['action']=='dt_filter')
        {
            if(!empty($_GET['flt_date']))
            {
                $flt_date = substr($_GET['flt_date'], 0,10);
            }
            else
            {
                $flt_date = date('Y-m-d');
            }
            $data = array(
                'flt_date' => $flt_date,
                'time_period' => !empty($_GET['time_period'])?$_GET['time_period']:'',
                'services' => array(
                    'haircut' => !empty(!empty($_GET['haircut']))?1:0,
                    'manicure' => !empty(!empty($_GET['manicure']))?1:0,
                    'pedicure' => !empty(!empty($_GET['pedicure']))?1:0,
                    'visage' => !empty(!empty($_GET['visage']))?1:0,
                    'brovist' => !empty(!empty($_GET['brovist']))?1:0,
                    'cosmetologe' => !empty(!empty($_GET['cosmetologe']))?1:0,
                )
            );
            $_SESSION[$this->_session_flt_key] = $data;
        }
        if(!isset($_SESSION[$this->_session_flt_key]))
        {
            $_SESSION[$this->_session_flt_key] = array(
                'flt_date' => date('Y-m-d'),
                'time_period' => '',
                'services' => array(
                    'haircut' => 1,
                    'manicure' => 1,
                    'pedicure' => 1,
                    'visage' => 1,
                    'brovist' => 1,
                    'cosmetologe' => 1,
                )
            );
        }
        if(!empty($_SESSION[$this->_session_flt_key]['services']))
        {
            $fall_services = true;
            foreach ($_SESSION[$this->_session_flt_key]['services'] as $servise)
            {
                if(!$servise)
                {
                    $fall_services = FALSE;
                    break;
                }
            }
            if($fall_services)
            {
                $this->_session_flt_key['services'] = array();
            }
            return $_SESSION[$this->_session_flt_key];
        }
        var_dump($_SESSION[$this->_session_flt_key]);
    }
    public function set_flt_time_period($time_period)
    {
        $_SESSION[$this->_session_flt_key]['time_period'] = $time_period;
    }
    public function set_flt_services($servise)
    {
        $_SESSION[$this->_session_flt_key]['services'] = array($servise=>'1');
    }
    public function set_flt_date($date)
    {
        $_SESSION[$this->_session_flt_key]['flt_date'] = $date;
    }
    public function flt_date()
    {
        $flt_data = $this->get_flt_data();
        return $flt_data['flt_date'];
    }
    public function flt_servise()
    {
        $flt_data = $this->get_flt_data();
        $services = array();
        foreach ($flt_data['services'] as $key=>$value)
        {
            if($value)
            {
                $services[] = BonamiHelper::get_services_title($key);
            }
        }
        return $services;
    }
    
    public function get_flt_period_data()
    {
        var_dump($this->get_flt_data());
        exit;
        if($flt_data = $this->get_flt_data())
        {
            $Services = new Services;
            $service_price_titles = $Services->get_service_price_titles();
            if(isset($service_price_titles[$flt_data['time_period']]))
            {
                return array(
                    'id'=> $flt_data['time_period'],
                    'title'=> $service_price_titles[$flt_data['time_period']],
                );
            }
        }
        return array();
    }

    public function flt_date_str()
    {
        $flt_data = $this->get_flt_data();
        $date = $flt_data['flt_date'];
        if($date === date('Y-m-d'))
        {
            return 'сегодня';
        }
        list($y, $m, $d) = explode('-', $date);
        $services = $this->_get_list_services($flt_data['services']);
        return $d.' '.$this->_get_str_month($m).' '.$services;
    }
    private function _get_str_month($m)
    {
        $str_month = array('','января','февраля','марта','апреля','мая','июня'
            ,'июля','августа','сентября','октября','ноября','декабря');
        return $str_month[(int)$m];
    }
    private function _get_list_services($srvs)
    {
        $services = array();
        foreach(BonamiHelper::get_services_ids() as $service_id)
        {
            if(!empty($srvs[get_field('service_slug', $service_id)]))
            {
                $services[] = get_the_title($service_id);
            }
        }
        return !empty($services)?'('. implode(', ', $services).')':'';
    }
    
    public function remove_user_brone()
    {
        $user_id = (int)$_POST['user_id'];
        $Brones = new Brones;
        $flt_data = $this->get_flt_data();
        if($Brones->remove_user_brone($user_id, $flt_data['flt_date']))
        {
            wp_die(json_encode(array('result'=>1, 'title'=>'Удаление бронирований', 'message'=>'Бронирование удалены')));
        }
        wp_die(json_encode(array('result'=>1, 'title'=>'Удаление бронирований', 'message'=>'Ошибка удаление бронирований')));

    }
    
    public function add_user_brone()
    {
        $res = $this->_add_user_brone();
        if(empty($res))
        {
            $flt_date = $this->flt_date();
            $servise = $_POST['servise'];
            $time_period = $_POST['time_period_input'];
            $href = "/manager_cabinet/?action=dt_filter&flt_date=$flt_date&time_period=$time_period&$servise=1";
            wp_die(json_encode(array('result'=>1, 'title'=>'Добваить бронирование', 'message'=>'Брони успешно добавлены', 'href'=>$href)));
        }
        wp_die(json_encode(array('result'=>0, 'title'=>'Добваить бронирование', 'message'=> implode('<br>', $res),
            
            )));
    }
    private function _add_user_brone()
    {
        $user_id = (int)$_POST['user_id'];
        $debet = !empty($_POST['debet'])?TRUE:FALSE;
        $time_period = $_POST['time_period_input'];
        $time_period_parts = $_POST['time_period_part'];
        $servise = $_POST['servise'];
        if(empty($servise))
        {
            wp_die(json_encode(array('result'=>0, 'title'=>'Добваить бронирования', 'message'=>'Не выбрана услуга')));
        }
        $flt_data = $this->get_flt_data();
        $flt_date = $flt_data['flt_date'];
        list($y,$m,$d) = explode('-', $flt_date);
        $m = (int)$m-1;
        $date = $y.'_'.$m.'_'.(int)$d;
        $Services = new Services();
        $periods = $Services->get_min_period_keys();
        foreach ($time_period_parts as $time_period_part)
        {
            $data[$time_period_part] = array(
                    'user_id' => $user_id,
                    'date' => $date,
                    'servise' => $servise,
                    'period' => $time_period,
                    'start' => $periods[$time_period_part]['time_start'],
                    'end' => $periods[$time_period_part]['time_end'],
                    'brone_id' => 'bron_'.str_replace('-', '_', $date).'_'.$servise.'_'.$time_period.'_'.$time_period_part,
                    'comment' => 'Добавлено через форму менеджера',
                    'owner' => wp_get_current_user()->ID
            );
        }
        $Brones = new Brones;
        $res = array();
        foreach ($Brones->add_mt_brones($data, $debet) as $id=>$row)
        {
            if(!empty($row))
            {
                $res[] = $periods[$id]['title'].' '.$row;
            }
        }
        return $res;
    }
    
    public function remove_user_brones()
    {
        $res = $this->_remove_user_brones();
        if(empty($res))
        {
            wp_die(json_encode(array('result'=>1, 'title'=>'Удаление бронирования', 'message'=>'Брони успешно удалены')));
        }
        wp_die(json_encode(array('result'=>0, 'title'=>'Удаление бронирования', 'message'=> implode('<br>', $res))));
        
    }
    private function _remove_user_brones()
    {
        $user_id = (int)$_POST['user_id'];
        $deleted_data = $_POST['time_period_part'];
        $data = array();
        foreach ($deleted_data as $servise => $servise_data)
        {
            foreach ($servise_data as $period => $period_date)
            {
                foreach (array_keys($period_date) as $time_period_part)
                {
                    
                    $periods = $this->_get_periods($period);
                    $data[$servise.'_'.$period.'_'.$time_period_part] = array(
                        'user_id' => $user_id,
                        'servise' => $servise,
                        'period' => $period,
                        'start' => $periods[$time_period_part]['time_start'],
                        'end' => $periods[$time_period_part]['time_end'],
                    );
                }
            }
        }
        $Brones = new Brones;
        $res = array();
        foreach ($Brones->remove_mt_brones($data) as $id=>$row)
        {
            if(!empty($row))
            {
                $res[$id] = $row;
            }
        }
        return $res;
    }
    private function _get_periods($period)
    {
        $Services = new Services;
        
        if($period === $Services->get_vip_key())
        {
            return $Services->vip_period_keys();
        }
        
        return $Services->get_min_period_keys($this->flt_date(),$period);
    }
    public function move_user_brones()
    {
        $time_period_part = $_POST['time_period_part'];
        $_POST['time_period_part'] = array($_POST['time_period_part_add']);
        $res = $this->_add_user_brone();
        if(!empty($res))
        {
            wp_die(json_encode(array('result'=>0, 'title'=>'Перенос бронирования', 'message'=> implode('<br>', $res))));
        }
        $_POST['time_period_part'] = $time_period_part;
        $this->set_flt_date($flt_date);
        $this->_remove_user_brones();
        $this->set_flt_date($date);
        $date = $_POST['date'];
        $servise = $_POST['servise'];
        $time_period = $_POST['time_period_input'];
        $href = "/manager_cabinet/?action=dt_filter&flt_date=$date&time_period=$time_period&$servise=1";
        wp_die(json_encode(array('result'=>1, 'title'=>'Перенос бронирования', 'message'=>'Бронь успешно перенесена', 'href'=>$href)));
    }
}

new ManagerCabinet;