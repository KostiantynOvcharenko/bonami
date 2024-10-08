<?php
/**
 * The template for displaying the online account section
 *
 * @package WordPress
 * @subpackage Bonami
 * @since Bonami 1.0
 */
?>
<section class="b-online-account">
    <div class="b-container">
        <div class="b-online-account__table-wrap">
            <div class="b-online-account__left"></div>
            <div class="b-online-account__right">
                <div class="b-online-account__title">Личный online-кабинет</div>
                <div class="b-online-account__text">
                    <p>Зарегистрируйся на сайте и начинай работать уже сегодня:</p>
                    <ul>
                        <li>создавай индивидуальный рабочий график</li>
                        <li>следи за состоянием баланса твоего личного счета</li>
                        <li>пользуйся овердрафтом</li>
                        <li>бесплатно переноси брони (если ты выбился из графика)</li>
                        <li>исследуй месячную статистику</li>
                    </ul>
                </div>
            </div>
        </div>
        <!--Услуги-->
        <div class="b-online-account__title b-online-account__title_center">Чем ты занимаешься?</div>
        <div class="b-online-account__wrapp">
            <?php foreach(BonamiHelper::get_services_ids() as $service_id):?>
                <div class="b-online-account__item">
                    <span class="b-online-account__ico ">
                        <img src="<?= get_field('service_image', $service_id);?>" alt="<?= get_the_title($service_id);?>">
                    </span>
                    <div class="b-online-account__text-item">
                        <?= get_the_title($service_id);?>
                    </div>
                    <p class="b-online-account__text-inf"><?= get_post_field('post_content', $service_id);?></p>
                        <?php if(BonamiHelper::is_user_activated()): ?>
                            <a class="b-btn b-btn_gold" href="<?= site_url();?>/cabinet">Забронировать <span>место</span></a>
                        <?php else: ?>
                            <a class="b-btn b-btn_transparent-gold im-popup-link" data-id="#login">Забронировать <span>место</span></a>
                        <?php endif; ?>


                </div>
            <?php endforeach;?>
        </div>
        <!--Отзывы-->
        <div class="b-online-account__title b-online-account__title_center">Отзывы</div>
        <div class="b-online-account__wrapp">
            <?php foreach(BonamiHelper::get_testimonial_ids() as $testimonial_id):?>
                <?php $user = get_field('testimonial_autor', $testimonial_id);?>
                <?php $user_photo = get_field('user_photo', 'user_'.$user['ID']);?>
                <div class="b-online-account__item">
                    <span class="b-online-account__ico ">
                        <?php if(!empty($user_photo)):?>
                            <img src="<?= $user_photo; ?>" alt="<?= get_the_title($testimonial_id);?>">
                        <?php else:?>
                            <?= $user['user_avatar'];?>
                        <?php endif;?>
                    </span>
                    <div class="b-online-account__text-item">
                        <?= $user['user_firstname'];?>
                    </div>
                    <p class="b-online-account__text-inf"><?= get_post_field('post_content', $testimonial_id);?></p>
                </div>
            <?php endforeach;?>
        </div>
    </div>
</section>
