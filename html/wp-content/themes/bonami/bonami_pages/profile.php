<?php
/**
 * The template for personal user cabinet
 *
 * @package WordPress
 * @subpackage Bonami
 * @since Bonami 1.0
 */
?>

<div class="cabinet__top_menu_container">
    <a href="cabinet" >Мои брони</a>
    <a href="" class="bon_active">Профиль</a>
    <a href="balans">История списаний</a>
</div>
<div class="bonami-page-container">
    <form id="user_data_form" class="profile__user_data">
        <div class="input_field_container">
            <label class="input_field_label">Фамилия</label>
            <input type="text" value="<?= get_user_meta($user_id, 'surname', TRUE); ?>" name="register_surname" class="b-input b-input_text">
        </div>
        <div class="input_field_container">
            <label class="input_field_label">Имя</label>
            <input type="text" value="<?= $current_user->first_name; ?>" name="first_name" class="b-input b-input_text">
        </div>
        <div class="input_field_container">
            <label class="input_field_label">Отчество</label>
            <input type="text" value="<?= get_user_meta($user_id, 'second_name', TRUE); ?>" name="register_second_name" class="b-input b-input_text">
        </div>
        <div class="input_field_container">
            <label class="input_field_label">E-mail</label>
            <input type="text" value="<?= $current_user->user_email; ?>" name="user_email" class="b-input b-input_text">
        </div>
        <div class="input_field_container">
            <label class="input_field_label">Телефон</label>
            <input type="text" value="<?= get_user_meta($user_id, 'phone', TRUE); ?>" name="register_phone" class="b-input b-input_text phone">
        </div>
        <div class="input_field_container">
            <input type="submit" value="Изменить" class="b-input b-input_submit">
        </div>
    </form>
    <form id="user_change_password" class="profile__user_data">
        <div class="input_field_container">
            <label class="input_field_label">Старый пароль</label>
            <input type="password" name="currentpassword" id="currentpassword" class="b-input b-input_text">
        </div>
        <div class="input_field_container">
            <label class="input_field_label">
            <label class="input_field_label">Новый пароль</label>
            <input type="password" name="newpassword" id="newpassword" class="b-input b-input_text">
        </div>
        <div class="input_field_container">
            <input type="submit" value="Изменить" class="b-input b-input_submit">
        </div>
    </form>
    
    <form class="profile__user_data">
        <?php foreach(BonamiHelper::get_services_ids() as $service_id):?>
            <?php $slug = get_field('service_slug', $service_id);?>
            <?php $checked = get_user_meta($user_id, $slug, TRUE) ? ' checked ' : '' ?>
                <input type="checkbox" <?= $checked; ?> id="s_<?= $slug; ?>" name="<?= $slug; ?>" value="1" class="change_profile"/>
                <label for="s_<?= $slug; ?>" class="<?= $slug; ?> big-box">
                    <span><?= get_the_title($service_id);?></span>
                    <span class="sp_checkbox"></span>
                </label>         
        <?php endforeach;?>
    </form>
    
    <form class="profile__add_testimonie" id="user_add_testimonie">
        <h3>Оставить отзыв о Bonami:</h3>
        <div class="input_field_container">
            <textarea class="b-input-textarea" type="textarea" name="testimonie" placeholder="Напишите отзыв"/></textarea>
        </div>
        <div class="input_field_container">
            <input type="submit" value="Отправить" class="b-input b-input_submit">
        </div>
    
    </form>
</div>
