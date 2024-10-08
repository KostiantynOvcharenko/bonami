<?php
/**
 * The template for user bron add
 *
 * @package WordPress
 * @subpackage Bonami
 * @since Bonami 1.0
 */
$user_id = ManagerHelper::get_mk_bronirovanie_user_id();
?>
<div class="flex-column-nowrap vip_buy container">
    <input type="hidden" name="brone_user_id" id="mk_bronirovanie_vip_brone_user_id_input" value="<?=$user_id;?>">
    <h2>VIP-абонемент</h2>
    <?php include get_template_directory().'/brone_page_vip.php';?>
</div>