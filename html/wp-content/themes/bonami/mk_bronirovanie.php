<?php
/**
 * The template for user bron add
 *
 * @package WordPress
 * @subpackage Bonami
 * @since Bonami 1.0
 */
define('USERBRON',TRUE);
$user_id = ManagerHelper::get_mk_bronirovanie_user_id();
?>
<div class="flex-column-nowrap bronirovanie container">
    <h2>Бронирование мест</h2>
    <input type="hidden" name="brone_user_id" id="mk_bronirovanie_brone_user_id_input" value="<?=$user_id;?>">
    <?php include get_template_directory().'/brone_page.php';?>
</div>
