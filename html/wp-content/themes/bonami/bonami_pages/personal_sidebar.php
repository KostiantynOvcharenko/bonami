<?php
/**
 * The template for personal page
 *
 * @package WordPress
 * @subpackage Bonami
 * @since Bonami 1.0
 */
?>
<div class="b-content-table__aside-wrap">
    <div class="b-personal-inf-wrap">
        <div class="b-personal-inf">
            <div class="b-personal-inf_top">
                <span class="b-personal-inf__subtitle">
                    <?= get_user_meta($user_id, 'surname', TRUE); ?>
                    <?= $current_user->first_name; ?>
                    <?= get_user_meta($user_id, 'second_name', TRUE); ?>
                </span>

                <div class="b-personal-inf__skils">
                    <?php foreach (BonamiHelper::get_services_ids() as $service_id): ?>
                        <?php $slug = get_field('service_slug', $service_id); ?>
                        <?php $act = get_user_meta($user_id, $slug, TRUE) ? ' act ' : '' ?>
                        <div class="<?= $act; ?> b-personal-inf__cell">
                            <div class="b-personal-inf__icon_<?= $slug; ?> services__icon" id="service_<?= $slug; ?>">
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>

            <div class="b-personal-inf__balance-title">Баланс: 
                <span class="b-personal-inf__balance"><?= BonamiHelper::get_user_balanse($user_id) ?>  BYN</span>
            </div>
            <div class="b-personal-inf__hint-wrap">
                <div class="b-personal-inf__hint-container">
                    <a class="b-personal-inf__hint-link">Условия овердрафта</a>
                    <p class="b-personal-inf__hint-text">Сумма возможного овердрафта - <?= $overdraft ?> BYN. </p>
                </div>

            </div>
            <div class="b-personal-inf__balanse_add">
                <input type="button" class="b-btn b-btn_red" id="bonami_show_new_payment" value="Пополнить баланс">
                <div class="b-personal-inf__balanse_add_form" id="balanse_add_form">
                    <input type="text" placeholder="Введите сумму" name="bonami_pay_sum" id="bonami_pay_sum" class="b-input b-input_text">                    
                    <input type="hidden" name="user_id" id="user_id" value="<?= $user_id; ?>">
                    <input type="button" class="b-btn b-btn_red" id="bonami_new_payment" value="Пополнить">
                </div>
            </div>
        </div>
        <div class="b-personal-bottom">
            <a type="button" class="b-btn b-btn_red" id="bonami_show_new_payment" href="/bronirovanie">Добавить бронь</a>
            <a type="button" class="b-btn b-btn_gold crown" id="bonami_show_new_payment" href="/vip_buy">Купить VIP абонемент</a>
            <!--a type="button" class="b-btn b-btn_gold crown im-popup-link" id="bonami_show_new_payment" data-id="#vip_brones_window">Купить VIP абонемент</a-->
        </div>

    </div>
</div>
