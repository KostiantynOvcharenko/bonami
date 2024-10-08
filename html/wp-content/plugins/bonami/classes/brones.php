<?php

/**
 * The Bron class
 *
 * @package WordPress
 * @subpackage Bonami
 * @since Bonami 1.0
 */
include_once BONAMI_PATH . '/classes/bonami_table.php';
include_once BONAMI_PATH . '/classes/services.php';

class Brones extends BonamiTable {

    private $_deprecated_days_count = 3;
    private $_vip_key = 'month_1';

    public function __construct() {
        parent::__construct('brones', 'id');

        add_action('wp_ajax_bonami_get_my_brones_dates', array($this, 'get_my_brones_dates'));
        add_action('wp_ajax_nopriv_bonami_get_my_brones_dates', array($this, 'get_my_brones_dates'));

        add_action('wp_ajax_bonami_save_brones', array($this, 'save_brones'));
        add_action('wp_ajax_nopriv_bonami_save_brones', array($this, 'save_brones'));

        add_action('wp_ajax_bonami_save_vip_brones', array($this, 'save_vip_brones'));
        add_action('wp_ajax_nopriv_bonami_save_vip_brones', array($this, 'save_vip_brones'));

        add_action('wp_ajax_bonami_is_deprecated_date', array($this, 'is_deprecated_date'));
        add_action('wp_ajax_nopriv_bonami_is_deprecated_date', array($this, 'is_deprecated_date'));

        add_action('wp_ajax_bonami_get_day_brones', array($this, 'get_day_brones'));
        add_action('wp_ajax_nopriv_bonami_get_day_brones', array($this, 'get_day_brones'));

        add_action('wp_ajax_bonami_get_vip_brones', array($this, 'get_vip_brones'));
        add_action('wp_ajax_nopriv_bonami_get_vip_brones', array($this, 'get_vip_brones'));
    }

    protected function _get_new_fields() {
        return array(
            'user_id' => array('name' => 'Пользователь', 'format' => '%d'),
            'date' => array('name' => 'Дата', 'format' => '%s'),
            'servise' => array('name' => 'Сервис', 'format' => '%s'),
            'servise' => array('name' => 'Сервис', 'format' => '%s'),
            'period' => array('name' => 'Пертод', 'format' => '%s'),
            'start' => array('name' => 'Начало интервала', 'format' => '%d'),
            'end' => array('name' => 'Конец интервала', 'format' => '%d'),
            'brone_id' => array('name' => 'Id брони на форме бронирования', 'format' => '%s'),
            'comment' => array('name' => 'Коментарий', 'format' => '%s'),
            'owner' => array('name' => 'Вдаделец', 'format' => '%d'),
        );
    }

    public function is_deprecated_date() {
        $Services = new Services;
        $deprecated_dates = array();
        $servise_ids = BonamiHelper::get_services_ids();
        for ($i = 0; $i < $this->_deprecated_days_count; $i++) {
            $date = date("Y-m-d", strtotime("+$i day", strtotime(date('Y-m-d'))));
            foreach ($servise_ids as $post_id) {
                $servise_id = get_field('service_slug', $post_id);
                if ($Services->is_deprecated_day_for_servise($date, $servise_id)) {
                    $deprecated_dates[$this->_date_format($date)][] = $servise_id;
                }
            }
        }
        wp_die(json_encode($deprecated_dates));
    }

    private function _date_format($date) {
        list($y, $m, $d) = explode('-', $date);
        $_m = (int) $m - 1;
        $_d = (int) $d;
        return $y . '_' . $_m . '_' . $_d;
    }

    public function get_vip_brones() {
        $my_brones = $this->_get_my_brones_dates();
        $brones = $this->_get_brones_per_month($my_brones);
        wp_die(json_encode(array(
            'brones' => $brones,
            'my_brones' => $my_brones,
        )));
    }

