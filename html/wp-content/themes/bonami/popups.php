<?php

/**
 * The template for displaying the popups
 *
 * @package WordPress
 * @subpackage Bonami
 * @since Bonami 1.0
 */
?>

<div class="im-popups">
    <div id="vip_brones_window" class="im-popup">
        <div class="im-popup-inside bonami">
            <a class="b-popup__close"></a>
            <div class="b-white-title">VIP абонемент</div>
            <form class="b-popup b-popup_registration" id="vip_brones_window_form" data-click=".b-popup__close">
                <div class="b-popup__content">
                    <?php get_template_part('/bonami_tasks/vip_buy'); ?>
                    <input type="submit" value="Зарегистрироваться" class="b-btn b-btn_red-submit" />
                </div>
            </form>
        </div>
    </div>
    <div id="registration" class="im-popup">
        <div class="im-popup-inside bonami">
            <a class="b-popup__close"></a>
            <div class="b-red-title">Регистрация</div>
            <form class="b-popup b-popup_registration" id="f_register" data-click=".b-popup__close">
                <div class="b-popup__content _rel registration">
                    <p id="_error"></p>
                    <input type="text" required="required" name="register_surname" id="surname" placeholder="Ваша фамилия" class="b-input b-input_text" />
                    <input type="text" required="required" name="register_name" id="register_name" placeholder="Ваше имя" class="b-input b-input_text" />
                    <input type="text" required="required" name="register_second_name" id="second_name" placeholder="Ваше отчество" class="b-input b-input_text" />
                    <input type="tel" required="required" name="register_phone" id="register_phone" placeholder="Контактный телефон" class="b-input b-input_text phone" />
                    <input type="email" required="required" name="register_email" id="register_email" placeholder="Email" class="b-input b-input_text" />
                    <input type="password" name="register_password" id="p1" placeholder="Пароль" class="b-input b-input_text" />
                    <p class="b-popup__subtitle">Выберите ваш тип услуг: </p>
                    <div class="flax-row-wrap popp_register_serv_container">
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
                    <input type="checkbox" name="accept" id="accept" class="b-checkbox__input">
                    <label for="accept" class="b-checkbox__label"> Принимаю условия
                        <a href="<?= get_template_directory_uri() ?>/files/pdf/bonami-oferta.pdf" target="_blank">Договора публичной оферты </a>
                        <span class="b-checkbox__box"></span>
                    </label>
                    <!-- <input type="checkbox" name="accept_all" id="accept_test" class="b-checkbox__input">
                    <label for="accept_test" class="b-checkbox__label">Принимаю условия
                        <a href="<?= get_template_directory_uri() ?>/---/files/pdf/oferta_pravila.doc" target="_blank">
                            Договора и правила оказания услуг
                        </a>
                        <span class="b-checkbox__box"></span>
                    </label> -->
                    <input type="submit" value="Зарегистрироваться" class="b-btn b-btn_red-submit" />
                </div>
            </form>
        </div>
    </div>
    <div id="callback" class="im-popup">
        <div class="im-popup-inside">
            <form class="b-popup poster" data-command="send_callback" data-click=".b-popup__close" action="form.php" method="post">
                <a class="b-popup__close"></a>
                <div class="b-popup__content _rel">
                    <div class="b-gold-title">Заказать звонок</div>
                    <input type="text" name="name" id="call_name" placeholder="Ваше имя" class="b-input b-input_text" />
                    <input type="text" name="phone" id="phone" placeholder="Контактный телефон" class="b-input b-input_text phone phone" />
                    <textarea rows="5" name="comment" id="callback_comment" placeholder="Оставить комментарий" class="b-input-textarea"></textarea>
                    <input type="submit" value="Заказать звонок" class="b-btn b-btn_gold-submit" />
                </div>
            </form>
        </div>
    </div>
    <div id="feedback" class="im-popup">
        <div class="im-popup-inside bonami feedback">
            <a class="b-popup__close"></a>
            <div class="b-red-title">Обратная связь</div>
            <form class="b-popup poster" id="feedback_form">
                <div class="b-popup__content _rel">
                    <input type="text" name="name" id="name" placeholder="Ваше имя" class="b-input b-input_text" />
                    <input type="email" required="required" name="email" id="email" placeholder="Контактный email" class="b-input b-input_text" />
                    <textarea rows="5" name="comment" id="comment" placeholder="Ваше сообщение" class="b-input-textarea"></textarea>
                    <input type="submit" value="Отправить" class="b-btn b-btn_red-submit" />
                </div>
            </form>
        </div>
    </div>
    <div id="login" class="im-popup login">
        <div class="im-popup-inside bonami">
            <a class="b-popup__close"></a>
            <div class="b-red-title">Вход</div>
            <form class="b-popup login" id="f_enter">
                <div class="b-popup__content _rel">
                    <input type="text" required="required" placeholder="Логин" name="log" class="b-input b-input_text" />
                    <input type="password" required="required" placeholder="Пароль" name="pwd" class="b-input b-input_text" />
                    <input type="submit" value="Войти" class="b-btn b-btn_red-submit" />
                    <div class="flax-row-nowrap login__remember_me_box">
                        <input type="checkbox" name="accept" id="login__remember_me" class="b-checkbox__input">
                        <label for="login__remember_me" class="b-checkbox__label">Запомнить меня
                            <span class="b-checkbox__box"><span></span></span>
                        </label>

                        <a href="" class="text-link js-forgot">Забыли пароль?</a>
                    </div>
                    <div class="flax-column-nowrap center login__register_jet">
                        <p class="b-popup__subtitle">Еще не зарегистрированы?</p>
                        <a href="#" class="text-link js-popup">Зарегистрироваться</a>
                    </div>
                </div>
            </form>
        </div>
    </div>

    <div id="forgot" class="im-popup">
        <div class="im-popup-inside bonami feedback">
            <a class="b-popup__close"></a>
            <div class="b-red-title">Восстановить</div>
            <form class="b-registration__form b-popup" id="f_recover_password" method="post">
                <div class="b-popup__content _rel">
                    <input type="text" name="login" id="login" placeholder="Логин" class="b-input b-input_text added_padding">
                    <input type="submit" value="Восстановить" class="b-btn b-btn_red-submit">
                </div>
            </form>
        </div>
    </div>
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