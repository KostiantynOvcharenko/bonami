<?php

/**
 * The Calendar class
 *
 * @package WordPress
 * @subpackage Bonami
 * @since Bonami 1.0
 */

// Brones
include_once BONAMI_PATH.'/classes/brones.php';

class Calendar
{
    private $_calendars_count = 5;
    private $_calendar_days_count = 60;
    
    public function set_calendar_days_count($calendar_days_count)
    {
        $this->_calendar_days_count = $calendar_days_count;
    }

    public function get_new_days()
    {
        $append_days = (int) $_POST['count'];
        $first_date = $_POST['last_day'];
        $this->set_calendar_days_count($append_days);
        wp_die(json_encode($this->get_calendar_days($first_date)));
    }

    public function get_monthes()
    {
        $date = new DateTime();
        $date->modify('first day of this month');
        $total_days_in_month = (int) $date->format('t');
        $calendar = array();
        for ($x = 0; $x < $date->format('w'); $x++) {
            $calendar[] = '<td class="pad"> </td>';
        }

        
        for($i = 0; $i<$this->_calendars_count; $i++)
        {
            $month = date("m", strtotime(" +$i months"));
            $year = date("Y", strtotime(" +$i months"));
            foreach (cal_days_in_month(CAL_GREGORIAN, $month, $year) as $day)
            {
                $calendar[$month] = array(
                    'name' => $this->_get_month_name($month),
                );
            }
        }
        
    }
    
    public function get_calendar_days($first_date, $mk=NULL)
    {
        $Brones = new Brones;
        $user_id = wp_get_current_user()->ID;
        $days = array();
        for($i=0;$i<$this->_calendar_days_count;$i++)
        {
            $date = date("Y-m-d", strtotime("+$i day", strtotime($first_date)));
            list($y,$m,$d) = explode('-', $date);
            $Date = new DateTime($date);
            $title = $this->_get_week_day_short_name((int)$Date->format("N"));
            $str_month = '';
            $class = $Brones->has_day_user_brones($date, $user_id)?'my_brone':'non_brones';
            if($date === date('Y-m-d'))
            {
                $title = 'Сегодня';
                $str_month = $this->get_month_str((int)$m);
                $class = 'today';
            }
            $days[$date] = array(
                'title' => $title,
                'number' => (int)$d,
                'str_month' => $str_month,
                'year' => $y,
                'class' => $class,
            );
            if($mk)
            {
                $days[$date]['href'] = "manager_cabinet/?flt_date=$date&action=dt_filter";
            }
        }
        return $days;
    }

    private function _get_month_name($month)
    {
        $month_names = array(
            1 => 'Январь',
            2 => 'Февраль',
            3 => 'Март',
            4 => 'Апрель',
            5 => 'Май',
            6 => 'Июнь',
            7 => 'Июль',
            8 => 'Август',
            9 => 'Сентябрь',
            10 => 'Октябрь',
            11 => 'Ноябрь',
            12 => 'Декабрь',
        );
        return $month_names[$month];
    }
    public static function get_month_str($month)
    {
        $month_names = array(
            1 => 'Января',
            2 => 'Февраля',
            3 => 'Марта',
            4 => 'Апреля',
            5 => 'Майя',
            6 => 'Июня',
            7 => 'Июля',
            8 => 'Августа',
            9 => 'Сентября',
            10 => 'Октября',
            11 => 'Ноября',
            12 => 'Декабря',
        );
        return $month_names[$month];
    }
    
    private function _get_week_day_short_name($week_day)
    {
        $week_day_short_names = array(
            1 => 'Пн',
            2 => 'Вт',
            3 => 'Ср',
            4 => 'Чт',
            5 => 'Пт',
            6 => 'Сб',
            7 => 'Вс',
        );
        return $week_day_short_names[$week_day];
    }
}