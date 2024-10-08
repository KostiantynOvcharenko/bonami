class UserBron {

    constructor() {
        this.brones = {};
        this.brones_times = {};
        this.deprecated_dates = {};
        this.my_brones = {};
        this.conv_times = {};
        this.is_mobile = false;
        this.calendars_number = 3;
        this.periods = {};
        this.user_id = '';
        this.init_vars();
        this.init_calendar();
//        this.drow_convint_times(true);
//        this.drow_periods_list();
    }
    init_vars(){
    // device detection
        if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
            || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
            this.is_mobile = true;
            this.calendars_number = 1;
        }
        if(typeof $('#mk_bronirovanie_brone_user_id_input').val() !== "undefined")
        {
            this.user_id = $('#mk_bronirovanie_brone_user_id_input').val();
        }

        var json =  $.ajax({
                type: "POST",
                url: ajaxurl,
                data: {action:'bonami_get_my_brones_dates',user_id:this.user_id},
                async: false
            }).responseText;
        this.my_brones = $.parseJSON(json);
        var deprecated =  $.ajax({
                type: "POST",
                url: ajaxurl,
                data: {action : 'bonami_is_deprecated_date'},
                async: false
            }).responseText;
        this.deprecated_dates = $.parseJSON(deprecated);
        var json_3 =  $.ajax({
                type: "POST",
                url: ajaxurl,
                data: {action : 'bonami_get_month_convint_times', init_session:1},
                async: false
            }).responseText;
        var data = $.parseJSON(json_3);
        this.fill_convint_times(data.convint_times);
        this.fill_price_periods(data.price_periods);
        
    }
    get_calendar(){
        return $('.calendar');
    }
    init_calendar()
    {
        var user_bron = this;
        this.get_calendar().map(function (index) {
            $(this).datepicker({
                defaultViewDate: {
                    year: (new Date()).getFullYear(),
                    month: (new Date()).getMonth() + index,
                    date: 1
                },
                multidate: true,
                updateViewDate: false,
                numberOfMonths: user_bron.calendars_number,
                stepMonths: user_bron.calendars_number,
                language: 'ru',
                minDate: 0,
                onSelect: function(dateText, inst) { 
                    user_bron.drow_convint_times();
                },
                beforeShowDay : function(date){
                    var date_str = date.getFullYear()+'_'+date.getMonth()+'_'+date.getDate();
                    
                    if(typeof user_bron.my_brones[date_str] !== "undefined")
                    {
                        if(user_bron.my_brones[date_str].includes(user_bron.get_servise_id()))
                        {
                            return [true, "my_checked", ''];
                        }
                    }

                    if(typeof user_bron.deprecated_dates[date_str] !== "undefined")
                    {
                        if(user_bron.deprecated_dates[date_str].includes(user_bron.get_servise_id()))
                        {
                            return [true, "deprecated", ''];
                        }
                    }
                    return [true, "", ''];
                }
            });
        });
    }
    get_servise_id()
    {
        return $('.service_box.active').attr('service_id');
    }
    get_index()
    {
        var jsDate = this.get_calendar().datepicker('getDate');
        var day = jsDate.getDate();
        var month = jsDate.getMonth();
        var year = jsDate.getFullYear();
        return year+'_'+month+'_'+day;
    }
    get_conv_times()
    {
        var index = this.get_index()+'_'+this.get_servise_id();
        if(typeof this.conv_times[index] === "undefined")
        {
            var service_id = $('.service_box.active').attr('rel');
            var json =  $.ajax({
                    type: "POST",
                    url: ajaxurl,
                    data: {action:'bonami_get_convint_times', service_id:service_id, date:this.get_index()},
                    async: false
                }).responseText;            
            this.conv_times[index] = $.parseJSON(json);
        }
        return this.conv_times[index];
    }
    drow_convint_times(first)
    {
        this.get_calendar().show();
        var $content = $('.periods_names_list');
        $content.html('');
        for (const [key, value] of Object.entries(this.get_conv_times())) {
            $content.append('<span class="service_title_label '+value.class+' '+value.active+'" rel="'+key+'">'+value.title+'</span>');
        }
        if(!$content.find('.active').size())
        {
            $content.find('.enabled').eq(1).click();
        }
//        if(typeof first === "undefined")
        {
            this.drow_periods_list();
        }
        this.get_calendar().datepicker("refresh");
    }
    set_convint_times_active(new_key)
    {
        var index = this.get_index()+'_'+this.get_servise_id();
        for (const [key, value] of Object.entries(this.get_conv_times())) {
            this.conv_times[index][key]['active'] = '';
        }
        this.conv_times[index][new_key]['active'] = 'active';
    }
    get_periods_id()
    {
        return $('.service_title_label.active').attr('rel')
    }
    get_periods_list()
    {
        var index = this.get_index();
        if(typeof this.periods[index] === "undefined")
        {
            this.periods[index] = {};
        }
        if(typeof this.periods[index][this.get_servise_id()] === "undefined")
        {
            this.periods[index][this.get_servise_id()] = {};
        }
        if(typeof this.periods[index][this.get_servise_id()][this.get_periods_id()] === "undefined")
        {
            var price_period_id = $('.service_title_label.active').attr('rel')
            var jsDate = this.get_calendar().datepicker('getDate');
            var data = {
                action:'bonami_get_periods_list', 
                servise_id:this.get_servise_id(), 
                price_period_id:price_period_id, 
                day:jsDate.getDate(),
                month:jsDate.getMonth(),
                year:jsDate.getFullYear()
            };
            var json =  $.ajax({
                    type: "POST",
                    url: ajaxurl,
                    data: data,
                    async: false
                }).responseText;            
            this.periods[index][this.get_servise_id()][this.get_periods_id()] = $.parseJSON(json);
        }
        return this.periods[index][this.get_servise_id()][this.get_periods_id()];
    }
    drow_periods_list()
    {
        var $content = $('.periods_list');
        $content.html('');
        for (const [key, value] of Object.entries(this.get_periods_list())) {
            $content.append('<span rel="'+key+'" class="period_item center '+value.class+' '+value.active+'" start="'+value.time_start+'" end="'+value.time_end+'">'+value.title+'</span>');
        }
    }
    set_periods_list_active(key, active)
    {
        var index = this.get_index();
        this.periods[index][this.get_servise_id()][this.get_periods_id()][key]['active'] = active;
    }
    add_bron($period_item)
    {
        var index = this.get_index();
        var index_2 = this.get_servise_id()+'_'+this.get_periods_id();
        var id = 'bron_'+index+'_'+index_2+'_'+$period_item.attr('rel');
        var jsDate = this.get_calendar().datepicker('getDate');
        var day = jsDate.getDate();
        var month = this.get_month_string(jsDate.getMonth());
        var service = this.get_service_title();
        var $content = $('.brones_show');
        $content.append('<div id="'+id+'" class="flex-row-nowrap brones_show_item '+index+' '+this.get_servise_id()+'">'
            +'<div class="brones_show_item_inner_icon"></div>'
            +'<div class="flex-column-nowrap brones_show_item_inner">'
            +'<h4>'+day+' '+month+' '+$period_item.text()+'</h4>'
            +'<span>'+service+'</span>'
            +'</div>'
            +'</div>')
        ;
        if(typeof this.brones[index] === "undefined")
        {
            this.brones[index] = {};
        }
        if(typeof this.brones[index][this.get_servise_id()] === "undefined")
        {
            this.brones[index][this.get_servise_id()] = {};
        }
        if(typeof this.brones[index][this.get_servise_id()][this.get_periods_id()] === "undefined")
        {
            this.brones[index][this.get_servise_id()][this.get_periods_id()] = {};
        }
        if(typeof this.brones[index][this.get_servise_id()][this.get_periods_id()][$period_item.attr('rel')] === "undefined")
        {
            this.brones[index][this.get_servise_id()][this.get_periods_id()][$period_item.attr('rel')] = {};
        }
        var new_bron = {};
        new_bron['start'] = $period_item.attr('start');
        new_bron['end'] = $period_item.attr('end');
        new_bron['brone_id'] = id;
        new_bron['comment'] = day+' '+month+' '+$period_item.text()+' '+service;

        this.brones[index][this.get_servise_id()][this.get_periods_id()][$period_item.attr('rel')] = new_bron;
        return true;
    }
    remove_bron(rel)
    {
        var index = this.get_index();
        var index_2 = this.get_servise_id()+'_'+this.get_periods_id();
        var id = 'bron_'+index+'_'+index_2+'_'+rel;
        $('#'+id).remove();
        if(typeof this.brones[index] === "undefined")
        {
            return;
        }
        if(typeof this.brones[index][this.get_servise_id()] === "undefined")
        {
            return;
        }
        delete this.brones[index][this.get_servise_id()][this.get_periods_id()][rel];
    }
    remove_all_date_service_brones(){
        var index = this.get_index();
        if(typeof this.brones[index] === "undefined")
        {
            return;
        }
        if(typeof this.brones[index][this.get_servise_id()] === "undefined")
        {
            return;
        }
        for (const [key, value] of Object.entries(this.brones[index][this.get_servise_id()])) {
            delete this.brones[index][this.get_servise_id()][key];
        }
        $('.'+index+'.'+this.get_servise_id()).remove();
        $('.periods_list .period_item').removeClass('active');
        for (const [key, value] of Object.entries(this.get_periods_list())) {
            this.set_periods_list_active(key, '');
        }

    }
    set_convint_times(month)
    {
        this.month++;
        var $this = this;
        $.post(ajaxurl,{action : 'bonami_get_month_convint_times'},function(json){
            var data = $.parseJSON(json);
            $this.fill_convint_times(data.convint_times);
            $this.fill_price_periods(data.price_periods);
        });
    }
    fill_convint_times(convint_times)
    {
        for (const [key, value] of Object.entries(convint_times)) {
            if(typeof this.conv_times[key] === "undefined")
            {
                this.conv_times[key] = value;
            }
        }
    }
    fill_price_periods(price_periods)
    {
        for (const [key, value] of Object.entries(price_periods)) {
            this.periods[key] = value;
        }
    }
    get_month_string(month)
    {
        var month_names = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
        return month_names[month];
    }
    get_service_title()
    {
        switch (this.get_servise_id())
        {
            case 'haircut' :
                return 'Парикмахер';
            case 'manicure' :
                return 'Маникюр';
            case 'pedicure' :
                return 'Педикюр';
            case 'visage' :
                return 'Визажист';
            case 'brovist' :
                return 'Бровист';
            case 'cosmetologe' :
                return 'Косметолог';
        }
    }
}
    