    private function _get_brones_per_month($my_brones) {
        $Services = new Services;
        $brones = array();
        for ($i = 0; $i < 24; $i++) {
            $date = date("Y-m-d", strtotime("+$i month", strtotime(date('Y-m-d'))));
            list($y, $m, $d) = explode('-', $date);
            $first_day = $y . '-' . $m . '-01';
            $last_day = $y . '-' . $m . '-' . cal_days_in_month(CAL_GREGORIAN, $m, $y);
            $start = $Services->get_start_time($first_day);
            $end = $Services->get_end_time($last_day);
            foreach (BonamiHelper::get_services_ids() as $post_id) {
                $_m = (int) $m - 1;
                $service_slug = get_field('service_slug', $post_id);
                $key = $y . '_' . $_m . '_' . $service_slug;
                if (!isset($my_brones[$key])) {
                    if ($Services->is_deprecated_period($start, $end, $service_slug)) {
                        $brones[$key] = 'deprecated';
                    }
                }
            }
        }
        return $brones;
    }

    private function _get_brones_per_month_() {
        $start_time = strtotime(date('Y-m-d'));
        $query = 'SELECT `servise`, SUBSTRING(`date`,1,7) month, COUNT(SUBSTRING(`date`,1,7)) AS count_places'
                . ' FROM `' . $this->_table . '`'
                . ' WHERE `start` >= ' . $start_time
                . ' GROUP BY `servise`, `month`';
        $brones = array();
        $Servisces = new Services;
        foreach ($this->_db->get_results($query, ARRAY_A) as $row) {
            $key = trim($row['month'], '_') . '_' . $row['servise'];
            $places = $Servisces->get_places($row['servise']);
            if ((int) $places <= (int) $row['count_places']) {
                $brones[$key] = 'deprecated';
            }
        }
        return $brones;
    }

    private function _get_my_brones_per_month() {
        $start_time = strtotime(date('Y-m-d'));
        $query = 'SELECT * '
                . ' FROM `' . $this->_table . '`'
                . ' WHERE `start` >= ' . $start_time
                . ' AND `user_id` = ' . wp_get_current_user()->ID;
        $brones = array();
        foreach ($this->_db->get_results($query, ARRAY_A) as $row) {
            list($y, $m, $d) = explode('_', $row['date']);
            if ($d === '00') {
                $key = $y . '_' . $m . '_' . $row['servise']; // Если больше суток, то это VIP бронь
                if (empty($brones[$key])) {
                    $brones[$key] = 'my_checked';
                }
            }
        }
        return $brones;
    }

    public function get_my_brones($date) {
        $user_id = wp_get_current_user()->ID;
        $query = 'SELECT * FROM ' . $this->_table
                . ' WHERE `user_id` = ' . $user_id
                . ' AND `date` = "' . $this->_date_format($date) . '"';
        $my_brones = array();

        list($y, $m, $d) = explode('-', $date);
        $day = (int) $d;
        $month = Calendar::get_month_str((int) $m);
        foreach ($this->_db->get_results($query, ARRAY_A) as $row) {

            $my_brones[] = array(
                'time' => $day . ' ' . $month . ' ' . date('H:i', $row['start']) . '-' . date('H:i', $row['end']),
                'servise' => BonamiHelper::get_services_title($row['servise'])
            );
        }
        return $my_brones;
    }

    public function get_day_brones() {
        $date = $_POST['date'];
        wp_die(json_encode($this->get_my_brones($date)));
    }

    public function get_my_brones_dates() {
        wp_die(json_encode($this->_get_my_brones_dates()));
    }

    private function _get_my_brones_dates() {
        $user_id = !empty($_POST['user_id'])?(int)$_POST['user_id']:wp_get_current_user()->ID;
        $Services = new Services;
        $my_brones_dates = array();
        $start_work_time = $Services->get_start_time();
        $query = 'SELECT DISTINCT `date` FROM `wp_brones` '
                . ' WHERE `start` >= ' . $start_work_time . ' AND `user_id` = ' .$user_id ;
        foreach ($this->_db->get_col($query) as $date) {
            $my_brones_dates[$date] = $this->_db->get_col('SELECT DISTINCT `servise` FROM `wp_brones` WHERE `date` = "' . $date . '"');
        }
        $days = $my_brones_dates;
        return $days;
    }

