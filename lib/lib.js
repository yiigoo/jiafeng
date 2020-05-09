//interfaceFun接口函数，初始化入口
//indexMain  对应页面

// import ff_owl from './owl.carousel';
// {faf: include('../options/headerHover/headerHover.js')}
$(function () {
    $('body').css('opacity', '1');
})
var options = {},
    newStyleContent = {
        insertCss: `
            .ff_bodyMask {
                position: fixed;
                z-index: 10000;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, .3);
                display: none;
            }
            .ff_bodyMask-content {
                position: absolute;
                top: 50%;
                left: 50%;
                background: #fff;
                transform: translate3D(-50%, -60%, 0);
            }
        `
    },
    job = {};

(function (win, $) {

    $.fn.extend({
        simpleSlider: function simpleSlider(option) {
            
                        var _width = 0,
                            widths = [],
                            fullWidths = [],
                            heights = [],
                            fullHeights = [],
                            itemWidths = [],
                            pos = [],
                            initOption = {
                                style: 'top',
                                items: 3,
                                dir: true,
                                margin: 0,
                                speed: 800
                            },
                            currentItem,
                            $slider = $(this),
                            $sliderWrap = $slider.parent(),
                            sliderWrapPad = {
                                left: [parseInt($sliderWrap.css('padding-left')).toFixed(2), parseInt($sliderWrap.css('padding-right')).toFixed(2)],
                                top: [parseInt($sliderWrap.css('padding-top')).toFixed(2), parseInt($sliderWrap.css('padding-bottom')).toFixed(2)]
                            },
                            items = $slider.children(),
                            current = 0,
                            sliderNav;
            
                        var dirBtn = '\n                <div class="owl-nav">\n                    <div class="owl-prev">\n                        <i class="icon iconfont icon-back"></i>\n                    </div>\n                    <div class="owl-next">\n                        <i class="iconfont icon-more"></i>\n                    </div>\n                </div>';
            
                        items.eq(0).addClass('active');
                        items.wrapAll('<div class="simple-slider-outer"><div class="simple-slider-stage"></div></div>');
            
                        $slider = $(this).find('.simple-slider-stage');
                        $sliderWrap = $slider.parent();
            
                        $.extend(initOption, option, true);
            
                        if (initOption.dir) {
            
                            $(dirBtn).insertAfter($sliderWrap);
                        }
            
                        function gotoPos(index, page) {
                            var dataArr, dir;
                            if (initOption.style == 'left') {
                                dir = 'lr';
                                if (page) {
                                    dataArr = fullWidths;
                                } else {
                                    dataArr = widths;
                                }
                            } else if (initOption.style == 'top') {
                                console.log(heights, 'top 下高度数据集合')
                                dir = 'bt';
                                if (page) {
                                    dataArr = fullHeights;
                                } else {
                                    dataArr = heights;
                                }
                            }
                            if (page) {
                                if (index < current) {
                                    index = initOption.items * (Math.floor((index) / initOption.items)) - 1;
                                } else if (index > current) {
                                    console.log(index, 'downc')
                                    index = initOption.items * Math.ceil((index) / initOption.items);
                                    index = Math.min(index, items.length - initOption.items);
                                    console.log(index, 'downc')
                                }
                            }
            
                            index = Math.max(index, 0);
                            index = Math.min(index, items.length - 1);
            
                            var $currentItem = items.eq(index),
                                disBox = tools.getRelPos($currentItem, $sliderWrap),
                                disPar = tools.getRelPos($currentItem, $slider),
                                disInfor;
            
                            // if ($currentItem.hasClass('active')) return;
            
                            tools.tabActive(items.eq(index));
                            if (page) {
                                $slider.css({
                                    'transform': function () {
                                        var dis = -dataArr[index],
                                            str;
                                        if (dir == 'lr') {
                                            str = 'translate3D(' + dis + 'px, 0px, 0px)';
                                        } else if (dir == 'bt') {
                                            str = 'translate3D(0px, ' + dis + 'px, 0px)';
                                        }
                                        return str;
                                    }
                                });
                            } else if (items[index - 1] && tools.getRelPos($sliderWrap, items.eq(index - 1))[initOption.style] < 0) {
            
                                disInfor = tools.getRelPos(items.eq(index - 1), $slider);
            
                                $slider.css({
                                    'transform': function transform() {
                                        var disX = disInfor.left,
                                            disY = disInfor.top,
                                            str = 'translate3D(' + disX + 'px, ' + disY + 'px, 0px)';
                                        return str;
                                    }
                                });
                            } else if (dataArr[index + 1] && dataArr[index + 1] < 0) {
                                console.log('infor', Math.abs(dataArr[index + 1]), $sliderWrap.outerHeight());
                                console.log(dataArr, dataArr[index], index);
                                $slider.css({
                                    'transform': function () {
                                        var dis = dataArr[index + 1],
                                            str;
                                        if (dir == 'lr') {
                                            str = 'translate3D(' + dis + 'px, 0px, 0px)';
                                        } else if (dir == 'bt') {
                                            str = 'translate3D(0px, ' + dis + 'px, 0px)';
                                        }
                                        console.log(str);
                                        return str;
                                    }
                                });
                            }
            
                            current = index;
            
                            $sliderWrap.trigger('change-simpleSlider', [{
                                item: current
                            }]);
                        }
            
                        // 确认 一行显示几个
                        initOption.items = initOption.items ? initOption.items : Math.round($sliderWrap.width() / items.eq(0).width());
                        $sliderWrap.css({
                            overflow: 'hidden'
                        });
                        $slider.css({
                            'transition': initOption.speed / 1000 + 's'
                        });
            
                        if (initOption.style == 'left') {
                            initOption.margin = initOption.margin ? initOption.margin : -parseInt($(this).css('margin-right'));
                            items.each(function (i, n) {
                                $(n).css({
                                    width: function width() {
                                        _width += (($sliderWrap.width() + initOption.margin) / initOption.items).toFixed(3) - initOption.margin + initOption.margin;
                                        return (($sliderWrap.width() + initOption.margin) / initOption.items).toFixed(3) - initOption.margin;
                                    }
                                });
            
                                widths.push(Math.max(_width - $sliderWrap.width()));
                                fullWidths.push(_width);
                            });
                            fullWidths.unshift(0);
                            $slider.css({
                                width: _width
                            });
                            items.css({
                                float: 'left',
                                'margin-right': initOption.margin
                            });
                        } else if (initOption.style == 'top') {
                            initOption.margin = initOption.margin ? initOption.margin : parseInt($(this).css('margin-bottom'));
            
                            items.each(function (i, n) {
                                $(n).css({
                                    width: function width() {
                                        return $(this).outerWidth();
                                    },
                                    height: function height() {
                                        return $(this).outerHeight();
                                    }
                                });
                            });
            
                            var h = items.eq(0).height();
            
                            items.css({
                                float: 'none',
                                'margin-bottom': initOption.margin
                            });
                            $slider.css({
                                height: 'auto'
                            });
                            $sliderWrap.css({
                                height: function height() {
                                    return (items.eq(0).outerHeight() + initOption.margin) * initOption.items - initOption.margin;
                                }
                            });
            
                            items.each(function (i, n) {
                                var itemHeight = $(n).outerHeight(),
                                    disY = tools.getRelPos($(this), $sliderWrap).top,
                                    wraperHeight;
                                if (isNaN($sliderWrap.css('margin'))) {
            
                                    wraperHeight = $sliderWrap.height() - parseInt($sliderWrap.css('margin'));
                                } else {
            
                                    wraperHeight = $sliderWrap.height() - $sliderWrap.css('margin');
                                }
            
                                fullHeights.push((items.eq(0).outerHeight() + initOption.margin) * Math.min(items.length - initOption.items, i));
                                heights.push(Math.min(0, disY - itemHeight + wraperHeight));
            
                            });
            
                        }
            
                        items.on('click', function () {
                            gotoPos($(this).index());
                        });
                        $(this).find('.owl-prev').click(function (ev) {
                            gotoPos(current - 1, false);
                        });
                        $(this).find('.owl-next').click(function (ev) {
                            gotoPos(current + 1, false);
                        });
            
                        return {
                            el: $sliderWrap,
                            now: function now() {
                                return current;
                            },
                            to: function to(index) {
                                console.log(index);
                                gotoPos(index);
                            },
                            next: function next() {
                                this.to(current + 1);
                            },
                            prev: function prev() {
                                this.to(current - 1);
                            }
                        };
                    }
    });
})(window, jQuery);
(function (n, h) { "function" === typeof define && define.amd ? define([], h) : "object" === typeof module && module.exports ? module.exports = h() : n.Rellax = h() })("undefined" !== typeof window ? window : global, function () {
    var n = function (h, p) {
        var a = Object.create(n.prototype), l = 0, r = 0, k = 0, t = 0, c = [], u = !0, B = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function (a) { return setTimeout(a, 1E3 / 60) }, q = null, C = window.cancelAnimationFrame ||
            window.mozCancelAnimationFrame || clearTimeout, D = window.transformProp || function () { var a = document.createElement("div"); if (null === a.style.transform) { var b = ["Webkit", "Moz", "ms"], e; for (e in b) if (void 0 !== a.style[b[e] + "Transform"]) return b[e] + "Transform" } return "transform" }(); a.options = { speed: -2, center: !1, wrapper: null, relativeToWrapper: !1, round: !0, vertical: !0, horizontal: !1, callback: function () { } }; p && Object.keys(p).forEach(function (d) { a.options[d] = p[d] }); h || (h = ".rellax"); var m = "string" === typeof h ? document.querySelectorAll(h) :
                [h]; if (0 < m.length) {
                    a.elems = m; if (a.options.wrapper && !a.options.wrapper.nodeType) if (m = document.querySelector(a.options.wrapper)) a.options.wrapper = m; else { console.warn("Rellax: The wrapper you're trying to use doesn't exist."); return } var w = function () {
                        for (var d = 0; d < c.length; d++)a.elems[d].style.cssText = c[d].style; c = []; r = window.innerHeight; t = window.innerWidth; x(); for (d = 0; d < a.elems.length; d++) {
                            var b = a.elems[d], e = b.getAttribute("data-rellax-percentage"), g = b.getAttribute("data-rellax-speed"), h = b.getAttribute("data-rellax-zindex") ||
                                0, l = b.getAttribute("data-rellax-min"), n = b.getAttribute("data-rellax-max"), v = a.options.wrapper ? a.options.wrapper.scrollTop : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop; a.options.relativeToWrapper && (v = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) - a.options.wrapper.offsetTop); var f = a.options.vertical ? e || a.options.center ? v : 0 : 0, k = a.options.horizontal ? e || a.options.center ? a.options.wrapper ? a.options.wrapper.scrollLeft : window.pageXOffset ||
                                    document.documentElement.scrollLeft || document.body.scrollLeft : 0 : 0; v = f + b.getBoundingClientRect().top; var m = b.clientHeight || b.offsetHeight || b.scrollHeight, p = k + b.getBoundingClientRect().left, q = b.clientWidth || b.offsetWidth || b.scrollWidth; f = e ? e : (f - v + r) / (m + r); e = e ? e : (k - p + t) / (q + t); a.options.center && (f = e = .5); g = g ? g : a.options.speed; e = y(e, f, g); b = b.style.cssText; f = ""; 0 <= b.indexOf("transform") && (f = b.indexOf("transform"), f = b.slice(f), f = (k = f.indexOf(";")) ? " " + f.slice(11, k).replace(/\s/g, "") : " " + f.slice(11).replace(/\s/g,
                                        "")); c.push({ baseX: e.x, baseY: e.y, top: v, left: p, height: m, width: q, speed: g, style: b, transform: f, zindex: h, min: l, max: n })
                        } u && (window.addEventListener("resize", w), u = !1); z()
                    }, x = function () {
                        var d = l, b = k; l = a.options.wrapper ? a.options.wrapper.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset; k = a.options.wrapper ? a.options.wrapper.scrollLeft : (document.documentElement || document.body.parentNode || document.body).scrollLeft || window.pageXOffset; a.options.relativeToWrapper &&
                            (l = ((document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset) - a.options.wrapper.offsetTop); return d != l && a.options.vertical || b != k && a.options.horizontal ? !0 : !1
                    }, y = function (d, b, e) { var c = {}; d = 100 * e * (1 - d); b = 100 * e * (1 - b); c.x = a.options.round ? Math.round(d) : Math.round(100 * d) / 100; c.y = a.options.round ? Math.round(b) : Math.round(100 * b) / 100; return c }, A = function () { x() && !1 === u && z(); q = B(A) }, z = function () {
                        for (var d, b = 0; b < a.elems.length; b++) {
                            d = y((k - c[b].left + t) / (c[b].width + t), (l -
                                c[b].top + r) / (c[b].height + r), c[b].speed); var e = d.y - c[b].baseY, g = d.x - c[b].baseX; null !== c[b].min && (a.options.vertical && !a.options.horizontal && (e = e <= c[b].min ? c[b].min : e), a.options.horizontal && !a.options.vertical && (g = g <= c[b].min ? c[b].min : g)); null !== c[b].max && (a.options.vertical && !a.options.horizontal && (e = e >= c[b].max ? c[b].max : e), a.options.horizontal && !a.options.vertical && (g = g >= c[b].max ? c[b].max : g)); a.elems[b].style[D] = "translate3d(" + (a.options.horizontal ? g : "0") + "px," + (a.options.vertical ? e : "0") + "px," + c[b].zindex +
                                    "px) " + c[b].transform
                        } a.options.callback(d)
                    }; a.destroy = function () { for (var d = 0; d < a.elems.length; d++)a.elems[d].style.cssText = c[d].style; u || (window.removeEventListener("resize", w), u = !0); C(q); q = null }; w(); A(); a.refresh = w; return a
                } console.warn("Rellax: The elements you're trying to select don't exist.")
    }; return n
});

























