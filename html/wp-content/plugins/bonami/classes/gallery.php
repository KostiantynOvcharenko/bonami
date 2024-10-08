<?php

/**
 * The Gallery class
 *
 * @package WordPress
 * @subpackage Bonami
 * @since Bonami 1.0
 */
class Gallery {

    private $_gallery_page_slug = 'gallery';

    public function get_images() {
        $page = get_page_by_path($this->_gallery_page_slug);
        return $page->post_content;
    }

}
