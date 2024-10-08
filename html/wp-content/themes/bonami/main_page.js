/**
 * The main page JS scripts
 *
 * @package WordPress
 * @subpackage Bonami
 * @since Bonami 1.0
 */

jQuery(document).ready(function ($) {
    $('.service-item h3').on('click', function () {
        $(this).siblings().toggle();
        $("span.close").toggleClass("open");
    });

    $('.burger_menu_icon_container').click(function () {
        $(this).toggleClass('menu_hiden');
        $('.burger_menu').toggleClass('menu_hiden');
    });
});