<?php

class ManagerHelper
{
    public static function flt_date_str()
    {
        $ManagerCabinet = new ManagerCabinet;
        return $ManagerCabinet->flt_date_str();
    }
    public static function flt_date()
    {
        $ManagerCabinet = new ManagerCabinet;
        return $ManagerCabinet->flt_date();
    }
    public static function flt_servise()
    {
        $ManagerCabinet = new ManagerCabinet;
        return $ManagerCabinet->flt_servise();
    }
    public static function get_service_prices()
    {
        $Services = new Services;
        return $Services->get_service_price_titles();
    }
    public static function get_flt_period_data()
    {
        $ManagerCabinet = new ManagerCabinet;
        return $ManagerCabinet->get_flt_period_data();
    }
    public static function mt_get_clients()
    {
        $Clients = new Clients;
        return $Clients->mt_get_clients();
    }
    public static function get_client_servisces($user_id)
    {
        $Clients = new Clients;
        return $Clients->get_client_servisces($user_id);
    }
    public static function mt_get_lockers()
    {
        $Lockers = new Lockers;
        return $Lockers->mt_get_lockers();
    }
    public static function mt_get_testimonials()
    {
        $Testimonials = new Testimonials;
        return $Testimonials->mt_get_testimonials();
    }
    public static function get_user_fam_flt()
    {
        $Clients = new Clients;
        return $Clients->get_fam_flt();
    }
    public static function get_lockers_fam_flt()
    {
        $Lockers = new Lockers;
        return $Lockers->get_fam_flt();
    }
    public static function mt_get_active_clients()
    {
        $Clients = new Clients;
        return $Clients->mt_get_active_clients();
    }
    public static function get_mk_bronirovanie_user_id()
    {
        $user_id = !empty($_REQUEST['user_id'])?(int)$_REQUEST['user_id']:wp_get_current_user()->ID;
        return $user_id;
    }
    
}