options.initThings = {
    name: "initThings",
    css: '',
    fn: function initThings() {

        $('.item_block').off();
        $('#topSlider .progress').remove();
        $('canvas').remove();
        $('#minOpenBtn').click(function () {
            $('body').toggleClass('openMenu')
        })

        index_TopSlider();
        listPost_project();
    }
};

function index_TopSlider() {
    $('.ff_indexPage .ff_topSlider').each(function (i, el) {
        $('.content_list', el).data('owl.carousel').settings.autoplayHoverPause = true;
        var autoTime = $('.content_list', el).data('owl.carousel').settings.autoplayTimeout - 500;

        $('.owl-dot', el).each(function () {
            $(this).append('<i class="pro_bar"></i>');
        })

        var len = $('.owl-item:not(.cloned)', el).length;
        var isanimate = true;

        // 初始化
        $('.pro_bar', el).eq(0).css({ width: 0 })
        progress(0, autoTime);


        $('.content_list', el).on('change.owl.carousel', function (e) {
            progress(e.item.index - 1, autoTime);
        })

        $('.content_list', el).on('changed.owl.carousel', function (e) {
            // $('.owl-dot',el).each(function() {
            //     $('.pro_bar',this).css({width: '0'})
            //     if($(this).hasClass('active')) {
            //         console.log($('.pro_bar',this))
            //         $('.pro_bar',this).css({width: '100%'})
            //     }
            // })
            $('.pro_bar', el).each(function (i, n) {
                $(this).css({ width: 0 });
            })
            $('.pro_bar', el).eq(e.page.index).css({ width: '100%' })
        })

        $('.content_list',el).on('dragged.owl.carousel', function (e) {
            isanimate = false;
            $('.pro_bar', el).each(function (i, n) {
                $(this).stop(true);
                $(this).css({ width: 0 });
            })
            $('.pro_bar', el).eq(e.page.index).css({ width: '100%' })
        })

        $('.content_list .owl-nav div',el).on('click',function() {
            isanimate = false;
            $('.pro_bar', el).each(function (i, n) {
                $(this).stop(true);
                $(this).css({ width: 0 });
            })
            $('.owl-dots .owl-dot.active .pro_bar',el).css({width: '100%'})
        })

        // 进度条
        function progress(index, autoSpeed) {
            if (isanimate) {
                if (index === 0) {
                    $('.pro_bar', el).each(function () {
                        $(this).css({ width: 0 });
                    })
                }
                $('.pro_bar', el).eq(index).animate({ width: '100%' }, autoSpeed, 'linear', function () {
                    if (index === len - 1) {
                        $('.pro_bar', el).each(function () {
                            $(this).css({ width: 0 });
                        })
                    }
                });
            } else {
                $('.pro_bar', el).eq(index).stop(!isanimate);
            }
        };
    })
}

