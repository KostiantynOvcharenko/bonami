<div class="steps">
    <span class="bron_steps">Шаг 1. Выберите услугу бронирования</span>
    <div class="flex-row-wrap bron_services_container price">
        <?php foreach (BonamiHelper::get_services_ids() as $service_id): ?>
            <?php $slug = get_field('service_slug', $service_id); ?>
            <?php $enabled = get_user_meta($user_id, $slug, TRUE) ? ' enabled ' : '' ?>
            <div class="service_box price-item-fon <?= $enabled ? $enabled : 'servise_disabled'; ?> " rel="<?= $service_id; ?>" service_id="<?= $slug; ?>">
                <div class="price-item">
                    <h3><?= get_the_title($service_id); ?></h3>
                    <p><span class="my-price"><span><?= get_field('cervice_price', $service_id)['hour_10']; ?> </span>BYN</span> / 1 час <span class="my-price"><span><?= get_field('cervice_price', $service_id)['hour_05']; ?></span>BYN</span> / 0.5 часа</p>
                    <?= get_field('cervice_price', $service_id)['time_9-18'] ? '<p><span class="my-price"><span>' . get_field('cervice_price', $service_id)['time_9-18'] . ' </span>BYN</span> / смена <span class="price-icon"><span class="price-icon-text">с 9:00 до 18:00 или <br>с 13:00 до 22:00</span></span></p>' : ''; ?>
                    <p><span class="my-price"><span><?= get_field('cervice_price', $service_id)['time_9-22']; ?> </span>BYN</span> / полный день <span class="price-icon"><span class="price-icon-text">с 9:00 до 22:00</span></span></p>
                    <p><span class="my-price"><span><?= get_field('cervice_price', $service_id)['month_1']; ?> </span>BYN</span> / месяц (VIP-абонемент)<span class="price-icon"><span class="price-icon-text">Выбор любого места, которое закрепляется за вами на месяц + каждый день кофе в подарок</span></span> </p>
                </div>                
            </div>
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
        <div class="calendar" style="display: none;"></div>
    </div>

    <div class="flex-row-wrap center-y bron_steps_container convint_time">
        <span class="bron_steps">Шаг 3. Выберите удобное для вас время</span>
        <ul class="flex-row-wrap center markers">
            <li class="brown">Выбранное время</li>
            <li class="red">Бронь не доступна</li>
            <li class="green">Свободно для брони</li>
            <li class="light">Мои брони</li>
        </ul>
    </div>
    <div class="flex-row-wrap periods_names_list"></div>
    <div class="flex-row-wrap periods_list"></div>
</div>
<div class="brones_show"></div>
<a type="button" class="b-btn_red center bonami_save_brones steps" id="bonami_save_brones">Забронировать место</a>
