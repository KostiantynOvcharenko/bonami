<?php

function bonami_theme_setup()
{
		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );    
		add_theme_support( 'post-thumbnails' );
}
add_action( 'after_setup_theme', 'bonami_theme_setup' );
add_filter('show_admin_bar', '__return_false'); // отключить


