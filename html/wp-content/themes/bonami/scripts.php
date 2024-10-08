<?php

/**
 * The common scripts page
 *
 * @package WordPress
 * @subpackage Bonami
 * @since Bonami 1.0
 */

?>

<script src="<?= get_template_directory_uri() ?>/files/theme/js/vendor.js"></script>
<!--script src="<?= get_template_directory_uri() ?>/maps/api/js_sensor_false_key_aizasyce7vb6-gxk3gmqkxnsmcmtnkrjnpyrdve.js"></script-->
<script src="<?= get_template_directory_uri() ?>/_libs/jquery.form.min.js"></script>
<script src="<?= get_template_directory_uri() ?>/_libs/jquery.mask.min.js"></script>
<script src="<?= get_template_directory_uri() ?>/slick/slick.min.js"></script>
<script src="<?= get_template_directory_uri() ?>/files/theme/js/client.js"></script>
<script src="<?= get_template_directory_uri() ?>/files/theme/js/script.js"></script>
<script src="<?= get_template_directory_uri() ?>/files/theme/js/user.js"></script>
<script src="<?= get_template_directory_uri() ?>/files/theme/js/itemslide.min.js"></script>
<script src="<?= get_template_directory_uri() ?>/files/theme/js/bonami.js"></script>
<script src="<?= get_template_directory_uri() ?>/main_page.js"></script>
<?php if(defined('USERBRON')):?>
    <script src="<?= get_template_directory_uri() ?>/bonami_add.js"></script>
<?php endif; ?>
<?php if(defined('MY_BRONES')):?>
    <script src="<?= get_template_directory_uri() ?>/my_brones.js"></script>
<?php endif; ?>
<?php if(defined('MAIN_PAGE')):?>
<?php endif; ?>
<?php if(defined('VIP_BUY')):?>
    <script src="<?= get_template_directory_uri() ?>/vip_buy.js"></script>
<?php endif; ?>
