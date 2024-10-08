class VIP_Buy {

    constructor() {
        this.brones = {};
        this.sub_indexes = {};
        this.selected = {};
        this.user_id = '';
        this.is_mobile = false;
        this.calendars_number = 3;
        this.calendars_step = 1;
        this.init_vars();
        this.init_calendar();
    }
    init_vars(){
    // device detection
        if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
            || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
            this.is_mobile = true;
            this.calendars_number = 1;
        }
        if(typeof $('#mk_bronirovanie_vip_brone_user_id_input').val() !== "undefined")
        {
            this.user_id = $('#mk_bronirovanie_vip_brone_user_id_input').val();
        }
        this.load_brones('', this.calendars_number);
    }
    load_brones(index, calendars_number)
    {
        var json =  $.ajax({
                type: "POST",
                url: ajaxurl,
                data: {action:'bonami_get_vip_brones',user_id:this.user_id, index:index, calendars_number:calendars_number},
                async: false
            }).responseText;            
        var data = $.parseJSON(json);
        this.brones = data.brones;
    }
    load_new_brones(index, calendars_number)
    {
        var ar_index = index.split('_');
        var sub_index = ar_index[0]+'_'+ar_index[1];
        if(typeof this.sub_indexes[sub_index] !== "undefined")
        {
            return;
        }
        this.sub_indexes[sub_index] = true;
        var vip_by = this;
        $.post(ajaxurl,{action:'bonami_get_vip_brones',user_id:this.user_id, index:index, calendars_number:calendars_number},function(json){
            var data = $.parseJSON(json);
            vip_by.brones = $.extend({}, vip_by.brones, data.brones)

        });
        
    }
    get_calendar(){
        return $('.calendar');
    }
    init_calendar()
    {
        var vip_buy = this;
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
                numberOfMonths: vip_buy.calendars_number,
                stepMonths: 1,
                language: 'ru',
                minDate: 0,
                onSelect: function(dateText, inst) { 
                    vip_buy.toggle_month_checked(dateText);
                },
                beforeShowDay : function(date){
                    return vip_buy.before_show_day(date);
                }
            });
        });
    }
    show_calendar()
    {
        this.get_calendar().datepicker("refresh");
        this.get_calendar().show();
    }
    get_servise_id()
    {
        return $('.service_box.active').attr('service_id');
    }
    get_index(date)
    {
        if(typeof date === "undefined")
        {
            var jsDate = this.get_calendar().datepicker('getDate');
        }
        else
        {
            var jsDate = date;
        }
        return jsDate.getFullYear()+'_'+parseInt(jsDate.getMonth())+'_'+parseInt(jsDate.getDate());
    }
    before_show_day(date)
    {
        var index = this.get_index(date);
        if(typeof this.brones[index] !== "undefined")
        {
            return [true, this.brones[index][this.get_servise_id()], ''];
        }
        this.load_new_brones(index, this.calendars_step);
        return [true, '', ''];
        return [true, this.brones[index][this.get_servise_id()], ''];
    }
    get_date(dateText)
    {
        var dt_array = dateText.split('.');
        var m = parseInt(dt_array[1])-1;
        return new Date(dt_array[2], m, parseInt(dt_array[0]));
    }
    toggle_month_checked(dateText)
    {
        this.selected[this.get_servise_id()] = {};
        this.clear_selected();
        var end_dt = this.get_date(dateText);
        end_dt.setDate(end_dt.getDate() + 30);
        if(!this.check_selected(this.get_date(dateText), end_dt))
        {
            return;
        }
        for (var d = this.get_date(dateText); d < end_dt; d.setDate(d.getDate() + 1))
        {
            var temp_index = d.getFullYear()+'_'+parseInt(d.getMonth())+'_'+parseInt(d.getDate());
            this.brones[temp_index][this.get_servise_id()] = 'selected'
        }
        end_dt.setDate(end_dt.getDate() - 1);
        this.add_bron(this.get_date(dateText), end_dt);
    }
    check_selected(start_dt, end_dt)
    {
        for (var d = start_dt; d < end_dt; d.setDate(d.getDate() + 1))
        {
            var temp_index = d.getFullYear()+'_'+parseInt(d.getMonth())+'_'+parseInt(d.getDate());
            var _class = this.brones[temp_index][this.get_servise_id()];
            if( _class !== '' && _class !== 'selected')
            {
                show_success_message({title:'VIP бронирование',message:'В выбраном периоде есть занятые места'});
                setTimeout(function() {
                    $('.b-popup__close').click();
                }, 2000);                
                return false;
            }
        }
        return true;
    }
    clear_selected()
    {
        for (const [key, value] of Object.entries(this.brones)) {
            if(value[[this.get_servise_id()]] === "selected")
            {
                this.brones[key][this.get_servise_id()] = '';
            }
        }
    }
    add_bron(start_dt, end_dt)
    {
        $('.brones_show .'+this.get_servise_id()).remove();
        var start_month = parseInt(start_dt.getMonth())+1;
        var end_month = parseInt(end_dt.getMonth())+1;
        var firstDay = start_dt.getDate()+'.'+start_month+'.'+start_dt.getFullYear()
        var lastDay = end_dt.getDate()+'.'+end_month+'.'+end_dt.getFullYear()
        var service = this.get_service_title();
        this.selected[this.get_servise_id()] = {firstDay:firstDay,lastDay:lastDay};
        
        var $content = $('.brones_show');
        $content.append('<div class="flex-row-nowrap brones_show_item '+this.get_servise_id()+'">'
            +'<div class="brones_show_item_inner_icon"></div>'
            +'<div class="flex-column-nowrap brones_show_item_inner">'
            +'<h4>'+firstDay+' - '+lastDay+'</h4>'
            +'<span>'+service+'</span>'
            +'</div>'
            +'</div>');
    }
    get_month_string(month)
    {
        var month_names = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь',
            'Ноябрь','Декабрь'];
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
    vip_buy = new VIP_Buy();
    $('.service_box.enabled').click(function(){
        $('.vip_buy .service_box').removeClass('active');
        $(this).addClass('active');
        vip_buy.show_calendar(this);
    });
    $('#bonami_save_brones').click(function(){
            var data = {
                action: 'bonami_save_vip_brones', 
                selected: vip_buy.selected,
                user_id : vip_buy.user_id
            };
            $.ajax({
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
                            $('.'+key).addClass('error');
                            $('.'+key).find('.brones_show_item_inner span').after('\n\
                            <p class="error">'+value+'</p>');
                        }
                        else
                        {
                            $('.'+key).addClass('ok');
                        }
                    }
                });
    });

});

    
