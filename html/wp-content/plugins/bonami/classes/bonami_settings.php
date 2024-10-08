<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class BonamiSettings
{
    public function __construct() {
        add_action('admin_init', array($this, 'register_bonami_setting')); 
        add_action('rest_api_init', array($this, 'register_bonami_setting'));

        
    }
    function register_bonami_setting() {
        $args = array(
                'type' => 'string', 
                'sanitize_callback' => 'sanitize_text_field',
                'default' => NULL,
                );
        // Тег заголовка главной страницы
        register_setting( 'bonami_options_group', 'bonami_meta_title', $args); 
        // Адрес главной страницы
        register_setting( 'bonami_options_group', 'bonami_main_page_url', $args); 
        // Контактный телефон
        register_setting( 'bonami_options_group', 'bonami_contact_phone', $args);
        // Контактный E-mail
        register_setting( 'bonami_options_group', 'bonami_contact_email', $args);
        // Адрес
        register_setting( 'bonami_options_group', 'bonami_address', $args);
        // Время работы
        register_setting( 'bonami_options_group', 'bonami_worktime', $args);
        // Время работы
        register_setting( 'bonami_options_group', 'bonami_overdraft', $args);
        // Координаты Google карт
        register_setting( 'bonami_options_group', 'bonami_googlemap_mark', $args);
        // Zoom Google карт
        register_setting( 'bonami_options_group', 'bonami_googlemap_zoom', $args);
        // API ключ Google карт
        register_setting( 'bonami_options_group', 'bonami_googlemap_apikey', $args);
        /*
         *          Альфа Банк
         */ 
        // Логин
        register_setting( 'bonami_options_group', 'bonami_abank_login', $args);
        // Пароль
        register_setting( 'bonami_options_group', 'bonami_abank_password', $args);
        // Тестовый режим
        register_setting( 'bonami_options_group', 'bonami_abank_test', $args);
        
        // Кол-во сток на страние баланса
        register_setting( 'bonami_options_group', 'bonami_rows_count', $args);
        
    } 
}
new BonamiSettings;