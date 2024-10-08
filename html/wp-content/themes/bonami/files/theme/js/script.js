$('body').on('click', '.js-show-more', function(){

	var $this = $(this);
	var ct = parseInt($('.js-item').length);
	var all = parseInt($this.data('all'));
	var in_page = parseInt($this.data('in_page'));

	$data = $this.data();

	$data.start = ct;
	$data.command = 'load_list';

	$.ajax({
		url: '/form/',
		method: 'post',
		data: $data,
		dataType: 'json',
		success: function(response) {
			if(!response.result) {
				console.log(response.message);
			} else {
				$('.js-insert-ajax').html(response.message);
				if(ct + in_page >= all) {
					$('.js-show-more').remove();
				}
			}
		}
	});

	return false;
});

$('[data-scrollto]').click( function(){
	var target = $(this).data('scrollto');
	scrollTo(target, 50);
});


$('body').on('click', '.js-popup', function() {
	$('#login').removeClass('_visible');
	$('#registration').addClass('_visible');
	return false;
});

$('body').on('click', '.js-forgot', function() {
	$('#login').removeClass('_visible');
	$('#forgot').addClass('_visible')
	return false;
});

//$('.map').each(function(indx, el) {
//    var gmaps = $(el).data('mark');
//    var gmaps_arr = gmaps.split(',');
//    var lat = parseFloat(gmaps_arr[0]);
//    var lng = parseFloat(gmaps_arr[1]);
//    var map;
//    var image = $(this).data('marker');
//    var map_el = $(this);
//
//    var zoom_int = parseInt($(this).data('zoom'));
//    if (!zoom_int) zoom_int = 14;
//
//    var id = $(this).attr('id');
//    var settings = {
//        zoom: zoom_int,
//        mapTypeControl: true,
//        zoomControl: true,
//        navigationControl: true,
//        scrollwheel: false,
//        disableDefaultUI: true,
//        panControl: true,
//        scaleControl: true,
//        overviewMapControl: true,
//        streetViewControl: false
//    };
//
//    map = new google.maps.Map(document.getElementById(id), settings);
//
//    if (gmaps) {
//        var latlng = new google.maps.LatLng(lat, lng);
//        map.setCenter(latlng);
//        var position = createLatLng(gmaps, map_el);
//
//        if (image) {
//            var marker = new google.maps.Marker({
//                position: position,
//                icon: image,
//                map: map
//            });
//
//        } else {
//            var marker = new google.maps.Marker({
//                position: position,
//                map: map
//            });
//
//        }
//    }
//
//    if ($('[data-gmap]').length > 0) {
//        createBounds(map, image);
//    }
//});

function scrollTo(target, offset) {
	if( !$(target).length ) return false;
	$('html, body').animate({
		scrollTop: $(target).offset().top - offset
	}, 400);
}

function createBounds(map, image) {

    var markers = [];

    for (i in markers) {
        markers[i].setMap(null);
    }

    var bounds = new google.maps.LatLngBounds();
    $('[data-gmap]').each(function() {
        var gmaps = $(this).data('gmap');
        var gmaps_arr = gmaps.split(',');
        var lat = parseFloat(gmaps_arr[0]);
        var lng = parseFloat(gmaps_arr[1]);
        var id = $('[data-gmap]').index(this);
        var title = $(this).find('.b-item__title').text();
        var address = $(this).data('address');

        if (lat && lng) {

            var myLatLng = new google.maps.LatLng(lat, lng);
            bounds.extend(myLatLng);

            marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                icon: image,
            });

            markers[id] = marker;

            var content = '<div style="min-width:180px;min-height:50px;">' + title;
            if (address) content += '<br />' + address;
            content += '</div>';

            var infowindow = new google.maps.InfoWindow({
                content: content,
                maxWidth: 250
            });
            // google.maps.event.addListener(markers[id], 'click', function() {
            // 	infowindow.open(map, markers[id]);
            // });

            google.maps.event.addListener(markers[id], 'mouseover', function() {
                infowindow.open(map, markers[id]);
            });
            google.maps.event.addListener(markers[id], 'mouseout', function() {
                infowindow.close(map, markers[id]);
            });
        }
    });

    map.fitBounds(bounds);
}

function createLatLng(gmaps, map_el) {
    var gmaps_arr = gmaps.split(',');
    var latitude = parseFloat(gmaps_arr[0]);
    var longitude = parseFloat(gmaps_arr[1]);

    var map_center_lat = latitude;
    var map_center_lng = longitude;

    var up_lat = parseFloat(map_el.data('up_lat'));
    if (up_lat > 0) {
        map_center_lat -= up_lat;
    }
    var down_lat = parseFloat(map_el.data('down_lat'));
    if (down_lat > 0) {
        map_center_lat += down_lat;
    }

    var left_lng = parseFloat(map_el.data('left_lng'));
    if (left_lng > 0) {
        map_center_lng += left_lng;
    }
    var right_lng = parseFloat(map_el.data('right_lng'));
    if (right_lng > 0) {
        map_center_lng -= right_lng;
    }

    var latlng = new google.maps.LatLng(map_center_lat, map_center_lng);


    return latlng;
}

function show_success_message(response) {
    $('#success p.message').html(response.message);
    $('#success .title').html(response.title);
    $('a.popup-success').click();
}

function show_error_message(response, $form) {
    $form.prepend('<p class="error" style="margin-bottom:25px">' + response.message + '</p>');
}
function _show_error_message(response, $form) {
    var $error_el = $form.find('[name="' + response.field + '"]');
    if ($form.parents('.im-popups').length && response.message && !$form.hasClass('js-transfer-form')) {
        $form.find('.b-popup__content').append('<p class="error">' + response.message + '</p>');
		$error_el.addClass('error');
		$form.find('#_error_message').html(response.message);
//		$('#_error').html(response.message);

    } else if ($form.hasClass('b-form-booking') || $form.hasClass('js-transfer-form')) {

		$('#success p.message').html(response.message);
		$('#success .title').html(response.title);
		$('a.popup-success').click();

    } else if($form.data('reload')) {
		$form.find('#_error_message').html(response.message);
		$error_el.addClass('error');
	} else {
        $form.append('<p class="error">' + response.message + '</p>');
//		$('#_error').html(response.message);
		$error_el.addClass('error');
    }

}

$('body').on('submit', '.poster', function() {
	var $form = $(this);
	var h = $form.data('handler');
	if (!h) h = 'Poster';
	$form.find('input.error, textarea.error').removeClass('error');
	$form.find('p.error').remove();

	$form.ajaxSubmit({
		dataType: 'json',
		data: {
			handler: h,
			command: $form.data('command')
		},
		success: function(response) {
			if (!response.result) {
				$('.ajax-loader').remove();
				show_error_message(response, $form);
			} else {
				$form.resetForm();
				$('.ajax-loader').remove();
				show_success_message(response);
				if($form.data('command') == 'change_comment') {
					if(response.comment) {
						$('.js-check-book-admin[data-item_id='+response.item_id+']').append('<span class="b-reservation-cell__comment"></span>');
					} else {
						$('.js-check-book-admin[data-item_id='+response.item_id+']').find('.b-reservation-cell__comment').remove();
					}
				}
				setTimeout(function() {
					if ($form.data('click')) {
						$($form.data('click')).click();
					}
					if ($form.data('reload')) {
						window.location.reload();
					}
				}, 1500);
			}
		}
	});
	return false;
});