function listPost_project() {
    $('.bodylistpost.bodyproject .project').each(function (i, el) {
        $('.tab_content', el).addClass('owl-carousel');
        var owl = $('.tab_content', el).owlCarousel({
            items: 1,
            dots: true,
            loop: true,
            nav: true,
            navText: [
                `<i class="iconfont icon-back"></i>`,
                `<i class="iconfont icon-more"></i>`
            ],
            smartSpeed: 600,
            autoHeight: true
        })
    })
}
options.normalTeamTabs = {
    name: "normalTeamTabs",
    css: '',
    fn: function (option, haveBtn){
        var initOption = {
            center: false,
            items: 1,
            loop: false,
            autoWidth: false,
            responsive: false,
            nav: true,
            dots: true,
            smartSpeed: 800,
            navText: ['<i class="icon iconfont icon-back"></i>', '<i class="iconfont icon-more"></i>']
        };
        $.extend(initOption, option, true);
        var teamTabsSliderApp = $('.ff_indexPage .team_tabs .tab_content .content_list').addClass('owl-carousel owl-theme').owlCarousel(initOption);
        if (haveBtn) {
            $('.ff_indexPage .team_tabs .tab_button .item_block').click(function () {
                var _this = this;
                var index = $(this).index();
                teamTabsSliderApp.trigger('to.owl.carousel', [index]);
            });
        }
    }
};
options.searchForm = {
    name: "searchForm",
    css: '',
    fn: function searchForm(option) {
        var onOffBtn = $('#search-nav .searchOnOff');
        var searchEv = {
            searchShow: function searchShow() {
                var search_e = this,
                    timer,
                    logoW = $('#headTop').outerWidth(true);

                onOffBtn.click(function () {

                    $('#navWrapper .nav').addClass('navShow');
                    $('#search-nav').addClass('navShow');
                    $('.bodyMask').addClass('open');
                    $('.searchGroup input').off().click(function (ev) {

                        ev.cancelBubble = true;
                        return false;
                    });
                    $('body').off().on({
                        'mousewheel.stopScroll': function mousewheelStopScroll() {
                            return false;
                        }
                    });
                    timer = setInterval(function () {
                        console.log($('#navWrapper .nav').find('.navitem').eq(0).css('opacity'));
                        if ($('#navWrapper .nav').find('.navitem').eq(0).css('opacity') <= 0.02) {
                            $('#navWrapper .nav').addClass('navStop');
                            if (option.type == 'LR') {
                                $('#search-nav').css({
                                    left: logoW
                                });
                            }
                            $('#search-nav').addClass('navStop').find('input').focus();
                            $('body').off().on({
                                'click.hideSearch': function clickHideSearch() {
                                    search_e.searchHide();
                                }
                            });

                            clearInterval(timer);
                        }
                    }, 100);
                });
            },
            searchHide: function searchHide() {
                var search_e = this,
                    time;
                $('#navWrapper .nav').addClass('navHide');
                $('#search-nav').addClass('navHide');
                $('.bodyMask').removeClass('open');
                $('body').off('mousewheel.stopScroll');
                $('body').off('click.hideSearch');
                if (option.type == 'LR') {
                    $('#search-nav').css({
                        left: 'auto'
                    });
                }
                timer = setInterval(function () {
                    if ($('#search-nav.navHide').css('opacity') >= 0.98) {
                        $('#navWrapper .nav').removeClass('navShow navStop navHide');
                        $('#search-nav').removeClass('navShow navStop navHide');
                        clearInterval(timer);
                    }
                }, 100);
            },
            searchNormal: function searchNormal() {
                onOffBtn.click(function () {
                    $('#search-nav').toggleClass('search-open');
                });
            }
        };

        switch (option.style) {
            case 'one':

                searchEv.searchShow();
                break;
            case 'two':

                searchEv.searchNormal();
                break;
            default:
                break;
        }
    }
};
options.headerHoverBase = {
    name: "headerHoverBase",
    css: '',
    fn: function headerHoverBase(el) {
        $(el).find('.nav>.navitem').on({
            'mouseenter': function (){
                $(this).addClass('isHover');
            },
            'mouseleave': function (){
                $(this).removeClass('isHover');
            }
        });
        $(el).find('.subnav>li').on({
            'mouseenter': function (){
                $(this).closest('.navitem').addClass('isSubHover');
            },
            'mouseleave': function (){
                $(this).closest('.navitem').removeClass('isSubHover');
            }
        })
    }
};


