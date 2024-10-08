<?php
/**
 * The template for displaying the good location section
 *
 * @package WordPress
 * @subpackage Bonami
 * @since Bonami 1.0
 */
?>

<section class="b-good-location">
    <div class="b-container">
        <div class="b-gold-title">Работай комфортно!</div>
        <div class="b-good-location__text">
        </div>
        <div class="b-gallery js-gallery owl-carousel">
            <a href="<?=get_template_directory_uri()?>/files/galleries/1/4/src.jpg" data-fancybox="gallery">
                <img src="<?=get_template_directory_uri()?>/_thumbs/galleries-gallery_item/src-4.jpg" class="b-gallery__img" alt="" />
            </a>
            <a href="<?=get_template_directory_uri()?>/files/galleries/1/5/src.jpg" data-fancybox="gallery">
                <img src="<?=get_template_directory_uri()?>/_thumbs/galleries-gallery_item/src-5.jpg" class="b-gallery__img" alt="" />
            </a>
            <a href="<?=get_template_directory_uri()?>/files/galleries/1/7/src.jpg" data-fancybox="gallery">
                <img src="<?=get_template_directory_uri()?>/_thumbs/galleries-gallery_item/src-7.jpg" class="b-gallery__img" alt="" />
            </a>
            <a href="<?=get_template_directory_uri()?>/files/galleries/1/6/src.jpg" data-fancybox="gallery">
                <img src="<?=get_template_directory_uri()?>/_thumbs/galleries-gallery_item/src-6.jpg" class="b-gallery__img" alt="" />
            </a>
            <a href="<?=get_template_directory_uri()?>/files/galleries/1/11/src.jpg" data-fancybox="gallery">
                <img src="<?=get_template_directory_uri()?>/_thumbs/galleries-gallery_item/src-11.jpg" class="b-gallery__img" alt="" />
            </a>
            <a href="<?=get_template_directory_uri()?>/files/galleries/1/12/src.jpg" data-fancybox="gallery">
                <img src="<?=get_template_directory_uri()?>/_thumbs/galleries-gallery_item/src-12.jpg" class="b-gallery__img" alt="" />
            </a>
            <a href="<?=get_template_directory_uri()?>/files/galleries/1/8/src.jpg" data-fancybox="gallery">
                <img src="<?=get_template_directory_uri()?>/_thumbs/galleries-gallery_item/src-8.jpg" class="b-gallery__img" alt="" />
            </a>
            <a href="<?=get_template_directory_uri()?>/files/galleries/1/9/src.jpg" data-fancybox="gallery">
                <img src="<?=get_template_directory_uri()?>/_thumbs/galleries-gallery_item/src-9.jpg" class="b-gallery__img" alt="" />
            </a>
            <a href="<?=get_template_directory_uri()?>/files/galleries/1/10/src.jpg" data-fancybox="gallery">
                <img src="<?=get_template_directory_uri()?>/_thumbs/galleries-gallery_item/src-10.jpg" class="b-gallery__img" alt="" />
            </a>
            <a href="<?=get_template_directory_uri()?>/files/galleries/1/3/src.jpg" data-fancybox="gallery">
                <img src="<?=get_template_directory_uri()?>/_thumbs/galleries-gallery_item/src-3.jpg" class="b-gallery__img" alt="" />
            </a>
        </div>
        <div class="b-contacts">
            <div class="b-contacts__item">
                <div class="b-contacts__wrap">
                    <div class="b-contacts__left">
                        <div class="b-contacts__ico b-contacts__ico_pointer"></div>
                    </div>
                    <div class="b-contacts__right">
                        <div class="b-contacts__title">Адрес:</div>
                        <div class="b-contacts__text"><?= get_option('bonami_address');?></div>
                    </div>
                </div>
            </div>
            <div class="b-contacts__item b-contacts__item_center">
                <div class="b-contacts__wrap">
                    <div class="b-contacts__left">
                        <div class="b-contacts__ico b-contacts__ico_clock"></div>
                    </div>
                    <div class="b-contacts__right">
                        <div class="b-contacts__title">Время работы:</div>
                        <div class="b-contacts__text"><?= get_option('bonami_worktime');?></div>
                    </div>
                </div>
            </div>
            <div class="b-contacts__item">
                <div class="b-contacts__wrap">
                    <div class="b-contacts__left">
                        <div class="b-contacts__ico b-contacts__ico_phone"></div>
                    </div>
                    <div class="b-contacts__right">
                        <div class="b-contacts__title">Контактные телефоны:</div>
                        <div class="b-contacts__text"><?= get_option('bonami_contact_phone');?></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
