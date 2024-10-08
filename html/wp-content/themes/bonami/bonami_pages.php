<?php
/**
 * The main template page file
 *
 * @package WordPress
 * @subpackage Bonami
 * @since Bonami 1.0
 */
$user_id = get_current_user_id();
$user_photo = get_field('user_photo', 'user_'.$user_id);
$current_user = wp_get_current_user();
$user_overdraft = get_field('user_overdraft', 'user_'.$user_id);
$overdraft = (!empty($user_overdraft) AND ($user_overdraft > 0))?$user_overdraft:get_option('bonami_overdraft');

?>

    <head>
        <meta charset="utf-8">
        <title>Кабинет мастера BONAMI</title>
        <?php get_template_part('head_links'); ?>
    </head>
    <body class="p-personal-account-admin">
        <header class="cabinet">
            <div class="container">
                <?php get_template_part('head_common'); ?>
            </div>
        </header>
        <div class="b-common-wrap inner-page">
            <div class="container">
                <?php if(strpos(FILE_TEMPLATE, 'bonami_pages')):?>
                <h2 class="personal_cabinet_h2">Личный кабинет</h2>
                <div class="b-content-table">
                    <div class="bonami_pages__sidebar">
                        <?php include get_template_directory().'/bonami_pages/personal_sidebar.php'; ?>
                    </div>
                    <div class="bonami_pages__content">
                        <?php include FILE_TEMPLATE; ?>
                    </div>
                </div>
                <?php elseif(strpos(FILE_TEMPLATE, 'bonami_tasks')):?>
                    <?php include FILE_TEMPLATE; ?>
                <?php endif;?>
            </div>
        </div>            
        <?php get_footer(); ?>    
        <?php get_template_part('popups'); ?>
        <?php get_template_part('scripts'); ?>
    </body>
