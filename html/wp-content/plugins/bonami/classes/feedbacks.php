<?php

/**
 * The Feedbacks class
 *
 * @package WordPress
 * @subpackage Bonami
 * @since Bonami 1.0
 */
class Feedbacks {

    public function __construct() {
        add_action('init', array($this, 'create_bonami_feedbacks'));
        
        add_action( 'wp_ajax_user_add_feedback', array($this,'user_add_feedback'));
        add_action( 'wp_ajax_nopriv_user_add_feedback', array($this,'user_add_feedback'));        
        
    }

    function create_bonami_feedbacks() {
        register_post_type('BonamiFeedback', array(
                    'labels' => array(
                    'name' => __('Обратная связь'),
                    'singular_name' => __('Обратная связь')
                ),
                'public' => true,
                'has_archive' => true,
            )
        );
    }
    public function user_add_feedback()
    {
        $name = sanitize_text_field($_POST['name']);
        $email = sanitize_text_field($_POST['email']);
        $comment = sanitize_text_field($_POST['comment']);
        $user_id = is_user_logged_in()?get_current_user_id():'0';
        
        $post_id = wp_insert_post(array (
           'post_type' => 'BonamiFeedback',
           'post_title' => $name.' ('.$email.')',
           'post_content' => $comment,
           'post_author' => $user_id,
        ));
        if($post_id)
        {
            wp_die(json_encode(array('result'=>1, 'title'=>'Обратная связь', 'message'=>__('Спасибо! Ваше сообщение зарегистрировано.'))));
        }
        wp_die(json_encode(array('result'=>0, 'title'=>'Обратная связь', 'message'=>__('Система не смогла зарегистрировать Ваше сообщение.'))));
    }
}

new Feedbacks;