jQuery(document).ready(function ($) {

    user_bron = new UserBron();
    for(var i=1;i<1;i++)
    {
        console.log(i);
        setTimeout(function()
        {
            user_bron.set_convint_times();

        }, 1000);    
    }

    $('.service_box.enabled').click(function(){
        $('.service_box').removeClass('active');
        $(this).addClass('active');
        user_bron.drow_convint_times();
    });
    $('.periods_names_list').on('click', '.service_title_label.enabled', function(){
        $('.service_title_label').removeClass('active');
        $(this).addClass('active');
        user_bron.remove_all_date_service_brones();
        user_bron.set_convint_times_active($(this).attr('rel'));
        user_bron.drow_periods_list($(this));
    });
    $('.periods_list').on('click', '.period_item.enabled', function(){
        var rel = $(this).attr('rel');
        $(this).toggleClass('active');
        var active = $(this).hasClass('active')?'active':'';
        if(active)
        {
            user_bron.add_bron($(this));
        }
        else
        {
            user_bron.remove_bron(rel);
        }
        user_bron.set_periods_list_active(rel, active);
    });
    
    
    $('#bonami_save_brones').click(function(){
            var data = {
                action: 'bonami_save_brones', 
                brones: user_bron.brones,
                user_id: user_bron.user_id
            };
            var json =  $.ajax({
                    type: "POST",
                    url: ajaxurl,
                    data: data,
                    async: false
                }).done(function( json ) {
                    var data = $.parseJSON(json);
                    $('.steps').hide();
                    for (const [key, value] of Object.entries(data)) {
                        if(value)
                        {
                            $('#'+key).addClass('error');
                            $('#'+key).find('.brones_show_item_inner span').after('\n\
                            <p class="error">'+value+'</p>');
                        }
                        else
                        {
                            $('#'+key).addClass('ok');
                        }
                    }
                });
            
    });
});
    
