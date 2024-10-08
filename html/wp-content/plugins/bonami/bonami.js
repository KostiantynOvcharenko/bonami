/**
 * The Bonami JS file
 *
 * @package WordPress
 * @subpackage Bonami
 * @since Bonami 1.0
 */

jQuery(document).ready(function($){
    $('#add_credit_to_user_submit').click(function(e){
        e.preventDefault();
        var credit = $('#user_credit').val();
        console.log(credit);
        return;
        if($('input[name="do_user_credit"]:checked').val() === '1' && credit > 0)
        {
            
            var data = {
                action : 'bonami_user_balanse_credit',
                user_id : $('#credit_user_id').val(),
                comment : $('#credit_comment').val(),
                credit : credit,
            };
            var $span = $(this).siblings('span');
            $(this).siblings('span').addClass('is-active');
            $.post( ajaxurl, data)
                .done(function(json) {
                    $span.removeClass('is-active');
                    var data = $.parseJSON(json);
                    $('#add_credit_to_user_msg').html(data.message);
                    $('#user_credit').val('');
                    $('#user_credit_no').prop( "checked", true );
                    if(data.balans)
                    {
                        $('#bonami_user_balanse').html(data.balans);
                    }
                });           
        }
    });
});