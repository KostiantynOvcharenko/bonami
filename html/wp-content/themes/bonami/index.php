<?php
/**
 * The main template file
 *
 * @package WordPress
 * @subpackage Bonami
 * @since Bonami 1.0
 */
?>

<!doctype html>
<html dir="ltr" lang="ru" class="">
    <?php $user_role = BonamiHelper::user_role(); ?>
    <?php if(is_front_page() OR !BonamiHelper::is_user_activated() AND $user_role !== 'administrator'): 
        get_template_part('main_page'); 
    else:
        $slug = BonamiHelper::get_page_slug();
        define('SLUG',$slug);
        if($user_role === 'user')
        {
            if(file_exists(get_template_directory().'/bonami_pages/'.$slug.'.php'))
            {
                define('FILE_TEMPLATE',get_template_directory().'/bonami_pages/'.$slug.'.php');
                get_template_part('bonami_pages');
            }
            elseif(file_exists(get_template_directory().'/bonami_tasks/'.$slug.'.php'))
            {
                define('FILE_TEMPLATE',get_template_directory().'/bonami_tasks/'.$slug.'.php');
                get_template_part('bonami_pages');
            }
        }
        elseif(in_array($slug,array('manager_cabinet','cabinet','mk_clients', 'mk_lockers', 'mk_testimonials', 'mk_bronirovanie', 'mk_brones', 'mk_bronirovanie_vip')) AND ($user_role === 'manager' OR $user_role === 'administrator'))
        {
            $slug = 'manager_cabinet';
            define('FILE_TEMPLATE',get_template_directory().'/'.$slug.'.php');
            get_template_part($slug);
        }
        else
        {
            get_template_part('main_page'); 
        }
    endif; ?>
</html>