    public function save_vip_brones() {
        $brones = $_POST['brones'];
        $Services = new Services;
        $servise_key = $Services->get_vip_key();
        $user_id = wp_get_current_user()->ID;
        $results = array();
        foreach (array_keys($brones) as $brone) {
            list($y, $m, $servise) = explode('_', $brone);
            $m_true = $m + 1;
            $month = substr('0' . $m_true, -2);
            $last_d = (int) cal_days_in_month(CAL_GREGORIAN, $m_true, $y);
            $d = 1;
            $data = array();
            do {
                $day = substr('0' . $d, -2);
                $date = $y . '-' . $month . '-' . $day;
                $dt = $y . '_' . $m . '_' . $d;
                $data[] = array(
                    'user_id' => $user_id,
                    'date' => $dt,
                    'servise' => $servise,
                    'period' => $servise_key,
                    'start' => $Services->get_start_time($date),
                    'end' => $Services->get_end_time($date),
                    'brone_id' => $brone,
                    'comment' => 'Бронирование места',
                    'owner' => $user_id,
                );
                $d++;
            } while ($d <= $last_d);
            $results[$brone] = $this->_add_vip_brones($data, $user_id);
        }
        die(json_encode($results));
    }

    public function save_brones() {
        $brones = $_POST['brones'];
        $user_id = !empty($_POST['user_id'])?(int)$_POST['user_id']:wp_get_current_user()->ID;
        $user_activated = BonamiHelper::is_user_activated($user_id);
        $results = array();
        foreach ($brones as $date => $dates) {
            foreach ($dates as $servise => $services) {
                foreach ($services as $period => $periods) {
                    foreach ($periods as $interval) {
                        if($user_activated)
                        {
                            $data = array(
                                'user_id' => $user_id,
                                'date' => $date,
                                'servise' => $servise,
                                'period' => $period,
                                'start' => $interval['start'],
                                'end' => $interval['end'],
                                'brone_id' => $interval['brone_id'],
                                'comment' => 'Бронирование места',
                                'owner' => $user_id,
                            );
                            $results[$interval['brone_id']] = $this->_add_brone($data, $user_id);
                        }
                        else
                        {
                            $results[$interval['brone_id']] = 'Учетная запись не активирована';
                        }
                    }
                }
            }
        }
        wp_die(json_encode($results));
    }

    private function _add_vip_brones($data, $user_id) {
        $msg = '';
        $added = array();
        foreach ($data as $row) {
            if ($msg = $this->_check_balans($row, $user_id)) {
                $this->_delete($added);
                return $msg;
            }
            if ($msg = $this->_check_data($row)) {
                $this->_delete($added);
                return $msg;
            }

            if ($id = $this->_add($row)) {
                $added[] = $id;
            } else {
                $this->_delete($added);
                return 'Ошибка добавления брони';
            }
        }
        if (!$this->_debet_balans($row, $user_id)) {
            $this->_delete($added);
            return 'Ошибка снятия баланса';
        }
        return $msg;
    }

    private function _add_brone($data, $user_id, $check_balans=TRUE) {
        if ($msg = $this->_check_data($data)) {
            return $msg;
        }
        if ($check_balans AND $msg = $this->_check_balans($data, $user_id)) {
            return $msg;
        }
        if ($id = $this->_add($data)) {
            if ($check_balans AND !$this->_debet_balans($data, $user_id)) {
                $this->_delete($id);
                return 'Ошибка снятия баланса';
            }
            return '';
        }
        return 'Ошибка добавления брони';
    }

    private function _check_data($data) {
        $Services = new Services;
        if ($Services->is_deprecated_period($data['start'], $data['end'], $data['servise'])) {
            return 'Все места уже заняты';
        }
        return '';
    }

