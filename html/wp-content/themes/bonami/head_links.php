<?php

/**
 * The common head_links
 *
 * @package WordPress
 * @subpackage Bonami
 * @since Bonami 1.0
 */
?>
<meta charset="UTF-8">
<link rel="icon" type="image/png" href="<?= get_template_directory_uri() ?>/files/settings/8/favicon-1.png"><!-- главная страница -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!--link rel="stylesheet" href="<?= get_template_directory_uri() ?>/files/theme/css/vendor.min.css" /-->
<link rel="stylesheet" href="<?= get_template_directory_uri() ?>/files/theme/css/common.min.css" />
<link rel="stylesheet" href="<?= get_template_directory_uri() ?>/files/theme/css/debug.css" />
<link rel="stylesheet" href="<?= get_template_directory_uri() ?>/slick/slick.css" />
<link rel="stylesheet" href="<?= get_template_directory_uri() ?>/slick/slick-theme.css" />
<link rel="stylesheet" href="<?= get_template_directory_uri() ?>/style.css" />
<!--[if lt IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js"></script><![endif]-->
<script type="text/javascript">
        var ajaxurl = "<?= admin_url('admin-ajax.php') ?>";
</script>
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Lora&display=swap" rel="stylesheet">