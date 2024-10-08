<?php

/**
 * The template for displaying the manager popups
 *
 * @package WordPress
 * @subpackage Bonami
 * @since Bonami 1.0
 */
?>

<div class="im-popups manager_popups hidden">
    <!--Фильтр-->
    <div id="date_servise_filter" class="im-popup" style="display:none;">
        <div class="im-popup-inside bonami" style="background-color: #fff">
            <a class="b-popup__close"></a>
            <div class="b-red-title">Фильтр по дате, услуге</div>
            <div class="managers calendar"></div>
            <form class="b-popup b-popup_registration" data-click=".b-popup__close" action="/manager_cabinet">
                <input type="hidden" value="<?= date('Y-m-d') ?>" name="flt_date" id="manager_cabinet_flt_date">
                <input type="hidden" value="dt_filter" name="action">
                <div class="b-popup__content _rel registration">
                    <p class="b-popup__subtitle">Выберите ваш тип услуг: </p>
                    <div class="flex-row-wrap popp_register_serv_container">
                        <?php foreach (BonamiHelper::get_services_ids() as $service_id) : ?>
                            <?php $slug = get_field('service_slug', $service_id); ?>
                            <div class="flax_row_nowrap_item">
                                <input type="checkbox" name="<?= $slug; ?>" id="s-<?= $slug; ?>" class="b-checkbox__input" value="1">
                                <label for="s-<?= $slug; ?>" class="b-checkbox__label"> <?= get_the_title($service_id); ?>
                                    <span class="b-checkbox__box"></span>
                                </label>
                            </div>
                        <?php endforeach; ?>
                    </div>
                    <!--p class="b-popup__subtitle">Выберите временной интервал: </p>
                    <div class="flex-row-wrap popp_register_serv_container">
                        <?php // foreach (ManagerHelper::get_service_prices() as $key => $name) : 
                        ?>
                            <?php  ?>
                            <div class="flax_row_nowrap_item">
                                <input type="radio" name="time_period" id="s-<?= $key; ?>" class="b-checkbox__input" value="<?= $key; ?>">
                                <label for="s-<?= $key; ?>" class="b-checkbox__label"> <?= $name; ?>
                                    <span class="b-checkbox__box"></span>
                                </label>
                            </div>
                        <?php // endforeach; 
                        ?>
                    </div-->
                    <input id="date_servise_filter_submit_btn" type="submit" value="Применить" class="b-btn b-btn_red-submit" />
                </div>
            </form>
        </div>
    </div>
    <!--Удаление брони за день-->
    <div id="remove_user_brone" class="im-popup">
        <div class="im-popup-inside bonami" style="background-color: #fff">
            <a class="b-popup__close"></a>
            <div class="b-red-title">Удаление брони</div>
            <form class="b-popup b-popup_registration" data-click=".b-popup__close" id="remove_user_brone_form">
                <input type="hidden" value="" name="user_id" class="user_id">
                <div class="b-popup__content _rel registration">
                    <p class="b-popup__subtitle">Вы действительно хотите удалить бронь пользователя: </p>
                    <p class="b-popup__subtitle user_name"></p>
                    <p class="b-popup__subtitle">за <?= ManagerHelper::flt_date_str() ?>?</p>
                    <input type="submit" value="Применить" class="b-btn b-btn_red-submit submit" />
                </div>
            </form>
        </div>
    </div>
    <!--Редактирование отзыва-->
    <div id="edit_testimonial" class="im-popup">
        <div class="im-popup-inside bonami" style="background-color: #fff">
            <a class="b-popup__close"></a>
            <div class="b-red-title">Редактирование отзыва</div>
            <form type="post" class="b-popup b-popup_registration" data-click=".b-popup__close" id="edit_testimonial_form">
                <input type="hidden" value="" name="id" class="user_id id">
                <div class="b-popup__content _rel registration">
                    <div class="input_box">
                        <label for="mk_bronirovanie_client">Выберите автора:</label>
                        <select name="user_id" id="mk_bronirovanie_client">
                            <option value="">Не менять</option>
                            <?php foreach (ManagerHelper::mt_get_active_clients() as $client_id => $client) : ?>
                                <option value="<?= $client_id; ?>"><?= $client; ?></option>
                            <?php endforeach; ?>
                        </select>
                    </div>
                    <div class="input_box">
                        <label>Мастер:</label>
                        <input type="text" value="" name="testimonial_user_position" class="testimonial_user_position">
                    </div>
                    <textarea name="content" class="edit_testimonial content" rows="10" cols="50"></textarea>
                    <input type="submit" value="Применить" class="b-btn b-btn_red-submit submit" />
                </div>
            </form>
        </div>
    </div>
    <!--Добавить бронирование-->
    <div id="mk_bronirovanie" class="im-popup">
        <div class="im-popup-inside bonami" style="background-color: #fff">
            <a class="b-popup__close"></a>
            <div class="b-red-title">Добавить бронирование</div>
            <form class="b-popup" id="mk_bronirovanie_form" action="/mk_bronirovanie" type="post">
                <div class="b-popup__content _rel registration">
                    <div class="input_box">
                        <label for="mk_bronirovanie_client_add">Выберите мастера:</label>
                        <select name="user_id" id="mk_bronirovanie_client_add">
                            <?php foreach (ManagerHelper::mt_get_active_clients() as $client_id => $client) : ?>
                                <option value="<?= $client_id; ?>"><?= $client; ?></option>
                            <?php endforeach; ?>
                        </select>
                    </div>
                    <input type="submit" value="Перейти к бронированию" class="b-btn b-btn_red-submit submit" />
                </div>
            </form>
        </div>
    </div>
    <!--Добавить VIP бронирование-->
    <div id="mk_bronirovanie_vip" class="im-popup">
        <div class="im-popup-inside bonami" style="background-color: #fff">
            <a class="b-popup__close"></a>
            <div class="b-red-title">Добавить VIP бронь</div>
            <form class="b-popup" id="mk_bronirovanie_form" action="/mk_bronirovanie_vip" type="post">
                <div class="b-popup__content _rel registration">
                    <div class="input_box">
                        <label for="mk_bronirovanie_client_add">Выберите мастера:</label>
                        <select name="user_id" id="mk_bronirovanie_client_add">
                            <?php foreach (ManagerHelper::mt_get_active_clients() as $client_id => $client) : ?>
                                <option value="<?= $client_id; ?>"><?= $client; ?></option>
                            <?php endforeach; ?>
                        </select>
                    </div>
                    <input type="submit" value="Перейти к бронированию" class="b-btn b-btn_red-submit submit" />
                </div>
            </form>
        </div>
    </div>
    <!--Добавить шкафчик-->
    <div id="add_locker" class="im-popup">
        <div class="im-popup-inside bonami" style="background-color: #fff">
            <a class="b-popup__close"></a>
            <div class="b-red-title">Добавить шкафчик</div>
            <form class="b-popup" id="add_locker_form" class="add_locker_form">
                <div class="b-popup__content _rel registration">
                    <div class="input_box">
                        <label for="locker_owner">Выберите мастера:</label>
                        <select name="user_id" id="locker_owner">
                            <option value="0">Нет мастера</option>
                            <?php foreach (ManagerHelper::mt_get_clients() as $client_id => $client) : ?>
                                <option value="<?= $client_id; ?>"><?= $client['user_name']['title']; ?></option>
                            <?php endforeach; ?>
                        </select>
                    </div>
                    <input type="submit" value="Добавить" class="b-btn b-btn_red-submit submit" />
                </div>
            </form>
        </div>
    </div>
    <!--Изменить шкафчик-->
    <div id="edit_locker" class="im-popup">
        <div class="im-popup-inside bonami" style="background-color: #fff">
            <a class="b-popup__close"></a>
            <div class="b-red-title"></div>
            <form class="b-popup" id="edit_locker_form" class="add_locker_form">
                <div class="b-popup__content _rel registration">
                    <input type="hidden" name="id" class="locker_id">
                    <div class="input_box">
                        <label for="locker_owner_edit">Выберите мастера:</label>
                        <select name="user_id" id="locker_owner_edit">
                            <option value="0">Нет мастера</option>
                            <?php foreach (ManagerHelper::mt_get_clients() as $client_id => $client) : ?>
                                <option value="<?= $client_id; ?>"><?= $client['user_name']['title']; ?></option>
                            <?php endforeach; ?>
                        </select>
                    </div>
                    <input type="submit" value="Изменить" class="b-btn b-btn_red-submit submit" />
                </div>
            </form>
        </div>
    </div>
    <!--Добавить профиль клиента-->
    <div id="add_client_profile" class="im-popup">
        <div class="im-popup-inside bonami">
            <a class="b-popup__close"></a>
            <div class="b-red-title">Добавить клиента</div>
            <form class="b-popup b-popup_registration" id="add_client_profile_form">
                <div class="b-popup__content _rel registration">
                    <p id="_error"></p>
                    <input type="text" required="required" name="register_surname" id="surname" placeholder="Ваша фамилия" class="b-input b-input_text" />
                    <input type="text" required="required" name="register_name" id="register_name" placeholder="Ваше имя" class="b-input b-input_text" />
                    <input type="text" required="required" name="register_second_name" id="second_name" placeholder="Ваше отчество" class="b-input b-input_text" />
                    <input type="tel" required="required" name="register_phone" id="register_phone" placeholder="Контактный телефон" class="b-input b-input_text phone" />
                    <input type="email" required="required" name="register_email" id="register_email" placeholder="Email" class="b-input b-input_text" />
                    <input type="text" name="register_password" placeholder="Пароль" class="b-input b-input_text" />
                    <p class="b-popup__subtitle">Выберите ваш тип услуг: </p>
                    <div class="flax-row-wrap popp_register_serv_container">
                        <?php foreach (BonamiHelper::get_services_ids() as $service_id) : ?>
                            <?php $slug = get_field('service_slug', $service_id); ?>
                            <div class="flax_row_nowrap_item">
                                <input type="checkbox" name="<?= $slug; ?>" id="add_client<?= $slug; ?>" class="b-checkbox__input" value="1">
                                <label for="add_client<?= $slug; ?>" class="b-checkbox__label"> <?= get_the_title($service_id); ?>
                                    <span class="b-checkbox__box"></span>
                                </label>
                            </div>
                        <?php endforeach; ?>
                    </div>
                    <input type="submit" value="Добавить" class="b-btn b-btn_red-submit" />
                </div>
            </form>
        </div>
    </div>
    <!--Изменить профиль клиента-->
    <div id="edit_client_profile" class="im-popup">
        <div class="im-popup-inside bonami">
            <a class="b-popup__close"></a>
            <div class="b-red-title">Редактирование профиля</div>
            <form class="b-popup b-popup_registration" id="edit_client_profile_form">
                <div class="b-popup__content _rel registration">
                    <input type="hidden" name="id" class="client_id">
                    <p id="_error"></p>
                    <input type="text" required="required" name="register_surname" placeholder="Фамилия" class="b-input b-input_text surname" />
                    <input type="text" required="required" name="register_name" placeholder="Имя" class="b-input b-input_text register_name" />
                    <input type="text" required="required" name="register_second_name" placeholder="Отчество" class="b-input b-input_text second_name" />
                    <input type="tel" required="required" name="register_phone" placeholder="Контактный телефон" class="b-input b-input_text phone register_phone" />
                    <input type="email" required="required" name="register_email" placeholder="Email" class="b-input b-input_text register_email" />
                    <input type="text" name="newpassword" placeholder="Пароль" class="b-input b-input_text" />
                    <input type="submit" value="Обновить" class="b-btn b-btn_red-submit" />
                </div>
            </form>
        </div>
    </div>
    <!--Удалить профиль клиента-->
    <div id="remove_client_profile" class="im-popup">
        <div class="im-popup-inside bonami">
            <a class="b-popup__close"></a>
            <div class="b-red-title">Удаление профиля</div>
            <form class="b-popup b-popup_registration" id="remove_client_profile_form">
                <div class="b-popup__content _rel registration">
                    <input type="hidden" name="id" class="client_id">
                    <p>Вы действительно хотите удалить профиль клиента:</p>
                    <p class="client_name"></p>
                    <input type="submit" value="Удалить" class="b-btn b-btn_red-submit" />
                </div>
            </form>
        </div>
    </div>

    <!--Изменить баланс клиента-->
    <div id="edit_client_balans" class="im-popup">
        <div class="im-popup-inside bonami" style="background-color: #fff">
            <a class="b-popup__close"></a>
            <div class="b-red-title">Пополнение баланса/Изменение овердрафта</div>
            <p class="user_name"></p>
            <form class="b-popup" id="edit_client_balans_form">
                <div class="b-popup__content _rel registration">
                    <input type="hidden" name="id" class="client_id">
                    <div class="input_box">
                        <label for="client_balans_input">Пополнить баланс (0 - изменение овердрафта):</label>
                        <input type="text" name="credit" class="client_balans" id="client_balans_input">
                    </div>
                    <div class="input_box">
                        <label for="client_overdraft_input">Введите персональный овердрафт (0-используется глобальный)</label>
                        <input type="text" name="overdraft" class="client_overdraft" id="client_overdraft_input">
                    </div>
                    <input type="submit" value="Изменить" class="b-btn b-btn_red-submit submit" />
                </div>
            </form>
        </div>
    </div>
    <!--Перенести выбраные брони-->
    <div id="move_user_brones" class="im-popup">
        <div class="im-popup-inside bonami" style="background-color: #fff">
            <a class="b-popup__close"></a>
            <div class="b-red-title">Перенести выбраные брони</div>
            <div class="form">
                <form class="b-popup move_user_brones" data-click=".b-popup__close" id="move_user_brones_form">
                    <input type="hidden" value="" name="user_id" class="user_id">
                    <input type="hidden" value="" name="id" class="brone_id">
                    <input type="hidden" value="<?= ManagerHelper::flt_date(); ?>" name="date_new" class="date_new" id="time_period_input_date_new">
                    <input type="hidden" value="" name="time_period_input" class="time_period_input">

                    <div class="b-popup__content">
                        Перенос брони пользователя:<br>
                        <span class="b-popup__subtitle user_name"></span>?
                        <br>
                        <span class="servise_title"></span>
                        <span class="time_period_title"></span>
                        <div class="managers calendar"></div>
                        На дату: <spah class="move_user_brones_date_show">
                            <Дата не выбрана>
                        </spah>
                        <p class="b-popup__subtitle">Выберите тип услуг: </p>
                        <div class="flex-row-wrap popp_register_serv_container">
                            <?php foreach (BonamiHelper::get_services_ids() as $service_id) : ?>
                                <?php $slug = get_field('service_slug', $service_id); ?>
                                <div class="flax_row_nowrap_item">
                                    <input type="radio" name="servise" id="move-<?= $slug; ?>" class="b-checkbox__input" value="<?= $slug; ?>">
                                    <label for="move-<?= $slug; ?>" class="b-checkbox__label"> <?= get_the_title($service_id); ?>
                                        <span class="b-checkbox__box"></span>
                                    </label>
                                </div>
                            <?php endforeach; ?>
                        </div>
                        <div class="flex-row-wrap popp_register_serv_container move_user_brones_time_period_input hour_05" style="display: none;">
                            <?php foreach (BonamiHelper::get_min_period_keys('hour_05') as $key_period => $period) : ?>
                                <div class="flax_row_nowrap_item ">
                                    <input type="radio" name="time_period_input_part_hour_05" id="move-<?= $key_period; ?>" class="b-checkbox__input" value="<?= $key_period; ?>">
                                    <label for="move-<?= $key_period; ?>" class="b-checkbox__label"> <?= $period['title']; ?>
                                        <span class="b-checkbox__box"></span>
                                    </label>
                                </div>
                            <?php endforeach; ?>
                        </div>
                        <div class="flex-row-wrap popp_register_serv_container move_user_brones_time_period_input hour_10" style="display: none;">
                            <?php foreach (BonamiHelper::get_min_period_keys('hour_10') as $key_period => $period) : ?>
                                <div class="flax_row_nowrap_item ">
                                    <input type="radio" name="time_period_input_part_hour_10" id="move-hour_10_<?= $key_period; ?>" class="b-checkbox__input" value="<?= $key_period; ?>">
                                    <label for="move-hour_10_<?= $key_period; ?>" class="b-checkbox__label"> <?= $period['title']; ?>
                                        <span class="b-checkbox__box"></span>
                                    </label>
                                </div>
                            <?php endforeach; ?>
                        </div>

                        <input type="submit" value="Перенести" class="b-btn b-btn_red-submit submit" />
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!--Удалить выбраные брони-->
    <div id="remove_user_brones" class="im-popup">
        <div class="im-popup-inside bonami" style="background-color: #fff">
            <a class="b-popup__close"></a>
            <div class="b-red-title">Удалить выбранные брони</div>
            <div class="no_form">Не выбраны ячейки</div>
            <div class="form">
                <form class="b-popup add_user_brone" data-click=".b-popup__close" id="remove_user_brones_form">
                    <input type="hidden" value="" name="id" class="brone_id">
                    <input type="hidden" value="" name="user_id" class="user_id">
                    <div class="b-popup__content">
                        <p>
                            Вы действительно хотите удалить брони пользователя:<br>
                            <span class="b-popup__subtitle user_name"></span>?
                            <br>
                            <span class="servise_title"></span>
                            <span class="time_period_title"></span>
                        </p><br>
                        <div class="flex-row-wrap popp_register_serv_container">
                            <div class="flax_row_nowrap_item" style="width: 100%">
                                <input type="checkbox" id="remove_user_brone_balans_debet" name="credit" class="b-checkbox__input" value="1">
                                <label for="remove_user_brone_balans_debet" class="b-checkbox__label">Вернуть деньги на баланс?
                                    <span class="b-checkbox__box"></span>
                                </label>
                            </div>
                        </div>
                        <input type="submit" value="Удалить" class="b-btn b-btn_red-submit submit" />
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!--Добавить бронь-->
    <div id="add_user_brone" class="im-popup">
        <div class="im-popup-inside bonami" style="background-color: #fff">
            <a class="b-popup__close"></a>
            <div class="b-red-title">Добавить бронь</div>
            <div class="form">
                <form class="b-popup add_user_brone" data-click=".b-popup__close" id="add_user_brone_form">
                    <input type="hidden" value="" name="user_id" class="user_id">
                    <input type="hidden" value="" name="servise" class="servise">
                    <input type="hidden" value="" name="time_period_part" class="time_period_input">
                    <div class="inputs"></div>
                    <div class="b-popup__content">
                        <p>
                            Добавить брони пользователю:<br>
                            <span class="b-popup__subtitle user_name"></span>?
                            <br>
                            на: <?= ManagerHelper::flt_date_str() ?>
                        </p>
                        <p class="b-popup__subtitle">Выберите тип услуг: </p>
                        <div class="flex-row-wrap popp_register_serv_container">
                            <?php foreach (BonamiHelper::get_services_ids() as $service_id) : ?>
                                <?php $slug = get_field('service_slug', $service_id); ?>
                                <div class="flax_row_nowrap_item">
                                    <input type="radio" name="servise" id="add-<?= $slug; ?>" class="b-checkbox__input" value="<?= $slug; ?>">
                                    <label for="add-<?= $slug; ?>" class="b-checkbox__label"> <?= get_the_title($service_id); ?>
                                        <span class="b-checkbox__box"></span>
                                    </label>
                                </div>
                            <?php endforeach; ?>
                        </div>
                        <p class="b-popup__subtitle">Выберите временной интервал: </p>
                        <div class="flex-row-wrap popp_register_serv_container">
                            <?php foreach (ManagerHelper::get_service_prices() as $key => $name) : ?>
                                <div class="flax_row_nowrap_item">
                                    <input type="radio" name="time_period_input" id="add-<?= $key; ?>" class="b-checkbox__input time_period_input" value="<?= $key; ?>">
                                    <label for="add-<?= $key; ?>" class="b-checkbox__label"> <?= $name; ?>
                                        <span class="b-checkbox__box"></span>
                                    </label>
                                </div>
                            <?php endforeach; ?>
                        </div>
                        <p class="b-popup__subtitle">Выберите время: </p>
                        <div class="flex-row-wrap popp_register_serv_container add_user_brone_time_period_input hour_05" style="display: none;">
                            <?php foreach (BonamiHelper::get_min_period_keys('hour_05') as $key_period => $period) : ?>
                                <div class="flax_row_nowrap_item ">
                                    <input type="radio" name="time_period_input_part_hour_05" id="add-<?= $key_period; ?>" class="b-checkbox__input time_period_input" value="<?= $key_period; ?>">
                                    <label for="add-<?= $key_period; ?>" class="b-checkbox__label"> <?= $period['title']; ?>
                                        <span class="b-checkbox__box"></span>
                                    </label>
                                </div>
                            <?php endforeach; ?>
                        </div>
                        <p class="b-popup__subtitle">Выберите время: </p><br>
                        <div class="flex-row-wrap popp_register_serv_container add_user_brone_time_period_input hour_10" style="display: none;">
                            <?php foreach (BonamiHelper::get_min_period_keys('hour_10') as $key_period => $period) : ?>
                                <div class="flax_row_nowrap_item ">
                                    <input type="radio" name="time_period_input_part_hour_10" id="add-hour_10_<?= $key_period; ?>" class="b-checkbox__input time_period_input" value="<?= $key_period; ?>">
                                    <label for="add-hour_10_<?= $key_period; ?>" class="b-checkbox__label"> <?= $period['title']; ?>
                                        <span class="b-checkbox__box"></span>
                                    </label>
                                </div>
                            <?php endforeach; ?>
                        </div>

                        <div class="flex-row-wrap popp_register_serv_container">
                            <div class="flax_row_nowrap_item">
                                <input type="checkbox" id="add_user_brone_balans_debet" name="debet" class="b-checkbox__input" value="1">
                                <label for="add_user_brone_balans_debet" class="b-checkbox__label">Снимать деньги с баланса?
                                    <span class="b-checkbox__box"></span>
                                </label>
                            </div>
                        </div>
                        <input type="submit" value="Добавить" class="b-btn b-btn_red-submit submit" />
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!--Результаты запроса-->
    <div id="success" class="im-popup">
        <div class="im-popup-inside success">
            <a class="b-popup__close"></a>
            <div class="title success"></div>
            <div class="b-popup">
                <div class="b-popup__content">
                    <p class="message"></p>
                </div>
            </div>
        </div>
    </div>
    <a href="#" data-id="#success" class="popup-success im-popup-link"></a>
</div>