    private function _check_balans($data, $user_id) {
        $price = BonamiHelper::get_price($data['servise'], $data['period']);
        if (!$price) {
            return 'Не установлен прайс для этой услуги';
        }
        $balans = BonamiHelper::get_user_balanse($user_id);
        $overdraft = BonamiHelper::get_user_overdraft($user_id);
        if ($balans + $overdraft < $price) {
            return 'Стоимость услуги превышает баланс';
        }
        return '';
    }

    private function _debet_balans($data, $user_id) {
        
        $price = BonamiHelper::get_price($data['servise'], $data['period']);
        $UserBalanse = new UserBalanse;
        $debet_data = array(
            'user_id' => $user_id,
            'owner_id' => wp_get_current_user()->ID,
            'sum' => '-' . $price,
            'comment' => !empty($data['comment'])?$data['comment']:'Бронирование места',
            'order_id' => '0',
        );
        if (!$UserBalanse->add_row_debet($debet_data)) {
            return FALSE;
        }
        return TRUE;
    }

    public function has_day_user_brones($day, $user_id) {
        $date = $this->_date_format($day);
        $query = 'SELECT COUNT(`id`) FROM `' . $this->_table . '`'
                . ' WHERE `user_id` = ' . $user_id
                . ' AND `date` = "' . $date . '"';
        return $this->_db->get_var($query);
    }

    public function get_user_brones_by_date($user_id, $date, $servise_id, $period) {
        $query = 'SELECT `start` FROM `' . $this->_table . '` '
                . ' WHERE `user_id` = ' . $user_id
                . ' AND `date` = "' . $date . '"'
                . ' AND `servise` = "' . $servise_id . '"'
                . ' AND `period` = "' . $period . '"';
        return $this->_db->get_col($query);
    }

    public function get_count_brones_($time_start, $time_end, $servise_ids) {
        $query = 'SELECT COUNT(`id`) FROM `' . $this->_table . '`'
                . ' WHERE `servise` IN ("' . implode('","', $servise_ids) . '")'
                . ' AND `start` <= ' . $time_start
                . ' AND `end` >= ' . $time_end;
        $this->_db->get_var($query);
    }

    public function get_count_brones($time_start, $time_end, $servise_ids) {
        $query = 'SELECT COUNT(`id`) FROM `' . $this->_table . '`'
                . ' WHERE `servise` IN ("' . implode('","', $servise_ids) . '")'
                . ' AND (' . $time_start . ' >= `start` AND ' . $time_start . ' < `end`'
                . ' OR ' . $time_end . ' > `start` AND ' . $time_end . ' <= `end`'
                . ' OR ' . $time_start . ' <= `start` AND ' . $time_end . ' >= `end`)'
        ;
        return $this->_db->get_var($query);
    }

    public function get_mt_table() {
        $date = $this->_get_mt_flt_date();
        $UserRegistratiron = new UserRegistratiron;
        $Services = new Services;
        $brones = $this->_prepare_brones_to_table($this->_get_brones_by_date($date));
        $users = array();
        foreach ($UserRegistratiron->mt_det_users() as $user_id => $user_info) {
            $p_brones = array();
            foreach ($Services->get_min_period_keys($date) as $p_key => $period) {
                $p_brones[$p_key] = array();
                if (isset($brones[$user_id])) {
                    foreach ($brones[$user_id] as $s_key => $_servises) {
                        foreach ($_servises as $srv)
                        {
                            if ($srv['start'] <= $period['time_start'] AND  $srv['end'] > $period['time_start'])
                            {
                                $p_brones[$p_key][$s_key] = array(
                                    'period'=>$srv['period'], 
                                    'class'=>$s_key, 
                                    'time_period'=>$period['time_period'], 
                                    'servise'=> $srv['servise'],
                                    'under_text'=> $this->_get_under_text($srv)
                                );
                                break;
                            }
                        }
                    }
                }
            }
            $users[$user_id] = array(
                'user_info' => $user_info,
                'brones' => $p_brones,
            );
        }
        return $users;
    }
    private function _get_under_text($srv)
    {
        if(!empty($srv['period']) AND $srv['period'] == $this->_vip_key)
        {
            return 'VIP&#8209;абонемент';
        }
        return '';
    }

