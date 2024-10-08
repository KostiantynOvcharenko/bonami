<?php
/**
 * The template for displaying the comman head
 *
 * @package WordPress
 * @subpackage Bonami
 * @since Bonami 1.0
 */
?>

<div class="utp-top">
    <a class="btn communicate im-popup-link" data-id="#feedback">Связаться с нами</a>
    <div class="utp-top-contact">
        <a class="utp-top-contact-phone" href="<?= BonamiHelper::phone_link() ?>"><?= get_option('bonami_contact_phone'); ?></a>
        <a class="utp-top-contact-mail" href="<?= BonamiHelper::email_link() ?>"><?= get_option('bonami_contact_email'); ?></a>
    </div>
    <a class="logo" href="/"><img src="<?= get_template_directory_uri() ?>/img/logo.png" alt="logo"></a>
    <?php if (!is_front_page() AND BonamiHelper::is_user_activated()): ?>
        <div class="flax-row-wrap lk_menu_container">
            <span class="head_mnu">Личный кабинет</span>
            <a class="head_item hiden" href="/cabinet">Мои брони</a>
            <a class="head_item hiden" href="/profile">Профиль</a>
            <a class="head_item hiden" href="/balans">История списаний</a>
            <a class="head_item logout hiden" data-id="#logout" c>Выйти</a>
        </div>
        
    <!--a style="text-decortion: none;" <?= BonamiHelper::get_link(); ?>><span class="">Личный кабинет</span></a>
        <a data-id="#logout" class="btn btn-log im-popup-link logout">Выйти</a-->
    <?php else: ?>
        <a style="text-decoration: none;" <?= BonamiHelper::get_link(); ?>><span>Личный кабинет:</span></a>
        <a class="btn btn-log im-popup-link" data-id="#login">Вход</a>
        <a class="btn im-popup-link" data-id="#registration">Регистрация</a>
    <?php endif; ?>
</div>
<div class="top_mobile">
    <a class="logo" href="/"><img src="<?= get_template_directory_uri() ?>/img/logo.png" alt="logo"></a>
    <div>
        <a class="personal"></a>
        <a class="sandviche_menu"></a>
    </div>
</div>
