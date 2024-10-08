<?php
/**
 * The template for personal user cabinet
 *
 * @package WordPress
 * @subpackage Bonami
 * @since Bonami 1.0
 */
?>

<div class="bonami-page-container">
    <div class="cabinet__top_menu_container">
        <a href="cabinet" >Мои брони</a>
        <a href="" class="bon_active">Профиль</a>
        <a href="balans">История списаний</a>
    </div>
    <div class="profile__user_data">
        <div class="input_field_container">
            <label class="input_field_container" for="user_data_balans">Фамилия</label>
                <input type="text" value="<?= get_user_meta($user_id, 'surname', TRUE); ?>" name="register_surname" class="b-input b-input_text">
        </div>
    </div>
    
</div>

<div class="b-content-table__content-wrap" style="margin-top: 30px;">
    <form class="poster" id="user_change_data" >
        <div class="b-inputs-wrap">
            <div class="b-inputs-wrap__cell">
                <input type="text" placeholder="<?= get_user_meta($user_id, 'surname', TRUE); ?>" value="<?= get_user_meta($user_id, 'surname', TRUE); ?>" name="register_surname" class="b-input b-input_text"> </div>
            <div class="b-inputs-wrap__cell">
                <input type="text" placeholder="<?= $current_user->first_name; ?>" value="<?= $current_user->first_name; ?>" name="first_name" class="b-input b-input_text"> </div>
            <div class="b-inputs-wrap__cell">
                <input type="text" placeholder="<?= get_user_meta($user_id, 'second_name', TRUE); ?>" value="<?= get_user_meta($user_id, 'second_name', TRUE); ?>" name="register_second_name" class="b-input b-input_text"> </div>
        </div>
        <div class="b-inputs-wrap">
            <div class="b-inputs-wrap__cell">
                <input type="text" placeholder="<?= $current_user->user_email; ?>" value="<?= $current_user->user_email; ?>" name="user_email" class="b-input b-input_text"> </div>
            <div class="b-inputs-wrap__cell">
                <input type="text" placeholder="<?= get_user_meta($user_id, 'phone', TRUE); ?>" value="<?= get_user_meta($user_id, 'phone', TRUE); ?>" name="register_phone" class="b-input b-input_text"> </div>
        </div>

        <div class="b-checkboxes-wrap"><span class="b-checkboxes-wrap__title">Сферы деятельности</span>
                            <?php foreach(BonamiHelper::get_services_ids() as $service_id):?>
                                <?php $slug = get_field('service_slug', $service_id);?>
                                <?php $checked = get_user_meta($user_id, $slug, TRUE) ? ' checked ' : '' ?>
                                <div class="b-popup__cell">
                                    <div class="b-checkbox">
                                        <input type="checkbox" <?= $checked; ?> id="s_<?= $slug; ?>" name="<?= $slug; ?>" value="1" class="b-checkbox__input">
                                        <label for="s_<?= $slug; ?>" class="b-checkbox__label"><?= get_the_title($service_id);?><span class="b-checkbox__box"></span> </label>
                                    </div>
                                </div>
                            <?php endforeach;?>
        </div>

        <div class="form_bottom_wrap">
            <input id="user_change_data_submit" class="b-btn b-btn_gold noborder" value="Изменить" type="submit">
            <p id="user_change_data_error_message"></p>
        </div>
    </form>
    <div class="b-title-step">
        <div class="b-title-step__text">Смена пароля </div>
    </div>
    <form class="poster" id="user_change_password">
        <div class="b-inputs-wrap">
            <div class="b-inputs-wrap__cell">
                <input type="password" placeholder="Старый пароль" name="currentpassword" id="currentpassword" class="b-input b-input_text"> </div>
            <div class="b-inputs-wrap__cell">
                <input type="password" placeholder="Новый пароль" name="newpassword" id="newpassword" class="b-input b-input_text"> </div>
        </div>
        <div class="form_bottom_wrap">
            <input class="b-btn b-btn_gold noborder" value="Изменить" type="submit">
            <p id="password_error_message"></p>
        </div>
    </form>

</div>
