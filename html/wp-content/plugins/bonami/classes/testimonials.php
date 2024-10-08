<?php

/**
 * The Testimonial class
 *
 * @package WordPress
 * @subpackage Bonami
 * @since Bonami 1.0
 */
class Testimonials {

    public function __construct() {
        add_action('init', array($this, 'create_bonami_testimonials'));
        
        add_action( 'wp_ajax_user_add_testimonie', array($this,'user_add_testimonie'));
        add_action( 'wp_ajax_nopriv_user_add_testimonie', array($this,'user_add_testimonie'));        
        
        add_action( 'wp_ajax_testimonial_publish', array($this,'testimonial_publish'));
        add_action( 'wp_ajax_nopriv_testimonial_publish', array($this,'testimonial_publish'));        
        
        add_action( 'wp_ajax_testimonial_unpublish', array($this,'testimonial_unpublish'));
        add_action( 'wp_ajax_nopriv_testimonial_unpublish', array($this,'testimonial_unpublish'));        
        
        add_action( 'wp_ajax_testimonial_remove', array($this,'testimonial_remove'));
        add_action( 'wp_ajax_nopriv_testimonial_remove', array($this,'testimonial_remove'));        
        
        add_action( 'wp_ajax_edit_testimonial', array($this,'edit_testimonial'));
        add_action( 'wp_ajax_nopriv_edit_testimonial', array($this,'edit_testimonial'));        
        
    }

    function create_bonami_testimonials() {
        register_post_type('BonamiTestimonial', array(
                    'labels' => array(
                    'name' => __('Отзывы'),
                    'singular_name' => __('Отзывы')
                ),
                'public' => true,
                'has_archive' => true,
            )
        );
    }
    public function user_add_testimonie()
    {
        $testimonie = sanitize_text_field($_POST['testimonie']);
        $user_id = get_current_user_id();
        $fam = get_user_meta($user_id, 'surname', TRUE);
        $im = wp_get_current_user()->first_name;
        $ot = get_user_meta($user_id, 'second_name', TRUE);
        
        $post_id = wp_insert_post(array (
           'post_type' => 'BonamiTestimonial',
           'post_title' => $fam.' '.$im.' '.$ot,
           'post_content' => $testimonie,
           'post_author' => $user_id,
        ));
        if($post_id)
        {
            add_post_meta($post_id, 'testimonial_autor', $user_id);
            wp_die(json_encode(array('result'=>1, 'title'=>'Новый отзыв', 'message'=>__('Спасибо! Ваш отзыв зарегистрирован.'))));
        }
        wp_die(json_encode(array('result'=>0, 'title'=>'Новый отзыв', 'message'=>__('Система не смогла зарегистрировать Ваш отзыв.'))));
    }
    
    public function mt_get_testimonials()
    {
        $posts =  get_posts(array(  
            'post_type' => 'BonamiTestimonial',
            'posts_per_page' => -1,
            'orderby' => 'ID', 
            'order' => 'DESC',
            'post_status' => 'any',
        ));
        $testimonials = array();
        foreach ($posts as $post)
        {
            if($post->post_status === 'trash')
            {
//                break;
            }
            $testimonials[$post->ID] = array(
                'date' => array(
                    'title'=>get_the_date( 'd.m.Y', $post->ID ),
                    'class'=>''
                ),
                'auther' => array(
                    'title'=> $this->_get_full_author_name($post->ID),
                    'class'=>'fl_left'
                ),
                'content' => array(
                    'title'=>'<div class="content">'.get_post_field('post_content', $post->ID).'</div>'
                    . '<btn class="mk-btn im-popup-link testimonial_edit" rel="'.$post->ID.'" data-id="#edit_testimonial">Редактировать отзыв</btn>',
                    'class'=>'fl_left '.$post->post_status
                ),
            );
        }
        return $testimonials;
    }
    private function _get_full_author_name($id)
    {
        if($testimonial_autor = get_field('testimonial_autor', $id))
        {
            if(!empty($testimonial_autor['ID']))
            {
                return get_user_meta($testimonial_autor['ID'], 'surname', TRUE)
                        .' '.$testimonial_autor['user_firstname']
                        .' '.get_user_meta($testimonial_autor['ID'], 'second_name', TRUE);
            }
        }
        return '';
    }

    public function testimonial_publish()
    {
        $id = (int)$_POST['id'];
        $data = array(
            'ID'=>$id,
            'post_status'=>'publish',
        );
        if(wp_update_post( wp_slash($data)))
        {
            wp_die(json_encode(array('result'=>1, 'title'=>'Опубликовать отзыв', 'message'=>__('Отзыв опубликован.'))));
        }
        wp_die(json_encode(array('result'=>0, 'title'=>'Опубликовать отзыв', 'message'=>__('Ошибка публикования отзыва.'))));
    }
    public function testimonial_unpublish()
    {
        $id = (int)$_POST['id'];
        $data = array(
            'ID'=>$id,
            'post_status'=>'draft',
        );
        if(wp_update_post( wp_slash($data)))
        {
            wp_die(json_encode(array('result'=>1, 'title'=>'Снять отзыв', 'message'=>__('Отзыв снят с публикации.'))));
        }
        wp_die(json_encode(array('result'=>0, 'title'=>'Снять отзыв', 'message'=>__('Ошибка снятия отзыва с публикации.'))));
    }
    public function testimonial_remove()
    {
        $id = (int)$_POST['id'];
        if(wp_trash_post($id))
        {
            wp_die(json_encode(array('result'=>1, 'title'=>'Снять отзыв', 'message'=>__('Отзыв удален.'))));
        }
        wp_die(json_encode(array('result'=>0, 'title'=>'Снять отзыв', 'message'=>__('Ошибка удаления отзыва.'))));
    }
    public function edit_testimonial()
    {
        $id = (int)$_POST['id'];
        $content = sanitize_text_field($_POST['content']);
        $data = array(
            'ID'=>$id,
            'post_content'=>$content
        );
        if(wp_update_post( wp_slash($data)))
        {
            wp_die(json_encode(array('result'=>1, 'title'=>'Редактировать отзыв', 'message'=>__('Отзыв обновлен.'))));
        }
        wp_die(json_encode(array('result'=>0, 'title'=>'Редактировать отзыв', 'message'=>__('Ошибка редактирования отзыва.'))));
    }
    public function remove_user_testimonials($user_id)
    {
        foreach ($this->_get_user_testimonials_ids($user_id) as $id)
        {
            if(is_wp_error(wp_delete_post($id, TRUE)))
            {
                return FALSE;
            }
        }
        return TRUE;
    }
    private function _get_user_testimonials_ids($user_id)
    {
        global $wpdb;
        
        $query = 'SELECT `ID` FROM `'.$wpdb->prefix.'posts`'
                . ' WHERE `post_type` = "BonamiTestimonial"'
                . ' AND `post_author` = '.$user_id;
        foreach ($wpdb->get_col($query) as $post_id)
        {
            wp_delete_post($post_id, TRUE);
        }
        return TRUE;
    }
}

new Testimonials;
