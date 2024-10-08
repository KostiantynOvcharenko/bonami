<?php
/**
 * The template for user bron add
 *
 * @package WordPress
 * @subpackage Bonami
 * @since Bonami 1.0
 */
define('USERBRON',TRUE);
?>
<div class="flex-column-nowrap bronirovanie container">
    <div class="flex-row-nowrap center-y link_back_container">
        <a href="/cabinet" class="link_back">Назад в личный кабинет</a>
    </div>
    <h2>Бронирование мест</h2>
    <?php include get_template_directory().'/brone_page.php';?>
</div>