options.teamTabPop = {
    name: "teamTabPop",
    css: '',
    fn: function teamTabPop() {
        $('.team_tabs .tab_content .item_block').on('click', 'a', function (ev){
            ev.preventDefault();
        });
        $('.team_tabs .tab_content .item_block').on('click', function (){
            var alertDom = $('<div class = "mlist" style="width:500px;"><div class="content_list"></div></div>');
            alertDom.find('.content_list').append($('.team_tabs .tab_content .item_block').clone().removeClass('wow'))
                
            tools.alertBx(alertDom, function (){
                alertDom.find('.content_list').addClass('owl-carousel owl-theme').owlCarousel({
                    center: false,
                    items: 1,
                    loop: false,
                    autoWidth: false,
                    responsive: false,
                    nav: true,
                    dots: false,
                    smartSpeed: 800,
                    navText: ['<i class="icon iconfont icon-back"></i>', '<i class="iconfont icon-more"></i>']
                });
            });
            
        });
    }
};






Math.tween = {
    Linear: function (x, t, b, c, d) {
        return c * t / d + b;
    },easeOut: function (x, t, b, c, d) { //减速曲线
        return -c * (t /= d) * (t - 2) + b;
    },
    mcsEaseOut: function (x, t, b, c, d) {
        var ts = (t /= d) * t,
            tc = ts * t;
        return b + c * (0.499999999999997 * tc * ts + -2.5 * ts * ts + 5.5 * tc + -6.5 * ts + 4 * t);
    }
}
// $.extend(jQuery.easing, Tween);


