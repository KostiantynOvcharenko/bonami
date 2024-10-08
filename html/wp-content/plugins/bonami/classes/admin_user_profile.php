<?php

/**
 * The User profile administration
 *
 * @package WordPress
 * @subpackage Bonami
 * @since Bonami 1.0
 */


class AdminUserProfile
{
    public function __construct() {
        add_action( 'user_new_form', array($this, 'bonami_user_admin_form'));
        add_action( 'show_user_profile', array($this, 'bonami_user_admin_form_new_options'));
        add_action( 'edit_user_profile', array($this, 'bonami_user_admin_form_new_options'));
        if( is_admin() ){
//            remove_action( 'admin_color_scheme_picker', 'admin_color_scheme_picker' );
//            add_action( 'personal_options', array($this, 'bonami_user_admin_hide_personal_options'));
        }
    }
    
    public function bonami_user_admin_form()
    {
        echo '<scr'.'ipt>jQuery(document).ready(function($) { 
            $("#send_user_notification").removeAttr("checked"); 
        } ); </scr'.'ipt>';        
    }
    
    public function bonami_user_admin_hide_personal_options()
    {
  ?>
    <script type="text/javascript">
        jQuery( document ).ready(function( $ ){
            $( '#your-profile .form-table:first, #your-profile h3:first, .yoast, .user-description-wrap, .user-profile-picture, h2, .user-pinterest-wrap, .user-myspace-wrap, .user-soundcloud-wrap, .user-tumblr-wrap, .user-wikipedia-wrap' ).remove();
        } );
    </script>
  <?php        
    }
    
    public function bonami_user_admin_form_new_options($profileuser)
    {
        if ( ! IS_PROFILE_PAGE && ! is_network_admin() && current_user_can( 'promote_user', $profileuser->ID ) )
        {
            include_once BONAMI_PATH.'/includes/custom_user_profile.php';
//            var_dump($profileuser);
        }
        return $profileuser;
    }
}

new AdminUserProfile;