    private function _get_mt_flt_date()
    {
        $ManagerCabinet = new ManagerCabinet;
        $flt_data = $ManagerCabinet->get_flt_data();
        return $flt_data['flt_date'];
    }
    private function _get_flt_time_period()
    {
        $ManagerCabinet = new ManagerCabinet;
        $flt_data = $ManagerCabinet->get_flt_data();
        return $flt_data['time_period'];
    }
    private function _get_flt_services()
    {
        $ManagerCabinet = new ManagerCabinet;
        $flt_data = $ManagerCabinet->get_flt_data();
        $services = array();
        foreach ($flt_data['services'] as $servise=>$value)
        {
            if($value)
            {
                $services[] = $servise;
            }
        }
        return $services;
    }

    private function _get_brones_by_date($date) {
        $flt_services = $this->_get_flt_services();
        $time_period = $this->_get_flt_time_period();
        $flt = '';
        if(!empty($flt_services))
        {
            $flt = ' AND `servise` IN ("'.implode('", "', $flt_services).'")'; 
        }
        if(!empty($time_period))
        {
            $flt .= ' AND `period` = "'.$time_period.'"'; 
        }
        $Services = new Services;
        $query = 'SELECT `user_id`, `servise`, `start`, `end`, `period` FROM `' . $this->_table . '`'
                . ' WHERE `start` >= ' . $Services->get_start_time($date)
                . ' AND  `end` <= ' . $Services->get_end_time($date)
                . $flt
                . ' ORDER BY `user_id`, `servise`, `start`';
        return $this->_db->get_results($query, ARRAY_A);
    }

    private function _prepare_brones_to_table($brones) {
        $result = array();
        foreach ($brones as $brone) {
            if (!isset($result[$brone['user_id']])) {
                $result[$brone['user_id']] = array();
            }
            if (!isset($result[$brone['user_id']][$brone['servise']])) {
                $result[$brone['user_id']][$brone['servise']] = array();
            }
            $result[$brone['user_id']][$brone['servise']][] = array(
                'period' => $brone['period'],
                'servise' => $brone['servise'],
                'start' => $brone['start'],
                'end' => $brone['end'],
            );
        }
        return $result;
    }
    
    public function get_user_brones_count($user_id)
    {
        $query = 'SELECT count(`id`) FROM `'.$this->_table.'`'
                . ' WHERE `user_id` ='.$user_id;
        return $this->_db->get_var($query);
    }
    
    public function remove_user_brone($user_id, $flt_date)
    {
        $Services = new Services;
        $start = $Services->get_start_time($flt_date);
        $end = $Services->get_end_time($flt_date);
        $query = 'SELECT `id` FROM `'.$this->_table.'`'
                . ' WHERE `user_id` = '.$user_id
                . ' AND `start` >= '.$start
                . ' AND `end` <= '.$end;
        $ids = $this->_db->get_col($query);
        return $this->_delete($ids);
    }
    public function add_mt_brones($brones, $debet)
    {
        $res = array();
        foreach ($brones as $p_key=>$data)
        {
            $res[$p_key] = $this->_add_brone($data, $data['user_id'], $debet);
        }
        return $res;
    }
    public function remove_mt_brones($brones)
    {
        $res = array();
        foreach ($brones as $p_key=>$data)
        {
            $res[$p_key] = $this->remove_bronee_by_data($data);
        }
        return $res;
    }
    public function remove_bronee_by_data($data)
    {
        $query = 'SELECT `id` FROM `'.$this->_table.'`'
                . ' WHERE `user_id` = '.$data['user_id']
                . ' AND `servise`= "'.$data['servise'].'"'
                . ' AND `period` = "'.$data['period'].'"'
                . ' AND `start` >= '.$data['start']
                . ' AND `end` <= '.$data['end'];
        $ids = $this->_db->get_col($query);
        return $this->_delete($ids);
        
    }            
}

new Brones;
