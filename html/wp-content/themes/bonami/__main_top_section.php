<?php
/**
 * The template for displaying the main top section
 *
 * @package WordPress
 * @subpackage Bonami
 * @since Bonami 1.0
 */
?>
<section class="b-main-top">
    <?php get_template_part('head_common'); ?>
        <div class="b-align-container">
            <div class="b-main-top-text">
                <div class="b-main-top-text__table-wrap">
                    <div class="b-main-top-text__left">
                        <img src="<?=get_template_directory_uri()?>/files/theme/img/main-top-tagline.png" class="b-main-top-text__tagline" alt="" />
                    </div>
                    <div class="b-main-top-text__right">
                        <div class="b-main-top-text__title">Почасовая аренда рабочих мест в самом центре города</div>
                        <div class="b-main-top-text__text">
                            <p>Планируй свое рабочее расписание самостоятельно, приходи и работай по своему уникальному графику, соответствующему ритму твоей повседневной жизни.</p>
                        </div>
                        <div class="b-main-top-text__btn-wrap">
                            <a class="b-btn b-btn_transparent-gold" data-scrollto=".b-advantages">Преимущества площадки</a>
                        </div>
                        <div class="b-main-top-text__btn-wrap">
                            <?php if(BonamiHelper::is_user_activated()): ?>
                            <a class="b-btn b-btn_gold" href="<?= site_url();?>/cabinet">Забронировать <span>место</span></a>
                            <?php else: ?>
                                <a class="b-btn b-btn_gold im-popup-link" data-id="#login">Забронировать <span>место</span></a>
                            <?php endif; ?>

                        </div>
                    </div>
                </div>
            </div>
        </div>
</section>
