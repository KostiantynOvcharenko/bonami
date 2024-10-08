class ManagerCabinet {

    constructor() {
        this.shown_li_count = 10;
        this.added_days = 60;
        this.container = '.cabinet___carousel ul';
        this.lis = '.cabinet___carousel ul li';
        this.lis_shown = '.cabinet___carousel ul li.shown';
        this.lis_hidden = '.cabinet___carousel ul li.hidden';
        this.lis_mybrones = '.cabinet___carousel ul li.today, .cabinet___carousel ul li.my_brone';
        this.init_calendar();
    }
    get_calendar(){
        return $('.calendar');
    }
    show_error_message(msg)
    {
        alert(msg);
    }
    show_ok_message(msg)
    {
        alert(msg);
    }
    show_loader()
    {
        $('.loader_fone').toggleClass('hiden');
    }
    init_calendar()
    {
        var manager_cabinet = this;
        this.get_calendar().map(function (index) {
            $(this).datepicker({
                defaultViewDate: {
                    year: (new Date()).getFullYear(),
                    month: (new Date()).getMonth() + index,
                    date: 1
                },
                option: {minDate: ($(this).val() === 'monthly' ? '+1m' : '+1m')},
                multidate: true,
                updateViewDate: false,
                numberOfMonths: 1,
                stepMonths: 1,
                language: 'ru',
                minDate: 0,
                onSelect: function(dateText, inst) { 
                    manager_cabinet.on_select_calendar(dateText);
                },
                beforeShowDay : function(date){
                    return manager_cabinet.before_show_day(date);
                }
            });
        });
    }
    show_calendar()
    {
        this.get_calendar().datepicker("refresh");
        this.get_calendar().show();
    }
    before_show_day(date)
    {
        return [true, "", ''];
    }
    on_select_calendar(dateText)
    {
        var dt_array = dateText.split('.');
        var date = dt_array[2]+'-'+dt_array[1]+'-'+dt_array[0]
        $('#manager_cabinet_flt_date').val(date);
        $('#time_period_input_date_new').val(date);
        $('.move_user_brones_date_show').text(dateText);
        
    }
    get_container()
    {
        return $(this.container);
    }
    get_lis()
    {
        return $(this.lis);
    }
    get_lis_shown()
    {
        return $(this.lis_shown);
    }
    get_lis_hidden()
    {
        return $(this.lis_hidden);
    }
    slide_left(){
        var li_first = this.get_lis_shown().first();
        li_first.removeClass('shown').addClass('hidden');
        var shown_count = this.get_lis_shown().size();
        var append_days = this.shown_li_count - shown_count;
        if(append_days > 0)
        {
            var last_day = this.get_lis().last().attr('rel');
            this.append_days(last_day);
        }
    }
    slide_righ(){
        var li_last_hidden = this.get_lis_hidden().last();
        li_last_hidden.removeClass('hidden').addClass('shown');
    }
    append_days(last_day)
    {
        var json =  $.ajax({
                type: "POST",
                url: ajaxurl,
                data: {action:'bonami_get_new_days', count:this.added_days, last_day:last_day},
                async: false
            }).responseText;            
        var new_days = $.parseJSON(json);
        for (const [key, value] of Object.entries(new_days)) {
            this.get_container().append('<li rel="'+key+'" class="shown '+value.class+'">'
                    +'<h6>'+value.title+'</h6>'
                    +'<span>'+value.number+' '+value.str_month+'</span>'
                    +'</li>'
                );
        }
    }
    ajax_success(data, $form)
    {
        this.show_loader();
        if(!data.result) {
            if(typeof $form !== "undefined")
            {
                $form.prepend('<p class="error" style="margin-bottom:25px">' + data.message + '</p>');
            }
        } else {
            if(data.href)
            {
                location.href=data.href;
            }
            else
            {
                location.href=location.href;
            }
        }
    }
}
    
