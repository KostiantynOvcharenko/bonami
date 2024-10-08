class MyBrones
{
    constructor() {
        this.shown_li_count = 10;
        this.added_days = 60;
        this.container = '.cabinet___carousel ul';
        this.lis = '.cabinet___carousel ul li';
        this.lis_shown = '.cabinet___carousel ul li.shown';
        this.lis_hidden = '.cabinet___carousel ul li.hidden';
        this.lis_mybrones = '.cabinet___carousel ul li.today, .cabinet___carousel ul li.my_brone';
        this.brones_container = '.my_brones_container';
        this.cabinet__content_switcher_a = '.cabinet__content_switcher span';
        this.calendar_container = '.calendar_container';
        this.calendars_number = 2;
        this.brones = {};
        this.my_brones = {};
        this.init_vars();
        this.fill_brones();
        this.init_calendar();
    }
    init_vars(){
    // device detection
        if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
            || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
            this.is_mobile = true;
            this.calendars_number = 1;
        }
        var json =  $.ajax({
                type: "POST",
                url: ajaxurl,
                data: {action:'bonami_get_my_brones_dates'},
                async: false
            }).responseText;
        var data = $.parseJSON(json);
        this.my_brones = data;
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
    get_lis_mybrones()
    {
        return $(this.lis_mybrones);
    }
    get_brones_container()
    {
        return $(this.brones_container);
    }
    get_calendar()
    {
        return $('.calendar');
    }
    init_calendar()
    {
        var my_brones = this;
        this.get_calendar().map(function (index) {
            $(this).datepicker({
                defaultViewDate: {
                    year: (new Date()).getFullYear(),
                    month: (new Date()).getMonth() + index,
                    date: 1
                },
                multidate: true,
                updateViewDate: false,
                numberOfMonths: my_brones.calendars_number,
                stepMonths: my_brones.calendars_number,
                language: 'ru',
                minDate: 0,
                onSelect: function(dateText, inst) { 
                    my_brones.calendar_show_brones(dateText);
                },
                beforeShowDay : function(date){
                    return my_brones.calendar_set_date_class(date);
                }
            });
        });
    }
    calendar_show_brones(dateText, inst)
    {
        var dt_array = dateText.split('.');
        var d = parseInt(dt_array[0]);
        var m = parseInt(dt_array[1])-1;
        var date = dt_array[2]+'_'+m+'_'+d;
        var date_bron = dt_array[2]+'-'+dt_array[1]+'-'+dt_array[0];
        if(typeof this.my_brones[date] !== "undefined")
        {
            this.show_brones(date_bron, dateText);
        }
    }
    calendar_set_date_class(date)
    {
        var month = parseInt(date.getMonth());
        var date_str = date.getFullYear()+'_'+month+'_'+date.getDate();
        if(typeof this.my_brones[date_str] !== "undefined")
        {
            return [true, "my_checked", ''];
        }
        return [true, '', ''];
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
    show_brones(date){
        var brones_container = this.get_brones_container();
        brones_container.html('');
        for (const [key, value] of Object.entries(this.get_brones(date))) {
            this.get_brones_container().append('<div class="my_brone_box flex-column-nowrap">'
                    +'<h6 class="my_brone_top">'+value.time+'</h6>'
                    +'<span class="my_brone_text">'+value.servise+'</span>'
                    +'</div>'
                );
        }
        var today = today = new Date().toISOString().slice(0, 10);
        if(today === date)
        {
            var dt_text = 'сегодня';
        }
        else
        {
            var dt_array = date.split('-');
            var d = parseInt(dt_array[2]);
            var m = parseInt(dt_array[1]);
            var textdate = this.get_month_string2(m);
            var dt_text = d+' '+textdate;
        }
        $('#brones_date_count').text(dt_text+': '+this.get_brones_container().find('.my_brone_box').length);
    }
    clear_brones_container()
    {
        var brones_container = this.get_brones_container();
        brones_container.html('');
    }
    get_brones(date)
    {
        if(typeof this.brones[date] === "undefined")
        {
            var json =  $.ajax({
                    type: "POST",
                    url: ajaxurl,
                    data: {action:'bonami_get_day_brones', date:date},
                    async: false
                }).responseText;            
            this.brones[date] = $.parseJSON(json);
        }
        return this.brones[date];
    }
    fill_brones()
    {
        var my_brones = this;
        $(this.get_lis_mybrones()).each(function(){
            var date = $(this).attr('rel');
            if(typeof my_brones.brones[date] === "undefined")
            {
                $.post(ajaxurl,{action:'bonami_get_day_brones', date:date}, function(json){
                    my_brones.add_brone(date, $.parseJSON(json));
                });
            }
        });
    }
    add_brone(date, data)
    {
        this.brones[date] = data;
    }
    switch_calendar()
    {
        $(this.calendar_container).toggleClass('hidden');
    }
    vip_get_index(date)
    {
        if(typeof date === "undefined")
        {
            var jsDate = this.get_calendar().datepicker('getDate');
        }
        else
        {
            var jsDate = date;
        }
        var month = jsDate.getMonth();
        var year = jsDate.getFullYear();
        return year+'_'+month;
    }
    get_month_string(month)
    {
        var month_names = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь',
            'Ноябрь','Декабрь'];
        return month_names[month];
    }
    get_month_string2(month)
    {
        var month_names = ['','января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября',
            'ноября','декабря'];
        return month_names[month];
    }
    get_service_title(servise)
    {
        switch (servise)
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
jQuery(document).ready(function () {
    my_brones = new MyBrones();
    $('.cabinet___carousel_arrow.left').click(function(){
        my_brones.slide_righ();
    });
    $('.cabinet___carousel_arrow.right').click(function(){
        my_brones.slide_left();
    });
    $('.cabinet___carousel ul li.my_brone, .cabinet___carousel ul li.today').click(function(){
        my_brones.show_brones($(this).attr('rel'));
    });
    $('.cabinet__content_switcher').on('click','.bon_active',function(e){
        my_brones.switch_calendar();
    });
});