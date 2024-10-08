<?php
/**
 * The main template page file
 *
 * @package WordPress
 * @subpackage Bonami
 * @since Bonami 1.0
 */
?>

    <head>
        <meta charset="utf-8">
        <title><?= get_the_title();?></title>
        <?php get_template_part('head_links'); ?>
    </head>
    <body class="p-personal-account-admin">
        <div class="b-common-wrap inner-page">
            <div class="b-top-inner">
                <?php get_template_part('head_common'); ?>
                <div class="b-top-inner__title"><?= get_the_title();?></div>
            </div>
            <div class="b-container">
                <?php
                    wp_reset_query(); // necessary to reset query
    while ( have_posts() ) : the_post();
        the_content();
    endwhile; // End of the loop.
                ?>
            </div>
        </div>            
        <?php get_footer(); ?>    
        <?php get_template_part('popups'); ?>
        <?php get_template_part('scripts'); ?>
    </body>
