<?php

/**
 * The template for displaying the Yandex map section
 *
 * @package WordPress
 * @subpackage Bonami
 * @since Bonami 1.0
 */

// [yamap center=’55.7532,37.6225′ height=’15rem’ zoom=’12’ type=’yandex#map’ controls=’typeSelector;zoomControl’][yaplacemark coord=’55.7532,37.6225′ icon=’islands#blueRailwayIcon’ color=’#ff751f’ name=’Placemark’][/yamap]
?>

<section class="b-map-wrap">
    <div class="b-map map" id="y-map" rel="<?= get_option('bonami_googlemap_mark');?>"></div>
</section>
