<?php
/**
 * The Managers cabinet page
 *
 * @package WordPress
 * @subpackage Bonami
 * @since Bonami 1.0
 */
$flt_period = ManagerHelper::get_flt_period_data();
$flt_period_title = !empty($flt_period['title'])?$flt_period['title']:'';
$get_min_period_keys = BonamiHelper::get_min_period_keys();
$flt_date = ManagerHelper::flt_date();
$ar_flt_servise = ManagerHelper::flt_servise();
$flt_servise = $ar_flt_servise?' ('. implode(', ',$ar_flt_servise).')':'';
?>
<!doctype html>
<html dir="ltr" lang="ru" class="">
    <head>
        <meta charset="utf-8">
        <title>Кабинет менеджера BONAMI</title>
        <?php get_template_part('head_links'); ?>
        <link rel="stylesheet" href="<?=get_template_directory_uri()?>/manager_cabinet.css" />
    </head>
    <body>
        <div class="loader_fone hiden">
            <div class="loader_icon hiden"></div>
        </div>
        <header class="cabinet">
            <div class="container">
                <div class="utp-top">
                    <a data-id="#logout" class="btn btn-log im-popup-link logout">Выйти</a>
                    <a class="logo" href="/"><img src="<?= get_template_directory_uri() ?>/img/logo.png" alt="logo"></a>
                </div>
                <div class="top_mobile">
                    <a class="logo" href="/"><img src="<?= get_template_directory_uri() ?>/img/logo.png" alt="logo"></a>
                    <div>
                        <a class="personal"></a>
                        <a class="sandviche_menu"></a>
                    </div>
                </div>
            </div>
        </header>
        <div class="container manager_cabinet">
            <div class="flex-row-nowrap nav_buttons">
                <a type="button" class="b-btn b-btn_red" id="" href="/mk_brones">Бронирование</a>
                <a type="button" class="b-btn b-btn_red" id="" href="/mk_clients">Клиенты</a>
                <a type="button" class="b-btn b-btn_red" id="" href="/mk_lockers">Шкафчики</a>
                <a type="button" class="b-btn b-btn_red" id="" href="/mk_testimonials">Отзывы</a>
            </div>
            <?php 
                switch (SLUG)
                {
                    case 'mk_clients':
                        include get_template_directory().'/mk_clients.php';
                        break;
                    case 'mk_lockers':
                        include get_template_directory().'/mk_lockers.php';
                        break;
                    case 'mk_testimonials':
                        include get_template_directory().'/mk_testimonials.php';
                        break;
                    case 'mk_bronirovanie':
                        include get_template_directory().'/mk_bronirovanie.php';
                        break;
                    case 'mk_bronirovanie_vip':
                        include get_template_directory().'/mk_bronirovanie_vip.php';
                        break;
                    case 'mk_brones':
                    default :
                        include get_template_directory().'/mk_brones.php'; 
                }
                
            ?>
        </div>
        <div class="mk_footer"></div>

        <footer class="manager_cabinet_footer">
            
        </footer>
        <?php get_template_part('m_popups'); ?>
        <?php get_template_part('scripts'); ?>
        <script src="<?= get_template_directory_uri() ?>/manager_cabinet.js"></script>
    </body>
</html>
