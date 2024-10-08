$(function () {
	$('#f_register').submit(function() {
    	$form = $(this);
	    $form.find('input.error, textarea.error').removeClass('error');
	    $('p.error').remove();

		$form.ajaxSubmit({
			dataType:  'json',
			timeout:   3000,
                        type: 'POST',
			data: { action: 'bonami_register'},
                        url: ajaxurl,
			success: function(data) {
				if(!data.result) {
                                        show_error_message(data, $form);
				} else {
					$form.resetForm();
					$('#registration').removeClass('_visible');
                                        show_success_message(data);
                                        setTimeout(function() {
                                            window.location = '';
                                        }, 2000);
				}
			},
			error: function(data ) { alert(data); },
		});
		return false;
	});

	$('#f_recover_password').submit(function() {
		$form = $(this);
		$form.find('input.error, textarea.error').removeClass('error');
		$('p.error').remove();
		$form.ajaxSubmit({
			type:  'POST',
                        url: ajaxurl,
			dataType:  'json',
			data: { action: 'bonami_password'},
			success: function(data) {
				if(!data.result) {
					show_error_message(data, $form);
				} else {
					$form.resetForm();
					show_success_message(data);
					setTimeout(function() {
                                            $('.b-popup__close').click();
					}, 2000);
				}
			}
		});
		return false;
	});

	$('#f_enter').submit( function() {
                $('p.error').remove();
		$('#f_enter').ajaxSubmit({
			dataType:  'json',
                        type: 'POST',
			data: { action: 'bonami_login'},
                        url: ajaxurl,
			success: function(response) {
				if(!response.result) {
					show_error_message(response, $('#f_enter'));
				} else {
					$('#login').removeClass('_visible');
					show_success_message(response);
					setTimeout(function () {
                                                window.location = '/cabinet';
//                                                window.location.href = '/cabinet'
					}, 2000);
				}
			}
		});
		return false;
	});

	$('#f_profile').submit(function() {
		$('#f_profile').ajaxSubmit({
			dataType:  'json',
			data: { handler: 'Registration', command: 'user_save_profile' },
			success: function(response) {
				if(!response.result) {
					alert(response.message);
				} else {
					alert(response.message);
				}
			}
		});
		return false;
	});

	$('#f_pass').submit(function() {
		$('#f_pass').ajaxSubmit({
			dataType:  'json',
			data: { handler: 'Registration', command: 'user_change_pass' },
			success: function(response) {
				if(!response.result) {
					alert(response.message);
				} else {
					alert(response.message);
					$('#f_pass').resetForm();
				}
			}
		});
		return false;
	});

	$('.logout').click( function() {
		$.ajax({
			dataType:  'json',
                        type: 'POST',
			data: { action: 'bonami_logout'},
                        url: ajaxurl,
			success: function(responce) {
				if(!responce.result) {
					alert(responce.message);
				} else {
					window.location.href = '/';
				}
			}
		});
		return false;
	});
	$('#bonami_show_new_payment').click( function() {
            $('#balanse_add_form').show();
            $(this).hide();
        });
	$('#bonami_new_payment').click( function() {
            var user_id = $('#user_id').val();
            var sum = $('#bonami_pay_sum').val();
		$.ajax({
			dataType:  'json',
                        type: 'POST',
			data: { action: 'bonami_new_payment', user_id:user_id, sum:sum},
                        url: ajaxurl,
			success: function(responce) {
				if(!responce.result) {
					alert(responce.message);
				} else if(responce.url) {
					window.location.href = responce.url;
				}
			}
		});
		return false;
	});
        $('#user_data_form').submit(function(e){
            e.preventDefault();
            $form = $(this);
            $('p.error').remove();
            $('.error').removeClass('error');
            $form.ajaxSubmit({
                    type:  'POST',
                    url: ajaxurl,
                    dataType:  'json',
                    data: { action: 'user_change_data'},
                    success: function(data) {
                        
                            if(!data.result) {
                                    show_error_message(data, $form);
                            } else {
                                    show_success_message(data);
                                    setTimeout(function() {
                                        location.href=location.href;
                                    }, 2000);
                            }
                    }
            });
        });
	$('#user_change_data').submit(function() {
		$form.find('input.error, textarea.error').removeClass('error');
		$form.find('p.error').remove();
		return false;
	});
	$('#user_add_testimonie').submit(function() {
            $form = $(this);
            $('input.error, textarea.error').removeClass('error');
            $('p.error').remove();
            $form.ajaxSubmit({
                    type:  'POST',
                    url: ajaxurl,
                    dataType:  'json',
                    data: { action: 'user_add_testimonie'},
                    success: function(data) {
                            if(!data.result) {
                                    show_error_message(data, $form);
                            } else {
                                    $form.resetForm();
                                    show_success_message(data);
                                    setTimeout(function() {
                                        location.href=location.href;
                                    }, 2000);
                            }
                    }
            });
            return false;
        });
	$('#feedback_form').submit(function() {
            $form = $(this);
            $('input.error, textarea.error').removeClass('error');
            $('p.error').remove();
            $form.ajaxSubmit({
                    type:  'POST',
                    url: ajaxurl,
                    dataType:  'json',
                    data: { action: 'user_add_feedback'},
                    success: function(data) {
                            if(!data.result) {
                                    show_error_message(data, $form);
                            } else {
                                    $form.resetForm();
                                    show_success_message(data);
                                    setTimeout(function() {
                                        $('a.b-popup__close').click();
                                    }, 2000);
                            }
                    }
            });
            return false;
        });
	$('#user_change_password').submit(function() {
            $form = $(this);
            $('input.error, textarea.error').removeClass('error');
            $('p.error').remove();
            $form.ajaxSubmit({
                    type:  'POST',
                    url: ajaxurl,
                    dataType:  'json',
                    data: { action: 'user_change_password'},
                    success: function(data) {
                            if(!data.result) {
                                    show_error_message(data, $form);
                            } else {
                                    $form.resetForm();
                                    show_success_message(data);
                                    setTimeout(function() {
                                        location.href=location.href;
                                    }, 2000);
                            }
                    }
            });
            return false;
	});
        $('input.change_profile').change(function(){
            var checked = $(this).prop('checked')?'1':'0';
            var slug = $(this).attr('name');
            var data = {action: 'change_profile', checked:checked, slug:slug};
            var $icon = $('#service_'+slug);
            var temp_class = 'change_'+slug;
            console.log(temp_class);
            $icon.addClass(temp_class);
            $.ajax({
                method: "POST",
                url: ajaxurl,
                dataType:  'json',
                data: data,
            })
                .done(function( data ) {
                    if(!data.result) {
                            show_error_message(data, $form);
                    } else {
                        $icon.removeClass(temp_class);
                        if(checked === '1')
                        {
                            $icon.parent().addClass('act');
                        }
                        else
                        {
                            $icon.parent().removeClass('act');
                        }
                    }
            });            
        });
});