$.extend({
    miniAnimate: function (form, dis, time, fn) {

        var AniTimer, run, _this = this,
            t, nextPos, obj;
        if (!t) t = 0;
        // cancelAnimationFrame(AniTimer);
        run = function () {
            t += 17;
            nextPos = Math.tween.mcsEaseOut(null, t, form, dis, time);
            fn(nextPos);
            if (t >= time) {
                t = time;
                fn(form + dis);
            } else {
                AniTimer = requestAnimationFrame(run)
            }
        };
        obj =  {
            begin: function () {
                run();
            },
            stop: function () {
                cancelAnimationFrame(AniTimer);
                t = 0;
                console.log('stop')
            }
        };
        return obj;
    }
});















for (var key in options) {
    if (options.hasOwnProperty(key)) {
        var item = options[key];
        if (item.css) {
            newStyleContent[key] = item.css;
        }
        if (item.fn) {
            job[key] = item.fn;
        }
    }
}

var tools = {
    getRelPos: function getRelPos(el1, el2) {
        console.log(el1);
        var el1Pos = $(el1).offset(),
            el2Pos = $(el2).offset();
        return {
            left: Math.round(el2Pos.left - el1Pos.left),
            top: Math.round(el2Pos.top - el1Pos.top)
        };
    },
    hideEl: function hideEl(el, pos) {
        $(window).scroll(function (ev) {
            var scrollPos = $(window).scrollTop();
            if (pos < scrollPos) {
                $(el).removeClass('outPos').addClass('inPos');
            } else {
                $(el).removeClass('inPos').addClass('outPos');
            }
        });
    },
    tabActive: function tabActive($el, className) {
        className = className || 'active';
        $el.siblings().removeClass(className);
        $el.addClass(className);
    },
    getTransfrom: function (el, attr) {
        let str = el.style.transform;
        let pattern = new RegExp(attr + "\\((-?[0-9]+\\.?[0-9]{0,2}).*\\)");
        str.match(pattern);

        return RegExp.$1;
    },
    alertBx: function alertBx ($dom, fn) {
        var $el = $('<div class="ff_bodyMask"><div class="ff_bodyMask-content mlist"></div></div>');
        $el.find('.ff_bodyMask-content').append($dom);
        $el.appendTo($('body')).fadeIn()
        .on({
            'mousewheel.stopScroll': function mousewheelStopScroll() {
                return false;
            },
            'click.closeMask': function closeMask (ev) {
                if (ev.target == $(this)[0]) {
                    $(this).off().fadeOut();
                }
            }
        }).find('.ff_bodyMask-content');
        
        fn&&fn();
    },
    dragEl: function (el, evList, limit) {
        var endMove;
        var upDataLimit = function (newData) {
            limit.area = newData;
        };
        var initEv = {
            dragEv: function (ev)  {
                var tra,
                    endEv,
                    endPos = {},
                    toX = ev.changePos.x + ev.transformPos.x,
                    toY = ev.changePos.y + ev.transformPos.y;
                
                    console.log(toX, ev.changePos.x , ev.transformPos.x);
                if (limit.area.x) {
                    if (toX <= limit.area.x) {
                        toX = limit.area.x - Math.sqrt(2 * Math.abs(toX - limit.area.x) / 0.1);
                        endPos.x = limit.area.x;
                    }
                    console.log(limit.area.x);
                    if (toX >= 0) {
                        toX = Math.sqrt(2 * toX / 0.1);
                        endPos.x = 0;
                    }
                }
                
                if (limit.area.y) {
                    
                    if (toY <= limit.area.y) {toY = limit.area.y[0];}
                    if (toY >= 0) {toY = 0;}
                }
                if (limit.dir == 'x') {

                    tra = 'translateX('+ toX + 'px)';
                } else if (limit.dir == 'y'){

                    tra = 'translateY(' + toY +'px)';
                } else {

                    tra = 'translateX('+ toX + 'px) translateY(' + toY +'px)';
                };
                
                $(this).css({
                    transform: tra
                });
                return endPos;
            }
        };
        $(el).on({
            'mousedown': function (ev) {
                var changePos, endPos, endChangePos, drageTime, moveSpeed;
                var initPos = {
                    x: ev.clientX,
                    y: ev.clientY
                };
                var transformPos = {
                    x: +tools.getTransfrom($(el)[0], 'translateX'),
                    y: +tools.getTransfrom($(el)[0], 'translateY'),
                };
                ev.initPos = initPos;
                $(el).css({
                    transition: "0s"
                });
                if (typeof endMove != 'undefined') {
                    endMove.stop();
                    moveSpeed = 0;
                }
                evList.begin && evList.begin.call($(el)[0], ev);
                

                $('body').on({
                    'mousemove.drage': function (ev) {
                        moveSpeed = 0;
                        var movePos = {
                            x: ev.clientX,
                            y: ev.clientY
                        };
                        if (changePos){
                            endChangePos = {
                                x: changePos.x - (movePos.x - initPos.x)
                            };
                            moveSpeed = endChangePos.x / ((+new Date()) - drageTime);
                            // console.log(moveSpeed, 'moveSpeed');
                            // console.log(moveSpeed,endChangePos.x, (+new Date()) - drageTime, 'moveS');
                        }
                        changePos = {
                            x: movePos.x - initPos.x,
                            y: movePos.y - initPos.y
                        };
                        drageTime = +new Date();
                        ev.movePos = movePos;
                        ev.changePos = changePos;
                        ev.transformPos = transformPos;
                        endPos = initEv.dragEv.call($(el)[0], ev);
                        evList.change && evList.change.call($(el)[0], ev);
                    },
                    'mouseup.drage': function (ev) {
                        $(this).off('mousemove.drage');
                        $(this).off('mouseup.drage');
                        if (typeof endMove != 'undefined') {
                            endMove.stop();
                        }
                        var str = '';
                        if (endPos && typeof endPos.x != 'undefined') {
                            str += 'translateX('+ endPos.x + 'px)';
                        } 
                        if (endPos && typeof endPos.y != 'undefined'){
        
                            str += 'translateY(' + endPos.y +'px)';
                        }
                        if (str) {
                            $(el).css({
                                transition: '0.5s',
                                transform: str
                            });
                        } 
                        else {
                            $(el).css({
                                transition: '0s',
                            });
                            console.log(moveSpeed, 'moveSpeed')
                            if (Math.abs(changePos.x) < 50 || Math.abs(moveSpeed) <= 0.2) return;
                            var startPos = +tools.getTransfrom($(el)[0], 'translateX');
                            var dis = startPos > 0 ? +(moveSpeed * 400) : -(moveSpeed * 400);
                            endMove = $.miniAnimate( Math.floor(startPos), Math.floor(dis), 1000, function (a) {
                                var ceshi = Math.ceil(+a);
                                if (ceshi <= limit.area.x) {
                                    ceshi = limit.area.x;
                                }
                                if (ceshi >= 0) {
                                    ceshi = 0;
                                }
                                $(el).css({
                                    transform: 'translateX(' + ceshi + 'px)'
                                });
                            });
                            endMove.begin();
                        }
                    }
                });
            },
        })
        return upDataLimit;
    }
};


