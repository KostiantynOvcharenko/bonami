<?php
/**
 * The template for personal user cabinet
 *
 * @package WordPress
 * @subpackage Bonami
 * @since Bonami 1.0
 */
define('MY_BRONES',TRUE);
?>

<div class="cabinet__top_menu_container">
    <a href="" class="bon_active">Мои брони</a>
    <a href="/profile">Профиль</a>
    <a href="balans">История списаний</a>
</div>

<div class="bonami-page-container">
    <div class="cabinet__content_switcher">
        <span class="as_header">Мои брони</span>
        <span class="bon_active">Календарь</span>
    </div>

    <div class="cabinet___carousel_content calendar_container">
        <div id="carousel" class="cabinet___carousel_arrow left"></div>
        <div id="carousel" class="cabinet___carousel">
            <ul>
                <?php foreach (BonamiHelper::get_calendar_days() as $key=>$day):?>
                <li rel="<?= $key; ?>" class="shown <?= $day['class']?>">
                    <h6><?= $day['title']?></h6>
                    <span><?= $day['number'].' '.$day['str_month']?></span>
                </li>
                <?php endforeach; ?>
            </ul>
        </div>
        <div id="carousel" class="cabinet___carousel_arrow right"></div>
    </div>
    <div class="cabinet___calendar calendar_container calendar hidden"></div>
    <?php $brones = BonamiHelper::get_my_brones();?>
    <div class="my_brones_top_container">
        <span class="as_header">Броней на <span id="brones_date_count">сегодня: <?= count($brones); ?> </span></span>
        <div class="my_brones_container flex-row-wrap">
            <?php foreach($brones as $brone):?>
                <div class="my_brone_box flex-column-nowrap">
                    <h6 class="my_brone_top"><?= $brone['time']?></h6>
                    <span class="my_brone_text"><?= $brone['servise']?></span>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</div>
