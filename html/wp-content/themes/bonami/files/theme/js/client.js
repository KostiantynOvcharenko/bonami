"use strict";
function t(t) {
    var e = t.prop("scrollHeight"),
        i = t.outerHeight(),
        s = e - i;
    s && t.css({ height: e });
}
function e() {
    var t,
        e = $(".b-header__left").innerHeight() + $(".b-header__right").innerHeight(),
        i = 0;
    (t = $(".b-main-top").outerHeight()),
        $(".b-align-container").hasClass("menu-pad")
            ? ($(".b-align-container").css("padding-top", e), (i = e + 14), $(".b-main-top").css("background-position", "center top " + i + "px"), $(".b-main-top").height(t + e))
            : ($(".b-align-container").css("padding-top", 0), $(".b-main-top").css("background-position", "center top"), $(".b-main-top").height(""));
}
function i() {
    var t = $(".b-advantages__common-wrap");
    $(window).width() < 640 && 0 == p && (t.addClass("owl-carousel"), t.owlCarousel({ loop: !1, nav: !0, autoplay: !0, items: 1, margin: 0, autoWidth: !1, navText: [], dots: !0 }), (p = !0)),
        $(window).width() >= 640 && 1 == p && (t.removeClass("owl-carousel"), t.trigger("destroy.owl.carousel"), (p = !1));
}
function s() {
    var t = $(".b-online-account__wrapp");
    window.matchMedia("(max-width: 992px)").matches && 0 == u && (t.addClass("owl-carousel"), t.owlCarousel({ loop: !1, nav: !0, autoplay: !0, items: 1, margin: 0, autoWidth: !1, navText: [], dots: !0 }), (u = !0)),
        window.matchMedia("(min-width: 993px)").matches && 1 == u && (t.removeClass("owl-carousel"), t.trigger("destroy.owl.carousel"), (u = !1));
}
var o;
$(function () {
    $.datepicker.regional.ru,
        $("#phone").mask("+375(99)999-99-99"),
        $.datepicker.regional.ru,
        $(".js-textarea").on("keypress paste blur", function () {
            t($(this));
        }),
        $(".js-gallery").owlCarousel({ dots: !1, nav: !0, responsive: { 0: { items: 1 }, 550: { items: 2, margin: 10 }, 768: { items: 3, margin: 20 }, 992: { items: 4, margin: 20 } } }),
        $("[data-fancybox]").fancybox();
    var e = new MobileDetect(window.navigator.userAgent);
    e.mobile() || e.phone() || e.tablet()
        ? $(".js-days-carousel").length && ((o = $(".js-days-carousel")), o.removeClass("owl-carousel").addClass("mobile").parents(".b-select-day").addClass("mobile"), o.itemslide({ disable_clicktoslide: !0, left_sided: !0 }))
        : ($(".js-days-carousel").addClass("owl-carousel"), $(".js-days-carousel").owlCarousel({ loop: !1, nav: !0, dots: !1, autoWidth: !0, navText: [], margin: 5 })),
        $(window).width() < 992 &&
            $("body").on("click", ".js-mobile-hide-btn", function () {
                $(this).toggleClass("act").nextAll().slice(0, 3).slideToggle();
            }),
        $("body").on("click", ".js-anchor", function () {
            var t = $(this).attr("data-id");
            $("html, body").animate({ scrollTop: $("#" + t).offset().top }, 1e3);
        });
});
var a = $(".b-header").outerHeight(),
    n = $(".b-personal-inf-wrap"),
    r = n.parents(".b-content-table"),
    l,
    d,
    c,
    h,
    m;