var selfTools = {
    bindPage: function bindPage(fn, pageList, parameter) {
        var fnName = fn.name;

        for (var i = 0; i < pageList.length; i++) {
            var doSome = fn;
            var item = pageList[i];

            YY.Page[item].prototype.things.push([doSome, parameter]);
        }
    },
    addStyle: function addStyle() {
        var newStyle = '<style id="ff_add">';
        for (var key in newStyleContent) {
            if (newStyleContent.hasOwnProperty(key)) {
                // console.log(config, key);
                // if (config[key].open) {
                    var style = newStyleContent[key];
                    newStyle += style;
                // }
            }
        }
        newStyle += '</style>';
        $(newStyle).insertBefore($('link')[0]);
    }
};

var pageConfig = {
    list: ['indexMain', 'baseMain', 'postMain']
};


var config = {
    initThings: {
        page: pageConfig.list,
        fn: job.initThings
    },
    headerHover: {
        page: pageConfig.list,
        fn: job.headerHover
    },
    parallax: {
        page: ['indexMain'],
        fn: job.parallax,
        parameter: ['#topSlider .content_list']
    },
    parallaxPage: {
        page: ['baseMain'],
        fn: job.parallaxPage,
        parameter: ['.npagePage #banner div']
    },
    sliderDotThemb: {
        page: ['indexMain'],
        fn: job.sliderDotThemb
    },
    sliderDirThemb: {
        page: ['indexMain'],
        fn: job.sliderDirThemb,
        parameter: ['LR']
    },
    sliderTitle: {
        page: ['indexMain'],
        fn: job.sliderTitle
    },
    npostSlider: {
        page: ['postMain'],
        fn: job.npostSlider
    },
    postTabHiden: {
        page: ['postMain'],
        fn: job.postTabHiden
    },
    specialModule: {
        page: ['indexMain'],
        fn: job.specialModule
    },
    teamTabs: {
        page: ['indexMain'],
        fn: job.teamTabs
    },
    teamTabsTwo: {
        page: ['indexMain'],
        fn: job.teamTabsTwo
    },
    ad01: {
        page: ['indexMain'],
        fn: job.ad01
    },
    normalTeamTabs: {
        page: ['indexMain'],
        fn: job.normalTeamTabs,
        parameter: [{}, true]
    },
    searchForm: {
        page: pageConfig.list,
        fn: job.searchForm,
        parameter: [{
            style: 'two',
            type: 'LR'
        }]
    },
    timeTurnEn: {
        page: pageConfig.list,
        fn: job.timeTurnEn,
        parameter: ['.service .item_block .date_wrap']
    },
    headerHoverBase: {
        page: pageConfig.list,
        fn: job.headerHoverBase,
        parameter: ['#header']
    },
    teamTabPop: {
        page: ['indexMain'],
        fn: job.teamTabPop
    },
    postSliderThemb: {
        page: ['postMain'],
        fn: job.postSliderThemb,
        
        parameter: ['LR']
    },
    moduleControl: {
        page: ['indexMain'],
        fn: job.moduleControl
    },
    privateproject: {
        page: ['indexMain', 'baseMain'],
        fn: job.privateproject
    }
};

selfTools.addStyle();

(function () {

    for (var i = 0; i < pageConfig.list.length; i++) {
        var item = pageConfig.list[i];
        YY.Page[item].prototype.things = [];
        YY.Page[item].prototype.interfaceFun = function () {
            console.log(this)
            var _this = this;
            for (var i = 0; i < this.things.length; i++) {
                var fn = this.things[i][0];
                var arg = this.things[i][1];
                fn.apply(_this, arg);
            }
        };
    }

    // for (var key in this.config) {
    //     if (this.config.hasOwnProperty(key)) {
    //         var val = this.config[key];
    //         if (key) {
    //             selfTools.bindPage(val.fn, val.page, val.parameter);
    //         }
    //     }
    // }

    for (var key in job) {
        if (job.hasOwnProperty(key)) {
            var element = job[key];
            var val = this.config[key];
            selfTools.bindPage(val.fn, val.page, val.parameter);
        }
    }
})();