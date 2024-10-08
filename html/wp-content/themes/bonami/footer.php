<?php

/**
 * The template for displaying the footer
 *
 * @package WordPress
 * @subpackage Bonami
 * @since Bonami 1.0
 */
?>

<footer>
    <div class="container">
        <div class="footer-item">
            <a class="footer-logo" href="#"><img src="<?= get_template_directory_uri() ?>/img/logo-footer.svg" alt="Лого"></a>
            <a class="insta" href="https://www.instagram.com/bonami_bc/?igshid=av1dt93eyci3"><img src="<?= get_template_directory_uri() ?>/img/icon-inst.svg" alt="insta">@bonami_bc</a>
        </div>
        <div class="footer-item">
            <ul>
                <li><img src="<?= get_template_directory_uri() ?>/img/logo1.png" alt="Лого"></li>
                <li><img src="<?= get_template_directory_uri() ?>/img/logo2.png" alt="Лого"></li>
                <li><img src="<?= get_template_directory_uri() ?>/img/logo3.png" alt="Лого"></li>
            </ul>
            <p>Название компании: ЧУП «БОНАМИХОМ»<br>
                УНП 192836709</p>

            <p>Адрес: Республика Беларусь, 220030, г. Минск<br>
                ул. Интернациональная, д. 20а, пом. 71, 6-й этаж</p>
            <p>Свидетельство о государственной регистрации No 192836709 от 27.11.2020<br>
                выдано Минским горисполкомом</p>

            <!-- <p>Сайт зарегистрирован в Торговом реестре РБ _______</p> -->

            <p>Режим работы: 09:00 – 22:00<br>
                Телефон:
                <a class="utp-top-contact-phone" href="<?= BonamiHelper::phone_link() ?>">
                    <?= get_option('bonami_contact_phone'); ?>
                </a>
                <br>
                e-mail: <?= get_option('bonami_contact_email'); ?></p>
            </p>
        </div>

    </div>
    <div class="container">
        <p class="footer-copyright">2021. Все права защищены</p>
    </div>

</footer>