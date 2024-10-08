<?php

/**
 * The main template page file
 *
 * @package WordPress
 * @subpackage Bonami
 * @since Bonami 1.0
 */
define('MAIN_PAGE', TRUE);
?>

<head>
    <meta charset="utf-8">
    <title><?= get_option('bonami_meta_title'); ?></title>
    <?php get_template_part('head_links'); ?>
    <?php wp_head(); ?>
</head>

<body class="p-main">
    <header>
        <div class="burger_menu_icon_container">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="burger_menu menu_hiden">
            <div class="burger_menu_nav">
                <span>Личный кабинет:</span>
                <a class="btn btn-log im-popup-link" data-id="#login">Вход</a>
                <a class="btn im-popup-link" data-id="#registration">Регистрация</a>

                <a class="utp-top-contact-phone" href="<?= BonamiHelper::phone_link() ?>">
                    <?= get_option('bonami_contact_phone'); ?>
                </a>
                <a class="utp-top-contact-mail" href="<?= BonamiHelper::email_link() ?>">
                    <?= get_option('bonami_contact_email'); ?>
                </a>
                <a class="btn im-popup-link communicate" data-id="#feedback">Связаться с нами</a>
            </div>
        </div>

        <div class="container">
            <?php get_template_part('head_common'); ?>
            <div class="utp-middle">
                <h1>Твое дело! Делай смело!</h1>
                <p class="utp-desc">Новый коворкинг в самом центре Минска! <br>
                    Яркое место для реализации ваших творений!</p>
            </div>

            <div class="utp-list">
                <p>Коворкинг, который изменит ваше представление о сервисе</p>
                <ul>
                    <li>Педикюр</li>
                    <li>Маникюр</li>
                    <li>Стрижка</li>
                    <li>Визажист</li>
                    <li>Бровист</li>
                    <li>Кабинет косметолога</li>
                </ul>
            </div>

        </div>
    </header>

    <section class="advantages">
        <div class="container">
            <div class="advantages-top">
                <p><span>Начните прямо сейчас:</span> бронируйте удобное для вас время.
                    Об остальных условиях для работы позаботимся мы.
                </p>
                <a <?= BonamiHelper::get_link('btn', 'bronirovanie'); ?>>Бронировать</a>
            </div>

            <h2>Коворкинг под стать вашим амбициям</h2>
            <p class="advantages-desc">Bonami — это новый уровень сервиса!</p>
            <div class="advantages-items">
                <ul>
                    <li>Только качественное оборудование</li>
                    <li>Оборудование Dyson в аренду для парикмахеров</li>
                    <li>Доступные для покупки рабочие материалы</li>
                    <li>Выбор краски для парикмахеров</li>
                    <li>Почасовая тарификация</li>
                    <li>Online-кабинет для брони и личного графика</li>
                    <li>Персональный шкаф-ячейка для мастера</li>
                    <li>Удобное расположение в самом сердце города</li>
                    <li>Бесплатный Wi-Fi</li>
                    <li>Бесплатная парковка</li>
                    <li>Все для вкусного перерыва: чай, кофе, перекус</li>
                    <li>Интерьер, созданный с любовью к прекрасному</li>
                    <li>Только у нас — уборка вашего рабочего места</li>
                </ul>
            </div>
        </div>
    </section>


    <section class="service">
        <div class="container">
            <h2>Поможем вам создать незабываемую красоту!</h2>
            <p class="service-desc">Что вы получаете при аренде места в Bonami</p>
            <div class="service-items">
                <div class="service-item">
                    <h3>Парикмахер<span class="close"></span></h3>

                    <ul>
                        <li>Мойка</li>
                        <li>Колор бар</li>
                        <li>Консоль для принадлежностей</li>
                        <li>Зеркало</li>
                        <li>Кресло</li>
                        <li>Индивидуальный шкаф-ячейка</li>
                    </ul>
                </div>
                <div class="service-item">
                    <h3>Маникюр<span class="close"></span></h3>
                    <ul>
                        <li>Полностью оборудованный стол для работы</li>
                        <li>Фреза</li>
                        <li>Пылесос, встроенный в стол</li>
                        <li>УФ LED-лампа</li>
                        <li>Одноразовые салфетки</li>
                        <li>Лампа для освещения</li>
                    </ul>
                </div>
                <div class="service-item">
                    <h3>Педикюр<span class="close"></span></h3>
                    <ul>
                        <li>Готовое комфортное место для работы</li>
                        <li>Лампа освещения</li>
                        <li>Пылесос</li>
                        <li>Фреза</li>
                        <li>УФ LED-лампа</li>
                        <li>Удобный диван для клиента</li>
                    </ul>
                </div>
                <div class="service-item">
                    <h3>Кабинет <br>косметолога<span class="close"></span></h3>
                    <ul>
                        <li>Отдельный кабинет</li>
                        <li>Гидравлическая кушетка</li>
                        <li>Лампа-лупа</li>
                        <li>Плед </li>
                        <li>Умывальник</li>
                        <li>Ванна для процедур по телу </li>
                    </ul>
                </div>
                <div class="service-item">
                    <h3>Визажист<span class="close"></span></h3>
                    <ul>
                        <li>Полностью оборудованное место для работы</li>
                        <li>Зеркало с подсветкой</li>
                        <li>Кресло</li>
                        <li>Консоль с выдвижными ячейками для принадлежностей</li>
                    </ul>
                </div>
                <div class="service-item">
                    <h3>Бровист<span class="close"></span></h3>
                    <ul>
                        <li>Полностью оборудованное место для работы</li>
                        <li>Зеркало с подсветкой</li>
                        <li>Кресло</li>
                        <li>Консоль с выдвижными ячейками для принадлежностей</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>



    <section class="price">
        <div class="container">
            <h2>Выбирайте свое дело</h2>
            <div class="price-items">
                <?php foreach (BonamiHelper::get_services_ids() as $service_id) : ?>
                    <div class="price-item-fon">
                        <div class="price-item">
                            <h3><?= get_post_field('post_content', $service_id); ?></h3>
                            <p>
                                <span class="my-price"><span><?= get_field('cervice_price', $service_id)['hour_10']; ?> </span> BYN</span> / 1 час
                                <span class="my-price"><span><?= get_field('cervice_price', $service_id)['hour_05']; ?> </span> BYN</span> / 0.5 часа
                            </p>
                            <p class="my-price-smena">
                                <span class="my-price"><span><?= get_field('cervice_price', $service_id)['time_9-18'] ? get_field('cervice_price', $service_id)['time_9-18'] : '----'; ?> </span>BYN</span> / смена
                                <span class="price-icon"><span class="price-icon-text">с 9:00 до 18:00 или <br>с 13:00 до 22:00</span></span>
                            </p>
                            <p>
                                <span class="my-price"><span><?= get_field('cervice_price', $service_id)['time_9-22']; ?> </span>BYN</span> / полный день
                                <span class="price-icon"><span class="price-icon-text">с 9:00 до 22:00</span></span>
                            </p>
                            <p>
                                <span class="my-price"><span><?= get_field('cervice_price', $service_id)['month_1']; ?> </span>BYN</span> / месяц (VIP-абонемент)
                                <span class="price-icon"><span class="price-icon-text">Выбор любого места, которое закрепляется за вами на месяц + каждый день кофе в подарок</span></span>
                            </p>
                            <a <?= BonamiHelper::get_link('btn', 'bronirovanie'); ?>>Бронировать</a>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <section class="news">
        <div class="container">
            <h2>Bonami – когда талант и красота встречаются в одном месте</h2>
        </div>
        <div class="news-items">

            <div class="news-item">
                <img src="<?= get_template_directory_uri() ?>/img/news1.jpg" alt="3">
                <div class="news-item-desc">
                    <h3>Эксклюзивно <br> в Bonami!</h3>
                    <p>В продаже красители Wella, L’Oréal, Londa и других мировых брендов. У нас вы сможете приобрести
                        красители
                        по граммам, а также средства для укладки, уходовые средства и многое другое — все для вашей
                        комфортной
                        работы.</p>
                </div>
            </div>

            <div class="news-item">
                <div class="news-item-desc">
                    <h3>Новинки!</h3>
                    <ul>
                        <li>Забудьте о закупке красителей, оксидов и блондоров.</li>
                        <li>Предлагайте домашний уход для клиента (можно приобрести на ресепшен).</li>
                        <li>Инструменты в аренду: фены, стайлер, плойки, утюги Dyson.</li>
                        <li>Уборка (ваше дело — творить, а не убирать).</li>
                    </ul>
                </div>
                <img src="<?= get_template_directory_uri() ?>/img/news1.jpg" alt="3">
            </div>

            <div class="news-item">
                <img src="<?= get_template_directory_uri() ?>/img/news1.jpg" alt="3">
                <div class="news-item-desc">
                    <h3>Быстрая <br>регистрация – <br>легкий старт</h3>
                    <p>Получите доступ к своему личному кабинету, где вы сможете:</p>
                    <ul>
                        <li>Создать свой удобный рабочий график</li>
                        <li>Перенести и изменить бронь</li>
                        <li>Контролировать баланс лицевого счета</li>
                        <li>Пополнить баланс онлайн</li>
                        <li>Использовать овердрафт</li>
                        <li>Изучить личную статистику</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section class="portfolio-slids">
        <h2>Работайте и развивайтесь среди мастеров своего дела!</h2>
        <?php echo do_shortcode('[slick-carousel-slider slidestoshow="1" design="design-6" category="2" centermode="true" variablewidth="true" image_fit="false"]'); ?>
    </section>

    <section class="reviews-slids">
        <div class="container">
            <h2>Почему мастера выбирают Bonami</h2>
            <div class="testimonials-container">
                <a href="/" class="testimonials-left-arrow"></a>
                <div class="testimonials-inner">
                    <?php foreach (BonamiHelper::get_testimonial_ids() as $testimonial_id) : ?>
                        <?php $testimonial_autor = get_field('testimonial_autor', $testimonial_id); ?>
                        <div class="testimonial-item" rel="<?= $testimonial_id; ?>">
                            <div class="testimonial-title"><?= isset($testimonial_autor['user_firstname']) ? $testimonial_autor['user_firstname'] : BonamiHelper::get_user_firstname($testimonial_autor); ?></div>
                            <div class="testimonial-sub-title"><?= get_field('testimonial_user_position', $testimonial_id); ?></div>
                            <div class="testimonial-cocnent"><?= get_post_field('post_content', $testimonial_id); ?></div>
                        </div>
                    <?php endforeach; ?>
                </div>
                <a href="/" class="testimonials-right-arrow"></a>

                <?php $link_active = TRUE; ?>
                <div class="testimonial-item-links">
                    <?php foreach (BonamiHelper::get_testimonial_ids() as $testimonial_id) : ?>
                        <span class="testimonial-link <?= $link_active ? ' active' : '' ?>" id="testimonial-link_<?= $testimonial_id; ?>" rel="<?= $testimonial_id; ?>"></span>
                        <?php $link_active = FALSE; ?>
                    <?php endforeach; ?>
                </div>

            </div>
        </div>
    </section>

    <section class="contacts">
        <div class="container">
            <h2>Удобное расположение для вас и ваших клиентов!</h2>
        </div>
        <div class="container">
            <div id="map" style="height: 700px; display: none"></div>
        </div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2350.7095771181803!2d27.55192731611683!3d53.90136574069329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfea23d78545%3A0x4a87fb2b7362dff0!2svulica%20Internacyjana%C4%BAnaja%2020%2C%20Minsk!5e0!3m2!1sen!2sby!4v1611743290176!5m2!1sen!2sby" width="100%" height="700" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        <div class="container">
            <div class="contacts-block">
                <h3>Контакты</h3>
                <p>Адрес: Интернациональная 20А, Liberty Residence</p>
                <p>График работы: с 9:00 до 22:00</p>
                <p>Телефон для связи:                 
                    <a class="utp-top-contact-phone" href="<?= BonamiHelper::phone_link() ?>">
                        <?= get_option('bonami_contact_phone'); ?>
                    </a>
                </p>
            </div>
        </div>
    </section>
    <?php get_footer(); ?>
    <?php get_template_part('popups'); ?>
    <?php get_template_part('scripts'); ?>
    <?php wp_footer(); ?>
</body>