    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
 
    function init() {
        var center = $('#y-map').attr('rel');
        var coordinates = center.split(',');
        // Создание карты.
        // https://tech.yandex.ru/maps/doc/jsapi/2.1/dg/concepts/map-docpage/
        var myMap = new ymaps.Map("y-map", {
            // Координаты центра карты.
            // Порядок по умолчнию: «широта, долгота».
            center: [coordinates[0], coordinates[1]],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 12,
            // Элементы управления
            // https://tech.yandex.ru/maps/doc/jsapi/2.1/dg/concepts/controls/standard-docpage/
            controls: [
 
                'zoomControl', // Ползунок масштаба
                'rulerControl', // Линейка
                'routeButtonControl', // Панель маршрутизации
                'trafficControl', // Пробки
                'typeSelector', // Переключатель слоев карты
                'fullscreenControl', // Полноэкранный режим
 
                // Поисковая строка
                new ymaps.control.SearchControl({
                    options: {
                        // вид - поисковая строка
                        size: 'large',
                        // Включим возможность искать не только топонимы, но и организации.
                        provider: 'yandex#search'
                    }
                })
 
            ]
        });
        myMap.behaviors.disable('scrollZoom');
 
        // Добавление метки
        // https://tech.yandex.ru/maps/doc/jsapi/2.1/ref/reference/Placemark-docpage/
        var myPlacemark = new ymaps.Placemark([55.76, 37.64], {
            // Хинт показывается при наведении мышкой на иконку метки.
            hintContent: 'Содержимое всплывающей подсказки',
            // Балун откроется при клике по метке.
            balloonContent: 'Содержимое балуна'
        });
 
        // После того как метка была создана, добавляем её на карту.
        myMap.geoObjects.add(myPlacemark);
 
    }