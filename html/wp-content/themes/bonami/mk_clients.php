<?php

/**
 * The Managers cabinet clients page 
 *
 * @package WordPress
 * @subpackage Bonami
 * @since Bonami 1.0
 */
?>

<!--Клиенты-->
<div class="flex-row-nowrap operation_buttons">
    <a type="button" class="b-btn b-btn_red clients_fam_flt">Поиск клиента по фамилии</a>

    <span type="button" class="b-btn b-btn_red im-popup-link" data-id="#add_client_profile">Добавить клиента</span>
</div>
<div class="find_user_flt hiden">
    <form class="flex-row-nowrap find_user_by_fam" action="/mk_clients">
        <input type="hidden" name="action" value="mk_clients_flt">
        <input class="text_input user_fam_flt_input" type="text" name="user_fam_flt" value="<?= ManagerHelper::get_user_fam_flt() ?>">
        <input type="submit" class="b-btn" value="Найти">
        <input type="submit" class="b-btn user_fam_flt_clear" value="Сбросить фильтр">
    </form>
</div>
<div class="flex-column-nowrap container main_table">
    <table class="mk_clients_table mk_clients_table_profil">
        <thead>
            <tr>
                <th>ФИО</th>
                <th>Номер телефона</th>
                <th>email</th>
                <th>Баланс</th>
                <th>Овердрафт (личный)</th>
                <th>Услуги</th>
                <th>Редактировать</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach (ManagerHelper::mt_get_clients() as $user_id => $user_info) : ?>
                <?php $activated = BonamiHelper::is_user_activated($user_id); ?>
                <tr id="client_row_<?= $user_id; ?>" class="<?= $activated ? '' : ' deactivated' ?>">
                    <?php foreach ($user_info as $key => $row) : ?>
                        <td class="table_cell_info <?= $row['class']; ?>">
                            <?= $row['title']; ?>
                        </td>
                    <?php endforeach; ?>
                    <td>
                        <div class="flex-row-wrap">
                            <?php foreach (ManagerHelper::get_client_servisces($user_id) as $servise_slug) : ?>
                                <span style="margin-left:3px;" class="service_icon  <?= $servise_slug; ?>"></span>
                            <?php endforeach; ?>
                        </div>
                    </td>
                    <td>
                        <span id="user_info_<?= $user_id; ?>" style="display: none;"><?= json_encode($user_info); ?></span>
                        <div class="flex-row-wrap">
                            <?php if ($activated) : ?>
                                <btn class="mk-btn im-popup-link client_balans_edit" data-id="#edit_client_balans" rel="<?= $user_id; ?>">Изменить баланс</btn>
                                <a class="mk-btn" href="/mk_bronirovanie?user_id=<?= $user_id; ?>">Добавить бронь</a>
                                <btn class="mk-btn im-popup-link client_profile_edit" data-id="#edit_client_profile" rel="<?= $user_id; ?>">Редактировать профиль</btn>
                                <btn class="mk-btn im-popup-link client_profile_deactivate" rel="<?= $user_id; ?>">Деактивировать</btn>
                            <?php else : ?>
                                <btn class="mk-btn im-popup-link client_profile_activate" rel="<?= $user_id; ?>">Активировать</btn>
                                <btn class="mk-btn im-popup-link client_profile_remove" data-id="#remove_client_profile" rel="<?= $user_id; ?>">Удалить</btn>
                            <?php endif; ?>
                        </div>
                    </td>
                </tr>
            <?php endforeach; ?>
            <tr>
            </tr>
        </tbody>
    </table>
</div>