$(window).on("scroll", function () {
    return;
    if ($(window).width() > 993) {
        if (n.length) {
            m = r.offset().top + r.outerHeight();
            var t = n.offset().top,
                e = t + n.outerHeight();
            l - 20 <= $(window).scrollTop() && e < m && n.outerHeight() < r.outerHeight()
                ? n.css({ position: "fixed", top: "20px", bottom: "", left: d, width: c })
                : t - 20 <= $(window).scrollTop() && e >= m && n.outerHeight() < r.outerHeight()
                ? n.css({ position: "absolute", top: "", bottom: "0", left: "0", width: c })
                : n.outerHeight() < r.outerHeight() && n.css({ position: "", top: "", left: "", width: "", bottom: "" });
        }
    } else {
        var i = $(window).scrollTop();
        i > a + 10 ? ($(".b-header").addClass("fixed"), $(".b-top-inner").addClass("js-header-fix")) : ($(".b-header").removeClass("fixed"), $(".b-top-inner").removeClass("js-header-fix"));
    }
}),
    $(window).on("load resize", function () {
        $(window).width() > 993 && n.length && ((l = n.offset().top), (d = n.offset().left), (c = n.outerWidth()), (h = l + n.outerHeight()), (m = r.offset().top + r.outerHeight()));
    }),
    $(function () {
        $(".js-add-comment").click(function () {
            $(this).css({ visibility: "hidden" }),
                $(this).siblings(".b-add-comment__textarea").focus(),
                $(this).siblings(".b-add-comment__link-edit").css({ display: "inline-block" }),
                $(this).parents(".b-admin-reservation__bottom").length && $(this).parents(".b-admin-reservation__bottom").addClass("act");
        }),
            $(".b-add-comment__textarea").on("change blur", function () {
                "" == $(this).val() &&
                    ($(this).siblings(".js-add-comment").css({ visibility: "visible" }),
                    $(this).siblings(".js-edit-textarea").css({ display: "none" }).html("Сохранить комментарий"),
                    $(this).parents(".b-admin-reservation__bottom").length && $(this).parents(".b-admin-reservation__bottom").removeClass("act"));
            }),
            $(".js-edit-textarea").click(function () {
                if ("" == $(this).siblings(".b-add-comment__textarea").val()) $(this).css({ display: "none" }).html("Сохранить комментарий");
                else {
                    if ($(this).hasClass("edit")) return $(this).siblings(".b-add-comment__textarea").attr("readonly", !1).removeClass("readonly"), void $(this).html("Сохранить комментарий").removeClass("edit");
                    $(this).siblings(".b-add-comment__textarea").attr("readonly", !0).addClass("readonly"), $(this).html("Редактировать комментарий").addClass("edit");
                }
            }),
            $(".js-edit-comment").click(function () {
                $(this).hasClass("act")
                    ? ($(this).html("Редактировать").removeClass("act"),
                      $("[data-text-id=" + $(this).attr("data-link-id") + "]")
                          .attr("readonly", !0)
                          .addClass("readonly"))
                    : ($(this).html("Сохранить").addClass("act"),
                      $("[data-text-id=" + $(this).attr("data-link-id") + "]")
                          .attr("readonly", !1)
                          .removeClass("readonly"));
            }),
            $(".js-remove").click(function () {
                $(this).hasClass("restore")
                    ? ($(this).removeClass("restore").html("Удалить"), $(this).parents(".b-admin-reservation").removeClass("remove"))
                    : ($(this).addClass("restore").html("Восстановить"), $(this).parents(".b-admin-reservation").addClass("remove"));
            }),
            $("body").on("click", ".js-scroll-top", function () {
                $("body, html").stop().animate({ scrollTop: 0 }, 500, "swing");
            });
    }),
    (function (t) {
        "function" == typeof define && define.amd ? define(["../widgets/datepicker"], t) : t(jQuery.datepicker);
    })(function (t) {
        return (
            (t.regional.ru = {
                closeText: "Закрыть",
                currentText: "Сегодня",
                monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
                monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
                dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
                dayNamesShort: ["вск", "пнд", "втр", "срд", "чтв", "птн", "сбт"],
                dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
                weekHeader: "Нед",
                dateFormat: "dd.mm.yy",
                firstDay: 1,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: "",
            }),
            t.setDefaults(t.regional.ru),
            t.regional.ru
        );
    }),
    $(".btn-show-reservation").click(function () {
        $(this).parents(".b-section").addClass("show-reservation");
    }),
    $(".btn-hide-reservation").click(function () {
        $(this).parents(".b-section").removeClass("show-reservation");
    }),
    $("document").ready(function () {
        $(".b-reservation__cell").mousemove(function (t) {
            var e = $(this).offset(),
                i = e.left,
                s = e.top,
                o = t.pageX - i + 10,
                a = t.pageY - s + 10;
            $(this).children(".b-reservation__hint").css({ top: a, left: o });
        });
    }),
    ($.fn.imPopup = function () {
        var t, e;
        return (
            (t = this),
            (e = ""),
            t.on("click", function (t) {
                if ((t.preventDefault(), (e = $(this).data("id")), $(e).length)) {
                    var i = window.innerWidth - $(window).width();
                    $("body").css({ overflow: "hidden", paddingRight: i, position: "fixed", width: "100%", height: "100%" }).addClass("js-modal");
                }
                return $(".im-popups " + e).addClass("_visible");
            }),
            $(".im-popup .b-popup__close").click(function (t) {
                return t.preventDefault();
            }),
            $(".im-popup").on("click", function (t) {
                if ((!$(t.target).hasClass("im-popup-inside") && !$(t.target).parents(".im-popup-inside").length && !$(t.target).hasClass("ui-corner-all") && !$(t.target).hasClass("ui-icon")) || $(t.target).hasClass("b-popup__close")) {
                    var e = "#" + $(this).attr("id");
                    return (
                        1 == $(".im-popup._visible").length &&
                            setTimeout(function () {
                                $("body").css({ overflow: "", paddingRight: "", position: "", width: "", height: "" }).removeClass("js-modal");
                            }, 300),
                        $(".im-popups " + e).removeClass("_visible")
                    );
                }
            })
        );
    }),
    $(".im-popup-link").imPopup(),
    $(".b-hamburger").click(function () {
        $(this).toggleClass("open"), $(".b-header").toggleClass("menu-opened"), $(".b-align-container").toggleClass("menu-pad"), e();
    }),
    $(window).on("load", function () {
        i(), s();
    }),
    $(window).on("resize", function () {
        i(), s();
    });
var p = !1,
    u = !1;
