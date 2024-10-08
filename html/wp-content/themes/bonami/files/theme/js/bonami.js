/* 
 * The main Bonami theme js file
 * 
 * @package WordPress
 * @subpackage Bonami
 * @since Bonami 1.0
 */
jQuery(document).ready(function () {
    $('.phone').mask('+375 (00) 000-00-00');

    var url_string = window.location.href; //window.location.href
    var url = new URL(url_string);
    var orderId = url.searchParams.get('orderId');
    var lang = url.searchParams.get('lang');
    if (orderId && lang === 'ru')
    {
        $.ajax({
            dataType: 'json',
            type: 'POST',
            data: {action: 'bonami_check_payment', orderId: orderId},
            url: ajaxurl,
            success: function (responce) {
                show_success_message(responce);
                setTimeout(function () {
                    window.location = '/cabinet';
                }, 2000);
            }
        });
    }
    $('.pagenum.last').click(function (e) {
        e.preventDefault();
        var $a_page_nums = $('.pagenation_pages_numbers a');
        $a_page_nums.first().insertAfter($a_page_nums.last());

    });
    $('.pagenum.first').click(function (e) {
        e.preventDefault();
        var $a_page_nums = $('.pagenation_pages_numbers a');
        $a_page_nums.last().insertBefore($a_page_nums.first());
    });
    $('.testimonials-right-arrow').click(function (e) {
        e.preventDefault();
        var $testimonial_item = $('.testimonial-item');
        var id = $testimonial_item.first().next().attr('rel');
        $testimonial_item.first().insertAfter($testimonial_item.last());
        $('.testimonial-link').removeClass('active');
        $('#testimonial-link_' + id).addClass('active');

    });
    $('.testimonials-left-arrow').click(function (e) {
        e.preventDefault();
        var $testimonial_item = $('.testimonial-item');
        var id = $testimonial_item.last().attr('rel');
        $testimonial_item.last().insertBefore($testimonial_item.first());
        $('.testimonial-link').removeClass('active');
        $('#testimonial-link_' + id).addClass('active');
    });
    $('.testimonial-link').click(function () {
        $('.testimonial-link').removeClass('active');
        $(this).addClass('active');
        var id = $(this).attr('rel');
        var $testimonial_item = $('.testimonial-item');
        var count = $testimonial_item.size();
        var item_last = $testimonial_item.last();
        for (var i = 0; i < count; i++)
        {
            if ($testimonial_item.eq(i).attr('rel') !== id)
            {
                $testimonial_item.eq(i).insertAfter(item_last);
            } else
            {
                return;
            }
            item_last = $testimonial_item.eq(i);
        }
    });
    $(".slick_center").slick({
        adaptiveHeight: true,
        dots: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });


    $('.portfolio-slids-arrow.left-arrow').click(function (e) {
        e.preventDefault();
        $('.slick-prev.slick-arrow').click();
//        var slide = $('.blocks-gallery-item');
//        slide.first().insertAfter(slide.last());
    });
    $('.portfolio-slids-arrow.right-arrow').click(function (e) {
        e.preventDefault();
        $('.slick-next.slick-arrow').click();
//        var slide = $('.blocks-gallery-item');
//        slide.last().insertBefore(slide.first());
    });
    $('.lk_menu_container .head_mnu').click(function(){
        $('.lk_menu_container .head_item').toggleClass('hiden');
    });
});
