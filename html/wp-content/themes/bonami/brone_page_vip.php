<?php

/**
 * The template for user bron add
 *
 * @package WordPress
 * @subpackage Bonami
 * @since Bonami 1.0
 */
define('VIP_BUY', TRUE);
?>
    <div class="steps">
        <span class="bron_steps">Шаг 1. Выберите услугу бронирования</span>
        <div class="flex-row-wrap bron_services_container price">
            <?php foreach (BonamiHelper::get_services_ids() as $service_id) : ?>
                <?php $slug = get_field('service_slug', $service_id); ?>
                <?php $enabled = get_user_meta($user_id, $slug, TRUE) ? ' enabled ' : '' ;?>
                <div class="service_box  <?= $slug; ?> price-item-fon <?= $enabled ? $enabled : 'servise_disabled'; ?> " rel="<?= $service_id; ?>" service_id="<?= $slug; ?>">
                    <div class="price-item" style="min-height: 50px;">
                        <h3><?= get_the_title($service_id); ?></h3>
                        <div class="flex-row-nowrap price_item_top">
                            <div></div>
                            <div></div>
                        </div>
                        <div class="flex-row-nowrap price_box">
                            <span class="my_price">
                                <span><?= get_field('cervice_price', $service_id)['month_1']; ?> </span>
                            </span>
                            <span class="flex-column-nowrap currency_period">
                                <span class="currency_name">BYN</span>
                                <span class="period">/ месяц</span>
                            </span>
                            <span class="price-icon">
                                <span class="price-icon-text">Выбор любого места, которое закрепляется за вами на месяц + каждый день кофе в подарок</span>
                            </span>
                        </div>
                    </div>
                </div>
                <?php $active = ''; ?>
            <?php endforeach; ?>
        </div>

        <div class="flex-row-wrap bron_steps_container step_2">
            <span class="bron_steps">Шаг 2. Выберите дату бронирования</span>
            <ul class="flex-row-wrap center markers">
                <li class="brown">Выбранная дата</li>
                <li class="red">Бронь не доступна</li>
                <li class="green">Свободно для брони</li>
                <li class="light">Мои брони</li>
            </ul>
        </div>
        <div class="flex-row-wrap bron_calendars">
            <div class="calendar" style="display:none"></div>
        </div>
    </div>
    <div class="brones_show"></div>
    <a type="button" class="b-btn_red center bonami_save_brones steps" id="bonami_save_brones">Забронировать место</a>