jQuery(document).ready(function ($) {
    manager_cabinet = new ManagerCabinet();
    
    $('.cabinet___carousel_arrow.left').click(function(){
        manager_cabinet.slide_righ();
    });
    $('.cabinet___carousel_arrow.right').click(function(){
        manager_cabinet.slide_left();
    });
    $('.user_fam_flt_clear').click(function(){
       $('.user_fam_flt_input').val('');
    });
    $('.lockers_fam_flt_clear').click(function(){
       $('.lockers_fam_flt_input').val('');
    });
    $('.lockers_fam_flt').click(function(){
       $('.manager_cabinet .find_user_flt').toggleClass('hiden');
    });
    $('.clients_fam_flt').click(function(){
       $('.manager_cabinet .find_user_flt').toggleClass('hiden');
    });
    
    // Опубликовать отзыв
    $('.testimonial_publish').click(function(e) {
        e.preventDefault();
        var $this = $(this);
        var id = $(this).attr('rel');
        manager_cabinet.show_loader();
        $.ajax({
            url: ajaxurl,
            data: {action: 'testimonial_publish', id: id},
            type: "POST",
            success: function (json) {
                manager_cabinet.show_loader();
                var data = $.parseJSON(json);
                if (!data.result) {
                    manager_cabinet.show_error_message(data.message);
                } else {
                    $('#content_' + id).toggleClass('publish');
                    $this.hide();
                }
        }});
    });
    // Снять с публикации отзыв
        $('.testimonial_unpublish').click(function(e) {
        e.preventDefault();
        var $this = $(this);
        var id = $(this).attr('rel');
        manager_cabinet.show_loader();
        $.ajax({
            url: ajaxurl,
            data: {action: 'testimonial_unpublish', id: id},
            type: "POST",
            success: function (json) {
                manager_cabinet.show_loader();
                var data = $.parseJSON(json);
                if (!data.result) {
                    manager_cabinet.show_error_message(data.message);
                } else {
                    $('#content_' + id).toggleClass('publish');
                    $this.hide();
                }
        }});
        
    });
    // Удалить отзыв
        $('.testimonial_remove').click(function(e) {
        e.preventDefault();
        var id = $(this).attr('rel');
        manager_cabinet.show_loader();
        $.ajax({
            url: ajaxurl,
            data: {action: 'testimonial_remove', id: id},
            type: "POST",
            success: function (json) {
                manager_cabinet.show_loader();
                var data = $.parseJSON(json);
                if (!data.result) {
                    manager_cabinet.show_error_message(data.message);
                } else {
                    $('#testimonial_row_'+id).remove();
                }
        }});
    });
// Редактировать отзыв
    $('.testimonial_edit').click(function(e){
        var id = $(this).attr('rel');
        var popup_id = $(this).attr('data-id');
        var testimonial_user_position = $(this).attr('testimonial_user_position');
        $(popup_id+' .id').val(id);
        $(popup_id+' .testimonial_user_position').val(testimonial_user_position);
        $(popup_id+' .content').text($('#content_'+id+' .content').text());
    });
    //edit_testimonial
    $('#edit_testimonial_form').submit(function(e) {
        e.preventDefault();
        manager_cabinet.show_loader();
        $form = $(this);
        $form.ajaxSubmit({
                type:  'POST',
                url: ajaxurl,
                dataType:  'json',
                data: { action: 'edit_testimonial'},
                success: function(data) {
                    manager_cabinet.ajax_success(data, $form);
                }
        });
    });
    $('.main_table .remove_user_brone').click(function(e){
        e.preventDefault();
        var id = $(this).attr('rel');
        var user_id = $(this).attr('user_id');
        var data = $.parseJSON($('#user_info_data_'+user_id).text());
        var popup_id = $('#'+id).attr('data-id');
        $(popup_id+' .user_name').html(data.user_name);
        $(popup_id+' .user_id').val(data.user_id);
        $('#'+id).click();
    });
    // Добавить шкафчи
    $('#add_locker_form').submit(function(e) {
        e.preventDefault();
        manager_cabinet.show_loader();
        $form = $(this);
        $form.ajaxSubmit({
                type:  'POST',
                url: ajaxurl,
                dataType:  'json',
                data: { action: 'mk_add_locker'},
                success: function(data) {
                    manager_cabinet.ajax_success(data, $form);
                }
        });
    });
    // Изменить баланс клиенту
    $('.client_balans_edit').click(function(e){
        var id = $(this).attr('rel');
        var user_info = $.parseJSON($('#user_info_'+id).text());
        var popup_id = $(this).attr('data-id');
        $(popup_id+' .client_id').val(id);
        $(popup_id+' .user_name').text(user_info.user_name.title);
        $('#client_overdraft_input').text(user_info.overdraft.title);
    });
    $('#edit_client_balans_form').submit(function(e) {
        e.preventDefault();
        manager_cabinet.show_loader();
        $form = $(this);
        $form.ajaxSubmit({
                type:  'POST',
                url: ajaxurl,
                dataType:  'json',
                data: { action: 'edit_client_balans'},
                success: function(data) {
                    manager_cabinet.ajax_success(data, $form);
                }
        });
        return false;
    });
    // Добавить клиента
    $('#add_client_profile_form').submit(function(e) {
        e.preventDefault();
        manager_cabinet.show_loader();
        $form = $(this);
        $form.find('p.error').remove();
        $form.ajaxSubmit({
                type:  'POST',
                url: ajaxurl,
                dataType:  'json',
                data: { action: 'mk_add_client_profile'},
                success: function(data) {
                    manager_cabinet.ajax_success(data, $form);
                }
        });
        return false;
    });
    // Изменить профиль клиенту
    $('.client_profile_edit').click(function(e){
        var id = $(this).attr('rel');
        var user_info = $.parseJSON($('#user_info_'+id).text());
        var full_name = user_info.user_name.title.split(' ');
        var popup_id = $(this).attr('data-id');
        $(popup_id+' .client_id').val(id);
        $(popup_id+' .surname').val(full_name[0]);
        $(popup_id+' .register_name').val(full_name[1]);
        $(popup_id+' .second_name').val(full_name[2]);
        $(popup_id+' .register_phone').val(user_info.phone.title);
        $(popup_id+' .register_email').val(user_info.email.title);
    });
    $('#edit_client_profile_form').submit(function(e) {
        e.preventDefault();
        manager_cabinet.show_loader();
        $form = $(this);
        $form.ajaxSubmit({
                type:  'POST',
                url: ajaxurl,
                dataType:  'json',
                data: { action: 'mk_edit_client_profile'},
                success: function(data) {
                    manager_cabinet.ajax_success(data, $form);
                }
        });
        return false;
    });
    // Удалить клиента
    $('.client_profile_remove').click(function() {
        var id = $(this).attr('rel');
        var popup_id = $(this).attr('data-id');
        var user_info = $.parseJSON($('#user_info_'+id).text());
        $(popup_id+' .client_id').val(id);
        $(popup_id+' .client_name').text(user_info.user_name.title+'?');
    });
    $('#remove_client_profile_form').submit(function(e) {
        e.preventDefault();
        manager_cabinet.show_loader();
        $form = $(this);
        $form.ajaxSubmit({
                type:  'POST',
                url: ajaxurl,
                dataType:  'json',
                data: { action: 'client_remove'},
                success: function(data) {
                    manager_cabinet.ajax_success(data, $form);
                }
        });
        return false;
    });
    // Активировать клиента
    $('.client_profile_activate').click(function(e) {
        var id = $(this).attr('rel');
        manager_cabinet.show_loader();
        $.ajax({
            url: ajaxurl,
            data: {action: 'client_profile_activate', id: id},
            type: "POST",
            success: function (json) {
                var data = $.parseJSON(json);
                manager_cabinet.ajax_success(data);
        }});
    });
    // Деактивировать клиента
    $('.client_profile_deactivate').click(function(e) {
        var id = $(this).attr('rel');
        manager_cabinet.show_loader();
        $.ajax({
            url: ajaxurl,
            data: {action: 'client_profile_deactivate', id: id},
            type: "POST",
            success: function (json) {
                var data = $.parseJSON(json);
                manager_cabinet.ajax_success(data);
        }});
    });
    // Изменить шкафчи
    $('.locker_row_edit').click(function(e){
        var id = $(this).attr('rel');
        var num = $(this).attr('number');
        var popup_id = $(this).attr('data-id');
        $(popup_id+' .locker_id').val(id);
        $(popup_id+' .b-red-title').text('Изменить шкафчик №'+num);
    });
    $('#edit_locker_form').submit(function(e) {
        e.preventDefault();
        manager_cabinet.show_loader();
        $form = $(this);
        $form.ajaxSubmit({
                type:  'POST',
                url: ajaxurl,
                dataType:  'json',
                data: { action: 'mk_edit_locker'},
                success: function(data) {
                    manager_cabinet.ajax_success(data, $form);
                }
        });
        return false;
    });
    
    $('#remove_user_brone_form').submit(function() {
        manager_cabinet.show_loader();
        $form = $(this);
        $form.ajaxSubmit({
                type:  'POST',
                url: ajaxurl,
                dataType:  'json',
                data: { action: 'remove_user_brone'},
                success: function(data) {
                    manager_cabinet.ajax_success(data, $form);
                }
        });
        return false;
    });
    // Добавить бронь
    $('.add_user_brone_btn').click(function(e){
        var popup_id = $(this).attr('data-id');
        var user_id = $(this).attr('user_id');
        var data = $.parseJSON($('#user_info_data_'+user_id).text());
        $(popup_id+' .inputs').html('');
        $(popup_id+' .user_name').html(data.user_name);
        $(popup_id+' .user_id').val(data.user_id);
    });

    $('#add_user_brone_form').submit(function() {
        manager_cabinet.show_loader();
        var $form = $(this);
        $form.find('p.error').remove();
        $form.ajaxSubmit({
                type:  'POST',
                url: ajaxurl,
                dataType:  'json',
                data: { action: 'mk_add_user_brone'},
                success: function(data) {
                    manager_cabinet.ajax_success(data, $form);
                }
        });
        return false;
    });
    // Удалит выбраные брони
    $('.remove_user_brones_btn').click(function(e){
        var popup_id = $(this).attr('data-id');
        var user_id = $(this).attr('user_id');
        var data = $.parseJSON($('#user_info_data_'+user_id).text());
        var $form = $(popup_id+' .form');
        var $no_form = $(popup_id+' .no_form');
        var checked_checkbox = 'input.brone_edit_'+user_id+':checked';
        $no_form.hide();
        if(!$(checked_checkbox).size())
        {
            $form.hide();
            $no_form.show();
            setTimeout(function() {
                $('.b-popup__close').click();
            }, 2000);
        }
        else
        {
            $form.show();
            var brone_id = $(checked_checkbox).val();
            var brone = $.parseJSON($('#info-'+brone_id).text());
            $(popup_id+' .user_name').html(data.user_name);
            $(popup_id+' .servise_title').html(brone.servise_title);
            $(popup_id+' .time_period_title').html(brone.period_title);
            $(popup_id+' .brone_id').val(brone.id);
            $(popup_id+' .user_id').val(user_id);
        }
    });

    $('#remove_user_brones_form').submit(function() {
        manager_cabinet.show_loader();
        var $form = $(this);
        var paramObj = {};
        $.each($form.serializeArray(), function(_, kv) {
            paramObj[kv.name] = kv.value;
        });
        $form.ajaxSubmit({
                type:  'POST',
                url: ajaxurl,
                dataType:  'json',
                data: { action: 'mk_remove_user_brones'},
                success: function(data) {
                    manager_cabinet.ajax_success(data, $form);
                }
        });
        return false;
    });
    // Перенести выбраные брони
    $('.move_user_brones_btn').click(function(e){
        var popup_id = $(this).attr('data-id');
        var user_id = $(this).attr('user_id');
        var data = $.parseJSON($('#user_info_data_'+user_id).text());
        var $form = $(popup_id+' .form');
        var $no_form = $(popup_id+' .no_form');
        var checked_checkbox = 'input.brone_edit_'+user_id+':checked';
        $no_form.hide();
        if(!$(checked_checkbox).size())
        {
            $form.hide();
            $no_form.show();
            setTimeout(function() {
                $('.b-popup__close').click();
            }, 2000);
        }
        else
        {
            $form.show();
            var brone_id = $(checked_checkbox).val();
            var brone = $.parseJSON($('#info-'+brone_id).text());
            $(popup_id+' .user_name').html(data.user_name);
            $(popup_id+' .servise_title').html(brone.servise_title);
            $(popup_id+' .time_period_title').html(brone.period_title);
            $(popup_id+' .time_period_input').val(brone.period);
            $(popup_id+' .brone_id').val(brone.id);
            $(popup_id+' .user_id').val(user_id);
            $('.move_user_brones_time_period_input').hide();
            $('.move_user_brones_time_period_input.'+brone.period).show();
        }
    });

    $('#move_user_brones_form').submit(function() {
        manager_cabinet.show_loader();
        var $form = $(this);
        var paramObj = {};
        $form.ajaxSubmit({
                type:  'POST',
                url: ajaxurl,
                dataType:  'json',
                data: { action: 'mk_move_user_brones'},
                success: function(data) {
                    manager_cabinet.ajax_success(data, $form);
                }
        });
        return false;
    });
    // ФИО
    $('.main_table .user_info .user_name').click(function(){
        $(this).siblings('ul').children('li.toggled').toggleClass('userdata_hiden');
    });
    // Кнопка Изменить
    $('.main_table .change_row').click(function(){
        $(this).siblings().toggleClass('hiden');
        $(this).parents('td').first().siblings().find('.toggled').toggleClass('hiden');
    });
    //Кнопка вывода фильтра
    $('.im-popup-link[data-id="#date_servise_filter"]').click(function(){
        $('#date_servise_filter').show();
    });
    $('#date_servise_filter_submit_btn').click(function(){
        $('#date_servise_filter').hide();
    });
    $('#add_user_brone input[name="time_period_input"]').change(function(){
       var val = $('#add_user_brone input[name="time_period_input"]:checked').val();
        $('.add_user_brone_time_period_input').hide();
        $('.add_user_brone_time_period_input.'+val).show();
    });
    $('#move_user_brones input[name="time_period_input"]').change(function(){
       var val = $('#move_user_brones input[name="time_period_input"]:checked').val();
        $('.move_user_brones_time_period_input').hide();
        $('.move_user_brones_time_period_input.'+val).show();
    });
});

    
