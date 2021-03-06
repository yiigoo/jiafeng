var I766 = "und";
I766 += "efine";
I766 += "d";
var F766 = "unde";
F766 += "fine";
F766 += "d";
var t766 = "undef";
t766 += "i";
t766 += "ned";
var f766 = "1.";
f766 += "8";
f766 += ".3";
(function ($, window, document, undefined) {
    var $window = $(window);
    $.fn.lazyload = function (options) {
        var o7 = "r";
        o7 += "es";
        o7 += "i";
        o7 += "ze";
        var t7 = "scro";
        t7 += "ll";
        var Q7 = "o";
        Q7 += "r";
        Q7 += "igina";
        Q7 += "l";
        var elements = this;
        var $container;
        var settings = {
            threshold: 0,
            failure_limit: 0,
            event: "scroll",
            effect: "show",
            container: window,
            data_attribute: Q7,
            skip_invisible: false,
            appear: null,
            load: null,
            placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
        };

        function update() {
            var counter = 0;
            elements.each(function () {
                var $this = $(this);
                if (settings.skip_invisible && !$this.is(":visible")) {
                    return;
                }
                if ($.abovethetop(this, settings) || $.leftofbegin(this, settings)) {} else if (!$.belowthefold(this, settings) && !$.rightoffold(this, settings)) {
                    var f7 = "ap";
                    f7 += "pe";
                    f7 += "a";
                    f7 += "r";
                    $this.trigger(f7);
                    counter = 0;
                } else {
                    if (++counter > settings.failure_limit) {
                        return false;
                    }
                }
            });
        }
        if (options) {
            if (undefined !== options.failurelimit) {
                options.failure_limit = options.failurelimit;
                delete options.failurelimit;
            }
            if (undefined !== options.effectspeed) {
                options.effect_speed = options.effectspeed;
                delete options.effectspeed;
            }
            $.extend(settings, options);
        }
        $container = settings.container === undefined || settings.container === window ? $window : $(settings.container);
        if (0 === settings.event.indexOf(t7)) {
            $container.on(settings.event, function () {
                return update();
            });
        }
        this.each(function () {
            var S7 = "a";
            S7 += "p";
            S7 += "pea";
            S7 += "r";
            var F7 = "s";
            F7 += "r";
            F7 += "c";
            var self = this;
            var $self = $(self);
            self.loaded = false;
            if ($self.attr(F7) === undefined || $self.attr("src") === false) {
                var I7 = "i";
                I7 += "mg";
                if ($self.is(I7)) {
                    $self.attr("src", settings.placeholder);
                }
            }
            $self.one(S7, function () {
                if (!this.loaded) {
                    var z7 = "s";
                    z7 += "r";
                    z7 += "c";
                    var p7 = "<img /";
                    p7 += ">";
                    if (settings.appear) {
                        var elements_left = elements.length;
                        settings.appear.call(self, elements_left, settings);
                    }
                    $(p7).one("load", function () {
                        var original = $self.attr("data-" + settings.data_attribute);
                        $self.hide();
                        if ($self.is("img")) {
                            var i7 = "s";
                            i7 += "rc";
                            $self.attr(i7, original);
                        } else {
                            var G7 = "backgr";
                            G7 += "o";
                            G7 += "und-image";
                            $self.css(G7, "url('" + original + "')");
                        }
                        $self[settings.effect](settings.effect_speed);
                        self.loaded = true;
                        var temp = $.grep(elements, function (element) {
                            return !element.loaded;
                        });
                        elements = $(temp);
                        if (settings.load) {
                            var elements_left = elements.length;
                            settings.load.call(self, elements_left, settings);
                        }
                    }).attr(z7, $self.attr("data-" + settings.data_attribute));
                }
            });
            if (0 !== settings.event.indexOf("scroll")) {
                $self.on(settings.event, function () {
                    if (!self.loaded) {
                        var l7 = "app";
                        l7 += "e";
                        l7 += "ar";
                        $self.trigger(l7);
                    }
                });
            }
        });
        $window.on(o7, function () {
            update();
        });
        if (/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)) {
            $window.on("pageshow", function (event) {
                if (event.originalEvent && event.originalEvent.persisted) {
                    elements.each(function () {
                        $(this).trigger("appear");
                    });
                }
            });
        }
        $(document).ready(function () {
            update();
        });
        return this;
    };
    $.belowthefold = function (element, settings) {
        var fold;
        if (settings.container === undefined || settings.container === window) {
            fold = (window.innerHeight ? window.innerHeight : $window.height()) + $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top + $(settings.container).height();
        }
        return fold <= $(element).offset().top - settings.threshold;
    };
    $.rightoffold = function (element, settings) {
        var fold;
        if (settings.container === undefined || settings.container === window) {
            fold = $window.width() + $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left + $(settings.container).width();
        }
        return fold <= $(element).offset().left - settings.threshold;
    };
    $.abovethetop = function (element, settings) {
        var fold;
        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top;
        }
        return fold >= $(element).offset().top + settings.threshold + $(element).height();
    };
    $.leftofbegin = function (element, settings) {
        var fold;
        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left;
        }
        return fold >= $(element).offset().left + settings.threshold + $(element).width();
    };
    $.inviewport = function (element, settings) {
        return !$.rightoffold(element, settings) && !$.leftofbegin(element, settings) && !$.belowthefold(element, settings) && !$.abovethetop(element, settings);
    };
    $.extend($.expr[":"], {
        "below-the-fold": function (a) {
            return $.belowthefold(a, {
                threshold: 0
            });
        },
        "above-the-top": function (a) {
            return !$.belowthefold(a, {
                threshold: 0
            });
        },
        "right-of-screen": function (a) {
            return $.rightoffold(a, {
                threshold: 0
            });
        },
        "left-of-screen": function (a) {
            return !$.rightoffold(a, {
                threshold: 0
            });
        },
        "in-viewport": function (a) {
            return $.inviewport(a, {
                threshold: 0
            });
        },
        "above-the-fold": function (a) {
            return !$.belowthefold(a, {
                threshold: 0
            });
        },
        "right-of-fold": function (a) {
            return $.rightoffold(a, {
                threshold: 0
            });
        },
        "left-of-fold": function (a) {
            return !$.rightoffold(a, {
                threshold: 0
            });
        }
    });
}(jQuery, window, document));;
(function ($, window, document, undefined) {
    var a7 = "i";
    a7 += "tem";
    a7 += "s";
    var E7 = "sett";
    E7 += "ings";
    var y7 = "w";
    y7 += "id";
    y7 += "th";
    var M7 = "ite";
    M7 += "ms";
    var Z7 = "w";
    Z7 += "idt";
    Z7 += "h";
    var V7 = "i";
    V7 += "t";
    V7 += "e";
    V7 += "ms";
    var n7 = "wi";
    n7 += "d";
    n7 += "th";
    var q7 = "it";
    q7 += "e";
    q7 += "m";
    q7 += "s";
    var R7 = "w";
    R7 += "i";
    R7 += "dt";
    R7 += "h";
    var k7 = "ite";
    k7 += "ms";
    var U7 = "it";
    U7 += "e";
    U7 += "m";
    U7 += "s";
    var N7 = "w";
    N7 += "idth";
    var u7 = "se";
    u7 += "t";
    u7 += "t";
    u7 += "ings";
    var A7 = "w";
    A7 += "id";
    A7 += "t";
    A7 += "h";
    var e7 = "o";
    e7 += "u";
    e7 += "te";
    e7 += "r";
    var s7 = "owl-";
    s7 += "grab";
    var w7 = "owl-";
    w7 += "responsiv";
    w7 += "e";
    var B7 = "owl-lo";
    B7 += "ading";
    var x7 = "ow";
    x7 += "l";
    x7 += "-lo";
    x7 += "aded";
    var d7 = "d";
    d7 += "i";
    d7 += "v";
    var L7 = "swin";
    L7 += "g";

    function Owl(element, options) {
        var W7 = "int";
        W7 += "era";
        W7 += "cti";
        W7 += "ng";
        var X7 = "b";
        X7 += "us";
        X7 += "y";
        this.settings = null;
        this.options = $.extend({}, Owl.Defaults, options);
        this.$element = $(element);
        this._handlers = {};
        this._plugins = {};
        this._supress = {};
        this._current = null;
        this._speed = null;
        this._coordinates = [];
        this._breakpoint = null;
        this._width = null;
        this._items = [];
        this._clones = [];
        this._mergers = [];
        this._widths = [];
        this._invalidated = {};
        this._pipe = [];
        this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        };
        this._states = {
            current: {},
            tags: {
                'initializing': ['busy'],
                'animating': [X7],
                'dragging': [W7]
            }
        };
        this.$element.data('owlcarousel', this);
        $.each(['onResize', 'onThrottledResize'], $.proxy(function (i, handler) {
            this._handlers[handler] = $.proxy(this[handler], this);
        }, this));
        $.each(Owl.Plugins, $.proxy(function (key, plugin) {
            this._plugins[key.charAt(0).toLowerCase() + key.slice(1)] = new plugin(this);
        }, this));
        $.each(Owl.Workers, $.proxy(function (priority, worker) {
            this._pipe.push({
                'filter': worker.filter,
                'run': $.proxy(worker.run, this)
            });
        }, this));
        this.setup();
        this.initialize();
    }
    Owl.Defaults = {
        items: 3,
        loop: false,
        center: false,
        rewind: false,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        freeDrag: false,
        margin: 0,
        stagePadding: 0,
        merge: false,
        mergeFit: true,
        autoWidth: false,
        startPosition: 0,
        rtl: false,
        smartSpeed: 250,
        fluidSpeed: false,
        dragEndSpeed: false,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: window,
        fallbackEasing: L7,
        info: false,
        nestedItemSelector: false,
        itemElement: 'div',
        stageElement: d7,
        refreshClass: 'owl-refresh',
        loadedClass: x7,
        loadingClass: B7,
        rtlClass: 'owl-rtl',
        responsiveClass: w7,
        dragClass: 'owl-drag',
        itemClass: 'owl-item',
        stageClass: 'owl-stage',
        stageOuterClass: 'owl-stage-outer',
        grabClass: s7
    };
    Owl.Width = {
        Default: 'default',
        Inner: 'inner',
        Outer: e7
    };
    Owl.Type = {
        Event: 'event',
        State: 'state'
    };
    Owl.Plugins = {};
    Owl.Workers = [{
        filter: [A7, u7],
        run: function () {
            this._width = this.$element.width();
        }
    }, {
        filter: [N7, 'items', 'settings'],
        run: function (cache) {
            cache.current = this._items && this._items[this.relative(this._current)];
        }
    }, {
        filter: ['items', 'settings'],
        run: function () {
            this.$stage.children('.cloned').remove();
        }
    }, {
        filter: ['width', U7, 'settings'],
        run: function (cache) {
            var h7 = "a";
            h7 += "u";
            h7 += "to";
            var margin = this.settings.margin || '',
                grid = !this.settings.autoWidth,
                rtl = this.settings.rtl,
                css = {
                    'width': h7,
                    'margin-left': rtl ? margin : '',
                    'margin-right': rtl ? '' : margin
                };
            !grid && this.$stage.children().css(css);
            cache.css = css;
        }
    }, {
        filter: ['width', k7, 'settings'],
        run: function (cache) {
            var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                merge = null,
                iterator = this._items.length,
                grid = !this.settings.autoWidth,
                widths = [];
            cache.items = {
                merge: false,
                width: width
            };
            while (iterator--) {
                merge = this._mergers[iterator];
                merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;
                cache.items.merge = merge > 1 || cache.items.merge;
                widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
            }
            this._widths = widths;
        }
    }, {
        filter: ['items', 'settings'],
        run: function () {
            var clones = [],
                items = this._items,
                settings = this.settings,
                view = Math.max(settings.items * 2, 4),
                size = Math.ceil(items.length / 2) * 2,
                repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
                append = '',
                prepend = '';
            repeat /= 2;
            while (repeat--) {
                clones.push(this.normalize(clones.length / 2, true));
                append = append + items[clones[clones.length - 1]][0].outerHTML;
                clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
                prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
            }
            this._clones = clones;
            $(append).addClass('cloned').appendTo(this.$stage);
            $(prepend).addClass('cloned').prependTo(this.$stage);
        }
    }, {
        filter: [R7, q7, 'settings'],
        run: function () {
            var rtl = this.settings.rtl ? 1 : -1,
                size = this._clones.length + this._items.length,
                iterator = -1,
                previous = 0,
                current = 0,
                coordinates = [];
            while (++iterator < size) {
                previous = coordinates[iterator - 1] || 0;
                current = this._widths[this.relative(iterator)] + this.settings.margin;
                coordinates.push(previous + current * rtl);
            }
            this._coordinates = coordinates;
        }
    }, {
        filter: [n7, V7, 'settings'],
        run: function () {
            var padding = this.settings.stagePadding,
                coordinates = this._coordinates,
                css = {
                    'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
                    'padding-left': padding || '',
                    'padding-right': padding || ''
                };
            this.$stage.css(css);
        }
    }, {
        filter: [Z7, 'items', 'settings'],
        run: function (cache) {
            var iterator = this._coordinates.length,
                grid = !this.settings.autoWidth,
                items = this.$stage.children();
            if (grid && cache.items.merge) {
                while (iterator--) {
                    cache.css.width = this._widths[this.relative(iterator)];
                    items.eq(iterator).css(cache.css);
                }
            } else if (grid) {
                cache.css.width = cache.items.width;
                items.css(cache.css);
            }
        }
    }, {
        filter: [M7],
        run: function () {
            this._coordinates.length < 1 && this.$stage.removeAttr('style');
        }
    }, {
        filter: [y7, 'items', E7],
        run: function (cache) {
            cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
            cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
            this.reset(cache.current);
        }
    }, {
        filter: ['position'],
        run: function () {
            this.animate(this.coordinates(this._current));
        }
    }, {
        filter: ['width', 'position', a7, 'settings'],
        run: function () {
            var c7 = ")";
            c7 += ",";
            c7 += " :e";
            c7 += "q(";
            var H7 = "a";
            H7 += "c";
            H7 += "t";
            H7 += "ive";
            var rtl = this.settings.rtl ? 1 : -1,
                padding = this.settings.stagePadding * 2,
                begin = this.coordinates(this.current()) + padding,
                end = begin + this.width() * rtl,
                inner, outer, matches = [],
                i, n;
            for (i = 0, n = this._coordinates.length; i < n; i++) {
                var K7 = "<";
                K7 += "=";
                inner = this._coordinates[i - 1] || 0;
                outer = Math.abs(this._coordinates[i]) + padding * rtl;
                if (this.op(inner, K7, begin) && this.op(inner, '>', end) || this.op(outer, '<', begin) && this.op(outer, '>', end)) {
                    matches.push(i);
                }
            }
            this.$stage.children('.active').removeClass(H7);
            this.$stage.children(':eq(' + matches.join(c7) + ')').addClass('active');
            if (this.settings.center) {
                var r7 = "cen";
                r7 += "t";
                r7 += "e";
                r7 += "r";
                var b7 = ".cen";
                b7 += "ter";
                this.$stage.children(b7).removeClass(r7);
                this.$stage.children().eq(this.current()).addClass('center');
            }
        }
    }];
    Owl.prototype.initialize = function () {
        var m7 = "in";
        m7 += "itialize";
        m7 += "d";
        var P7 = "init";
        P7 += "i";
        P7 += "alizi";
        P7 += "ng";
        var j7 = ":";
        j7 += "visi";
        j7 += "b";
        j7 += "le";
        var g7 = "<div";
        g7 += " cla";
        g7 += "s";
        g7 += "s=\"";
        var v7 = " clas";
        v7 += "s";
        v7 += "=";
        v7 += "\"";
        var T7 = "initializ";
        T7 += "e";
        var D7 = "i";
        D7 += "nitializ";
        D7 += "in";
        D7 += "g";
        this.enter(D7);
        this.trigger(T7);
        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);
        if (this.settings.autoWidth && !this.is('pre-loading')) {
            var C7 = "i";
            C7 += "m";
            C7 += "g";
            var imgs, nestedSelector, width;
            imgs = this.$element.find(C7);
            nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
            width = this.$element.children(nestedSelector).width();
            if (imgs.length && width <= 0) {
                this.preloadAutoWidthImages(imgs);
            }
        }
        this.$element.addClass(this.options.loadingClass);
        this.$stage = $('<' + this.settings.stageElement + v7 + this.settings.stageClass + '"/>').wrap(g7 + this.settings.stageOuterClass + '"/>');
        this.$element.append(this.$stage.parent());
        this.replace(this.$element.children().not(this.$stage.parent()));
        if (this.$element.is(j7)) {
            this.refresh();
        } else {
            this.invalidate('width');
        }
        this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass);
        this.registerEventHandlers();
        this.leave(P7);
        this.trigger(m7);
    };
    Owl.prototype.setup = function () {
        var Q0 = "cha";
        Q0 += "ng";
        Q0 += "ed";
        var Y7 = "sett";
        Y7 += "ings";
        var viewport = this.viewport(),
            overwrites = this.options.responsive,
            match = -1,
            settings = null;
        if (!overwrites) {
            settings = $.extend({}, this.options);
        } else {
            var J7 = "fun";
            J7 += "ctio";
            J7 += "n";
            $.each(overwrites, function (breakpoint) {
                if (breakpoint <= viewport && breakpoint > match) {
                    match = Number(breakpoint);
                }
            });
            settings = $.extend({}, this.options, overwrites[match]);
            if (typeof settings.stagePadding === J7) {
                settings.stagePadding = settings.stagePadding();
            }
            delete settings.responsive;
            if (settings.responsiveClass) {
                var O7 = "cl";
                O7 += "a";
                O7 += "s";
                O7 += "s";
                this.$element.attr('class', this.$element.attr(O7).replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match));
            }
        }
        this.trigger('change', {
            property: {
                name: Y7,
                value: settings
            }
        });
        this._breakpoint = match;
        this.settings = settings;
        this.invalidate('settings');
        this.trigger(Q0, {
            property: {
                name: 'settings',
                value: this.settings
            }
        });
    };
    Owl.prototype.optionsLogic = function () {
        if (this.settings.autoWidth) {
            this.settings.stagePadding = false;
            this.settings.merge = false;
        }
    };
    Owl.prototype.prepare = function (item) {
        var f0 = "pre";
        f0 += "p";
        f0 += "are";
        var event = this.trigger(f0, {
            content: item
        });
        if (!event.data) {
            var t0 = "/";
            t0 += ">";
            event.data = $('<' + this.settings.itemElement + t0).addClass(this.options.itemClass).append(item);
        }
        this.trigger('prepared', {
            content: event.data
        });
        return event.data;
    };
    Owl.prototype.update = function () {
        var F0 = "va";
        F0 += "l";
        F0 += "id";
        var i = 0,
            n = this._pipe.length,
            filter = $.proxy(function (p) {
                return this[p];
            }, this._invalidated),
            cache = {};
        while (i < n) {
            if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
                this._pipe[i].run(cache);
            }
            i++;
        }
        this._invalidated = {};
        !this.is('valid') && this.enter(F0);
    };
    Owl.prototype.width = function (dimension) {
        dimension = dimension || Owl.Width.Default;
        switch (dimension) {
            case Owl.Width.Inner:
            case Owl.Width.Outer:
                return this._width;
            default:
                return this._width - this.settings.stagePadding * 2 + this.settings.margin;
        }
    };
    Owl.prototype.refresh = function () {
        var S0 = "re";
        S0 += "freshing";
        var I0 = "refres";
        I0 += "h";
        I0 += "in";
        I0 += "g";
        this.enter(I0);
        this.trigger('refresh');
        this.setup();
        this.optionsLogic();
        this.$element.addClass(this.options.refreshClass);
        this.update();
        this.$element.removeClass(this.options.refreshClass);
        this.leave(S0);
        this.trigger('refreshed');
    };
    Owl.prototype.onThrottledResize = function () {
        window.clearTimeout(this.resizeTimer);
        this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
    };
    Owl.prototype.onResize = function () {
        var G0 = "res";
        G0 += "izing";
        var p0 = "res";
        p0 += "ize";
        if (!this._items.length) {
            return false;
        }
        if (this._width === this.$element.width()) {
            return false;
        }
        if (!this.$element.is(':visible')) {
            return false;
        }
        this.enter('resizing');
        if (this.trigger(p0).isDefaultPrevented()) {
            var i0 = "re";
            i0 += "sizin";
            i0 += "g";
            this.leave(i0);
            return false;
        }
        this.invalidate('width');
        this.refresh();
        this.leave(G0);
        this.trigger('resized');
    };
    Owl.prototype.registerEventHandlers = function () {
        if ($.support.transition) {
            var z0 = ".owl.";
            z0 += "core";
            this.$stage.on($.support.transition.end + z0, $.proxy(this.onTransitionEnd, this));
        }
        if (this.settings.responsive !== false) {
            var l0 = "r";
            l0 += "e";
            l0 += "siz";
            l0 += "e";
            this.on(window, l0, this._handlers.onThrottledResize);
        }
        if (this.settings.mouseDrag) {
            var o0 = "mousedown";
            o0 += ".owl.core";
            this.$element.addClass(this.options.dragClass);
            this.$stage.on(o0, $.proxy(this.onDragStart, this));
            this.$stage.on('dragstart.owl.core selectstart.owl.core', function () {
                return false;
            });
        }
        if (this.settings.touchDrag) {
            this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
            this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
        }
    };
    Owl.prototype.onDragStart = function (event) {
        var W0 = "ani";
        W0 += "matin";
        W0 += "g";
        var stage = null;
        if (event.which === 3) {
            return;
        }
        if ($.support.transform) {
            var X0 = "tr";
            X0 += "ansf";
            X0 += "o";
            X0 += "rm";
            stage = this.$stage.css(X0).replace(/.*\(|\)| /g, '').split(',');
            stage = {
                x: stage[stage.length === 16 ? 12 : 4],
                y: stage[stage.length === 16 ? 13 : 5]
            };
        } else {
            stage = this.$stage.position();
            stage = {
                x: this.settings.rtl ? stage.left + this.$stage.width() - this.width() + this.settings.margin : stage.left,
                y: stage.top
            };
        }
        if (this.is(W0)) {
            var L0 = "pos";
            L0 += "it";
            L0 += "i";
            L0 += "on";
            $.support.transform ? this.animate(stage.x) : this.$stage.stop();
            this.invalidate(L0);
        }
        this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');
        this.speed(0);
        this._drag.time = new Date().getTime();
        this._drag.target = $(event.target);
        this._drag.stage.start = stage;
        this._drag.stage.current = stage;
        this._drag.pointer = this.pointer(event);
        $(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));
        $(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function (event) {
            var d0 = "mousemove.ow";
            d0 += "l.core to";
            d0 += "uchmove.ow";
            d0 += "l.core";
            var delta = this.difference(this._drag.pointer, this.pointer(event));
            $(document).on(d0, $.proxy(this.onDragMove, this));
            if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
                return;
            }
            event.preventDefault();
            this.enter('dragging');
            this.trigger('drag');
        }, this));
    };
    Owl.prototype.onDragMove = function (event) {
        var x0 = "dra";
        x0 += "gging";
        var minimum = null,
            maximum = null,
            pull = null,
            delta = this.difference(this._drag.pointer, this.pointer(event)),
            stage = this.difference(this._drag.stage.start, delta);
        if (!this.is(x0)) {
            return;
        }
        event.preventDefault();
        if (this.settings.loop) {
            minimum = this.coordinates(this.minimum());
            maximum = this.coordinates(this.maximum() + 1) - minimum;
            stage.x = ((stage.x - minimum) % maximum + maximum) % maximum + minimum;
        } else {
            minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
            maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
            pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
            stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
        }
        this._drag.stage.current = stage;
        this.animate(stage.x);
    };
    Owl.prototype.onDragEnd = function (event) {
        var u0 = "dr";
        u0 += "agged";
        var A0 = "dra";
        A0 += "gg";
        A0 += "ing";
        var e0 = "drag";
        e0 += "gi";
        e0 += "ng";
        var w0 = ".o";
        w0 += "wl";
        w0 += ".co";
        w0 += "re";
        var B0 = "r";
        B0 += "igh";
        B0 += "t";
        var delta = this.difference(this._drag.pointer, this.pointer(event)),
            stage = this._drag.stage.current,
            direction = delta.x > 0 ^ this.settings.rtl ? 'left' : B0;
        $(document).off(w0);
        this.$element.removeClass(this.options.grabClass);
        if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
            this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
            this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
            this.invalidate('position');
            this.update();
            this._drag.direction = direction;
            if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
                var s0 = "click.owl.";
                s0 += "core";
                this._drag.target.one(s0, function () {
                    return false;
                });
            }
        }
        if (!this.is(e0)) {
            return;
        }
        this.leave(A0);
        this.trigger(u0);
    };
    Owl.prototype.closest = function (coordinate, direction) {
        var position = -1,
            pull = 30,
            width = this.width(),
            coordinates = this.coordinates();
        if (!this.settings.freeDrag) {
            $.each(coordinates, $.proxy(function (index, value) {
                var U0 = "r";
                U0 += "ig";
                U0 += "h";
                U0 += "t";
                var N0 = "l";
                N0 += "e";
                N0 += "f";
                N0 += "t";
                if (direction === N0 && coordinate > value - pull && coordinate < value + pull) {
                    position = index;
                } else if (direction === U0 && coordinate > value - width - pull && coordinate < value - width + pull) {
                    position = index + 1;
                } else if (this.op(coordinate, '<', value) && this.op(coordinate, '>', coordinates[index + 1] || value - width)) {
                    position = direction === 'left' ? index + 1 : index;
                }
                return position === -1;
            }, this));
        }
        if (!this.settings.loop) {
            if (this.op(coordinate, '>', coordinates[this.minimum()])) {
                position = coordinate = this.minimum();
            } else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
                position = coordinate = this.maximum();
            }
        }
        return position;
    };
    Owl.prototype.animate = function (coordinate) {
        var animate = this.speed() > 0;
        this.is('animating') && this.onTransitionEnd();
        if (animate) {
            var h0 = "anima";
            h0 += "t";
            h0 += "in";
            h0 += "g";
            this.enter(h0);
            this.trigger('translate');
        }
        if ($.support.transform3d && $.support.transition) {
            var k0 = "px,0";
            k0 += "p";
            k0 += "x,0p";
            k0 += "x)";
            this.$stage.css({
                transform: 'translate3d(' + coordinate + k0,
                transition: this.speed() / 1000 + 's'
            });
        } else if (animate) {
            this.$stage.animate({
                left: coordinate + 'px'
            }, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
        } else {
            var R0 = "p";
            R0 += "x";
            this.$stage.css({
                left: coordinate + R0
            });
        }
    };
    Owl.prototype.is = function (state) {
        return this._states.current[state] && this._states.current[state] > 0;
    };
    Owl.prototype.current = function (position) {
        if (position === undefined) {
            return this._current;
        }
        if (this._items.length === 0) {
            return undefined;
        }
        position = this.normalize(position);
        if (this._current !== position) {
            var n0 = "posi";
            n0 += "tion";
            var q0 = "pos";
            q0 += "i";
            q0 += "tion";
            var event = this.trigger('change', {
                property: {
                    name: q0,
                    value: position
                }
            });
            if (event.data !== undefined) {
                position = this.normalize(event.data);
            }
            this._current = position;
            this.invalidate('position');
            this.trigger('changed', {
                property: {
                    name: n0,
                    value: this._current
                }
            });
        }
        return this._current;
    };
    Owl.prototype.invalidate = function (part) {
        if ($.type(part) === 'string') {
            var Z0 = "v";
            Z0 += "ali";
            Z0 += "d";
            var V0 = "val";
            V0 += "id";
            this._invalidated[part] = true;
            this.is(V0) && this.leave(Z0);
        }
        return $.map(this._invalidated, function (v, i) {
            return i;
        });
    };
    Owl.prototype.reset = function (position) {
        var M0 = "tran";
        M0 += "s";
        M0 += "late";
        position = this.normalize(position);
        if (position === undefined) {
            return;
        }
        this._speed = 0;
        this._current = position;
        this.suppress(['translate', 'translated']);
        this.animate(this.coordinates(position));
        this.release([M0, 'translated']);
    };
    Owl.prototype.normalize = function (position, relative) {
        var n = this._items.length,
            m = relative ? 0 : this._clones.length;
        if (!this.isNumeric(position) || n < 1) {
            position = undefined;
        } else if (position < 0 || position >= n + m) {
            position = ((position - m / 2) % n + n) % n + m / 2;
        }
        return position;
    };
    Owl.prototype.relative = function (position) {
        position -= this._clones.length / 2;
        return this.normalize(position, true);
    };
    Owl.prototype.maximum = function (relative) {
        var settings = this.settings,
            maximum = this._coordinates.length,
            iterator, reciprocalItemsWidth, elementWidth;
        if (settings.loop) {
            maximum = this._clones.length / 2 + this._items.length - 1;
        } else if (settings.autoWidth || settings.merge) {
            iterator = this._items.length;
            reciprocalItemsWidth = this._items[--iterator].width();
            elementWidth = this.$element.width();
            while (iterator--) {
                reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
                if (reciprocalItemsWidth > elementWidth) {
                    break;
                }
            }
            maximum = iterator + 1;
        } else if (settings.center) {
            maximum = this._items.length - 1;
        } else {
            maximum = this._items.length - settings.items;
        }
        if (relative) {
            maximum -= this._clones.length / 2;
        }
        return Math.max(maximum, 0);
    };
    Owl.prototype.minimum = function (relative) {
        return relative ? 0 : this._clones.length / 2;
    };
    Owl.prototype.items = function (position) {
        if (position === undefined) {
            return this._items.slice();
        }
        position = this.normalize(position, true);
        return this._items[position];
    };
    Owl.prototype.mergers = function (position) {
        if (position === undefined) {
            return this._mergers.slice();
        }
        position = this.normalize(position, true);
        return this._mergers[position];
    };
    Owl.prototype.clones = function (position) {
        var odd = this._clones.length / 2,
            even = odd + this._items.length,
            map = function (index) {
                return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2;
            };
        if (position === undefined) {
            return $.map(this._clones, function (v, i) {
                return map(i);
            });
        }
        return $.map(this._clones, function (v, i) {
            return v === position ? map(i) : null;
        });
    };
    Owl.prototype.speed = function (speed) {
        if (speed !== undefined) {
            this._speed = speed;
        }
        return this._speed;
    };
    Owl.prototype.coordinates = function (position) {
        var multiplier = 1,
            newPosition = position - 1,
            coordinate;
        if (position === undefined) {
            return $.map(this._coordinates, $.proxy(function (coordinate, index) {
                return this.coordinates(index);
            }, this));
        }
        if (this.settings.center) {
            if (this.settings.rtl) {
                multiplier = -1;
                newPosition = position + 1;
            }
            coordinate = this._coordinates[position];
            coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
        } else {
            coordinate = this._coordinates[newPosition] || 0;
        }
        coordinate = Math.ceil(coordinate);
        return coordinate;
    };
    Owl.prototype.duration = function (from, to, factor) {
        if (factor === 0) {
            return 0;
        }
        return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs(factor || this.settings.smartSpeed);
    };
    Owl.prototype.to = function (position, speed) {
        var y0 = ":vis";
        y0 += "ib";
        y0 += "le";
        var current = this.current(),
            revert = null,
            distance = position - this.relative(current),
            direction = (distance > 0) - (distance < 0),
            items = this._items.length,
            minimum = this.minimum(),
            maximum = this.maximum();
        if (this.settings.loop) {
            if (!this.settings.rewind && Math.abs(distance) > items / 2) {
                distance += direction * -1 * items;
            }
            position = current + distance;
            revert = ((position - minimum) % items + items) % items + minimum;
            if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
                current = revert - distance;
                position = revert;
                this.reset(current);
            }
        } else if (this.settings.rewind) {
            maximum += 1;
            position = (position % maximum + maximum) % maximum;
        } else {
            position = Math.max(minimum, Math.min(maximum, position));
        }
        this.speed(this.duration(current, position, speed));
        this.current(position);
        if (this.$element.is(y0)) {
            this.update();
        }
    };
    Owl.prototype.next = function (speed) {
        speed = speed || false;
        this.to(this.relative(this.current()) + 1, speed);
    };
    Owl.prototype.prev = function (speed) {
        speed = speed || false;
        this.to(this.relative(this.current()) - 1, speed);
    };
    Owl.prototype.onTransitionEnd = function (event) {
        if (event !== undefined) {
            event.stopPropagation();
            if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
                return false;
            }
        }
        this.leave('animating');
        this.trigger('translated');
    };
    Owl.prototype.viewport = function () {
        var width;
        if (this.options.responsiveBaseElement !== window) {
            width = $(this.options.responsiveBaseElement).width();
        } else if (window.innerWidth) {
            width = window.innerWidth;
        } else if (document.documentElement && document.documentElement.clientWidth) {
            width = document.documentElement.clientWidth;
        } else {
            var E0 = "Can no";
            E0 += "t";
            E0 += " detect viewport width.";
            console.warn(E0);
        }
        return width;
    };
    Owl.prototype.replace = function (content) {
        this.$stage.empty();
        this._items = [];
        if (content) {
            content = content instanceof jQuery ? content : $(content);
        }
        if (this.settings.nestedItemSelector) {
            content = content.find('.' + this.settings.nestedItemSelector);
        }
        content.filter(function () {
            return this.nodeType === 1;
        }).each($.proxy(function (index, item) {
            var K0 = "data-m";
            K0 += "erge";
            var a0 = "[data-merg";
            a0 += "e]";
            item = this.prepare(item);
            this.$stage.append(item);
            this._items.push(item);
            this._mergers.push(item.find(a0).addBack('[data-merge]').attr(K0) * 1 || 1);
        }, this));
        this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);
        this.invalidate('items');
    };
    Owl.prototype.add = function (content, position) {
        var T0 = "ad";
        T0 += "d";
        T0 += "e";
        T0 += "d";
        var H0 = "a";
        H0 += "d";
        H0 += "d";
        var current = this.relative(this._current);
        position = position === undefined ? this._items.length : this.normalize(position, true);
        content = content instanceof jQuery ? content : $(content);
        this.trigger(H0, {
            content: content,
            position: position
        });
        content = this.prepare(content);
        if (this._items.length === 0 || position === this._items.length) {
            var c0 = "[data";
            c0 += "-merge]";
            this._items.length === 0 && this.$stage.append(content);
            this._items.length !== 0 && this._items[position - 1].after(content);
            this._items.push(content);
            this._mergers.push(content.find(c0).addBack('[data-merge]').attr('data-merge') * 1 || 1);
        } else {
            var D0 = "data-mer";
            D0 += "g";
            D0 += "e";
            var r0 = "[data-m";
            r0 += "er";
            r0 += "ge";
            r0 += "]";
            var b0 = "[";
            b0 += "data-merge]";
            this._items[position].before(content);
            this._items.splice(position, 0, content);
            this._mergers.splice(position, 0, content.find(b0).addBack(r0).attr(D0) * 1 || 1);
        }
        this._items[current] && this.reset(this._items[current].index());
        this.invalidate('items');
        this.trigger(T0, {
            content: content,
            position: position
        });
    };
    Owl.prototype.remove = function (position) {
        var C0 = "r";
        C0 += "e";
        C0 += "mov";
        C0 += "e";
        position = this.normalize(position, true);
        if (position === undefined) {
            return;
        }
        this.trigger(C0, {
            content: this._items[position],
            position: position
        });
        this._items[position].remove();
        this._items.splice(position, 1);
        this._mergers.splice(position, 1);
        this.invalidate('items');
        this.trigger('removed', {
            content: null,
            position: position
        });
    };
    Owl.prototype.preloadAutoWidthImages = function (images) {
        images.each($.proxy(function (i, element) {
            var P0 = "data-";
            P0 += "s";
            P0 += "rc-reti";
            P0 += "na";
            var j0 = "s";
            j0 += "r";
            j0 += "c";
            var g0 = "s";
            g0 += "r";
            g0 += "c";
            this.enter('pre-loading');
            element = $(element);
            $(new Image()).one('load', $.proxy(function (e) {
                var v0 = "s";
                v0 += "r";
                v0 += "c";
                element.attr(v0, e.target.src);
                element.css('opacity', 1);
                this.leave('pre-loading');
                !this.is('pre-loading') && !this.is('initializing') && this.refresh();
            }, this)).attr(g0, element.attr(j0) || element.attr('data-src') || element.attr(P0));
        }, this));
    };
    Owl.prototype.destroy = function () {
        var Q3 = "owl";
        Q3 += ".carousel";
        var Y0 = "-\\S";
        Y0 += "+\\";
        Y0 += "s";
        var O0 = "cl";
        O0 += "a";
        O0 += "ss";
        var m0 = ".o";
        m0 += "wl.c";
        m0 += "ore";
        this.$element.off(m0);
        this.$stage.off('.owl.core');
        $(document).off('.owl.core');
        if (this.settings.responsive !== false) {
            var J0 = "re";
            J0 += "siz";
            J0 += "e";
            window.clearTimeout(this.resizeTimer);
            this.off(window, J0, this._handlers.onThrottledResize);
        }
        for (var i in this._plugins) {
            this._plugins[i].destroy();
        }
        this.$stage.children('.cloned').remove();
        this.$stage.unwrap();
        this.$stage.children().contents().unwrap();
        this.$stage.children().unwrap();
        this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr('class', this.$element.attr(O0).replace(new RegExp(this.options.responsiveClass + Y0, 'g'), '')).removeData(Q3);
    };
    Owl.prototype.op = function (a, o, b) {
        var rtl = this.settings.rtl;
        switch (o) {
            case '<':
                return rtl ? a > b : a < b;
            case '>':
                return rtl ? a < b : a > b;
            case '>=':
                return rtl ? a <= b : a >= b;
            case '<=':
                return rtl ? a >= b : a <= b;
            default:
                break;
        }
    };
    Owl.prototype.on = function (element, event, listener, capture) {
        if (element.addEventListener) {
            element.addEventListener(event, listener, capture);
        } else if (element.attachEvent) {
            var f3 = "o";
            f3 += "n";
            element.attachEvent(f3 + event, listener);
        }
    };
    Owl.prototype.off = function (element, event, listener, capture) {
        if (element.removeEventListener) {
            element.removeEventListener(event, listener, capture);
        } else if (element.detachEvent) {
            var t3 = "o";
            t3 += "n";
            element.detachEvent(t3 + event, listener);
        }
    };
    Owl.prototype.trigger = function (name, data, namespace, state, enter) {
        var I3 = "o";
        I3 += "w";
        I3 += "l";
        var F3 = "o";
        F3 += "n";
        var status = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            handler = $.camelCase($.grep([F3, name, namespace], function (v) {
                return v;
            }).join('-').toLowerCase()),
            event = $.Event([name, I3, namespace || 'carousel'].join('.').toLowerCase(), $.extend({
                relatedTarget: this
            }, status, data));
        if (!this._supress[name]) {
            var S3 = "f";
            S3 += "un";
            S3 += "ction";
            $.each(this._plugins, function (name, plugin) {
                if (plugin.onTrigger) {
                    plugin.onTrigger(event);
                }
            });
            this.register({
                type: Owl.Type.Event,
                name: name
            });
            this.$element.trigger(event);
            if (this.settings && typeof this.settings[handler] === S3) {
                this.settings[handler].call(this, event);
            }
        }
        return event;
    };
    Owl.prototype.enter = function (name) {
        $.each([name].concat(this._states.tags[name] || []), $.proxy(function (i, name) {
            if (this._states.current[name] === undefined) {
                this._states.current[name] = 0;
            }
            this._states.current[name]++;
        }, this));
    };
    Owl.prototype.leave = function (name) {
        $.each([name].concat(this._states.tags[name] || []), $.proxy(function (i, name) {
            this._states.current[name]--;
        }, this));
    };
    Owl.prototype.register = function (object) {
        if (object.type === Owl.Type.Event) {
            if (!$.event.special[object.name]) {
                $.event.special[object.name] = {};
            }
            if (!$.event.special[object.name].owl) {
                var _default = $.event.special[object.name]._default;
                $.event.special[object.name]._default = function (e) {
                    var i3 = "ow";
                    i3 += "l";
                    var p3 = "o";
                    p3 += "wl";
                    if (_default && _default.apply && (!e.namespace || e.namespace.indexOf(p3) === -1)) {
                        return _default.apply(this, arguments);
                    }
                    return e.namespace && e.namespace.indexOf(i3) > -1;
                };
                $.event.special[object.name].owl = true;
            }
        } else if (object.type === Owl.Type.State) {
            if (!this._states.tags[object.name]) {
                this._states.tags[object.name] = object.tags;
            } else {
                this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
            }
            this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function (tag, i) {
                return $.inArray(tag, this._states.tags[object.name]) === i;
            }, this));
        }
    };
    Owl.prototype.suppress = function (events) {
        $.each(events, $.proxy(function (index, event) {
            this._supress[event] = true;
        }, this));
    };
    Owl.prototype.release = function (events) {
        $.each(events, $.proxy(function (index, event) {
            delete this._supress[event];
        }, this));
    };
    Owl.prototype.pointer = function (event) {
        var result = {
            x: null,
            y: null
        };
        event = event.originalEvent || event || window.event;
        event = event.touches && event.touches.length ? event.touches[0] : event.changedTouches && event.changedTouches.length ? event.changedTouches[0] : event;
        if (event.pageX) {
            result.x = event.pageX;
            result.y = event.pageY;
        } else {
            result.x = event.clientX;
            result.y = event.clientY;
        }
        return result;
    };
    Owl.prototype.isNumeric = function (number) {
        return !isNaN(parseFloat(number));
    };
    Owl.prototype.difference = function (first, second) {
        return {
            x: first.x - second.x,
            y: first.y - second.y
        };
    };
    $.fn.owlCarousel = function (option) {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.each(function () {
            var W3 = "st";
            W3 += "ri";
            W3 += "ng";
            var $this = $(this),
                data = $this.data('owl.carousel');
            if (!data) {
                var X3 = "rem";
                X3 += "ove";
                var o3 = "rep";
                o3 += "la";
                o3 += "c";
                o3 += "e";
                var l3 = "t";
                l3 += "o";
                var z3 = "owl.";
                z3 += "carousel";
                var G3 = "ob";
                G3 += "jec";
                G3 += "t";
                data = new Owl(this, typeof option == G3 && option);
                $this.data(z3, data);
                $.each(['next', 'prev', l3, 'destroy', 'refresh', o3, 'add', X3], function (i, event) {
                    data.register({
                        type: Owl.Type.Event,
                        name: event
                    });
                    data.$element.on(event + '.owl.carousel.core', $.proxy(function (e) {
                        if (e.namespace && e.relatedTarget !== this) {
                            this.suppress([event]);
                            data[event].apply(this, [].slice.call(arguments, 1));
                            this.release([event]);
                        }
                    }, data));
                });
            }
            if (typeof option == W3 && option.charAt(0) !== '_') {
                data[option].apply(data, args);
            }
        });
    };
    $.fn.owlCarousel.Constructor = Owl;
}(window.Zepto || window.jQuery, window, document));;
(function ($, window, document, undefined) {
    var AutoRefresh = function (carousel) {
        this._core = carousel;
        this._interval = null;
        this._visible = null;
        this._handlers = {
            'initialized.owl.carousel': $.proxy(function (e) {
                if (e.namespace && this._core.settings.autoRefresh) {
                    this.watch();
                }
            }, this)
        };
        this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);
        this._core.$element.on(this._handlers);
    };
    AutoRefresh.Defaults = {
        autoRefresh: true,
        autoRefreshInterval: 500
    };
    AutoRefresh.prototype.watch = function () {
        var L3 = ":visi";
        L3 += "bl";
        L3 += "e";
        if (this._interval) {
            return;
        }
        this._visible = this._core.$element.is(L3);
        this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
    };
    AutoRefresh.prototype.refresh = function () {
        var B3 = "wid";
        B3 += "th";
        var x3 = "ow";
        x3 += "l-hidden";
        var d3 = ":vi";
        d3 += "si";
        d3 += "b";
        d3 += "le";
        if (this._core.$element.is(d3) === this._visible) {
            return;
        }
        this._visible = !this._visible;
        this._core.$element.toggleClass(x3, !this._visible);
        this._visible && (this._core.invalidate(B3) && this._core.refresh());
    };
    AutoRefresh.prototype.destroy = function () {
        var handler, property;
        window.clearInterval(this._interval);
        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;
}(window.Zepto || window.jQuery, window, document));;
(function ($, window, document, undefined) {
    var Lazy = function (carousel) {
        this._core = carousel;
        this._loaded = [];
        this._handlers = {
            'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function (e) {
                var w3 = "in";
                w3 += "iti";
                w3 += "a";
                w3 += "lized";
                if (!e.namespace) {
                    return;
                }
                if (!this._core.settings || !this._core.settings.lazyLoad) {
                    return;
                }
                if (e.property && e.property.name == 'position' || e.type == w3) {
                    var settings = this._core.settings,
                        n = settings.center && Math.ceil(settings.items / 2) || settings.items,
                        i = settings.center && n * -1 || 0,
                        position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
                        clones = this._core.clones().length,
                        load = $.proxy(function (i, v) {
                            this.load(v);
                        }, this);
                    while (i++ < n) {
                        this.load(clones / 2 + this._core.relative(position));
                        clones && $.each(this._core.clones(this._core.relative(position)), load);
                        position++;
                    }
                }
            }, this)
        };
        this._core.options = $.extend({}, Lazy.Defaults, this._core.options);
        this._core.$element.on(this._handlers);
    };
    Lazy.Defaults = {
        lazyLoad: false
    };
    Lazy.prototype.load = function (position) {
        var s3 = ".owl-la";
        s3 += "z";
        s3 += "y";
        var $item = this._core.$stage.children().eq(position),
            $elements = $item && $item.find(s3);
        if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
            return;
        }
        $elements.each($.proxy(function (index, element) {
            var u3 = "la";
            u3 += "zy";
            var A3 = "da";
            A3 += "ta-";
            A3 += "sr";
            A3 += "c";
            var e3 = "data-src";
            e3 += "-r";
            e3 += "etina";
            var $element = $(element),
                image, url = window.devicePixelRatio > 1 && $element.attr(e3) || $element.attr(A3);
            this._core.trigger('load', {
                element: $element,
                url: url
            }, u3);
            if ($element.is('img')) {
                var N3 = "l";
                N3 += "o";
                N3 += "ad.owl.lazy";
                $element.one(N3, $.proxy(function () {
                    var h3 = "l";
                    h3 += "a";
                    h3 += "zy";
                    var U3 = "opacit";
                    U3 += "y";
                    $element.css(U3, 1);
                    this._core.trigger('loaded', {
                        element: $element,
                        url: url
                    }, h3);
                }, this)).attr('src', url);
            } else {
                image = new Image();
                image.onload = $.proxy(function () {
                    var k3 = "laz";
                    k3 += "y";
                    $element.css({
                        'background-image': 'url("' + url + '")',
                        'opacity': '1'
                    });
                    this._core.trigger('loaded', {
                        element: $element,
                        url: url
                    }, k3);
                }, this);
                image.src = url;
            }
        }, this));
        this._loaded.push($item.get(0));
    };
    Lazy.prototype.destroy = function () {
        var handler, property;
        for (handler in this.handlers) {
            this._core.$element.off(handler, this.handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            var R3 = "fu";
            R3 += "nction";
            typeof this[property] != R3 && (this[property] = null);
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;
}(window.Zepto || window.jQuery, window, document));;
(function ($, window, document, undefined) {
    var q3 = "o";
    q3 += "wl-heigh";
    q3 += "t";
    var AutoHeight = function (carousel) {
        this._core = carousel;
        this._handlers = {
            'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function (e) {
                if (e.namespace && this._core.settings.autoHeight) {
                    this.update();
                }
            }, this),
            'changed.owl.carousel': $.proxy(function (e) {
                if (e.namespace && this._core.settings.autoHeight && e.property.name == 'position') {
                    this.update();
                }
            }, this),
            'loaded.owl.lazy': $.proxy(function (e) {
                if (e.namespace && this._core.settings.autoHeight && e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
                    this.update();
                }
            }, this)
        };
        this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);
        this._core.$element.on(this._handlers);
    };
    AutoHeight.Defaults = {
        autoHeight: false,
        autoHeightClass: q3
    };
    AutoHeight.prototype.update = function () {
        var start = this._core._current,
            end = start + this._core.settings.items,
            visible = this._core.$stage.children().toArray().slice(start, end),
            heights = [],
            maxheight = 0;
        $.each(visible, function (index, item) {
            heights.push($(item).height());
        });
        maxheight = Math.max.apply(null, heights);
        this._core.$stage.parent().height(maxheight).addClass(this._core.settings.autoHeightClass);
    };
    AutoHeight.prototype.destroy = function () {
        var handler, property;
        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            var n3 = "func";
            n3 += "tion";
            typeof this[property] != n3 && (this[property] = null);
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;
}(window.Zepto || window.jQuery, window, document));;
(function ($, window, document, undefined) {
    var Video = function (carousel) {
        var H3 = "c";
        H3 += "lic";
        H3 += "k.owl";
        H3 += ".video";
        this._core = carousel;
        this._videos = {};
        this._playing = null;
        this._handlers = {
            'initialized.owl.carousel': $.proxy(function (e) {
                if (e.namespace) {
                    var Z3 = "inte";
                    Z3 += "racting";
                    var V3 = "pl";
                    V3 += "a";
                    V3 += "ying";
                    this._core.register({
                        type: 'state',
                        name: V3,
                        tags: [Z3]
                    });
                }
            }, this),
            'resize.owl.carousel': $.proxy(function (e) {
                if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
                    e.preventDefault();
                }
            }, this),
            'refreshed.owl.carousel': $.proxy(function (e) {
                var M3 = "re";
                M3 += "siz";
                M3 += "in";
                M3 += "g";
                if (e.namespace && this._core.is(M3)) {
                    var y3 = ".";
                    y3 += "cloned .owl-video-fr";
                    y3 += "ame";
                    this._core.$stage.find(y3).remove();
                }
            }, this),
            'changed.owl.carousel': $.proxy(function (e) {
                var E3 = "p";
                E3 += "o";
                E3 += "si";
                E3 += "tion";
                if (e.namespace && e.property.name === E3 && this._playing) {
                    this.stop();
                }
            }, this),
            'prepared.owl.carousel': $.proxy(function (e) {
                var a3 = ".o";
                a3 += "wl-video";
                if (!e.namespace) {
                    return;
                }
                var $element = $(e.content).find(a3);
                if ($element.length) {
                    var K3 = "dis";
                    K3 += "p";
                    K3 += "lay";
                    $element.css(K3, 'none');
                    this.fetch($element, $(e.content));
                }
            }, this)
        };
        this._core.options = $.extend({}, Video.Defaults, this._core.options);
        this._core.$element.on(this._handlers);
        this._core.$element.on(H3, '.owl-video-play-icon', $.proxy(function (e) {
            this.play(e);
        }, this));
    };
    Video.Defaults = {
        video: false,
        videoHeight: false,
        videoWidth: false
    };
    Video.prototype.fetch = function (target, item) {
        var D3 = "d";
        D3 += "ata";
        D3 += "-h";
        D3 += "eight";
        var r3 = "dat";
        r3 += "a-wi";
        r3 += "d";
        r3 += "th";
        var b3 = "data-";
        b3 += "vimeo";
        b3 += "-id";
        var type = function () {
                if (target.attr('data-vimeo-id')) {
                    return 'vimeo';
                } else if (target.attr('data-vzaar-id')) {
                    return 'vzaar';
                } else {
                    var c3 = "you";
                    c3 += "tube";
                    return c3;
                }
            }(),
            id = target.attr(b3) || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
            width = target.attr(r3) || this._core.settings.videoWidth,
            height = target.attr(D3) || this._core.settings.videoHeight,
            url = target.attr('href');
        if (url) {
            var g3 = "vzaa";
            g3 += "r";
            var T3 = "y";
            T3 += "o";
            T3 += "ut";
            T3 += "u";
            id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);
            if (id[3].indexOf(T3) > -1) {
                var C3 = "y";
                C3 += "ou";
                C3 += "tube";
                type = C3;
            } else if (id[3].indexOf('vimeo') > -1) {
                var v3 = "v";
                v3 += "im";
                v3 += "eo";
                type = v3;
            } else if (id[3].indexOf(g3) > -1) {
                type = 'vzaar';
            } else {
                throw new Error('Video URL not supported.');
            }
            id = id[6];
        } else {
            throw new Error('Missing video URL.');
        }
        this._videos[url] = {
            type: type,
            id: id,
            width: width,
            height: height
        };
        item.attr('data-video', url);
        this.thumbnail(target, this._videos[url]);
    };
    Video.prototype.thumbnail = function (target, video) {
        var t1 = "y";
        t1 += "outube";
        var f1 = "></div";
        f1 += ">";
        var Q1 = "<";
        Q1 += "div class=\"owl-vide";
        Q1 += "o-wrapper\"";
        var P3 = "p";
        P3 += "x;";
        P3 += "\"";
        var j3 = "style=\"";
        j3 += "w";
        j3 += "idth:";
        var tnLink, icon, path, dimensions = video.width && video.height ? j3 + video.width + 'px;height:' + video.height + P3 : '',
            customTn = target.find('img'),
            srcType = 'src',
            lazyClass = '',
            settings = this._core.settings,
            create = function (path) {
                icon = '<div class="owl-video-play-icon"></div>';
                if (settings.lazyLoad) {
                    var J3 = "\"";
                    J3 += " ";
                    var m3 = "<div";
                    m3 += " clas";
                    m3 += "s=\"owl-v";
                    m3 += "ideo-tn ";
                    tnLink = m3 + lazyClass + J3 + srcType + '="' + path + '"></div>';
                } else {
                    var Y3 = ")\"></d";
                    Y3 += "iv>";
                    var O3 = "<div class=\"owl-video-tn\" style=\"opa";
                    O3 += "city:1;background-image:url(";
                    tnLink = O3 + path + Y3;
                }
                target.after(tnLink);
                target.after(icon);
            };
        target.wrap(Q1 + dimensions + f1);
        if (this._core.settings.lazyLoad) {
            srcType = 'data-src';
            lazyClass = 'owl-lazy';
        }
        if (customTn.length) {
            create(customTn.attr(srcType));
            customTn.remove();
            return false;
        }
        if (video.type === t1) {
            var F1 = "//img.youtube";
            F1 += ".com/v";
            F1 += "i/";
            path = F1 + video.id + "/hqdefault.jpg";
            create(path);
        } else if (video.type === 'vimeo') {
            var I1 = "G";
            I1 += "E";
            I1 += "T";
            $.ajax({
                type: I1,
                url: '//vimeo.com/api/v2/video/' + video.id + '.json',
                jsonp: 'callback',
                dataType: 'jsonp',
                success: function (data) {
                    path = data[0].thumbnail_large;
                    create(path);
                }
            });
        } else if (video.type === 'vzaar') {
            var p1 = ".";
            p1 += "j";
            p1 += "so";
            p1 += "n";
            var S1 = "//vzaar.com/api/video";
            S1 += "s/";
            $.ajax({
                type: 'GET',
                url: S1 + video.id + p1,
                jsonp: 'callback',
                dataType: 'jsonp',
                success: function (data) {
                    path = data.framegrab_url;
                    create(path);
                }
            });
        }
    };
    Video.prototype.stop = function () {
        var X1 = "vide";
        X1 += "o";
        var o1 = "st";
        o1 += "opped";
        var l1 = "play";
        l1 += "ing";
        var z1 = ".owl-video-f";
        z1 += "rame";
        var G1 = "v";
        G1 += "ideo";
        var i1 = "s";
        i1 += "t";
        i1 += "o";
        i1 += "p";
        this._core.trigger(i1, null, G1);
        this._playing.find(z1).remove();
        this._playing.removeClass('owl-video-playing');
        this._playing = null;
        this._core.leave(l1);
        this._core.trigger(o1, null, X1);
    };
    Video.prototype.play = function (event) {
        var q1 = "owl-video";
        q1 += "-playing";
        var R1 = "<di";
        R1 += "v class=\"owl";
        R1 += "-video-fr";
        R1 += "ame\">";
        var u1 = "vzaa";
        u1 += "r";
        var B1 = "vi";
        B1 += "deo";
        var x1 = "p";
        x1 += "lay";
        var d1 = "p";
        d1 += "l";
        d1 += "ayi";
        d1 += "ng";
        var L1 = "1";
        L1 += "0";
        L1 += "0";
        L1 += "%";
        var W1 = "data-v";
        W1 += "ideo";
        var target = $(event.target),
            item = target.closest('.' + this._core.settings.itemClass),
            video = this._videos[item.attr(W1)],
            width = video.width || L1,
            height = video.height || this._core.$stage.height(),
            html;
        if (this._playing) {
            return;
        }
        this._core.enter(d1);
        this._core.trigger(x1, null, B1);
        item = this._core.items(this._core.relative(item.index()));
        this._core.reset(item.index());
        if (video.type === 'youtube') {
            var s1 = "?autoplay=1&rel=0&";
            s1 += "v=";
            var w1 = "<ifr";
            w1 += "ame widt";
            w1 += "h";
            w1 += "=\"";
            html = w1 + width + '" height="' + height + '" src="//www.youtube.com/embed/' + video.id + s1 + video.id + '" frameborder="0" allowfullscreen></iframe>';
        } else if (video.type === 'vimeo') {
            var A1 = "\" heigh";
            A1 += "t=\"";
            var e1 = "<iframe src=\"";
            e1 += "//player.v";
            e1 += "imeo.com/video/";
            html = e1 + video.id + '?autoplay=1" width="' + width + A1 + height + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
        } else if (video.type === u1) {
            var k1 = "\" allowful";
            k1 += "lscreen mozallowfullscreen webkitAllowFullScree";
            k1 += "n ";
            var h1 = "wid";
            h1 += "th";
            h1 += "=\"";
            var U1 = "heigh";
            U1 += "t=\"";
            var N1 = "<iframe frameborder=";
            N1 += "\"";
            N1 += "0\"";
            html = N1 + U1 + height + '"' + h1 + width + k1 + 'src="//view.vzaar.com/' + video.id + '/player?autoplay=true"></iframe>';
        }
        $(R1 + html + '</div>').insertAfter(item.find('.owl-video'));
        this._playing = item.addClass(q1);
    };
    Video.prototype.isInFullScreen = function () {
        var element = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
        return element && $(element).parent().hasClass('owl-video-frame');
    };
    Video.prototype.destroy = function () {
        var handler, property;
        this._core.$element.off('click.owl.video');
        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            var n1 = "funct";
            n1 += "i";
            n1 += "o";
            n1 += "n";
            typeof this[property] != n1 && (this[property] = null);
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.Video = Video;
}(window.Zepto || window.jQuery, window, document));;
(function ($, window, document, undefined) {
    var Animate = function (scope) {
        this.core = scope;
        this.core.options = $.extend({}, Animate.Defaults, this.core.options);
        this.swapping = true;
        this.previous = undefined;
        this.next = undefined;
        this.handlers = {
            'change.owl.carousel': $.proxy(function (e) {
                if (e.namespace && e.property.name == 'position') {
                    this.previous = this.core.current();
                    this.next = e.property.value;
                }
            }, this),
            'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function (e) {
                if (e.namespace) {
                    var V1 = "tr";
                    V1 += "anslate";
                    V1 += "d";
                    this.swapping = e.type == V1;
                }
            }, this),
            'translate.owl.carousel': $.proxy(function (e) {
                if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
                    this.swap();
                }
            }, this)
        };
        this.core.$element.on(this.handlers);
    };
    Animate.Defaults = {
        animateOut: false,
        animateIn: false
    };
    Animate.prototype.swap = function () {
        if (this.core.settings.items !== 1) {
            return;
        }
        if (!$.support.animation || !$.support.transition) {
            return;
        }
        this.core.speed(0);
        var left, clear = $.proxy(this.clear, this),
            previous = this.core.$stage.children().eq(this.previous),
            next = this.core.$stage.children().eq(this.next),
            incoming = this.core.settings.animateIn,
            outgoing = this.core.settings.animateOut;
        if (this.core.current() === this.previous) {
            return;
        }
        if (outgoing) {
            left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
            previous.one($.support.animation.end, clear).css({
                'left': left + 'px'
            }).addClass('animated owl-animated-out').addClass(outgoing);
        }
        if (incoming) {
            var Z1 = "animated owl";
            Z1 += "-animated-in";
            next.one($.support.animation.end, clear).addClass(Z1).addClass(incoming);
        }
    };
    Animate.prototype.clear = function (e) {
        $(e.target).css({
            'left': ''
        }).removeClass('animated owl-animated-out owl-animated-in').removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut);
        this.core.onTransitionEnd();
    };
    Animate.prototype.destroy = function () {
        var handler, property;
        for (handler in this.handlers) {
            this.core.$element.off(handler, this.handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.Animate = Animate;
}(window.Zepto || window.jQuery, window, document));;
(function ($, window, document, undefined) {
    var Autoplay = function (carousel) {
        this._core = carousel;
        this._timeout = null;
        this._paused = false;
        this._handlers = {
            'changed.owl.carousel': $.proxy(function (e) {
                if (e.namespace && e.property.name === 'settings') {
                    if (this._core.settings.autoplay) {
                        this.play();
                    } else {
                        this.stop();
                    }
                } else if (e.namespace && e.property.name === 'position') {
                    if (this._core.settings.autoplay) {
                        this._setAutoPlayInterval();
                    }
                }
            }, this),
            'initialized.owl.carousel': $.proxy(function (e) {
                if (e.namespace && this._core.settings.autoplay) {
                    this.play();
                }
            }, this),
            'play.owl.autoplay': $.proxy(function (e, t, s) {
                if (e.namespace) {
                    this.play(t, s);
                }
            }, this),
            'stop.owl.autoplay': $.proxy(function (e) {
                if (e.namespace) {
                    this.stop();
                }
            }, this),
            'mouseover.owl.autoplay': $.proxy(function () {
                if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
                    this.pause();
                }
            }, this),
            'mouseleave.owl.autoplay': $.proxy(function () {
                var M1 = "ro";
                M1 += "tating";
                if (this._core.settings.autoplayHoverPause && this._core.is(M1)) {
                    this.play();
                }
            }, this),
            'touchstart.owl.core': $.proxy(function () {
                var y1 = "rot";
                y1 += "a";
                y1 += "tin";
                y1 += "g";
                if (this._core.settings.autoplayHoverPause && this._core.is(y1)) {
                    this.pause();
                }
            }, this),
            'touchend.owl.core': $.proxy(function () {
                if (this._core.settings.autoplayHoverPause) {
                    this.play();
                }
            }, this)
        };
        this._core.$element.on(this._handlers);
        this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
    };
    Autoplay.Defaults = {
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        autoplaySpeed: false
    };
    Autoplay.prototype.play = function (timeout, speed) {
        var a1 = "rot";
        a1 += "a";
        a1 += "ting";
        var E1 = "rot";
        E1 += "ati";
        E1 += "ng";
        this._paused = false;
        if (this._core.is(E1)) {
            return;
        }
        this._core.enter(a1);
        this._setAutoPlayInterval();
    };
    Autoplay.prototype._getNextTimeout = function (timeout, speed) {
        if (this._timeout) {
            window.clearTimeout(this._timeout);
        }
        return window.setTimeout($.proxy(function () {
            var K1 = "int";
            K1 += "erac";
            K1 += "ting";
            if (this._paused || this._core.is('busy') || this._core.is(K1) || document.hidden) {
                return;
            }
            this._core.next(speed || this._core.settings.autoplaySpeed);
        }, this), timeout || this._core.settings.autoplayTimeout);
    };
    Autoplay.prototype._setAutoPlayInterval = function () {
        this._timeout = this._getNextTimeout();
    };
    Autoplay.prototype.stop = function () {
        var H1 = "ro";
        H1 += "ta";
        H1 += "ti";
        H1 += "ng";
        if (!this._core.is(H1)) {
            return;
        }
        window.clearTimeout(this._timeout);
        this._core.leave('rotating');
    };
    Autoplay.prototype.pause = function () {
        var c1 = "ro";
        c1 += "t";
        c1 += "atin";
        c1 += "g";
        if (!this._core.is(c1)) {
            return;
        }
        this._paused = true;
    };
    Autoplay.prototype.destroy = function () {
        var handler, property;
        this.stop();
        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;
}(window.Zepto || window.jQuery, window, document));;
(function ($, window, document, undefined) {
    var Q6 = "o";
    Q6 += "wl-pr";
    Q6 += "e";
    Q6 += "v";
    var Y1 = "owl-";
    Y1 += "nav";
    var O1 = "d";
    O1 += "i";
    O1 += "v";
    var J1 = "n";
    J1 += "e";
    J1 += "x";
    J1 += "t";
    var m1 = "p";
    m1 += "rev";
    'use strict';
    var Navigation = function (carousel) {
        this._core = carousel;
        this._initialized = false;
        this._pages = [];
        this._controls = {};
        this._templates = [];
        this.$element = this._core.$element;
        this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        };
        this._handlers = {
            'prepared.owl.carousel': $.proxy(function (e) {
                if (e.namespace && this._core.settings.dotsData) {
                    var T1 = "[";
                    T1 += "d";
                    T1 += "a";
                    T1 += "ta-dot]";
                    var D1 = "[data";
                    D1 += "-d";
                    D1 += "ot]";
                    var r1 = "\"";
                    r1 += ">";
                    var b1 = "<";
                    b1 += "di";
                    b1 += "v class=";
                    b1 += "\"";
                    this._templates.push(b1 + this._core.settings.dotClass + r1 + $(e.content).find(D1).addBack(T1).attr('data-dot') + '</div>');
                }
            }, this),
            'added.owl.carousel': $.proxy(function (e) {
                if (e.namespace && this._core.settings.dotsData) {
                    this._templates.splice(e.position, 0, this._templates.pop());
                }
            }, this),
            'remove.owl.carousel': $.proxy(function (e) {
                if (e.namespace && this._core.settings.dotsData) {
                    this._templates.splice(e.position, 1);
                }
            }, this),
            'changed.owl.carousel': $.proxy(function (e) {
                var C1 = "posi";
                C1 += "t";
                C1 += "ion";
                if (e.namespace && e.property.name == C1) {
                    this.draw();
                }
            }, this),
            'initialized.owl.carousel': $.proxy(function (e) {
                if (e.namespace && !this._initialized) {
                    var g1 = "n";
                    g1 += "avigat";
                    g1 += "io";
                    g1 += "n";
                    var v1 = "ini";
                    v1 += "tialized";
                    this._core.trigger('initialize', null, 'navigation');
                    this.initialize();
                    this.update();
                    this.draw();
                    this._initialized = true;
                    this._core.trigger(v1, null, g1);
                }
            }, this),
            'refreshed.owl.carousel': $.proxy(function (e) {
                if (e.namespace && this._initialized) {
                    var P1 = "na";
                    P1 += "v";
                    P1 += "igati";
                    P1 += "on";
                    var j1 = "ref";
                    j1 += "res";
                    j1 += "h";
                    this._core.trigger(j1, null, P1);
                    this.update();
                    this.draw();
                    this._core.trigger('refreshed', null, 'navigation');
                }
            }, this)
        };
        this._core.options = $.extend({}, Navigation.Defaults, this._core.options);
        this.$element.on(this._handlers);
    };
    Navigation.Defaults = {
        nav: false,
        navText: [m1, J1],
        navSpeed: false,
        navElement: O1,
        navContainer: false,
        navContainerClass: Y1,
        navClass: [Q6, 'owl-next'],
        slideBy: 1,
        dotClass: 'owl-dot',
        dotsClass: 'owl-dots',
        dots: true,
        dotsEach: false,
        dotsData: false,
        dotsSpeed: false,
        dotsContainer: false
    };
    Navigation.prototype.initialize = function () {
        var f6 = "cli";
        f6 += "ck";
        var override, settings = this._core.settings;
        this._controls.$relative = (settings.navContainer ? $(settings.navContainer) : $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');
        this._controls.$previous = $('<' + settings.navElement + '>').addClass(settings.navClass[0]).html(settings.navText[0]).prependTo(this._controls.$relative).on(f6, $.proxy(function (e) {
            this.prev(settings.navSpeed);
        }, this));
        this._controls.$next = $('<' + settings.navElement + '>').addClass(settings.navClass[1]).html(settings.navText[1]).appendTo(this._controls.$relative).on('click', $.proxy(function (e) {
            this.next(settings.navSpeed);
        }, this));
        if (!settings.dotsData) {
            var F6 = "<s";
            F6 += "pan>";
            var t6 = "<";
            t6 += "div";
            t6 += ">";
            this._templates = [$(t6).addClass(settings.dotClass).append($(F6)).prop('outerHTML')];
        }
        this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer) : $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');
        this._controls.$absolute.on('click', 'div', $.proxy(function (e) {
            var index = $(e.target).parent().is(this._controls.$absolute) ? $(e.target).index() : $(e.target).parent().index();
            e.preventDefault();
            this.to(index, settings.dotsSpeed);
        }, this));
        for (override in this._overrides) {
            this._core[override] = $.proxy(this[override], this);
        }
    };
    Navigation.prototype.destroy = function () {
        var handler, control, property, override;
        for (handler in this._handlers) {
            this.$element.off(handler, this._handlers[handler]);
        }
        for (control in this._controls) {
            this._controls[control].remove();
        }
        for (override in this.overides) {
            this._core[override] = this._overrides[override];
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };
    Navigation.prototype.update = function () {
        var i, j, k, lower = this._core.clones().length / 2,
            upper = lower + this._core.items().length,
            maximum = this._core.maximum(true),
            settings = this._core.settings,
            size = settings.center || settings.autoWidth || settings.dotsData ? 1 : settings.dotsEach || settings.items;
        if (settings.slideBy !== 'page') {
            settings.slideBy = Math.min(settings.slideBy, settings.items);
        }
        if (settings.dots || settings.slideBy == 'page') {
            this._pages = [];
            for (i = lower, j = 0, k = 0; i < upper; i++) {
                if (j >= size || j === 0) {
                    this._pages.push({
                        start: Math.min(maximum, i - lower),
                        end: i - lower + size - 1
                    });
                    if (Math.min(maximum, i - lower) === maximum) {
                        break;
                    }
                    j = 0, ++k;
                }
                j += this._core.mergers(this._core.relative(i));
            }
        }
    };
    Navigation.prototype.draw = function () {
        var p6 = "disab";
        p6 += "led";
        var I6 = "d";
        I6 += "isab";
        I6 += "le";
        I6 += "d";
        var difference, settings = this._core.settings,
            disabled = this._core.items().length <= settings.items,
            index = this._core.relative(this._core.current()),
            loop = settings.loop || settings.rewind;
        this._controls.$relative.toggleClass(I6, !settings.nav || disabled);
        if (settings.nav) {
            var S6 = "disa";
            S6 += "bl";
            S6 += "ed";
            this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
            this._controls.$next.toggleClass(S6, !loop && index >= this._core.maximum(true));
        }
        this._controls.$absolute.toggleClass(p6, !settings.dots || disabled);
        if (settings.dots) {
            var G6 = "a";
            G6 += "ctive";
            var i6 = ".ac";
            i6 += "t";
            i6 += "iv";
            i6 += "e";
            difference = this._pages.length - this._controls.$absolute.children().length;
            if (settings.dotsData && difference !== 0) {
                this._controls.$absolute.html(this._templates.join(''));
            } else if (difference > 0) {
                this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
            } else if (difference < 0) {
                this._controls.$absolute.children().slice(difference).remove();
            }
            this._controls.$absolute.find(i6).removeClass(G6);
            this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
        }
    };
    Navigation.prototype.onTrigger = function (event) {
        var settings = this._core.settings;
        event.page = {
            index: $.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: settings && (settings.center || settings.autoWidth || settings.dotsData ? 1 : settings.dotsEach || settings.items)
        };
    };
    Navigation.prototype.current = function () {
        var current = this._core.relative(this._core.current());
        return $.grep(this._pages, $.proxy(function (page, index) {
            return page.start <= current && page.end >= current;
        }, this)).pop();
    };
    Navigation.prototype.getPosition = function (successor) {
        var position, length, settings = this._core.settings;
        if (settings.slideBy == 'page') {
            position = $.inArray(this.current(), this._pages);
            length = this._pages.length;
            successor ? ++position : --position;
            position = this._pages[(position % length + length) % length].start;
        } else {
            position = this._core.relative(this._core.current());
            length = this._core.items().length;
            successor ? position += settings.slideBy : position -= settings.slideBy;
        }
        return position;
    };
    Navigation.prototype.next = function (speed) {
        $.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
    };
    Navigation.prototype.prev = function (speed) {
        $.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
    };
    Navigation.prototype.to = function (position, speed, standard) {
        var length;
        if (!standard && this._pages.length) {
            length = this._pages.length;
            $.proxy(this._overrides.to, this._core)(this._pages[(position % length + length) % length].start, speed);
        } else {
            $.proxy(this._overrides.to, this._core)(position, speed);
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;
}(window.Zepto || window.jQuery, window, document));;
(function ($, window, document, undefined) {
    'use strict';
    var Hash = function (carousel) {
        this._core = carousel;
        this._hashes = {};
        this.$element = this._core.$element;
        this._handlers = {
            'initialized.owl.carousel': $.proxy(function (e) {
                if (e.namespace && this._core.settings.startPosition === 'URLHash') {
                    $(window).trigger('hashchange.owl.navigation');
                }
            }, this),
            'prepared.owl.carousel': $.proxy(function (e) {
                if (e.namespace) {
                    var z6 = "[d";
                    z6 += "ata-";
                    z6 += "hash";
                    z6 += "]";
                    var hash = $(e.content).find('[data-hash]').addBack(z6).attr('data-hash');
                    if (!hash) {
                        return;
                    }
                    this._hashes[hash] = e.content;
                }
            }, this),
            'changed.owl.carousel': $.proxy(function (e) {
                var l6 = "p";
                l6 += "osition";
                if (e.namespace && e.property.name === l6) {
                    var current = this._core.items(this._core.relative(this._core.current())),
                        hash = $.map(this._hashes, function (item, hash) {
                            return item === current ? hash : null;
                        }).join();
                    if (!hash || window.location.hash.slice(1) === hash) {
                        return;
                    }
                    window.location.hash = hash;
                }
            }, this)
        };
        this._core.options = $.extend({}, Hash.Defaults, this._core.options);
        this.$element.on(this._handlers);
        $(window).on('hashchange.owl.navigation', $.proxy(function (e) {
            var hash = window.location.hash.substring(1),
                items = this._core.$stage.children(),
                position = this._hashes[hash] && items.index(this._hashes[hash]);
            if (position === undefined || position === this._core.current()) {
                return;
            }
            this._core.to(this._core.relative(position), false, true);
        }, this));
    };
    Hash.Defaults = {
        URLhashListener: false
    };
    Hash.prototype.destroy = function () {
        var o6 = "ha";
        o6 += "shchange.owl.navigat";
        o6 += "i";
        o6 += "on";
        var handler, property;
        $(window).off(o6);
        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            var X6 = "fu";
            X6 += "nc";
            X6 += "ti";
            X6 += "on";
            typeof this[property] != X6 && (this[property] = null);
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.Hash = Hash;
}(window.Zepto || window.jQuery, window, document));;
(function ($, window, document, undefined) {
    var e6 = "a";
    e6 += "nimat";
    e6 += "ionend";
    var s6 = "oAnimati";
    s6 += "onEn";
    s6 += "d";
    var w6 = "animat";
    w6 += "ionend";
    var B6 = "webkitAn";
    B6 += "imati";
    B6 += "onEnd";
    var x6 = "oTransiti";
    x6 += "onE";
    x6 += "nd";
    var d6 = "transit";
    d6 += "ionend";
    var L6 = "web";
    L6 += "kitTransitionEnd";
    var W6 = "Webkit M";
    W6 += "oz O ";
    W6 += "ms";
    var style = $('<support>').get(0).style,
        prefixes = W6.split(' '),
        events = {
            transition: {
                end: {
                    WebkitTransition: L6,
                    MozTransition: d6,
                    OTransition: x6,
                    transition: 'transitionend'
                }
            },
            animation: {
                end: {
                    WebkitAnimation: B6,
                    MozAnimation: w6,
                    OAnimation: s6,
                    animation: e6
                }
            }
        },
        tests = {
            csstransforms: function () {
                var A6 = "tran";
                A6 += "sfo";
                A6 += "rm";
                return !!test(A6);
            },
            csstransforms3d: function () {
                return !!test('perspective');
            },
            csstransitions: function () {
                var u6 = "transi";
                u6 += "tion";
                return !!test(u6);
            },
            cssanimations: function () {
                return !!test('animation');
            }
        };

    function test(property, prefixed) {
        var result = false,
            upper = property.charAt(0).toUpperCase() + property.slice(1);
        $.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function (i, property) {
            if (style[property] !== undefined) {
                result = prefixed ? property : true;
                return false;
            }
        });
        return result;
    }

    function prefixed(property) {
        return test(property, true);
    }
    if (tests.csstransitions()) {
        $.support.transition = new String(prefixed('transition'));
        $.support.transition.end = events.transition.end[$.support.transition];
    }
    if (tests.cssanimations()) {
        var N6 = "a";
        N6 += "ni";
        N6 += "m";
        N6 += "ation";
        $.support.animation = new String(prefixed(N6));
        $.support.animation.end = events.animation.end[$.support.animation];
    }
    if (tests.csstransforms()) {
        $.support.transform = new String(prefixed('transform'));
        $.support.transform3d = tests.csstransforms3d();
    }
}(window.Zepto || window.jQuery, window, document));;
(function (h) {
    var U6 = "e";
    U6 += "as";
    U6 += "eOutQu";
    U6 += "ad";
    h.easing.jswing = h.easing.swing;
    h.extend(h.easing, {
        def: U6,
        swing: function (e, a, c, b, d) {
            return h.easing[h.easing.def](e, a, c, b, d);
        },
        easeInQuad: function (e, a, c, b, d) {
            return b * (a /= d) * a + c;
        },
        easeOutQuad: function (e, a, c, b, d) {
            return -b * (a /= d) * (a - 2) + c;
        },
        easeInOutQuad: function (e, a, c, b, d) {
            return 1 > (a /= d / 2) ? b / 2 * a * a + c : -b / 2 * (--a * (a - 2) - 1) + c;
        },
        easeInCubic: function (e, a, c, b, d) {
            return b * (a /= d) * a * a + c;
        },
        easeOutCubic: function (e, a, c, b, d) {
            return b * ((a = a / d - 1) * a * a + 1) + c;
        },
        easeInOutCubic: function (e, a, c, b, d) {
            return 1 > (a /= d / 2) ? b / 2 * a * a * a + c : b / 2 * ((a -= 2) * a * a + 2) + c;
        },
        easeInQuart: function (e, a, c, b, d) {
            return b * (a /= d) * a * a * a + c;
        },
        easeOutQuart: function (e, a, c, b, d) {
            return -b * ((a = a / d - 1) * a * a * a - 1) + c;
        },
        easeInOutQuart: function (e, a, c, b, d) {
            return 1 > (a /= d / 2) ? b / 2 * a * a * a * a + c : -b / 2 * ((a -= 2) * a * a * a - 2) + c;
        },
        easeInQuint: function (e, a, c, b, d) {
            return b * (a /= d) * a * a * a * a + c;
        },
        easeOutQuint: function (e, a, c, b, d) {
            return b * ((a = a / d - 1) * a * a * a * a + 1) + c;
        },
        easeInOutQuint: function (e, a, c, b, d) {
            return 1 > (a /= d / 2) ? b / 2 * a * a * a * a * a + c : b / 2 * ((a -= 2) * a * a * a * a + 2) + c;
        },
        easeInSine: function (e, a, c, b, d) {
            return -b * Math.cos(a / d * (Math.PI / 2)) + b + c;
        },
        easeOutSine: function (e, a, c, b, d) {
            return b * Math.sin(a / d * (Math.PI / 2)) + c;
        },
        easeInOutSine: function (e, a, c, b, d) {
            return -b / 2 * (Math.cos(Math.PI * a / d) - 1) + c;
        },
        easeInExpo: function (e, a, c, b, d) {
            return 0 == a ? c : b * Math.pow(2, 10 * (a / d - 1)) + c;
        },
        easeOutExpo: function (e, a, c, b, d) {
            return a == d ? c + b : b * (-Math.pow(2, -10 * a / d) + 1) + c;
        },
        easeInOutExpo: function (e, a, c, b, d) {
            return 0 == a ? c : a == d ? c + b : 1 > (a /= d / 2) ? b / 2 * Math.pow(2, 10 * (a - 1)) + c : b / 2 * (-Math.pow(2, -10 * --a) + 2) + c;
        },
        easeInCirc: function (e, a, c, b, d) {
            return -b * (Math.sqrt(1 - (a /= d) * a) - 1) + c;
        },
        easeOutCirc: function (e, a, c, b, d) {
            return b * Math.sqrt(1 - (a = a / d - 1) * a) + c;
        },
        easeInOutCirc: function (e, a, c, b, d) {
            return 1 > (a /= d / 2) ? -b / 2 * (Math.sqrt(1 - a * a) - 1) + c : b / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + c;
        },
        easeInElastic: function (e, a, c, b, d) {
            e = 1.70158;
            var f = 0,
                g = b;
            if (0 == a) return c;
            if (1 == (a /= d)) return c + b;
            f || (f = .3 * d);
            g < Math.abs(b) ? (g = b, e = f / 4) : e = f / (2 * Math.PI) * Math.asin(b / g);
            return -(g * Math.pow(2, 10 * --a) * Math.sin(2 * (a * d - e) * Math.PI / f)) + c;
        },
        easeOutElastic: function (e, a, c, b, d) {
            e = 1.70158;
            var f = 0,
                g = b;
            if (0 == a) return c;
            if (1 == (a /= d)) return c + b;
            f || (f = .3 * d);
            g < Math.abs(b) ? (g = b, e = f / 4) : e = f / (2 * Math.PI) * Math.asin(b / g);
            return g * Math.pow(2, -10 * a) * Math.sin(2 * (a * d - e) * Math.PI / f) + b + c;
        },
        easeInOutElastic: function (e, a, c, b, d) {
            e = 1.70158;
            var f = 0,
                g = b;
            if (0 == a) return c;
            if (2 == (a /= d / 2)) return c + b;
            f || (f = .3 * d * 1.5);
            g < Math.abs(b) ? (g = b, e = f / 4) : e = f / (2 * Math.PI) * Math.asin(b / g);
            return 1 > a ? -.5 * g * Math.pow(2, 10 * --a) * Math.sin(2 * (a * d - e) * Math.PI / f) + c : g * Math.pow(2, -10 * --a) * Math.sin(2 * (a * d - e) * Math.PI / f) * .5 + b + c;
        },
        easeInBack: function (e, a, c, b, d, f) {
            void 0 == f && (f = 1.70158);
            return b * (a /= d) * a * ((f + 1) * a - f) + c;
        },
        easeOutBack: function (e, a, c, b, d, f) {
            void 0 == f && (f = 1.70158);
            return b * ((a = a / d - 1) * a * ((f + 1) * a + f) + 1) + c;
        },
        easeInOutBack: function (e, a, c, b, d, f) {
            void 0 == f && (f = 1.70158);
            return 1 > (a /= d / 2) ? b / 2 * a * a * (((f *= 1.525) + 1) * a - f) + c : b / 2 * ((a -= 2) * a * (((f *= 1.525) + 1) * a + f) + 2) + c;
        },
        easeInBounce: function (e, a, c, b, d) {
            return b - h.easing.easeOutBounce(e, d - a, 0, b, d) + c;
        },
        easeOutBounce: function (e, a, c, b, d) {
            return (a /= d) < 1 / 2.75 ? 7.5625 * b * a * a + c : a < 2 / 2.75 ? b * (7.5625 * (a -= 1.5 / 2.75) * a + .75) + c : a < 2.5 / 2.75 ? b * (7.5625 * (a -= 2.25 / 2.75) * a + .9375) + c : b * (7.5625 * (a -= 2.625 / 2.75) * a + .984375) + c;
        },
        easeInOutBounce: function (e, a, c, b, d) {
            return a < d / 2 ? .5 * h.easing.easeInBounce(e, 2 * a, 0, b, d) + c : .5 * h.easing.easeOutBounce(e, 2 * a - d, 0, b, d) + .5 * b + c;
        }
    });
}(jQuery));
(function () {
    var a, b, c, d, e, f = function (a, b) {
            return function () {
                return a.apply(b, arguments);
            };
        },
        g = [].indexOf || function (a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (b in this && this[b] === a) return b;
            return -1;
        };
    b = function () {
        function a() {}
        return a.prototype.extend = function (a, b) {
            var c, d;
            for (c in b) d = b[c], null == a[c] && (a[c] = d);
            return a;
        }, a.prototype.isMobile = function (a) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a);
        }, a.prototype.createEvent = function (a, b, c, d) {
            var h6 = "CustomEv";
            h6 += "ent";
            var e;
            return null == b && (b = !1), null == c && (c = !1), null == d && (d = null), null != document.createEvent ? (e = document.createEvent(h6), e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(), e.eventType = a) : e.eventName = a, e;
        }, a.prototype.emitEvent = function (a, b) {
            var R6 = "o";
            R6 += "n";
            var k6 = "o";
            k6 += "n";
            return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : k6 + b in (null != a) ? a[R6 + b]() : void 0;
        }, a.prototype.addEvent = function (a, b, c) {
            var q6 = "o";
            q6 += "n";
            return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent(q6 + b, c) : a[b] = c;
        }, a.prototype.removeEvent = function (a, b, c) {
            var n6 = "o";
            n6 += "n";
            return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent(n6 + b, c) : delete a[b];
        }, a.prototype.innerHeight = function () {
            return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight;
        }, a;
    }(), c = this.WeakMap || this.MozWeakMap || (c = function () {
        function a() {
            this.keys = [], this.values = [];
        }
        return a.prototype.get = function (a) {
            var b, c, d, e, f;
            for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
                if (c = f[b], c === a) return this.values[b];
        }, a.prototype.set = function (a, b) {
            var c, d, e, f, g;
            for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
                if (d = g[c], d === a) return void(this.values[c] = b);
            return this.keys.push(a), this.values.push(b);
        }, a;
    }()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function () {
        function a() {
            var V6 = "MutationObserver is not supported";
            V6 += " by your browser.";
            "undefined" != typeof console && null !== console && console.warn(V6), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.");
        }
        return a.notSupported = !0, a.prototype.observe = function () {}, a;
    }()), d = this.getComputedStyle || function (a, b) {
        return this.getPropertyValue = function (b) {
            var Z6 = "styl";
            Z6 += "eFloat";
            var c;
            return "float" === b && (b = Z6), e.test(b) && b.replace(e, function (a, b) {
                return b.toUpperCase();
            }), (null != (c = a.currentStyle) ? c[b] : void 0) || null;
        }, this;
    }, e = /(\-([a-z]){1})/g, this.WOW = function () {
        var j6 = "m";
        j6 += "o";
        j6 += "z";
        var y6 = "ani";
        y6 += "mated";
        var M6 = "w";
        M6 += "o";
        M6 += "w";

        function e(a) {
            null == a && (a = {}), this.scrollCallback = f(this.scrollCallback, this), this.scrollHandler = f(this.scrollHandler, this), this.resetAnimation = f(this.resetAnimation, this), this.start = f(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), null != a.scrollContainer && (this.config.scrollContainer = document.querySelector(a.scrollContainer)), this.animationNameCache = new c(), this.wowEvent = this.util().createEvent(this.config.boxClass);
        }
        return e.prototype.defaults = {
            boxClass: M6,
            animateClass: y6,
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null,
            scrollContainer: null
        }, e.prototype.init = function () {
            var a6 = "D";
            a6 += "OMContentLoade";
            a6 += "d";
            var E6 = "c";
            E6 += "o";
            E6 += "mp";
            E6 += "lete";
            var a;
            return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || E6 === a ? this.start() : this.util().addEvent(document, a6, this.start), this.finished = [];
        }, e.prototype.start = function () {
            var b, c, d, e;
            if (this.stopped = !1, this.boxes = function () {
                    var a, c, d, e;
                    for (d = this.element.querySelectorAll("." + this.config.boxClass), e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
                    return e;
                }.call(this), this.all = function () {
                    var a, c, d, e;
                    for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
                    return e;
                }.call(this), this.boxes.length)
                if (this.disabled()) this.resetStyle();
                else
                    for (e = this.boxes, c = 0, d = e.length; d > c; c++) b = e[c], this.applyStyle(b, !0);
            return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new a(function (a) {
                return function (b) {
                    var c, d, e, f, g;
                    for (g = [], c = 0, d = b.length; d > c; c++) f = b[c], g.push(function () {
                        var a, b, c, d;
                        for (c = f.addedNodes || [], d = [], a = 0, b = c.length; b > a; a++) e = c[a], d.push(this.doSync(e));
                        return d;
                    }.call(a));
                    return g;
                };
            }(this)).observe(document.body, {
                childList: !0,
                subtree: !0
            }) : void 0;
        }, e.prototype.stop = function () {
            var K6 = "s";
            K6 += "c";
            K6 += "r";
            K6 += "oll";
            return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, K6, this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0;
        }, e.prototype.sync = function (b) {
            return a.notSupported ? this.doSync(this.element) : void 0;
        }, e.prototype.doSync = function (a) {
            var b, c, d, e, f;
            if (null == a && (a = this.element), 1 === a.nodeType) {
                for (a = a.parentNode || a, e = a.querySelectorAll("." + this.config.boxClass), f = [], c = 0, d = e.length; d > c; c++) b = e[c], g.call(this.all, b) < 0 ? (this.boxes.push(b), this.all.push(b), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0), f.push(this.scrolled = !0)) : f.push(void 0);
                return f;
            }
        }, e.prototype.show = function (a) {
            var b6 = "webkitAn";
            b6 += "imationEnd";
            var c6 = "oanim";
            c6 += "atione";
            c6 += "nd";
            var H6 = "animati";
            H6 += "on";
            H6 += "en";
            H6 += "d";
            return this.applyStyle(a), a.className = a.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(a), this.util().emitEvent(a, this.wowEvent), this.util().addEvent(a, H6, this.resetAnimation), this.util().addEvent(a, c6, this.resetAnimation), this.util().addEvent(a, b6, this.resetAnimation), this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation), a;
        }, e.prototype.applyStyle = function (a, b) {
            var T6 = "data-wow";
            T6 += "-i";
            T6 += "teration";
            var D6 = "data-wo";
            D6 += "w-delay";
            var r6 = "data-wow-dura";
            r6 += "tion";
            var c, d, e;
            return d = a.getAttribute(r6), c = a.getAttribute(D6), e = a.getAttribute(T6), this.animate(function (f) {
                return function () {
                    return f.customStyle(a, b, d, c, e);
                };
            }(this));
        }, e.prototype.animate = function () {
            var C6 = "re";
            C6 += "quest";
            C6 += "An";
            C6 += "imationFrame";
            return C6 in window ? function (a) {
                return window.requestAnimationFrame(a);
            } : function (a) {
                return a();
            };
        }(), e.prototype.resetStyle = function () {
            var v6 = "vi";
            v6 += "si";
            v6 += "ble";
            var a, b, c, d, e;
            for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(a.style.visibility = v6);
            return e;
        }, e.prototype.resetAnimation = function (a) {
            var g6 = "animat";
            g6 += "ione";
            g6 += "nd";
            var b;
            return a.type.toLowerCase().indexOf(g6) >= 0 ? (b = a.target || a.srcElement, b.className = b.className.replace(this.config.animateClass, "").trim()) : void 0;
        }, e.prototype.customStyle = function (a, b, c, d, e) {
            return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, {
                animationDuration: c
            }), d && this.vendorSet(a.style, {
                animationDelay: d
            }), e && this.vendorSet(a.style, {
                animationIterationCount: e
            }), this.vendorSet(a.style, {
                animationName: b ? "none" : this.cachedAnimationName(a)
            }), a;
        }, e.prototype.vendors = [j6, "webkit"], e.prototype.vendorSet = function (a, b) {
            var c, d, e, f;
            d = [];
            for (c in b) e = b[c], a["" + c] = e, d.push(function () {
                var b, d, g, h;
                for (g = this.vendors, h = [], b = 0, d = g.length; d > b; b++) f = g[b], h.push(a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e);
                return h;
            }.call(this));
            return d;
        }, e.prototype.vendorCSS = function (a, b) {
            var c, e, f, g, h, i;
            for (h = d(a), g = h.getPropertyCSSValue(b), f = this.vendors, c = 0, e = f.length; e > c; c++) i = f[c], g = g || h.getPropertyCSSValue("-" + i + "-" + b);
            return g;
        }, e.prototype.animationName = function (a) {
            var J6 = "non";
            J6 += "e";
            var b;
            try {
                var P6 = "an";
                P6 += "imati";
                P6 += "on-name";
                b = this.vendorCSS(a, P6).cssText;
            } catch (c) {
                var m6 = "animatio";
                m6 += "n-n";
                m6 += "ame";
                b = d(a).getPropertyValue(m6);
            }
            return J6 === b ? "" : b;
        }, e.prototype.cacheAnimationName = function (a) {
            return this.animationNameCache.set(a, this.animationName(a));
        }, e.prototype.cachedAnimationName = function (a) {
            return this.animationNameCache.get(a);
        }, e.prototype.scrollHandler = function () {
            return this.scrolled = !0;
        }, e.prototype.scrollCallback = function () {
            var a;
            return !this.scrolled || (this.scrolled = !1, this.boxes = function () {
                var b, c, d, e;
                for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a));
                return e;
            }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop();
        }, e.prototype.offsetTop = function (a) {
            for (var b; void 0 === a.offsetTop;) a = a.parentNode;
            for (b = a.offsetTop; a = a.offsetParent;) b += a.offsetTop;
            return b;
        }, e.prototype.isVisible = function (a) {
            var O6 = "data-wo";
            O6 += "w-of";
            O6 += "fset";
            var b, c, d, e, f;
            return c = a.getAttribute(O6) || this.config.offset, f = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f;
        }, e.prototype.util = function () {
            return null != this._util ? this._util : this._util = new b();
        }, e.prototype.disabled = function () {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent);
        }, e;
    }();
}.call(this));
! function (a, t) {
    var Y6 = "f";
    Y6 += "unctio";
    Y6 += "n";
    Y6 == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t(require, exports, module) : a.CountUp = t();
}(this, function (a, t, n) {
    var e = function (a, t, n, e, i, r) {
        var I5 = "str";
        I5 += "i";
        I5 += "ng";
        var F5 = "CancelRe";
        F5 += "questAnimatio";
        F5 += "nFrame";
        var t5 = "Reque";
        t5 += "stAnimationFra";
        t5 += "me";
        var f5 = "m";
        f5 += "s";
        var Q5 = "w";
        Q5 += "ebk";
        Q5 += "i";
        Q5 += "t";
        for (var o = 0, s = [Q5, "moz", f5, "o"], m = 0; m < s.length && !window.requestAnimationFrame; ++m) window.requestAnimationFrame = window[s[m] + t5], window.cancelAnimationFrame = window[s[m] + "CancelAnimationFrame"] || window[s[m] + F5];
        window.requestAnimationFrame || (window.requestAnimationFrame = function (a, t) {
            var n = new Date().getTime(),
                e = Math.max(0, 16 - (n - o)),
                i = window.setTimeout(function () {
                    a(n + e);
                }, e);
            return o = n + e, i;
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (a) {
            clearTimeout(a);
        });
        var u = this;
        u.options = {
            useEasing: !0,
            useGrouping: !0,
            separator: ",",
            decimal: ".",
            easingFn: null,
            formattingFn: null
        };
        for (var l in r) r.hasOwnProperty(l) && (u.options[l] = r[l]);
        "" === u.options.separator && (u.options.useGrouping = !1), u.options.prefix || (u.options.prefix = ""), u.options.suffix || (u.options.suffix = ""), u.d = I5 == typeof a ? document.getElementById(a) : a, u.startVal = Number(t), u.endVal = Number(n), u.countDown = u.startVal > u.endVal, u.frameVal = u.startVal, u.decimals = Math.max(0, e || 0), u.dec = Math.pow(10, u.decimals), u.duration = 1e3 * Number(i) || 2e3, u.formatNumber = function (a) {
            var S5 = "$";
            S5 += "1";
            a = a.toFixed(u.decimals), a += "";
            var t, n, e, i;
            if (t = a.split("."), n = t[0], e = t.length > 1 ? u.options.decimal + t[1] : "", i = /(\d+)(\d{3})/, u.options.useGrouping)
                for (; i.test(n);) n = n.replace(i, S5 + u.options.separator + "$2");
            return u.options.prefix + n + e + u.options.suffix;
        }, u.easeOutExpo = function (a, t, n, e) {
            return n * (-Math.pow(2, -10 * a / e) + 1) * 1024 / 1023 + t;
        }, u.easingFn = u.options.easingFn ? u.options.easingFn : u.easeOutExpo, u.formattingFn = u.options.formattingFn ? u.options.formattingFn : u.formatNumber, u.version = function () {
            return "1.7.1";
        }, u.printValue = function (a) {
            var i5 = "t";
            i5 += "s";
            i5 += "pa";
            i5 += "n";
            var p5 = "t";
            p5 += "ex";
            p5 += "t";
            var t = u.formattingFn(a);
            "INPUT" === u.d.tagName ? this.d.value = t : p5 === u.d.tagName || i5 === u.d.tagName ? this.d.textContent = t : this.d.innerHTML = t;
        }, u.count = function (a) {
            u.startTime || (u.startTime = a), u.timestamp = a;
            var t = a - u.startTime;
            u.remaining = u.duration - t, u.options.useEasing ? u.countDown ? u.frameVal = u.startVal - u.easingFn(t, 0, u.startVal - u.endVal, u.duration) : u.frameVal = u.easingFn(t, u.startVal, u.endVal - u.startVal, u.duration) : u.countDown ? u.frameVal = u.startVal - (u.startVal - u.endVal) * (t / u.duration) : u.frameVal = u.startVal + (u.endVal - u.startVal) * (t / u.duration), u.countDown ? u.frameVal = u.frameVal < u.endVal ? u.endVal : u.frameVal : u.frameVal = u.frameVal > u.endVal ? u.endVal : u.frameVal, u.frameVal = Math.round(u.frameVal * u.dec) / u.dec, u.printValue(u.frameVal), t < u.duration ? u.rAF = requestAnimationFrame(u.count) : u.callback && u.callback();
        }, u.start = function (a) {
            return u.callback = a, u.rAF = requestAnimationFrame(u.count), !1;
        }, u.pauseResume = function () {
            u.paused ? (u.paused = !1, delete u.startTime, u.duration = u.remaining, u.startVal = u.frameVal, requestAnimationFrame(u.count)) : (u.paused = !0, cancelAnimationFrame(u.rAF));
        }, u.reset = function () {
            u.paused = !1, delete u.startTime, u.startVal = t, cancelAnimationFrame(u.rAF), u.printValue(u.startVal);
        }, u.update = function (a) {
            cancelAnimationFrame(u.rAF), u.paused = !1, delete u.startTime, u.startVal = u.frameVal, u.endVal = Number(a), u.countDown = u.startVal > u.endVal, u.rAF = requestAnimationFrame(u.count);
        }, u.printValue(u.startVal);
    };
    return e;
});
(function (b) {
    function n(a) {
        return b(a).filter(function () {
            var G5 = ":a";
            G5 += "p";
            G5 += "pear";
            G5 += "ed";
            return b(this).is(G5);
        });
    }

    function h() {
        k = !1;
        for (var a = 0, b = l.length; a < b; a++) {
            var z5 = "ap";
            z5 += "pe";
            z5 += "ar";
            var c = n(l[a]);
            c.trigger(z5, [c]);
            if (e[a]) {
                var d = e[a].not(c);
                d.trigger("disappear", [d]);
            }
            e[a] = c;
        }
    }
    var l = [],
        m = !1,
        k = !1,
        p = {
            interval: 250,
            force_process: !1
        },
        g = b(window),
        e = [];
    b.expr[":"].appeared = function (a) {
        var X5 = "a";
        X5 += "ppear-lef";
        X5 += "t-offse";
        X5 += "t";
        var o5 = "a";
        o5 += "ppear-";
        o5 += "top-offs";
        o5 += "et";
        var l5 = ":";
        l5 += "visible";
        a = b(a);
        if (!a.is(l5)) return !1;
        var f = g.scrollLeft(),
            c = g.scrollTop(),
            d = a.offset(),
            e = d.left,
            d = d.top;
        return d + a.height() >= c && d - (a.data(o5) || 0) <= c + g.height() && e + a.width() >= f && e - (a.data(X5) || 0) <= f + g.width() ? !0 : !1;
    };
    b.fn.extend({
        appear: function (a) {
            var f = b.extend({}, p, a || {});
            a = this.selector || this;
            if (!m) {
                var c = function () {
                    k || (k = !0, setTimeout(h, f.interval));
                };
                b(window).scroll(c).resize(c);
                m = !0;
                c();
            }
            f.force_process && setTimeout(h, f.interval);
            l.push(a);
            e.push();
            return b(a);
        }
    });
    b.extend({
        force_appear: function () {
            return m ? (h(), !0) : !1;
        }
    });
}(function () {
    var W5 = "und";
    W5 += "efi";
    W5 += "n";
    W5 += "ed";
    return W5 !== typeof module ? require("jquery") : jQuery;
}()));
var QRCode;
! function () {
    var U5 = "s";
    U5 += "v";
    U5 += "g";

    function a(a) {
        this.mode = c.MODE_8BIT_BYTE, this.data = a, this.parsedData = [];
        for (var b = [], d = 0, e = this.data.length; e > d; d++) {
            var f = this.data.charCodeAt(d);
            f > 65536 ? (b[0] = 240 | (1835008 & f) >>> 18, b[1] = 128 | (258048 & f) >>> 12, b[2] = 128 | (4032 & f) >>> 6, b[3] = 128 | 63 & f) : f > 2048 ? (b[0] = 224 | (61440 & f) >>> 12, b[1] = 128 | (4032 & f) >>> 6, b[2] = 128 | 63 & f) : f > 128 ? (b[0] = 192 | (1984 & f) >>> 6, b[1] = 128 | 63 & f) : b[0] = f, this.parsedData = this.parsedData.concat(b);
        }
        this.parsedData.length != this.data.length && (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239));
    }

    function b(a, b) {
        this.typeNumber = a, this.errorCorrectLevel = b, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = [];
    }

    function i(a, b) {
        if (void 0 == a.length) throw new Error(a.length + "/" + b);
        for (var c = 0; c < a.length && 0 == a[c];) c++;
        this.num = new Array(a.length - c + b);
        for (var d = 0; d < a.length - c; d++) this.num[d] = a[d + c];
    }

    function j(a, b) {
        this.totalCount = a, this.dataCount = b;
    }

    function k() {
        this.buffer = [], this.length = 0;
    }

    function m() {
        var L5 = "u";
        L5 += "n";
        L5 += "def";
        L5 += "ined";
        return L5 != typeof CanvasRenderingContext2D;
    }

    function n() {
        var a = !1,
            b = navigator.userAgent;
        return /android/i.test(b) && (a = !0, aMat = b.toString().match(/android ([0-9]\.[0-9])/i), aMat && aMat[1] && (a = parseFloat(aMat[1]))), a;
    }

    function r(a, b) {
        for (var c = 1, e = s(a), f = 0, g = l.length; g >= f; f++) {
            var h = 0;
            switch (b) {
                case d.L:
                    h = l[f][0];
                    break;
                case d.M:
                    h = l[f][1];
                    break;
                case d.Q:
                    h = l[f][2];
                    break;
                case d.H:
                    h = l[f][3];
            }
            if (h >= e) break;
            c++;
        }
        if (c > l.length) throw new Error("Too long data");
        return c;
    }

    function s(a) {
        var b = encodeURI(a).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
        return b.length + (b.length != a ? 3 : 0);
    }
    a.prototype = {
        getLength: function () {
            return this.parsedData.length;
        },
        write: function (a) {
            for (var b = 0, c = this.parsedData.length; c > b; b++) a.put(this.parsedData[b], 8);
        }
    }, b.prototype = {
        addData: function (b) {
            var c = new a(b);
            this.dataList.push(c), this.dataCache = null;
        },
        isDark: function (a, b) {
            if (0 > a || this.moduleCount <= a || 0 > b || this.moduleCount <= b) throw new Error(a + "," + b);
            return this.modules[a][b];
        },
        getModuleCount: function () {
            return this.moduleCount;
        },
        make: function () {
            this.makeImpl(!1, this.getBestMaskPattern());
        },
        makeImpl: function (a, c) {
            this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
            for (var d = 0; d < this.moduleCount; d++) {
                this.modules[d] = new Array(this.moduleCount);
                for (var e = 0; e < this.moduleCount; e++) this.modules[d][e] = null;
            }
            this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(a, c), this.typeNumber >= 7 && this.setupTypeNumber(a), null == this.dataCache && (this.dataCache = b.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, c);
        },
        setupPositionProbePattern: function (a, b) {
            for (var c = -1; 7 >= c; c++)
                if (!(-1 >= a + c || this.moduleCount <= a + c))
                    for (var d = -1; 7 >= d; d++) - 1 >= b + d || this.moduleCount <= b + d || (this.modules[a + c][b + d] = c >= 0 && 6 >= c && (0 == d || 6 == d) || d >= 0 && 6 >= d && (0 == c || 6 == c) || c >= 2 && 4 >= c && d >= 2 && 4 >= d ? !0 : !1);
        },
        getBestMaskPattern: function () {
            for (var a = 0, b = 0, c = 0; 8 > c; c++) {
                this.makeImpl(!0, c);
                var d = f.getLostPoint(this);
                (0 == c || a > d) && (a = d, b = c);
            }
            return b;
        },
        createMovieClip: function (a, b, c) {
            var d = a.createEmptyMovieClip(b, c),
                e = 1;
            this.make();
            for (var f = 0; f < this.modules.length; f++)
                for (var g = f * e, h = 0; h < this.modules[f].length; h++) {
                    var i = h * e,
                        j = this.modules[f][h];
                    j && (d.beginFill(0, 100), d.moveTo(i, g), d.lineTo(i + e, g), d.lineTo(i + e, g + e), d.lineTo(i, g + e), d.endFill());
                }
            return d;
        },
        setupTimingPattern: function () {
            for (var a = 8; a < this.moduleCount - 8; a++) null == this.modules[a][6] && (this.modules[a][6] = 0 == a % 2);
            for (var b = 8; b < this.moduleCount - 8; b++) null == this.modules[6][b] && (this.modules[6][b] = 0 == b % 2);
        },
        setupPositionAdjustPattern: function () {
            for (var a = f.getPatternPosition(this.typeNumber), b = 0; b < a.length; b++)
                for (var c = 0; c < a.length; c++) {
                    var d = a[b],
                        e = a[c];
                    if (null == this.modules[d][e])
                        for (var g = -2; 2 >= g; g++)
                            for (var h = -2; 2 >= h; h++) this.modules[d + g][e + h] = -2 == g || 2 == g || -2 == h || 2 == h || 0 == g && 0 == h ? !0 : !1;
                }
        },
        setupTypeNumber: function (a) {
            for (var b = f.getBCHTypeNumber(this.typeNumber), c = 0; 18 > c; c++) {
                var d = !a && 1 == (1 & b >> c);
                this.modules[Math.floor(c / 3)][c % 3 + this.moduleCount - 8 - 3] = d;
            }
            for (var c = 0; 18 > c; c++) {
                var d = !a && 1 == (1 & b >> c);
                this.modules[c % 3 + this.moduleCount - 8 - 3][Math.floor(c / 3)] = d;
            }
        },
        setupTypeInfo: function (a, b) {
            for (var c = this.errorCorrectLevel << 3 | b, d = f.getBCHTypeInfo(c), e = 0; 15 > e; e++) {
                var g = !a && 1 == (1 & d >> e);
                6 > e ? this.modules[e][8] = g : 8 > e ? this.modules[e + 1][8] = g : this.modules[this.moduleCount - 15 + e][8] = g;
            }
            for (var e = 0; 15 > e; e++) {
                var g = !a && 1 == (1 & d >> e);
                8 > e ? this.modules[8][this.moduleCount - e - 1] = g : 9 > e ? this.modules[8][15 - e - 1 + 1] = g : this.modules[8][15 - e - 1] = g;
            }
            this.modules[this.moduleCount - 8][8] = !a;
        },
        mapData: function (a, b) {
            for (var c = -1, d = this.moduleCount - 1, e = 7, g = 0, h = this.moduleCount - 1; h > 0; h -= 2)
                for (6 == h && h--;;) {
                    for (var i = 0; 2 > i; i++)
                        if (null == this.modules[d][h - i]) {
                            var j = !1;
                            g < a.length && (j = 1 == (1 & a[g] >>> e));
                            var k = f.getMask(b, d, h - i);
                            k && (j = !j), this.modules[d][h - i] = j, e--, -1 == e && (g++, e = 7);
                        } if (d += c, 0 > d || this.moduleCount <= d) {
                        d -= c, c = -c;
                        break;
                    }
                }
        }
    }, b.PAD0 = 236, b.PAD1 = 17, b.createData = function (a, c, d) {
        for (var e = j.getRSBlocks(a, c), g = new k(), h = 0; h < d.length; h++) {
            var i = d[h];
            g.put(i.mode, 4), g.put(i.getLength(), f.getLengthInBits(i.mode, a)), i.write(g);
        }
        for (var l = 0, h = 0; h < e.length; h++) l += e[h].dataCount;
        if (g.getLengthInBits() > 8 * l) throw new Error("code length overflow. (" + g.getLengthInBits() + ">" + 8 * l + ")");
        for (g.getLengthInBits() + 4 <= 8 * l && g.put(0, 4); 0 != g.getLengthInBits() % 8;) g.putBit(!1);
        for (;;) {
            if (g.getLengthInBits() >= 8 * l) break;
            if (g.put(b.PAD0, 8), g.getLengthInBits() >= 8 * l) break;
            g.put(b.PAD1, 8);
        }
        return b.createBytes(g, e);
    }, b.createBytes = function (a, b) {
        for (var c = 0, d = 0, e = 0, g = new Array(b.length), h = new Array(b.length), j = 0; j < b.length; j++) {
            var k = b[j].dataCount,
                l = b[j].totalCount - k;
            d = Math.max(d, k), e = Math.max(e, l), g[j] = new Array(k);
            for (var m = 0; m < g[j].length; m++) g[j][m] = 255 & a.buffer[m + c];
            c += k;
            var n = f.getErrorCorrectPolynomial(l),
                o = new i(g[j], n.getLength() - 1),
                p = o.mod(n);
            h[j] = new Array(n.getLength() - 1);
            for (var m = 0; m < h[j].length; m++) {
                var q = m + p.getLength() - h[j].length;
                h[j][m] = q >= 0 ? p.get(q) : 0;
            }
        }
        for (var r = 0, m = 0; m < b.length; m++) r += b[m].totalCount;
        for (var s = new Array(r), t = 0, m = 0; d > m; m++)
            for (var j = 0; j < b.length; j++) m < g[j].length && (s[t++] = g[j][m]);
        for (var m = 0; e > m; m++)
            for (var j = 0; j < b.length; j++) m < h[j].length && (s[t++] = h[j][m]);
        return s;
    };
    for (var c = {
            MODE_NUMBER: 1,
            MODE_ALPHA_NUM: 2,
            MODE_8BIT_BYTE: 4,
            MODE_KANJI: 8
        }, d = {
            L: 1,
            M: 0,
            Q: 3,
            H: 2
        }, e = {
            PATTERN000: 0,
            PATTERN001: 1,
            PATTERN010: 2,
            PATTERN011: 3,
            PATTERN100: 4,
            PATTERN101: 5,
            PATTERN110: 6,
            PATTERN111: 7
        }, f = {
            PATTERN_POSITION_TABLE: [
                [],
                [6, 18],
                [6, 22],
                [6, 26],
                [6, 30],
                [6, 34],
                [6, 22, 38],
                [6, 24, 42],
                [6, 26, 46],
                [6, 28, 50],
                [6, 30, 54],
                [6, 32, 58],
                [6, 34, 62],
                [6, 26, 46, 66],
                [6, 26, 48, 70],
                [6, 26, 50, 74],
                [6, 30, 54, 78],
                [6, 30, 56, 82],
                [6, 30, 58, 86],
                [6, 34, 62, 90],
                [6, 28, 50, 72, 94],
                [6, 26, 50, 74, 98],
                [6, 30, 54, 78, 102],
                [6, 28, 54, 80, 106],
                [6, 32, 58, 84, 110],
                [6, 30, 58, 86, 114],
                [6, 34, 62, 90, 118],
                [6, 26, 50, 74, 98, 122],
                [6, 30, 54, 78, 102, 126],
                [6, 26, 52, 78, 104, 130],
                [6, 30, 56, 82, 108, 134],
                [6, 34, 60, 86, 112, 138],
                [6, 30, 58, 86, 114, 142],
                [6, 34, 62, 90, 118, 146],
                [6, 30, 54, 78, 102, 126, 150],
                [6, 24, 50, 76, 102, 128, 154],
                [6, 28, 54, 80, 106, 132, 158],
                [6, 32, 58, 84, 110, 136, 162],
                [6, 26, 54, 82, 110, 138, 166],
                [6, 30, 58, 86, 114, 142, 170]
            ],
            G15: 1335,
            G18: 7973,
            G15_MASK: 21522,
            getBCHTypeInfo: function (a) {
                for (var b = a << 10; f.getBCHDigit(b) - f.getBCHDigit(f.G15) >= 0;) b ^= f.G15 << f.getBCHDigit(b) - f.getBCHDigit(f.G15);
                return (a << 10 | b) ^ f.G15_MASK;
            },
            getBCHTypeNumber: function (a) {
                for (var b = a << 12; f.getBCHDigit(b) - f.getBCHDigit(f.G18) >= 0;) b ^= f.G18 << f.getBCHDigit(b) - f.getBCHDigit(f.G18);
                return a << 12 | b;
            },
            getBCHDigit: function (a) {
                for (var b = 0; 0 != a;) b++, a >>>= 1;
                return b;
            },
            getPatternPosition: function (a) {
                return f.PATTERN_POSITION_TABLE[a - 1];
            },
            getMask: function (a, b, c) {
                switch (a) {
                    case e.PATTERN000:
                        return 0 == (b + c) % 2;
                    case e.PATTERN001:
                        return 0 == b % 2;
                    case e.PATTERN010:
                        return 0 == c % 3;
                    case e.PATTERN011:
                        return 0 == (b + c) % 3;
                    case e.PATTERN100:
                        return 0 == (Math.floor(b / 2) + Math.floor(c / 3)) % 2;
                    case e.PATTERN101:
                        return 0 == b * c % 2 + b * c % 3;
                    case e.PATTERN110:
                        return 0 == (b * c % 2 + b * c % 3) % 2;
                    case e.PATTERN111:
                        return 0 == (b * c % 3 + (b + c) % 2) % 2;
                    default:
                        throw new Error("bad maskPattern:" + a);
                }
            },
            getErrorCorrectPolynomial: function (a) {
                for (var b = new i([1], 0), c = 0; a > c; c++) b = b.multiply(new i([1, g.gexp(c)], 0));
                return b;
            },
            getLengthInBits: function (a, b) {
                if (b >= 1 && 10 > b) switch (a) {
                    case c.MODE_NUMBER:
                        return 10;
                    case c.MODE_ALPHA_NUM:
                        return 9;
                    case c.MODE_8BIT_BYTE:
                        return 8;
                    case c.MODE_KANJI:
                        return 8;
                    default:
                        var d5 = "m";
                        d5 += "od";
                        d5 += "e";
                        d5 += ":";
                        throw new Error(d5 + a);
                } else if (27 > b) switch (a) {
                    case c.MODE_NUMBER:
                        return 12;
                    case c.MODE_ALPHA_NUM:
                        return 11;
                    case c.MODE_8BIT_BYTE:
                        return 16;
                    case c.MODE_KANJI:
                        return 10;
                    default:
                        var x5 = "mo";
                        x5 += "d";
                        x5 += "e";
                        x5 += ":";
                        throw new Error(x5 + a);
                } else {
                    var B5 = "ty";
                    B5 += "pe";
                    B5 += ":";
                    if (!(41 > b)) throw new Error(B5 + b);
                    switch (a) {
                        case c.MODE_NUMBER:
                            return 14;
                        case c.MODE_ALPHA_NUM:
                            return 13;
                        case c.MODE_8BIT_BYTE:
                            return 16;
                        case c.MODE_KANJI:
                            return 12;
                        default:
                            throw new Error("mode:" + a);
                    }
                }
            },
            getLostPoint: function (a) {
                for (var b = a.getModuleCount(), c = 0, d = 0; b > d; d++)
                    for (var e = 0; b > e; e++) {
                        for (var f = 0, g = a.isDark(d, e), h = -1; 1 >= h; h++)
                            if (!(0 > d + h || d + h >= b))
                                for (var i = -1; 1 >= i; i++) 0 > e + i || e + i >= b || (0 != h || 0 != i) && g == a.isDark(d + h, e + i) && f++;
                        f > 5 && (c += 3 + f - 5);
                    }
                for (var d = 0; b - 1 > d; d++)
                    for (var e = 0; b - 1 > e; e++) {
                        var j = 0;
                        a.isDark(d, e) && j++, a.isDark(d + 1, e) && j++, a.isDark(d, e + 1) && j++, a.isDark(d + 1, e + 1) && j++, (0 == j || 4 == j) && (c += 3);
                    }
                for (var d = 0; b > d; d++)
                    for (var e = 0; b - 6 > e; e++) a.isDark(d, e) && !a.isDark(d, e + 1) && a.isDark(d, e + 2) && a.isDark(d, e + 3) && a.isDark(d, e + 4) && !a.isDark(d, e + 5) && a.isDark(d, e + 6) && (c += 40);
                for (var e = 0; b > e; e++)
                    for (var d = 0; b - 6 > d; d++) a.isDark(d, e) && !a.isDark(d + 1, e) && a.isDark(d + 2, e) && a.isDark(d + 3, e) && a.isDark(d + 4, e) && !a.isDark(d + 5, e) && a.isDark(d + 6, e) && (c += 40);
                for (var k = 0, e = 0; b > e; e++)
                    for (var d = 0; b > d; d++) a.isDark(d, e) && k++;
                var l = Math.abs(100 * k / b / b - 50) / 5;
                return c += 10 * l;
            }
        }, g = {
            glog: function (a) {
                if (1 > a) throw new Error("glog(" + a + ")");
                return g.LOG_TABLE[a];
            },
            gexp: function (a) {
                for (; 0 > a;) a += 255;
                for (; a >= 256;) a -= 255;
                return g.EXP_TABLE[a];
            },
            EXP_TABLE: new Array(256),
            LOG_TABLE: new Array(256)
        }, h = 0; 8 > h; h++) g.EXP_TABLE[h] = 1 << h;
    for (var h = 8; 256 > h; h++) g.EXP_TABLE[h] = g.EXP_TABLE[h - 4] ^ g.EXP_TABLE[h - 5] ^ g.EXP_TABLE[h - 6] ^ g.EXP_TABLE[h - 8];
    for (var h = 0; 255 > h; h++) g.LOG_TABLE[g.EXP_TABLE[h]] = h;
    i.prototype = {
        get: function (a) {
            return this.num[a];
        },
        getLength: function () {
            return this.num.length;
        },
        multiply: function (a) {
            for (var b = new Array(this.getLength() + a.getLength() - 1), c = 0; c < this.getLength(); c++)
                for (var d = 0; d < a.getLength(); d++) b[c + d] ^= g.gexp(g.glog(this.get(c)) + g.glog(a.get(d)));
            return new i(b, 0);
        },
        mod: function (a) {
            if (this.getLength() - a.getLength() < 0) return this;
            for (var b = g.glog(this.get(0)) - g.glog(a.get(0)), c = new Array(this.getLength()), d = 0; d < this.getLength(); d++) c[d] = this.get(d);
            for (var d = 0; d < a.getLength(); d++) c[d] ^= g.gexp(g.glog(a.get(d)) + b);
            return new i(c, 0).mod(a);
        }
    }, j.RS_BLOCK_TABLE = [
        [1, 26, 19],
        [1, 26, 16],
        [1, 26, 13],
        [1, 26, 9],
        [1, 44, 34],
        [1, 44, 28],
        [1, 44, 22],
        [1, 44, 16],
        [1, 70, 55],
        [1, 70, 44],
        [2, 35, 17],
        [2, 35, 13],
        [1, 100, 80],
        [2, 50, 32],
        [2, 50, 24],
        [4, 25, 9],
        [1, 134, 108],
        [2, 67, 43],
        [2, 33, 15, 2, 34, 16],
        [2, 33, 11, 2, 34, 12],
        [2, 86, 68],
        [4, 43, 27],
        [4, 43, 19],
        [4, 43, 15],
        [2, 98, 78],
        [4, 49, 31],
        [2, 32, 14, 4, 33, 15],
        [4, 39, 13, 1, 40, 14],
        [2, 121, 97],
        [2, 60, 38, 2, 61, 39],
        [4, 40, 18, 2, 41, 19],
        [4, 40, 14, 2, 41, 15],
        [2, 146, 116],
        [3, 58, 36, 2, 59, 37],
        [4, 36, 16, 4, 37, 17],
        [4, 36, 12, 4, 37, 13],
        [2, 86, 68, 2, 87, 69],
        [4, 69, 43, 1, 70, 44],
        [6, 43, 19, 2, 44, 20],
        [6, 43, 15, 2, 44, 16],
        [4, 101, 81],
        [1, 80, 50, 4, 81, 51],
        [4, 50, 22, 4, 51, 23],
        [3, 36, 12, 8, 37, 13],
        [2, 116, 92, 2, 117, 93],
        [6, 58, 36, 2, 59, 37],
        [4, 46, 20, 6, 47, 21],
        [7, 42, 14, 4, 43, 15],
        [4, 133, 107],
        [8, 59, 37, 1, 60, 38],
        [8, 44, 20, 4, 45, 21],
        [12, 33, 11, 4, 34, 12],
        [3, 145, 115, 1, 146, 116],
        [4, 64, 40, 5, 65, 41],
        [11, 36, 16, 5, 37, 17],
        [11, 36, 12, 5, 37, 13],
        [5, 109, 87, 1, 110, 88],
        [5, 65, 41, 5, 66, 42],
        [5, 54, 24, 7, 55, 25],
        [11, 36, 12],
        [5, 122, 98, 1, 123, 99],
        [7, 73, 45, 3, 74, 46],
        [15, 43, 19, 2, 44, 20],
        [3, 45, 15, 13, 46, 16],
        [1, 135, 107, 5, 136, 108],
        [10, 74, 46, 1, 75, 47],
        [1, 50, 22, 15, 51, 23],
        [2, 42, 14, 17, 43, 15],
        [5, 150, 120, 1, 151, 121],
        [9, 69, 43, 4, 70, 44],
        [17, 50, 22, 1, 51, 23],
        [2, 42, 14, 19, 43, 15],
        [3, 141, 113, 4, 142, 114],
        [3, 70, 44, 11, 71, 45],
        [17, 47, 21, 4, 48, 22],
        [9, 39, 13, 16, 40, 14],
        [3, 135, 107, 5, 136, 108],
        [3, 67, 41, 13, 68, 42],
        [15, 54, 24, 5, 55, 25],
        [15, 43, 15, 10, 44, 16],
        [4, 144, 116, 4, 145, 117],
        [17, 68, 42],
        [17, 50, 22, 6, 51, 23],
        [19, 46, 16, 6, 47, 17],
        [2, 139, 111, 7, 140, 112],
        [17, 74, 46],
        [7, 54, 24, 16, 55, 25],
        [34, 37, 13],
        [4, 151, 121, 5, 152, 122],
        [4, 75, 47, 14, 76, 48],
        [11, 54, 24, 14, 55, 25],
        [16, 45, 15, 14, 46, 16],
        [6, 147, 117, 4, 148, 118],
        [6, 73, 45, 14, 74, 46],
        [11, 54, 24, 16, 55, 25],
        [30, 46, 16, 2, 47, 17],
        [8, 132, 106, 4, 133, 107],
        [8, 75, 47, 13, 76, 48],
        [7, 54, 24, 22, 55, 25],
        [22, 45, 15, 13, 46, 16],
        [10, 142, 114, 2, 143, 115],
        [19, 74, 46, 4, 75, 47],
        [28, 50, 22, 6, 51, 23],
        [33, 46, 16, 4, 47, 17],
        [8, 152, 122, 4, 153, 123],
        [22, 73, 45, 3, 74, 46],
        [8, 53, 23, 26, 54, 24],
        [12, 45, 15, 28, 46, 16],
        [3, 147, 117, 10, 148, 118],
        [3, 73, 45, 23, 74, 46],
        [4, 54, 24, 31, 55, 25],
        [11, 45, 15, 31, 46, 16],
        [7, 146, 116, 7, 147, 117],
        [21, 73, 45, 7, 74, 46],
        [1, 53, 23, 37, 54, 24],
        [19, 45, 15, 26, 46, 16],
        [5, 145, 115, 10, 146, 116],
        [19, 75, 47, 10, 76, 48],
        [15, 54, 24, 25, 55, 25],
        [23, 45, 15, 25, 46, 16],
        [13, 145, 115, 3, 146, 116],
        [2, 74, 46, 29, 75, 47],
        [42, 54, 24, 1, 55, 25],
        [23, 45, 15, 28, 46, 16],
        [17, 145, 115],
        [10, 74, 46, 23, 75, 47],
        [10, 54, 24, 35, 55, 25],
        [19, 45, 15, 35, 46, 16],
        [17, 145, 115, 1, 146, 116],
        [14, 74, 46, 21, 75, 47],
        [29, 54, 24, 19, 55, 25],
        [11, 45, 15, 46, 46, 16],
        [13, 145, 115, 6, 146, 116],
        [14, 74, 46, 23, 75, 47],
        [44, 54, 24, 7, 55, 25],
        [59, 46, 16, 1, 47, 17],
        [12, 151, 121, 7, 152, 122],
        [12, 75, 47, 26, 76, 48],
        [39, 54, 24, 14, 55, 25],
        [22, 45, 15, 41, 46, 16],
        [6, 151, 121, 14, 152, 122],
        [6, 75, 47, 34, 76, 48],
        [46, 54, 24, 10, 55, 25],
        [2, 45, 15, 64, 46, 16],
        [17, 152, 122, 4, 153, 123],
        [29, 74, 46, 14, 75, 47],
        [49, 54, 24, 10, 55, 25],
        [24, 45, 15, 46, 46, 16],
        [4, 152, 122, 18, 153, 123],
        [13, 74, 46, 32, 75, 47],
        [48, 54, 24, 14, 55, 25],
        [42, 45, 15, 32, 46, 16],
        [20, 147, 117, 4, 148, 118],
        [40, 75, 47, 7, 76, 48],
        [43, 54, 24, 22, 55, 25],
        [10, 45, 15, 67, 46, 16],
        [19, 148, 118, 6, 149, 119],
        [18, 75, 47, 31, 76, 48],
        [34, 54, 24, 34, 55, 25],
        [20, 45, 15, 61, 46, 16]
    ], j.getRSBlocks = function (a, b) {
        var c = j.getRsBlockTable(a, b);
        if (void 0 == c) throw new Error("bad rs block @ typeNumber:" + a + "/errorCorrectLevel:" + b);
        for (var d = c.length / 3, e = [], f = 0; d > f; f++)
            for (var g = c[3 * f + 0], h = c[3 * f + 1], i = c[3 * f + 2], k = 0; g > k; k++) e.push(new j(h, i));
        return e;
    }, j.getRsBlockTable = function (a, b) {
        switch (b) {
            case d.L:
                return j.RS_BLOCK_TABLE[4 * (a - 1) + 0];
            case d.M:
                return j.RS_BLOCK_TABLE[4 * (a - 1) + 1];
            case d.Q:
                return j.RS_BLOCK_TABLE[4 * (a - 1) + 2];
            case d.H:
                return j.RS_BLOCK_TABLE[4 * (a - 1) + 3];
            default:
                return void 0;
        }
    }, k.prototype = {
        get: function (a) {
            var b = Math.floor(a / 8);
            return 1 == (1 & this.buffer[b] >>> 7 - a % 8);
        },
        put: function (a, b) {
            for (var c = 0; b > c; c++) this.putBit(1 == (1 & a >>> b - c - 1));
        },
        getLengthInBits: function () {
            return this.length;
        },
        putBit: function (a) {
            var b = Math.floor(this.length / 8);
            this.buffer.length <= b && this.buffer.push(0), a && (this.buffer[b] |= 128 >>> this.length % 8), this.length++;
        }
    };
    var l = [
            [17, 14, 11, 7],
            [32, 26, 20, 14],
            [53, 42, 32, 24],
            [78, 62, 46, 34],
            [106, 84, 60, 44],
            [134, 106, 74, 58],
            [154, 122, 86, 64],
            [192, 152, 108, 84],
            [230, 180, 130, 98],
            [271, 213, 151, 119],
            [321, 251, 177, 137],
            [367, 287, 203, 155],
            [425, 331, 241, 177],
            [458, 362, 258, 194],
            [520, 412, 292, 220],
            [586, 450, 322, 250],
            [644, 504, 364, 280],
            [718, 560, 394, 310],
            [792, 624, 442, 338],
            [858, 666, 482, 382],
            [929, 711, 509, 403],
            [1003, 779, 565, 439],
            [1091, 857, 611, 461],
            [1171, 911, 661, 511],
            [1273, 997, 715, 535],
            [1367, 1059, 751, 593],
            [1465, 1125, 805, 625],
            [1528, 1190, 868, 658],
            [1628, 1264, 908, 698],
            [1732, 1370, 982, 742],
            [1840, 1452, 1030, 790],
            [1952, 1538, 1112, 842],
            [2068, 1628, 1168, 898],
            [2188, 1722, 1228, 958],
            [2303, 1809, 1283, 983],
            [2431, 1911, 1351, 1051],
            [2563, 1989, 1423, 1093],
            [2699, 2099, 1499, 1139],
            [2809, 2213, 1579, 1219],
            [2953, 2331, 1663, 1273]
        ],
        o = function () {
            var a = function (a, b) {
                this._el = a, this._htOption = b;
            };
            return a.prototype.draw = function (a) {
                var u5 = "r";
                u5 += "e";
                u5 += "c";
                u5 += "t";
                var A5 = "xmln";
                A5 += "s:xlink";
                var e5 = "1";
                e5 += "0";
                e5 += "0";
                e5 += "%";
                var s5 = "s";
                s5 += "v";
                s5 += "g";

                function g(a, b) {
                    var w5 = "http://www.w3.o";
                    w5 += "rg/2000";
                    w5 += "/s";
                    w5 += "vg";
                    var c = document.createElementNS(w5, a);
                    for (var d in b) b.hasOwnProperty(d) && c.setAttribute(d, b[d]);
                    return c;
                }
                var b = this._htOption,
                    c = this._el,
                    d = a.getModuleCount();
                Math.floor(b.width / d), Math.floor(b.height / d), this.clear();
                var h = g(s5, {
                    viewBox: "0 0 " + String(d) + " " + String(d),
                    width: e5,
                    height: "100%",
                    fill: b.colorLight
                });
                h.setAttributeNS("http://www.w3.org/2000/xmlns/", A5, "http://www.w3.org/1999/xlink"), c.appendChild(h), h.appendChild(g(u5, {
                    fill: b.colorDark,
                    width: "1",
                    height: "1",
                    id: "template"
                }));
                for (var i = 0; d > i; i++)
                    for (var j = 0; d > j; j++)
                        if (a.isDark(i, j)) {
                            var N5 = "#tem";
                            N5 += "p";
                            N5 += "la";
                            N5 += "te";
                            var k = g("use", {
                                x: String(i),
                                y: String(j)
                            });
                            k.setAttributeNS("http://www.w3.org/1999/xlink", "href", N5), h.appendChild(k);
                        }
            }, a.prototype.clear = function () {
                for (; this._el.hasChildNodes();) this._el.removeChild(this._el.lastChild);
            }, a;
        }(),
        p = U5 === document.documentElement.tagName.toLowerCase(),
        q = p ? o : m() ? function () {
            function a() {
                var k5 = "no";
                k5 += "n";
                k5 += "e";
                var h5 = "image/pn";
                h5 += "g";
                this._elImage.src = this._elCanvas.toDataURL(h5), this._elImage.style.display = "block", this._elCanvas.style.display = k5;
            }

            function d(a, b) {
                var c = this;
                if (c._fFail = b, c._fSuccess = a, null === c._bSupportDataURI) {
                    var q5 = "data:i";
                    q5 += "mage/gif";
                    q5 += ";base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAX";
                    q5 += "DIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";
                    var R5 = "i";
                    R5 += "m";
                    R5 += "g";
                    var d = document.createElement(R5),
                        e = function () {
                            c._bSupportDataURI = !1, c._fFail && _fFail.call(c);
                        },
                        f = function () {
                            c._bSupportDataURI = !0, c._fSuccess && c._fSuccess.call(c);
                        };
                    return d.onabort = e, d.onerror = e, d.onload = f, d.src = q5, void 0;
                }
                c._bSupportDataURI === !0 && c._fSuccess ? c._fSuccess.call(c) : c._bSupportDataURI === !1 && c._fFail && c._fFail.call(c);
            }
            if (this._android && this._android <= 2.1) {
                var b = 1 / window.devicePixelRatio,
                    c = CanvasRenderingContext2D.prototype.drawImage;
                CanvasRenderingContext2D.prototype.drawImage = function (a, d, e, f, g, h, i, j) {
                    if ("nodeName" in a && /img/i.test(a.nodeName))
                        for (var l = arguments.length - 1; l >= 1; l--) arguments[l] = arguments[l] * b;
                    else "undefined" == typeof j && (arguments[1] *= b, arguments[2] *= b, arguments[3] *= b, arguments[4] *= b);
                    c.apply(this, arguments);
                };
            }
            var e = function (a, b) {
                var V5 = "n";
                V5 += "o";
                V5 += "ne";
                var n5 = "i";
                n5 += "m";
                n5 += "g";
                this._bIsPainted = !1, this._android = n(), this._htOption = b, this._elCanvas = document.createElement("canvas"), this._elCanvas.width = b.width, this._elCanvas.height = b.height, a.appendChild(this._elCanvas), this._el = a, this._oContext = this._elCanvas.getContext("2d"), this._bIsPainted = !1, this._elImage = document.createElement(n5), this._elImage.style.display = V5, this._el.appendChild(this._elImage), this._bSupportDataURI = null;
            };
            return e.prototype.draw = function (a) {
                var b = this._elImage,
                    c = this._oContext,
                    d = this._htOption,
                    e = a.getModuleCount(),
                    f = d.width / e,
                    g = d.height / e,
                    h = Math.round(f),
                    i = Math.round(g);
                b.style.display = "none", this.clear();
                for (var j = 0; e > j; j++)
                    for (var k = 0; e > k; k++) {
                        var l = a.isDark(j, k),
                            m = k * f,
                            n = j * g;
                        c.strokeStyle = l ? d.colorDark : d.colorLight, c.lineWidth = 1, c.fillStyle = l ? d.colorDark : d.colorLight, c.fillRect(m, n, f, g), c.strokeRect(Math.floor(m) + .5, Math.floor(n) + .5, h, i), c.strokeRect(Math.ceil(m) - .5, Math.ceil(n) - .5, h, i);
                    }
                this._bIsPainted = !0;
            }, e.prototype.makeImage = function () {
                this._bIsPainted && d.call(this, a);
            }, e.prototype.isPainted = function () {
                return this._bIsPainted;
            }, e.prototype.clear = function () {
                this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height), this._bIsPainted = !1;
            }, e.prototype.round = function (a) {
                return a ? Math.floor(1e3 * a) / 1e3 : a;
            }, e;
        }() : function () {
            var a = function (a, b) {
                this._el = a, this._htOption = b;
            };
            return a.prototype.draw = function (a) {
                var K5 = "p";
                K5 += "x";
                K5 += " ";
                var a5 = "</ta";
                a5 += "ble>";
                for (var b = this._htOption, c = this._el, d = a.getModuleCount(), e = Math.floor(b.width / d), f = Math.floor(b.height / d), g = ['<table style="border:0;border-collapse:collapse;">'], h = 0; d > h; h++) {
                    var E5 = ";\">";
                    E5 += "</t";
                    E5 += "d";
                    E5 += ">";
                    var y5 = "px;";
                    y5 += "background-";
                    y5 += "color:";
                    var M5 = "px;height";
                    M5 += ":";
                    var Z5 = "<td style=\"border:0;border-collapse:collapse;p";
                    Z5 += "adding:0;margin:0;width:";
                    g.push("<tr>");
                    for (var i = 0; d > i; i++) g.push(Z5 + e + M5 + f + y5 + (a.isDark(h, i) ? b.colorDark : b.colorLight) + E5);
                    g.push("</tr>");
                }
                g.push(a5), c.innerHTML = g.join("");
                var j = c.childNodes[0],
                    k = (b.width - j.offsetWidth) / 2,
                    l = (b.height - j.offsetHeight) / 2;
                k > 0 && l > 0 && (j.style.margin = l + K5 + k + "px");
            }, a.prototype.clear = function () {
                this._el.innerHTML = "";
            }, a;
        }();
    QRCode = function (a, b) {
        var c5 = "#";
        c5 += "f";
        c5 += "ff";
        c5 += "fff";
        var H5 = "#0000";
        H5 += "0";
        H5 += "0";
        if (this._htOption = {
                width: 256,
                height: 256,
                typeNumber: 4,
                colorDark: H5,
                colorLight: c5,
                correctLevel: d.H
            }, "string" == typeof b && (b = {
                text: b
            }), b)
            for (var c in b) this._htOption[c] = b[c];
        "string" == typeof a && (a = document.getElementById(a)), this._android = n(), this._el = a, this._oQRCode = null, this._oDrawing = new q(this._el, this._htOption), this._htOption.text && this.makeCode(this._htOption.text);
    }, QRCode.prototype.makeCode = function (a) {
        this._oQRCode = new b(r(a, this._htOption.correctLevel), this._htOption.correctLevel), this._oQRCode.addData(a), this._oQRCode.make(), this._el.title = a, this._oDrawing.draw(this._oQRCode), this.makeImage();
    }, QRCode.prototype.makeImage = function () {
        var b5 = "funct";
        b5 += "io";
        b5 += "n";
        b5 == typeof this._oDrawing.makeImage && (!this._android || this._android >= 3) && this._oDrawing.makeImage();
    }, QRCode.prototype.clear = function () {
        this._oDrawing.clear();
    }, QRCode.CorrectLevel = d;
}();
if ($.fn.jquery != f766) {
    var P5 = "un";
    P5 += "defined";
    ! function (t, e) {
        var r5 = "jque";
        r5 += "r";
        r5 += "y";
        "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", [r5], function (i) {
            return e(t, i);
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery);
    }(window, function (t, e) {
        var v5 = "u";
        v5 += "ndefi";
        v5 += "ne";
        v5 += "d";
        "use strict";

        function i(i, r, a) {
            function h(t, e, n) {
                var D5 = "$";
                D5 += "().";
                var o, r = D5 + i + '("' + e + '")';
                return t.each(function (t, h) {
                    var C5 = " i";
                    C5 += "s not a valid method";
                    var T5 = " not initialized. Ca";
                    T5 += "nno";
                    T5 += "t call methods, i.e";
                    T5 += ". ";
                    var u = a.data(h, i);
                    if (!u) return void s(i + T5 + r);
                    var d = u[e];
                    if (!d || "_" == e.charAt(0)) return void s(r + C5);
                    var l = d.apply(u, n);
                    o = void 0 === o ? l : o;
                }), void 0 !== o ? o : t;
            }

            function u(t, e) {
                t.each(function (t, n) {
                    var o = a.data(n, i);
                    o ? (o.option(e), o._init()) : (o = new r(n, e), a.data(n, i, o));
                });
            }
            a = a || e || t.jQuery, a && (r.prototype.option || (r.prototype.option = function (t) {
                a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t));
            }), a.fn[i] = function (t) {
                if ("string" == typeof t) {
                    var e = o.call(arguments, 1);
                    return h(this, t, e);
                }
                return u(this, t), this;
            }, n(a));
        }

        function n(t) {
            !t || t && t.bridget || (t.bridget = i);
        }
        var o = Array.prototype.slice,
            r = t.console,
            s = v5 == typeof r ? function () {} : function (t) {
                r.error(t);
            };
        return n(e || t.jQuery), i;
    }),
    function (t, e) {
        var j5 = "obj";
        j5 += "ec";
        j5 += "t";
        var g5 = "funct";
        g5 += "ion";
        g5 == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : j5 == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e();
    }(P5 != typeof window ? window : this, function () {
        function t() {}
        var e = t.prototype;
        return e.on = function (t, e) {
            if (t && e) {
                var i = this._events = this._events || {},
                    n = i[t] = i[t] || [];
                return -1 == n.indexOf(e) && n.push(e), this;
            }
        }, e.once = function (t, e) {
            if (t && e) {
                this.on(t, e);
                var i = this._onceEvents = this._onceEvents || {},
                    n = i[t] = i[t] || {};
                return n[e] = !0, this;
            }
        }, e.off = function (t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var n = i.indexOf(e);
                return -1 != n && i.splice(n, 1), this;
            }
        }, e.emitEvent = function (t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var n = 0,
                    o = i[n];
                e = e || [];
                for (var r = this._onceEvents && this._onceEvents[t]; o;) {
                    var s = r && r[o];
                    s && (this.off(t, o), delete r[o]), o.apply(this, e), n += s ? 0 : 1, o = i[n];
                }
                return this;
            }
        }, t;
    }),
    function (t, e) {
        var m5 = "objec";
        m5 += "t";
        "use strict";
        "function" == typeof define && define.amd ? define("get-size/get-size", [], function () {
            return e();
        }) : m5 == typeof module && module.exports ? module.exports = e() : t.getSize = e();
    }(window, function () {
        var z8 = "border";
        z8 += "TopWidth";
        var G8 = "border";
        G8 += "LeftWid";
        G8 += "th";
        var i8 = "margi";
        i8 += "nBottom";
        var p8 = "paddi";
        p8 += "ngTop";
        var S8 = "padd";
        S8 += "i";
        S8 += "ngRight";
        var I8 = "padd";
        I8 += "ingLe";
        I8 += "f";
        I8 += "t";
        var F8 = "undef";
        F8 += "in";
        F8 += "e";
        F8 += "d";
        "use strict";

        function t(t) {
            var e = parseFloat(t),
                i = -1 == t.indexOf("%") && !isNaN(e);
            return i && e;
        }

        function e() {}

        function i() {
            for (var t = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, e = 0; u > e; e++) {
                var i = h[e];
                t[i] = 0;
            }
            return t;
        }

        function n(t) {
            var J5 = "Sty";
            J5 += "le r";
            J5 += "e";
            J5 += "turned ";
            var e = getComputedStyle(t);
            return e || a(J5 + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e;
        }

        function o() {
            if (!d) {
                var f8 = "border-";
                f8 += "box";
                var Q8 = "1px 2p";
                Q8 += "x 3px 4";
                Q8 += "px";
                var Y5 = "1px ";
                Y5 += "2px 3px 4px";
                var O5 = "di";
                O5 += "v";
                d = !0;
                var e = document.createElement(O5);
                e.style.width = "200px", e.style.padding = Y5, e.style.borderStyle = "solid", e.style.borderWidth = Q8, e.style.boxSizing = f8;
                var i = document.body || document.documentElement;
                i.appendChild(e);
                var o = n(e);
                r.isBoxSizeOuter = s = 200 == t(o.width), i.removeChild(e);
            }
        }

        function r(e) {
            if (o(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
                var t8 = "n";
                t8 += "o";
                t8 += "n";
                t8 += "e";
                var r = n(e);
                if (t8 == r.display) return i();
                var a = {};
                a.width = e.offsetWidth, a.height = e.offsetHeight;
                for (var d = a.isBorderBox = "border-box" == r.boxSizing, l = 0; u > l; l++) {
                    var c = h[l],
                        f = r[c],
                        m = parseFloat(f);
                    a[c] = isNaN(m) ? 0 : m;
                }
                var p = a.paddingLeft + a.paddingRight,
                    g = a.paddingTop + a.paddingBottom,
                    y = a.marginLeft + a.marginRight,
                    v = a.marginTop + a.marginBottom,
                    _ = a.borderLeftWidth + a.borderRightWidth,
                    E = a.borderTopWidth + a.borderBottomWidth,
                    z = d && s,
                    b = t(r.width);
                b !== !1 && (a.width = b + (z ? 0 : p + _));
                var x = t(r.height);
                return x !== !1 && (a.height = x + (z ? 0 : g + E)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (g + E), a.outerWidth = a.width + y, a.outerHeight = a.height + v, a;
            }
        }
        var s, a = F8 == typeof console ? e : function (t) {
                console.error(t);
            },
            h = [I8, S8, p8, "paddingBottom", "marginLeft", "marginRight", "marginTop", i8, G8, "borderRightWidth", z8, "borderBottomWidth"],
            u = h.length,
            d = !1;
        return r;
    }),
    function (t, e) {
        var o8 = "ob";
        o8 += "je";
        o8 += "ct";
        var l8 = "f";
        l8 += "un";
        l8 += "ction";
        "use strict";
        l8 == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : o8 == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e();
    }(window, function () {
        "use strict";
        var t = function () {
            var L8 = "m";
            L8 += "s";
            var W8 = "match";
            W8 += "esSe";
            W8 += "lector";
            var X8 = "m";
            X8 += "atches";
            var t = Element.prototype;
            if (t.matches) return X8;
            if (t.matchesSelector) return W8;
            for (var e = ["webkit", "moz", L8, "o"], i = 0; i < e.length; i++) {
                var n = e[i],
                    o = n + "MatchesSelector";
                if (t[o]) return o;
            }
        }();
        return function (e, i) {
            return e[t](i);
        };
    }),
    function (t, e) {
        var x8 = "fizzy-ui-utils/uti";
        x8 += "ls";
        var d8 = "fun";
        d8 += "cti";
        d8 += "on";
        d8 == typeof define && define.amd ? define(x8, ["desandro-matches-selector/matches-selector"], function (i) {
            return e(t, i);
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector);
    }(window, function (t, e) {
        var i = {};
        i.extend = function (t, e) {
            for (var i in e) t[i] = e[i];
            return t;
        }, i.modulo = function (t, e) {
            return (t % e + e) % e;
        }, i.makeArray = function (t) {
            var e = [];
            if (Array.isArray(t)) e = t;
            else if (t && "number" == typeof t.length)
                for (var i = 0; i < t.length; i++) e.push(t[i]);
            else e.push(t);
            return e;
        }, i.removeFrom = function (t, e) {
            var i = t.indexOf(e); - 1 != i && t.splice(i, 1);
        }, i.getParent = function (t, i) {
            for (; t != document.body;)
                if (t = t.parentNode, e(t, i)) return t;
        }, i.getQueryElement = function (t) {
            return "string" == typeof t ? document.querySelector(t) : t;
        }, i.handleEvent = function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t);
        }, i.filterFindElements = function (t, n) {
            t = i.makeArray(t);
            var o = [];
            return t.forEach(function (t) {
                if (t instanceof HTMLElement) {
                    if (!n) return void o.push(t);
                    e(t, n) && o.push(t);
                    for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++) o.push(i[r]);
                }
            }), o;
        }, i.debounceMethod = function (t, e, i) {
            var n = t.prototype[e],
                o = e + "Timeout";
            t.prototype[e] = function () {
                var t = this[o];
                t && clearTimeout(t);
                var e = arguments,
                    r = this;
                this[o] = setTimeout(function () {
                    n.apply(r, e), delete r[o];
                }, i || 100);
            };
        }, i.docReady = function (t) {
            var w8 = "D";
            w8 += "OMContentLoaded";
            var B8 = "c";
            B8 += "omp";
            B8 += "lete";
            var e = document.readyState;
            B8 == e || "interactive" == e ? t() : document.addEventListener(w8, t);
        }, i.toDashed = function (t) {
            return t.replace(/(.)([A-Z])/g, function (t, e, i) {
                return e + "-" + i;
            }).toLowerCase();
        };
        var n = t.console;
        return i.htmlInit = function (e, o) {
            i.docReady(function () {
                var r = i.toDashed(o),
                    s = "data-" + r,
                    a = document.querySelectorAll("[" + s + "]"),
                    h = document.querySelectorAll(".js-" + r),
                    u = i.makeArray(a).concat(i.makeArray(h)),
                    d = s + "-options",
                    l = t.jQuery;
                u.forEach(function (t) {
                    var i, r = t.getAttribute(s) || t.getAttribute(d);
                    try {
                        i = r && JSON.parse(r);
                    } catch (a) {
                        var s8 = "Error parsing";
                        s8 += " ";
                        return void(n && n.error(s8 + s + " on " + t.className + ": " + a));
                    }
                    var h = new e(t, i);
                    l && l.data(t, o, h);
                });
            });
        }, i;
    }),
    function (t, e) {
        var u8 = "o";
        u8 += "bjec";
        u8 += "t";
        var A8 = "get-size/get";
        A8 += "-size";
        var e8 = "ev-emi";
        e8 += "tter/ev-";
        e8 += "emitter";
        "function" == typeof define && define.amd ? define("outlayer/item", [e8, A8], e) : u8 == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize));
    }(window, function (t, e) {
        var O8 = "tr";
        O8 += "ansf";
        O8 += "orm";
        var m8 = "o";
        m8 += "p";
        m8 += "acity,";
        var n8 = "D";
        n8 += "el";
        n8 += "a";
        n8 += "y";
        var q8 = "Pro";
        q8 += "pert";
        q8 += "y";
        var R8 = "t";
        R8 += "ra";
        R8 += "nsi";
        R8 += "tionend";
        var k8 = "we";
        k8 += "bkitTransitionEnd";
        var h8 = "tran";
        h8 += "s";
        h8 += "fo";
        h8 += "rm";
        var U8 = "tra";
        U8 += "ns";
        U8 += "i";
        U8 += "tion";
        var N8 = "s";
        N8 += "tring";
        "use strict";

        function i(t) {
            for (var e in t) return !1;
            return e = null, !0;
        }

        function n(t, e) {
            t && (this.element = t, this.layout = e, this.position = {
                x: 0,
                y: 0
            }, this._create());
        }

        function o(t) {
            return t.replace(/([A-Z])/g, function (t) {
                return "-" + t.toLowerCase();
            });
        }
        var r = document.documentElement.style,
            s = N8 == typeof r.transition ? U8 : "WebkitTransition",
            a = "string" == typeof r.transform ? h8 : "WebkitTransform",
            h = {
                WebkitTransition: k8,
                transition: R8
            } [s],
            u = {
                transform: a,
                transition: s,
                transitionDuration: s + "Duration",
                transitionProperty: s + q8,
                transitionDelay: s + n8
            },
            d = n.prototype = Object.create(t.prototype);
        d.constructor = n, d._create = function () {
            var V8 = "a";
            V8 += "bsolute";
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: V8
            });
        }, d.handleEvent = function (t) {
            var Z8 = "o";
            Z8 += "n";
            var e = Z8 + t.type;
            this[e] && this[e](t);
        }, d.getSize = function () {
            this.size = e(this.element);
        }, d.css = function (t) {
            var e = this.element.style;
            for (var i in t) {
                var n = u[i] || i;
                e[n] = t[i];
            }
        }, d.getPosition = function () {
            var a8 = "t";
            a8 += "o";
            a8 += "p";
            var E8 = "ri";
            E8 += "ght";
            var y8 = "orig";
            y8 += "in";
            y8 += "T";
            y8 += "op";
            var M8 = "origin";
            M8 += "Left";
            var t = getComputedStyle(this.element),
                e = this.layout._getOption(M8),
                i = this.layout._getOption(y8),
                n = t[e ? "left" : E8],
                o = t[i ? a8 : "bottom"],
                r = this.layout.size,
                s = -1 != n.indexOf("%") ? parseFloat(n) / 100 * r.width : parseInt(n, 10),
                a = -1 != o.indexOf("%") ? parseFloat(o) / 100 * r.height : parseInt(o, 10);
            s = isNaN(s) ? 0 : s, a = isNaN(a) ? 0 : a, s -= e ? r.paddingLeft : r.paddingRight, a -= i ? r.paddingTop : r.paddingBottom, this.position.x = s, this.position.y = a;
        }, d.layoutPosition = function () {
            var D8 = "bott";
            D8 += "om";
            var r8 = "r";
            r8 += "i";
            r8 += "g";
            r8 += "ht";
            var b8 = "l";
            b8 += "e";
            b8 += "f";
            b8 += "t";
            var c8 = "padd";
            c8 += "i";
            c8 += "n";
            c8 += "gRight";
            var H8 = "p";
            H8 += "a";
            H8 += "d";
            H8 += "dingLeft";
            var K8 = "or";
            K8 += "i";
            K8 += "ginL";
            K8 += "eft";
            var t = this.layout.size,
                e = {},
                i = this.layout._getOption(K8),
                n = this.layout._getOption("originTop"),
                o = i ? H8 : c8,
                r = i ? b8 : r8,
                s = i ? "right" : "left",
                a = this.position.x + t[o];
            e[r] = this.getXValue(a), e[s] = "";
            var h = n ? "paddingTop" : "paddingBottom",
                u = n ? "top" : D8,
                d = n ? "bottom" : "top",
                l = this.position.y + t[h];
            e[u] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this]);
        }, d.getXValue = function (t) {
            var T8 = "hori";
            T8 += "zont";
            T8 += "al";
            var e = this.layout._getOption(T8);
            return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px";
        }, d.getYValue = function (t) {
            var C8 = "p";
            C8 += "x";
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + C8;
        }, d._transitionTo = function (t, e) {
            this.getPosition();
            var i = this.position.x,
                n = this.position.y,
                o = parseInt(t, 10),
                r = parseInt(e, 10),
                s = o === this.position.x && r === this.position.y;
            if (this.setPosition(t, e), s && !this.isTransitioning) return void this.layoutPosition();
            var a = t - i,
                h = e - n,
                u = {};
            u.transform = this.getTranslate(a, h), this.transition({
                to: u,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            });
        }, d.getTranslate = function (t, e) {
            var P8 = "px";
            P8 += ",";
            P8 += " 0)";
            var j8 = "px";
            j8 += ",";
            j8 += " ";
            var g8 = "or";
            g8 += "iginTop";
            var v8 = "orig";
            v8 += "inL";
            v8 += "eft";
            var i = this.layout._getOption(v8),
                n = this.layout._getOption(g8);
            return t = i ? t : -t, e = n ? e : -e, "translate3d(" + t + j8 + e + P8;
        }, d.goTo = function (t, e) {
            this.setPosition(t, e), this.layoutPosition();
        }, d.moveTo = d._transitionTo, d.setPosition = function (t, e) {
            this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10);
        }, d._nonTransition = function (t) {
            this.css(t.to), t.isCleaning && this._removeStyles(t.to);
            for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this);
        }, d.transition = function (t) {
            if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
            var e = this._transn;
            for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
            for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
            if (t.from) {
                this.css(t.from);
                var n = this.element.offsetHeight;
                n = null;
            }
            this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0;
        };
        var l = m8 + o(a);
        d.enableTransition = function () {
            if (!this.isTransitioning) {
                var J8 = "m";
                J8 += "s";
                var t = this.layout.options.transitionDuration;
                t = "number" == typeof t ? t + J8 : t, this.css({
                    transitionProperty: l,
                    transitionDuration: t,
                    transitionDelay: this.staggerDelay || 0
                }), this.element.addEventListener(h, this, !1);
            }
        }, d.onwebkitTransitionEnd = function (t) {
            this.ontransitionend(t);
        }, d.onotransitionend = function (t) {
            this.ontransitionend(t);
        };
        var c = {
            "-webkit-transform": O8
        };
        d.ontransitionend = function (t) {
            if (t.target === this.element) {
                var e = this._transn,
                    n = c[t.propertyName] || t.propertyName;
                if (delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) {
                    var o = e.onEnd[n];
                    o.call(this), delete e.onEnd[n];
                }
                this.emitEvent("transitionEnd", [this]);
            }
        }, d.disableTransition = function () {
            this.removeTransitionStyles(), this.element.removeEventListener(h, this, !1), this.isTransitioning = !1;
        }, d._removeStyles = function (t) {
            var e = {};
            for (var i in t) e[i] = "";
            this.css(e);
        };
        var f = {
            transitionProperty: "",
            transitionDuration: "",
            transitionDelay: ""
        };
        return d.removeTransitionStyles = function () {
            this.css(f);
        }, d.stagger = function (t) {
            t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms";
        }, d.removeElem = function () {
            var Y8 = "rem";
            Y8 += "ov";
            Y8 += "e";
            this.element.parentNode.removeChild(this.element), this.css({
                display: ""
            }), this.emitEvent(Y8, [this]);
        }, d.remove = function () {
            return s && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
                this.removeElem();
            }), void this.hide()) : void this.removeElem();
        }, d.reveal = function () {
            var Q4 = "visibleS";
            Q4 += "ty";
            Q4 += "le";
            delete this.isHidden, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {},
                i = this.getHideRevealTransitionEndProperty(Q4);
            e[i] = this.onRevealTransitionEnd, this.transition({
                from: t.hiddenStyle,
                to: t.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: e
            });
        }, d.onRevealTransitionEnd = function () {
            var f4 = "r";
            f4 += "ev";
            f4 += "eal";
            this.isHidden || this.emitEvent(f4);
        }, d.getHideRevealTransitionEndProperty = function (t) {
            var e = this.layout.options[t];
            if (e.opacity) return "opacity";
            for (var i in e) return i;
        }, d.hide = function () {
            this.isHidden = !0, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {},
                i = this.getHideRevealTransitionEndProperty("hiddenStyle");
            e[i] = this.onHideTransitionEnd, this.transition({
                from: t.visibleStyle,
                to: t.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: e
            });
        }, d.onHideTransitionEnd = function () {
            var F4 = "h";
            F4 += "i";
            F4 += "d";
            F4 += "e";
            var t4 = "no";
            t4 += "ne";
            this.isHidden && (this.css({
                display: t4
            }), this.emitEvent(F4));
        }, d.destroy = function () {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            });
        }, n;
    }),
    function (t, e) {
        var G4 = "ob";
        G4 += "ject";
        var i4 = ".";
        i4 += "/item";
        var p4 = "g";
        p4 += "et-size/get-";
        p4 += "size";
        var S4 = "ou";
        S4 += "tlayer/outlayer";
        var I4 = "func";
        I4 += "ti";
        I4 += "on";
        "use strict";
        I4 == typeof define && define.amd ? define(S4, ["ev-emitter/ev-emitter", p4, "fizzy-ui-utils/utils", i4], function (i, n, o, r) {
            return e(t, i, n, o, r);
        }) : G4 == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item);
    }(window, function (t, e, i, n, o) {
        var e4 = "o";
        e4 += "n";
        e4 += "res";
        e4 += "ize";
        var W4 = "isResizin";
        W4 += "gCont";
        W4 += "ainer";
        var X4 = "i";
        X4 += "sLa";
        X4 += "youtInstan";
        X4 += "t";
        var o4 = "relativ";
        o4 += "e";
        var l4 = "ou";
        l4 += "t";
        l4 += "la";
        l4 += "yer";
        "use strict";

        function r(t, e) {
            var z4 = "initL";
            z4 += "ayout";
            var i = n.getQueryElement(t);
            if (!i) return void(h && h.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
            this.element = i, u && (this.$element = u(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e);
            var o = ++l;
            this.element.outlayerGUID = o, c[o] = this, this._create();
            var r = this._getOption(z4);
            r && this.layout();
        }

        function s(t) {
            function e() {
                t.apply(this, arguments);
            }
            return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e;
        }

        function a(t) {
            if ("number" == typeof t) return t;
            var e = t.match(/(^\d*\.?\d*)(\w*)/),
                i = e && e[1],
                n = e && e[2];
            if (!i.length) return 0;
            i = parseFloat(i);
            var o = m[n] || 1;
            return i * o;
        }
        var h = t.console,
            u = t.jQuery,
            d = function () {},
            l = 0,
            c = {};
        r.namespace = l4, r.Item = o, r.defaults = {
            containerStyle: {
                position: o4
            },
            initLayout: !0,
            originLeft: !0,
            originTop: !0,
            resize: !0,
            resizeContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        };
        var f = r.prototype;
        n.extend(f, e.prototype), f.option = function (t) {
            n.extend(this.options, t);
        }, f._getOption = function (t) {
            var e = this.constructor.compatOptions[t];
            return e && void 0 !== this.options[e] ? this.options[e] : this.options[t];
        }, r.compatOptions = {
            initLayout: "isInitLayout",
            horizontal: "isHorizontal",
            layoutInstant: X4,
            originLeft: "isOriginLeft",
            originTop: "isOriginTop",
            resize: "isResizeBound",
            resizeContainer: W4
        }, f._create = function () {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle);
            var t = this._getOption("resize");
            t && this.bindResize();
        }, f.reloadItems = function () {
            this.items = this._itemize(this.element.children);
        }, f._itemize = function (t) {
            for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
                var r = e[o],
                    s = new i(r, this);
                n.push(s);
            }
            return n;
        }, f._filterFindItemElements = function (t) {
            return n.filterFindElements(t, this.options.itemSelector);
        }, f.getItemElements = function () {
            return this.items.map(function (t) {
                return t.element;
            });
        }, f.layout = function () {
            var L4 = "layo";
            L4 += "utInstant";
            this._resetLayout(), this._manageStamps();
            var t = this._getOption(L4),
                e = void 0 !== t ? t : !this._isLayoutInited;
            this.layoutItems(this.items, e), this._isLayoutInited = !0;
        }, f._init = f.layout, f._resetLayout = function () {
            this.getSize();
        }, f.getSize = function () {
            this.size = i(this.element);
        }, f._getMeasurement = function (t, e) {
            var n, o = this.options[t];
            o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o), this[t] = n ? i(n)[e] : o) : this[t] = 0;
        }, f.layoutItems = function (t, e) {
            t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout();
        }, f._getItemsForLayout = function (t) {
            return t.filter(function (t) {
                return !t.isIgnored;
            });
        }, f._layoutItems = function (t, e) {
            if (this._emitCompleteOnItems("layout", t), t && t.length) {
                var i = [];
                t.forEach(function (t) {
                    var n = this._getItemLayoutPosition(t);
                    n.item = t, n.isInstant = e || t.isLayoutInstant, i.push(n);
                }, this), this._processLayoutQueue(i);
            }
        }, f._getItemLayoutPosition = function () {
            return {
                x: 0,
                y: 0
            };
        }, f._processLayoutQueue = function (t) {
            this.updateStagger(), t.forEach(function (t, e) {
                this._positionItem(t.item, t.x, t.y, t.isInstant, e);
            }, this);
        }, f.updateStagger = function () {
            var t = this.options.stagger;
            return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = a(t), this.stagger);
        }, f._positionItem = function (t, e, i, n, o) {
            n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i));
        }, f._postLayout = function () {
            this.resizeContainer();
        }, f.resizeContainer = function () {
            var t = this._getOption("resizeContainer");
            if (t) {
                var e = this._getContainerSize();
                e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1));
            }
        }, f._getContainerSize = d, f._setContainerMeasure = function (t, e) {
            if (void 0 !== t) {
                var x4 = "p";
                x4 += "x";
                var d4 = "w";
                d4 += "i";
                d4 += "dth";
                var i = this.size;
                i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? d4 : "height"] = t + x4;
            }
        }, f._emitCompleteOnItems = function (t, e) {
            function i() {
                var B4 = "C";
                B4 += "omplete";
                o.dispatchEvent(t + B4, null, [e]);
            }

            function n() {
                s++, s == r && i();
            }
            var o = this,
                r = e.length;
            if (!e || !r) return void i();
            var s = 0;
            e.forEach(function (e) {
                e.once(t, n);
            });
        }, f.dispatchEvent = function (t, e, i) {
            var n = e ? [e].concat(i) : i;
            if (this.emitEvent(t, n), u)
                if (this.$element = this.$element || u(this.element), e) {
                    var o = u.Event(e);
                    o.type = t, this.$element.trigger(o, i);
                } else this.$element.trigger(t, i);
        }, f.ignore = function (t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0);
        }, f.unignore = function (t) {
            var e = this.getItem(t);
            e && delete e.isIgnored;
        }, f.stamp = function (t) {
            t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this));
        }, f.unstamp = function (t) {
            t = this._find(t), t && t.forEach(function (t) {
                n.removeFrom(this.stamps, t), this.unignore(t);
            }, this);
        }, f._find = function (t) {
            return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t)) : void 0;
        }, f._manageStamps = function () {
            this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this));
        }, f._getBoundingRect = function () {
            var t = this.element.getBoundingClientRect(),
                e = this.size;
            this._boundingRect = {
                left: t.left + e.paddingLeft + e.borderLeftWidth,
                top: t.top + e.paddingTop + e.borderTopWidth,
                right: t.right - (e.paddingRight + e.borderRightWidth),
                bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
            };
        }, f._manageStamp = d, f._getElementOffset = function (t) {
            var e = t.getBoundingClientRect(),
                n = this._boundingRect,
                o = i(t),
                r = {
                    left: e.left - n.left - o.marginLeft,
                    top: e.top - n.top - o.marginTop,
                    right: n.right - e.right - o.marginRight,
                    bottom: n.bottom - e.bottom - o.marginBottom
                };
            return r;
        }, f.handleEvent = n.handleEvent, f.bindResize = function () {
            var w4 = "re";
            w4 += "s";
            w4 += "i";
            w4 += "ze";
            t.addEventListener(w4, this), this.isResizeBound = !0;
        }, f.unbindResize = function () {
            var s4 = "r";
            s4 += "e";
            s4 += "size";
            t.removeEventListener(s4, this), this.isResizeBound = !1;
        }, f.onresize = function () {
            this.resize();
        }, n.debounceMethod(r, e4, 100), f.resize = function () {
            this.isResizeBound && this.needsResizeLayout() && this.layout();
        }, f.needsResizeLayout = function () {
            var t = i(this.element),
                e = this.size && t;
            return e && t.innerWidth !== this.size.innerWidth;
        }, f.addItems = function (t) {
            var e = this._itemize(t);
            return e.length && (this.items = this.items.concat(e)), e;
        }, f.appended = function (t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0), this.reveal(e));
        }, f.prepended = function (t) {
            var e = this._itemize(t);
            if (e.length) {
                var i = this.items.slice(0);
                this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i);
            }
        }, f.reveal = function (t) {
            var A4 = "r";
            A4 += "eveal";
            if (this._emitCompleteOnItems(A4, t), t && t.length) {
                var e = this.updateStagger();
                t.forEach(function (t, i) {
                    t.stagger(i * e), t.reveal();
                });
            }
        }, f.hide = function (t) {
            if (this._emitCompleteOnItems("hide", t), t && t.length) {
                var e = this.updateStagger();
                t.forEach(function (t, i) {
                    t.stagger(i * e), t.hide();
                });
            }
        }, f.revealItemElements = function (t) {
            var e = this.getItems(t);
            this.reveal(e);
        }, f.hideItemElements = function (t) {
            var e = this.getItems(t);
            this.hide(e);
        }, f.getItem = function (t) {
            for (var e = 0; e < this.items.length; e++) {
                var i = this.items[e];
                if (i.element == t) return i;
            }
        }, f.getItems = function (t) {
            t = n.makeArray(t);
            var e = [];
            return t.forEach(function (t) {
                var i = this.getItem(t);
                i && e.push(i);
            }, this), e;
        }, f.remove = function (t) {
            var u4 = "re";
            u4 += "move";
            var e = this.getItems(t);
            this._emitCompleteOnItems(u4, e), e && e.length && e.forEach(function (t) {
                t.remove(), n.removeFrom(this.items, t);
            }, this);
        }, f.destroy = function () {
            var t = this.element.style;
            t.height = "", t.position = "", t.width = "", this.items.forEach(function (t) {
                t.destroy();
            }), this.unbindResize();
            var e = this.element.outlayerGUID;
            delete c[e], delete this.element.outlayerGUID, u && u.removeData(this.element, this.constructor.namespace);
        }, r.data = function (t) {
            t = n.getQueryElement(t);
            var e = t && t.outlayerGUID;
            return e && c[e];
        }, r.create = function (t, e) {
            var i = s(r);
            return i.defaults = n.extend({}, r.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, r.compatOptions), i.namespace = t, i.data = r.data, i.Item = s(o), n.htmlInit(i, t), u && u.bridget && u.bridget(t, i), i;
        };
        var m = {
            ms: 1,
            s: 1e3
        };
        return r.Item = o, r;
    }),
    function (t, e) {
        var k4 = "o";
        k4 += "bje";
        k4 += "ct";
        var h4 = "g";
        h4 += "et-size";
        h4 += "/";
        h4 += "get-size";
        var U4 = "outlaye";
        U4 += "r/outlayer";
        var N4 = "func";
        N4 += "tion";
        N4 == typeof define && define.amd ? define([U4, h4], e) : k4 == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize);
    }(window, function (t, e) {
        var R4 = "isFitW";
        R4 += "id";
        R4 += "t";
        R4 += "h";
        var i = t.create("masonry");
        return i.compatOptions.fitWidth = R4, i.prototype._resetLayout = function () {
            var n4 = "gut";
            n4 += "te";
            n4 += "r";
            var q4 = "out";
            q4 += "e";
            q4 += "rWidth";
            this.getSize(), this._getMeasurement("columnWidth", q4), this._getMeasurement(n4, "outerWidth"), this.measureColumns(), this.colYs = [];
            for (var t = 0; t < this.cols; t++) this.colYs.push(0);
            this.maxY = 0;
        }, i.prototype.measureColumns = function () {
            var Z4 = "flo";
            Z4 += "or";
            var V4 = "rou";
            V4 += "n";
            V4 += "d";
            if (this.getContainerWidth(), !this.columnWidth) {
                var t = this.items[0],
                    i = t && t.element;
                this.columnWidth = i && e(i).outerWidth || this.containerWidth;
            }
            var n = this.columnWidth += this.gutter,
                o = this.containerWidth + this.gutter,
                r = o / n,
                s = n - o % n,
                a = s && 1 > s ? V4 : Z4;
            r = Math[a](r), this.cols = Math.max(r, 1);
        }, i.prototype.getContainerWidth = function () {
            var t = this._getOption("fitWidth"),
                i = t ? this.element.parentNode : this.element,
                n = e(i);
            this.containerWidth = n && n.innerWidth;
        }, i.prototype._getItemLayoutPosition = function (t) {
            var y4 = "c";
            y4 += "e";
            y4 += "i";
            y4 += "l";
            var M4 = "r";
            M4 += "o";
            M4 += "u";
            M4 += "nd";
            t.getSize();
            var e = t.size.outerWidth % this.columnWidth,
                i = e && 1 > e ? M4 : y4,
                n = Math[i](t.size.outerWidth / this.columnWidth);
            n = Math.min(n, this.cols);
            for (var o = this._getColGroup(n), r = Math.min.apply(Math, o), s = o.indexOf(r), a = {
                    x: this.columnWidth * s,
                    y: r
                }, h = r + t.size.outerHeight, u = this.cols + 1 - o.length, d = 0; u > d; d++) this.colYs[s + d] = h;
            return a;
        }, i.prototype._getColGroup = function (t) {
            if (2 > t) return this.colYs;
            for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) {
                var o = this.colYs.slice(n, n + t);
                e[n] = Math.max.apply(Math, o);
            }
            return e;
        }, i.prototype._manageStamp = function (t) {
            var E4 = "ori";
            E4 += "ginTo";
            E4 += "p";
            var i = e(t),
                n = this._getElementOffset(t),
                o = this._getOption("originLeft"),
                r = o ? n.left : n.right,
                s = r + i.outerWidth,
                a = Math.floor(r / this.columnWidth);
            a = Math.max(0, a);
            var h = Math.floor(s / this.columnWidth);
            h -= s % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h);
            for (var u = this._getOption(E4), d = (u ? n.top : n.bottom) + i.outerHeight, l = a; h >= l; l++) this.colYs[l] = Math.max(d, this.colYs[l]);
        }, i.prototype._getContainerSize = function () {
            var a4 = "fit";
            a4 += "Width";
            this.maxY = Math.max.apply(Math, this.colYs);
            var t = {
                height: this.maxY
            };
            return this._getOption(a4) && (t.width = this._getContainerFitWidth()), t;
        }, i.prototype._getContainerFitWidth = function () {
            for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
            return (this.cols - t) * this.columnWidth - this.gutter;
        }, i.prototype.needsResizeLayout = function () {
            var t = this.containerWidth;
            return this.getContainerWidth(), t != this.containerWidth;
        }, i;
    });
    ! function (t, e) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e();
    }("undefined" != typeof window ? window : this, function () {
        function t() {}
        var e = t.prototype;
        return e.on = function (t, e) {
            if (t && e) {
                var i = this._events = this._events || {},
                    n = i[t] = i[t] || [];
                return -1 == n.indexOf(e) && n.push(e), this;
            }
        }, e.once = function (t, e) {
            if (t && e) {
                this.on(t, e);
                var i = this._onceEvents = this._onceEvents || {},
                    n = i[t] = i[t] || {};
                return n[e] = !0, this;
            }
        }, e.off = function (t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var n = i.indexOf(e);
                return -1 != n && i.splice(n, 1), this;
            }
        }, e.emitEvent = function (t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var n = 0,
                    o = i[n];
                e = e || [];
                for (var r = this._onceEvents && this._onceEvents[t]; o;) {
                    var s = r && r[o];
                    s && (this.off(t, o), delete r[o]), o.apply(this, e), n += s ? 0 : 1, o = i[n];
                }
                return this;
            }
        }, t;
    }),
    function (t, e) {
        var K4 = "ev-em";
        K4 += "itter/ev-emitter";
        "use strict";
        "function" == typeof define && define.amd ? define([K4], function (i) {
            return e(t, i);
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter);
    }(window, function (t, e) {
        function i(t, e) {
            for (var i in e) t[i] = e[i];
            return t;
        }

        function n(t) {
            var H4 = "num";
            H4 += "b";
            H4 += "er";
            var e = [];
            if (Array.isArray(t)) e = t;
            else if (H4 == typeof t.length)
                for (var i = 0; i < t.length; i++) e.push(t[i]);
            else e.push(t);
            return e;
        }

        function o(t, e, r) {
            var b4 = "fun";
            b4 += "c";
            b4 += "t";
            b4 += "ion";
            var c4 = "st";
            c4 += "ri";
            c4 += "ng";
            return this instanceof o ? (c4 == typeof t && (t = document.querySelectorAll(t)), this.elements = n(t), this.options = i({}, this.options), b4 == typeof e ? r = e : i(this.options, e), r && this.on("always", r), this.getImages(), h && (this.jqDeferred = new h.Deferred()), void setTimeout(function () {
                this.check();
            }.bind(this))) : new o(t, e, r);
        }

        function r(t) {
            this.img = t;
        }

        function s(t, e) {
            this.url = t, this.element = e, this.img = new Image();
        }
        var h = t.jQuery,
            a = t.console;
        o.prototype = Object.create(e.prototype), o.prototype.options = {}, o.prototype.getImages = function () {
            this.images = [], this.elements.forEach(this.addElementImages, this);
        }, o.prototype.addElementImages = function (t) {
            var r4 = "I";
            r4 += "M";
            r4 += "G";
            r4 == t.nodeName && this.addImage(t), this.options.background === !0 && this.addElementBackgroundImages(t);
            var e = t.nodeType;
            if (e && d[e]) {
                var D4 = "s";
                D4 += "tring";
                for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                    var o = i[n];
                    this.addImage(o);
                }
                if (D4 == typeof this.options.background) {
                    var r = t.querySelectorAll(this.options.background);
                    for (n = 0; n < r.length; n++) {
                        var s = r[n];
                        this.addElementBackgroundImages(s);
                    }
                }
            }
        };
        var d = {
            1: !0,
            9: !0,
            11: !0
        };
        return o.prototype.addElementBackgroundImages = function (t) {
            var e = getComputedStyle(t);
            if (e)
                for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
                    var o = n && n[2];
                    o && this.addBackground(o, t), n = i.exec(e.backgroundImage);
                }
        }, o.prototype.addImage = function (t) {
            var e = new r(t);
            this.images.push(e);
        }, o.prototype.addBackground = function (t, e) {
            var i = new s(t, e);
            this.images.push(i);
        }, o.prototype.check = function () {
            function t(t, i, n) {
                setTimeout(function () {
                    e.progress(t, i, n);
                });
            }
            var e = this;
            return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function (e) {
                e.once("progress", t), e.check();
            }) : void this.complete();
        }, o.prototype.progress = function (t, e, i) {
            this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, t, e);
        }, o.prototype.complete = function () {
            var C4 = "al";
            C4 += "w";
            C4 += "a";
            C4 += "ys";
            var T4 = "d";
            T4 += "o";
            T4 += "ne";
            var t = this.hasAnyBroken ? "fail" : T4;
            if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent(C4, [this]), this.jqDeferred) {
                var v4 = "resol";
                v4 += "v";
                v4 += "e";
                var e = this.hasAnyBroken ? "reject" : v4;
                this.jqDeferred[e](this);
            }
        }, r.prototype = Object.create(e.prototype), r.prototype.check = function () {
            var m4 = "er";
            m4 += "r";
            m4 += "or";
            var P4 = "e";
            P4 += "r";
            P4 += "ror";
            var j4 = "l";
            j4 += "oad";
            var g4 = "natural";
            g4 += "Width";
            var t = this.getIsImageComplete();
            return t ? void this.confirm(0 !== this.img.naturalWidth, g4) : (this.proxyImage = new Image(), this.proxyImage.addEventListener(j4, this), this.proxyImage.addEventListener(P4, this), this.img.addEventListener("load", this), this.img.addEventListener(m4, this), void(this.proxyImage.src = this.img.src));
        }, r.prototype.getIsImageComplete = function () {
            return this.img.complete && void 0 !== this.img.naturalWidth;
        }, r.prototype.confirm = function (t, e) {
            var J4 = "progr";
            J4 += "e";
            J4 += "ss";
            this.isLoaded = t, this.emitEvent(J4, [this, this.img, e]);
        }, r.prototype.handleEvent = function (t) {
            var O4 = "o";
            O4 += "n";
            var e = O4 + t.type;
            this[e] && this[e](t);
        }, r.prototype.onload = function () {
            var Y4 = "onlo";
            Y4 += "ad";
            this.confirm(!0, Y4), this.unbindEvents();
        }, r.prototype.onerror = function () {
            var Q9 = "onerr";
            Q9 += "or";
            this.confirm(!1, Q9), this.unbindEvents();
        }, r.prototype.unbindEvents = function () {
            var t9 = "lo";
            t9 += "ad";
            var f9 = "e";
            f9 += "rror";
            this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener(f9, this), this.img.removeEventListener(t9, this), this.img.removeEventListener("error", this);
        }, s.prototype = Object.create(r.prototype), s.prototype.check = function () {
            var I9 = "natu";
            I9 += "ralWidth";
            var F9 = "e";
            F9 += "rro";
            F9 += "r";
            this.img.addEventListener("load", this), this.img.addEventListener(F9, this), this.img.src = this.url;
            var t = this.getIsImageComplete();
            t && (this.confirm(0 !== this.img.naturalWidth, I9), this.unbindEvents());
        }, s.prototype.unbindEvents = function () {
            this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
        }, s.prototype.confirm = function (t, e) {
            this.isLoaded = t, this.emitEvent("progress", [this, this.element, e]);
        }, o.makeJQueryPlugin = function (e) {
            e = e || t.jQuery, e && (h = e, h.fn.imagesLoaded = function (t, e) {
                var i = new o(this, t, e);
                return i.jqDeferred.promise(h(this));
            });
        }, o.makeJQueryPlugin(), o;
    });
}! function () {}();
! function (a) {
    var i9 = "ob";
    i9 += "j";
    i9 += "ec";
    i9 += "t";
    var p9 = "jq";
    p9 += "u";
    p9 += "er";
    p9 += "y";
    var S9 = "fun";
    S9 += "ct";
    S9 += "i";
    S9 += "on";
    S9 == typeof define && define.amd ? define([p9], a) : i9 == typeof exports ? module.exports = a : a(jQuery);
}(function (a) {
    var u9 = "3.1.1";
    u9 += "2";
    var A9 = "onw";
    A9 += "heel";
    var e9 = "DOMMou";
    e9 += "seScroll";
    var s9 = "mo";
    s9 += "usewheel";
    var w9 = "whe";
    w9 += "el";

    function b(b) {
        var X9 = "d";
        X9 += "e";
        X9 += "l";
        X9 += "taX";
        var o9 = "del";
        o9 += "t";
        o9 += "a";
        o9 += "Y";
        var l9 = "a";
        l9 += "x";
        l9 += "i";
        l9 += "s";
        var z9 = "w";
        z9 += "heelDeltaX";
        var G9 = "mous";
        G9 += "ewheel";
        var g = b || window.event,
            h = i.call(arguments, 1),
            j = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0;
        if (b = a.event.fix(g), b.type = G9, "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), z9 in g && (l = -1 * g.wheelDeltaX), l9 in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, o9 in g && (m = -1 * g.deltaY, j = m), X9 in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
            var B9 = "c";
            B9 += "e";
            B9 += "i";
            B9 += "l";
            var x9 = "floo";
            x9 += "r";
            var d9 = "c";
            d9 += "e";
            d9 += "i";
            d9 += "l";
            var L9 = "floo";
            L9 += "r";
            if (1 === g.deltaMode) {
                var q = a.data(this, "mousewheel-line-height");
                j *= q, m *= q, l *= q;
            } else if (2 === g.deltaMode) {
                var W9 = "mo";
                W9 += "usewheel-p";
                W9 += "age-height";
                var r = a.data(this, W9);
                j *= r, m *= r, l *= r;
            }
            if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? L9 : d9](l / f), m = Math[m >= 1 ? x9 : B9](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
                var s = this.getBoundingClientRect();
                o = b.clientX - s.left, p = b.clientY - s.top;
            }
            return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h);
        }
    }

    function c() {
        f = null;
    }

    function d(a, b) {
        return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0;
    }
    var e, f, g = [w9, s9, e9, "MozMousePixelScroll"],
        h = A9 in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        i = Array.prototype.slice;
    if (a.event.fixHooks)
        for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
    var k = a.event.special.mousewheel = {
        version: u9,
        setup: function () {
            var U9 = "mousewheel-page-hei";
            U9 += "ght";
            var N9 = "mousewheel-line-";
            N9 += "height";
            if (this.addEventListener)
                for (var c = h.length; c;) this.addEventListener(h[--c], b, !1);
            else this.onmousewheel = b;
            a.data(this, N9, k.getLineHeight(this)), a.data(this, U9, k.getPageHeight(this));
        },
        teardown: function () {
            if (this.removeEventListener)
                for (var c = h.length; c;) this.removeEventListener(h[--c], b, !1);
            else this.onmousewheel = null;
            a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height");
        },
        getLineHeight: function (b) {
            var k9 = "pa";
            k9 += "rent";
            var h9 = "off";
            h9 += "setParent";
            var c = a(b),
                d = c[h9 in a.fn ? "offsetParent" : k9]();
            return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16;
        },
        getPageHeight: function (b) {
            return a(b).height();
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    a.fn.extend({
        mousewheel: function (a) {
            var R9 = "mouse";
            R9 += "wheel";
            return a ? this.bind("mousewheel", a) : this.trigger(R9);
        },
        unmousewheel: function (a) {
            return this.unbind("mousewheel", a);
        }
    });
});
var _gsScope = t766 != typeof module && module.exports && F766 != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
        var F16 = "easing";
        F16 += ".Ease";
        var m36 = "directio";
        m36 += "nalRotation";
        var P36 = "a";
        P36 += "tt";
        P36 += "r";
        var L2 = "plug";
        L2 += "ins.CSSPlugin";
        var m9 = "Tw";
        m9 += "e";
        m9 += "enLi";
        m9 += "te";
        var y9 = "core.An";
        y9 += "imat";
        y9 += "ion";
        var n9 = "Twe";
        n9 += "e";
        n9 += "n";
        n9 += "Lite";
        var q9 = "core.";
        q9 += "Sim";
        q9 += "pleT";
        q9 += "imeline";
        "use strict";
        _gsScope._gsDefine("TweenMax", ["core.Animation", q9, n9], function (t, e, i) {
                var s = function (t) {
                        var e, i = [],
                            s = t.length;
                        for (e = 0; e !== s; i.push(t[e++]));
                        return i;
                    },
                    r = function (t, e, s) {
                        i.call(this, t, e, s), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = r.prototype.render;
                    },
                    n = 1e-10,
                    a = i._internals,
                    o = a.isSelector,
                    h = a.isArray,
                    l = r.prototype = i.to({}, .1, {}),
                    _ = [];
                r.version = "1.16.1", l.constructor = r, l.kill()._gc = !1, r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf, r.getTweensOf = i.getTweensOf, r.lagSmoothing = i.lagSmoothing, r.ticker = i.ticker, r.render = i.render, l.invalidate = function () {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this);
                }, l.updateTo = function (t, e) {
                    var s, r = this.ratio,
                        n = this.vars.immediateRender || t.immediateRender;
                    e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (s in t) this.vars[s] = t[s];
                    if (this._initted || n)
                        if (e) this._initted = !1, n && this.render(0, !0, !0);
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var a = this._time;
                        this.render(0, !0, !1), this._initted = !1, this.render(a, !0, !1);
                    } else if (this._time > 0 || n) {
                        this._initted = !1, this._init();
                        for (var o, h = 1 / (1 - r), l = this._firstPT; l;) o = l.s + l.c, l.c *= h, l.s = o - l.c, l = l._next;
                    }
                    return this;
                }, l.render = function (t, e, i) {
                    var Z9 = "onReve";
                    Z9 += "rseComplet";
                    Z9 += "e";
                    var V9 = "onReve";
                    V9 += "r";
                    V9 += "seComplete";
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var s, r, o, h, l, u, p, f, c = this._dirty ? this.totalDuration() : this._totalDuration,
                        m = this._time,
                        d = this._totalTime,
                        g = this._cycle,
                        v = this._duration,
                        y = this._rawPrevTime;
                    if (t >= c ? (this._totalTime = c, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = v, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (s = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === v && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > y || y === n) && y !== t && (i = !0, y > n && (r = V9)), this._rawPrevTime = f = !e || t || y === t ? t : n)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== d || 0 === v && y > 0) && (r = Z9, s = this._reversed), 0 > t && (this._active = !1, 0 === v && (this._initted || !this.vars.lazy || i) && (y >= 0 && (i = !0), this._rawPrevTime = f = !e || t || y === t ? t : n)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (h = v + this._repeatDelay, this._cycle = this._totalTime / h >> 0, 0 !== this._cycle && this._cycle === this._totalTime / h && this._cycle--, this._time = this._totalTime - this._cycle * h, this._yoyo && 0 !== (1 & this._cycle) && (this._time = v - this._time), this._time > v ? this._time = v : 0 > this._time && (this._time = 0)), this._easeType ? (l = this._time / v, u = this._easeType, p = this._easePower, (1 === u || 3 === u && l >= .5) && (l = 1 - l), 3 === u && (l *= 2), 1 === p ? l *= l : 2 === p ? l *= l * l : 3 === p ? l *= l * l * l : 4 === p && (l *= l * l * l * l), this.ratio = 1 === u ? 1 - l : 2 === u ? l : .5 > this._time / v ? l / 2 : 1 - l / 2) : this.ratio = this._ease.getRatio(this._time / v)), m === this._time && !i && g === this._cycle) return d !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _)), void 0;
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = m, this._totalTime = d, this._rawPrevTime = y, this._cycle = g, a.lazyTweens.push(this), this._lazy = [t, e], void 0;
                        this._time && !s ? this.ratio = this._ease.getRatio(this._time / v) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== m && t >= 0 && (this._active = !0), 0 === d && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === v) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || _))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                    this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== d || s) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _)), this._cycle !== g && (e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || _)), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || _), 0 === v && this._rawPrevTime === n && f !== n && (this._rawPrevTime = 0));
                }, r.to = function (t, e, i) {
                    return new r(t, e, i);
                }, r.from = function (t, e, i) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new r(t, e, i);
                }, r.fromTo = function (t, e, i, s) {
                    return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new r(t, e, s);
                }, r.staggerTo = r.allTo = function (t, e, n, a, l, u, p) {
                    var M9 = "st";
                    M9 += "r";
                    M9 += "ing";
                    a = a || 0;
                    var f, c, m, d, g = n.delay || 0,
                        v = [],
                        y = function () {
                            n.onComplete && n.onComplete.apply(n.onCompleteScope || this, arguments), l.apply(p || this, u || _);
                        };
                    for (h(t) || (M9 == typeof t && (t = i.selector(t) || t), o(t) && (t = s(t))), t = t || [], 0 > a && (t = s(t), t.reverse(), a *= -1), f = t.length - 1, m = 0; f >= m; m++) {
                        c = {};
                        for (d in n) c[d] = n[d];
                        c.delay = g, m === f && l && (c.onComplete = y), v[m] = new r(t[m], e, c), g += a;
                    }
                    return v;
                }, r.staggerFrom = r.allFrom = function (t, e, i, s, n, a, o) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, r.staggerTo(t, e, i, s, n, a, o);
                }, r.staggerFromTo = r.allFromTo = function (t, e, i, s, n, a, o, h) {
                    return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, r.staggerTo(t, e, s, n, a, o, h);
                }, r.delayedCall = function (t, e, i, s, n) {
                    return new r(e, 0, {
                        delay: t,
                        onComplete: e,
                        onCompleteParams: i,
                        onCompleteScope: s,
                        onReverseComplete: e,
                        onReverseCompleteParams: i,
                        onReverseCompleteScope: s,
                        immediateRender: !1,
                        useFrames: n,
                        overwrite: 0
                    });
                }, r.set = function (t, e) {
                    return new r(t, 0, e);
                }, r.isTweening = function (t) {
                    return i.getTweensOf(t, !0).length > 0;
                };
                var u = function (t, e) {
                        for (var s = [], r = 0, n = t._first; n;) n instanceof i ? s[r++] = n : (e && (s[r++] = n), s = s.concat(u(n, e)), r = s.length), n = n._next;
                        return s;
                    },
                    p = r.getAllTweens = function (e) {
                        return u(t._rootTimeline, e).concat(u(t._rootFramesTimeline, e));
                    };
                r.killAll = function (t, i, s, r) {
                    null == i && (i = !0), null == s && (s = !0);
                    var n, a, o, h = p(0 != r),
                        l = h.length,
                        _ = i && s && r;
                    for (o = 0; l > o; o++) a = h[o], (_ || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && (t ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1));
                }, r.killChildTweensOf = function (t, e) {
                    if (null != t) {
                        var n, l, _, u, p, f = a.tweenLookup;
                        if ("string" == typeof t && (t = i.selector(t) || t), o(t) && (t = s(t)), h(t))
                            for (u = t.length; --u > -1;) r.killChildTweensOf(t[u], e);
                        else {
                            n = [];
                            for (_ in f)
                                for (l = f[_].target.parentNode; l;) l === t && (n = n.concat(f[_].tweens)), l = l.parentNode;
                            for (p = n.length, u = 0; p > u; u++) e && n[u].totalTime(n[u].totalDuration()), n[u]._enabled(!1, !1);
                        }
                    }
                };
                var f = function (t, i, s, r) {
                    i = i !== !1, s = s !== !1, r = r !== !1;
                    for (var n, a, o = p(r), h = i && s && r, l = o.length; --l > -1;) a = o[l], (h || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && a.paused(t);
                };
                return r.pauseAll = function (t, e, i) {
                    f(!0, t, e, i);
                }, r.resumeAll = function (t, e, i) {
                    f(!1, t, e, i);
                }, r.globalTimeScale = function (e) {
                    var s = t._rootTimeline,
                        r = i.ticker.time;
                    return arguments.length ? (e = e || n, s._startTime = r - (r - s._startTime) * s._timeScale / e, s = t._rootFramesTimeline, r = i.ticker.frame, s._startTime = r - (r - s._startTime) * s._timeScale / e, s._timeScale = t._rootTimeline._timeScale = e, e) : s._timeScale;
                }, l.progress = function (t) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration();
                }, l.totalProgress = function (t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration();
                }, l.time = function (t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time;
                }, l.duration = function (e) {
                    return arguments.length ? t.prototype.duration.call(this, e) : this._duration;
                }, l.totalDuration = function (t) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration);
                }, l.repeat = function (t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat;
                }, l.repeatDelay = function (t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay;
                }, l.yoyo = function (t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo;
                }, r;
            }, !0), _gsScope._gsDefine("TimelineLite", [y9, "core.SimpleTimeline", "TweenLite"], function (t, e, i) {
                var s = function (t) {
                        e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var i, s, r = this.vars;
                        for (s in r) i = r[s], h(i) && -1 !== i.join("").indexOf("{self}") && (r[s] = this._swapSelfInParams(i));
                        h(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger);
                    },
                    r = 1e-10,
                    n = i._internals,
                    a = s._internals = {},
                    o = n.isSelector,
                    h = n.isArray,
                    l = n.lazyTweens,
                    _ = n.lazyRender,
                    u = [],
                    p = _gsScope._gsDefine.globals,
                    f = function (t) {
                        var e, i = {};
                        for (e in t) i[e] = t[e];
                        return i;
                    },
                    c = a.pauseCallback = function (t, e, i, s) {
                        var n, a = t._timeline,
                            o = a._totalTime,
                            h = t._startTime,
                            l = 0 > t._rawPrevTime || 0 === t._rawPrevTime && a._reversed,
                            _ = l ? 0 : r,
                            p = l ? r : 0;
                        if (e || !this._forcingPlayhead) {
                            for (a.pause(h), n = t._prev; n && n._startTime === h;) n._rawPrevTime = p, n = n._prev;
                            for (n = t._next; n && n._startTime === h;) n._rawPrevTime = _, n = n._next;
                            e && e.apply(s || a, i || u), (this._forcingPlayhead || !a._paused) && a.seek(o);
                        }
                    },
                    m = function (t) {
                        var e, i = [],
                            s = t.length;
                        for (e = 0; e !== s; i.push(t[e++]));
                        return i;
                    },
                    d = s.prototype = new e();
                return s.version = "1.16.1", d.constructor = s, d.kill()._gc = d._forcingPlayhead = !1, d.to = function (t, e, s, r) {
                    var n = s.repeat && p.TweenMax || i;
                    return e ? this.add(new n(t, e, s), r) : this.set(t, s, r);
                }, d.from = function (t, e, s, r) {
                    return this.add((s.repeat && p.TweenMax || i).from(t, e, s), r);
                }, d.fromTo = function (t, e, s, r, n) {
                    var a = r.repeat && p.TweenMax || i;
                    return e ? this.add(a.fromTo(t, e, s, r), n) : this.set(t, r, n);
                }, d.staggerTo = function (t, e, r, n, a, h, l, _) {
                    var E9 = "str";
                    E9 += "i";
                    E9 += "ng";
                    var u, p = new s({
                        onComplete: h,
                        onCompleteParams: l,
                        onCompleteScope: _,
                        smoothChildTiming: this.smoothChildTiming
                    });
                    for (E9 == typeof t && (t = i.selector(t) || t), t = t || [], o(t) && (t = m(t)), n = n || 0, 0 > n && (t = m(t), t.reverse(), n *= -1), u = 0; t.length > u; u++) r.startAt && (r.startAt = f(r.startAt)), p.to(t[u], e, f(r), u * n);
                    return this.add(p, a);
                }, d.staggerFrom = function (t, e, i, s, r, n, a, o) {
                    return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, s, r, n, a, o);
                }, d.staggerFromTo = function (t, e, i, s, r, n, a, o, h) {
                    return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, s, r, n, a, o, h);
                }, d.call = function (t, e, s, r) {
                    return this.add(i.delayedCall(0, t, e, s), r);
                }, d.set = function (t, e, s) {
                    return s = this._parseTimeOrLabel(s, 0, !0), null == e.immediateRender && (e.immediateRender = s === this._time && !this._paused), this.add(new i(t, 0, e), s);
                }, s.exportRoot = function (t, e) {
                    t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                    var r, n, a = new s(t),
                        o = a._timeline;
                    for (null == e && (e = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, r = o._first; r;) n = r._next, e && r instanceof i && r.target === r.vars.onComplete || a.add(r, r._startTime - r._delay), r = n;
                    return o.add(a, 0), a;
                }, d.add = function (r, n, a, o) {
                    var a9 = "numb";
                    a9 += "er";
                    var l, _, u, p, f, c;
                    if (a9 != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, r)), !(r instanceof t)) {
                        var b9 = " into the timeline; it is not a tween, timeline, function, o";
                        b9 += "r string.";
                        var c9 = "Can";
                        c9 += "n";
                        c9 += "ot add ";
                        if (r instanceof Array || r && r.push && h(r)) {
                            var H9 = "s";
                            H9 += "ta";
                            H9 += "r";
                            H9 += "t";
                            var K9 = "nor";
                            K9 += "m";
                            K9 += "al";
                            for (a = a || K9, o = o || 0, l = n, _ = r.length, u = 0; _ > u; u++) h(p = r[u]) && (p = new s({
                                tweens: p
                            })), this.add(p, l), "string" != typeof p && "function" != typeof p && ("sequence" === a ? l = p._startTime + p.totalDuration() / p._timeScale : H9 === a && (p._startTime -= p.delay())), l += o;
                            return this._uncache(!0);
                        }
                        if ("string" == typeof r) return this.addLabel(r, n);
                        if ("function" != typeof r) throw c9 + r + b9;
                        r = i.delayedCall(0, r);
                    }
                    if (e.prototype.add.call(this, r, n), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (f = this, c = f.rawTime() > r._startTime; f._timeline;) c && f._timeline.smoothChildTiming ? f.totalTime(f._totalTime, !0) : f._gc && f._enabled(!0, !1), f = f._timeline;
                    return this;
                }, d.remove = function (e) {
                    var r9 = "st";
                    r9 += "ri";
                    r9 += "ng";
                    if (e instanceof t) return this._remove(e, !1);
                    if (e instanceof Array || e && e.push && h(e)) {
                        for (var i = e.length; --i > -1;) this.remove(e[i]);
                        return this;
                    }
                    return r9 == typeof e ? this.removeLabel(e) : this.kill(null, e);
                }, d._remove = function (t, i) {
                    e.prototype._remove.call(this, t, i);
                    var s = this._last;
                    return s ? this._time > s._startTime + s._totalDuration / s._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this;
                }, d.append = function (t, e) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t));
                }, d.insert = d.insertMultiple = function (t, e, i, s) {
                    return this.add(t, e || 0, i, s);
                }, d.appendMultiple = function (t, e, i, s) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s);
                }, d.addLabel = function (t, e) {
                    return this._labels[t] = this._parseTimeOrLabel(e), this;
                }, d.addPause = function (t, e, s, r) {
                    var n = i.delayedCall(0, c, ["{self}", e, s, r], this);
                    return n.data = "isPause", this.add(n, t);
                }, d.removeLabel = function (t) {
                    return delete this._labels[t], this;
                }, d.getLabelTime = function (t) {
                    return null != this._labels[t] ? this._labels[t] : -1;
                }, d._parseTimeOrLabel = function (e, i, s, r) {
                    var T9 = "str";
                    T9 += "i";
                    T9 += "n";
                    T9 += "g";
                    var D9 = "s";
                    D9 += "t";
                    D9 += "rin";
                    D9 += "g";
                    var n;
                    if (r instanceof t && r.timeline === this) this.remove(r);
                    else if (r && (r instanceof Array || r.push && h(r)))
                        for (n = r.length; --n > -1;) r[n] instanceof t && r[n].timeline === this && this.remove(r[n]);
                    if (D9 == typeof i) return this._parseTimeOrLabel(i, s && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, s);
                    if (i = i || 0, T9 != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                    else {
                        if (n = e.indexOf("="), -1 === n) return null == this._labels[e] ? s ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                        i = parseInt(e.charAt(n - 1) + "1", 10) * Number(e.substr(n + 1)), e = n > 1 ? this._parseTimeOrLabel(e.substr(0, n - 1), 0, s) : this.duration();
                    }
                    return Number(e) + i;
                }, d.seek = function (t, e) {
                    var C9 = "nu";
                    C9 += "mb";
                    C9 += "er";
                    return this.totalTime(C9 == typeof t ? t : this._parseTimeOrLabel(t), e !== !1);
                }, d.stop = function () {
                    return this.paused(!0);
                }, d.gotoAndPlay = function (t, e) {
                    return this.play(t, e);
                }, d.gotoAndStop = function (t, e) {
                    return this.pause(t, e);
                }, d.render = function (t, e, i) {
                    var P9 = "onRevers";
                    P9 += "eComplete";
                    var j9 = "onReverseComp";
                    j9 += "let";
                    j9 += "e";
                    var g9 = "onReverseCo";
                    g9 += "mplet";
                    g9 += "e";
                    var v9 = "onComp";
                    v9 += "let";
                    v9 += "e";
                    this._gc && this._enabled(!0, !1);
                    var s, n, a, o, h, p = this._dirty ? this.totalDuration() : this._totalDuration,
                        f = this._time,
                        c = this._startTime,
                        m = this._timeScale,
                        d = this._paused;
                    if (t >= p) this._totalTime = this._time = p, this._reversed || this._hasPausedChild() || (n = !0, o = v9, h = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (h = !0, this._rawPrevTime > r && (o = g9))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = p + 1e-4;
                    else if (1e-7 > t)
                        if (this._totalTime = this._time = 0, (0 !== f || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (o = j9, n = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (h = n = !0, o = P9) : this._rawPrevTime >= 0 && this._first && (h = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, 0 === t && n)
                                for (s = this._first; s && 0 === s._startTime;) s._duration || (n = !1), s = s._next;
                            t = 0, this._initted || (h = !0);
                        }
                    else this._totalTime = this._time = this._rawPrevTime = t;
                    if (this._time !== f && this._first || i || h) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== f && t > 0 && (this._active = !0), 0 === f && this.vars.onStart && 0 !== this._time && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || u)), this._time >= f)
                            for (s = this._first; s && (a = s._next, !this._paused || d);)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                        else
                            for (s = this._last; s && (a = s._prev, !this._paused || d);)(s._active || f >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                        this._onUpdate && (e || (l.length && _(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || u))), o && (this._gc || (c === this._startTime || m !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (n && (l.length && _(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this.vars[o].apply(this.vars[o + "Scope"] || this, this.vars[o + "Params"] || u)));
                    }
                }, d._hasPausedChild = function () {
                    for (var t = this._first; t;) {
                        if (t._paused || t instanceof s && t._hasPausedChild()) return !0;
                        t = t._next;
                    }
                    return !1;
                }, d.getChildren = function (t, e, s, r) {
                    r = r || -9999999999;
                    for (var n = [], a = this._first, o = 0; a;) r > a._startTime || (a instanceof i ? e !== !1 && (n[o++] = a) : (s !== !1 && (n[o++] = a), t !== !1 && (n = n.concat(a.getChildren(!0, e, s)), o = n.length))), a = a._next;
                    return n;
                }, d.getTweensOf = function (t, e) {
                    var s, r, n = this._gc,
                        a = [],
                        o = 0;
                    for (n && this._enabled(!0, !0), s = i.getTweensOf(t), r = s.length; --r > -1;)(s[r].timeline === this || e && this._contains(s[r])) && (a[o++] = s[r]);
                    return n && this._enabled(!1, !0), a;
                }, d.recent = function () {
                    return this._recent;
                }, d._contains = function (t) {
                    for (var e = t.timeline; e;) {
                        if (e === this) return !0;
                        e = e.timeline;
                    }
                    return !1;
                }, d.shiftChildren = function (t, e, i) {
                    i = i || 0;
                    for (var s, r = this._first, n = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
                    if (e)
                        for (s in n) n[s] >= i && (n[s] += t);
                    return this._uncache(!0);
                }, d._kill = function (t, e) {
                    if (!t && !e) return this._enabled(!1, !1);
                    for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, r = !1; --s > -1;) i[s]._kill(t, e) && (r = !0);
                    return r;
                }, d.clear = function (t) {
                    var e = this.getChildren(!1, !0, !0),
                        i = e.length;
                    for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                    return t !== !1 && (this._labels = {}), this._uncache(!0);
                }, d.invalidate = function () {
                    for (var e = this._first; e;) e.invalidate(), e = e._next;
                    return t.prototype.invalidate.call(this);
                }, d._enabled = function (t, i) {
                    if (t === this._gc)
                        for (var s = this._first; s;) s._enabled(t, !0), s = s._next;
                    return e.prototype._enabled.call(this, t, i);
                }, d.totalTime = function () {
                    this._forcingPlayhead = !0;
                    var e = t.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, e;
                }, d.duration = function (t) {
                    return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration);
                }, d.totalDuration = function (t) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var e, i, s = 0, r = this._last, n = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > n && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : n = r._startTime, 0 > r._startTime && !r._paused && (s -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), n = 0), i = r._startTime + r._totalDuration / r._timeScale, i > s && (s = i), r = e;
                            this._duration = this._totalDuration = s, this._dirty = !1;
                        }
                        return this._totalDuration;
                    }
                    return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this;
                }, d.paused = function (e) {
                    if (!e)
                        for (var i = this._first, s = this._time; i;) i._startTime === s && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                    return t.prototype.paused.apply(this, arguments);
                }, d.usesFrames = function () {
                    for (var e = this._timeline; e._timeline;) e = e._timeline;
                    return e === t._rootFramesTimeline;
                }, d.rawTime = function () {
                    return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale;
                }, s;
            }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", m9, "easing.Ease"], function (t, e, i) {
                var J9 = "1";
                J9 += ".1";
                J9 += "6";
                J9 += ".1";
                var s = function (e) {
                        t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0;
                    },
                    r = 1e-10,
                    n = [],
                    a = e._internals,
                    o = a.lazyTweens,
                    h = a.lazyRender,
                    l = new i(null, null, 1, 0),
                    _ = s.prototype = new t();
                return _.constructor = s, _.kill()._gc = !1, s.version = J9, _.invalidate = function () {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this);
                }, _.addCallback = function (t, i, s, r) {
                    return this.add(e.delayedCall(0, t, s, r), i);
                }, _.removeCallback = function (t, e) {
                    if (t)
                        if (null == e) this._kill(null, t);
                        else
                            for (var i = this.getTweensOf(t, !1), s = i.length, r = this._parseTimeOrLabel(e); --s > -1;) i[s]._startTime === r && i[s]._enabled(!1, !1);
                    return this;
                }, _.removePause = function (e) {
                    return this.removeCallback(t._internals.pauseCallback, e);
                }, _.tweenTo = function (t, i) {
                    i = i || {};
                    var s, r, a, o = {
                        ease: l,
                        useFrames: this.usesFrames(),
                        immediateRender: !1
                    };
                    for (r in i) o[r] = i[r];
                    return o.time = this._parseTimeOrLabel(t), s = Math.abs(Number(o.time) - this._time) / this._timeScale || .001, a = new e(this, s, o), o.onStart = function () {
                        a.target.paused(!0), a.vars.time !== a.target.time() && s === a.duration() && a.duration(Math.abs(a.vars.time - a.target.time()) / a.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || a, i.onStartParams || n);
                    }, a;
                }, _.tweenFromTo = function (t, e, i) {
                    i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [t],
                        onCompleteScope: this
                    }, i.immediateRender = i.immediateRender !== !1;
                    var s = this.tweenTo(e, i);
                    return s.duration(Math.abs(s.vars.time - t) / this._timeScale || .001);
                }, _.render = function (t, e, i) {
                    var Y9 = "onRe";
                    Y9 += "verseComplete";
                    var O9 = "onComplet";
                    O9 += "e";
                    this._gc && this._enabled(!0, !1);
                    var s, a, l, _, u, p, f = this._dirty ? this.totalDuration() : this._totalDuration,
                        c = this._duration,
                        m = this._time,
                        d = this._totalTime,
                        g = this._startTime,
                        v = this._timeScale,
                        y = this._rawPrevTime,
                        T = this._paused,
                        w = this._cycle;
                    if (t >= f) this._locked || (this._totalTime = f, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (a = !0, _ = O9, u = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || 0 > y || y === r) && y !== t && this._first && (u = !0, y > r && (_ = Y9))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = c, t = c + 1e-4);
                    else if (1e-7 > t)
                        if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== m || 0 === c && y !== r && (y > 0 || 0 > t && y >= 0) && !this._locked) && (_ = "onReverseComplete", a = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (u = a = !0, _ = "onReverseComplete") : y >= 0 && this._first && (u = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = c || !e || t || this._rawPrevTime === t ? t : r, 0 === t && a)
                                for (s = this._first; s && 0 === s._startTime;) s._duration || (a = !1), s = s._next;
                            t = 0, this._initted || (u = !0);
                        }
                    else 0 === c && 0 > y && (u = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (p = c + this._repeatDelay, this._cycle = this._totalTime / p >> 0, 0 !== this._cycle && this._cycle === this._totalTime / p && this._cycle--, this._time = this._totalTime - this._cycle * p, this._yoyo && 0 !== (1 & this._cycle) && (this._time = c - this._time), this._time > c ? (this._time = c, t = c + 1e-4) : 0 > this._time ? this._time = t = 0 : t = this._time));
                    if (this._cycle !== w && !this._locked) {
                        var x = this._yoyo && 0 !== (1 & w),
                            b = x === (this._yoyo && 0 !== (1 & this._cycle)),
                            P = this._totalTime,
                            S = this._cycle,
                            k = this._rawPrevTime,
                            R = this._time;
                        if (this._totalTime = w * c, w > this._cycle ? x = !x : this._totalTime += c, this._time = m, this._rawPrevTime = 0 === c ? y - 1e-4 : y, this._cycle = w, this._locked = !0, m = x ? 0 : c, this.render(m, e, 0 === c), e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || n), b && (m = x ? c + 1e-4 : -1e-4, this.render(m, !0, !1)), this._locked = !1, this._paused && !T) return;
                        this._time = R, this._totalTime = P, this._cycle = S, this._rawPrevTime = k;
                    }
                    if (!(this._time !== m && this._first || i || u)) return d !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || n)), void 0;
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== d && t > 0 && (this._active = !0), 0 === d && this.vars.onStart && 0 !== this._totalTime && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || n)), this._time >= m)
                        for (s = this._first; s && (l = s._next, !this._paused || T);)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = l;
                    else
                        for (s = this._last; s && (l = s._prev, !this._paused || T);)(s._active || m >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = l;
                    this._onUpdate && (e || (o.length && h(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || n))), _ && (this._locked || this._gc || (g === this._startTime || v !== this._timeScale) && (0 === this._time || f >= this.totalDuration()) && (a && (o.length && h(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[_] && this.vars[_].apply(this.vars[_ + "Scope"] || this, this.vars[_ + "Params"] || n)));
                }, _.getActive = function (t, e, i) {
                    null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                    var s, r, n = [],
                        a = this.getChildren(t, e, i),
                        o = 0,
                        h = a.length;
                    for (s = 0; h > s; s++) r = a[s], r.isActive() && (n[o++] = r);
                    return n;
                }, _.getLabelAfter = function (t) {
                    t || 0 !== t && (t = this._time);
                    var e, i = this.getLabelsArray(),
                        s = i.length;
                    for (e = 0; s > e; e++)
                        if (i[e].time > t) return i[e].name;
                    return null;
                }, _.getLabelBefore = function (t) {
                    null == t && (t = this._time);
                    for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                        if (t > e[i].time) return e[i].name;
                    return null;
                }, _.getLabelsArray = function () {
                    var t, e = [],
                        i = 0;
                    for (t in this._labels) e[i++] = {
                        time: this._labels[t],
                        name: t
                    };
                    return e.sort(function (t, e) {
                        return t.time - e.time;
                    }), e;
                }, _.progress = function (t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration();
                }, _.totalProgress = function (t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration();
                }, _.totalDuration = function (e) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration);
                }, _.time = function (t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time;
                }, _.repeat = function (t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat;
                }, _.repeatDelay = function (t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay;
                }, _.yoyo = function (t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo;
                }, _.currentLabel = function (t) {
                    return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8);
                }, s;
            }, !0),
            function () {
                var I2 = "b";
                I2 += "ez";
                I2 += "ier";
                var t = 180 / Math.PI,
                    e = [],
                    i = [],
                    s = [],
                    r = {},
                    n = _gsScope._gsDefine.globals,
                    a = function (t, e, i, s) {
                        this.a = t, this.b = e, this.c = i, this.d = s, this.da = s - t, this.ca = i - t, this.ba = e - t;
                    },
                    o = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                    h = function (t, e, i, s) {
                        var r = {
                                a: t
                            },
                            n = {},
                            a = {},
                            o = {
                                c: s
                            },
                            h = (t + e) / 2,
                            l = (e + i) / 2,
                            _ = (i + s) / 2,
                            u = (h + l) / 2,
                            p = (l + _) / 2,
                            f = (p - u) / 8;
                        return r.b = h + (t - h) / 4, n.b = u + f, r.c = n.a = (r.b + n.b) / 2, n.c = a.a = (u + p) / 2, a.b = p - f, o.b = _ + (s - _) / 4, a.c = o.a = (a.b + o.b) / 2, [r, n, a, o];
                    },
                    l = function (t, r, n, a, o) {
                        var l, _, u, p, f, c, m, d, g, v, y, T, w, x = t.length - 1,
                            b = 0,
                            P = t[0].a;
                        for (l = 0; x > l; l++) f = t[b], _ = f.a, u = f.d, p = t[b + 1].d, o ? (y = e[l], T = i[l], w = .25 * (T + y) * r / (a ? .5 : s[l] || .5), c = u - (u - _) * (a ? .5 * r : 0 !== y ? w / y : 0), m = u + (p - u) * (a ? .5 * r : 0 !== T ? w / T : 0), d = u - (c + ((m - c) * (3 * y / (y + T) + .5) / 4 || 0))) : (c = u - .5 * (u - _) * r, m = u + .5 * (p - u) * r, d = u - (c + m) / 2), c += d, m += d, f.c = g = c, f.b = 0 !== l ? P : P = f.a + .6 * (f.c - f.a), f.da = u - _, f.ca = g - _, f.ba = P - _, n ? (v = h(_, P, g, u), t.splice(b, 1, v[0], v[1], v[2], v[3]), b += 4) : b++, P = m;
                        f = t[b], f.b = P, f.c = P + .4 * (f.d - P), f.da = f.d - f.a, f.ca = f.c - f.a, f.ba = P - f.a, n && (v = h(f.a, P, f.c, f.d), t.splice(b, 1, v[0], v[1], v[2], v[3]));
                    },
                    _ = function (t, s, r, n) {
                        var Q2 = "st";
                        Q2 += "ri";
                        Q2 += "n";
                        Q2 += "g";
                        var o, h, l, _, u, p, f = [];
                        if (n)
                            for (t = [n].concat(t), h = t.length; --h > -1;) Q2 == typeof (p = t[h][s]) && "=" === p.charAt(1) && (t[h][s] = n[s] + Number(p.charAt(0) + p.substr(2)));
                        if (o = t.length - 2, 0 > o) return f[0] = new a(t[0][s], 0, 0, t[-1 > o ? 0 : 1][s]), f;
                        for (h = 0; o > h; h++) l = t[h][s], _ = t[h + 1][s], f[h] = new a(l, 0, 0, _), r && (u = t[h + 2][s], e[h] = (e[h] || 0) + (_ - l) * (_ - l), i[h] = (i[h] || 0) + (u - _) * (u - _));
                        return f[h] = new a(t[h][s], 0, 0, t[h + 1][s]), f;
                    },
                    u = function (t, n, a, h, u, p) {
                        var f2 = "strin";
                        f2 += "g";
                        var f, c, m, d, g, v, y, T, w = {},
                            x = [],
                            b = p || t[0];
                        u = f2 == typeof u ? "," + u + "," : o, null == n && (n = 1);
                        for (c in t[0]) x.push(c);
                        if (t.length > 1) {
                            for (T = t[t.length - 1], y = !0, f = x.length; --f > -1;)
                                if (c = x[f], Math.abs(b[c] - T[c]) > .05) {
                                    y = !1;
                                    break;
                                } y && (t = t.concat(), p && t.unshift(p), t.push(t[1]), p = t[t.length - 3]);
                        }
                        for (e.length = i.length = s.length = 0, f = x.length; --f > -1;) c = x[f], r[c] = -1 !== u.indexOf("," + c + ","), w[c] = _(t, c, r[c], p);
                        for (f = e.length; --f > -1;) e[f] = Math.sqrt(e[f]), i[f] = Math.sqrt(i[f]);
                        if (!h) {
                            for (f = x.length; --f > -1;)
                                if (r[c])
                                    for (m = w[x[f]], v = m.length - 1, d = 0; v > d; d++) g = m[d + 1].da / i[d] + m[d].da / e[d], s[d] = (s[d] || 0) + g * g;
                            for (f = s.length; --f > -1;) s[f] = Math.sqrt(s[f]);
                        }
                        for (f = x.length, d = a ? 4 : 1; --f > -1;) c = x[f], m = w[c], l(m, n, a, h, r[c]), y && (m.splice(0, d), m.splice(m.length - d, d));
                        return w;
                    },
                    p = function (t, e, i) {
                        var F2 = "i";
                        F2 += "nvalid Be";
                        F2 += "z";
                        F2 += "ier data";
                        var t2 = "s";
                        t2 += "o";
                        t2 += "ft";
                        e = e || t2;
                        var s, r, n, o, h, l, _, u, p, f, c, m = {},
                            d = "cubic" === e ? 3 : 2,
                            g = "soft" === e,
                            v = [];
                        if (g && i && (t = [i].concat(t)), null == t || d + 1 > t.length) throw F2;
                        for (p in t[0]) v.push(p);
                        for (l = v.length; --l > -1;) {
                            for (p = v[l], m[p] = h = [], f = 0, u = t.length, _ = 0; u > _; _++) s = null == i ? t[_][p] : "string" == typeof (c = t[_][p]) && "=" === c.charAt(1) ? i[p] + Number(c.charAt(0) + c.substr(2)) : Number(c), g && _ > 1 && u - 1 > _ && (h[f++] = (s + h[f - 2]) / 2), h[f++] = s;
                            for (u = f - d + 1, f = 0, _ = 0; u > _; _ += d) s = h[_], r = h[_ + 1], n = h[_ + 2], o = 2 === d ? 0 : h[_ + 3], h[f++] = c = 3 === d ? new a(s, r, n, o) : new a(s, (2 * r + s) / 3, (2 * r + n) / 3, n);
                            h.length = f;
                        }
                        return m;
                    },
                    f = function (t, e, i) {
                        for (var s, r, n, a, o, h, l, _, u, p, f, c = 1 / i, m = t.length; --m > -1;)
                            for (p = t[m], n = p.a, a = p.d - n, o = p.c - n, h = p.b - n, s = r = 0, _ = 1; i >= _; _++) l = c * _, u = 1 - l, s = r - (r = (l * l * a + 3 * u * (l * o + u * h)) * l), f = m * i + _ - 1, e[f] = (e[f] || 0) + s * s;
                    },
                    c = function (t, e) {
                        e = e >> 0 || 6;
                        var i, s, r, n, a = [],
                            o = [],
                            h = 0,
                            l = 0,
                            _ = e - 1,
                            u = [],
                            p = [];
                        for (i in t) f(t[i], a, e);
                        for (r = a.length, s = 0; r > s; s++) h += Math.sqrt(a[s]), n = s % e, p[n] = h, n === _ && (l += h, n = s / e >> 0, u[n] = p, o[n] = l, h = 0, p = []);
                        return {
                            length: l,
                            lengths: o,
                            segments: u
                        };
                    },
                    m = _gsScope._gsDefine.plugin({
                        propName: I2,
                        priority: -1,
                        version: "1.3.4",
                        API: 2,
                        global: !0,
                        init: function (t, e, i) {
                            var G2 = "thr";
                            G2 += "uBasic";
                            var i2 = "q";
                            i2 += "uadr";
                            i2 += "at";
                            i2 += "ic";
                            var p2 = "g";
                            p2 += "et";
                            var S2 = "s";
                            S2 += "e";
                            S2 += "t";
                            this._target = t, e instanceof Array && (e = {
                                values: e
                            }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                            var s, r, n, a, o, h = e.values || [],
                                l = {},
                                _ = h[0],
                                f = e.autoRotate || i.vars.orientToBezier;
                            this._autoRotate = f ? f instanceof Array ? f : [
                                ["x", "y", "rotation", f === !0 ? 0 : Number(f) || 0]
                            ] : null;
                            for (s in _) this._props.push(s);
                            for (n = this._props.length; --n > -1;) s = this._props[n], this._overwriteProps.push(s), r = this._func[s] = "function" == typeof t[s], l[s] = r ? t[s.indexOf(S2) || "function" != typeof t["get" + s.substr(3)] ? s : p2 + s.substr(3)]() : parseFloat(t[s]), o || l[s] !== h[0][s] && (o = l);
                            if (this._beziers = "cubic" !== e.type && i2 !== e.type && "soft" !== e.type ? u(h, isNaN(e.curviness) ? 1 : e.curviness, !1, G2 === e.type, e.correlate, o) : p(h, e.type, l), this._segCount = this._beziers[s].length, this._timeRes) {
                                var m = c(this._beziers, this._timeRes);
                                this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length;
                            }
                            if (f = this._autoRotate)
                                for (this._initialRotations = [], f[0] instanceof Array || (this._autoRotate = f = [f]), n = f.length; --n > -1;) {
                                    var o2 = "g";
                                    o2 += "e";
                                    o2 += "t";
                                    var l2 = "f";
                                    l2 += "un";
                                    l2 += "ction";
                                    var z2 = "s";
                                    z2 += "et";
                                    for (a = 0; 3 > a; a++) s = f[n][a], this._func[s] = "function" == typeof t[s] ? t[s.indexOf(z2) || l2 != typeof t["get" + s.substr(3)] ? s : o2 + s.substr(3)] : !1;
                                    s = f[n][2], this._initialRotations[n] = this._func[s] ? this._func[s].call(this._target) : this._target[s];
                                }
                            return this._startRatio = i.vars.runBackwards ? 1 : 0, !0;
                        },
                        set: function (e) {
                            var i, s, r, n, a, o, h, l, _, u, p = this._segCount,
                                f = this._func,
                                c = this._target,
                                m = e !== this._startRatio;
                            if (this._timeRes) {
                                if (_ = this._lengths, u = this._curSeg, e *= this._length, r = this._li, e > this._l2 && p - 1 > r) {
                                    for (l = p - 1; l > r && e >= (this._l2 = _[++r]););
                                    this._l1 = _[r - 1], this._li = r, this._curSeg = u = this._segments[r], this._s2 = u[this._s1 = this._si = 0];
                                } else if (this._l1 > e && r > 0) {
                                    for (; r > 0 && (this._l1 = _[--r]) >= e;);
                                    0 === r && this._l1 > e ? this._l1 = 0 : r++, this._l2 = _[r], this._li = r, this._curSeg = u = this._segments[r], this._s1 = u[(this._si = u.length - 1) - 1] || 0, this._s2 = u[this._si];
                                }
                                if (i = r, e -= this._l1, r = this._si, e > this._s2 && u.length - 1 > r) {
                                    for (l = u.length - 1; l > r && e >= (this._s2 = u[++r]););
                                    this._s1 = u[r - 1], this._si = r;
                                } else if (this._s1 > e && r > 0) {
                                    for (; r > 0 && (this._s1 = u[--r]) >= e;);
                                    0 === r && this._s1 > e ? this._s1 = 0 : r++, this._s2 = u[r], this._si = r;
                                }
                                o = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec;
                            } else i = 0 > e ? 0 : e >= 1 ? p - 1 : p * e >> 0, o = (e - i * (1 / p)) * p;
                            for (s = 1 - o, r = this._props.length; --r > -1;) n = this._props[r], a = this._beziers[n][i], h = (o * o * a.da + 3 * s * (o * a.ca + s * a.ba)) * o + a.a, this._round[n] && (h = Math.round(h)), f[n] ? c[n](h) : c[n] = h;
                            if (this._autoRotate) {
                                var d, g, v, y, T, w, x, b = this._autoRotate;
                                for (r = b.length; --r > -1;) n = b[r][2], w = b[r][3] || 0, x = b[r][4] === !0 ? 1 : t, a = this._beziers[b[r][0]], d = this._beziers[b[r][1]], a && d && (a = a[i], d = d[i], g = a.a + (a.b - a.a) * o, y = a.b + (a.c - a.b) * o, g += (y - g) * o, y += (a.c + (a.d - a.c) * o - y) * o, v = d.a + (d.b - d.a) * o, T = d.b + (d.c - d.b) * o, v += (T - v) * o, T += (d.c + (d.d - d.c) * o - T) * o, h = m ? Math.atan2(T - v, y - g) * x + w : this._initialRotations[r], f[n] ? c[n](h) : c[n] = h);
                            }
                        }
                    }),
                    d = m.prototype;
                m.bezierThrough = u, m.cubicToQuadratic = h, m._autoCSS = !0, m.quadraticToCubic = function (t, e, i) {
                    return new a(t, (2 * e + t) / 3, (2 * e + i) / 3, i);
                }, m._cssRegister = function () {
                    var t = n.CSSPlugin;
                    if (t) {
                        var e = t._internals,
                            i = e._parseToProxy,
                            s = e._setPluginRatio,
                            r = e.CSSPropTween;
                        e._registerComplexSpecialProp("bezier", {
                            parser: function (t, e, n, a, o, h) {
                                var W2 = "rota";
                                W2 += "tion";
                                var X2 = "le";
                                X2 += "f";
                                X2 += "t";
                                e instanceof Array && (e = {
                                    values: e
                                }), h = new m();
                                var l, _, u, p = e.values,
                                    f = p.length - 1,
                                    c = [],
                                    d = {};
                                if (0 > f) return o;
                                for (l = 0; f >= l; l++) u = i(t, p[l], a, o, h, f !== l), c[l] = u.end;
                                for (_ in e) d[_] = e[_];
                                return d.values = c, o = new r(t, "bezier", 0, 0, u.pt, 2), o.data = u, o.plugin = h, o.setRatio = s, 0 === d.autoRotate && (d.autoRotate = !0), !d.autoRotate || d.autoRotate instanceof Array || (l = d.autoRotate === !0 ? 0 : Number(d.autoRotate), d.autoRotate = null != u.end.left ? [
                                    [X2, "top", "rotation", l, !1]
                                ] : null != u.end.x ? [
                                    ["x", "y", W2, l, !1]
                                ] : !1), d.autoRotate && (a._transform || a._enableTransforms(!1), u.autoRotate = a._target._gsTransform), h._onInitTween(u.proxy, d, a._tween), o;
                            }
                        });
                    }
                }, d._roundProps = function (t, e) {
                    for (var i = this._overwriteProps, s = i.length; --s > -1;)(t[i[s]] || t.bezier || t.bezierThrough) && (this._round[i[s]] = e);
                }, d._kill = function (t) {
                    var e, i, s = this._props;
                    for (e in this._beziers)
                        if (e in t)
                            for (delete this._beziers[e], delete this._func[e], i = s.length; --i > -1;) s[i] === e && s.splice(i, 1);
                    return this._super._kill.call(this, t);
                };
            }(), _gsScope._gsDefine(L2, ["plugins.TweenPlugin", "TweenLite"], function (t, e) {
                var K36 = "bezier,thro";
                K36 += "wProps,physicsProps";
                K36 += ",physics2D";
                var a36 = "clearP";
                a36 += "rops";
                var s36 = "op";
                s36 += "acit";
                s36 += "y,alpha,a";
                s36 += "utoAlpha";
                var W36 = "bo";
                W36 += "rderWid";
                W36 += "th";
                var i36 = "0";
                i36 += "px solid #000";
                var p36 = "0px";
                p36 += " 0p";
                p36 += "x 0px";
                p36 += " #999";
                var S36 = "textS";
                S36 += "hadow";
                var F36 = "re";
                F36 += "c";
                F36 += "t(0px,0px,";
                F36 += "0px,0px)";
                var t36 = "p";
                t36 += "ad";
                t36 += "ding";
                var f36 = "marginTop,mar";
                f36 += "gi";
                f36 += "nRight,marginBottom,marginLeft";
                var Q36 = "us";
                Q36 += "erSel";
                Q36 += "ect";
                var Y06 = "backfac";
                Y06 += "eVi";
                Y06 += "s";
                Y06 += "ibility";
                var O06 = "tra";
                O06 += "nsformS";
                O06 += "tyle";
                var J06 = "0";
                J06 += " 0";
                var m06 = "b";
                m06 += "ac";
                m06 += "kgroundS";
                m06 += "ize";
                var C06 = "0";
                C06 += " 0";
                var T06 = "back";
                T06 += "grou";
                T06 += "ndPosi";
                T06 += "tion";
                var D06 = "0px 0px 0";
                D06 += "px 0px";
                var K06 = "0px 0px 0px 0px #";
                K06 += "999";
                var H76 = "transfo";
                H76 += "r";
                H76 += "m";
                H76 += "Origin";
                var K76 = "tr";
                K76 += "ansfo";
                K76 += "rm";
                var a76 = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPerc";
                a76 += "ent";
                var q76 = "x";
                q76 += "s";
                var s76 = "\\";
                s76 += "b";
                var w76 = "(?:\\";
                w76 += "b(?:(?:rg";
                w76 += "b|rgba|hsl|hsla)\\(.+?\\))|";
                w76 += "\\B#.+?\\b";
                var f76 = "margin";
                f76 += "Bot";
                f76 += "tom";
                var Q76 = "ma";
                Q76 += "rginTo";
                Q76 += "p";
                var Y2 = "mar";
                Y2 += "ginR";
                Y2 += "ight";
                var O2 = "T";
                O2 += "o";
                O2 += "p";
                var J2 = "L";
                J2 += "e";
                J2 += "ft";
                var e2 = "i";
                e2 += "m";
                e2 += "g";
                var s2 = "di";
                s2 += "v";
                var w2 = "p";
                w2 += "x";
                var B2 = "compensate";
                B2 += "d";
                var x2 = "1";
                x2 += ".16.1";
                var i, s, r, n, a = function () {
                        var d2 = "c";
                        d2 += "ss";
                        t.call(this, d2), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio;
                    },
                    o = _gsScope._gsDefine.globals,
                    h = {},
                    l = a.prototype = new t("css");
                l.constructor = a, a.version = x2, a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = B2, l = w2, a.suffixMap = {
                    top: l,
                    right: l,
                    bottom: l,
                    left: l,
                    width: l,
                    height: l,
                    fontSize: l,
                    padding: l,
                    margin: l,
                    perspective: l,
                    lineHeight: ""
                };
                var _, u, p, f, c, m, d = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                    g = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    y = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    T = /(?:\d|\-|\+|=|#|\.)*/g,
                    w = /opacity *= *([^)]*)/i,
                    x = /opacity:([^;]*)/i,
                    b = /alpha\(opacity *=.+?\)/i,
                    P = /^(rgb|hsl)/,
                    S = /([A-Z])/g,
                    k = /-([a-z])/gi,
                    R = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    A = function (t, e) {
                        return e.toUpperCase();
                    },
                    O = /(?:Left|Right|Width)/i,
                    C = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    D = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    M = /,(?=[^\)]*(?:\(|$))/gi,
                    z = Math.PI / 180,
                    I = 180 / Math.PI,
                    F = {},
                    E = document,
                    N = function (t) {
                        return E.createElementNS ? E.createElementNS("http://www.w3.org/1999/xhtml", t) : E.createElement(t);
                    },
                    L = N(s2),
                    X = N(e2),
                    U = a._internals = {
                        _specialProps: h
                    },
                    Y = navigator.userAgent,
                    j = function () {
                        var U2 = "top:1p";
                        U2 += "x;opaci";
                        U2 += "ty:.55;";
                        var N2 = "Fi";
                        N2 += "ref";
                        N2 += "ox";
                        var u2 = "Versio";
                        u2 += "n/";
                        var A2 = "S";
                        A2 += "afa";
                        A2 += "r";
                        A2 += "i";
                        var t = Y.indexOf("Android"),
                            e = N("a");
                        return p = -1 !== Y.indexOf(A2) && -1 === Y.indexOf("Chrome") && (-1 === t || Number(Y.substr(t + 8, 1)) > 3), c = p && 6 > Number(Y.substr(Y.indexOf(u2) + 8, 1)), f = -1 !== Y.indexOf(N2), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Y) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Y)) && (m = parseFloat(RegExp.$1)), e ? (e.style.cssText = U2, /^0.55/.test(e.style.opacity)) : !1;
                    }(),
                    B = function (t) {
                        var h2 = "s";
                        h2 += "tring";
                        return w.test(h2 == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1;
                    },
                    q = function (t) {
                        window.console && console.log(t);
                    },
                    V = "",
                    G = "",
                    W = function (t, e) {
                        var q2 = "m";
                        q2 += "s";
                        var R2 = "m";
                        R2 += "s";
                        var k2 = "M";
                        k2 += "o";
                        k2 += "z";
                        e = e || L;
                        var i, s, r = e.style;
                        if (void 0 !== r[t]) return t;
                        for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", k2, R2, "Ms", "Webkit"], s = 5; --s > -1 && void 0 === r[i[s] + t];);
                        return s >= 0 ? (G = 3 === s ? q2 : i[s], V = "-" + G.toLowerCase() + "-", G + t) : null;
                    },
                    Z = E.defaultView ? E.defaultView.getComputedStyle : function () {},
                    Q = a.getStyle = function (t, e, i, s, r) {
                        var Z2 = "au";
                        Z2 += "to";
                        var V2 = "n";
                        V2 += "o";
                        V2 += "n";
                        V2 += "e";
                        var n2 = "op";
                        n2 += "ac";
                        n2 += "it";
                        n2 += "y";
                        var n;
                        return j || n2 !== e ? (!s && t.style[e] ? n = t.style[e] : (i = i || Z(t)) ? n = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(S, "-$1").toLowerCase()) : t.currentStyle && (n = t.currentStyle[e]), null == r || n && V2 !== n && Z2 !== n && "auto auto" !== n ? n : r) : B(t);
                    },
                    $ = U.convertToPixels = function (t, i, s, r, n) {
                        var M2 = "p";
                        M2 += "x";
                        if (M2 === r || !r) return s;
                        if ("auto" === r || !s) return 0;
                        var o, h, l, _ = O.test(i),
                            u = t,
                            p = L.style,
                            f = 0 > s;
                        if (f && (s = -s), "%" === r && -1 !== i.indexOf("border")) o = s / 100 * (_ ? t.clientWidth : t.clientHeight);
                        else {
                            var K2 = "bo";
                            K2 += "r";
                            K2 += "de";
                            K2 += "rTopWidth";
                            var a2 = "borderLeftWidt";
                            a2 += "h";
                            var E2 = ";li";
                            E2 += "ne";
                            E2 += "-height:0";
                            E2 += ";";
                            var y2 = "pos";
                            y2 += "i";
                            y2 += "tio";
                            y2 += "n";
                            if (p.cssText = "border:0 solid red;position:" + Q(t, y2) + E2, "%" !== r && u.appendChild) p[_ ? a2 : K2] = s + r;
                            else {
                                if (u = t.parentNode || E.body, h = u._gsCache, l = e.ticker.frame, h && _ && h.time === l) return h.width * s / 100;
                                p[_ ? "width" : "height"] = s + r;
                            }
                            u.appendChild(L), o = parseFloat(L[_ ? "offsetWidth" : "offsetHeight"]), u.removeChild(L), _ && "%" === r && a.cacheWidths !== !1 && (h = u._gsCache = u._gsCache || {}, h.time = l, h.width = 100 * (o / s)), 0 !== o || n || (o = $(t, i, s, r, !0));
                        }
                        return f ? -o : o;
                    },
                    H = U.calculateOffset = function (t, e, i) {
                        var r2 = "offs";
                        r2 += "et";
                        var b2 = "m";
                        b2 += "a";
                        b2 += "rg";
                        b2 += "in";
                        var c2 = "T";
                        c2 += "o";
                        c2 += "p";
                        var H2 = "L";
                        H2 += "e";
                        H2 += "f";
                        H2 += "t";
                        if ("absolute" !== Q(t, "position", i)) return 0;
                        var s = "left" === e ? H2 : c2,
                            r = Q(t, b2 + s, i);
                        return t[r2 + s] - ($(t, e, parseFloat(r), r.replace(T, "")) || 0);
                    },
                    K = function (t, e) {
                        var T2 = "st";
                        T2 += "ring";
                        var D2 = "-t";
                        D2 += "ransform";
                        var i, s, r, n = {};
                        if (e = e || Z(t, null))
                            if (i = e.length)
                                for (; --i > -1;) r = e[i], (-1 === r.indexOf(D2) || be === r) && (n[r.replace(k, A)] = e.getPropertyValue(r));
                            else
                                for (i in e)(-1 === i.indexOf("Transform") || xe === i) && (n[i] = e[i]);
                        else if (e = t.currentStyle || t.style)
                            for (i in e) T2 == typeof i && void 0 === n[i] && (n[i.replace(k, A)] = e[i]);
                        return j || (n.opacity = B(t)), s = Me(t, e, !1), n.rotation = s.rotation, n.skewX = s.skewX, n.scaleX = s.scaleX, n.scaleY = s.scaleY, n.x = s.x, n.y = s.y, Se && (n.z = s.z, n.rotationX = s.rotationX, n.rotationY = s.rotationY, n.scaleZ = s.scaleZ), n.filters && delete n.filters, n;
                    },
                    J = function (t, e, i, s, r) {
                        var m2 = "class";
                        m2 += "Nam";
                        m2 += "e";
                        var P2 = "t";
                        P2 += "o";
                        P2 += "p";
                        var j2 = "l";
                        j2 += "eft";
                        var g2 = "s";
                        g2 += "tr";
                        g2 += "ing";
                        var v2 = "num";
                        v2 += "ber";
                        var C2 = "len";
                        C2 += "gt";
                        C2 += "h";
                        var n, a, o, h = {},
                            l = t.style;
                        for (a in i) "cssText" !== a && C2 !== a && isNaN(a) && (e[a] !== (n = i[a]) || r && r[a]) && -1 === a.indexOf("Origin") && (v2 == typeof n || g2 == typeof n) && (h[a] = "auto" !== n || j2 !== a && P2 !== a ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[a] || "" === e[a].replace(y, "") ? n : 0 : H(t, a), void 0 !== l[a] && (o = new fe(l, a, l[a], o)));
                        if (s)
                            for (a in s) m2 !== a && (h[a] = s[a]);
                        return {
                            difs: h,
                            firstMPT: o
                        };
                    },
                    te = {
                        width: [J2, "Right"],
                        height: [O2, "Bottom"]
                    },
                    ee = ["marginLeft", Y2, Q76, f76],
                    ie = function (t, e, i) {
                        var F76 = "Wi";
                        F76 += "dt";
                        F76 += "h";
                        var t76 = "w";
                        t76 += "id";
                        t76 += "th";
                        var s = parseFloat(t76 === e ? t.offsetWidth : t.offsetHeight),
                            r = te[e],
                            n = r.length;
                        for (i = i || Z(t, null); --n > -1;) s -= parseFloat(Q(t, "padding" + r[n], i, !0)) || 0, s -= parseFloat(Q(t, "border" + r[n] + F76, i, !0)) || 0;
                        return s;
                    },
                    se = function (t, e) {
                        var l76 = "c";
                        l76 += "en";
                        l76 += "t";
                        l76 += "er";
                        var z76 = "b";
                        z76 += "o";
                        z76 += "ttom";
                        var G76 = "t";
                        G76 += "o";
                        G76 += "p";
                        var i76 = "10";
                        i76 += "0%";
                        var p76 = "r";
                        p76 += "ig";
                        p76 += "h";
                        p76 += "t";
                        var S76 = "l";
                        S76 += "e";
                        S76 += "f";
                        S76 += "t";
                        var I76 = "a";
                        I76 += "uto a";
                        I76 += "uto";
                        (null == t || "" === t || "auto" === t || I76 === t) && (t = "0 0");
                        var i = t.split(" "),
                            s = -1 !== t.indexOf(S76) ? "0%" : -1 !== t.indexOf(p76) ? i76 : i[0],
                            r = -1 !== t.indexOf(G76) ? "0%" : -1 !== t.indexOf(z76) ? "100%" : i[1];
                        return null == r ? r = "center" === s ? "50%" : "0" : l76 === r && (r = "50%"), ("center" === s || isNaN(parseFloat(s)) && -1 === (s + "").indexOf("=")) && (s = "50%"), t = s + " " + r + (i.length > 2 ? " " + i[2] : ""), e && (e.oxp = -1 !== s.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === s.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(s.replace(y, "")), e.oy = parseFloat(r.replace(y, "")), e.v = t), e || t;
                    },
                    re = function (t, e) {
                        var o76 = "st";
                        o76 += "rin";
                        o76 += "g";
                        return o76 == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e);
                    },
                    ne = function (t, e) {
                        return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t);
                    },
                    ae = function (t, e, i, s) {
                        var d76 = "_c";
                        d76 += "w";
                        var L76 = "sho";
                        L76 += "r";
                        L76 += "t";
                        var W76 = "r";
                        W76 += "a";
                        W76 += "d";
                        var X76 = "n";
                        X76 += "um";
                        X76 += "be";
                        X76 += "r";
                        var r, n, a, o, h, l = 1e-6;
                        return null == t ? o = e : X76 == typeof t ? o = t : (r = 360, n = t.split("_"), h = "=" === t.charAt(1), a = (h ? parseInt(t.charAt(0) + "1", 10) * parseFloat(n[0].substr(2)) : parseFloat(n[0])) * (-1 === t.indexOf(W76) ? 1 : I) - (h ? 0 : e), n.length && (s && (s[i] = e + a), -1 !== t.indexOf(L76) && (a %= r, a !== a % (r / 2) && (a = 0 > a ? a + r : a - r)), -1 !== t.indexOf(d76) && 0 > a ? a = (a + 9999999999 * r) % r - (0 | a / r) * r : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * r) % r - (0 | a / r) * r)), o = e + a), l > o && o > -l && (o = 0), o;
                    },
                    oe = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    he = function (t, e, i) {
                        return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5;
                    },
                    le = a.parseColor = function (t) {
                        var B76 = "h";
                        B76 += "sl";
                        var x76 = "n";
                        x76 += "u";
                        x76 += "m";
                        x76 += "ber";
                        var e, i, s, r, n, a;
                        return t && "" !== t ? x76 == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), oe[t] ? oe[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), s = t.charAt(3), t = "#" + e + e + i + i + s + s), t = parseInt(t.substr(1), 16), [t >> 16, 255 & t >> 8, 255 & t]) : B76 === t.substr(0, 3) ? (t = t.match(d), r = Number(t[0]) % 360 / 360, n = Number(t[1]) / 100, a = Number(t[2]) / 100, i = .5 >= a ? a * (n + 1) : a + n - a * n, e = 2 * a - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = he(r + 1 / 3, e, i), t[1] = he(r, e, i), t[2] = he(r - 1 / 3, e, i), t) : (t = t.match(d) || oe.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : oe.black;
                    },
                    _e = w76;
                for (l in oe) _e += "|" + l + s76;
                _e = RegExp(_e + ")", "gi");
                var ue = function (t, e, i, s) {
                        if (null == t) return function (t) {
                            return t;
                        };
                        var r, n = e ? (t.match(_e) || [""])[0] : "",
                            a = t.split(n).join("").match(v) || [],
                            o = t.substr(0, t.indexOf(a[0])),
                            h = ")" === t.charAt(t.length - 1) ? ")" : "",
                            l = -1 !== t.indexOf(" ") ? " " : ",",
                            _ = a.length,
                            u = _ > 0 ? a[0].replace(d, "") : "";
                        return _ ? r = e ? function (t) {
                            var e76 = "i";
                            e76 += "n";
                            e76 += "s";
                            e76 += "et";
                            var e, p, f, c;
                            if ("number" == typeof t) t += u;
                            else if (s && M.test(t)) {
                                for (c = t.replace(M, "|").split("|"), f = 0; c.length > f; f++) c[f] = r(c[f]);
                                return c.join(",");
                            }
                            if (e = (t.match(_e) || [n])[0], p = t.split(e).join("").match(v) || [], f = p.length, _ > f--)
                                for (; _ > ++f;) p[f] = i ? p[0 | (f - 1) / 2] : a[f];
                            return o + p.join(l) + l + e + h + (-1 !== t.indexOf(e76) ? " inset" : "");
                        } : function (t) {
                            var e, n, p;
                            if ("number" == typeof t) t += u;
                            else if (s && M.test(t)) {
                                for (n = t.replace(M, "|").split("|"), p = 0; n.length > p; p++) n[p] = r(n[p]);
                                return n.join(",");
                            }
                            if (e = t.match(v) || [], p = e.length, _ > p--)
                                for (; _ > ++p;) e[p] = i ? e[0 | (p - 1) / 2] : a[p];
                            return o + e.join(l) + h;
                        } : function (t) {
                            return t;
                        };
                    },
                    pe = function (t) {
                        return t = t.split(","),
                            function (e, i, s, r, n, a, o) {
                                var h, l = (i + "").split(" ");
                                for (o = {}, h = 0; 4 > h; h++) o[t[h]] = l[h] = l[h] || l[(h - 1) / 2 >> 0];
                                return r.parse(e, o, n, a);
                            };
                    },
                    fe = (U._setPluginRatio = function (t) {
                        this.plugin.setRatio(t);
                        for (var e, i, s, r, n = this.data, a = n.proxy, o = n.firstMPT, h = 1e-6; o;) e = a[o.v], o.r ? e = Math.round(e) : h > e && e > -h && (e = 0), o.t[o.p] = e, o = o._next;
                        if (n.autoRotate && (n.autoRotate.rotation = a.rotation), 1 === t)
                            for (o = n.firstMPT; o;) {
                                if (i = o.t, i.type) {
                                    if (1 === i.type) {
                                        for (r = i.xs0 + i.s + i.xs1, s = 1; i.l > s; s++) r += i["xn" + s] + i["xs" + (s + 1)];
                                        i.e = r;
                                    }
                                } else i.e = i.s + i.xs0;
                                o = o._next;
                            }
                    }, function (t, e, i, s, r) {
                        this.t = t, this.p = e, this.v = i, this.r = r, s && (s._prev = this, this._next = s);
                    }),
                    ce = (U._parseToProxy = function (t, e, i, s, r, n) {
                        var a, o, h, l, _, u = s,
                            p = {},
                            f = {},
                            c = i._transform,
                            m = F;
                        for (i._transform = null, F = e, s = _ = i.parse(t, e, s, r), F = m, n && (i._transform = c, u && (u._prev = null, u._prev && (u._prev._next = null))); s && s !== u;) {
                            if (1 >= s.type && (o = s.p, f[o] = s.s + s.c, p[o] = s.s, n || (l = new fe(s, "s", o, l, s.r), s.c = 0), 1 === s.type))
                                for (a = s.l; --a > 0;) h = "xn" + a, o = s.p + "_" + h, f[o] = s.data[h], p[o] = s[h], n || (l = new fe(s, h, o, l, s.rxp[h]));
                            s = s._next;
                        }
                        return {
                            proxy: p,
                            end: f,
                            firstMPT: l,
                            pt: _
                        };
                    }, U.CSSPropTween = function (t, e, s, r, a, o, h, l, _, u, p) {
                        this.t = t, this.p = e, this.s = s, this.c = r, this.n = h || e, t instanceof ce || n.push(this.n), this.r = l, this.type = o || 0, _ && (this.pr = _, i = !0), this.b = void 0 === u ? s : u, this.e = void 0 === p ? s + r : p, a && (this._next = a, a._prev = this);
                    }),
                    me = a.parseComplex = function (t, e, i, s, r, n, a, o, h, l) {
                        var h76 = "r";
                        h76 += "g";
                        h76 += "b(";
                        var U76 = "tran";
                        U76 += "sparent";
                        var N76 = " tr";
                        N76 += "ansparent";
                        var u76 = "p";
                        u76 += "x";
                        var A76 = ",";
                        A76 += " ";
                        i = i || n || "", a = new ce(t, e, 0, 0, a, l ? 2 : 1, null, !1, o, i, s), s += "";
                        var u, p, f, c, m, v, y, T, w, x, b, S, k = i.split(", ").join(",").split(" "),
                            R = s.split(", ").join(",").split(" "),
                            A = k.length,
                            O = _ !== !1;
                        for ((-1 !== s.indexOf(",") || -1 !== i.indexOf(",")) && (k = k.join(" ").replace(M, A76).split(" "), R = R.join(" ").replace(M, ", ").split(" "), A = k.length), A !== R.length && (k = (n || "").split(" "), A = k.length), a.plugin = h, a.setRatio = l, u = 0; A > u; u++)
                            if (c = k[u], m = R[u], T = parseFloat(c), T || 0 === T) a.appendXtra("", T, re(m, T), m.replace(g, ""), O && -1 !== m.indexOf(u76), !0);
                            else if (r && ("#" === c.charAt(0) || oe[c] || P.test(c))) S = "," === m.charAt(m.length - 1) ? ")," : ")", c = le(c), m = le(m), w = c.length + m.length > 6, w && !j && 0 === m[3] ? (a["xs" + a.l] += a.l ? N76 : U76, a.e = a.e.split(R[u]).join("transparent")) : (j || (w = !1), a.appendXtra(w ? "rgba(" : h76, c[0], m[0] - c[0], ",", !0, !0).appendXtra("", c[1], m[1] - c[1], ",", !0).appendXtra("", c[2], m[2] - c[2], w ? "," : S, !0), w && (c = 4 > c.length ? 1 : c[3], a.appendXtra("", c, (4 > m.length ? 1 : m[3]) - c, S, !1)));
                        else if (v = c.match(d)) {
                            var k76 = "x";
                            k76 += "s";
                            if (y = m.match(g), !y || y.length !== v.length) return a;
                            for (f = 0, p = 0; v.length > p; p++) b = v[p], x = c.indexOf(b, f), a.appendXtra(c.substr(f, x - f), Number(b), re(y[p], b), "", O && "px" === c.substr(x + b.length, 2), 0 === p), f = x + b.length;
                            a[k76 + a.l] += c.substr(f);
                        } else a["xs" + a.l] += a.l ? " " + c : c;
                        if (-1 !== s.indexOf("=") && a.data) {
                            var R76 = "x";
                            R76 += "n";
                            for (S = a.xs0 + a.data.s, u = 1; a.l > u; u++) S += a["xs" + u] + a.data[R76 + u];
                            a.e = S + a["xs" + u];
                        }
                        return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a;
                    },
                    de = 9;
                for (l = ce.prototype, l.l = l.pr = 0; --de > 0;) l["xn" + de] = 0, l[q76 + de] = "";
                l.xs0 = "", l._next = l._prev = l.xfirst = l.data = l.plugin = l.setRatio = l.rxp = null, l.appendXtra = function (t, e, i, s, r, n) {
                    var y76 = "x";
                    y76 += "s";
                    var M76 = "x";
                    M76 += "n";
                    var Z76 = "x";
                    Z76 += "n";
                    var V76 = "x";
                    V76 += "n";
                    var n76 = "x";
                    n76 += "s";
                    var a = this,
                        o = a.l;
                    return a["xs" + o] += n && o ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a[n76 + a.l] = s || "", o > 0 ? (a.data[V76 + o] = e + i, a.rxp[Z76 + o] = r, a[M76 + o] = e, a.plugin || (a.xfirst = new ce(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, r, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
                        s: e + i
                    }, a.rxp = {}, a.s = e, a.c = i, a.r = r, a)) : (a[y76 + o] += e + (s || ""), a);
                };
                var ge = function (t, e) {
                        e = e || {}, this.p = e.prefix ? W(t) || t : t, h[t] = h[this.p] = this, this.format = e.formatter || ue(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0;
                    },
                    ve = U._registerComplexSpecialProp = function (t, e, i) {
                        var E76 = "o";
                        E76 += "bjec";
                        E76 += "t";
                        E76 != typeof e && (e = {
                            parser: i
                        });
                        var s, r, n = t.split(","),
                            a = e.defaultValue;
                        for (i = i || [a], s = 0; n.length > s; s++) e.prefix = 0 === s && e.prefix, e.defaultValue = i[s] || a, r = new ge(n[s], e);
                    },
                    ye = function (t) {
                        if (!h[t]) {
                            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                            ve(t, {
                                parser: function (t, i, s, r, n, a, l) {
                                    var _ = o.com.greensock.plugins[e];
                                    return _ ? (_._cssRegister(), h[s].parse(t, i, s, r, n, a, l)) : (q("Error: " + e + " js file not loaded."), n);
                                }
                            });
                        }
                    };
                l = ge.prototype, l.parseComplex = function (t, e, i, s, r, n) {
                    var a, o, h, l, _, u, p = this.keyword;
                    if (this.multi && (M.test(i) || M.test(e) ? (o = e.replace(M, "|").split("|"), h = i.replace(M, "|").split("|")) : p && (o = [e], h = [i])), h) {
                        for (l = h.length > o.length ? h.length : o.length, a = 0; l > a; a++) e = o[a] = o[a] || this.dflt, i = h[a] = h[a] || this.dflt, p && (_ = e.indexOf(p), u = i.indexOf(p), _ !== u && (-1 === u ? o[a] = o[a].split(p).join("") : -1 === _ && (o[a] += " " + p)));
                        e = o.join(", "), i = h.join(", ");
                    }
                    return me(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, r, n);
                }, l.parse = function (t, e, i, s, n, a) {
                    return this.parseComplex(t.style, this.format(Q(t, this.p, r, !1, this.dflt)), this.format(e), n, a);
                }, a.registerSpecialProp = function (t, e, i) {
                    ve(t, {
                        parser: function (t, s, r, n, a, o) {
                            var h = new ce(t, r, 0, 0, a, 2, r, !1, i);
                            return h.plugin = o, h.setRatio = e(t, s, n._tween, r), h;
                        },
                        priority: i
                    });
                }, a.useSVGTransformAttr = p;
                var Te, we = a76.split(","),
                    xe = W("transform"),
                    be = V + K76,
                    Pe = W(H76),
                    Se = null !== W("perspective"),
                    ke = U.Transform = function () {
                        var c76 = "a";
                        c76 += "u";
                        c76 += "t";
                        c76 += "o";
                        this.perspective = parseFloat(a.defaultTransformPerspective) || 0, this.force3D = a.defaultForce3D !== !1 && Se ? a.defaultForce3D || c76 : !1;
                    },
                    Re = window.SVGElement,
                    Ae = function (t, e, i) {
                        var b76 = "$";
                        b76 += "1";
                        b76 += "-";
                        b76 += "$2";
                        var s, r = E.createElementNS("http://www.w3.org/2000/svg", t),
                            n = /([a-z])([A-Z])/g;
                        for (s in i) r.setAttributeNS(null, s.replace(n, b76).toLowerCase(), i[s]);
                        return e.appendChild(r), r;
                    },
                    Oe = E.documentElement,
                    Ce = function () {
                        var D76 = "re";
                        D76 += "c";
                        D76 += "t";
                        var r76 = "s";
                        r76 += "v";
                        r76 += "g";
                        var t, e, i, s = m || /Android/i.test(Y) && !window.chrome;
                        return E.createElementNS && !s && (t = Ae(r76, Oe), e = Ae(D76, t, {
                            width: 100,
                            height: 50,
                            x: 100
                        }), i = e.getBoundingClientRect().width, e.style[Pe] = "50% 50%", e.style[xe] = "scaleX(0.5)", s = i === e.getBoundingClientRect().width && !(f && Se), Oe.removeChild(t)), s;
                    }(),
                    De = function (t, e, i, s) {
                        var r, n;
                        s && (n = s.split(" ")).length || (r = t.getBBox(), e = se(e).split(" "), n = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * r.width : parseFloat(e[0])) + r.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * r.height : parseFloat(e[1])) + r.y]), i.xOrigin = parseFloat(n[0]), i.yOrigin = parseFloat(n[1]), t.setAttribute("data-svg-origin", n.join(" "));
                    },
                    Me = U.getTransform = function (t, e, i, s) {
                        var m76 = "tra";
                        m76 += "nsform";
                        var P76 = "mat";
                        P76 += "rix";
                        var j76 = "tr";
                        j76 += "ans";
                        j76 += "fo";
                        j76 += "rm";
                        var g76 = "da";
                        g76 += "ta-svg-o";
                        g76 += "rigin";
                        var v76 = "matri";
                        v76 += "x";
                        var C76 = "matrix(1, 0, ";
                        C76 += "0, 1, 0, 0)";
                        var T76 = "0";
                        T76 += " ";
                        T76 += "0";
                        T76 += " 0";
                        if (t._gsTransform && i && !s) return t._gsTransform;
                        var n, o, h, l, _, u, p, f, c, m, d = i ? t._gsTransform || new ke() : new ke(),
                            g = 0 > d.scaleX,
                            v = 2e-5,
                            y = 1e5,
                            T = Se ? parseFloat(Q(t, Pe, e, !1, T76).split(" ")[2]) || d.zOrigin || 0 : 0,
                            w = parseFloat(a.defaultTransformPerspective) || 0;
                        if (xe ? o = Q(t, be, e, !0) : t.currentStyle && (o = t.currentStyle.filter.match(C), o = o && 4 === o.length ? [o[0].substr(4), Number(o[2].substr(4)), Number(o[1].substr(4)), o[3].substr(4), d.x || 0, d.y || 0].join(",") : ""), n = !o || "none" === o || C76 === o, d.svg = !!(Re && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM)), d.svg && (n && -1 !== (t.style[xe] + "").indexOf(v76) && (o = t.style[xe], n = !1), De(t, Q(t, Pe, r, !1, "50% 50%") + "", d, t.getAttribute(g76)), Te = a.useSVGTransformAttr || Ce, h = t.getAttribute(j76), n && h && -1 !== h.indexOf(P76) && (o = h, n = 0)), !n) {
                            for (h = (o || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], l = h.length; --l > -1;) _ = Number(h[l]), h[l] = (u = _ - (_ |= 0)) ? (0 | u * y + (0 > u ? -.5 : .5)) / y + _ : _;
                            if (16 === h.length) {
                                var x, b, P, S, k, R = h[0],
                                    A = h[1],
                                    O = h[2],
                                    D = h[3],
                                    M = h[4],
                                    z = h[5],
                                    F = h[6],
                                    E = h[7],
                                    N = h[8],
                                    L = h[9],
                                    X = h[10],
                                    U = h[12],
                                    Y = h[13],
                                    j = h[14],
                                    B = h[11],
                                    q = Math.atan2(F, X);
                                d.zOrigin && (j = -d.zOrigin, U = N * j - h[12], Y = L * j - h[13], j = X * j + d.zOrigin - h[14]), d.rotationX = q * I, q && (S = Math.cos(-q), k = Math.sin(-q), x = M * S + N * k, b = z * S + L * k, P = F * S + X * k, N = M * -k + N * S, L = z * -k + L * S, X = F * -k + X * S, B = E * -k + B * S, M = x, z = b, F = P), q = Math.atan2(N, X), d.rotationY = q * I, q && (S = Math.cos(-q), k = Math.sin(-q), x = R * S - N * k, b = A * S - L * k, P = O * S - X * k, L = A * k + L * S, X = O * k + X * S, B = D * k + B * S, R = x, A = b, O = P), q = Math.atan2(A, R), d.rotation = q * I, q && (S = Math.cos(-q), k = Math.sin(-q), R = R * S + M * k, b = A * S + z * k, z = A * -k + z * S, F = O * -k + F * S, A = b), d.rotationX && Math.abs(d.rotationX) + Math.abs(d.rotation) > 359.9 && (d.rotationX = d.rotation = 0, d.rotationY += 180), d.scaleX = (0 | Math.sqrt(R * R + A * A) * y + .5) / y, d.scaleY = (0 | Math.sqrt(z * z + L * L) * y + .5) / y, d.scaleZ = (0 | Math.sqrt(F * F + X * X) * y + .5) / y, d.skewX = 0, d.perspective = B ? 1 / (0 > B ? -B : B) : 0, d.x = U, d.y = Y, d.z = j, d.svg && (d.x -= d.xOrigin - (d.xOrigin * R - d.yOrigin * M), d.y -= d.yOrigin - (d.yOrigin * A - d.xOrigin * z));
                            } else if (!(Se && !s && h.length && d.x === h[4] && d.y === h[5] && (d.rotationX || d.rotationY) || void 0 !== d.x && "none" === Q(t, "display", e))) {
                                var V = h.length >= 6,
                                    G = V ? h[0] : 1,
                                    W = h[1] || 0,
                                    Z = h[2] || 0,
                                    $ = V ? h[3] : 1;
                                d.x = h[4] || 0, d.y = h[5] || 0, p = Math.sqrt(G * G + W * W), f = Math.sqrt($ * $ + Z * Z), c = G || W ? Math.atan2(W, G) * I : d.rotation || 0, m = Z || $ ? Math.atan2(Z, $) * I + c : d.skewX || 0, Math.abs(m) > 90 && 270 > Math.abs(m) && (g ? (p *= -1, m += 0 >= c ? 180 : -180, c += 0 >= c ? 180 : -180) : (f *= -1, m += 0 >= m ? 180 : -180)), d.scaleX = p, d.scaleY = f, d.rotation = c, d.skewX = m, Se && (d.rotationX = d.rotationY = d.z = 0, d.perspective = w, d.scaleZ = 1), d.svg && (d.x -= d.xOrigin - (d.xOrigin * G - d.yOrigin * W), d.y -= d.yOrigin - (d.yOrigin * $ - d.xOrigin * Z));
                            }
                            d.zOrigin = T;
                            for (l in d) v > d[l] && d[l] > -v && (d[l] = 0);
                        }
                        return i && (t._gsTransform = d, d.svg && (Te && t.style[xe] ? Ee(t.style, xe) : !Te && t.getAttribute("transform") && t.removeAttribute(m76))), d;
                    },
                    ze = function (t) {
                        var e, i, s = this.data,
                            r = -s.rotation * z,
                            n = r + s.skewX * z,
                            a = 1e5,
                            o = (0 | Math.cos(r) * s.scaleX * a) / a,
                            h = (0 | Math.sin(r) * s.scaleX * a) / a,
                            l = (0 | Math.sin(n) * -s.scaleY * a) / a,
                            _ = (0 | Math.cos(n) * s.scaleY * a) / a,
                            u = this.t.style,
                            p = this.t.currentStyle;
                        if (p) {
                            var I06 = "f";
                            I06 += "il";
                            I06 += "t";
                            I06 += "er";
                            var F06 = "A";
                            F06 += "l";
                            F06 += "ph";
                            F06 += "a";
                            var t06 = "gr";
                            t06 += "adient(";
                            var f06 = ", ";
                            f06 += "D";
                            f06 += "x";
                            f06 += "=";
                            var Q06 = ", M2";
                            Q06 += "2";
                            Q06 += "=";
                            var Y76 = ", ";
                            Y76 += "M2";
                            Y76 += "1=";
                            var O76 = ",";
                            O76 += " ";
                            O76 += "M12";
                            O76 += "=";
                            var J76 = "progid:DXImageT";
                            J76 += "ransform.Microsoft.Matrix";
                            J76 += "(M11=";
                            i = h, h = -l, l = -i, e = p.filter, u.filter = "";
                            var f, c, d = this.t.offsetWidth,
                                g = this.t.offsetHeight,
                                v = "absolute" !== p.position,
                                y = J76 + o + O76 + h + Y76 + l + Q06 + _,
                                x = s.x + d * s.xPercent / 100,
                                b = s.y + g * s.yPercent / 100;
                            if (null != s.ox && (f = (s.oxp ? .01 * d * s.ox : s.ox) - d / 2, c = (s.oyp ? .01 * g * s.oy : s.oy) - g / 2, x += f - (f * o + c * h), b += c - (f * l + c * _)), v ? (f = d / 2, c = g / 2, y += f06 + (f - (f * o + c * h) + x) + ", Dy=" + (c - (f * l + c * _) + b) + ")") : y += ", sizingMethod='auto expand')", u.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(D, y) : y + " " + e, (0 === t || 1 === t) && 1 === o && 0 === h && 0 === l && 1 === _ && (v && -1 === y.indexOf("Dx=0, Dy=0") || w.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(t06 && e.indexOf(F06)) && u.removeAttribute(I06)), !v) {
                                var S06 = "p";
                                S06 += "x";
                                var P, S, k, R = 8 > m ? 1 : -1;
                                for (f = s.ieOffsetX || 0, c = s.ieOffsetY || 0, s.ieOffsetX = Math.round((d - ((0 > o ? -o : o) * d + (0 > h ? -h : h) * g)) / 2 + x), s.ieOffsetY = Math.round((g - ((0 > _ ? -_ : _) * g + (0 > l ? -l : l) * d)) / 2 + b), de = 0; 4 > de; de++) S = ee[de], P = p[S], i = -1 !== P.indexOf(S06) ? parseFloat(P) : $(this.t, S, parseFloat(P), P.replace(T, "")) || 0, k = i !== s[S] ? 2 > de ? -s.ieOffsetX : -s.ieOffsetY : 2 > de ? f - s.ieOffsetX : c - s.ieOffsetY, u[S] = (s[S] = Math.round(i - k * (0 === de || 2 === de ? 1 : R))) + "px";
                            }
                        }
                    },
                    Ie = U.set3DTransformRatio = U.setTransformRatio = function (t) {
                        var x06 = ",0";
                        x06 += ",0,0,";
                        x06 += "0,1,";
                        x06 += "0,";
                        var d06 = "%";
                        d06 += ")";
                        d06 += " matrix3d(";
                        var l06 = ",";
                        l06 += "0";
                        l06 += ",0";
                        l06 += ",";
                        var z06 = "m";
                        z06 += "at";
                        z06 += "ri";
                        z06 += "x(";
                        var G06 = "mat";
                        G06 += "r";
                        G06 += "i";
                        G06 += "x(";
                        var i06 = "ma";
                        i06 += "trix(";
                        var p06 = "s";
                        p06 += "i";
                        p06 += "mple";
                        var e, i, s, r, n, a, o, h, l, _, u, p, c, m, d, g, v, y, T, w, x, b, P, S = this.data,
                            k = this.t.style,
                            R = S.rotation,
                            A = S.rotationX,
                            O = S.rotationY,
                            C = S.scaleX,
                            D = S.scaleY,
                            M = S.scaleZ,
                            I = S.x,
                            F = S.y,
                            E = S.z,
                            N = S.svg,
                            L = S.perspective,
                            X = S.force3D;
                        if (!(((1 !== t && 0 !== t || "auto" !== X || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && X || E || L || O || A) && (!Te || !N) && Se)) return R || S.skewX || N ? (R *= z, b = S.skewX * z, P = 1e5, e = Math.cos(R) * C, r = Math.sin(R) * C, i = Math.sin(R - b) * -D, n = Math.cos(R - b) * D, b && p06 === S.skewType && (v = Math.tan(b), v = Math.sqrt(1 + v * v), i *= v, n *= v, S.skewY && (e *= v, r *= v)), N && (I += S.xOrigin - (S.xOrigin * e + S.yOrigin * i), F += S.yOrigin - (S.xOrigin * r + S.yOrigin * n), m = 1e-6, m > I && I > -m && (I = 0), m > F && F > -m && (F = 0)), T = (0 | e * P) / P + "," + (0 | r * P) / P + "," + (0 | i * P) / P + "," + (0 | n * P) / P + "," + I + "," + F + ")", N && Te ? this.t.setAttribute("transform", i06 + T) : k[xe] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : G06) + T) : k[xe] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : z06) + C + l06 + D + "," + I + "," + F + ")", void 0;
                        if (f && (m = 1e-4, m > C && C > -m && (C = M = 2e-5), m > D && D > -m && (D = M = 2e-5), !L || S.z || S.rotationX || S.rotationY || (L = 0)), R || S.skewX) R *= z, d = e = Math.cos(R), g = r = Math.sin(R), S.skewX && (R -= S.skewX * z, d = Math.cos(R), g = Math.sin(R), "simple" === S.skewType && (v = Math.tan(S.skewX * z), v = Math.sqrt(1 + v * v), d *= v, g *= v, S.skewY && (e *= v, r *= v))), i = -g, n = d;
                        else {
                            var L06 = "p";
                            L06 += "x";
                            L06 += ")";
                            var W06 = "p";
                            W06 += "x";
                            W06 += ",";
                            var X06 = "%) translat";
                            X06 += "e";
                            X06 += "3d(";
                            var o06 = "tran";
                            o06 += "slate(";
                            if (!(O || A || 1 !== M || L || N)) return k[xe] = (S.xPercent || S.yPercent ? o06 + S.xPercent + "%," + S.yPercent + X06 : "translate3d(") + I + "px," + F + W06 + E + L06 + (1 !== C || 1 !== D ? " scale(" + C + "," + D + ")" : ""), void 0;
                            e = n = 1, i = r = 0;
                        }
                        l = 1, s = a = o = h = _ = u = 0, p = L ? -1 / L : 0, c = S.zOrigin, m = 1e-6, w = ",", x = "0", R = O * z, R && (d = Math.cos(R), g = Math.sin(R), o = -g, _ = p * -g, s = e * g, a = r * g, l = d, p *= d, e *= d, r *= d), R = A * z, R && (d = Math.cos(R), g = Math.sin(R), v = i * d + s * g, y = n * d + a * g, h = l * g, u = p * g, s = i * -g + s * d, a = n * -g + a * d, l *= d, p *= d, i = v, n = y), 1 !== M && (s *= M, a *= M, l *= M, p *= M), 1 !== D && (i *= D, n *= D, h *= D, u *= D), 1 !== C && (e *= C, r *= C, o *= C, _ *= C), (c || N) && (c && (I += s * -c, F += a * -c, E += l * -c + c), N && (I += S.xOrigin - (S.xOrigin * e + S.yOrigin * i), F += S.yOrigin - (S.xOrigin * r + S.yOrigin * n)), m > I && I > -m && (I = x), m > F && F > -m && (F = x), m > E && E > -m && (E = 0)), T = S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + d06 : "matrix3d(", T += (m > e && e > -m ? x : e) + w + (m > r && r > -m ? x : r) + w + (m > o && o > -m ? x : o), T += w + (m > _ && _ > -m ? x : _) + w + (m > i && i > -m ? x : i) + w + (m > n && n > -m ? x : n), A || O ? (T += w + (m > h && h > -m ? x : h) + w + (m > u && u > -m ? x : u) + w + (m > s && s > -m ? x : s), T += w + (m > a && a > -m ? x : a) + w + (m > l && l > -m ? x : l) + w + (m > p && p > -m ? x : p) + w) : T += x06, T += I + w + F + w + E + w + (L ? 1 + -E / L : 1) + ")", k[xe] = T;
                    };
                l = ke.prototype, l.x = l.y = l.z = l.skewX = l.skewY = l.rotation = l.rotationX = l.rotationY = l.zOrigin = l.xPercent = l.yPercent = 0, l.scaleX = l.scaleY = l.scaleZ = 1, ve("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent", {
                    parser: function (t, e, i, s, n, o, h) {
                        var a06 = "z";
                        a06 += "Ori";
                        a06 += "gi";
                        a06 += "n";
                        var E06 = "5";
                        E06 += "0";
                        E06 += "%";
                        var y06 = "0";
                        y06 += "p";
                        y06 += "x";
                        var M06 = "50% 5";
                        M06 += "0%";
                        var Z06 = "0";
                        Z06 += "px";
                        Z06 += " 0px";
                        var V06 = "transformOrigi";
                        V06 += "n";
                        var n06 = "yO";
                        n06 += "rig";
                        n06 += "i";
                        n06 += "n";
                        var s06 = "ob";
                        s06 += "ject";
                        var w06 = "absol";
                        w06 += "ute";
                        var B06 = "s";
                        B06 += "tr";
                        B06 += "i";
                        B06 += "ng";
                        if (s._lastParsedTransform === h) return n;
                        s._lastParsedTransform = h;
                        var l, _, u, p, f, c, m, d = s._transform = Me(t, r, !0, h.parseTransform),
                            g = t.style,
                            v = 1e-6,
                            y = we.length,
                            T = h,
                            w = {};
                        if (B06 == typeof T.transform && xe) u = L.style, u[xe] = T.transform, u.display = "block", u.position = w06, E.body.appendChild(L), l = Me(L, null, !1), E.body.removeChild(L);
                        else if (s06 == typeof T) {
                            var q06 = "rotat";
                            q06 += "i";
                            q06 += "onY";
                            var R06 = "_s";
                            R06 += "hort";
                            var k06 = "r";
                            k06 += "otat";
                            k06 += "ionX";
                            var h06 = "_s";
                            h06 += "h";
                            h06 += "ort";
                            var U06 = "sh";
                            U06 += "ort";
                            U06 += "R";
                            U06 += "otationX";
                            var N06 = "rot";
                            N06 += "atio";
                            N06 += "nZ";
                            var u06 = "_s";
                            u06 += "hort";
                            var A06 = "ro";
                            A06 += "tation";
                            var e06 = "str";
                            e06 += "in";
                            e06 += "g";
                            if (l = {
                                    scaleX: ne(null != T.scaleX ? T.scaleX : T.scale, d.scaleX),
                                    scaleY: ne(null != T.scaleY ? T.scaleY : T.scale, d.scaleY),
                                    scaleZ: ne(T.scaleZ, d.scaleZ),
                                    x: ne(T.x, d.x),
                                    y: ne(T.y, d.y),
                                    z: ne(T.z, d.z),
                                    xPercent: ne(T.xPercent, d.xPercent),
                                    yPercent: ne(T.yPercent, d.yPercent),
                                    perspective: ne(T.transformPerspective, d.perspective)
                                }, m = T.directionalRotation, null != m)
                                if ("object" == typeof m)
                                    for (u in m) T[u] = m[u];
                                else T.rotation = m;
                            e06 == typeof T.x && -1 !== T.x.indexOf("%") && (l.x = 0, l.xPercent = ne(T.x, d.xPercent)), "string" == typeof T.y && -1 !== T.y.indexOf("%") && (l.y = 0, l.yPercent = ne(T.y, d.yPercent)), l.rotation = ae(A06 in T ? T.rotation : "shortRotation" in T ? T.shortRotation + u06 : N06 in T ? T.rotationZ : d.rotation, d.rotation, "rotation", w), Se && (l.rotationX = ae("rotationX" in T ? T.rotationX : U06 in T ? T.shortRotationX + h06 : d.rotationX || 0, d.rotationX, k06, w), l.rotationY = ae("rotationY" in T ? T.rotationY : "shortRotationY" in T ? T.shortRotationY + R06 : d.rotationY || 0, d.rotationY, q06, w)), l.skewX = null == T.skewX ? d.skewX : ae(T.skewX, d.skewX), l.skewY = null == T.skewY ? d.skewY : ae(T.skewY, d.skewY), (_ = l.skewY - d.skewY) && (l.skewX += _, l.rotation += _);
                        }
                        for (Se && null != T.force3D && (d.force3D = T.force3D, c = !0), d.skewType = T.skewType || d.skewType || a.defaultSkewType, f = d.force3D || d.z || d.rotationX || d.rotationY || l.z || l.rotationX || l.rotationY || l.perspective, f || null == T.scale || (l.scaleZ = 1); --y > -1;) i = we[y], p = l[i] - d[i], (p > v || -v > p || null != T[i] || null != F[i]) && (c = !0, n = new ce(d, i, d[i], p, n), i in w && (n.e = w[i]), n.xs0 = 0, n.plugin = o, s._overwriteProps.push(n.n));
                        return p = T.transformOrigin, d.svg && (p || T.svgOrigin) && (De(t, se(p), l, T.svgOrigin), n = new ce(d, "xOrigin", d.xOrigin, l.xOrigin - d.xOrigin, n, -1, "transformOrigin"), n.b = d.xOrigin, n.e = n.xs0 = l.xOrigin, n = new ce(d, n06, d.yOrigin, l.yOrigin - d.yOrigin, n, -1, V06), n.b = d.yOrigin, n.e = n.xs0 = l.yOrigin, p = Te ? null : Z06), (p || Se && f && d.zOrigin) && (xe ? (c = !0, i = Pe, p = (p || Q(t, i, r, !1, M06)) + "", n = new ce(g, i, 0, 0, n, -1, "transformOrigin"), n.b = g[i], n.plugin = o, Se ? (u = d.zOrigin, p = p.split(" "), d.zOrigin = (p.length > 2 && (0 === u || y06 !== p[2]) ? parseFloat(p[2]) : u) || 0, n.xs0 = n.e = p[0] + " " + (p[1] || E06) + " 0px", n = new ce(d, a06, 0, 0, n, -1, n.n), n.b = u, n.xs0 = n.e = d.zOrigin) : n.xs0 = n.e = p) : se(p + "", d)), c && (s._transformType = d.svg && Te || !f && 3 !== this._transformType ? 2 : 3), n;
                    },
                    prefix: !0
                }), ve("boxShadow", {
                    defaultValue: K06,
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), ve("borderRadius", {
                    defaultValue: "0px",
                    parser: function (t, e, i, n, a) {
                        var r06 = "borde";
                        r06 += "rLeft";
                        var b06 = "bor";
                        b06 += "d";
                        b06 += "er";
                        var c06 = "bo";
                        c06 += "rde";
                        c06 += "rBottomRigh";
                        c06 += "tRadius";
                        var H06 = "borderTopLe";
                        H06 += "ftRadius";
                        e = this.format(e);
                        var o, h, l, _, u, p, f, c, m, d, g, v, y, T, w, x, b = [H06, "borderTopRightRadius", c06, "borderBottomLeftRadius"],
                            P = t.style;
                        for (m = parseFloat(t.offsetWidth), d = parseFloat(t.offsetHeight), o = e.split(" "), h = 0; b.length > h; h++) this.p.indexOf(b06) && (b[h] = W(b[h])), u = _ = Q(t, b[h], r, !1, "0px"), -1 !== u.indexOf(" ") && (_ = u.split(" "), u = _[0], _ = _[1]), p = l = o[h], f = parseFloat(u), v = u.substr((f + "").length), y = "=" === p.charAt(1), y ? (c = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), c *= parseFloat(p), g = p.substr((c + "").length - (0 > c ? 1 : 0)) || "") : (c = parseFloat(p), g = p.substr((c + "").length)), "" === g && (g = s[i] || v), g !== v && (T = $(t, r06, f, v), w = $(t, "borderTop", f, v), "%" === g ? (u = 100 * (T / m) + "%", _ = 100 * (w / d) + "%") : "em" === g ? (x = $(t, "borderLeft", 1, "em"), u = T / x + "em", _ = w / x + "em") : (u = T + "px", _ = w + "px"), y && (p = parseFloat(u) + c + g, l = parseFloat(_) + c + g)), a = me(P, b[h], u + " " + _, p + " " + l, !1, "0px", a);
                        return a;
                    },
                    prefix: !0,
                    formatter: ue(D06, !1, !0)
                }), ve(T06, {
                    defaultValue: C06,
                    parser: function (t, e, i, s, n, a) {
                        var P06 = "n";
                        P06 += "o";
                        P06 += "n";
                        P06 += "e";
                        var j06 = "-";
                        j06 += "y";
                        var g06 = "-";
                        g06 += "x";
                        var v06 = "backgro";
                        v06 += "und-posit";
                        v06 += "ion";
                        var o, h, l, _, u, p, f = v06,
                            c = r || Z(t, null),
                            d = this.format((c ? m ? c.getPropertyValue(f + g06) + " " + c.getPropertyValue(f + j06) : c.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                            g = this.format(e);
                        if (-1 !== d.indexOf("%") != (-1 !== g.indexOf("%")) && (p = Q(t, "backgroundImage").replace(R, ""), p && P06 !== p)) {
                            for (o = d.split(" "), h = g.split(" "), X.setAttribute("src", p), l = 2; --l > -1;) d = o[l], _ = -1 !== d.indexOf("%"), _ !== (-1 !== h[l].indexOf("%")) && (u = 0 === l ? t.offsetWidth - X.width : t.offsetHeight - X.height, o[l] = _ ? parseFloat(d) / 100 * u + "px" : 100 * (parseFloat(d) / u) + "%");
                            d = o.join(" ");
                        }
                        return this.parseComplex(t.style, d, g, n, a);
                    },
                    formatter: se
                }), ve(m06, {
                    defaultValue: J06,
                    formatter: se
                }), ve("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), ve("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), ve(O06, {
                    prefix: !0
                }), ve(Y06, {
                    prefix: !0
                }), ve(Q36, {
                    prefix: !0
                }), ve("margin", {
                    parser: pe(f36)
                }), ve(t36, {
                    parser: pe("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), ve("clip", {
                    defaultValue: F36,
                    parser: function (t, e, i, s, n, a) {
                        var I36 = "r";
                        I36 += "ec";
                        I36 += "t(";
                        var o, h, l;
                        return 9 > m ? (h = t.currentStyle, l = 8 > m ? " " : ",", o = I36 + h.clipTop + l + h.clipRight + l + h.clipBottom + l + h.clipLeft + ")", e = this.format(e).split(",").join(l)) : (o = this.format(Q(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, n, a);
                    }
                }), ve(S36, {
                    defaultValue: p36,
                    color: !0,
                    multi: !0
                }), ve("autoRound,strictUnits", {
                    parser: function (t, e, i, s, r) {
                        return r;
                    }
                }), ve("border", {
                    defaultValue: i36,
                    parser: function (t, e, i, s, n, a) {
                        var l36 = "#";
                        l36 += "0";
                        l36 += "0";
                        l36 += "0";
                        var z36 = "borderTop";
                        z36 += "Color";
                        var G36 = "bo";
                        G36 += "r";
                        G36 += "derTop";
                        G36 += "Style";
                        return this.parseComplex(t.style, this.format(Q(t, "borderTopWidth", r, !1, "0px") + " " + Q(t, G36, r, !1, "solid") + " " + Q(t, z36, r, !1, l36)), this.format(e), n, a);
                    },
                    color: !0,
                    formatter: function (t) {
                        var X36 = "#";
                        X36 += "0";
                        X36 += "0";
                        X36 += "0";
                        var o36 = "sol";
                        o36 += "id";
                        var e = t.split(" ");
                        return e[0] + " " + (e[1] || o36) + " " + (t.match(_e) || [X36])[0];
                    }
                }), ve(W36, {
                    parser: pe("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), ve("float,cssFloat,styleFloat", {
                    parser: function (t, e, i, s, r) {
                        var d36 = "css";
                        d36 += "F";
                        d36 += "lo";
                        d36 += "at";
                        var L36 = "cs";
                        L36 += "s";
                        L36 += "Fl";
                        L36 += "oat";
                        var n = t.style,
                            a = L36 in n ? d36 : "styleFloat";
                        return new ce(n, a, 0, 0, r, -1, i, !1, 0, n[a], e);
                    }
                });
                var Fe = function (t) {
                    var w36 = "pac";
                    w36 += "it";
                    w36 += "y";
                    var B36 = "al";
                    B36 += "pha(opa";
                    B36 += "city=";
                    var x36 = "a";
                    x36 += "tri";
                    x36 += "x";
                    x36 += "(";
                    var e, i = this.t,
                        s = i.filter || Q(this.data, "filter") || "",
                        r = 0 | this.s + this.c * t;
                    100 === r && (-1 === s.indexOf(x36) && -1 === s.indexOf("radient(") && -1 === s.indexOf("oader(") ? (i.removeAttribute("filter"), e = !Q(this.data, "filter")) : (i.filter = s.replace(b, ""), e = !0)), e || (this.xn1 && (i.filter = s = s || B36 + r + ")"), -1 === s.indexOf(w36) ? 0 === r && this.xn1 || (i.filter = s + " alpha(opacity=" + r + ")") : i.filter = s.replace(w, "opacity=" + r));
                };
                ve(s36, {
                    defaultValue: "1",
                    parser: function (t, e, i, s, n, a) {
                        var k36 = "i";
                        k36 += "nheri";
                        k36 += "t";
                        var h36 = "hidde";
                        h36 += "n";
                        var U36 = "inh";
                        U36 += "er";
                        U36 += "it";
                        var N36 = "vi";
                        N36 += "si";
                        N36 += "bility";
                        var u36 = "opac";
                        u36 += "i";
                        u36 += "t";
                        u36 += "y";
                        var A36 = "v";
                        A36 += "isib";
                        A36 += "ili";
                        A36 += "ty";
                        var e36 = "h";
                        e36 += "idden";
                        var o = parseFloat(Q(t, "opacity", r, !1, "1")),
                            h = t.style,
                            l = "autoAlpha" === i;
                        return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), l && 1 === o && e36 === Q(t, A36, r) && 0 !== e && (o = 0), j ? n = new ce(h, u36, o, e - o, n) : (n = new ce(h, "opacity", 100 * o, 100 * (e - o), n), n.xn1 = l ? 1 : 0, h.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", n.data = t, n.plugin = a, n.setRatio = Fe), l && (n = new ce(h, N36, 0, 0, n, -1, null, !1, 0, 0 !== o ? U36 : "hidden", 0 === e ? h36 : k36), n.xs0 = "inherit", s._overwriteProps.push(n.n), s._overwriteProps.push(i)), n;
                    }
                });
                var Ee = function (t, e) {
                        var R36 = "m";
                        R36 += "s";
                        e && (t.removeProperty ? ((R36 === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(S, "-$1").toLowerCase())) : t.removeAttribute(e));
                    },
                    Ne = function (t) {
                        var n36 = "c";
                        n36 += "l";
                        n36 += "as";
                        n36 += "s";
                        if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                            var q36 = "cl";
                            q36 += "a";
                            q36 += "s";
                            q36 += "s";
                            this.t.setAttribute(q36, 0 === t ? this.b : this.e);
                            for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Ee(i, e.p), e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null);
                        } else this.t.getAttribute(n36) !== this.e && this.t.setAttribute("class", this.e);
                    };
                ve("className", {
                    parser: function (t, e, s, n, a, o, h) {
                        var Z36 = "cl";
                        Z36 += "ass";
                        var V36 = "\\";
                        V36 += "s*\\b";
                        var l, _, u, p, f, c = t.getAttribute("class") || "",
                            m = t.style.cssText;
                        if (a = n._classNamePT = new ce(t, s, 0, 0, a, 2), a.setRatio = Ne, a.pr = -11, i = !0, a.b = c, _ = K(t, r), u = t._gsClassPT) {
                            for (p = {}, f = u.data; f;) p[f.p] = 1, f = f._next;
                            u.setRatio(1);
                        }
                        return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e : c.replace(RegExp(V36 + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute(Z36, a.e), l = J(t, _, K(t), h, p), t.setAttribute("class", c), a.data = l.firstMPT, t.style.cssText = m, a = a.xfirst = n.parse(t, l.difs, a, o);
                    }
                });
                var Le = function (t) {
                    var M36 = "isFro";
                    M36 += "mSt";
                    M36 += "a";
                    M36 += "rt";
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && M36 !== this.data.data) {
                        var E36 = "transfor";
                        E36 += "mOrigin";
                        var y36 = "al";
                        y36 += "l";
                        var e, i, s, r, n, a = this.t.style,
                            o = h.transform.parse;
                        if (y36 === this.e) a.cssText = "", r = !0;
                        else
                            for (e = this.e.split(" ").join("").split(","), s = e.length; --s > -1;) i = e[s], h[i] && (h[i].parse === o ? r = !0 : i = E36 === i ? Pe : h[i].p), Ee(a, i);
                        r && (Ee(a, xe), n = this.t._gsTransform, n && (n.svg && this.t.removeAttribute("data-svg-origin"), delete this.t._gsTransform));
                    }
                };
                for (ve(a36, {
                        parser: function (t, e, s, r, n) {
                            return n = new ce(t, s, 0, 0, n, 2), n.setRatio = Le, n.e = e, n.pr = -10, n.data = r._tween, i = !0, n;
                        }
                    }), l = K36.split(","), de = l.length; de--;) ye(l[de]);
                l = a.prototype, l._firstPT = l._lastParsedTransform = l._transform = null, l._onInitTween = function (t, e, o) {
                    var c36 = "zI";
                    c36 += "nde";
                    c36 += "x";
                    var H36 = "a";
                    H36 += "ut";
                    H36 += "o";
                    if (!t.nodeType) return !1;
                    this._target = t, this._tween = o, this._vars = e, _ = e.autoRound, i = !1, s = e.suffixMap || a.suffixMap, r = Z(t, ""), n = this._overwriteProps;
                    var l, f, m, d, g, v, y, T, w, b = t.style;
                    if (u && "" === b.zIndex && (l = Q(t, "zIndex", r), (H36 === l || "" === l) && this._addLazySet(b, c36, 0)), "string" == typeof e && (d = b.cssText, l = K(t, r), b.cssText = d + ";" + e, l = J(t, l, K(t)).difs, !j && x.test(e) && (l.opacity = parseFloat(RegExp.$1)), e = l, b.cssText = d), this._firstPT = f = e.className ? h.className.parse(t, e.className, "className", this, null, null, e) : this.parse(t, e, null), this._transformType) {
                        var b36 = "zI";
                        b36 += "ndex";
                        for (w = 3 === this._transformType, xe ? p && (u = !0, "" === b.zIndex && (y = Q(t, b36, r), ("auto" === y || "" === y) && this._addLazySet(b, "zIndex", 0)), c && this._addLazySet(b, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (w ? "visible" : "hidden"))) : b.zoom = 1, m = f; m && m._next;) m = m._next;
                        T = new ce(t, "transform", 0, 0, null, 2), this._linkCSSP(T, null, m), T.setRatio = xe ? Ie : ze, T.data = this._transform || Me(t, r, !0), T.tween = o, T.pr = -1, n.pop();
                    }
                    if (i) {
                        for (; f;) {
                            for (v = f._next, m = d; m && m.pr > f.pr;) m = m._next;
                            (f._prev = m ? m._prev : g) ? f._prev._next = f: d = f, (f._next = m) ? m._prev = f : g = f, f = v;
                        }
                        this._firstPT = d;
                    }
                    return !0;
                }, l.parse = function (t, e, i, n) {
                    var v36 = "opa";
                    v36 += "c";
                    v36 += "it";
                    v36 += "y";
                    var C36 = "hei";
                    C36 += "gh";
                    C36 += "t";
                    var T36 = "tr";
                    T36 += "anspare";
                    T36 += "nt";
                    var D36 = "Colo";
                    D36 += "r";
                    var r36 = "co";
                    r36 += "lo";
                    r36 += "r";
                    var a, o, l, u, p, f, c, m, d, g, v = t.style;
                    for (a in e) f = e[a], o = h[a], o ? i = o.parse(t, f, a, this, i, n, e) : (p = Q(t, a, r) + "", d = "string" == typeof f, r36 === a || "fill" === a || "stroke" === a || -1 !== a.indexOf(D36) || d && P.test(f) ? (d || (f = le(f), f = (f.length > 3 ? "rgba(" : "rgb(") + f.join(",") + ")"), i = me(v, a, p, f, !0, T36, i, 0, n)) : !d || -1 === f.indexOf(" ") && -1 === f.indexOf(",") ? (l = parseFloat(p), c = l || 0 === l ? p.substr((l + "").length) : "", ("" === p || "auto" === p) && ("width" === a || C36 === a ? (l = ie(t, a, r), c = "px") : "left" === a || "top" === a ? (l = H(t, a, r), c = "px") : (l = v36 !== a ? 0 : 1, c = "")), g = d && "=" === f.charAt(1), g ? (u = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), u *= parseFloat(f), m = f.replace(T, "")) : (u = parseFloat(f), m = d ? f.replace(T, "") : ""), "" === m && (m = a in s ? s[a] : c), f = u || 0 === u ? (g ? u + l : u) + m : e[a], c !== m && "" !== m && (u || 0 === u) && l && (l = $(t, a, l, c), "%" === m ? (l /= $(t, a, 100, "%") / 100, e.strictUnits !== !0 && (p = l + "%")) : "em" === m ? l /= $(t, a, 1, "em") : "px" !== m && (u = $(t, a, u, m), m = "px"), g && (u || 0 === u) && (f = u + l + m)), g && (u += l), !l && 0 !== l || !u && 0 !== u ? void 0 !== v[a] && (f || "NaN" != f + "" && null != f) ? (i = new ce(v, a, u || l || 0, 0, i, -1, a, !1, 0, p, f), i.xs0 = "none" !== f || "display" !== a && -1 === a.indexOf("Style") ? f : p) : q("invalid " + a + " tween value: " + e[a]) : (i = new ce(v, a, l, u - l, i, 0, a, _ !== !1 && ("px" === m || "zIndex" === a), 0, p, f), i.xs0 = m)) : i = me(v, a, p, f, !0, null, i, 0, n)), n && i && !i.plugin && (i.plugin = n);
                    return i;
                }, l.setRatio = function (t) {
                    var e, i, s, r = this._firstPT,
                        n = 1e-6;
                    if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                            for (; r;) {
                                if (e = r.c * t + r.s, r.r ? e = Math.round(e) : n > e && e > -n && (e = 0), r.type)
                                    if (1 === r.type)
                                        if (s = r.l, 2 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                        else if (3 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                else if (4 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                else if (5 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                else {
                                    var j36 = "x";
                                    j36 += "s";
                                    var g36 = "x";
                                    g36 += "n";
                                    for (i = r.xs0 + e + r.xs1, s = 1; r.l > s; s++) i += r[g36 + s] + r[j36 + (s + 1)];
                                    r.t[r.p] = i;
                                } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                                else r.t[r.p] = e + r.xs0;
                                r = r._next;
                            } else
                                for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                        else
                            for (; r;) 2 !== r.type ? r.t[r.p] = r.e : r.setRatio(t), r = r._next;
                }, l._enableTransforms = function (t) {
                    this._transform = this._transform || Me(this._target, r, !0), this._transformType = this._transform.svg && Te || !t && 3 !== this._transformType ? 2 : 3;
                };
                var Xe = function () {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0);
                };
                l._addLazySet = function (t, e, i) {
                    var s = this._firstPT = new ce(t, e, 0, 0, this._firstPT, 2);
                    s.e = i, s.setRatio = Xe, s.data = this;
                }, l._linkCSSP = function (t, e, i, s) {
                    return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, s = !0), i ? i._next = t : s || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t;
                }, l._kill = function (e) {
                    var i, s, r, n = e;
                    if (e.autoAlpha || e.alpha) {
                        n = {};
                        for (s in e) n[s] = e[s];
                        n.opacity = 1, n.autoAlpha && (n.visibility = 1);
                    }
                    return e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), t.prototype._kill.call(this, n);
                };
                var Ue = function (t, e, i) {
                    var s, r, n, a;
                    if (t.slice)
                        for (r = t.length; --r > -1;) Ue(t[r], e, i);
                    else
                        for (s = t.childNodes, r = s.length; --r > -1;) n = s[r], a = n.type, n.style && (e.push(K(n)), i && i.push(n)), 1 !== a && 9 !== a && 11 !== a || !n.childNodes.length || Ue(n, e, i);
                };
                return a.cascadeTo = function (t, i, s) {
                    var r, n, a, o, h = e.to(t, i, s),
                        l = [h],
                        _ = [],
                        u = [],
                        p = [],
                        f = e._internals.reservedProps;
                    for (t = h._targets || h.target, Ue(t, _, p), h.render(i, !0, !0), Ue(t, u), h.render(0, !0, !0), h._enabled(!0), r = p.length; --r > -1;)
                        if (n = J(p[r], _[r], u[r]), n.firstMPT) {
                            n = n.difs;
                            for (a in s) f[a] && (n[a] = s[a]);
                            o = {};
                            for (a in n) o[a] = _[r][a];
                            l.push(e.fromTo(p[r], i, o, n));
                        } return l;
                }, t.activate([a]), a;
            }, !0),
            function () {
                var t = _gsScope._gsDefine.plugin({
                        propName: "roundProps",
                        priority: -1,
                        API: 2,
                        init: function (t, e, i) {
                            return this._tween = i, !0;
                        }
                    }),
                    e = t.prototype;
                e._onInitAllProps = function () {
                    for (var t, e, i, s = this._tween, r = s.vars.roundProps instanceof Array ? s.vars.roundProps : s.vars.roundProps.split(","), n = r.length, a = {}, o = s._propLookup.roundProps; --n > -1;) a[r[n]] = 1;
                    for (n = r.length; --n > -1;)
                        for (t = r[n], e = s._firstPT; e;) i = e._next, e.pg ? e.t._roundProps(a, !0) : e.n === t && (this._add(e.t, t, e.s, e.c), i && (i._prev = e._prev), e._prev ? e._prev._next = i : s._firstPT === e && (s._firstPT = i), e._next = e._prev = null, s._propLookup[t] = o), e = i;
                    return !1;
                }, e._add = function (t, e, i, s) {
                    this._addTween(t, e, i, i + s, e, !0), this._overwriteProps.push(e);
                };
            }(), _gsScope._gsDefine.plugin({
                propName: P36,
                API: 2,
                version: "0.3.3",
                init: function (t, e) {
                    var i, s, r;
                    if ("function" != typeof t.setAttribute) return !1;
                    this._target = t, this._proxy = {}, this._start = {}, this._end = {};
                    for (i in e) this._start[i] = this._proxy[i] = s = t.getAttribute(i), r = this._addTween(this._proxy, i, parseFloat(s), e[i], i), this._end[i] = r ? r.s + r.c : e[i], this._overwriteProps.push(i);
                    return !0;
                },
                set: function (t) {
                    this._super.setRatio.call(this, t);
                    for (var e, i = this._overwriteProps, s = i.length, r = 1 === t ? this._end : t ? this._proxy : this._start; --s > -1;) e = i[s], this._target.setAttribute(e, r[e] + "");
                }
            }), _gsScope._gsDefine.plugin({
                propName: m36,
                version: "0.2.1",
                API: 2,
                init: function (t, e) {
                    var t16 = "_";
                    t16 += "cw";
                    var f16 = "s";
                    f16 += "ho";
                    f16 += "rt";
                    var Q16 = "stri";
                    Q16 += "ng";
                    var Y36 = "g";
                    Y36 += "e";
                    Y36 += "t";
                    var O36 = "se";
                    O36 += "t";
                    var J36 = "useRadi";
                    J36 += "ans";
                    "object" != typeof e && (e = {
                        rotation: e
                    }), this.finals = {};
                    var i, s, r, n, a, o, h = e.useRadians === !0 ? 2 * Math.PI : 360,
                        l = 1e-6;
                    for (i in e) J36 !== i && (o = (e[i] + "").split("_"), s = o[0], r = parseFloat("function" != typeof t[i] ? t[i] : t[i.indexOf(O36) || "function" != typeof t["get" + i.substr(3)] ? i : Y36 + i.substr(3)]()), n = this.finals[i] = Q16 == typeof s && "=" === s.charAt(1) ? r + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0, a = n - r, o.length && (s = o.join("_"), -1 !== s.indexOf(f16) && (a %= h, a !== a % (h / 2) && (a = 0 > a ? a + h : a - h)), -1 !== s.indexOf(t16) && 0 > a ? a = (a + 9999999999 * h) % h - (0 | a / h) * h : -1 !== s.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * h) % h - (0 | a / h) * h)), (a > l || -l > a) && (this._addTween(t, i, r, r + a, i), this._overwriteProps.push(i)));
                    return !0;
                },
                set: function (t) {
                    var e;
                    if (1 !== t) this._super.setRatio.call(this, t);
                    else
                        for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next;
                }
            })._autoCSS = !0, _gsScope._gsDefine("easing.Back", [F16], function (t) {
                var N16 = "e";
                N16 += "as";
                N16 += "e,";
                var u16 = "Rough";
                u16 += "Ease";
                var A16 = "e";
                A16 += "a";
                A16 += "se,";
                var e16 = "S";
                e16 += "lo";
                e16 += "w";
                e16 += "Mo";
                var s16 = "Sin";
                s16 += "e";
                s16 += "In";
                var w16 = "S";
                w16 += "ineOut";
                var B16 = "Expo";
                B16 += "In";
                B16 += "Out";
                var x16 = "El";
                x16 += "a";
                x16 += "stic";
                var L16 = "Cir";
                L16 += "cInOut";
                var W16 = "C";
                W16 += "i";
                W16 += "r";
                W16 += "c";
                var X16 = "Boun";
                X16 += "ceIn";
                var l16 = "easing.Stepped";
                l16 += "Eas";
                l16 += "e";
                var z16 = "easin";
                z16 += "g.SlowMo";
                var G16 = "Ba";
                G16 += "c";
                G16 += "k";
                G16 += "InOut";
                var i16 = "BackO";
                i16 += "u";
                i16 += "t";
                var p16 = "B";
                p16 += "ac";
                p16 += "k";
                var e, i, s, r = _gsScope.GreenSockGlobals || _gsScope,
                    n = r.com.greensock,
                    a = 2 * Math.PI,
                    o = Math.PI / 2,
                    h = n._class,
                    l = function (e, i) {
                        var I16 = "easin";
                        I16 += "g.";
                        var s = h(I16 + e, function () {}, !0),
                            r = s.prototype = new t();
                        return r.constructor = s, r.getRatio = i, s;
                    },
                    _ = t.register || function () {},
                    u = function (t, e, i, s) {
                        var r = h("easing." + t, {
                            easeOut: new e(),
                            easeIn: new i(),
                            easeInOut: new s()
                        }, !0);
                        return _(r, t), r;
                    },
                    p = function (t, e, i) {
                        this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t);
                    },
                    f = function (e, i) {
                        var S16 = "ea";
                        S16 += "si";
                        S16 += "ng.";
                        var s = h(S16 + e, function (t) {
                                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1;
                            }, !0),
                            r = s.prototype = new t();
                        return r.constructor = s, r.getRatio = i, r.config = function (t) {
                            return new s(t);
                        }, s;
                    },
                    c = u(p16, f(i16, function (t) {
                        return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1;
                    }), f("BackIn", function (t) {
                        return t * t * ((this._p1 + 1) * t - this._p1);
                    }), f(G16, function (t) {
                        return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2);
                    })),
                    m = h(z16, function (t, e, i) {
                        e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0;
                    }, !0),
                    d = m.prototype = new t();
                return d.constructor = m, d.getRatio = function (t) {
                    var e = t + (.5 - t) * this._p;
                    return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e;
                }, m.ease = new m(.7, .7), d.config = m.config = function (t, e, i) {
                    return new m(t, e, i);
                }, e = h(l16, function (t) {
                    t = t || 1, this._p1 = 1 / t, this._p2 = t + 1;
                }, !0), d = e.prototype = new t(), d.constructor = e, d.getRatio = function (t) {
                    return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1;
                }, d.config = e.config = function (t) {
                    return new e(t);
                }, i = h("easing.RoughEase", function (e) {
                    var o16 = "n";
                    o16 += "u";
                    o16 += "m";
                    o16 += "ber";
                    e = e || {};
                    for (var i, s, r, n, a, o, h = e.taper || "none", l = [], _ = 0, u = 0 | (e.points || 20), f = u, c = e.randomize !== !1, m = e.clamp === !0, d = e.template instanceof t ? e.template : null, g = o16 == typeof e.strength ? .4 * e.strength : .4; --f > -1;) i = c ? Math.random() : 1 / u * f, s = d ? d.getRatio(i) : i, "none" === h ? r = g : "out" === h ? (n = 1 - i, r = n * n * g) : "in" === h ? r = i * i * g : .5 > i ? (n = 2 * i, r = .5 * n * n * g) : (n = 2 * (1 - i), r = .5 * n * n * g), c ? s += Math.random() * r - .5 * r : f % 2 ? s += .5 * r : s -= .5 * r, m && (s > 1 ? s = 1 : 0 > s && (s = 0)), l[_++] = {
                        x: i,
                        y: s
                    };
                    for (l.sort(function (t, e) {
                            return t.x - e.x;
                        }), o = new p(1, 1, null), f = u; --f > -1;) a = l[f], o = new p(a.x, a.y, o);
                    this._prev = new p(0, 0, 0 !== o.t ? o : o.next);
                }, !0), d = i.prototype = new t(), d.constructor = i, d.getRatio = function (t) {
                    var e = this._prev;
                    if (t > e.t) {
                        for (; e.next && t >= e.t;) e = e.next;
                        e = e.prev;
                    } else
                        for (; e.prev && e.t >= t;) e = e.prev;
                    return this._prev = e, e.v + (t - e.t) / e.gap * e.c;
                }, d.config = function (t) {
                    return new i(t);
                }, i.ease = new i(), u("Bounce", l("BounceOut", function (t) {
                    return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
                }), l(X16, function (t) {
                    return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375);
                }), l("BounceInOut", function (t) {
                    var e = .5 > t;
                    return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5;
                })), u(W16, l("CircOut", function (t) {
                    return Math.sqrt(1 - (t -= 1) * t);
                }), l("CircIn", function (t) {
                    return -(Math.sqrt(1 - t * t) - 1);
                }), l(L16, function (t) {
                    return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
                })), s = function (e, i, s) {
                    var d16 = "easin";
                    d16 += "g.";
                    var r = h(d16 + e, function (t, e) {
                            this._p1 = t >= 1 ? t : 1, this._p2 = (e || s) / (1 > t ? t : 1), this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0), this._p2 = a / this._p2;
                        }, !0),
                        n = r.prototype = new t();
                    return n.constructor = r, n.getRatio = i, n.config = function (t, e) {
                        return new r(t, e);
                    }, r;
                }, u(x16, s("ElasticOut", function (t) {
                    return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1;
                }, .3), s("ElasticIn", function (t) {
                    return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2));
                }, .3), s("ElasticInOut", function (t) {
                    return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) + 1;
                }, .45)), u("Expo", l("ExpoOut", function (t) {
                    return 1 - Math.pow(2, -10 * t);
                }), l("ExpoIn", function (t) {
                    return Math.pow(2, 10 * (t - 1)) - .001;
                }), l(B16, function (t) {
                    return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)));
                })), u("Sine", l(w16, function (t) {
                    return Math.sin(t * o);
                }), l(s16, function (t) {
                    return -Math.cos(t * o) + 1;
                }), l("SineInOut", function (t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1);
                })), h("easing.EaseLookup", {
                    find: function (e) {
                        return t.map[e];
                    }
                }, !0), _(r.SlowMo, e16, A16), _(i, u16, "ease,"), _(e, "SteppedEase", N16), c;
            }, !0);
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function (t, e) {
        "use strict";
        var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
        if (!i.TweenLite) {
            var s66 = "1.1";
            s66 += "0.1";
            var w66 = "p";
            w66 += "lugins";
            w66 += ".TweenPlugin";
            var J16 = "t";
            J16 += "i";
            J16 += "c";
            J16 += "k";
            var P16 = "a";
            P16 += "uto";
            var T16 = "Tw";
            T16 += "een";
            T16 += "Lit";
            T16 += "e";
            var c16 = "CancelRe";
            c16 += "questAnimatio";
            c16 += "nFrame";
            var H16 = "C";
            H16 += "ancelAnimationFrame";
            var K16 = "w";
            K16 += "e";
            K16 += "bkit";
            var a16 = "m";
            a16 += "o";
            a16 += "z";
            var E16 = "m";
            E16 += "s";
            var y16 = "ease";
            y16 += "InOut";
            var M16 = ",e";
            M16 += "aseNon";
            M16 += "e";
            var Z16 = "eas";
            Z16 += "e";
            Z16 += "I";
            Z16 += "n";
            var V16 = "Qua";
            V16 += "rt";
            var n16 = "C";
            n16 += "ub";
            n16 += "ic";
            var q16 = "Q";
            q16 += "u";
            q16 += "ad";
            var R16 = "Li";
            R16 += "ne";
            R16 += "a";
            R16 += "r";
            var U16 = "com.gr";
            U16 += "eensoc";
            U16 += "k";
            var s, r, n, a, o, h = function (t) {
                    var e, s = t.split("."),
                        r = i;
                    for (e = 0; s.length > e; e++) r[s[e]] = r = r[s[e]] || {};
                    return r;
                },
                l = h(U16),
                _ = 1e-10,
                u = function (t) {
                    var e, i = [],
                        s = t.length;
                    for (e = 0; e !== s; i.push(t[e++]));
                    return i;
                },
                p = function () {},
                f = function () {
                    var t = Object.prototype.toString,
                        e = t.call([]);
                    return function (i) {
                        return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e);
                    };
                }(),
                c = {},
                m = function (s, r, n, a) {
                    this.sc = c[s] ? c[s].sc : [], c[s] = this, this.gsClass = null, this.func = n;
                    var o = [];
                    this.check = function (l) {
                        var h16 = "und";
                        h16 += "ef";
                        h16 += "in";
                        h16 += "ed";
                        for (var _, u, p, f, d = r.length, g = d; --d > -1;)(_ = c[r[d]] || new m(r[d], [])).gsClass ? (o[d] = _.gsClass, g--) : l && _.sc.push(this);
                        if (0 === g && n)
                            for (u = ("com.greensock." + s).split("."), p = u.pop(), f = h(u.join("."))[p] = this.gsClass = n.apply(n, o), a && (i[p] = f, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + s.split(".").pop(), [], function () {
                                    return f;
                                }) : s === e && h16 != typeof module && module.exports && (module.exports = f)), d = 0; this.sc.length > d; d++) this.sc[d].check();
                    }, this.check(!0);
                },
                d = t._gsDefine = function (t, e, i, s) {
                    return new m(t, e, i, s);
                },
                g = l._class = function (t, e, i) {
                    return e = e || function () {}, d(t, [], function () {
                        return e;
                    }, i), e;
                };
            d.globals = i;
            var v = [0, 0, 1, 1],
                y = [],
                T = g("easing.Ease", function (t, e, i, s) {
                    this._func = t, this._type = i || 0, this._power = s || 0, this._params = e ? v.concat(e) : v;
                }, !0),
                w = T.map = {},
                x = T.register = function (t, e, i, s) {
                    var k16 = "easeIn,easeOu";
                    k16 += "t,eas";
                    k16 += "eInOut";
                    for (var r, n, a, o, h = e.split(","), _ = h.length, u = (i || k16).split(","); --_ > -1;)
                        for (n = h[_], r = s ? g("easing." + n, null, !0) : l.easing[n] || {}, a = u.length; --a > -1;) o = u[a], w[n + "." + o] = w[o + n] = r[o] = t.getRatio ? t : t[o] || new t();
                };
            for (n = T.prototype, n._calcEnd = !1, n.getRatio = function (t) {
                    if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                    var e = this._type,
                        i = this._power,
                        s = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                    return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s), 1 === e ? 1 - s : 2 === e ? s : .5 > t ? s / 2 : 1 - s / 2;
                }, s = [R16, q16, n16, V16, "Quint,Strong"], r = s.length; --r > -1;) n = s[r] + ",Power" + r, x(new T(null, null, 1, r), n, "easeOut", !0), x(new T(null, null, 2, r), n, Z16 + (0 === r ? M16 : "")), x(new T(null, null, 3, r), n, y16);
            w.linear = l.easing.Linear.easeIn, w.swing = l.easing.Quad.easeInOut;
            var b = g("events.EventDispatcher", function (t) {
                this._listeners = {}, this._eventTarget = t || this;
            });
            n = b.prototype, n.addEventListener = function (t, e, i, s, r) {
                r = r || 0;
                var n, h, l = this._listeners[t],
                    _ = 0;
                for (null == l && (this._listeners[t] = l = []), h = l.length; --h > -1;) n = l[h], n.c === e && n.s === i ? l.splice(h, 1) : 0 === _ && r > n.pr && (_ = h + 1);
                l.splice(_, 0, {
                    c: e,
                    s: i,
                    up: s,
                    pr: r
                }), this !== a || o || a.wake();
            }, n.removeEventListener = function (t, e) {
                var i, s = this._listeners[t];
                if (s)
                    for (i = s.length; --i > -1;)
                        if (s[i].c === e) return s.splice(i, 1), void 0;
            }, n.dispatchEvent = function (t) {
                var e, i, s, r = this._listeners[t];
                if (r)
                    for (e = r.length, i = this._eventTarget; --e > -1;) s = r[e], s && (s.up ? s.c.call(s.s || i, {
                        type: t,
                        target: i
                    }) : s.c.call(s.s || i));
            };
            var P = t.requestAnimationFrame,
                S = t.cancelAnimationFrame,
                k = Date.now || function () {
                    return new Date().getTime();
                },
                R = k();
            for (s = [E16, a16, K16, "o"], r = s.length; --r > -1 && !P;) P = t[s[r] + "RequestAnimationFrame"], S = t[s[r] + H16] || t[s[r] + c16];
            g("Ticker", function (t, e) {
                var i, s, r, n, h, l = this,
                    u = k(),
                    f = e !== !1 && P,
                    c = 500,
                    m = 33,
                    d = "tick",
                    g = function (t) {
                        var e, a, o = k() - R;
                        o > c && (u += o - m), R += o, l.time = (R - u) / 1e3, e = l.time - h, (!i || e > 0 || t === !0) && (l.frame++, h += e + (e >= n ? .004 : n - e), a = !0), t !== !0 && (r = s(g)), a && l.dispatchEvent(d);
                    };
                b.call(l), l.time = l.frame = 0, l.tick = function () {
                    g(!0);
                }, l.lagSmoothing = function (t, e) {
                    c = t || 1 / _, m = Math.min(e, c, 0);
                }, l.sleep = function () {
                    null != r && (f && S ? S(r) : clearTimeout(r), s = p, r = null, l === a && (o = !1));
                }, l.wake = function () {
                    null !== r ? l.sleep() : l.frame > 10 && (R = k() - c + 5), s = 0 === i ? p : f && P ? P : function (t) {
                        return setTimeout(t, 0 | 1e3 * (h - l.time) + 1);
                    }, l === a && (o = !0), g(2);
                }, l.fps = function (t) {
                    return arguments.length ? (i = t, n = 1 / (i || 60), h = this.time + n, l.wake(), void 0) : i;
                }, l.useRAF = function (t) {
                    return arguments.length ? (l.sleep(), f = t, l.fps(i), void 0) : f;
                }, l.fps(t), setTimeout(function () {
                    f && 5 > l.frame && l.useRAF(!1);
                }, 1500);
            }), n = l.Ticker.prototype = new l.events.EventDispatcher(), n.constructor = l.Ticker;
            var A = g("core.Animation", function (t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, B) {
                    o || a.wake();
                    var i = this.vars.useFrames ? j : B;
                    i.add(this, i._time), this.vars.paused && this.paused(!0);
                }
            });
            a = A.ticker = new l.Ticker(), n = A.prototype, n._dirty = n._gc = n._initted = n._paused = !1, n._totalTime = n._time = 0, n._rawPrevTime = -1, n._next = n._last = n._onUpdate = n._timeline = n.timeline = null, n._paused = !1;
            var O = function () {
                o && k() - R > 2e3 && a.wake(), setTimeout(O, 2e3);
            };
            O(), n.play = function (t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
            }, n.pause = function (t, e) {
                return null != t && this.seek(t, e), this.paused(!0);
            }, n.resume = function (t, e) {
                return null != t && this.seek(t, e), this.paused(!1);
            }, n.seek = function (t, e) {
                return this.totalTime(Number(t), e !== !1);
            }, n.restart = function (t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0);
            }, n.reverse = function (t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
            }, n.render = function () {}, n.invalidate = function () {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this;
            }, n.isActive = function () {
                var t, e = this._timeline,
                    i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t;
            }, n._enabled = function (t, e) {
                return o || a.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1;
            }, n._kill = function () {
                return this._enabled(!1, !1);
            }, n.kill = function (t, e) {
                return this._kill(t, e), this;
            }, n._uncache = function (t) {
                for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                return this;
            }, n._swapSelfInParams = function (t) {
                for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                return i;
            }, n.eventCallback = function (t, e, i, s) {
                var b16 = "o";
                b16 += "n";
                if (b16 === (t || "").substr(0, 2)) {
                    var D16 = "on";
                    D16 += "Up";
                    D16 += "dat";
                    D16 += "e";
                    var r16 = "Par";
                    r16 += "am";
                    r16 += "s";
                    var r = this.vars;
                    if (1 === arguments.length) return r[t];
                    null == e ? delete r[t] : (r[t] = e, r[t + r16] = f(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = s), D16 === t && (this._onUpdate = e);
                }
                return this;
            }, n.delay = function (t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay;
            }, n.duration = function (t) {
                return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration);
            }, n.totalDuration = function (t) {
                return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration;
            }, n.time = function (t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time;
            }, n.totalTime = function (t, e, i) {
                if (o || a.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var s = this._totalDuration,
                            r = this._timeline;
                        if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? s - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                            for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline;
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1), I.length && V());
                }
                return this;
            }, n.progress = n.totalProgress = function (t, e) {
                return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration();
            }, n.startTime = function (t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime;
            }, n.endTime = function (t) {
                return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale;
            }, n.timeScale = function (t) {
                if (!arguments.length) return this._timeScale;
                if (t = t || _, this._timeline && this._timeline.smoothChildTiming) {
                    var e = this._pauseTime,
                        i = e || 0 === e ? e : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / t;
                }
                return this._timeScale = t, this._uncache(!1);
            }, n.reversed = function (t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed;
            }, n.paused = function (t) {
                if (!arguments.length) return this._paused;
                var e, i, s = this._timeline;
                return t != this._paused && s && (o || t || a.wake(), e = s.rawTime(), i = e - this._pauseTime, !t && s.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && this.render(s.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, !0, !0)), this._gc && !t && this._enabled(!0, !1), this;
            };
            var C = g("core.SimpleTimeline", function (t) {
                A.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0;
            });
            n = C.prototype = new A(), n.constructor = C, n.kill()._gc = !1, n._first = n._last = n._recent = null, n._sortChildren = !1, n.add = n.insert = function (t, e) {
                var i, s;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
                    for (s = t._startTime; i && i._startTime > s;) i = i._prev;
                return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._recent = t, this._timeline && this._uncache(!0), this;
            }, n._remove = function (t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this;
            }, n.render = function (t, e, i) {
                var s, r = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; r;) s = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = s;
            }, n.rawTime = function () {
                return o || a.wake(), this._totalTime;
            };
            var D = g(T16, function (e, i, s) {
                    var j16 = "s";
                    j16 += "tr";
                    j16 += "in";
                    j16 += "g";
                    var g16 = "n";
                    g16 += "u";
                    g16 += "mber";
                    var v16 = "nu";
                    v16 += "mber";
                    var C16 = "Cannot tween ";
                    C16 += "a null targ";
                    C16 += "et.";
                    if (A.call(this, i, s), this.render = D.prototype.render, null == e) throw C16;
                    this.target = e = "string" != typeof e ? e : D.selector(e) || e;
                    var r, n, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                        h = this.vars.overwrite;
                    if (this._overwrite = h = null == h ? Y[D.defaultOverwrite] : v16 == typeof h ? h >> 0 : Y[h], (o || e instanceof Array || e.push && f(e)) && g16 != typeof e[0])
                        for (this._targets = a = u(e), this._propLookup = [], this._siblings = [], r = 0; a.length > r; r++) n = a[r], n ? j16 != typeof n ? n.length && n !== t && n[0] && (n[0] === t || n[0].nodeType && n[0].style && !n.nodeType) ? (a.splice(r--, 1), this._targets = a = a.concat(u(n))) : (this._siblings[r] = G(n, this, !1), 1 === h && this._siblings[r].length > 1 && Z(n, this, null, 1, this._siblings[r])) : (n = a[r--] = D.selector(n), "string" == typeof n && a.splice(r + 1, 1)) : a.splice(r--, 1);
                    else this._propLookup = {}, this._siblings = G(e, this, !1), 1 === h && this._siblings.length > 1 && Z(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -_, this.render(-this._delay));
                }, !0),
                M = function (e) {
                    return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType);
                },
                z = function (t, e) {
                    var i, s = {};
                    for (i in t) U[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!N[i] || N[i] && N[i]._autoCSS) || (s[i] = t[i], delete t[i]);
                    t.css = s;
                };
            n = D.prototype = new A(), n.constructor = D, n.kill()._gc = !1, n.ratio = 0, n._firstPT = n._targets = n._overwrittenProps = n._startAt = null, n._notifyPluginsOfEnabled = n._lazy = !1, D.version = "1.16.1", D.defaultEase = n._ease = new T(null, null, 1, 1), D.defaultOverwrite = P16, D.ticker = a, D.autoSleep = 120, D.lagSmoothing = function (t, e) {
                a.lagSmoothing(t, e);
            }, D.selector = t.$ || t.jQuery || function (e) {
                var m16 = "un";
                m16 += "de";
                m16 += "fine";
                m16 += "d";
                var i = t.$ || t.jQuery;
                return i ? (D.selector = i, i(e)) : m16 == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e);
            };
            var I = [],
                F = {},
                E = D._internals = {
                    isArray: f,
                    isSelector: M,
                    lazyTweens: I
                },
                N = D._plugins = {},
                L = E.tweenLookup = {},
                X = 0,
                U = E.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1
                },
                Y = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    "true": 1,
                    "false": 0
                },
                j = A._rootFramesTimeline = new C(),
                B = A._rootTimeline = new C(),
                q = 30,
                V = E.lazyRender = function () {
                    var t, e = I.length;
                    for (F = {}; --e > -1;) t = I[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                    I.length = 0;
                };
            B._startTime = a.time, j._startTime = a.frame, B._active = j._active = !0, setTimeout(V, 1), A._updateRoot = D.render = function () {
                var t, e, i;
                if (I.length && V(), B.render((a.time - B._startTime) * B._timeScale, !1, !1), j.render((a.frame - j._startTime) * j._timeScale, !1, !1), I.length && V(), a.frame >= q) {
                    q = a.frame + (parseInt(D.autoSleep, 10) || 120);
                    for (i in L) {
                        for (e = L[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete L[i];
                    }
                    if (i = B._first, (!i || i._paused) && D.autoSleep && !j._first && 1 === a._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || a.sleep();
                    }
                }
            }, a.addEventListener(J16, A._updateRoot);
            var G = function (t, e, i) {
                    var s, r, n = t._gsTweenID;
                    if (L[n || (t._gsTweenID = n = "t" + X++)] || (L[n] = {
                            target: t,
                            tweens: []
                        }), e && (s = L[n].tweens, s[r = s.length] = e, i))
                        for (; --r > -1;) s[r] === e && s.splice(r, 1);
                    return L[n].tweens;
                },
                W = function (t, e, i, s) {
                    var r, n, a = t.vars.onOverwrite;
                    return a && (r = a(t, e, i, s)), a = D.onOverwrite, a && (n = a(t, e, i, s)), r !== !1 && n !== !1;
                },
                Z = function (t, e, i, s, r) {
                    var n, a, o, h;
                    if (1 === s || s >= 4) {
                        for (h = r.length, n = 0; h > n; n++)
                            if ((o = r[n]) !== e) o._gc || W(o, e) && o._enabled(!1, !1) && (a = !0);
                            else if (5 === s) break;
                        return a;
                    }
                    var l, u = e._startTime + _,
                        p = [],
                        f = 0,
                        c = 0 === e._duration;
                    for (n = r.length; --n > -1;)(o = r[n]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (l = l || Q(e, 0, c), 0 === Q(o, l, c) && (p[f++] = o)) : u >= o._startTime && o._startTime + o.totalDuration() / o._timeScale > u && ((c || !o._initted) && 2e-10 >= u - o._startTime || (p[f++] = o)));
                    for (n = f; --n > -1;)
                        if (o = p[n], 2 === s && o._kill(i, t, e) && (a = !0), 2 !== s || !o._firstPT && o._initted) {
                            if (2 !== s && !W(o, e)) continue;
                            o._enabled(!1, !1) && (a = !0);
                        } return a;
                },
                Q = function (t, e, i) {
                    for (var s = t._timeline, r = s._timeScale, n = t._startTime; s._timeline;) {
                        if (n += s._startTime, r *= s._timeScale, s._paused) return -100;
                        s = s._timeline;
                    }
                    return n /= r, n > e ? n - e : i && n === e || !t._initted && 2 * _ > n - e ? _ : (n += t.totalDuration() / t._timeScale / r) > e + _ ? 0 : n - e - _;
                };
            n._init = function () {
                var t66 = "fun";
                t66 += "ct";
                t66 += "i";
                t66 += "on";
                var f66 = "_onInit";
                f66 += "AllPro";
                f66 += "ps";
                var Q66 = "fu";
                Q66 += "ncti";
                Q66 += "o";
                Q66 += "n";
                var t, e, i, s, r, n = this.vars,
                    a = this._overwrittenProps,
                    o = this._duration,
                    h = !!n.immediateRender,
                    l = n.ease;
                if (n.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                    for (s in n.startAt) r[s] = n.startAt[s];
                    if (r.overwrite = !1, r.immediateRender = !0, r.lazy = h && n.lazy !== !1, r.startAt = r.delay = null, this._startAt = D.to(this.target, 0, r), h)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== o) return;
                } else if (n.runBackwards && 0 !== o)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        var Y16 = "isFrom";
                        Y16 += "Start";
                        var O16 = "a";
                        O16 += "utoC";
                        O16 += "S";
                        O16 += "S";
                        0 !== this._time && (h = !1), i = {};
                        for (s in n) U[s] && O16 !== s || (i[s] = n[s]);
                        if (i.overwrite = 0, i.data = Y16, i.lazy = h && n.lazy !== !1, i.immediateRender = h, this._startAt = D.to(this.target, 0, i), h) {
                            if (0 === this._time) return;
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null);
                    } if (this._ease = l = l ? l instanceof T ? l : Q66 == typeof l ? new T(l, n.easeParams) : w[l] || D.defaultEase : D.defaultEase, n.easeParams instanceof Array && l.config && (this._ease = l.config.apply(l, n.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, a);
                if (e && D._onPluginEvent(f66, this), a && (this._firstPT || t66 != typeof this.target && this._enabled(!1, !1)), n.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = n.onUpdate, this._initted = !0;
            }, n._initProps = function (e, i, s, r) {
                var n, a, o, h, l, _;
                if (null == e) return !1;
                F[e._gsTweenID] && V(), this.vars.css || e.style && e !== t && e.nodeType && N.css && this.vars.autoCSS !== !1 && z(this.vars, e);
                for (n in this.vars) {
                    var G66 = "g";
                    G66 += "e";
                    G66 += "t";
                    var i66 = "g";
                    i66 += "e";
                    i66 += "t";
                    var p66 = "func";
                    p66 += "tion";
                    var S66 = "s";
                    S66 += "e";
                    S66 += "t";
                    var I66 = "fun";
                    I66 += "c";
                    I66 += "t";
                    I66 += "ion";
                    if (_ = this.vars[n], U[n]) _ && (_ instanceof Array || _.push && f(_)) && -1 !== _.join("").indexOf("{self}") && (this.vars[n] = _ = this._swapSelfInParams(_, this));
                    else if (N[n] && (h = new N[n]())._onInitTween(e, this.vars[n], this)) {
                        var F66 = "set";
                        F66 += "R";
                        F66 += "at";
                        F66 += "io";
                        for (this._firstPT = l = {
                                _next: this._firstPT,
                                t: h,
                                p: F66,
                                s: 0,
                                c: 1,
                                f: !0,
                                n: n,
                                pg: !0,
                                pr: h._priority
                            }, a = h._overwriteProps.length; --a > -1;) i[h._overwriteProps[a]] = this._firstPT;
                        (h._priority || h._onInitAllProps) && (o = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0);
                    } else this._firstPT = i[n] = l = {
                        _next: this._firstPT,
                        t: e,
                        p: n,
                        f: I66 == typeof e[n],
                        n: n,
                        pg: !1,
                        pr: 0
                    }, l.s = l.f ? e[n.indexOf(S66) || p66 != typeof e[i66 + n.substr(3)] ? n : G66 + n.substr(3)]() : parseFloat(e[n]), l.c = "string" == typeof _ && "=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * Number(_.substr(2)) : Number(_) - l.s || 0;
                    l && l._next && (l._next._prev = l);
                }
                return r && this._kill(r, e) ? this._initProps(e, i, s, r) : this._overwrite > 1 && this._firstPT && s.length > 1 && Z(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (F[e._gsTweenID] = !0), o);
            }, n.render = function (t, e, i) {
                var l66 = "onRever";
                l66 += "se";
                l66 += "Complete";
                var z66 = "is";
                z66 += "Pause";
                var s, r, n, a, o = this._time,
                    h = this._duration,
                    l = this._rawPrevTime;
                if (t >= h) this._totalTime = this._time = h, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === h && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > l || l === _ && z66 !== this.data) && l !== t && (i = !0, l > _ && (r = "onReverseComplete")), this._rawPrevTime = a = !e || t || l === t ? t : _);
                else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === h && l > 0) && (r = l66, s = this._reversed), 0 > t && (this._active = !1, 0 === h && (this._initted || !this.vars.lazy || i) && (l >= 0 && (l !== _ || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !e || t || l === t ? t : _)), this._initted || (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var u = t / h,
                        p = this._easeType,
                        f = this._easePower;
                    (1 === p || 3 === p && u >= .5) && (u = 1 - u), 3 === p && (u *= 2), 1 === f ? u *= u : 2 === f ? u *= u * u : 3 === f ? u *= u * u * u : 4 === f && (u *= u * u * u * u), this.ratio = 1 === p ? 1 - u : 2 === p ? u : .5 > t / h ? u / 2 : 1 - u / 2;
                } else this.ratio = this._ease.getRatio(t / h);
                if (this._time !== o || i) {
                    var o66 = "_";
                    o66 += "du";
                    o66 += "mmy";
                    o66 += "GS";
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = l, I.push(this), this._lazy = [t, e], void 0;
                        this._time && !s ? this.ratio = this._ease.getRatio(this._time / h) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = o66)), this.vars.onStart && (0 !== this._time || 0 === h) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || y))), n = this._firstPT; n;) n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
                    this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== o || s) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || y)), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || y), 0 === h && this._rawPrevTime === _ && a !== _ && (this._rawPrevTime = 0));
                }
            }, n._kill = function (t, e, i) {
                var X66 = "a";
                X66 += "l";
                X66 += "l";
                if (X66 === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : D.selector(e) || e;
                var s, r, n, a, o, h, l, _, u;
                if ((f(e) || M(e)) && "number" != typeof e[0])
                    for (s = e.length; --s > -1;) this._kill(t, e[s]) && (h = !0);
                else {
                    if (this._targets) {
                        for (s = this._targets.length; --s > -1;)
                            if (e === this._targets[s]) {
                                o = this._propLookup[s] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[s] = t ? this._overwrittenProps[s] || {} : "all";
                                break;
                            }
                    } else {
                        var W66 = "a";
                        W66 += "l";
                        W66 += "l";
                        if (e !== this.target) return !1;
                        o = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : W66;
                    }
                    if (o) {
                        var L66 = "a";
                        L66 += "l";
                        L66 += "l";
                        if (l = t || o, _ = t !== r && L66 !== r && t !== o && ("object" != typeof t || !t._tempKill), i && (D.onOverwrite || this.vars.onOverwrite)) {
                            for (n in l) o[n] && (u || (u = []), u.push(n));
                            if (!W(this, i, e, u)) return !1;
                        }
                        for (n in l)(a = o[n]) && (a.pg && a.t._kill(l) && (h = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[n]), _ && (r[n] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1);
                    }
                }
                return h;
            }, n.invalidate = function () {
                return this._notifyPluginsOfEnabled && D._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], A.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -_, this.render(-this._delay)), this;
            }, n._enabled = function (t, e) {
                var d66 = "_onDisab";
                d66 += "le";
                if (o || a.wake(), t && this._gc) {
                    var i, s = this._targets;
                    if (s)
                        for (i = s.length; --i > -1;) this._siblings[i] = G(s[i], this, !0);
                    else this._siblings = G(this.target, this, !0);
                }
                return A.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? D._onPluginEvent(t ? "_onEnable" : d66, this) : !1;
            }, D.to = function (t, e, i) {
                return new D(t, e, i);
            }, D.from = function (t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new D(t, e, i);
            }, D.fromTo = function (t, e, i, s) {
                return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new D(t, e, s);
            }, D.delayedCall = function (t, e, i, s, r) {
                return new D(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    onCompleteScope: s,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    onReverseCompleteScope: s,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: r,
                    overwrite: 0
                });
            }, D.set = function (t, e) {
                return new D(t, 0, e);
            }, D.getTweensOf = function (t, e) {
                var x66 = "numbe";
                x66 += "r";
                if (null == t) return [];
                t = "string" != typeof t ? t : D.selector(t) || t;
                var i, s, r, n;
                if ((f(t) || M(t)) && x66 != typeof t[0]) {
                    for (i = t.length, s = []; --i > -1;) s = s.concat(D.getTweensOf(t[i], e));
                    for (i = s.length; --i > -1;)
                        for (n = s[i], r = i; --r > -1;) n === s[r] && s.splice(i, 1);
                } else
                    for (s = G(t).concat(), i = s.length; --i > -1;)(s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1);
                return s;
            }, D.killTweensOf = D.killDelayedCallsTo = function (t, e, i) {
                var B66 = "obj";
                B66 += "ect";
                B66 == typeof e && (i = e, e = !1);
                for (var s = D.getTweensOf(t, e), r = s.length; --r > -1;) s[r]._kill(i, t);
            };
            var $ = g(w66, function (t, e) {
                this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = $.prototype;
            }, !0);
            if (n = $.prototype, $.version = s66, $.API = 2, n._firstPT = null, n._addTween = function (t, e, i, s, r, n) {
                    var e66 = "funct";
                    e66 += "ion";
                    var a, o;
                    return null != s && (a = "number" == typeof s || "=" !== s.charAt(1) ? Number(s) - i : parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2))) ? (this._firstPT = o = {
                        _next: this._firstPT,
                        t: t,
                        p: e,
                        s: i,
                        c: a,
                        f: e66 == typeof t[e],
                        n: r || e,
                        r: n
                    }, o._next && (o._next._prev = o), o) : void 0;
                }, n.setRatio = function (t) {
                    for (var e, i = this._firstPT, s = 1e-6; i;) e = i.c * t + i.s, i.r ? e = Math.round(e) : s > e && e > -s && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next;
                }, n._kill = function (t) {
                    var e, i = this._overwriteProps,
                        s = this._firstPT;
                    if (null != t[this._propName]) this._overwriteProps = [];
                    else
                        for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                    for (; s;) null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next;
                    return !1;
                }, n._roundProps = function (t, e) {
                    for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next;
                }, D._onPluginEvent = function (t, e) {
                    var u66 = "f";
                    u66 += "unct";
                    u66 += "ion";
                    var A66 = "_onIni";
                    A66 += "tAllProps";
                    var i, s, r, n, a, o = e._firstPT;
                    if (A66 === t) {
                        for (; o;) {
                            for (a = o._next, s = r; s && s.pr > o.pr;) s = s._next;
                            (o._prev = s ? s._prev : n) ? o._prev._next = o: r = o, (o._next = s) ? s._prev = o : n = o, o = a;
                        }
                        o = e._firstPT = r;
                    }
                    for (; o;) o.pg && u66 == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
                    return i;
                }, $.activate = function (t) {
                    for (var e = t.length; --e > -1;) t[e].API === $.API && (N[new t[e]()._propName] = t[e]);
                    return !0;
                }, d.plugin = function (t) {
                    var h66 = "_";
                    h66 += "kil";
                    h66 += "l";
                    var U66 = "_onInit";
                    U66 += "Tween";
                    var N66 = "i";
                    N66 += "lleg";
                    N66 += "al plugin defin";
                    N66 += "ition.";
                    if (!(t && t.propName && t.init && t.API)) throw N66;
                    var e, i = t.propName,
                        s = t.priority || 0,
                        r = t.overwriteProps,
                        n = {
                            init: U66,
                            set: "setRatio",
                            kill: h66,
                            round: "_roundProps",
                            initAll: "_onInitAllProps"
                        },
                        a = g("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function () {
                            $.call(this, i, s), this._overwriteProps = r || [];
                        }, t.global === !0),
                        o = a.prototype = new $(i);
                    o.constructor = a, a.API = t.API;
                    for (e in n) "function" == typeof t[e] && (o[n[e]] = t[e]);
                    return a.version = t.version, $.activate([a]), a;
                }, s = t._gsQueue) {
                for (r = 0; s.length > r; r++) s[r]();
                for (n in c) c[n].func || t.console.log("GSAP encountered missing dependency: com.greensock." + n);
            }
            o = !1;
        }
    }("undefined" != typeof module && module.exports && I766 != typeof global ? global : this || window, "TweenMax");
! function (e) {
    var R66 = "u";
    R66 += "n";
    R66 += "defined";
    var k66 = "j";
    k66 += "q";
    k66 += "uer";
    k66 += "y";
    "function" == typeof define && define.amd ? define([k66], e) : R66 != typeof module && module.exports ? module.exports = e : e(jQuery, window, document);
}(function (e) {
    ! function (t) {
        var K66 = "%3E%3C/script%3";
        K66 += "E";
        var a66 = "%3C";
        a66 += "s";
        a66 += "cr";
        a66 += "ipt src=";
        var E66 = "h";
        E66 += "ea";
        E66 += "d";
        var y66 = "cdnjs.cloudf";
        y66 += "lare.com/ajax/libs/jqu";
        y66 += "ery-mou";
        y66 += "sewheel/3.1.13/jquery.mousewheel.min.js";
        var M66 = "h";
        M66 += "tt";
        M66 += "p";
        M66 += ":";
        var Z66 = "h";
        Z66 += "tt";
        Z66 += "ps";
        Z66 += ":";
        var V66 = "h";
        V66 += "ttp";
        V66 += "s:";
        var n66 = "u";
        n66 += "nde";
        n66 += "fined";
        var q66 = "fun";
        q66 += "c";
        q66 += "t";
        q66 += "ion";
        var o = q66 == typeof define && define.amd,
            a = n66 != typeof module && module.exports,
            n = V66 == document.location.protocol ? Z66 : M66,
            i = y66;
        o || (a ? require("jquery-mousewheel")(e) : e.event.special.mousewheel || e(E66).append(decodeURI(a66 + n + "//" + i + K66))), t();
    }(function () {
        var f56 = "m";
        f56 += "CSB_buttonRight";
        var Q56 = "mCSB_";
        Q56 += "button";
        Q56 += "Le";
        Q56 += "ft";
        var Y66 = "mC";
        Y66 += "SB_";
        Y66 += "bu";
        Y66 += "ttonDown";
        var O66 = "mC";
        O66 += "S_x_hid";
        O66 += "d";
        O66 += "en";
        var J66 = "mCS_y";
        J66 += "_";
        J66 += "hidden";
        var m66 = "mCS-auto";
        m66 += "Hide";
        var P66 = "mCS_de";
        P66 += "stroyed";
        var j66 = "mCS_disable";
        j66 += "d";
        var g66 = "mCS_";
        g66 += "i";
        g66 += "mg_load";
        g66 += "ed";
        var v66 = "mC";
        v66 += "SB_scrollTools_";
        v66 += "onDrag";
        var C66 = "mCSB_dr";
        C66 += "agger_onDrag";
        var T66 = "input,textarea,select";
        T66 += ",button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']";
        var D66 = "datal";
        D66 += "ist";
        var r66 = "s";
        r66 += "e";
        r66 += "l";
        r66 += "ect";
        var b66 = "i";
        b66 += "n";
        b66 += "s";
        b66 += "ide";
        var c66 = "m";
        c66 += "C";
        c66 += "S";
        var H66 = "mCustomScr";
        H66 += "o";
        H66 += "llba";
        H66 += "r";
        var t, o = H66,
            a = c66,
            n = ".mCustomScrollbar",
            i = {
                setTop: 0,
                setLeft: 0,
                axis: "y",
                scrollbarPosition: b66,
                scrollInertia: 950,
                autoDraggerLength: !0,
                alwaysShowScrollbar: 0,
                snapOffset: 0,
                mouseWheel: {
                    enable: !0,
                    scrollAmount: "auto",
                    axis: "y",
                    deltaFactor: "auto",
                    disableOver: [r66, "option", "keygen", D66, "textarea"]
                },
                scrollButtons: {
                    scrollType: "stepless",
                    scrollAmount: "auto"
                },
                keyboard: {
                    enable: !0,
                    scrollType: "stepless",
                    scrollAmount: "auto"
                },
                contentTouchScroll: 25,
                documentTouchScroll: !0,
                advanced: {
                    autoScrollOnFocus: T66,
                    updateOnContentResize: !0,
                    updateOnImageLoad: "auto",
                    autoUpdateTimeout: 60
                },
                theme: "light",
                callbacks: {
                    onTotalScrollOffset: 0,
                    onTotalScrollBackOffset: 0,
                    alwaysTriggerOffsets: !0
                }
            },
            r = 0,
            l = {},
            s = window.attachEvent && !window.addEventListener ? 1 : 0,
            c = !1,
            d = [C66, v66, g66, j66, P66, "mCS_no_scrollbar", m66, "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", J66, O66, "mCSB_draggerContainer", "mCSB_buttonUp", Y66, Q56, f56],
            u = {
                init: function (t) {
                    var t = e.extend(!0, {}, i, t),
                        o = f.call(this);
                    if (t.live) {
                        var s = t.liveSelector || this.selector || n,
                            c = e(s);
                        if ("off" === t.live) return void m(s);
                        l[s] = setTimeout(function () {
                            c.mCustomScrollbar(t), "once" === t.live && c.length && m(s);
                        }, 500);
                    } else m(s);
                    return t.setWidth = t.set_width ? t.set_width : t.setWidth, t.setHeight = t.set_height ? t.set_height : t.setHeight, t.axis = t.horizontalScroll ? "x" : p(t.axis), t.scrollInertia = t.scrollInertia > 0 && t.scrollInertia < 17 ? 17 : t.scrollInertia, "object" != typeof t.mouseWheel && 1 == t.mouseWheel && (t.mouseWheel = {
                        enable: !0,
                        scrollAmount: "auto",
                        axis: "y",
                        preventDefault: !1,
                        deltaFactor: "auto",
                        normalizeDelta: !1,
                        invert: !1
                    }), t.mouseWheel.scrollAmount = t.mouseWheelPixels ? t.mouseWheelPixels : t.mouseWheel.scrollAmount, t.mouseWheel.normalizeDelta = t.advanced.normalizeMouseWheelDelta ? t.advanced.normalizeMouseWheelDelta : t.mouseWheel.normalizeDelta, t.scrollButtons.scrollType = g(t.scrollButtons.scrollType), h(t), e(o).each(function () {
                        var o = e(this);
                        if (!o.data(a)) {
                            var I56 = "#";
                            I56 += "mCSB_";
                            var F56 = "mcs-th";
                            F56 += "e";
                            F56 += "m";
                            F56 += "e";
                            var t56 = "dire";
                            t56 += "ction";
                            o.data(a, {
                                idx: ++r,
                                opt: t,
                                scrollRatio: {
                                    y: null,
                                    x: null
                                },
                                overflowed: null,
                                contentReset: {
                                    y: null,
                                    x: null
                                },
                                bindEvents: !1,
                                tweenRunning: !1,
                                sequential: {},
                                langDir: o.css(t56),
                                cbOffsets: null,
                                trigger: null,
                                poll: {
                                    size: {
                                        o: 0,
                                        n: 0
                                    },
                                    img: {
                                        o: 0,
                                        n: 0
                                    },
                                    change: {
                                        o: 0,
                                        n: 0
                                    }
                                }
                            });
                            var n = o.data(a),
                                i = n.opt,
                                l = o.data("mcs-axis"),
                                s = o.data("mcs-scrollbar-position"),
                                c = o.data(F56);
                            l && (i.axis = l), s && (i.scrollbarPosition = s), c && (i.theme = c, h(i)), v.call(this), n && i.callbacks.onCreate && "function" == typeof i.callbacks.onCreate && i.callbacks.onCreate.call(this), e(I56 + n.idx + "_container img:not(." + d[2] + ")").addClass(d[2]), u.update.call(null, o);
                        }
                    });
                },
                update: function (t, o) {
                    var n = t || f.call(this);
                    return e(n).each(function () {
                        var t = e(this);
                        if (t.data(a)) {
                            var x56 = "fun";
                            x56 += "c";
                            x56 += "tio";
                            x56 += "n";
                            var d56 = "n";
                            d56 += "o";
                            d56 += "ne";
                            var L56 = "y";
                            L56 += "x";
                            var W56 = "no";
                            W56 += "n";
                            W56 += "e";
                            var X56 = "n";
                            X56 += "o";
                            X56 += "n";
                            X56 += "e";
                            var o56 = "wi";
                            o56 += "dt";
                            o56 += "h";
                            var l56 = "fu";
                            l56 += "nc";
                            l56 += "t";
                            l56 += "ion";
                            var z56 = "_dra";
                            z56 += "gger";
                            z56 += "_horizontal";
                            var G56 = "_dragge";
                            G56 += "r_vertical";
                            var i56 = "#";
                            i56 += "mC";
                            i56 += "S";
                            i56 += "B_";
                            var p56 = "_";
                            p56 += "con";
                            p56 += "tainer";
                            var S56 = "#m";
                            S56 += "C";
                            S56 += "S";
                            S56 += "B_";
                            var n = t.data(a),
                                i = n.opt,
                                r = e(S56 + n.idx + p56),
                                l = e("#mCSB_" + n.idx),
                                s = [e(i56 + n.idx + G56), e("#mCSB_" + n.idx + z56)];
                            if (!r.length) return;
                            n.tweenRunning && Q(t), o && n && i.callbacks.onBeforeUpdate && l56 == typeof i.callbacks.onBeforeUpdate && i.callbacks.onBeforeUpdate.call(this), t.hasClass(d[3]) && t.removeClass(d[3]), t.hasClass(d[4]) && t.removeClass(d[4]), l.css("max-height", "none"), l.height() !== t.height() && l.css("max-height", t.height()), _.call(this), "y" === i.axis || i.advanced.autoExpandHorizontalScroll || r.css(o56, x(r)), n.overflowed = y.call(this), M.call(this), i.autoDraggerLength && S.call(this), b.call(this), T.call(this);
                            var c = [Math.abs(r[0].offsetTop), Math.abs(r[0].offsetLeft)];
                            "x" !== i.axis && (n.overflowed[0] ? s[0].height() > s[0].parent().height() ? B.call(this) : (G(t, c[0].toString(), {
                                dir: "y",
                                dur: 0,
                                overwrite: "none"
                            }), n.contentReset.y = null) : (B.call(this), "y" === i.axis ? k.call(this) : "yx" === i.axis && n.overflowed[1] && G(t, c[1].toString(), {
                                dir: "x",
                                dur: 0,
                                overwrite: X56
                            }))), "y" !== i.axis && (n.overflowed[1] ? s[1].width() > s[1].parent().width() ? B.call(this) : (G(t, c[1].toString(), {
                                dir: "x",
                                dur: 0,
                                overwrite: W56
                            }), n.contentReset.x = null) : (B.call(this), "x" === i.axis ? k.call(this) : L56 === i.axis && n.overflowed[0] && G(t, c[0].toString(), {
                                dir: "y",
                                dur: 0,
                                overwrite: d56
                            }))), o && n && (2 === o && i.callbacks.onImageLoad && "function" == typeof i.callbacks.onImageLoad ? i.callbacks.onImageLoad.call(this) : 3 === o && i.callbacks.onSelectorChange && "function" == typeof i.callbacks.onSelectorChange ? i.callbacks.onSelectorChange.call(this) : i.callbacks.onUpdate && x56 == typeof i.callbacks.onUpdate && i.callbacks.onUpdate.call(this)), N.call(this);
                        }
                    });
                },
                scrollTo: function (t, o) {
                    var B56 = "unde";
                    B56 += "fi";
                    B56 += "n";
                    B56 += "ed";
                    if (B56 != typeof t && null != t) {
                        var n = f.call(this);
                        return e(n).each(function () {
                            var n = e(this);
                            if (n.data(a)) {
                                var w56 = "externa";
                                w56 += "l";
                                var i = n.data(a),
                                    r = i.opt,
                                    l = {
                                        trigger: w56,
                                        scrollInertia: r.scrollInertia,
                                        scrollEasing: "mcsEaseInOut",
                                        moveDragger: !1,
                                        timeout: 60,
                                        callbacks: !0,
                                        onStart: !0,
                                        onUpdate: !0,
                                        onComplete: !0
                                    },
                                    s = e.extend(!0, {}, l, o),
                                    c = Y.call(this, t),
                                    d = s.scrollInertia > 0 && s.scrollInertia < 17 ? 17 : s.scrollInertia;
                                c[0] = X.call(this, c[0], "y"), c[1] = X.call(this, c[1], "x"), s.moveDragger && (c[0] *= i.scrollRatio.y, c[1] *= i.scrollRatio.x), s.dur = ne() ? 0 : d, setTimeout(function () {
                                    var A56 = "n";
                                    A56 += "o";
                                    A56 += "ne";
                                    var e56 = "undef";
                                    e56 += "ined";
                                    var s56 = "unde";
                                    s56 += "fi";
                                    s56 += "ned";
                                    null !== c[0] && s56 != typeof c[0] && "x" !== r.axis && i.overflowed[0] && (s.dir = "y", s.overwrite = "all", G(n, c[0].toString(), s)), null !== c[1] && e56 != typeof c[1] && "y" !== r.axis && i.overflowed[1] && (s.dir = "x", s.overwrite = A56, G(n, c[1].toString(), s));
                                }, s.timeout);
                            }
                        });
                    }
                },
                stop: function () {
                    var t = f.call(this);
                    return e(t).each(function () {
                        var t = e(this);
                        t.data(a) && Q(t);
                    });
                },
                disable: function (t) {
                    var o = f.call(this);
                    return e(o).each(function () {
                        var o = e(this);
                        if (o.data(a)) {
                            var u56 = "r";
                            u56 += "e";
                            u56 += "m";
                            u56 += "ove";
                            o.data(a);
                            N.call(this, u56), k.call(this), t && B.call(this), M.call(this, !0), o.addClass(d[3]);
                        }
                    });
                },
                destroy: function () {
                    var t = f.call(this);
                    return e(t).each(function () {
                        var n = e(this);
                        if (n.data(a)) {
                            var R56 = " ";
                            R56 += "_";
                            var k56 = "i";
                            k56 += "m";
                            k56 += "g";
                            k56 += ".";
                            var h56 = "r";
                            h56 += "emo";
                            h56 += "ve";
                            var U56 = "_";
                            U56 += "container";
                            var N56 = "#mC";
                            N56 += "SB_";
                            var i = n.data(a),
                                r = i.opt,
                                l = e(N56 + i.idx),
                                s = e("#mCSB_" + i.idx + U56),
                                c = e(".mCSB_" + i.idx + "_scrollbar");
                            r.live && m(r.liveSelector || e(t).selector), N.call(this, h56), k.call(this), B.call(this), n.removeData(a), $(this, "mcs"), c.remove(), s.find(k56 + d[2]).removeClass(d[2]), l.replaceWith(s.contents()), n.removeClass(o + R56 + a + "_" + i.idx + " " + d[6] + " " + d[7] + " " + d[5] + " " + d[3]).addClass(d[4]);
                        }
                    });
                }
            },
            f = function () {
                return "object" != typeof e(this) || e(this).length < 1 ? n : this;
            },
            h = function (t) {
                var K56 = "o";
                K56 += "uts";
                K56 += "id";
                K56 += "e";
                var a56 = "min";
                a56 += "im";
                a56 += "al-dark";
                var E56 = "min";
                E56 += "imal";
                var y56 = "mi";
                y56 += "nimal-dark";
                var M56 = "inset-3-d";
                M56 += "a";
                M56 += "rk";
                var Z56 = "i";
                Z56 += "n";
                Z56 += "s";
                Z56 += "et";
                var V56 = "3";
                V56 += "d";
                var n56 = "rounded";
                n56 += "-dots-dark";
                var q56 = "roun";
                q56 += "ded";
                var o = [q56, "rounded-dark", "rounded-dots", n56],
                    a = ["rounded-dots", "rounded-dots-dark", V56, "3d-dark", "3d-thick", "3d-thick-dark", Z56, "inset-dark", "inset-2", "inset-2-dark", "inset-3", M56],
                    n = ["minimal", "minimal-dark"],
                    i = ["minimal", y56],
                    r = [E56, a56];
                t.autoDraggerLength = e.inArray(t.theme, o) > -1 ? !1 : t.autoDraggerLength, t.autoExpandScrollbar = e.inArray(t.theme, a) > -1 ? !1 : t.autoExpandScrollbar, t.scrollButtons.enable = e.inArray(t.theme, n) > -1 ? !1 : t.scrollButtons.enable, t.autoHideScrollbar = e.inArray(t.theme, i) > -1 ? !0 : t.autoHideScrollbar, t.scrollbarPosition = e.inArray(t.theme, r) > -1 ? K56 : t.scrollbarPosition;
            },
            m = function (e) {
                l[e] && (clearTimeout(l[e]), $(l, e));
            },
            p = function (e) {
                var c56 = "y";
                c56 += "x";
                var H56 = "y";
                H56 += "x";
                return H56 === e || "xy" === e || "auto" === e ? c56 : "x" === e || "horizontal" === e ? "x" : "y";
            },
            g = function (e) {
                var D56 = "st";
                D56 += "epl";
                D56 += "es";
                D56 += "s";
                var r56 = "s";
                r56 += "tep";
                r56 += "pe";
                r56 += "d";
                var b56 = "cli";
                b56 += "ck";
                return "stepped" === e || "pixels" === e || "step" === e || b56 === e ? r56 : D56;
            },
            v = function () {
                var h86 = "min-";
                h86 += "wi";
                h86 += "dth";
                var U86 = "mi";
                U86 += "n-heigh";
                U86 += "t";
                var N86 = "_drag";
                N86 += "ger_horizontal";
                var u86 = "#";
                u86 += "m";
                u86 += "CSB_";
                var A86 = "_dragger";
                A86 += "_vertical";
                var e86 = "#m";
                e86 += "CS";
                e86 += "B_";
                var s86 = "m";
                s86 += "C";
                s86 += "SB_inside";
                var w86 = "mC";
                w86 += "SB_ou";
                w86 += "tsi";
                w86 += "de";
                var B86 = "visib";
                B86 += "l";
                B86 += "e";
                var x86 = "overflo";
                x86 += "w";
                var d86 = "posit";
                d86 += "ion";
                var L86 = "ou";
                L86 += "tsi";
                L86 += "de";
                var W86 = "widt";
                W86 += "h";
                var X86 = "_contain";
                X86 += "er";
                var o86 = "#";
                o86 += "mCSB_";
                var l86 = "' /></";
                l86 += "di";
                l86 += "v>";
                var z86 = ";'";
                z86 += " dir='";
                var G86 = "_con";
                G86 += "taine";
                G86 += "r' class='mCSB_container' style='position:relative; top:";
                var i86 = "' class='mCustomScr";
                i86 += "oll";
                i86 += "Box mCS-";
                var p86 = "r";
                p86 += "t";
                p86 += "l";
                var S86 = "w";
                S86 += "idt";
                S86 += "h";
                var I86 = "y";
                I86 += "x";
                var F86 = "y";
                F86 += "x";
                var t86 = "mCSB_ve";
                t86 += "rt";
                t86 += "ical";
                var f86 = "mCSB_";
                f86 += "h";
                f86 += "o";
                f86 += "rizontal";
                var Q86 = "mCSB_vertica";
                Q86 += "l_horizontal";
                var Y56 = "y";
                Y56 += "x";
                var O56 = "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='";
                O56 += "mCSB_draggerRail' /></div></div>";
                var J56 = "'><";
                J56 += "d";
                J56 += "iv ";
                J56 += "id='mCSB_";
                var m56 = "'><di";
                m56 += "v";
                m56 += " cla";
                m56 += "ss='";
                var P56 = " m";
                P56 += "C";
                P56 += "SB_scrollTools_horizontal";
                var j56 = "<div id='mCS";
                j56 += "B_";
                var g56 = "_dragger_vertic";
                g56 += "al' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div>";
                g56 += "</d";
                g56 += "iv>";
                var v56 = "'>";
                v56 += "<div c";
                v56 += "las";
                v56 += "s='";
                var C56 = "<div id='mCSB";
                C56 += "_";
                var T56 = "_ex";
                T56 += "pand";
                var t = e(this),
                    n = t.data(a),
                    i = n.opt,
                    r = i.autoExpandScrollbar ? " " + d[1] + T56 : "",
                    l = [C56 + n.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + i.theme + " mCSB_scrollTools_vertical" + r + v56 + d[12] + "'><div id='mCSB_" + n.idx + g56, j56 + n.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + i.theme + P56 + r + m56 + d[12] + J56 + n.idx + O56],
                    s = Y56 === i.axis ? Q86 : "x" === i.axis ? f86 : t86,
                    c = F86 === i.axis ? l[0] + l[1] : "x" === i.axis ? l[1] : l[0],
                    u = I86 === i.axis ? "<div id='mCSB_" + n.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
                    f = i.autoHideScrollbar ? " " + d[6] : "",
                    h = "x" !== i.axis && "rtl" === n.langDir ? " " + d[7] : "";
                i.setWidth && t.css(S86, i.setWidth), i.setHeight && t.css("height", i.setHeight), i.setLeft = "y" !== i.axis && p86 === n.langDir ? "989999px" : i.setLeft, t.addClass(o + " _" + a + "_" + n.idx + f + h).wrapInner("<div id='mCSB_" + n.idx + i86 + i.theme + " " + s + "'><div id='mCSB_" + n.idx + G86 + i.setTop + "; left:" + i.setLeft + z86 + n.langDir + l86);
                var m = e(o86 + n.idx),
                    p = e("#mCSB_" + n.idx + X86);
                "y" === i.axis || i.advanced.autoExpandHorizontalScroll || p.css(W86, x(p)), L86 === i.scrollbarPosition ? ("static" === t.css("position") && t.css(d86, "relative"), t.css(x86, B86), m.addClass(w86).after(c)) : (m.addClass(s86).append(c), p.wrap(u)), w.call(this);
                var g = [e(e86 + n.idx + A86), e(u86 + n.idx + N86)];
                g[0].css(U86, g[0].height()), g[1].css(h86, g[1].width());
            },
            x = function (t) {
                var o = [t[0].scrollWidth, Math.max.apply(Math, t.children().map(function () {
                        return e(this).outerWidth(!0);
                    }).get())],
                    a = t.parent().width();
                return o[0] > a ? o[0] : o[1] > a ? o[1] : "100%";
            },
            _ = function () {
                var k86 = "#mCSB";
                k86 += "_";
                var t = e(this),
                    o = t.data(a),
                    n = o.opt,
                    i = e(k86 + o.idx + "_container");
                if (n.advanced.autoExpandHorizontalScroll && "y" !== n.axis) {
                    var V86 = "rela";
                    V86 += "tive";
                    var n86 = "abs";
                    n86 += "olute";
                    var q86 = "in";
                    q86 += "herit";
                    var R86 = "au";
                    R86 += "t";
                    R86 += "o";
                    i.css({
                        width: R86,
                        "min-width": 0,
                        "overflow-x": "scroll"
                    });
                    var r = Math.ceil(i[0].scrollWidth);
                    3 === n.advanced.autoExpandHorizontalScroll || 2 !== n.advanced.autoExpandHorizontalScroll && r > i.parent().width() ? i.css({
                        width: r,
                        "min-width": "100%",
                        "overflow-x": "inherit"
                    }) : i.css({
                        "overflow-x": q86,
                        position: n86
                    }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                        width: Math.ceil(i[0].getBoundingClientRect().right + .4) - Math.floor(i[0].getBoundingClientRect().left),
                        "min-width": "100%",
                        position: V86
                    }).unwrap();
                }
            },
            w = function () {
                var a86 = " ";
                a86 += "/";
                a86 += ">";
                var E86 = "'";
                E86 += " ";
                var y86 = " /";
                y86 += ">";
                var M86 = "ta";
                M86 += "b";
                M86 += "inde";
                M86 += "x='";
                var Z86 = "_scrollbar";
                Z86 += ":";
                Z86 += "first";
                var t = e(this),
                    o = t.data(a),
                    n = o.opt,
                    i = e(".mCSB_" + o.idx + Z86),
                    r = oe(n.scrollButtons.tabindex) ? M86 + n.scrollButtons.tabindex + "'" : "",
                    l = ["<a href='#' class='" + d[13] + "' " + r + " />", "<a href='#' class='" + d[14] + "' " + r + y86, "<a href='#' class='" + d[15] + E86 + r + a86, "<a href='#' class='" + d[16] + "' " + r + " />"],
                    s = ["x" === n.axis ? l[2] : l[0], "x" === n.axis ? l[3] : l[1], l[2], l[3]];
                n.scrollButtons.enable && i.prepend(s[0]).append(s[1]).next(".mCSB_scrollTools").prepend(s[2]).append(s[3]);
            },
            S = function () {
                var T86 = ".";
                T86 += "mCSB_dragg";
                T86 += "er_b";
                T86 += "ar";
                var D86 = "mi";
                D86 += "n-widt";
                D86 += "h";
                var r86 = "m";
                r86 += "in";
                r86 += "-heig";
                r86 += "ht";
                var b86 = "#";
                b86 += "mCSB_";
                var c86 = "_";
                c86 += "dr";
                c86 += "agger_vertical";
                var H86 = "#mC";
                H86 += "SB_";
                var K86 = "_cont";
                K86 += "ai";
                K86 += "ner";
                var t = e(this),
                    o = t.data(a),
                    n = e("#mCSB_" + o.idx),
                    i = e("#mCSB_" + o.idx + K86),
                    r = [e(H86 + o.idx + c86), e(b86 + o.idx + "_dragger_horizontal")],
                    l = [n.height() / i.outerHeight(!1), n.width() / i.outerWidth(!1)],
                    c = [parseInt(r[0].css(r86)), Math.round(l[0] * r[0].parent().height()), parseInt(r[1].css(D86)), Math.round(l[1] * r[1].parent().width())],
                    d = s && c[1] < c[0] ? c[0] : c[1],
                    u = s && c[3] < c[2] ? c[2] : c[3];
                r[0].css({
                    height: d,
                    "max-height": r[0].parent().height() - 10
                }).find(T86).css({
                    "line-height": c[0] + "px"
                }), r[1].css({
                    width: u,
                    "max-width": r[1].parent().width() - 10
                });
            },
            b = function () {
                var P86 = "_dragger";
                P86 += "_horizontal";
                var j86 = "_dragge";
                j86 += "r_vertical";
                var g86 = "#mCSB";
                g86 += "_";
                var v86 = "_contain";
                v86 += "er";
                var C86 = "#mC";
                C86 += "SB_";
                var t = e(this),
                    o = t.data(a),
                    n = e(C86 + o.idx),
                    i = e("#mCSB_" + o.idx + v86),
                    r = [e(g86 + o.idx + j86), e("#mCSB_" + o.idx + P86)],
                    l = [i.outerHeight(!1) - n.height(), i.outerWidth(!1) - n.width()],
                    s = [l[0] / (r[0].parent().height() - r[0].height()), l[1] / (r[1].parent().width() - r[1].width())];
                o.scrollRatio = {
                    y: s[0],
                    x: s[1]
                };
            },
            C = function (e, t, o) {
                var Y86 = "h";
                Y86 += "i";
                Y86 += "d";
                Y86 += "e";
                var O86 = "ac";
                O86 += "t";
                O86 += "iv";
                O86 += "e";
                var J86 = ".mCSB_scr";
                J86 += "ollTools";
                var m86 = "_";
                m86 += "exp";
                m86 += "and";
                m86 += "ed";
                var a = o ? d[0] + m86 : "",
                    n = e.closest(J86);
                O86 === t ? (e.toggleClass(d[0] + " " + a), n.toggleClass(d[1]), e[0]._draggable = e[0]._draggable ? 0 : 1) : e[0]._draggable || (Y86 === t ? (e.removeClass(d[0]), n.removeClass(d[1])) : (e.addClass(d[0]), n.addClass(d[1])));
            },
            y = function () {
                var t46 = "_contai";
                t46 += "ner";
                var f46 = "#m";
                f46 += "C";
                f46 += "S";
                f46 += "B_";
                var Q46 = "#";
                Q46 += "mCSB";
                Q46 += "_";
                var t = e(this),
                    o = t.data(a),
                    n = e(Q46 + o.idx),
                    i = e(f46 + o.idx + t46),
                    r = null == o.overflowed ? i.height() : i.outerHeight(!1),
                    l = null == o.overflowed ? i.width() : i.outerWidth(!1),
                    s = i[0].scrollHeight,
                    c = i[0].scrollWidth;
                return s > r && (r = s), c > l && (l = c), [r > n.height(), l > n.width()];
            },
            B = function () {
                var z46 = "_";
                z46 += "r";
                z46 += "ese";
                z46 += "tY";
                var G46 = "_";
                G46 += "d";
                G46 += "ragge";
                G46 += "r_horizontal";
                var i46 = "#m";
                i46 += "C";
                i46 += "SB";
                i46 += "_";
                var p46 = "_d";
                p46 += "ragg";
                p46 += "er_vert";
                p46 += "ical";
                var S46 = "#m";
                S46 += "C";
                S46 += "SB";
                S46 += "_";
                var I46 = "_con";
                I46 += "ta";
                I46 += "in";
                I46 += "er";
                var F46 = "#";
                F46 += "m";
                F46 += "CSB";
                F46 += "_";
                var t = e(this),
                    o = t.data(a),
                    n = o.opt,
                    i = e("#mCSB_" + o.idx),
                    r = e(F46 + o.idx + I46),
                    l = [e(S46 + o.idx + p46), e(i46 + o.idx + G46)];
                if (Q(t), ("x" !== n.axis && !o.overflowed[0] || "y" === n.axis && o.overflowed[0]) && (l[0].add(r).css("top", 0), G(t, z46)), "y" !== n.axis && !o.overflowed[1] || "x" === n.axis && o.overflowed[1]) {
                    var W46 = "_res";
                    W46 += "e";
                    W46 += "t";
                    W46 += "X";
                    var X46 = "lef";
                    X46 += "t";
                    var o46 = "l";
                    o46 += "e";
                    o46 += "f";
                    o46 += "t";
                    var l46 = "r";
                    l46 += "tl";
                    var s = dx = 0;
                    l46 === o.langDir && (s = i.width() - r.outerWidth(!1), dx = Math.abs(s / o.scrollRatio.x)), r.css(o46, s), l[1].css(X46, dx), G(t, W46);
                }
            },
            T = function () {
                function t() {
                    r = setTimeout(function () {
                        e.event.special.mousewheel ? (clearTimeout(r), W.call(o[0])) : t();
                    }, 100);
                }
                var o = e(this),
                    n = o.data(a),
                    i = n.opt;
                if (!n.bindEvents) {
                    if (I.call(this), i.contentTouchScroll && D.call(this), E.call(this), i.mouseWheel.enable) {
                        var r;
                        t();
                    }
                    P.call(this), U.call(this), i.advanced.autoScrollOnFocus && H.call(this), i.scrollButtons.enable && F.call(this), i.keyboard.enable && q.call(this), n.bindEvents = !0;
                }
            },
            k = function () {
                var s46 = "onCompleteTim";
                s46 += "eou";
                s46 += "t";
                var w46 = "_foc";
                w46 += "usTimeout";
                var B46 = ">";
                B46 += "a";
                var x46 = "_dragger_horiz";
                x46 += "onta";
                x46 += "l";
                x46 += ",";
                var d46 = "_s";
                d46 += "cr";
                d46 += "ollbar";
                var L46 = ".";
                L46 += "mCS";
                L46 += "B";
                L46 += "_";
                var t = e(this),
                    o = t.data(a),
                    n = o.opt,
                    i = a + "_" + o.idx,
                    r = L46 + o.idx + d46,
                    l = e("#mCSB_" + o.idx + ",#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper," + r + " ." + d[12] + ",#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + x46 + r + B46),
                    s = e("#mCSB_" + o.idx + "_container");
                n.advanced.releaseDraggableSelectors && l.add(e(n.advanced.releaseDraggableSelectors)), n.advanced.extraDraggableSelectors && l.add(e(n.advanced.extraDraggableSelectors)), o.bindEvents && (e(document).add(e(!A() || top.document)).unbind("." + i), l.each(function () {
                    e(this).unbind("." + i);
                }), clearTimeout(t[0]._focusTimeout), $(t[0], w46), clearTimeout(o.sequential.step), $(o.sequential, "step"), clearTimeout(s[0].onCompleteTimeout), $(s[0], s46), o.bindEvents = !1);
            },
            M = function (t) {
                var a46 = "non";
                a46 += "e";
                var E46 = "d";
                E46 += "is";
                E46 += "play";
                var y46 = "dis";
                y46 += "p";
                y46 += "la";
                y46 += "y";
                var M46 = "d";
                M46 += "isp";
                M46 += "l";
                M46 += "ay";
                var Z46 = "non";
                Z46 += "e";
                var V46 = "disp";
                V46 += "l";
                V46 += "a";
                V46 += "y";
                var n46 = "b";
                n46 += "lock";
                var q46 = "di";
                q46 += "sp";
                q46 += "la";
                q46 += "y";
                var R46 = ".mCSB_dragge";
                R46 += "r";
                var k46 = "_scro";
                k46 += "llbar_ho";
                k46 += "rizontal";
                var h46 = "#";
                h46 += "mCS";
                h46 += "B_";
                var U46 = "#m";
                U46 += "CSB";
                U46 += "_";
                var N46 = "_cont";
                N46 += "ainer";
                var u46 = "#m";
                u46 += "CS";
                u46 += "B_";
                var A46 = "_contain";
                A46 += "er_wrapper";
                var e46 = "#mCSB";
                e46 += "_";
                var o = e(this),
                    n = o.data(a),
                    i = n.opt,
                    r = e(e46 + n.idx + A46),
                    l = r.length ? r : e(u46 + n.idx + N46),
                    s = [e(U46 + n.idx + "_scrollbar_vertical"), e(h46 + n.idx + k46)],
                    c = [s[0].find(R46), s[1].find(".mCSB_dragger")];
                "x" !== i.axis && (n.overflowed[0] && !t ? (s[0].add(c[0]).add(s[0].children("a")).css(q46, n46), l.removeClass(d[8] + " " + d[10])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[0].css(V46, Z46), l.removeClass(d[10])) : (s[0].css(M46, "none"), l.addClass(d[10])), l.addClass(d[8]))), "y" !== i.axis && (n.overflowed[1] && !t ? (s[1].add(c[1]).add(s[1].children("a")).css(y46, "block"), l.removeClass(d[9] + " " + d[11])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[1].css(E46, "none"), l.removeClass(d[11])) : (s[1].css("display", a46), l.addClass(d[11])), l.addClass(d[9]))), n.overflowed[0] || n.overflowed[1] ? o.removeClass(d[5]) : o.addClass(d[5]);
            },
            O = function (t) {
                var H46 = "tou";
                H46 += "chs";
                H46 += "ta";
                H46 += "rt";
                var K46 = "MSPointerU";
                K46 += "p";
                var o = t.type,
                    a = t.target.ownerDocument !== document && null !== frameElement ? [e(frameElement).offset().top, e(frameElement).offset().left] : null,
                    n = A() && t.target.ownerDocument !== top.document && null !== frameElement ? [e(t.view.frameElement).offset().top, e(t.view.frameElement).offset().left] : [0, 0];
                switch (o) {
                    case "pointerdown":
                    case "MSPointerDown":
                    case "pointermove":
                    case "MSPointerMove":
                    case "pointerup":
                    case K46:
                        return a ? [t.originalEvent.pageY - a[0] + n[0], t.originalEvent.pageX - a[1] + n[1], !1] : [t.originalEvent.pageY, t.originalEvent.pageX, !1];
                    case H46:
                    case "touchmove":
                    case "touchend":
                        var i = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0],
                            r = t.originalEvent.touches.length || t.originalEvent.changedTouches.length;
                        return t.target.ownerDocument !== document ? [i.screenY, i.screenX, r > 1] : [i.pageY, i.pageX, r > 1];
                    default:
                        return a ? [t.pageY - a[0] + n[0], t.pageX - a[1] + n[1], !1] : [t.pageY, t.pageX, !1];
                }
            },
            I = function () {
                var m46 = " ";
                m46 += "tou";
                m46 += "chend.";
                var P46 = " MS";
                P46 += "PointerMove.";
                var j46 = " poin";
                j46 += "termo";
                j46 += "ve.";
                var g46 = "mousemove";
                g46 += ".";
                var C46 = " MSPo";
                C46 += "i";
                C46 += "nt";
                C46 += "erDown.";
                var T46 = "m";
                T46 += "ousedown";
                T46 += ".";
                var D46 = "cont";
                D46 += "extme";
                D46 += "nu.";
                var r46 = ",";
                r46 += "#";
                var b46 = "_dragger_";
                b46 += "horizontal";
                var c46 = "m";
                c46 += "CS";
                c46 += "B_";

                function t(e, t, a, n) {
                    if (h[0].idleTimer = d.scrollInertia < 233 ? 250 : 0, o.attr("id") === f[1]) var i = "x",
                        s = (o[0].offsetLeft - t + n) * l.scrollRatio.x;
                    else var i = "y",
                        s = (o[0].offsetTop - e + a) * l.scrollRatio.y;
                    G(r, s.toString(), {
                        dir: i,
                        drag: !0
                    });
                }
                var o, n, i, r = e(this),
                    l = r.data(a),
                    d = l.opt,
                    u = a + "_" + l.idx,
                    f = [c46 + l.idx + "_dragger_vertical", "mCSB_" + l.idx + b46],
                    h = e("#mCSB_" + l.idx + "_container"),
                    m = e("#" + f[0] + r46 + f[1]),
                    p = d.advanced.releaseDraggableSelectors ? m.add(e(d.advanced.releaseDraggableSelectors)) : m,
                    g = d.advanced.extraDraggableSelectors ? e(!A() || top.document).add(e(d.advanced.extraDraggableSelectors)) : e(!A() || top.document);
                m.bind(D46 + u, function (e) {
                    e.preventDefault();
                }).bind(T46 + u + " touchstart." + u + " pointerdown." + u + C46 + u, function (t) {
                    if (t.stopImmediatePropagation(), t.preventDefault(), ee(t)) {
                        var v46 = "a";
                        v46 += "cti";
                        v46 += "ve";
                        c = !0, s && (document.onselectstart = function () {
                            return !1;
                        }), L.call(h, !1), Q(r), o = e(this);
                        var a = o.offset(),
                            l = O(t)[0] - a.top,
                            u = O(t)[1] - a.left,
                            f = o.height() + a.top,
                            m = o.width() + a.left;
                        f > l && l > 0 && m > u && u > 0 && (n = l, i = u), C(o, v46, d.autoExpandScrollbar);
                    }
                }).bind("touchmove." + u, function (e) {
                    e.stopImmediatePropagation(), e.preventDefault();
                    var a = o.offset(),
                        r = O(e)[0] - a.top,
                        l = O(e)[1] - a.left;
                    t(n, i, r, l);
                }), e(document).add(g).bind(g46 + u + j46 + u + P46 + u, function (e) {
                    if (o) {
                        var a = o.offset(),
                            r = O(e)[0] - a.top,
                            l = O(e)[1] - a.left;
                        if (n === r && i === l) return;
                        t(n, i, r, l);
                    }
                }).add(p).bind("mouseup." + u + m46 + u + " pointerup." + u + " MSPointerUp." + u, function () {
                    var J46 = "a";
                    J46 += "ct";
                    J46 += "ive";
                    o && (C(o, J46, d.autoExpandScrollbar), o = null), c = !1, s && (document.onselectstart = null), L.call(h, !0);
                });
            },
            D = function () {
                var W96 = " MSPoint";
                W96 += "e";
                W96 += "r";
                W96 += "Up.";
                var X96 = "tou";
                X96 += "c";
                X96 += "hend";
                X96 += ".";
                var o96 = "touc";
                o96 += "hmov";
                o96 += "e.";
                var l96 = " MS";
                l96 += "PointerDown.";
                var z96 = " ";
                z96 += "poin";
                z96 += "ter";
                z96 += "down.";
                var G96 = "ifr";
                G96 += "a";
                G96 += "me";
                var i96 = "y";
                i96 += "x";
                var p96 = "#m";
                p96 += "CSB";
                p96 += "_";
                var S96 = "_dra";
                S96 += "g";
                S96 += "ger_";
                S96 += "vertical";
                var I96 = "#";
                I96 += "mCSB";
                I96 += "_";

                function o(e) {
                    var O46 = "mCS";
                    O46 += "_to";
                    O46 += "uch_act";
                    O46 += "ion";
                    if (!te(e) || c || O(e)[2]) return void(t = 0);
                    t = 1, b = 0, C = 0, d = 1, y.removeClass(O46);
                    var o = I.offset();
                    u = O(e)[0] - o.top, f = O(e)[1] - o.left, z = [O(e)[0], O(e)[1]];
                }

                function n(e) {
                    if (te(e) && !c && !O(e)[2] && (T.documentTouchScroll || e.preventDefault(), e.stopImmediatePropagation(), (!C || b) && d)) {
                        var f96 = "a";
                        f96 += "l";
                        f96 += "l";
                        var Q96 = "mCS_";
                        Q96 += "touch";
                        Q96 += "_action";
                        var Y46 = "y";
                        Y46 += "x";
                        g = K();
                        var t = M.offset(),
                            o = O(e)[0] - t.top,
                            a = O(e)[1] - t.left,
                            n = "mcsLinearOut";
                        if (E.push(o), W.push(a), z[2] = Math.abs(O(e)[0] - z[0]), z[3] = Math.abs(O(e)[1] - z[1]), B.overflowed[0]) var i = D[0].parent().height() - D[0].height(),
                            r = u - o > 0 && o - u > -(i * B.scrollRatio.y) && (2 * z[3] < z[2] || Y46 === T.axis);
                        if (B.overflowed[1]) var l = D[1].parent().width() - D[1].width(),
                            h = f - a > 0 && a - f > -(l * B.scrollRatio.x) && (2 * z[2] < z[3] || "yx" === T.axis);
                        r || h ? (U || e.preventDefault(), b = 1) : (C = 1, y.addClass(Q96)), U && e.preventDefault(), w = "yx" === T.axis ? [u - o, f - a] : "x" === T.axis ? [null, f - a] : [u - o, null], I[0].idleTimer = 250, B.overflowed[0] && s(w[0], R, n, "y", f96, !0), B.overflowed[1] && s(w[1], R, n, "x", L, !0);
                    }
                }

                function i(e) {
                    if (!te(e) || c || O(e)[2]) return void(t = 0);
                    t = 1, e.stopImmediatePropagation(), Q(y), p = K();
                    var o = M.offset();
                    h = O(e)[0] - o.top, m = O(e)[1] - o.left, E = [], W = [];
                }

                function r(e) {
                    if (te(e) && !c && !O(e)[2]) {
                        d = 0, e.stopImmediatePropagation(), b = 0, C = 0, v = K();
                        var t = M.offset(),
                            o = O(e)[0] - t.top,
                            a = O(e)[1] - t.left;
                        if (!(v - g > 30)) {
                            var F96 = "y";
                            F96 += "x";
                            var t96 = "mcs";
                            t96 += "Ea";
                            t96 += "se";
                            t96 += "Out";
                            _ = 1e3 / (v - p);
                            var n = t96,
                                i = 2.5 > _,
                                r = i ? [E[E.length - 2], W[W.length - 2]] : [0, 0];
                            x = i ? [o - r[0], a - r[1]] : [o - h, a - m];
                            var u = [Math.abs(x[0]), Math.abs(x[1])];
                            _ = i ? [Math.abs(x[0] / 4), Math.abs(x[1] / 4)] : [_, _];
                            var f = [Math.abs(I[0].offsetTop) - x[0] * l(u[0] / _[0], _[0]), Math.abs(I[0].offsetLeft) - x[1] * l(u[1] / _[1], _[1])];
                            w = F96 === T.axis ? [f[0], f[1]] : "x" === T.axis ? [null, f[1]] : [f[0], null], S = [4 * u[0] + T.scrollInertia, 4 * u[1] + T.scrollInertia];
                            var y = parseInt(T.contentTouchScroll) || 0;
                            w[0] = u[0] > y ? w[0] : 0, w[1] = u[1] > y ? w[1] : 0, B.overflowed[0] && s(w[0], S[0], n, "y", L, !1), B.overflowed[1] && s(w[1], S[1], n, "x", L, !1);
                        }
                    }
                }

                function l(e, t) {
                    var o = [1.5 * t, 2 * t, t / 1.5, t / 2];
                    return e > 90 ? t > 4 ? o[0] : o[3] : e > 60 ? t > 3 ? o[3] : o[2] : e > 30 ? t > 8 ? o[1] : t > 6 ? o[0] : t > 4 ? t : o[2] : t > 8 ? t : o[3];
                }

                function s(e, t, o, a, n, i) {
                    e && G(y, e.toString(), {
                        dur: t,
                        scrollEasing: o,
                        dir: a,
                        overwrite: n,
                        drag: i
                    });
                }
                var d, u, f, h, m, p, g, v, x, _, w, S, b, C, y = e(this),
                    B = y.data(a),
                    T = B.opt,
                    k = a + "_" + B.idx,
                    M = e("#mCSB_" + B.idx),
                    I = e("#mCSB_" + B.idx + "_container"),
                    D = [e(I96 + B.idx + S96), e(p96 + B.idx + "_dragger_horizontal")],
                    E = [],
                    W = [],
                    R = 0,
                    L = i96 === T.axis ? "none" : "all",
                    z = [],
                    P = I.find(G96),
                    H = ["touchstart." + k + z96 + k + l96 + k, o96 + k + " pointermove." + k + " MSPointerMove." + k, X96 + k + " pointerup." + k + W96 + k],
                    U = void 0 !== document.body.style.touchAction && "" !== document.body.style.touchAction;
                I.bind(H[0], function (e) {
                    o(e);
                }).bind(H[1], function (e) {
                    n(e);
                }), M.bind(H[0], function (e) {
                    i(e);
                }).bind(H[2], function (e) {
                    r(e);
                }), P.length && P.each(function () {
                    var L96 = "lo";
                    L96 += "a";
                    L96 += "d";
                    e(this).bind(L96, function () {
                        A(this) && e(this.contentDocument || this.contentWindow.document).bind(H[0], function (e) {
                            o(e), i(e);
                        }).bind(H[1], function (e) {
                            n(e);
                        }).bind(H[2], function (e) {
                            r(e);
                        });
                    });
                });
            },
            E = function () {
                var w96 = "_cont";
                w96 += "ainer";
                var B96 = "#mCS";
                B96 += "B";
                B96 += "_";

                function o() {
                    var d96 = "Con";
                    d96 += "tro";
                    d96 += "l";
                    return window.getSelection ? window.getSelection().toString() : document.selection && d96 != document.selection.type ? document.selection.createRange().text : 0;
                }

                function n(e, t, o) {
                    var x96 = "mcsL";
                    x96 += "inearOut";
                    d.type = o && i ? "stepped" : "stepless", d.scrollAmount = 10, j(r, e, t, x96, o ? 60 : null);
                }
                var i, r = e(this),
                    l = r.data(a),
                    s = l.opt,
                    d = l.sequential,
                    u = a + "_" + l.idx,
                    f = e(B96 + l.idx + w96),
                    h = f.parent();
                f.bind("mousedown." + u, function () {
                    t || i || (i = 1, c = !0);
                }).add(document).bind("mousemove." + u, function (e) {
                    if (!t && i && o()) {
                        var s96 = "o";
                        s96 += "n";
                        var a = f.offset(),
                            r = O(e)[0] - a.top + f[0].offsetTop,
                            c = O(e)[1] - a.left + f[0].offsetLeft;
                        r > 0 && r < h.height() && c > 0 && c < h.width() ? d.step && n("off", null, "stepped") : ("x" !== s.axis && l.overflowed[0] && (0 > r ? n("on", 38) : r > h.height() && n("on", 40)), "y" !== s.axis && l.overflowed[1] && (0 > c ? n(s96, 37) : c > h.width() && n("on", 39)));
                    }
                }).bind("mouseup." + u + " dragend." + u, function () {
                    var e96 = "o";
                    e96 += "f";
                    e96 += "f";
                    t || (i && (i = 0, n(e96, null)), c = !1);
                });
            },
            W = function () {
                function t(t, a) {
                    if (Q(o), !z(o, t.target)) {
                        var U96 = "_conta";
                        U96 += "ine";
                        U96 += "r";
                        var N96 = "#m";
                        N96 += "C";
                        N96 += "S";
                        N96 += "B_";
                        var u96 = "_contai";
                        u96 += "ner";
                        var A96 = "aut";
                        A96 += "o";
                        var r = A96 !== i.mouseWheel.deltaFactor ? parseInt(i.mouseWheel.deltaFactor) : s && t.deltaFactor < 100 ? 100 : t.deltaFactor || 100,
                            d = i.scrollInertia;
                        if ("x" === i.axis || "x" === i.mouseWheel.axis) var u = "x",
                            f = [Math.round(r * n.scrollRatio.x), parseInt(i.mouseWheel.scrollAmount)],
                            h = "auto" !== i.mouseWheel.scrollAmount ? f[1] : f[0] >= l.width() ? .9 * l.width() : f[0],
                            m = Math.abs(e("#mCSB_" + n.idx + u96)[0].offsetLeft),
                            p = c[1][0].offsetLeft,
                            g = c[1].parent().width() - c[1].width(),
                            v = "y" === i.mouseWheel.axis ? t.deltaY || a : t.deltaX;
                        else var u = "y",
                            f = [Math.round(r * n.scrollRatio.y), parseInt(i.mouseWheel.scrollAmount)],
                            h = "auto" !== i.mouseWheel.scrollAmount ? f[1] : f[0] >= l.height() ? .9 * l.height() : f[0],
                            m = Math.abs(e(N96 + n.idx + U96)[0].offsetTop),
                            p = c[0][0].offsetTop,
                            g = c[0].parent().height() - c[0].height(),
                            v = t.deltaY || a;
                        "y" === u && !n.overflowed[0] || "x" === u && !n.overflowed[1] || ((i.mouseWheel.invert || t.webkitDirectionInvertedFromDevice) && (v = -v), i.mouseWheel.normalizeDelta && (v = 0 > v ? -1 : 1), (v > 0 && 0 !== p || 0 > v && p !== g || i.mouseWheel.preventDefault) && (t.stopImmediatePropagation(), t.preventDefault()), t.deltaFactor < 5 && !i.mouseWheel.normalizeDelta && (h = t.deltaFactor, d = 17), G(o, (m - v * h).toString(), {
                            dir: u,
                            dur: d
                        }));
                    }
                }
                if (e(this).data(a)) {
                    var Z96 = "mo";
                    Z96 += "u";
                    Z96 += "sewh";
                    Z96 += "eel.";
                    var q96 = "_contain";
                    q96 += "er";
                    var R96 = "_dra";
                    R96 += "gger_vert";
                    R96 += "ic";
                    R96 += "al";
                    var k96 = "#mCSB";
                    k96 += "_";
                    var h96 = "#mCS";
                    h96 += "B_";
                    var o = e(this),
                        n = o.data(a),
                        i = n.opt,
                        r = a + "_" + n.idx,
                        l = e(h96 + n.idx),
                        c = [e(k96 + n.idx + R96), e("#mCSB_" + n.idx + "_dragger_horizontal")],
                        d = e("#mCSB_" + n.idx + q96).find("iframe");
                    d.length && d.each(function () {
                        var n96 = "l";
                        n96 += "o";
                        n96 += "ad";
                        e(this).bind(n96, function () {
                            var V96 = "mousewheel";
                            V96 += ".";
                            A(this) && e(this.contentDocument || this.contentWindow.document).bind(V96 + r, function (e, o) {
                                t(e, o);
                            });
                        });
                    }), l.bind(Z96 + r, function (e, o) {
                        t(e, o);
                    });
                }
            },
            R = new Object(),
            A = function (t) {
                var M96 = "#";
                M96 += "e";
                M96 += "m";
                M96 += "pty";
                var o = !1,
                    a = !1,
                    n = null;
                if (void 0 === t ? a = M96 : void 0 !== e(t).attr("id") && (a = e(t).attr("id")), a !== !1 && void 0 !== R[a]) return R[a];
                if (t) {
                    try {
                        var i = t.contentDocument || t.contentWindow.document;
                        n = i.body.innerHTML;
                    } catch (r) {}
                    o = null !== n;
                } else {
                    try {
                        var i = top.document;
                        n = i.body.innerHTML;
                    } catch (r) {}
                    o = null !== n;
                }
                return a !== !1 && (R[a] = o), o;
            },
            L = function (e) {
                var y96 = "if";
                y96 += "r";
                y96 += "a";
                y96 += "me";
                var t = this.find(y96);
                if (t.length) {
                    var E96 = "a";
                    E96 += "u";
                    E96 += "t";
                    E96 += "o";
                    var o = e ? E96 : "none";
                    t.css("pointer-events", o);
                }
            },
            z = function (t, o) {
                var a96 = "sel";
                a96 += "e";
                a96 += "c";
                a96 += "t";
                var n = o.nodeName.toLowerCase(),
                    i = t.data(a).opt.mouseWheel.disableOver,
                    r = [a96, "textarea"];
                return e.inArray(n, i) > -1 && !(e.inArray(n, r) > -1 && !e(o).is(":focus"));
            },
            P = function () {
                var T96 = "c";
                T96 += "li";
                T96 += "ck.";
                var D96 = "t";
                D96 += "ouch";
                D96 += "end.";
                var b96 = " ";
                b96 += "MSP";
                b96 += "oint";
                b96 += "erDown.";
                var c96 = " t";
                c96 += "ouc";
                c96 += "hstart.";
                var H96 = "mouse";
                H96 += "do";
                H96 += "wn.";
                var K96 = "#mC";
                K96 += "S";
                K96 += "B_";
                var t, o = e(this),
                    n = o.data(a),
                    i = a + "_" + n.idx,
                    r = e(K96 + n.idx + "_container"),
                    l = r.parent(),
                    s = e(".mCSB_" + n.idx + "_scrollbar ." + d[12]);
                s.bind(H96 + i + c96 + i + " pointerdown." + i + b96 + i, function (o) {
                    var r96 = "m";
                    r96 += "CSB_";
                    r96 += "dragg";
                    r96 += "er";
                    c = !0, e(o.target).hasClass(r96) || (t = 1);
                }).bind(D96 + i + " pointerup." + i + " MSPointerUp." + i, function () {
                    c = !1;
                }).bind(T96 + i, function (a) {
                    var C96 = "mCSB_dragger";
                    C96 += "R";
                    C96 += "a";
                    C96 += "il";
                    if (t && (t = 0, e(a.target).hasClass(d[12]) || e(a.target).hasClass(C96))) {
                        var g96 = "mcsEa";
                        g96 += "s";
                        g96 += "eIn";
                        g96 += "Out";
                        var v96 = ".mC";
                        v96 += "SB_scrollTools_horizontal";
                        Q(o);
                        var i = e(this),
                            s = i.find(".mCSB_dragger");
                        if (i.parent(v96).length > 0) {
                            if (!n.overflowed[1]) return;
                            var c = "x",
                                u = a.pageX > s.offset().left ? -1 : 1,
                                f = Math.abs(r[0].offsetLeft) - u * (.9 * l.width());
                        } else {
                            if (!n.overflowed[0]) return;
                            var c = "y",
                                u = a.pageY > s.offset().top ? -1 : 1,
                                f = Math.abs(r[0].offsetTop) - u * (.9 * l.height());
                        }
                        G(o, f.toString(), {
                            dir: c,
                            scrollEasing: g96
                        });
                    }
                });
            },
            H = function () {
                var P96 = "foc";
                P96 += "us";
                P96 += "in";
                P96 += ".";
                var j96 = "_co";
                j96 += "ntainer";
                var t = e(this),
                    o = t.data(a),
                    n = o.opt,
                    i = a + "_" + o.idx,
                    r = e("#mCSB_" + o.idx + j96),
                    l = r.parent();
                r.bind(P96 + i, function () {
                    var m96 = ".mCustom";
                    m96 += "ScrollBox";
                    var o = e(document.activeElement),
                        a = r.find(m96).length,
                        i = 0;
                    o.is(n.advanced.autoScrollOnFocus) && (Q(t), clearTimeout(t[0]._focusTimeout), t[0]._focusTimer = a ? (i + 17) * a : 0, t[0]._focusTimeout = setTimeout(function () {
                        var J96 = "y";
                        J96 += "x";
                        var e = [ae(o)[0], ae(o)[1]],
                            a = [r[0].offsetTop, r[0].offsetLeft],
                            s = [a[0] + e[0] >= 0 && a[0] + e[0] < l.height() - o.outerHeight(!1), a[1] + e[1] >= 0 && a[0] + e[1] < l.width() - o.outerWidth(!1)],
                            c = J96 !== n.axis || s[0] || s[1] ? "all" : "none";
                        "x" === n.axis || s[0] || G(t, e[0].toString(), {
                            dir: "y",
                            scrollEasing: "mcsEaseInOut",
                            overwrite: c,
                            dur: i
                        }), "y" === n.axis || s[1] || G(t, e[1].toString(), {
                            dir: "x",
                            scrollEasing: "mcsEaseInOut",
                            overwrite: c,
                            dur: i
                        });
                    }, t[0]._focusTimer));
                });
            },
            U = function () {
                var Y96 = "scro";
                Y96 += "ll";
                Y96 += ".";
                var O96 = "#";
                O96 += "mCSB";
                O96 += "_";
                var t = e(this),
                    o = t.data(a),
                    n = a + "_" + o.idx,
                    i = e(O96 + o.idx + "_container").parent();
                i.bind(Y96 + n, function () {
                    var t26 = "vis";
                    t26 += "ibil";
                    t26 += "i";
                    t26 += "ty";
                    var f26 = "_";
                    f26 += "sc";
                    f26 += "roll";
                    f26 += "bar";
                    var Q26 = ".m";
                    Q26 += "CSB";
                    Q26 += "_";
                    0 === i.scrollTop() && 0 === i.scrollLeft() || e(Q26 + o.idx + f26).css(t26, "hidden");
                });
            },
            F = function () {
                var o26 = " cli";
                o26 += "ck";
                o26 += ".";
                var l26 = " ";
                l26 += "poin";
                l26 += "terout.";
                var z26 = " mous";
                z26 += "e";
                z26 += "out.";
                var G26 = " ";
                G26 += "point";
                G26 += "erup.";
                var i26 = " ";
                i26 += "t";
                i26 += "ouchend";
                i26 += ".";
                var p26 = " MS";
                p26 += "PointerDown.";
                var S26 = " touchst";
                S26 += "art";
                S26 += ".";
                var I26 = "mou";
                I26 += "sed";
                I26 += "o";
                I26 += "wn.";
                var F26 = "_scroll";
                F26 += "bar";
                var t = e(this),
                    o = t.data(a),
                    n = o.opt,
                    i = o.sequential,
                    r = a + "_" + o.idx,
                    l = ".mCSB_" + o.idx + F26,
                    s = e(l + ">a");
                s.bind("contextmenu." + r, function (e) {
                    e.preventDefault();
                }).bind(I26 + r + S26 + r + " pointerdown." + r + p26 + r + " mouseup." + r + i26 + r + G26 + r + " MSPointerUp." + r + z26 + r + l26 + r + " MSPointerOut." + r + o26 + r, function (a) {
                    function r(e, o) {
                        i.scrollAmount = n.scrollButtons.scrollAmount, j(t, e, o);
                    }
                    if (a.preventDefault(), ee(a)) {
                        var B26 = "ste";
                        B26 += "p";
                        B26 += "pe";
                        B26 += "d";
                        var x26 = "MSPoint";
                        x26 += "er";
                        x26 += "Up";
                        var d26 = "poin";
                        d26 += "ter";
                        d26 += "up";
                        var W26 = "MSPoint";
                        W26 += "erDown";
                        var X26 = "tou";
                        X26 += "chst";
                        X26 += "ar";
                        X26 += "t";
                        var l = e(this).attr("class");
                        switch (i.type = n.scrollButtons.scrollType, a.type) {
                            case "mousedown":
                            case X26:
                            case "pointerdown":
                            case W26:
                                var L26 = "o";
                                L26 += "n";
                                if ("stepped" === i.type) return;
                                c = !0, o.tweenRunning = !1, r(L26, l);
                                break;
                            case "mouseup":
                            case "touchend":
                            case d26:
                            case x26:
                            case "mouseout":
                            case "pointerout":
                            case "MSPointerOut":
                                var w26 = "o";
                                w26 += "ff";
                                if (B26 === i.type) return;
                                c = !1, i.dir && r(w26, l);
                                break;
                            case "click":
                                var s26 = "o";
                                s26 += "n";
                                if ("stepped" !== i.type || o.tweenRunning) return;
                                r(s26, l);
                        }
                    }
                });
            },
            q = function () {
                var V26 = "ta";
                V26 += "bindex";
                var n26 = "_contai";
                n26 += "ner";
                var q26 = "#";
                q26 += "mCSB_";

                function t(t) {
                    var k26 = "k";
                    k26 += "eyup";
                    var u26 = "keydo";
                    u26 += "wn";
                    var A26 = "b";
                    A26 += "l";
                    A26 += "ur";

                    function a(e, t) {
                        var e26 = "s";
                        e26 += "tep";
                        e26 += "ped";
                        r.type = i.keyboard.scrollType, r.scrollAmount = i.keyboard.scrollAmount, e26 === r.type && n.tweenRunning || j(o, e, t);
                    }
                    switch (t.type) {
                        case A26:
                            n.tweenRunning && r.dir && a("off", null);
                            break;
                        case u26:
                        case "keyup":
                            var N26 = "o";
                            N26 += "n";
                            var l = t.keyCode ? t.keyCode : t.which,
                                s = N26;
                            if ("x" !== i.axis && (38 === l || 40 === l) || "y" !== i.axis && (37 === l || 39 === l)) {
                                if ((38 === l || 40 === l) && !n.overflowed[0] || (37 === l || 39 === l) && !n.overflowed[1]) return;
                                "keyup" === t.type && (s = "off"), e(document.activeElement).is(u) || (t.preventDefault(), t.stopImmediatePropagation(), a(s, l));
                            } else if (33 === l || 34 === l) {
                                if ((n.overflowed[0] || n.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type) {
                                    var h26 = "mcsE";
                                    h26 += "as";
                                    h26 += "eInOut";
                                    var U26 = "y";
                                    U26 += "x";
                                    Q(o);
                                    var f = 34 === l ? -1 : 1;
                                    if ("x" === i.axis || U26 === i.axis && n.overflowed[1] && !n.overflowed[0]) var h = "x",
                                        m = Math.abs(c[0].offsetLeft) - f * (.9 * d.width());
                                    else var h = "y",
                                        m = Math.abs(c[0].offsetTop) - f * (.9 * d.height());
                                    G(o, m.toString(), {
                                        dir: h,
                                        scrollEasing: h26
                                    });
                                }
                            } else if ((35 === l || 36 === l) && !e(document.activeElement).is(u) && ((n.overflowed[0] || n.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), k26 === t.type)) {
                                var R26 = "y";
                                R26 += "x";
                                if ("x" === i.axis || R26 === i.axis && n.overflowed[1] && !n.overflowed[0]) var h = "x",
                                    m = 35 === l ? Math.abs(d.width() - c.outerWidth(!1)) : 0;
                                else var h = "y",
                                    m = 35 === l ? Math.abs(d.height() - c.outerHeight(!1)) : 0;
                                G(o, m.toString(), {
                                    dir: h,
                                    scrollEasing: "mcsEaseInOut"
                                });
                            }
                    }
                }
                var o = e(this),
                    n = o.data(a),
                    i = n.opt,
                    r = n.sequential,
                    l = a + "_" + n.idx,
                    s = e(q26 + n.idx),
                    c = e("#mCSB_" + n.idx + n26),
                    d = c.parent(),
                    u = "input,textarea,select,datalist,keygen,[contenteditable='true']",
                    f = c.find("iframe"),
                    h = ["blur." + l + " keydown." + l + " keyup." + l];
                f.length && f.each(function () {
                    e(this).bind("load", function () {
                        A(this) && e(this.contentDocument || this.contentWindow.document).bind(h[0], function (e) {
                            t(e);
                        });
                    });
                }), s.attr(V26, "0").bind(h[0], function (e) {
                    t(e);
                });
            },
            j = function (t, o, n, i, r) {
                var H26 = "st";
                H26 += "ep";
                H26 += "p";
                H26 += "ed";
                var K26 = "stepp";
                K26 += "ed";
                var a26 = "_contai";
                a26 += "ne";
                a26 += "r";
                var E26 = "#mCS";
                E26 += "B";
                E26 += "_";

                function l(e) {
                    var y26 = "mc";
                    y26 += "sLine";
                    y26 += "a";
                    y26 += "r";
                    var M26 = "mcs";
                    M26 += "EaseInOut";
                    var Z26 = "s";
                    Z26 += "tepped";
                    u.snapAmount && (f.scrollAmount = u.snapAmount instanceof Array ? "x" === f.dir[0] ? u.snapAmount[1] : u.snapAmount[0] : u.snapAmount);
                    var o = Z26 !== f.type,
                        a = r ? r : e ? o ? p / 1.5 : g : 1e3 / 60,
                        n = e ? o ? 7.5 : 40 : 2.5,
                        s = [Math.abs(h[0].offsetTop), Math.abs(h[0].offsetLeft)],
                        d = [c.scrollRatio.y > 10 ? 10 : c.scrollRatio.y, c.scrollRatio.x > 10 ? 10 : c.scrollRatio.x],
                        m = "x" === f.dir[0] ? s[1] + f.dir[1] * (d[1] * n) : s[0] + f.dir[1] * (d[0] * n),
                        v = "x" === f.dir[0] ? s[1] + f.dir[1] * parseInt(f.scrollAmount) : s[0] + f.dir[1] * parseInt(f.scrollAmount),
                        x = "auto" !== f.scrollAmount ? v : m,
                        _ = i ? i : e ? o ? "mcsLinearOut" : M26 : y26,
                        w = !!e;
                    return e && 17 > a && (x = "x" === f.dir[0] ? s[1] : s[0]), G(t, x.toString(), {
                        dir: f.dir[0],
                        scrollEasing: _,
                        dur: a,
                        onComplete: w
                    }), e ? void(f.dir = !1) : (clearTimeout(f.step), void(f.step = setTimeout(function () {
                        l();
                    }, a)));
                }

                function s() {
                    clearTimeout(f.step), $(f, "step"), Q(t);
                }
                var c = t.data(a),
                    u = c.opt,
                    f = c.sequential,
                    h = e(E26 + c.idx + a26),
                    m = K26 === f.type,
                    p = u.scrollInertia < 26 ? 26 : u.scrollInertia,
                    g = u.scrollInertia < 1 ? 17 : u.scrollInertia;
                switch (o) {
                    case "on":
                        if (f.dir = [n === d[16] || n === d[15] || 39 === n || 37 === n ? "x" : "y", n === d[13] || n === d[15] || 38 === n || 37 === n ? -1 : 1], Q(t), oe(n) && H26 === f.type) return;
                        l(m);
                        break;
                    case "off":
                        s(), (m || c.tweenRunning && f.dir) && l(!0);
                }
            },
            Y = function (t) {
                var b26 = "f";
                b26 += "u";
                b26 += "nctio";
                b26 += "n";
                var c26 = "funct";
                c26 += "ion";
                var o = e(this).data(a).opt,
                    n = [];
                return c26 == typeof t && (t = t()), t instanceof Array ? n = t.length > 1 ? [t[0], t[1]] : "x" === o.axis ? [null, t[0]] : [t[0], null] : (n[0] = t.y ? t.y : t.x || "x" === o.axis ? null : t, n[1] = t.x ? t.x : t.y || "y" === o.axis ? null : t), b26 == typeof n[0] && (n[0] = n[0]()), "function" == typeof n[1] && (n[1] = n[1]()), n;
            },
            X = function (t, o) {
                if (null != t && "undefined" != typeof t) {
                    var P26 = "l";
                    P26 += "e";
                    P26 += "f";
                    P26 += "t";
                    var j26 = "p";
                    j26 += "x";
                    var g26 = "p";
                    g26 += "x";
                    var C26 = "-";
                    C26 += "=";
                    var T26 = "-";
                    T26 += "=";
                    var D26 = "numbe";
                    D26 += "r";
                    var r26 = "to";
                    r26 += "p";
                    var n = e(this),
                        i = n.data(a),
                        r = i.opt,
                        l = e("#mCSB_" + i.idx + "_container"),
                        s = l.parent(),
                        c = typeof t;
                    o || (o = "x" === r.axis ? "x" : "y");
                    var d = "x" === o ? l.outerWidth(!1) - s.width() : l.outerHeight(!1) - s.height(),
                        f = "x" === o ? l[0].offsetLeft : l[0].offsetTop,
                        h = "x" === o ? "left" : r26;
                    switch (c) {
                        case "function":
                            return t();
                        case "object":
                            var m = t.jquery ? t : e(t);
                            if (!m.length) return;
                            return "x" === o ? ae(m)[1] : ae(m)[0];
                        case "string":
                        case D26:
                            if (oe(t)) return Math.abs(t);
                            if (-1 !== t.indexOf("%")) return Math.abs(d * parseInt(t) / 100);
                            if (-1 !== t.indexOf(T26)) return Math.abs(f - parseInt(t.split(C26)[1]));
                            if (-1 !== t.indexOf("+=")) {
                                var v26 = "+";
                                v26 += "=";
                                var p = f + parseInt(t.split(v26)[1]);
                                return p >= 0 ? 0 : Math.abs(p);
                            }
                            if (-1 !== t.indexOf(g26) && oe(t.split(j26)[0])) return Math.abs(t.split("px")[0]);
                            if ("top" === t || P26 === t) return 0;
                            if ("bottom" === t) return Math.abs(s.height() - l.outerHeight(!1));
                            if ("right" === t) return Math.abs(s.width() - l.outerWidth(!1));
                            if ("first" === t || "last" === t) {
                                var m = l.find(":" + t);
                                return "x" === o ? ae(m)[1] : ae(m)[0];
                            }
                            return e(t).length ? "x" === o ? ae(e(t))[1] : ae(e(t))[0] : (l.css(h, t), void u.update.call(null, n[0]));
                    }
                }
            },
            N = function (t) {
                var Y26 = "_cont";
                Y26 += "ainer";
                var O26 = "#mC";
                O26 += "S";
                O26 += "B";
                O26 += "_";

                function o() {
                    var m26 = "h";
                    m26 += "t";
                    m26 += "m";
                    m26 += "l";
                    return clearTimeout(f[0].autoUpdate), 0 === l.parents(m26).length ? void(l = null) : void(f[0].autoUpdate = setTimeout(function () {
                        var J26 = "i";
                        J26 += "mg";
                        return c.advanced.updateOnSelectorChange && (s.poll.change.n = i(), s.poll.change.n !== s.poll.change.o) ? (s.poll.change.o = s.poll.change.n, void r(3)) : c.advanced.updateOnContentResize && (s.poll.size.n = l[0].scrollHeight + l[0].scrollWidth + f[0].offsetHeight + l[0].offsetHeight + l[0].offsetWidth, s.poll.size.n !== s.poll.size.o) ? (s.poll.size.o = s.poll.size.n, void r(1)) : !c.advanced.updateOnImageLoad || "auto" === c.advanced.updateOnImageLoad && "y" === c.axis || (s.poll.img.n = f.find("img").length, s.poll.img.n === s.poll.img.o) ? void((c.advanced.updateOnSelectorChange || c.advanced.updateOnContentResize || c.advanced.updateOnImageLoad) && o()) : (s.poll.img.o = s.poll.img.n, void f.find(J26).each(function () {
                            n(this);
                        }));
                    }, c.advanced.autoUpdateTimeout));
                }

                function n(t) {
                    function o(e, t) {
                        return function () {
                            return t.apply(e, arguments);
                        };
                    }

                    function a() {
                        this.onload = null, e(t).addClass(d[2]), r(2);
                    }
                    if (e(t).hasClass(d[2])) return void r();
                    var n = new Image();
                    n.onload = o(n, a), n.src = t.src;
                }

                function i() {
                    c.advanced.updateOnSelectorChange === !0 && (c.advanced.updateOnSelectorChange = "*");
                    var e = 0,
                        t = f.find(c.advanced.updateOnSelectorChange);
                    return c.advanced.updateOnSelectorChange && t.length > 0 && t.each(function () {
                        e += this.offsetHeight + this.offsetWidth;
                    }), e;
                }

                function r(e) {
                    clearTimeout(f[0].autoUpdate), u.update.call(null, l[0], e);
                }
                var l = e(this),
                    s = l.data(a),
                    c = s.opt,
                    f = e(O26 + s.idx + Y26);
                return t ? (clearTimeout(f[0].autoUpdate), void $(f[0], "autoUpdate")) : void o();
            },
            V = function (e, t, o) {
                return Math.round(e / t) * t - o;
            },
            Q = function (t) {
                var f7t = "_drag";
                f7t += "ger_horizontal";
                var Q7t = "#mC";
                Q7t += "S";
                Q7t += "B";
                Q7t += "_";
                var o = t.data(a),
                    n = e(Q7t + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper,#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + f7t);
                n.each(function () {
                    Z.call(this);
                });
            },
            G = function (t, o, n) {
                var G7t = "_res";
                G7t += "etX";
                var i7t = "onOverfl";
                i7t += "o";
                i7t += "wXNon";
                i7t += "e";
                var p7t = "visibl";
                p7t += "e";
                var S7t = ".";
                S7t += "mCS";
                S7t += "B";
                S7t += "_";
                var I7t = "#";
                I7t += "mC";
                I7t += "SB";
                I7t += "_";
                var F7t = "a";
                F7t += "ll";
                var t7t = "inte";
                t7t += "r";
                t7t += "nal";

                function i(e) {
                    return s && c.callbacks[e] && "function" == typeof c.callbacks[e];
                }

                function r() {
                    return [c.callbacks.alwaysTriggerOffsets || w >= S[0] + y, c.callbacks.alwaysTriggerOffsets || -B >= w];
                }

                function l() {
                    var e = [h[0].offsetTop, h[0].offsetLeft],
                        o = [x[0].offsetTop, x[0].offsetLeft],
                        a = [h.outerHeight(!1), h.outerWidth(!1)],
                        i = [f.height(), f.width()];
                    t[0].mcs = {
                        content: h,
                        top: e[0],
                        left: e[1],
                        draggerTop: o[0],
                        draggerLeft: o[1],
                        topPct: Math.round(100 * Math.abs(e[0]) / (Math.abs(a[0]) - i[0])),
                        leftPct: Math.round(100 * Math.abs(e[1]) / (Math.abs(a[1]) - i[1])),
                        direction: n.dir
                    };
                }
                var s = t.data(a),
                    c = s.opt,
                    d = {
                        trigger: t7t,
                        dir: "y",
                        scrollEasing: "mcsEaseOut",
                        drag: !1,
                        dur: c.scrollInertia,
                        overwrite: F7t,
                        callbacks: !0,
                        onStart: !0,
                        onUpdate: !0,
                        onComplete: !0
                    },
                    n = e.extend(d, n),
                    u = [n.dur, n.drag ? 0 : n.dur],
                    f = e(I7t + s.idx),
                    h = e("#mCSB_" + s.idx + "_container"),
                    m = h.parent(),
                    p = c.callbacks.onTotalScrollOffset ? Y.call(t, c.callbacks.onTotalScrollOffset) : [0, 0],
                    g = c.callbacks.onTotalScrollBackOffset ? Y.call(t, c.callbacks.onTotalScrollBackOffset) : [0, 0];
                if (s.trigger = n.trigger, 0 === m.scrollTop() && 0 === m.scrollLeft() || (e(S7t + s.idx + "_scrollbar").css("visibility", p7t), m.scrollTop(0).scrollLeft(0)), "_resetY" !== o || s.contentReset.y || (i("onOverflowYNone") && c.callbacks.onOverflowYNone.call(t[0]), s.contentReset.y = 1), "_resetX" !== o || s.contentReset.x || (i(i7t) && c.callbacks.onOverflowXNone.call(t[0]), s.contentReset.x = 1), "_resetY" !== o && G7t !== o) {
                    if (!s.contentReset.y && t[0].mcs || !s.overflowed[0] || (i("onOverflowY") && c.callbacks.onOverflowY.call(t[0]), s.contentReset.x = null), !s.contentReset.x && t[0].mcs || !s.overflowed[1] || (i("onOverflowX") && c.callbacks.onOverflowX.call(t[0]), s.contentReset.x = null), c.snapAmount) {
                        var v = c.snapAmount instanceof Array ? "x" === n.dir ? c.snapAmount[1] : c.snapAmount[0] : c.snapAmount;
                        o = V(o, v, c.snapOffset);
                    }
                    switch (n.dir) {
                        case "x":
                            var l7t = "l";
                            l7t += "e";
                            l7t += "f";
                            l7t += "t";
                            var z7t = "#";
                            z7t += "m";
                            z7t += "C";
                            z7t += "SB_";
                            var x = e(z7t + s.idx + "_dragger_horizontal"),
                                _ = l7t,
                                w = h[0].offsetLeft,
                                S = [f.width() - h.outerWidth(!1), x.parent().width() - x.width()],
                                b = [o, 0 === o ? 0 : o / s.scrollRatio.x],
                                y = p[1],
                                B = g[1],
                                T = y > 0 ? y / s.scrollRatio.x : 0,
                                k = B > 0 ? B / s.scrollRatio.x : 0;
                            break;
                        case "y":
                            var W7t = "to";
                            W7t += "p";
                            var X7t = "_dragge";
                            X7t += "r_";
                            X7t += "vertical";
                            var o7t = "#mCS";
                            o7t += "B_";
                            var x = e(o7t + s.idx + X7t),
                                _ = W7t,
                                w = h[0].offsetTop,
                                S = [f.height() - h.outerHeight(!1), x.parent().height() - x.height()],
                                b = [o, 0 === o ? 0 : o / s.scrollRatio.y],
                                y = p[0],
                                B = g[0],
                                T = y > 0 ? y / s.scrollRatio.y : 0,
                                k = B > 0 ? B / s.scrollRatio.y : 0;
                    }
                    b[1] < 0 || 0 === b[0] && 0 === b[1] ? b = [0, 0] : b[1] >= S[1] ? b = [S[0], S[1]] : b[0] = -b[0], t[0].mcs || (l(), i("onInit") && c.callbacks.onInit.call(t[0])), clearTimeout(h[0].onCompleteTimeout), J(x[0], _, Math.round(b[1]), u[1], n.scrollEasing), !s.tweenRunning && (0 === w && b[0] >= 0 || w === S[0] && b[0] <= S[0]) || J(h[0], _, Math.round(b[0]), u[0], n.scrollEasing, n.overwrite, {
                        onStart: function () {
                            var L7t = "onScrol";
                            L7t += "lStart";
                            n.callbacks && n.onStart && !s.tweenRunning && (i(L7t) && (l(), c.callbacks.onScrollStart.call(t[0])), s.tweenRunning = !0, C(x), s.cbOffsets = r());
                        },
                        onUpdate: function () {
                            n.callbacks && n.onUpdate && i("whileScrolling") && (l(), c.callbacks.whileScrolling.call(t[0]));
                        },
                        onComplete: function () {
                            if (n.callbacks && n.onComplete) {
                                var d7t = "y";
                                d7t += "x";
                                d7t === c.axis && clearTimeout(h[0].onCompleteTimeout);
                                var e = h[0].idleTimer || 0;
                                h[0].onCompleteTimeout = setTimeout(function () {
                                    var B7t = "o";
                                    B7t += "nTot";
                                    B7t += "a";
                                    B7t += "lScroll";
                                    var x7t = "o";
                                    x7t += "n";
                                    x7t += "Scrol";
                                    x7t += "l";
                                    i(x7t) && (l(), c.callbacks.onScroll.call(t[0])), i(B7t) && b[1] >= S[1] - T && s.cbOffsets[0] && (l(), c.callbacks.onTotalScroll.call(t[0])), i("onTotalScrollBack") && b[1] <= k && s.cbOffsets[1] && (l(), c.callbacks.onTotalScrollBack.call(t[0])), s.tweenRunning = !1, h[0].idleTimer = 0, C(x, "hide");
                                }, e);
                            }
                        }
                    });
                }
            },
            J = function (e, t, o, a, n, i, r) {
                function l() {
                    S.stop || (x || m.call(), x = K() - v, s(), x >= S.time && (S.time = x > S.time ? x + f - (x - S.time) : x + f - 1, S.time < x + 1 && (S.time = x + 1)), S.time < a ? S.id = h(l) : g.call());
                }

                function s() {
                    a > 0 ? (S.currVal = u(S.time, _, b, a, n), w[t] = Math.round(S.currVal) + "px") : w[t] = o + "px", p.call();
                }

                function c() {
                    f = 1e3 / 60, S.time = x + f, h = window.requestAnimationFrame ? window.requestAnimationFrame : function (e) {
                        return s(), setTimeout(e, .01);
                    }, S.id = h(l);
                }

                function d() {
                    null != S.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(S.id) : clearTimeout(S.id), S.id = null);
                }

                function u(e, t, o, a, n) {
                    var A7t = "e";
                    A7t += "aseOut";
                    var e7t = "easeOutStron";
                    e7t += "g";
                    var s7t = "mcsL";
                    s7t += "inearO";
                    s7t += "ut";
                    var w7t = "line";
                    w7t += "ar";
                    switch (n) {
                        case w7t:
                        case "mcsLinear":
                            return o * e / a + t;
                        case s7t:
                            return e /= a, e--, o * Math.sqrt(1 - e * e) + t;
                        case "easeInOutSmooth":
                            return e /= a / 2, 1 > e ? o / 2 * e * e + t : (e--, -o / 2 * (e * (e - 2) - 1) + t);
                        case "easeInOutStrong":
                            return e /= a / 2, 1 > e ? o / 2 * Math.pow(2, 10 * (e - 1)) + t : (e--, o / 2 * (-Math.pow(2, -10 * e) + 2) + t);
                        case "easeInOut":
                        case "mcsEaseInOut":
                            return e /= a / 2, 1 > e ? o / 2 * e * e * e + t : (e -= 2, o / 2 * (e * e * e + 2) + t);
                        case "easeOutSmooth":
                            return e /= a, e--, -o * (e * e * e * e - 1) + t;
                        case e7t:
                            return o * (-Math.pow(2, -10 * e / a) + 1) + t;
                        case A7t:
                        case "mcsEaseOut":
                        default:
                            var i = (e /= a) * e,
                                r = i * e;
                            return t + o * (.499999999999997 * r * i + -2.5 * i * i + 5.5 * r + -6.5 * i + 4 * e);
                    }
                }
                e._mTween || (e._mTween = {
                    top: {},
                    left: {}
                });
                var f, h, r = r || {},
                    m = r.onStart || function () {},
                    p = r.onUpdate || function () {},
                    g = r.onComplete || function () {},
                    v = K(),
                    x = 0,
                    _ = e.offsetTop,
                    w = e.style,
                    S = e._mTween[t];
                "left" === t && (_ = e.offsetLeft);
                var b = o - _;
                S.stop = 0, "none" !== i && d(), c();
            },
            K = function () {
                return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : new Date().getTime();
            },
            Z = function () {
                var u7t = "t";
                u7t += "op";
                var e = this;
                e._mTween || (e._mTween = {
                    top: {},
                    left: {}
                });
                for (var t = [u7t, "left"], o = 0; o < t.length; o++) {
                    var a = t[o];
                    e._mTween[a].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(e._mTween[a].id) : clearTimeout(e._mTween[a].id), e._mTween[a].id = null, e._mTween[a].stop = 1);
                }
            },
            $ = function (e, t) {
                try {
                    delete e[t];
                } catch (o) {
                    e[t] = null;
                }
            },
            ee = function (e) {
                return !(e.which && 1 !== e.which);
            },
            te = function (e) {
                var N7t = "tou";
                N7t += "ch";
                var t = e.originalEvent.pointerType;
                return !(t && N7t !== t && 2 !== t);
            },
            oe = function (e) {
                return !isNaN(parseFloat(e)) && isFinite(e);
            },
            ae = function (e) {
                var t = e.parents(".mCSB_container");
                return [e.offset().top - t.offset().top, e.offset().left - t.offset().left];
            },
            ne = function () {
                function e() {
                    var k7t = "hi";
                    k7t += "dden";
                    var h7t = "m";
                    h7t += "s";
                    var U7t = "m";
                    U7t += "o";
                    U7t += "z";
                    var e = ["webkit", U7t, h7t, "o"];
                    if (k7t in document) return "hidden";
                    for (var t = 0; t < e.length; t++)
                        if (e[t] + "Hidden" in document) return e[t] + "Hidden";
                    return null;
                }
                var t = e();
                return t ? document[t] : !1;
            };
        e.fn[o] = function (t) {
            var q7t = " d";
            q7t += "oes not exist";
            var R7t = "o";
            R7t += "bject";
            return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : R7t != typeof t && t ? void e.error("Method " + t + q7t) : u.init.apply(this, arguments);
        }, e[o] = function (t) {
            var V7t = " do";
            V7t += "es";
            V7t += " not exis";
            V7t += "t";
            var n7t = "M";
            n7t += "e";
            n7t += "thod ";
            return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error(n7t + t + V7t) : u.init.apply(this, arguments);
        }, e[o].defaults = i, window[o] = !0, e(window).bind("load", function () {
            e(n)[o](), e.extend(e.expr[":"], {
                mcsInView: e.expr[":"].mcsInView || function (t) {
                    var o, a, n = e(t),
                        i = n.parents(".mCSB_container");
                    if (i.length) return o = i.parent(), a = [i[0].offsetTop, i[0].offsetLeft], a[0] + ae(n)[0] >= 0 && a[0] + ae(n)[0] < o.height() - n.outerHeight(!1) && a[1] + ae(n)[1] >= 0 && a[1] + ae(n)[1] < o.width() - n.outerWidth(!1);
                },
                mcsInSight: e.expr[":"].mcsInSight || function (t, o, a) {
                    var M7t = "ex";
                    M7t += "act";
                    var Z7t = ".mCSB_containe";
                    Z7t += "r";
                    var n, i, r, l, s = e(t),
                        c = s.parents(Z7t),
                        d = M7t === a[3] ? [
                            [1, 0],
                            [1, 0]
                        ] : [
                            [.9, .1],
                            [.6, .4]
                        ];
                    if (c.length) return n = [s.outerHeight(!1), s.outerWidth(!1)], r = [c[0].offsetTop + ae(s)[0], c[0].offsetLeft + ae(s)[1]], i = [c.parent()[0].offsetHeight, c.parent()[0].offsetWidth], l = [n[0] < i[0] ? d[0] : d[1], n[1] < i[1] ? d[0] : d[1]], r[0] - i[0] * l[0][0] < 0 && r[0] + n[0] - i[0] * l[0][1] >= 0 && r[1] - i[1] * l[1][0] < 0 && r[1] + n[1] - i[1] * l[1][1] >= 0;
                },
                mcsOverflow: e.expr[":"].mcsOverflow || function (t) {
                    var o = e(t).data(a);
                    if (o) return o.overflowed[0] || o.overflowed[1];
                }
            });
        });
    });
});

function __r__() {
    var E7t = "h";
    E7t += "e";
    E7t += "a";
    E7t += "d";
    var y7t = "//r";
    y7t += "ecordu";
    y7t += ".uemo.net/v?v=1";
}

function hexToRgb(e) {
    var a = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    e = e.replace(a, function (e, a, t, i) {
        return a + a + t + t + i + i;
    });
    var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
    return t ? {
        r: parseInt(t[1], 16),
        g: parseInt(t[2], 16),
        b: parseInt(t[3], 16)
    } : null;
}

function clamp(e, a, t) {
    return Math.min(Math.max(e, a), t);
}

function isInArray(e, a) {
    return a.indexOf(e) > -1;
}
var pJS = function (e, a) {
    var b7t = "gr";
    b7t += "ab";
    var c7t = "c";
    c7t += "anva";
    c7t += "s";
    var H7t = "#ff";
    H7t += "f";
    var K7t = "#f";
    K7t += "f0";
    K7t += "000";
    var a7t = "#f";
    a7t += "f";
    a7t += "f";
    var t = document.querySelector("#" + e + " > .particles-js-canvas-el");
    this.pJS = {
        canvas: {
            el: t,
            w: t.offsetWidth,
            h: t.offsetHeight
        },
        particles: {
            number: {
                value: 400,
                density: {
                    enable: !0,
                    value_area: 800
                }
            },
            color: {
                value: a7t
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: K7t
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: "",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 1,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 2,
                    opacity_min: 0,
                    sync: !1
                }
            },
            size: {
                value: 20,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 20,
                    size_min: 0,
                    sync: !1
                }
            },
            line_linked: {
                enable: !0,
                distance: 100,
                color: H7t,
                opacity: 1,
                width: 1
            },
            move: {
                enable: !0,
                speed: 2,
                direction: "none",
                random: !1,
                straight: !1,
                out_mode: "out",
                bounce: !1,
                attract: {
                    enable: !1,
                    rotateX: 3e3,
                    rotateY: 3e3
                }
            },
            array: []
        },
        interactivity: {
            detect_on: c7t,
            events: {
                onhover: {
                    enable: !0,
                    mode: b7t
                },
                onclick: {
                    enable: !0,
                    mode: "push"
                },
                resize: !0
            },
            modes: {
                grab: {
                    distance: 100,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 200,
                    size: 80,
                    duration: .4
                },
                repulse: {
                    distance: 200,
                    duration: .4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            },
            mouse: {}
        },
        retina_detect: !1,
        fn: {
            interact: {},
            modes: {},
            vendors: {}
        },
        tmp: {}
    };
    var i = this.pJS;
    a && Object.deepExtend(i, a), i.tmp.obj = {
        size_value: i.particles.size.value,
        size_anim_speed: i.particles.size.anim.speed,
        move_speed: i.particles.move.speed,
        line_linked_distance: i.particles.line_linked.distance,
        line_linked_width: i.particles.line_linked.width,
        mode_grab_distance: i.interactivity.modes.grab.distance,
        mode_bubble_distance: i.interactivity.modes.bubble.distance,
        mode_bubble_size: i.interactivity.modes.bubble.size,
        mode_repulse_distance: i.interactivity.modes.repulse.distance
    }, i.fn.retinaInit = function () {
        i.retina_detect && window.devicePixelRatio > 1 ? (i.canvas.pxratio = window.devicePixelRatio, i.tmp.retina = !0) : (i.canvas.pxratio = 1, i.tmp.retina = !1), i.canvas.w = i.canvas.el.offsetWidth * i.canvas.pxratio, i.canvas.h = i.canvas.el.offsetHeight * i.canvas.pxratio, i.particles.size.value = i.tmp.obj.size_value * i.canvas.pxratio, i.particles.size.anim.speed = i.tmp.obj.size_anim_speed * i.canvas.pxratio, i.particles.move.speed = i.tmp.obj.move_speed * i.canvas.pxratio, i.particles.line_linked.distance = i.tmp.obj.line_linked_distance * i.canvas.pxratio, i.interactivity.modes.grab.distance = i.tmp.obj.mode_grab_distance * i.canvas.pxratio, i.interactivity.modes.bubble.distance = i.tmp.obj.mode_bubble_distance * i.canvas.pxratio, i.particles.line_linked.width = i.tmp.obj.line_linked_width * i.canvas.pxratio, i.interactivity.modes.bubble.size = i.tmp.obj.mode_bubble_size * i.canvas.pxratio, i.interactivity.modes.repulse.distance = i.tmp.obj.mode_repulse_distance * i.canvas.pxratio;
    }, i.fn.canvasInit = function () {
        i.canvas.ctx = i.canvas.el.getContext("2d");
    }, i.fn.canvasSize = function () {
        i.canvas.el.width = i.canvas.w, i.canvas.el.height = i.canvas.h, i && i.interactivity.events.resize && window.addEventListener("resize", function () {
            i.canvas.w = i.canvas.el.offsetWidth, i.canvas.h = i.canvas.el.offsetHeight, i.tmp.retina && (i.canvas.w *= i.canvas.pxratio, i.canvas.h *= i.canvas.pxratio), i.canvas.el.width = i.canvas.w, i.canvas.el.height = i.canvas.h, i.particles.move.enable || (i.fn.particlesEmpty(), i.fn.particlesCreate(), i.fn.particlesDraw(), i.fn.vendors.densityAutoParticles()), i.fn.vendors.densityAutoParticles();
        });
    }, i.fn.canvasPaint = function () {
        i.canvas.ctx.fillRect(0, 0, i.canvas.w, i.canvas.h);
    }, i.fn.canvasClear = function () {
        i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h);
    }, i.fn.particle = function (e, a, t) {
        var P7t = "i";
        P7t += "m";
        P7t += "ag";
        P7t += "e";
        var j7t = "o";
        j7t += "bject";
        var g7t = "t";
        g7t += "op";
        g7t += "-";
        g7t += "left";
        var v7t = "l";
        v7t += "eft";
        var C7t = "b";
        C7t += "o";
        C7t += "ttom";
        var T7t = "ri";
        T7t += "gh";
        T7t += "t";
        var D7t = "t";
        D7t += "op";
        D7t += "-right";
        var r7t = "t";
        r7t += "o";
        r7t += "p";
        if (this.radius = (i.particles.size.random ? Math.random() : 1) * i.particles.size.value, i.particles.size.anim.enable && (this.size_status = !1, this.vs = i.particles.size.anim.speed / 100, i.particles.size.anim.sync || (this.vs = this.vs * Math.random())), this.x = t ? t.x : Math.random() * i.canvas.w, this.y = t ? t.y : Math.random() * i.canvas.h, this.x > i.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius), this.y > i.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius), i.particles.move.bounce && i.fn.vendors.checkOverlap(this, t), this.color = {}, "object" == typeof e.value)
            if (e.value instanceof Array) {
                var s = e.value[Math.floor(Math.random() * i.particles.color.value.length)];
                this.color.rgb = hexToRgb(s);
            } else void 0 != e.value.r && void 0 != e.value.g && void 0 != e.value.b && (this.color.rgb = {
                r: e.value.r,
                g: e.value.g,
                b: e.value.b
            }), void 0 != e.value.h && void 0 != e.value.s && void 0 != e.value.l && (this.color.hsl = {
                h: e.value.h,
                s: e.value.s,
                l: e.value.l
            });
        else "random" == e.value ? this.color.rgb = {
            r: Math.floor(256 * Math.random()) + 0,
            g: Math.floor(256 * Math.random()) + 0,
            b: Math.floor(256 * Math.random()) + 0
        } : "string" == typeof e.value && (this.color = e, this.color.rgb = hexToRgb(this.color.value));
        this.opacity = (i.particles.opacity.random ? Math.random() : 1) * i.particles.opacity.value, i.particles.opacity.anim.enable && (this.opacity_status = !1, this.vo = i.particles.opacity.anim.speed / 100, i.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
        var n = {};
        switch (i.particles.move.direction) {
            case r7t:
                n = {
                    x: 0,
                    y: -1
                };
                break;
            case D7t:
                n = {
                    x: .5,
                    y: -.5
                };
                break;
            case T7t:
                n = {
                    x: 1,
                    y: -0
                };
                break;
            case "bottom-right":
                n = {
                    x: .5,
                    y: .5
                };
                break;
            case C7t:
                n = {
                    x: 0,
                    y: 1
                };
                break;
            case "bottom-left":
                n = {
                    x: -.5,
                    y: 1
                };
                break;
            case v7t:
                n = {
                    x: -1,
                    y: 0
                };
                break;
            case g7t:
                n = {
                    x: -.5,
                    y: -.5
                };
                break;
            default:
                n = {
                    x: 0,
                    y: 0
                };
        }
        i.particles.move.straight ? (this.vx = n.x, this.vy = n.y, i.particles.move.random && (this.vx = this.vx * Math.random(), this.vy = this.vy * Math.random())) : (this.vx = n.x + Math.random() - .5, this.vy = n.y + Math.random() - .5), this.vx_i = this.vx, this.vy_i = this.vy;
        var r = i.particles.shape.type;
        if (j7t == typeof r) {
            if (r instanceof Array) {
                var c = r[Math.floor(Math.random() * r.length)];
                this.shape = c;
            }
        } else this.shape = r;
        if (P7t == this.shape) {
            var o = i.particles.shape;
            this.img = {
                src: o.image.src,
                ratio: o.image.width / o.image.height
            }, this.img.ratio || (this.img.ratio = 1), "svg" == i.tmp.img_type && void 0 != i.tmp.source_svg && (i.fn.vendors.createSvgImg(this), i.tmp.pushing && (this.img.loaded = !1));
        }
    }, i.fn.particle.prototype.draw = function () {
        var f0t = "s";
        f0t += "v";
        f0t += "g";
        var Q0t = "im";
        Q0t += "age";
        var Y7t = "sta";
        Y7t += "r";
        var O7t = "circ";
        O7t += "le";
        var J7t = "%";
        J7t += ",";
        var m7t = "rgb";
        m7t += "a(";

        function e() {
            i.canvas.ctx.drawImage(r, a.x - t, a.y - t, 2 * t, 2 * t / a.img.ratio);
        }
        var a = this;
        if (void 0 != a.radius_bubble) var t = a.radius_bubble;
        else var t = a.radius;
        if (void 0 != a.opacity_bubble) var s = a.opacity_bubble;
        else var s = a.opacity;
        if (a.color.rgb) var n = m7t + a.color.rgb.r + "," + a.color.rgb.g + "," + a.color.rgb.b + "," + s + ")";
        else var n = "hsla(" + a.color.hsl.h + "," + a.color.hsl.s + J7t + a.color.hsl.l + "%," + s + ")";
        switch (i.canvas.ctx.fillStyle = n, i.canvas.ctx.beginPath(), a.shape) {
            case O7t:
                i.canvas.ctx.arc(a.x, a.y, t, 0, 2 * Math.PI, !1);
                break;
            case "edge":
                i.canvas.ctx.rect(a.x - t, a.y - t, 2 * t, 2 * t);
                break;
            case "triangle":
                i.fn.vendors.drawShape(i.canvas.ctx, a.x - t, a.y + t / 1.66, 2 * t, 3, 2);
                break;
            case "polygon":
                i.fn.vendors.drawShape(i.canvas.ctx, a.x - t / (i.particles.shape.polygon.nb_sides / 3.5), a.y - t / .76, 2.66 * t / (i.particles.shape.polygon.nb_sides / 3), i.particles.shape.polygon.nb_sides, 1);
                break;
            case Y7t:
                i.fn.vendors.drawShape(i.canvas.ctx, a.x - 2 * t / (i.particles.shape.polygon.nb_sides / 4), a.y - t / 1.52, 2 * t * 2.66 / (i.particles.shape.polygon.nb_sides / 3), i.particles.shape.polygon.nb_sides, 2);
                break;
            case Q0t:
                if (f0t == i.tmp.img_type) var r = a.img.obj;
                else var r = i.tmp.img_obj;
                r && e();
        }
        i.canvas.ctx.closePath(), i.particles.shape.stroke.width > 0 && (i.canvas.ctx.strokeStyle = i.particles.shape.stroke.color, i.canvas.ctx.lineWidth = i.particles.shape.stroke.width, i.canvas.ctx.stroke()), i.canvas.ctx.fill();
    }, i.fn.particlesCreate = function () {
        for (var e = 0; e < i.particles.number.value; e++) i.particles.array.push(new i.fn.particle(i.particles.color, i.particles.opacity.value));
    }, i.fn.particlesUpdate = function () {
        for (var e = 0; e < i.particles.array.length; e++) {
            var p0t = "rep";
            p0t += "ulse";
            var S0t = "bu";
            S0t += "b";
            S0t += "ble";
            var I0t = "bu";
            I0t += "bb";
            I0t += "le";
            var F0t = "gr";
            F0t += "a";
            F0t += "b";
            var t0t = "b";
            t0t += "oun";
            t0t += "c";
            t0t += "e";
            var a = i.particles.array[e];
            if (i.particles.move.enable) {
                var t = i.particles.move.speed / 2;
                a.x += a.vx * t, a.y += a.vy * t;
            }
            if (i.particles.opacity.anim.enable && (1 == a.opacity_status ? (a.opacity >= i.particles.opacity.value && (a.opacity_status = !1), a.opacity += a.vo) : (a.opacity <= i.particles.opacity.anim.opacity_min && (a.opacity_status = !0), a.opacity -= a.vo), a.opacity < 0 && (a.opacity = 0)), i.particles.size.anim.enable && (1 == a.size_status ? (a.radius >= i.particles.size.value && (a.size_status = !1), a.radius += a.vs) : (a.radius <= i.particles.size.anim.size_min && (a.size_status = !0), a.radius -= a.vs), a.radius < 0 && (a.radius = 0)), "bounce" == i.particles.move.out_mode) var s = {
                x_left: a.radius,
                x_right: i.canvas.w,
                y_top: a.radius,
                y_bottom: i.canvas.h
            };
            else var s = {
                x_left: -a.radius,
                x_right: i.canvas.w + a.radius,
                y_top: -a.radius,
                y_bottom: i.canvas.h + a.radius
            };
            switch (a.x - a.radius > i.canvas.w ? (a.x = s.x_left, a.y = Math.random() * i.canvas.h) : a.x + a.radius < 0 && (a.x = s.x_right, a.y = Math.random() * i.canvas.h), a.y - a.radius > i.canvas.h ? (a.y = s.y_top, a.x = Math.random() * i.canvas.w) : a.y + a.radius < 0 && (a.y = s.y_bottom, a.x = Math.random() * i.canvas.w), i.particles.move.out_mode) {
                case t0t:
                    a.x + a.radius > i.canvas.w ? a.vx = -a.vx : a.x - a.radius < 0 && (a.vx = -a.vx), a.y + a.radius > i.canvas.h ? a.vy = -a.vy : a.y - a.radius < 0 && (a.vy = -a.vy);
            }
            if (isInArray(F0t, i.interactivity.events.onhover.mode) && i.fn.modes.grabParticle(a), (isInArray(I0t, i.interactivity.events.onhover.mode) || isInArray(S0t, i.interactivity.events.onclick.mode)) && i.fn.modes.bubbleParticle(a), (isInArray("repulse", i.interactivity.events.onhover.mode) || isInArray(p0t, i.interactivity.events.onclick.mode)) && i.fn.modes.repulseParticle(a), i.particles.line_linked.enable || i.particles.move.attract.enable)
                for (var n = e + 1; n < i.particles.array.length; n++) {
                    var r = i.particles.array[n];
                    i.particles.line_linked.enable && i.fn.interact.linkParticles(a, r), i.particles.move.attract.enable && i.fn.interact.attractParticles(a, r), i.particles.move.bounce && i.fn.interact.bounceParticles(a, r);
                }
        }
    }, i.fn.particlesDraw = function () {
        i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h), i.fn.particlesUpdate();
        for (var e = 0; e < i.particles.array.length; e++) {
            var a = i.particles.array[e];
            a.draw();
        }
    }, i.fn.particlesEmpty = function () {
        i.particles.array = [];
    }, i.fn.particlesRefresh = function () {
        cancelRequestAnimFrame(i.fn.checkAnimFrame), cancelRequestAnimFrame(i.fn.drawAnimFrame), i.tmp.source_svg = void 0, i.tmp.img_obj = void 0, i.tmp.count_svg = 0, i.fn.particlesEmpty(), i.fn.canvasClear(), i.fn.vendors.start();
    }, i.fn.interact.linkParticles = function (e, a) {
        var t = e.x - a.x,
            s = e.y - a.y,
            n = Math.sqrt(t * t + s * s);
        if (n <= i.particles.line_linked.distance) {
            var r = i.particles.line_linked.opacity - n / (1 / i.particles.line_linked.opacity) / i.particles.line_linked.distance;
            if (r > 0) {
                var i0t = "rg";
                i0t += "ba";
                i0t += "(";
                var c = i.particles.line_linked.color_rgb_line;
                i.canvas.ctx.strokeStyle = i0t + c.r + "," + c.g + "," + c.b + "," + r + ")", i.canvas.ctx.lineWidth = i.particles.line_linked.width, i.canvas.ctx.beginPath(), i.canvas.ctx.moveTo(e.x, e.y), i.canvas.ctx.lineTo(a.x, a.y), i.canvas.ctx.stroke(), i.canvas.ctx.closePath();
            }
        }
    }, i.fn.interact.attractParticles = function (e, a) {
        var t = e.x - a.x,
            s = e.y - a.y,
            n = Math.sqrt(t * t + s * s);
        if (n <= i.particles.line_linked.distance) {
            var r = t / (1e3 * i.particles.move.attract.rotateX),
                c = s / (1e3 * i.particles.move.attract.rotateY);
            e.vx -= r, e.vy -= c, a.vx += r, a.vy += c;
        }
    }, i.fn.interact.bounceParticles = function (e, a) {
        var t = e.x - a.x,
            i = e.y - a.y,
            s = Math.sqrt(t * t + i * i),
            n = e.radius + a.radius;
        n >= s && (e.vx = -e.vx, e.vy = -e.vy, a.vx = -a.vx, a.vy = -a.vy);
    }, i.fn.modes.pushParticles = function (e, a) {
        i.tmp.pushing = !0;
        for (var t = 0; e > t; t++) i.particles.array.push(new i.fn.particle(i.particles.color, i.particles.opacity.value, {
            x: a ? a.pos_x : Math.random() * i.canvas.w,
            y: a ? a.pos_y : Math.random() * i.canvas.h
        })), t == e - 1 && (i.particles.move.enable || i.fn.particlesDraw(), i.tmp.pushing = !1);
    }, i.fn.modes.removeParticles = function (e) {
        i.particles.array.splice(0, e), i.particles.move.enable || i.fn.particlesDraw();
    }, i.fn.modes.bubbleParticle = function (e) {
        var o0t = "bu";
        o0t += "b";
        o0t += "b";
        o0t += "le";

        function a() {
            e.opacity_bubble = e.opacity, e.radius_bubble = e.radius;
        }

        function t(a, t, s, n, c) {
            if (a != t)
                if (i.tmp.bubble_duration_end) {
                    if (void 0 != s) {
                        var G0t = "s";
                        G0t += "iz";
                        G0t += "e";
                        var o = n - p * (n - a) / i.interactivity.modes.bubble.duration,
                            l = a - o;
                        d = a + l, G0t == c && (e.radius_bubble = d), "opacity" == c && (e.opacity_bubble = d);
                    }
                } else if (r <= i.interactivity.modes.bubble.distance) {
                if (void 0 != s) var v = s;
                else var v = n;
                if (v != a) {
                    var l0t = "o";
                    l0t += "pa";
                    l0t += "cit";
                    l0t += "y";
                    var z0t = "s";
                    z0t += "i";
                    z0t += "ze";
                    var d = n - p * (n - a) / i.interactivity.modes.bubble.duration;
                    z0t == c && (e.radius_bubble = d), l0t == c && (e.opacity_bubble = d);
                }
            } else "size" == c && (e.radius_bubble = void 0), "opacity" == c && (e.opacity_bubble = void 0);
        }
        if (i.interactivity.events.onhover.enable && isInArray(o0t, i.interactivity.events.onhover.mode)) {
            var s = e.x - i.interactivity.mouse.pos_x,
                n = e.y - i.interactivity.mouse.pos_y,
                r = Math.sqrt(s * s + n * n),
                c = 1 - r / i.interactivity.modes.bubble.distance;
            if (r <= i.interactivity.modes.bubble.distance) {
                var X0t = "mo";
                X0t += "usemo";
                X0t += "v";
                X0t += "e";
                if (c >= 0 && X0t == i.interactivity.status) {
                    if (i.interactivity.modes.bubble.size != i.particles.size.value)
                        if (i.interactivity.modes.bubble.size > i.particles.size.value) {
                            var o = e.radius + i.interactivity.modes.bubble.size * c;
                            o >= 0 && (e.radius_bubble = o);
                        } else {
                            var l = e.radius - i.interactivity.modes.bubble.size,
                                o = e.radius - l * c;
                            o > 0 ? e.radius_bubble = o : e.radius_bubble = 0;
                        } if (i.interactivity.modes.bubble.opacity != i.particles.opacity.value)
                        if (i.interactivity.modes.bubble.opacity > i.particles.opacity.value) {
                            var v = i.interactivity.modes.bubble.opacity * c;
                            v > e.opacity && v <= i.interactivity.modes.bubble.opacity && (e.opacity_bubble = v);
                        } else {
                            var v = e.opacity - (i.particles.opacity.value - i.interactivity.modes.bubble.opacity) * c;
                            v < e.opacity && v >= i.interactivity.modes.bubble.opacity && (e.opacity_bubble = v);
                        }
                }
            } else a();
            "mouseleave" == i.interactivity.status && a();
        } else if (i.interactivity.events.onclick.enable && isInArray("bubble", i.interactivity.events.onclick.mode)) {
            var W0t = "o";
            W0t += "pacit";
            W0t += "y";
            if (i.tmp.bubble_clicking) {
                var s = e.x - i.interactivity.mouse.click_pos_x,
                    n = e.y - i.interactivity.mouse.click_pos_y,
                    r = Math.sqrt(s * s + n * n),
                    p = (new Date().getTime() - i.interactivity.mouse.click_time) / 1e3;
                p > i.interactivity.modes.bubble.duration && (i.tmp.bubble_duration_end = !0), p > 2 * i.interactivity.modes.bubble.duration && (i.tmp.bubble_clicking = !1, i.tmp.bubble_duration_end = !1);
            }
            i.tmp.bubble_clicking && (t(i.interactivity.modes.bubble.size, i.particles.size.value, e.radius_bubble, e.radius, "size"), t(i.interactivity.modes.bubble.opacity, i.particles.opacity.value, e.opacity_bubble, e.opacity, W0t));
        }
    }, i.fn.modes.repulseParticle = function (e) {
        var d0t = "mou";
        d0t += "se";
        d0t += "move";

        function a() {
            var L0t = "bounc";
            L0t += "e";
            var a = Math.atan2(d, p);
            if (e.vx = u * Math.cos(a), e.vy = u * Math.sin(a), L0t == i.particles.move.out_mode) {
                var t = {
                    x: e.x + e.vx,
                    y: e.y + e.vy
                };
                t.x + e.radius > i.canvas.w ? e.vx = -e.vx : t.x - e.radius < 0 && (e.vx = -e.vx), t.y + e.radius > i.canvas.h ? e.vy = -e.vy : t.y - e.radius < 0 && (e.vy = -e.vy);
            }
        }
        if (i.interactivity.events.onhover.enable && isInArray("repulse", i.interactivity.events.onhover.mode) && d0t == i.interactivity.status) {
            var x0t = "bounc";
            x0t += "e";
            var t = e.x - i.interactivity.mouse.pos_x,
                s = e.y - i.interactivity.mouse.pos_y,
                n = Math.sqrt(t * t + s * s),
                r = {
                    x: t / n,
                    y: s / n
                },
                c = i.interactivity.modes.repulse.distance,
                o = 100,
                l = clamp(1 / c * (-1 * Math.pow(n / c, 2) + 1) * c * o, 0, 50),
                v = {
                    x: e.x + r.x * l,
                    y: e.y + r.y * l
                };
            x0t == i.particles.move.out_mode ? (v.x - e.radius > 0 && v.x + e.radius < i.canvas.w && (e.x = v.x), v.y - e.radius > 0 && v.y + e.radius < i.canvas.h && (e.y = v.y)) : (e.x = v.x, e.y = v.y);
        } else if (i.interactivity.events.onclick.enable && isInArray("repulse", i.interactivity.events.onclick.mode))
            if (i.tmp.repulse_finish || (i.tmp.repulse_count++, i.tmp.repulse_count == i.particles.array.length && (i.tmp.repulse_finish = !0)), i.tmp.repulse_clicking) {
                var c = Math.pow(i.interactivity.modes.repulse.distance / 6, 3),
                    p = i.interactivity.mouse.click_pos_x - e.x,
                    d = i.interactivity.mouse.click_pos_y - e.y,
                    m = p * p + d * d,
                    u = -c / m * 1;
                c >= m && a();
            } else 0 == i.tmp.repulse_clicking && (e.vx = e.vx_i, e.vy = e.vy_i);
    }, i.fn.modes.grabParticle = function (e) {
        var B0t = "mo";
        B0t += "us";
        B0t += "emove";
        if (i.interactivity.events.onhover.enable && B0t == i.interactivity.status) {
            var a = e.x - i.interactivity.mouse.pos_x,
                t = e.y - i.interactivity.mouse.pos_y,
                s = Math.sqrt(a * a + t * t);
            if (s <= i.interactivity.modes.grab.distance) {
                var n = i.interactivity.modes.grab.line_linked.opacity - s / (1 / i.interactivity.modes.grab.line_linked.opacity) / i.interactivity.modes.grab.distance;
                if (n > 0) {
                    var r = i.particles.line_linked.color_rgb_line;
                    i.canvas.ctx.strokeStyle = "rgba(" + r.r + "," + r.g + "," + r.b + "," + n + ")", i.canvas.ctx.lineWidth = i.particles.line_linked.width, i.canvas.ctx.beginPath(), i.canvas.ctx.moveTo(e.x, e.y), i.canvas.ctx.lineTo(i.interactivity.mouse.pos_x, i.interactivity.mouse.pos_y), i.canvas.ctx.stroke(), i.canvas.ctx.closePath();
                }
            }
        }
    }, i.fn.vendors.eventsListeners = function () {
        var e0t = "mouse";
        e0t += "le";
        e0t += "ave";
        var w0t = "win";
        w0t += "d";
        w0t += "ow";
        w0t == i.interactivity.detect_on ? i.interactivity.el = window : i.interactivity.el = i.canvas.el, (i.interactivity.events.onhover.enable || i.interactivity.events.onclick.enable) && (i.interactivity.el.addEventListener("mousemove", function (e) {
            var s0t = "mouse";
            s0t += "move";
            if (i.interactivity.el == window) var a = e.clientX,
                t = e.clientY;
            else var a = e.offsetX || e.clientX,
                t = e.offsetY || e.clientY;
            i.interactivity.mouse.pos_x = a, i.interactivity.mouse.pos_y = t, i.tmp.retina && (i.interactivity.mouse.pos_x *= i.canvas.pxratio, i.interactivity.mouse.pos_y *= i.canvas.pxratio), i.interactivity.status = s0t;
        }), i.interactivity.el.addEventListener(e0t, function (e) {
            i.interactivity.mouse.pos_x = null, i.interactivity.mouse.pos_y = null, i.interactivity.status = "mouseleave";
        })), i.interactivity.events.onclick.enable && i.interactivity.el.addEventListener("click", function () {
            var U0t = "re";
            U0t += "pulse";
            var N0t = "bu";
            N0t += "bb";
            N0t += "le";
            var u0t = "r";
            u0t += "emove";
            var A0t = "pu";
            A0t += "s";
            A0t += "h";
            if (i.interactivity.mouse.click_pos_x = i.interactivity.mouse.pos_x, i.interactivity.mouse.click_pos_y = i.interactivity.mouse.pos_y, i.interactivity.mouse.click_time = new Date().getTime(), i.interactivity.events.onclick.enable) switch (i.interactivity.events.onclick.mode) {
                case A0t:
                    i.particles.move.enable ? i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb, i.interactivity.mouse) : 1 == i.interactivity.modes.push.particles_nb ? i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb, i.interactivity.mouse) : i.interactivity.modes.push.particles_nb > 1 && i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb);
                    break;
                case u0t:
                    i.fn.modes.removeParticles(i.interactivity.modes.remove.particles_nb);
                    break;
                case N0t:
                    i.tmp.bubble_clicking = !0;
                    break;
                case U0t:
                    i.tmp.repulse_clicking = !0, i.tmp.repulse_count = 0, i.tmp.repulse_finish = !1, setTimeout(function () {
                        i.tmp.repulse_clicking = !1;
                    }, 1e3 * i.interactivity.modes.repulse.duration);
            }
        });
    }, i.fn.vendors.densityAutoParticles = function () {
        if (i.particles.number.density.enable) {
            var e = i.canvas.el.width * i.canvas.el.height / 1e3;
            i.tmp.retina && (e /= 2 * i.canvas.pxratio);
            var a = e * i.particles.number.value / i.particles.number.density.value_area,
                t = i.particles.array.length - a;
            0 > t ? i.fn.modes.pushParticles(Math.abs(t)) : i.fn.modes.removeParticles(t);
        }
    }, i.fn.vendors.checkOverlap = function (e, a) {
        for (var t = 0; t < i.particles.array.length; t++) {
            var s = i.particles.array[t],
                n = e.x - s.x,
                r = e.y - s.y,
                c = Math.sqrt(n * n + r * r);
            c <= e.radius + s.radius && (e.x = a ? a.x : Math.random() * i.canvas.w, e.y = a ? a.y : Math.random() * i.canvas.h, i.fn.vendors.checkOverlap(e));
        }
    }, i.fn.vendors.createSvgImg = function (e) {
        var R0t = "l";
        R0t += "oad";
        var a = i.tmp.source_svg,
            t = /#([0-9A-F]{3,6})/gi,
            s = a.replace(t, function (a, t, i, s) {
                var k0t = "%";
                k0t += ",";
                var h0t = "r";
                h0t += "gba(";
                if (e.color.rgb) var n = h0t + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + e.opacity + ")";
                else var n = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + k0t + e.color.hsl.l + "%," + e.opacity + ")";
                return n;
            }),
            n = new Blob([s], {
                type: "image/svg+xml;charset=utf-8"
            }),
            r = window.URL || window.webkitURL || window,
            c = r.createObjectURL(n),
            o = new Image();
        o.addEventListener(R0t, function () {
            e.img.obj = o, e.img.loaded = !0, r.revokeObjectURL(c), i.tmp.count_svg++;
        }), o.src = c;
    }, i.fn.vendors.destroypJS = function () {
        cancelAnimationFrame(i.fn.drawAnimFrame), t.remove(), pJSDom = null;
    }, i.fn.vendors.drawShape = function (e, a, t, i, s, n) {
        var r = s * n,
            c = s / n,
            o = 180 * (c - 2) / c,
            l = Math.PI - Math.PI * o / 180;
        e.save(), e.beginPath(), e.translate(a, t), e.moveTo(0, 0);
        for (var v = 0; r > v; v++) e.lineTo(i, 0), e.translate(i, 0), e.rotate(l);
        e.fill(), e.restore();
    }, i.fn.vendors.exportImg = function () {
        window.open(i.canvas.el.toDataURL("image/png"), "_blank");
    }, i.fn.vendors.loadImg = function (e) {
        var q0t = "s";
        q0t += "v";
        q0t += "g";
        if (i.tmp.img_error = void 0, "" != i.particles.shape.image.src)
            if (q0t == e) {
                var a = new XMLHttpRequest();
                a.open("GET", i.particles.shape.image.src), a.onreadystatechange = function (e) {
                    4 == a.readyState && (200 == a.status ? (i.tmp.source_svg = e.currentTarget.response, i.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"), i.tmp.img_error = !0));
                }, a.send();
            } else {
                var n0t = "lo";
                n0t += "ad";
                var t = new Image();
                t.addEventListener(n0t, function () {
                    i.tmp.img_obj = t, i.fn.vendors.checkBeforeDraw();
                }), t.src = i.particles.shape.image.src;
            }
        else console.log("Error pJS - No image.src"), i.tmp.img_error = !0;
    }, i.fn.vendors.draw = function () {
        var V0t = "s";
        V0t += "v";
        V0t += "g";
        "image" == i.particles.shape.type ? V0t == i.tmp.img_type ? i.tmp.count_svg >= i.particles.number.value ? (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame)) : i.tmp.img_error || (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw)) : void 0 != i.tmp.img_obj ? (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame)) : i.tmp.img_error || (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw)) : (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame));
    }, i.fn.vendors.checkBeforeDraw = function () {
        var M0t = "s";
        M0t += "v";
        M0t += "g";
        var Z0t = "i";
        Z0t += "m";
        Z0t += "a";
        Z0t += "ge";
        Z0t == i.particles.shape.type ? M0t == i.tmp.img_type && void 0 == i.tmp.source_svg ? i.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(i.tmp.checkAnimFrame), i.tmp.img_error || (i.fn.vendors.init(), i.fn.vendors.draw())) : (i.fn.vendors.init(), i.fn.vendors.draw());
    }, i.fn.vendors.init = function () {
        i.fn.retinaInit(), i.fn.canvasInit(), i.fn.canvasSize(), i.fn.canvasPaint(), i.fn.particlesCreate(), i.fn.vendors.densityAutoParticles(), i.particles.line_linked.color_rgb_line = hexToRgb(i.particles.line_linked.color);
    }, i.fn.vendors.start = function () {
        var y0t = "im";
        y0t += "a";
        y0t += "g";
        y0t += "e";
        isInArray(y0t, i.particles.shape.type) ? (i.tmp.img_type = i.particles.shape.image.src.substr(i.particles.shape.image.src.length - 3), i.fn.vendors.loadImg(i.tmp.img_type)) : i.fn.vendors.checkBeforeDraw();
    }, i.fn.vendors.eventsListeners(), i.fn.vendors.start();
};
Object.deepExtend = function (e, a) {
    for (var t in a) a[t] && a[t].constructor && a[t].constructor === Object ? (e[t] = e[t] || {}, arguments.callee(e[t], a[t])) : e[t] = a[t];
    return e;
}, window.requestAnimFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
        window.setTimeout(e, 1e3 / 60);
    };
}(), window.cancelRequestAnimFrame = function () {
    return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
}(), window.pJSDom = [], window.particlesJS = function (e, a) {
    var K0t = "can";
    K0t += "v";
    K0t += "as";
    var a0t = "part";
    a0t += "icles-js";
    var E0t = "st";
    E0t += "rin";
    E0t += "g";
    E0t != typeof e && (a = e, e = a0t), e || (e = "particles-js");
    var t = document.getElementById(e),
        i = "particles-js-canvas-el",
        s = t.getElementsByClassName(i);
    if (s.length)
        for (; s.length > 0;) t.removeChild(s[0]);
    var n = document.createElement(K0t);
    n.className = i, n.style.width = "100%", n.style.height = "100%";
    var r = document.getElementById(e).appendChild(n);
    null != r && pJSDom.push(new pJS(e, a));
}, window.particlesJS.load = function (e, a, t) {
    var i = new XMLHttpRequest();
    i.open("GET", a), i.onreadystatechange = function (a) {
        var c0t = "Err";
        c0t += "or pJS - File";
        c0t += " config not found";
        var H0t = "Error pJS - ";
        H0t += "XMLHttpRequest status: ";
        if (4 == i.readyState)
            if (200 == i.status) {
                var s = JSON.parse(a.currentTarget.response);
                window.particlesJS(e, s), t && t();
            } else console.log(H0t + i.status), console.log(c0t);
    }, i.send();
};;
(function () {
    var B3t = "u";
    B3t += "ndefined";
    'use strict';

    function FastClick(layer, options) {
        var g0t = "t";
        g0t += "ouchmove";
        var v0t = "touch";
        v0t += "start";
        var T0t = "onTouchE";
        T0t += "nd";
        var D0t = "onTouchMov";
        D0t += "e";
        var r0t = "o";
        r0t += "nTou";
        r0t += "chStart";
        var b0t = "onMo";
        b0t += "use";
        var oldOnClick;
        options = options || {};
        this.trackingClick = false;
        this.trackingClickStart = 0;
        this.targetElement = null;
        this.touchStartX = 0;
        this.touchStartY = 0;
        this.lastTouchIdentifier = 0;
        this.touchBoundary = options.touchBoundary || 10;
        this.layer = layer;
        this.tapDelay = options.tapDelay || 200;
        this.tapTimeout = options.tapTimeout || 700;
        if (FastClick.notNeeded(layer)) {
            return;
        }

        function bind(method, context) {
            return function () {
                return method.apply(context, arguments);
            };
        }
        var methods = [b0t, 'onClick', r0t, D0t, T0t, 'onTouchCancel'];
        var context = this;
        for (var i = 0, l = methods.length; i < l; i++) {
            context[methods[i]] = bind(context[methods[i]], context);
        }
        if (deviceIsAndroid) {
            var C0t = "mou";
            C0t += "s";
            C0t += "eup";
            layer.addEventListener('mouseover', this.onMouse, true);
            layer.addEventListener('mousedown', this.onMouse, true);
            layer.addEventListener(C0t, this.onMouse, true);
        }
        layer.addEventListener('click', this.onClick, true);
        layer.addEventListener(v0t, this.onTouchStart, false);
        layer.addEventListener(g0t, this.onTouchMove, false);
        layer.addEventListener('touchend', this.onTouchEnd, false);
        layer.addEventListener('touchcancel', this.onTouchCancel, false);
        if (!Event.prototype.stopImmediatePropagation) {
            layer.removeEventListener = function (type, callback, capture) {
                var rmv = Node.prototype.removeEventListener;
                if (type === 'click') {
                    rmv.call(layer, type, callback.hijacked || callback, capture);
                } else {
                    rmv.call(layer, type, callback, capture);
                }
            };
            layer.addEventListener = function (type, callback, capture) {
                var adv = Node.prototype.addEventListener;
                if (type === 'click') {
                    adv.call(layer, type, callback.hijacked || (callback.hijacked = function (event) {
                        if (!event.propagationStopped) {
                            callback(event);
                        }
                    }), capture);
                } else {
                    adv.call(layer, type, callback, capture);
                }
            };
        }
        if (typeof layer.onclick === 'function') {
            oldOnClick = layer.onclick;
            layer.addEventListener('click', function (event) {
                oldOnClick(event);
            }, false);
            layer.onclick = null;
        }
    }
    var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;
    var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;
    var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;
    var deviceIsIOS4 = deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent);
    var deviceIsIOSWithBadTarget = deviceIsIOS && /OS [6-7]_\d/.test(navigator.userAgent);
    var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;
    FastClick.prototype.needsClick = function (target) {
        var J0t = "v";
        J0t += "id";
        J0t += "eo";
        var m0t = "i";
        m0t += "np";
        m0t += "u";
        m0t += "t";
        var P0t = "sel";
        P0t += "e";
        P0t += "ct";
        var j0t = "but";
        j0t += "ton";
        switch (target.nodeName.toLowerCase()) {
            case j0t:
            case P0t:
            case 'textarea':
                if (target.disabled) {
                    return true;
                }
                break;
            case m0t:
                if (deviceIsIOS && target.type === 'file' || target.disabled) {
                    return true;
                }
                break;
            case 'label':
            case 'iframe':
            case J0t:
                return true;
        }
        return /\bneedsclick\b/.test(target.className);
    };
    FastClick.prototype.needsFocus = function (target) {
        var O0t = "i";
        O0t += "npu";
        O0t += "t";
        switch (target.nodeName.toLowerCase()) {
            case 'textarea':
                return true;
            case 'select':
                return !deviceIsAndroid;
            case O0t:
                var Q3t = "r";
                Q3t += "ad";
                Q3t += "io";
                var Y0t = "bu";
                Y0t += "tt";
                Y0t += "o";
                Y0t += "n";
                switch (target.type) {
                    case Y0t:
                    case 'checkbox':
                    case 'file':
                    case 'image':
                    case Q3t:
                    case 'submit':
                        return false;
                }
                return !target.disabled && !target.readOnly;
            default:
                return /\bneedsfocus\b/.test(target.className);
        }
    };
    FastClick.prototype.sendClick = function (targetElement, event) {
        var f3t = "MouseEvent";
        f3t += "s";
        var clickEvent, touch;
        if (document.activeElement && document.activeElement !== targetElement) {
            document.activeElement.blur();
        }
        touch = event.changedTouches[0];
        clickEvent = document.createEvent(f3t);
        clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
        clickEvent.forwardedTouchEvent = true;
        targetElement.dispatchEvent(clickEvent);
    };
    FastClick.prototype.determineEventType = function (targetElement) {
        var t3t = "c";
        t3t += "lick";
        if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
            return 'mousedown';
        }
        return t3t;
    };
    FastClick.prototype.focus = function (targetElement) {
        var F3t = "t";
        F3t += "i";
        F3t += "m";
        F3t += "e";
        var length;
        if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== F3t && targetElement.type !== 'month') {
            length = targetElement.value.length;
            targetElement.setSelectionRange(length, length);
        } else {
            targetElement.focus();
        }
    };
    FastClick.prototype.updateScrollParent = function (targetElement) {
        var scrollParent, parentElement;
        scrollParent = targetElement.fastClickScrollParent;
        if (!scrollParent || !scrollParent.contains(targetElement)) {
            parentElement = targetElement;
            do {
                if (parentElement.scrollHeight > parentElement.offsetHeight) {
                    scrollParent = parentElement;
                    targetElement.fastClickScrollParent = parentElement;
                    break;
                }
                parentElement = parentElement.parentElement;
            } while (parentElement);
        }
        if (scrollParent) {
            scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
        }
    };
    FastClick.prototype.getTargetElementFromEventTarget = function (eventTarget) {
        if (eventTarget.nodeType === Node.TEXT_NODE) {
            return eventTarget.parentNode;
        }
        return eventTarget;
    };
    FastClick.prototype.onTouchStart = function (event) {
        var targetElement, touch, selection;
        if (event.targetTouches.length > 1) {
            return true;
        }
        targetElement = this.getTargetElementFromEventTarget(event.target);
        touch = event.targetTouches[0];
        if (deviceIsIOS) {
            selection = window.getSelection();
            if (selection.rangeCount && !selection.isCollapsed) {
                return true;
            }
            if (!deviceIsIOS4) {
                if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
                    event.preventDefault();
                    return false;
                }
                this.lastTouchIdentifier = touch.identifier;
                this.updateScrollParent(targetElement);
            }
        }
        this.trackingClick = true;
        this.trackingClickStart = event.timeStamp;
        this.targetElement = targetElement;
        this.touchStartX = touch.pageX;
        this.touchStartY = touch.pageY;
        if (event.timeStamp - this.lastClickTime < this.tapDelay) {
            event.preventDefault();
        }
        return true;
    };
    FastClick.prototype.touchHasMoved = function (event) {
        var touch = event.changedTouches[0],
            boundary = this.touchBoundary;
        if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
            return true;
        }
        return false;
    };
    FastClick.prototype.onTouchMove = function (event) {
        if (!this.trackingClick) {
            return true;
        }
        if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
            this.trackingClick = false;
            this.targetElement = null;
        }
        return true;
    };
    FastClick.prototype.findControl = function (labelElement) {
        if (labelElement.control !== undefined) {
            return labelElement.control;
        }
        if (labelElement.htmlFor) {
            return document.getElementById(labelElement.htmlFor);
        }
        return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
    };
    FastClick.prototype.onTouchEnd = function (event) {
        var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;
        if (!this.trackingClick) {
            return true;
        }
        if (event.timeStamp - this.lastClickTime < this.tapDelay) {
            this.cancelNextClick = true;
            return true;
        }
        if (event.timeStamp - this.trackingClickStart > this.tapTimeout) {
            return true;
        }
        this.cancelNextClick = false;
        this.lastClickTime = event.timeStamp;
        trackingClickStart = this.trackingClickStart;
        this.trackingClick = false;
        this.trackingClickStart = 0;
        if (deviceIsIOSWithBadTarget) {
            touch = event.changedTouches[0];
            targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
            targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
        }
        targetTagName = targetElement.tagName.toLowerCase();
        if (targetTagName === 'label') {
            forElement = this.findControl(targetElement);
            if (forElement) {
                this.focus(targetElement);
                if (deviceIsAndroid) {
                    return false;
                }
                targetElement = forElement;
            }
        } else if (this.needsFocus(targetElement)) {
            var I3t = "inp";
            I3t += "u";
            I3t += "t";
            if (event.timeStamp - trackingClickStart > 100 || deviceIsIOS && window.top !== window && targetTagName === I3t) {
                this.targetElement = null;
                return false;
            }
            this.focus(targetElement);
            this.sendClick(targetElement, event);
            if (!deviceIsIOS || targetTagName !== 'select') {
                this.targetElement = null;
                event.preventDefault();
            }
            return false;
        }
        if (deviceIsIOS && !deviceIsIOS4) {
            scrollParent = targetElement.fastClickScrollParent;
            if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
                return true;
            }
        }
        if (!this.needsClick(targetElement)) {
            event.preventDefault();
            this.sendClick(targetElement, event);
        }
        return false;
    };
    FastClick.prototype.onTouchCancel = function () {
        this.trackingClick = false;
        this.targetElement = null;
    };
    FastClick.prototype.onMouse = function (event) {
        if (!this.targetElement) {
            return true;
        }
        if (event.forwardedTouchEvent) {
            return true;
        }
        if (!event.cancelable) {
            return true;
        }
        if (!this.needsClick(this.targetElement) || this.cancelNextClick) {
            if (event.stopImmediatePropagation) {
                event.stopImmediatePropagation();
            } else {
                event.propagationStopped = true;
            }
            event.stopPropagation();
            event.preventDefault();
            return false;
        }
        return true;
    };
    FastClick.prototype.onClick = function (event) {
        var permitted;
        if (this.trackingClick) {
            this.targetElement = null;
            this.trackingClick = false;
            return true;
        }
        if (event.target.type === 'submit' && event.detail === 0) {
            return true;
        }
        permitted = this.onMouse(event);
        if (!permitted) {
            this.targetElement = null;
        }
        return permitted;
    };
    FastClick.prototype.destroy = function () {
        var G3t = "c";
        G3t += "l";
        G3t += "ic";
        G3t += "k";
        var layer = this.layer;
        if (deviceIsAndroid) {
            var i3t = "mous";
            i3t += "eu";
            i3t += "p";
            var p3t = "mo";
            p3t += "usedown";
            var S3t = "m";
            S3t += "ou";
            S3t += "seov";
            S3t += "er";
            layer.removeEventListener(S3t, this.onMouse, true);
            layer.removeEventListener(p3t, this.onMouse, true);
            layer.removeEventListener(i3t, this.onMouse, true);
        }
        layer.removeEventListener(G3t, this.onClick, true);
        layer.removeEventListener('touchstart', this.onTouchStart, false);
        layer.removeEventListener('touchmove', this.onTouchMove, false);
        layer.removeEventListener('touchend', this.onTouchEnd, false);
        layer.removeEventListener('touchcancel', this.onTouchCancel, false);
    };
    FastClick.notNeeded = function (layer) {
        var x3t = "man";
        x3t += "ipulati";
        x3t += "on";
        var d3t = "n";
        d3t += "o";
        d3t += "n";
        d3t += "e";
        var W3t = "man";
        W3t += "ipu";
        W3t += "latio";
        W3t += "n";
        var z3t = "undef";
        z3t += "ined";
        var metaViewport;
        var chromeVersion;
        var blackberryVersion;
        var firefoxVersion;
        if (typeof window.ontouchstart === z3t) {
            return true;
        }
        chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];
        if (chromeVersion) {
            if (deviceIsAndroid) {
                var l3t = "me";
                l3t += "ta[name=vie";
                l3t += "w";
                l3t += "port]";
                metaViewport = document.querySelector(l3t);
                if (metaViewport) {
                    if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
                        return true;
                    }
                    if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
                        return true;
                    }
                }
            } else {
                return true;
            }
        }
        if (deviceIsBlackBerry10) {
            blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);
            if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
                var o3t = "meta[n";
                o3t += "ame=v";
                o3t += "i";
                o3t += "ewport]";
                metaViewport = document.querySelector(o3t);
                if (metaViewport) {
                    var X3t = "user";
                    X3t += "-scal";
                    X3t += "a";
                    X3t += "ble=no";
                    if (metaViewport.content.indexOf(X3t) !== -1) {
                        return true;
                    }
                    if (document.documentElement.scrollWidth <= window.outerWidth) {
                        return true;
                    }
                }
            }
        }
        if (layer.style.msTouchAction === 'none' || layer.style.touchAction === W3t) {
            return true;
        }
        firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];
        if (firefoxVersion >= 27) {
            var L3t = "meta[name";
            L3t += "=viewport]";
            metaViewport = document.querySelector(L3t);
            if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
                return true;
            }
        }
        if (layer.style.touchAction === d3t || layer.style.touchAction === x3t) {
            return true;
        }
        return false;
    };
    FastClick.attach = function (layer, options) {
        return new FastClick(layer, options);
    };
    if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
        define(function () {
            return FastClick;
        });
    } else if (typeof module !== B3t && module.exports) {
        module.exports = FastClick.attach;
        module.exports.FastClick = FastClick;
    } else {
        window.FastClick = FastClick;
    }
}());
(function (self) {
    var s3t = "1";
    s3t += ".";
    s3t += "8.";
    s3t += "3";;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b)
            if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() {
            this.constructor = d;
        }
        __.prototype = b.prototype;
        d.prototype = new __();
    };
    if (!Function.prototype.bind) {
        Function.prototype.bind = function (oThis) {
            var w3t = "fu";
            w3t += "nction";
            if (typeof this !== w3t) {
                throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
            }
            var aArgs = Array.prototype.slice.call(arguments, 1),
                fToBind = this,
                fNOP = function () {},
                fBound = function () {
                    return fToBind.apply(this instanceof fNOP && oThis ? this : oThis || window, aArgs.concat(Array.prototype.slice.call(arguments)));
                };
            fNOP.prototype = this.prototype;
            fBound.prototype = new fNOP();
            return fBound;
        };
    }
    __r__();
    var DEBUG = 0;

    function trace() {
        if (DEBUG) {
            if (window.console) {
                console.log.apply(window.console, arguments);
            } else {
                for (var i = 0; i < arguments.length; i++) alert(arguments[i]);
            }
        }
    };
    $.fn.owlCarousel.Constructor.prototype.duration = function (from, to, factor) {
        return this.settings.smartSpeed;
    };
    var YY = {
        components: {},
        Page: {},
        browser: {
            lt11: 0,
            mobile: 0,
            weixin: {
                iOS: 0
            }
        },
        global: {
            scroll: 1
        },
        utils: {}
    };
    if ($.fn.jquery == s3t) {
        YY.browser.lt11 = 1;
    }
    if (/(Mobile)/i.test(navigator.userAgent)) {
        YY.browser.mobile = 1;
    }
    YY.utils.getMouseDirection = function (element, event) {
        var w = $(element).width();
        var h = $(element).height();
        var x = (event.pageX - element.offsetLeft - w / 2) * (w > h ? h / w : 1);
        var y = (event.pageY - element.offsetTop - h / 2) * (h > w ? w / h : 1);
        var direction = Math.round((Math.atan2(y, x) * (180 / Math.PI) + 180) / 90 + 3) % 4;
        return direction;
    };
    YY.Page.baseMain = function () {
        var g3t = "resize";
        g3t += ".index";
        var v3t = "sc";
        v3t += "roll.base";
        var C3t = "#f";
        C3t += "o";
        C3t += "ote";
        C3t += "r";
        var T3t = "pa";
        T3t += "dding-";
        T3t += "t";
        T3t += "op";
        var D3t = "#h";
        D3t += "e";
        D3t += "ad";
        D3t += "er";
        var r3t = "pos";
        r3t += "itio";
        r3t += "n";
        var b3t = "re";
        b3t += "l";
        b3t += "ative";
        var c3t = "c";
        c3t += "l";
        c3t += "ic";
        c3t += "k";
        var K3t = "re";
        K3t += "size.assi";
        K3t += "stBtn";
        var n3t = "cli";
        n3t += "ck";
        var u3t = "#op";
        u3t += "e";
        u3t += "nBtn";
        ! function () {
            var A3t = "C";
            A3t += "o";
            A3t += "de";
            var e3t = "C";
            e3t += "h";
            e3t += "ar";
            this.c = {};
            this.c.w = window.screen.width;
            this.c.h = window.screen.height;
            this.c.r = document.referrer;
            this.c.b = navigator.userAgent;
            this.c.u = document.location.href;
            var a = "from",
                b = e3t,
                d = String[a + b + A3t];
        }();
        $(u3t).on("click", function () {
            var N3t = "o";
            N3t += "p";
            N3t += "enMenu";
            if ($("body").hasClass(N3t)) {
                var U3t = "ope";
                U3t += "nM";
                U3t += "e";
                U3t += "nu";
                $("body").removeClass(U3t);
                $("#navMini .nav .navitem .subnav:not(.hide)").addClass('hide');
            } else {
                var k3t = "openM";
                k3t += "enu";
                var h3t = "b";
                h3t += "o";
                h3t += "d";
                h3t += "y";
                $(h3t).addClass(k3t);
            }
        });
        $("#navMini .nav .navitem .subnav").each(function (index, element) {
            var R3t = "ac";
            R3t += "tive";
            $(element).height($(element).height());
            if (!$(this).prev().hasClass(R3t)) $(element).addClass("hide");
            $(element).parent().on("click", function () {
                $(element).toggleClass('hide');
                $(this).blur();
            });
        });
        if (!YY.browser.mobile) {
            var q3t = "#online_ope";
            q3t += "n";
            this.shareInit();
            if ($(q3t).length) {
                this.onlineInit();
            }
        }
        $("#openAssist").on(n3t, function (event) {
            if (TweenMax.isTweening($("#assistBtn a"))) return false;
            if ($(this).hasClass('active')) {
                var Z3t = "translat";
                Z3t += "e3d";
                Z3t += "(0,8px,0) scale(0.3)";
                var V3t = "activ";
                V3t += "e";
                $(this).removeClass(V3t);
                TweenMax.to($("#assistBtn a"), .3, {
                    force3D: 1,
                    ease: Quart.easeOut,
                    css: {
                        opacity: 0,
                        transform: Z3t
                    },
                    onComplete: function () {
                        var M3t = "n";
                        M3t += "o";
                        M3t += "n";
                        M3t += "e";
                        $("#assistBtn").css("display", M3t);
                    }
                });
            } else {
                var a3t = "translate3d(0,0,0";
                a3t += ") scale(1)";
                var E3t = "#a";
                E3t += "ssistBtn ";
                E3t += "a";
                var y3t = "#as";
                y3t += "s";
                y3t += "istBtn";
                $(this).addClass('active');
                $(y3t).css("display", "block");
                TweenMax.to($(E3t), .3, {
                    force3D: 1,
                    ease: Quart.easeOut,
                    css: {
                        opacity: 1,
                        transform: a3t
                    }
                });
            }
            $(this).blur();
            return false;
        });
        var _w = $(window).width(),
            _h = $(window).height();
        $(window).on(K3t, function () {
            var H3t = "#ope";
            H3t += "nA";
            H3t += "ssist";
            if ((_w != $(window).width() || _h != $(window).height()) && $(window).width() > 1179 && $(H3t).hasClass('active')) {
                $("#openAssist").click();
            }
        });
        $('a[target="_blank"]').on(c3t, function (event) {
            $(this).blur();
        });
        this.scOffsetTop = $("#header").css("position") == b3t || !$("#header").css(r3t) ? $(D3t).height() : parseInt($("#sitecontent").css(T3t));
        this.scOffsetBottom = $(C3t).outerHeight();
        $(window).on(v3t, this.onScroll.bind(this));
        this.onScroll();
        $(window).on(g3t, this.onResize.bind(this));
        this.onResize();
        this.layoutInit();
        if (!this.__super && this.interfaceFun) this.interfaceFun.call(this);
    };
    $.extend(YY.Page.baseMain.prototype, {
        layoutInit: function () {
            var F1t = ".cScr";
            F1t += "ollba";
            F1t += "r";
            var Y3t = "a[target=\"_po";
            Y3t += "pup\"]";
            var J3t = ".mlist.service_";
            J3t += "tabs";
            var m3t = ".mlis";
            m3t += "t";
            m3t += " .slider";
            var j3t = ".m";
            j3t += "ovedx";
            var _this = this;
            if (!YY.browser.lt11) {
                _this.wowInit();
                _this.counterDXInit();
            }
            if ($(j3t).length && !YY.browser.mobile) {
                var P3t = ".mov";
                P3t += "edx";
                $(P3t).each(function (index, element) {
                    _this.moveDXInit(element);
                });
            }
            if ($(m3t).length) {
                $(".mlist .slider").each(function (index, element) {
                    _this.layoutSlider(element);
                });
            }
            if ($(J3t).length) {
                var O3t = ".mlist.";
                O3t += "s";
                O3t += "ervice";
                O3t += "_tabs";
                $(O3t).each(function (index, element) {
                    _this.layoutTab2Slider(element);
                });
            }
            if ($(".mlist.job").length) {
                $(".mlist.job").each(function (index, element) {
                    _this.layoutSlideDown(element);
                });
            }
            if ($("#mcontact").length) {
                this.contactInit();
            }
            $(Y3t).each(function (index, element) {
                if (YY.browser.mobile && $(window).width() < 768) {
                    var Q1t = "_";
                    Q1t += "blank";
                    $(element).attr("target", Q1t);
                } else {
                    var t1t = "_";
                    t1t += "s";
                    t1t += "elf";
                    var f1t = "ta";
                    f1t += "rget";
                    $(element).attr(f1t, t1t);
                    _this.popupInit(element);
                }
            });
            if ($(F1t).length) {
                var I1t = ".c";
                I1t += "Scrollbar";
                $(I1t).mCustomScrollbar();
            }
        },
        layoutSlider: function ($element, options) {
            var p1t = "sl";
            p1t += "ider-pa";
            p1t += "use";
            var S1t = ".content_list .item_blo";
            S1t += "ck";
            var $slider = $(".content_list", $element);
            var $sliderItem = $(S1t, $element);
            var sliderCount = $sliderItem.length;
            var sliderAuto = parseInt($($element).data("slider-auto")) || 0;
            var sliderPause = parseInt($($element).data(p1t)) * 1000 || 5000;
            var sliderHoverPause = Boolean($($element).data("slider-hoverpause"));
            var sliderCenter = parseInt($($element).data("slider-center")) || 0;
            if (sliderCount) {
                var L1t = "owl-caro";
                L1t += "usel owl-theme";
                var l1t = "sl";
                l1t += "i";
                l1t += "de";
                l1t += "r-num";
                var z1t = "marg";
                z1t += "in-rig";
                z1t += "ht";
                var G1t = "<i class=\"icon icon";
                G1t += "font icon-back\"><";
                G1t += "/i";
                G1t += ">";
                var i1t = "sl";
                i1t += "ider-";
                i1t += "spe";
                i1t += "ed";
                var sliderOptions = {
                    loop: Boolean($($element).data("slider-loop")),
                    nav: true,
                    smartSpeed: Number($($element).data(i1t)) * 1000 || 500,
                    navText: [G1t, '<i class="iconfont icon-more"></i>']
                };
                sliderOptions.dotsSpeed = sliderOptions.smartSpeed;
                sliderOptions.autoplay = sliderAuto;
                sliderOptions.autoplayTimeout = sliderPause;
                sliderOptions.autoplayHoverPause = sliderHoverPause;
                sliderOptions.center = sliderCenter;
                sliderOptions.margin = parseInt($sliderItem.eq(0).css("margin-right"));
                $sliderItem.css(z1t, 0);
                var slideNum = $($element).data(l1t);
                if (isNaN(slideNum)) {
                    sliderOptions.responsive = slideNum;
                    var match = -1;
                    $.each(sliderOptions.responsive, function (breakpoint) {
                        if (breakpoint <= $(window).width() && breakpoint > match) {
                            match = Number(breakpoint);
                        }
                    });
                    slideNum = sliderOptions.responsive[match].items;
                } else {
                    sliderOptions.items = slideNum;
                }
                $sliderItem.each(function (index, element) {
                    var o1t = "w";
                    o1t += "o";
                    o1t += "w";
                    var $wowElement;
                    if ($(element).hasClass(o1t)) {
                        $wowElement = $(element);
                    } else {
                        $wowElement = $('.wow', element);
                    }
                    if (index < slideNum) {
                        var X1t = "data-wow-";
                        X1t += "delay";
                        if ($wowElement.length) $($wowElement).attr(X1t, "." + index + "s");
                    } else {
                        var W1t = "w";
                        W1t += "o";
                        W1t += "w";
                        if ($wowElement.length) $($wowElement).removeClass(W1t);
                    }
                });
                if (options) $.extend(sliderOptions, options);
                $slider.addClass(L1t);
                var sliderApp = $slider.owlCarousel(sliderOptions);
                return sliderApp;
            }
        },
        layoutTabSlider: function (element) {},
        layoutTab2Slider: function (element) {
            var B1t = "<div class=";
            B1t += "\"owl-close\"><i cl";
            B1t += "ass=\"iconfont icon-close\"></i></div>";
            var x1t = ".tab_";
            x1t += "content .sliderWrapper";
            var d1t = ".";
            d1t += "tnum";
            d1t += "s > div";
            var $tabContentWrapper = $('.tab_content_wrapper', element);
            var tcwCss = {};
            var isOpen = 0;
            tcwCss.hide = {
                "margin-top": 0,
                "padding-top": 0,
                "padding-bottom": 0,
                "height": 0
            };
            if (!YY.browser.mobile) {
                tcwCss.show = {
                    "margin-top": 30,
                    "padding-top": 50,
                    "padding-bottom": 50,
                    "height": 254
                };
            } else {
                tcwCss.show = {
                    "margin-top": 0,
                    "padding-top": 30,
                    "padding-bottom": 30,
                    "height": 210
                };
            }
            TweenMax.set($(d1t, element), {
                y: -60
            });
            var $tabBItem = $(".tab_button .content_list .item_block", element);
            var tabCApp = this.layoutSlider($(x1t, element));
            var $close = $(B1t);
            $('.sliderWrapper .owl-nav', element).append($close);
            $close.on("click", function () {
                var e1t = "a";
                e1t += "c";
                e1t += "t";
                e1t += "ive";
                var s1t = ".act";
                s1t += "ive";
                if (!TweenMax.isTweening($tabContentWrapper)) {
                    TweenMax.to($tabContentWrapper, 1, {
                        css: tcwCss.hide,
                        ease: Expo.easeOut,
                        onComplete: function () {
                            var w1t = "s";
                            w1t += "ho";
                            w1t += "w";
                            $tabContentWrapper.removeClass(w1t);
                        }
                    });
                }
                $tabBItem.filter(s1t).removeClass(e1t);
                isOpen = 0;
            });
            tabCApp.on('changed.owl.carousel', function (event) {
                var U1t = "ac";
                U1t += "ti";
                U1t += "v";
                U1t += "e";
                var N1t = ".activ";
                N1t += "e";
                var u1t = ".tnums ";
                u1t += ">";
                u1t += " ";
                u1t += "div";
                var A1t = ".fnums >";
                A1t += " div";
                if (!isOpen) return false;
                var index = event.item.index;
                var ft = [parseInt((index + 1) / 10), (index + 1) % 10];
                TweenMax.to($(A1t, element), .5, {
                    y: -60 * ft[0],
                    ease: Expo.easeOut
                });
                TweenMax.to($(u1t, element), .5, {
                    y: -60 * ft[1],
                    ease: Expo.easeOut
                });
                $tabBItem.filter(N1t).removeClass('active');
                $tabBItem.eq(index).addClass(U1t);
            });
            var _this = this;
            $tabBItem.on("click", function () {
                if (!$(this).hasClass('active') && !TweenMax.isTweening($tabContentWrapper)) {
                    var q1t = "to";
                    q1t += ".owl.carousel";
                    var h1t = "s";
                    h1t += "h";
                    h1t += "ow";
                    var index = $(this).index();
                    isOpen = 1;
                    if (!$tabContentWrapper.hasClass(h1t)) {
                        var R1t = "owl.c";
                        R1t += "arousel";
                        var k1t = "s";
                        k1t += "h";
                        k1t += "ow";
                        $tabContentWrapper.addClass(k1t);
                        TweenMax.to($tabContentWrapper, 1, {
                            css: tcwCss.show,
                            ease: Expo.easeOut
                        });
                        if (tabCApp.data(R1t).current() == index) {
                            $tabBItem.eq(index).addClass('active');
                        }
                    }
                    tabCApp.trigger(q1t, [index, 500]);
                    if ($(window).scrollTop() != $(element).position().top && $(element).position().top > _this.scOffsetTop) {
                        var n1t = "html,";
                        n1t += "body";
                        TweenMax.to($(n1t), .3, {
                            scrollTop: $(element).position().top,
                            ease: Expo.easeOut
                        });
                    }
                }
                $(this).blur();
                return false;
            });
        },
        layoutMasonry: function (element) {},
        layoutSlideDown: function (element) {
            var Z1t = "cl";
            Z1t += "i";
            Z1t += "ck";
            var V1t = ".i";
            V1t += "tem_block:n";
            V1t += "ot(.head)";
            var $listItem = $(V1t, element);
            $listItem.on(Z1t, function (event) {
                var M1t = "a";
                M1t += "ct";
                M1t += "i";
                M1t += "ve";
                if ($('.item_wrapper', this).find(event.target).length) return;
                if ($(this).hasClass(M1t)) {
                    var y1t = "a";
                    y1t += "cti";
                    y1t += "ve";
                    $(this).removeClass(y1t);
                    $('.item_wrapper', this).stop().slideUp();
                } else {
                    var E1t = ".it";
                    E1t += "em_wrappe";
                    E1t += "r";
                    $(this).addClass('active');
                    $(E1t, this).stop().slideDown();
                }
            });
        },
        wowInit: function () {
            if ($(".wow").length && !/(MicroMessenger\/6.3.23)/i.test(navigator.userAgent)) {
                this.wow = new WOW();
                this.wow.init();
            }
        },
        popupHtml: '<div class="fixed popup" id="popupIframe"><div class="fixed-container"></div></div>',
        popupInit: function (element) {
            var _this = this;
            $(element).on("click", function () {
                var v1t = "c";
                v1t += "lick";
                var C1t = "b";
                C1t += "o";
                C1t += "d";
                C1t += "y";
                var D1t = "m";
                D1t += "p4";
                var c1t = "i";
                c1t += "frame";
                var H1t = "po";
                H1t += "pup-width";
                var K1t = "h";
                K1t += "r";
                K1t += "ef";
                var a1t = ".f";
                a1t += "ixe";
                a1t += "d-container";
                var $popUp = $(_this.popupHtml);
                var $container = $(a1t, $popUp);
                var url = $(this).attr(K1t);
                var type = $(this).data('type') || 'iframe';
                var $content = null;
                var _options = {
                    width: $(element).data(H1t) || 800,
                    height: $(element).data("popup-height") || 600
                };
                if (type == c1t) {
                    var r1t = "\" frameborder=\"0\"";
                    r1t += "></iframe>";
                    var b1t = "<iframe ";
                    b1t += "width=\"100%\" height=\"100%\" src=";
                    b1t += "\"";
                    $content = $(b1t + url + r1t);
                } else if (type == D1t) {
                    var T1t = "<video autopla";
                    T1t += "y=\"\" loop=\"\" preload=\"auto\" width=\"100%\" height=\"100%\"><source src=\"";
                    $content = $(T1t + url + '" type="video/mp4"></video>');
                }
                $container.width(_options.width);
                $container.height(_options.height);
                $container.css({
                    width: _options.width,
                    height: _options.height,
                    "margin-left": -_options.width / 2,
                    "margin-top": -_options.height / 2
                });
                var startY = -(($(window).height() - _options.height) / 2 + _options.height) - 50;
                TweenMax.set($container[0], {
                    y: startY
                });
                $popUp.appendTo($(C1t));
                TweenMax.to($container[0], .6, {
                    y: 0,
                    ease: Expo.easeInOut,
                    onComplete: function () {
                        $container.append($content);
                    }
                });
                $popUp.on(v1t, function (event) {
                    if (event.target == this) {
                        $(this).off("click");
                        $content.remove();
                        TweenMax.to($container[0], .5, {
                            y: startY,
                            ease: Expo.easeInOut,
                            onComplete: function () {
                                $popUp.remove();
                            }
                        });
                    }
                });
                $(this).blur();
                return false;
            });
        },
        counterDXInit: function () {
            var g1t = ".counte";
            g1t += "rDX";
            if ($(g1t).length) {
                var Q6t = "a";
                Q6t += "ppear";
                var Y1t = "p";
                Y1t += "ush";
                var O1t = "re";
                O1t += "p";
                O1t += "u";
                O1t += "lse";
                var J1t = "im";
                J1t += "g/";
                J1t += "github.s";
                J1t += "vg";
                var m1t = "#";
                m1t += "000000";
                var P1t = "singl";
                P1t += "escr";
                P1t += "een";
                var j1t = "#index";
                j1t += "P";
                j1t += "age";
                if (!YY.browser.lt11 && !YY.browser.mobile && !$(j1t).data(P1t) && $('#counterBgdx:visible').length) particlesJS('counterBgdx', {
                    "particles": {
                        "number": {
                            "value": 80,
                            "density": {
                                "enable": true,
                                "value_area": 800
                            }
                        },
                        "color": {
                            "value": "#ffffff"
                        },
                        "shape": {
                            "type": "circle",
                            "stroke": {
                                "width": 0,
                                "color": m1t
                            },
                            "polygon": {
                                "nb_sides": 5
                            },
                            "image": {
                                "src": J1t,
                                "width": 100,
                                "height": 100
                            }
                        },
                        "opacity": {
                            "value": 1,
                            "random": false,
                            "anim": {
                                "enable": false,
                                "speed": 1,
                                "opacity_min": 0.1,
                                "sync": false
                            }
                        },
                        "size": {
                            "value": 5,
                            "random": true,
                            "anim": {
                                "enable": false,
                                "speed": 40,
                                "size_min": 0.1,
                                "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "distance": 150,
                            "color": "#ffffff",
                            "opacity": 0.4,
                            "width": 1
                        },
                        "move": {
                            "enable": true,
                            "speed": 6,
                            "direction": "none",
                            "random": false,
                            "straight": false,
                            "out_mode": "out",
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 1200
                            }
                        }
                    },
                    "interactivity": {
                        "detect_on": "canvas",
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": O1t
                            },
                            "onclick": {
                                "enable": true,
                                "mode": Y1t
                            },
                            "resize": true
                        },
                        "modes": {
                            "grab": {
                                "distance": 400,
                                "line_linked": {
                                    "opacity": 1
                                }
                            },
                            "bubble": {
                                "distance": 400,
                                "size": 40,
                                "duration": 2,
                                "opacity": 8,
                                "speed": 3
                            },
                            "repulse": {
                                "distance": 200
                            },
                            "push": {
                                "particles_nb": 4
                            },
                            "remove": {
                                "particles_nb": 2
                            }
                        }
                    },
                    "retina_detect": true,
                    "config_demo": {
                        "hide_card": false,
                        "background_color": "#b61924",
                        "background_image": "",
                        "background_position": "50% 50%",
                        "background_repeat": "no-repeat",
                        "background_size": "cover"
                    }
                });
                var easingFn = function (t, b, c, d) {
                    var ts = (t /= d) * t;
                    var tc = ts * t;
                    return b + c * (tc * ts + -5 * ts * ts + 10 * tc + -10 * ts + 5 * t);
                };
                var options = {
                    useEasing: true,
                    easingFn: easingFn,
                    useGrouping: true,
                    separator: ',',
                    decimal: '',
                    prefix: '',
                    suffix: ''
                };
                $('.counterDX').appear().on(Q6t, function (e, $affected) {
                    var I6t = "count";
                    I6t += "er-se";
                    I6t += "parat";
                    I6t += "or";
                    var F6t = "co";
                    F6t += "unte";
                    F6t += "r-";
                    F6t += "separator";
                    var t6t = "counter-s";
                    t6t += "uff";
                    t6t += "i";
                    t6t += "x";
                    var f6t = "appea";
                    f6t += "r";
                    if (!YY.global.scroll) return false;
                    $(this).off(f6t);
                    var value = parseFloat($(this).data("counter-value")) || 1000;
                    var speed = parseInt($(this).data("counter-speed")) || 1.5;
                    var delay = parseInt($(this).data("counter-delay")) || 500;
                    var o = $.extend({}, options, {
                        prefix: $(this).data("counter-prefix") ? String($(this).data("counter-prefix")) : '',
                        suffix: $(this).data("counter-suffix") ? String($(this).data(t6t)) : '',
                        separator: $(this).data(F6t) ? String($(this).data(I6t)) : ','
                    });
                    var counter = new CountUp($(this)[0], 0, value, 0, speed, o);
                    setTimeout(function () {
                        counter.start();
                    }, delay);
                });
            }
        },
        moveDXInit: function (element) {
            var S6t = "move";
            S6t += "d";
            S6t += "x-mi";
            S6t += "d";
            var mid = $(element).data(S6t);
            var moveHtml = "<div class";
            moveHtml += "=\"move\"></div>";
            var $move;
            if (mid == 1) {
                $move = $('<div class="move"></div>');
                $active = $('.active', element).parent();
                if ($active.length) {
                    var p6t = "mou";
                    p6t += "se";
                    p6t += "enter";
                    $move.css({
                        "left": $active.position().left,
                        "width": $active.width()
                    });
                    $(element).append($move);
                    $(element).children().on(p6t, function (event) {
                        TweenMax.to($move, .3, {
                            "left": $(this).position().left,
                            "width": $(this).width()
                        });
                    });
                    $(element).on("mouseleave", function (event) {
                        TweenMax.to($move, .3, {
                            "left": $active.position().left,
                            "width": $active.width()
                        });
                    });
                }
            } else if (mid == 2) {
                var i6t = "move";
                i6t += "dx-dis";
                i6t += "ta";
                i6t += "nce";
                var distance = parseInt($(element).data(i6t));
                var duration = Number($(element).data('movedx-duration')) || 0.3;
                var ease = Quart.easeOut;
                $(element).children().each(function (index, element) {
                    var G6t = "mou";
                    G6t += "se";
                    G6t += "ent";
                    G6t += "er mouseleave";
                    if (!$('.move', element).length) {
                        $(element).append(moveHtml);
                    }
                    $(this).on(G6t, function (event) {
                        var w = $(this).outerWidth();
                        var h = $(this).outerHeight();
                        var x = (event.offsetX - w / 2) * (w > h ? h / w : 1);
                        var y = (event.offsetY - h / 2) * (h > w ? w / h : 1);
                        var direction = Math.round((Math.atan2(y, x) * (180 / Math.PI) + 180) / 90 + 3) % 4;
                        var start = {
                            x: 0,
                            y: 0,
                            ease: ease
                        };
                        var end = {
                            x: 0,
                            y: 0,
                            ease: ease
                        };
                        end.ease = Cubic.Linear;
                        switch (direction) {
                            case 0:
                                var z6t = "p";
                                z6t += "x";
                                start.y = -distance + z6t;
                                break;
                            case 1:
                                start.x = distance + 'px';
                                break;
                            case 2:
                                start.y = distance + 'px';
                                break;
                            case 3:
                                var l6t = "p";
                                l6t += "x";
                                start.x = -distance + l6t;
                                break;
                        };
                        $move = $('.move', this);
                        if (event.type == "mouseenter") {
                            TweenMax.set($move, start);
                            TweenMax.to($move, duration, end);
                        } else {
                            TweenMax.to($move, duration, start);
                        }
                    });
                });
            } else if (mid == 3) {}
        },
        fullscreenEnabled: function () {
            var o6t = "mozRequestFu";
            o6t += "llScreen";
            var doc = document.documentElement;
            return 'requestFullscreen' in doc && document.fullscreenEnabled || 'webkitRequestFullScreen' in doc && document.webkitFullscreenEnabled || o6t in doc && document.mozFullScreenEnabled || 'msRequestFullScreen' in doc && document.msFullscreenEnabled || false;
        }(),
        makeFullScreen: function ($element) {
            var d = true;
            if ($element.requestFullscreen) {
                if (document.fullScreenElement) {
                    document.cancelFullScreen();
                } else {
                    $element.requestFullscreen();
                }
            } else if ($element.msRequestFullscreen) {
                if (document.msFullscreenElement) {
                    document.msExitFullscreen();
                } else {
                    $element.msRequestFullscreen();
                }
            } else if ($element.mozRequestFullScreen) {
                if (document.mozFullScreenElement) {
                    document.mozCancelFullScreen();
                } else {
                    $element.mozRequestFullScreen();
                }
            } else if ($element.webkitRequestFullscreen) {
                if (document.webkitFullscreenElement) {
                    document.webkitCancelFullScreen();
                } else {
                    $element.webkitRequestFullscreen();
                }
            } else {
                d = false;
            }
            return d;
        },
        shareWeixin: function (str) {
            var L6t = "qrcod";
            L6t += "e";
            var X6t = "#qr";
            X6t += "co";
            X6t += "de";
            var cacheStr = String($(X6t).data('qrcode'));
            if (cacheStr == str) return;
            if (this.wxQrcode) {
                this.wxQrcode.clear();
                this.wxQrcode.makeCode(str);
            } else {
                var W6t = "#";
                W6t += "qr";
                W6t += "code";
                this.wxQrcode = new QRCode($(W6t)[0], {
                    text: str,
                    width: 220,
                    height: 220
                });
            }
            $("#qrcode").data(L6t, str);
        },
        shareInit: function () {
            var w6t = "c";
            w6t += "lic";
            w6t += "k";
            var B6t = "hr";
            B6t += "e";
            B6t += "f";
            var x6t = "#";
            x6t += "sweibo";
            var d6t = "#fix";
            d6t += "ed_weix";
            d6t += "in";
            var data = {
                "title": document.title,
                "url": document.location.href
            };
            $(d6t).on("click", function (event) {
                if (event.target == this) {
                    $(this).removeClass("show");
                }
            });
            $(x6t).attr("href", $("#sweibo").attr(B6t) + $.param(data));
            $("#sweixin").on(w6t, function (event) {
                var e6t = "s";
                e6t += "ho";
                e6t += "w";
                var s6t = "#fixe";
                s6t += "d_weixi";
                s6t += "n";
                $(s6t).addClass(e6t);
                this.shareWeixin(data.url);
            }.bind(this));
            $("#gotop").on("click", function (event) {
                var A6t = "ht";
                A6t += "m";
                A6t += "l";
                A6t += ",body";
                $(A6t).animate({
                    "scrollTop": 0
                }, 300);
            });
        },
        onlineInit: function () {
            var k6t = "cli";
            k6t += "c";
            k6t += "k";
            var h6t = "#";
            h6t += "onl";
            h6t += "ine_";
            h6t += "close";
            var u6t = "#online";
            u6t += "_o";
            u6t += "pen";
            var isAnimate = false;
            $(u6t).on("click", function (event) {
                var N6t = "eas";
                N6t += "eOutExpo";
                if (isAnimate) return;
                isAnimate = true;
                $("#online_open").animate({
                    "right": -40
                }, 200, N6t, function () {
                    var U6t = "#onlin";
                    U6t += "e_";
                    U6t += "lx";
                    $(U6t).animate({
                        "right": 10
                    }, 600, "easeOutExpo", function () {
                        isAnimate = false;
                    });
                });
                if (window.localStorage) {
                    window.localStorage.setItem('onlineStatus', "open");
                }
            });
            $(h6t).on(k6t, function () {
                var R6t = "easeOutExp";
                R6t += "o";
                if (isAnimate) return;
                isAnimate = true;
                $("#online_lx").animate({
                    "right": -200
                }, 400, R6t, function () {
                    $("#online_open").animate({
                        "right": 10
                    }, 200, "easeOutExpo", function () {
                        isAnimate = false;
                    });
                });
                if (window.localStorage) {
                    var n6t = "cl";
                    n6t += "os";
                    n6t += "e";
                    var q6t = "onlineSta";
                    q6t += "tus";
                    window.localStorage.setItem(q6t, n6t);
                }
            });
            if (window.localStorage) {
                var Z6t = "c";
                Z6t += "l";
                Z6t += "o";
                Z6t += "se";
                var V6t = "onli";
                V6t += "n";
                V6t += "eStatus";
                var onlineStatus = window.localStorage.getItem(V6t);
                if (onlineStatus == Z6t) {
                    var y6t = "r";
                    y6t += "ight";
                    var M6t = "#onlin";
                    M6t += "e_open";
                    $(M6t).css(y6t, 10);
                    $("#online_lx").css("right", -200);
                }
            }
        },
        contactInit: function () {
            var b6t = "#c";
            b6t += "ontactform form";
            var c6t = "<div class=\"netmask fixed loading\"><div><i class=\"fa fa-check-circle\"><";
            c6t += "/i></div><";
            c6t += "/div>";
            var $mpbtn = $("#mpbtn");
            if ($mpbtn.length) {
                var H6t = "bo";
                H6t += "dy";
                var K6t = "\"><p>\u5fae\u4fe1\u626b\u4e00\u626b</p></di";
                K6t += "v>";
                K6t += "</di";
                K6t += "v>";
                var a6t = "h";
                a6t += "ref";
                var E6t = "<div class=\"";
                E6t += "fixed\" id=\"fixed_mp\"><div c";
                E6t += "lass=\"fixed-container\"><";
                E6t += "img src=\"";
                var $fixed_mp = $(E6t + $mpbtn.attr(a6t) + K6t);
                $fixed_mp.appendTo(H6t);
                $fixed_mp.on("click", function (event) {
                    if (event.target == this) {
                        $(this).removeClass("show");
                    }
                });
                $("#mpbtn").on("click", function (event) {
                    $fixed_mp.addClass("show");
                    return false;
                });
            }
            var $_netmask = $(c6t);
            $(b6t).submit(function (event) {
                var P6t = "j";
                P6t += "s";
                P6t += "o";
                P6t += "n";
                var j6t = "acti";
                j6t += "on";
                var v6t = "textarea[name='con";
                v6t += "tent']";
                var T6t = "input[na";
                T6t += "me='e";
                T6t += "mail']";
                var r6t = "i";
                r6t += "npu";
                r6t += "t[na";
                r6t += "me='name']";
                var $form = this;
                var postObj = {
                    name: "",
                    email: "",
                    tel: "",
                    content: ""
                };
                postObj.name = $.trim($(r6t, $form).val());
                if (!postObj.name) {
                    var D6t = "\u59d3";
                    D6t += "\u540d\u4e0d\u80fd";
                    D6t += "\u4e3a";
                    D6t += "\u7a7a";
                    alert(D6t);
                    return false;
                };
                postObj.email = $.trim($(T6t, $form).val());
                if (!postObj.email) {
                    alert("邮箱不能为空");
                    return false;
                };
                if (!/^[\w\.\-\+]+@([\w\-]+\.)+[a-z]{2,4}$/i.test(postObj.email)) {
                    var C6t = "\u90ae\u7bb1\u683c\u5f0f\u4e0d\u6b63";
                    C6t += "\u786e";
                    alert(C6t);
                    return false;
                };
                postObj.tel = $.trim($("input[name='tel']", $form).val());
                if (!postObj.tel) {
                    alert("电话不能为空");
                    return false;
                };
                postObj.content = $.trim($(v6t, $form).val());
                if (!postObj.content) {
                    var g6t = "\u5185";
                    g6t += "\u5bb9\u4e0d\u80fd\u4e3a\u7a7a";
                    alert(g6t);
                    return false;
                };
                $_netmask.appendTo("body");
                $.post($($form).attr(j6t), postObj, function (data, textStatus, xhr) {
                    if (data.code == "0") {
                        $(".inputtxt:not(.submit)", $form).val('');
                        $_netmask.removeClass('loading').addClass('success');
                        setTimeout(function (argument) {
                            $_netmask.remove();
                        }, 1000);
                    } else {
                        $_netmask.remove();
                    }
                }, P6t);
                $(".inputtxt.submit", $form).blur();
                return false;
            });
        },
        onResize: function (event) {
            var m6t = "#fixed_project";
            m6t += "Post #imageWrapper";
            if ($(m6t).length) {
                var J6t = "#imageWrapper,#imageWrapper .content_list .item";
                J6t += "_block";
                $(J6t).height($(window).height());
            }
        },
        onScroll: function (event) {
            var sT = $(window).scrollTop();
            if (sT > this.scOffsetTop) {
                var Q5t = "mi";
                Q5t += "n";
                Q5t += "i";
                var Y6t = "#he";
                Y6t += "a";
                Y6t += "d";
                Y6t += "er";
                var O6t = "#h";
                O6t += "e";
                O6t += "ad";
                O6t += "er";
                if (!$(O6t).hasClass('mini')) $(Y6t).addClass(Q5t);
            } else {
                if ($("#header").hasClass('mini')) $("#header").removeClass('mini');
            }
            if (sT) {
                var F5t = "bl";
                F5t += "o";
                F5t += "ck";
                var t5t = "blo";
                t5t += "c";
                t5t += "k";
                var f5t = "di";
                f5t += "splay";
                if ($("#gotop").css(f5t) != t5t) $("#gotop").css("display", F5t);
            } else {
                var I5t = "dis";
                I5t += "p";
                I5t += "lay";
                if ($("#gotop").css(I5t) != "none") $("#gotop").css("display", "none");
            }
        }
    });
    YY.Page.indexMain = function () {
        var z5t = "#topSlider";
        z5t += " .owl-carousel >";
        z5t += " .item_block";
        this.__super = YY.Page.baseMain.prototype;
        YY.Page.baseMain.call(this);
        if (!YY.browser.lt11 && !YY.browser.mobile) {
            if ($("#indexPage").data("singlescreen")) {
                var i5t = "#sitecontent";
                i5t += ",#in";
                i5t += "dexPage >";
                i5t += " .module";
                var p5t = "#sit";
                p5t += "econ";
                p5t += "tent";
                var S5t = "b";
                S5t += "o";
                S5t += "d";
                S5t += "y";
                $(window).scrollTop(0);
                $(S5t).addClass("singlescreen");
                this.scOffsetTop = parseInt($(p5t).css("padding-top"));
                $(i5t).css({
                    "height": $(window).height() - this.scOffsetTop - this.scOffsetBottom,
                    "overflow": "hidden"
                });
                this.singleScreen = 1;
                this.moduleControl();
            } else {
                var G5t = "co";
                G5t += "n";
                G5t += "tro";
                G5t += "l";
                if ($("#indexPage").data(G5t)) {
                    this.moduleControl();
                }
            }
        }
        if ($(z5t).length) {
            this.layoutSliderHome();
        }
        if (this.interfaceFun) this.interfaceFun.call(this);
    };
    __extends(YY.Page.indexMain, YY.Page.baseMain);
    $.extend(YY.Page.indexMain.prototype, {
        moduleControl: function (wheel) {
            var x5t = "#i";
            x5t += "n";
            x5t += "dexPage > .module";
            var d5t = "b";
            d5t += "o";
            d5t += "d";
            d5t += "y";
            var L5t = "<div";
            L5t += " id=\"moduleC";
            L5t += "ontrol\"";
            L5t += " style=\"display:none\"></div>";
            var W5t = "s";
            W5t += "croll-spe";
            W5t += "ed";
            var X5t = "re";
            X5t += "size";
            var o5t = "r";
            o5t += "esi";
            o5t += "z";
            o5t += "e";
            var l5t = "sc";
            l5t += "r";
            l5t += "oll";
            this.wow.util().removeEvent(this.wow.config.scrollContainer || window, l5t, this.wow.scrollHandler);
            this.wow.util().removeEvent(window, o5t, this.wow.scrollHandler);
            this.wow.scrollHandler = function () {
                return this.scrolled = YY.global.scroll;
            }.bind(this.wow);
            if (this.singleScreen) {
                this.wow.config.scrollContainer = {};
            } else {
                this.wow.util().addEvent(this.wow.config.scrollContainer || window, 'scroll', this.wow.scrollHandler);
            }
            this.wow.util().addEvent(window, X5t, this.wow.scrollHandler);
            this.controlVars = {};
            this.controlVars.speed = $("#indexPage").data(W5t) || 1;
            var _ease = $("#indexPage").data("scroll-ease");
            if (_ease) {
                _ease = _ease.split(".");
                this.controlVars.ease = window[_ease[0]][_ease[1]];
            } else {
                this.controlVars.ease = Expo.easeInOut;
            }
            this.$control = $(L5t).appendTo(d5t);
            this.$modules = $(x5t);
            for (var i = 0; i < this.$modules.length; i++) {
                var e5t = " ";
                e5t += "a";
                e5t += "ct";
                e5t += "ive";
                var s5t = "\" href=\"javascript:;\" id=\"";
                s5t += "modul";
                s5t += "eCItem";
                s5t += "_";
                var w5t = ".contain";
                w5t += "er_he";
                w5t += "ader .title";
                var B5t = "m";
                B5t += "d";
                B5t += "i";
                B5t += "r";
                var $module = this.$modules.eq(i);
                var moduleTitle = "";
                if (!$module.hasClass(B5t)) moduleTitle = $(w5t, $module).text();
                this.$control.append('<a data-title="' + moduleTitle + s5t + i + '" class="moduleCItem' + (i == 0 ? e5t : '') + '"><span></span></a>');
            }
            this.$control.css("margin-top", -this.$control.height() / 2);
            var _this = this;
            this.$control.on("click", ".moduleCItem", function (event) {
                var A5t = "a";
                A5t += "ct";
                A5t += "ive";
                if (!$(this).hasClass(A5t)) {
                    var $module = _this.$modules.eq($(this).index());
                    var top = $module.position().top;
                    YY.global.scroll = 0;
                    if (_this.singleScreen) {
                        TweenMax.to('#indexPage', _this.controlVars.speed, {
                            ease: _this.controlVars.ease,
                            y: -top,
                            force3D: 1,
                            onComplete: function () {
                                var u5t = ".co";
                                u5t += "unter";
                                u5t += "D";
                                u5t += "X";
                                YY.global.scroll = 1;
                                allowWheel = 1;
                                _this.onScroll();
                                _this.wow.scrollHandler();
                                if ($(u5t, $module).length) {
                                    var N5t = ".";
                                    N5t += "co";
                                    N5t += "unterDX";
                                    $(N5t, $module).trigger('appear');
                                }
                            }.bind(this)
                        });
                    } else {
                        TweenMax.to($('html,body'), _this.controlVars.speed, {
                            ease: _this.controlVars.ease,
                            scrollTop: top,
                            onComplete: function () {
                                YY.global.scroll = 1;
                                allowWheel = 1;
                                _this.wow.scrollHandler();
                            }.bind(this)
                        });
                    }
                }
            });
            var allowWheel = 1;
            if (this.singleScreen) {
                $(window).on("mousewheel", function (event, delta) {
                    var U5t = "n";
                    U5t += "ext";
                    if (!allowWheel) return false;
                    allowWheel = false;
                    var direction = delta > 0 ? "prev" : U5t;
                    $targetElement = $('.moduleCItem.active')[direction]();
                    if ($targetElement.length) $targetElement.trigger("click");
                    else allowWheel = true;
                    event.preventDefault();
                    return false;
                });
                var _hash = document.location.hash;
                if (_hash) {
                    var _hashAry = _hash.match(/#\/index\/m(\d+)\//);
                    if (_hashAry) {
                        var h5t = "cl";
                        h5t += "i";
                        h5t += "ck";
                        var mId = _hashAry[1];
                        $('.moduleCItem').eq(mId).trigger(h5t);
                    }
                }
            }
        },
        layoutInit: function () {
            var _this = this;
            if ($(".mlist.project").length && !YY.browser.mobile && !YY.browser.lt11) {
                $(".mlist.project").each(function (index, element) {
                    _this.layoutAjaxProject(element);
                });
            }
            this.__super.layoutInit.call(this);
        },
        layoutSliderHome: function () {
            var K5t = ".owl";
            K5t += "-item.active";
            K5t += "3 video";
            var a5t = "ac";
            a5t += "tive3";
            var E5t = ".ow";
            E5t += "l-item.active";
            var q5t = "s";
            q5t += "l";
            q5t += "ider-";
            q5t += "speed";
            var R5t = "#topSlider .con";
            R5t += "tent";
            R5t += "_list .item_b";
            R5t += "lock";
            var k5t = "#topSli";
            k5t += "der .content";
            k5t += "_lis";
            k5t += "t";
            var $bxHelper = null;
            var $sliderWrapper = $('#topSlider .content_wrapper');
            var $slider = $(k5t);
            var $sliderItems = $(R5t);
            var sliderCount = $sliderItems.length;
            var sliderAuto = parseInt($slider.data("slider-auto")) || 0;
            var sliderPause = parseInt($slider.data("slider-pause"));
            var sliderOptions = {
                items: 1,
                loop: true,
                margin: 0,
                nav: true,
                smartSpeed: Number($slider.data(q5t)) * 1000 || 500,
                navText: ['<i class="icon iconfont icon-back"></i>', '<i class="iconfont icon-more"></i>']
            };
            if (YY.browser.mobile) {
                modeID = 0;
                sliderOptions.nav = false;
            } else {
                var n5t = "slider";
                n5t += "-mo";
                n5t += "de";
                modeID = parseInt($slider.data(n5t));
                if (this.singleScreen) {
                    this.sliderHeight = 0;
                    if (modeID == 3) {
                        modeID = 0;
                        $slider.attr("data-slider-mode", 0);
                    }
                } else {
                    this.sliderHeight = parseInt(String($slider.data("slider-height")));
                }
                if (this.sliderHeight == 0) {
                    var V5t = ".modu";
                    V5t += "le";
                    this.topSliderDiff = this.scOffsetTop;
                    if ($(V5t).length == 1 || this.singleScreen) {
                        this.topSliderDiff += this.scOffsetBottom;
                    }
                    $slider.add($sliderItems).height($(window).height() - this.topSliderDiff);
                } else {
                    $slider.add($sliderItems).height(this.sliderHeight);
                }
                if (modeID == 3) {
                    sliderOptions.items = 3;
                    sliderOptions.startPosition = sliderCount - 1;
                    sliderOptions.dots = false;
                    sliderOptions.responsive = false;
                } else {
                    if (modeID == 1) sliderOptions.animateOut = 'fadeOut';
                }
            }
            var sliderApp = $slider.owlCarousel(sliderOptions);
            var $video = null;
            var active3Index = 0;
            if (modeID == 3) {
                var Z5t = "1";
                Z5t += "0";
                Z5t += "0%";
                $slider.css("width", Z5t);
                active3Index = 1;
            }
            $slider.on('translated.owl.carousel', function (event) {
                var y5t = ".";
                y5t += "owl-item";
                var M5t = ".owl-ite";
                M5t += "m.a";
                M5t += "c";
                M5t += "tive3";
                $video = $('.owl-item.active3 video', $slider);
                if ($video.length) {
                    $video[0].pause();
                }
                $(M5t, $slider).removeClass('active3');
                $(y5t, $slider).eq(event.item.index + active3Index).addClass('active3');
                $video = $('.owl-item.active3 video', $slider);
                if ($video.length) {
                    $video[0].play();
                }
            });
            $(E5t, $slider).eq(active3Index).addClass(a5t);
            var $video = $(K5t, $slider);
            if ($video.length) {
                $video[0].play();
            }
            if (sliderAuto) {
                $autoProgress = $('<div class="progress"></div>');
                $sliderWrapper.append($autoProgress);
                var autoTL = new TimelineMax({
                    onComplete: function () {
                        var H5t = "ne";
                        H5t += "xt.owl";
                        sliderApp.trigger(H5t);
                        autoTL.restart();
                    }
                });
                autoTL.to($autoProgress, sliderPause, {
                    width: "100%",
                    ease: Linear.easeNone
                });
                autoTL.to($autoProgress, .5, {
                    "opacity": "0",
                    ease: Linear.easeNone
                });
                sliderApp.stopAuto = function () {
                    autoTL.kill();
                    $autoProgress.remove();
                };
                $($slider).on("click.owl drag.owl.carousel", function () {
                    sliderApp.stopAuto();
                });
            }
            this.topSliderApp = sliderApp;
        },
        layoutAjaxProject: function (element) {
            var r5t = "<div id=\"postControl\"><div class=\"button info\"><i class=\"icon iconfont icon-back\"></i></div><div class=\"button close\"><i class=\"icon ico";
            r5t += "nfont icon-close\"></i></div></div>";
            var b5t = "<div id=\"";
            b5t += "fixed_projectPost\" class=\"fixed\"></div>";
            var c5t = "<div class=\"loading-over";
            c5t += "lay\"><div class=\"spinner\"><div class=\"bounce1\"></div><div class=\"bounce2\"></div><div class=\"bounce3\"></div></div></div>";
            var $listItem = $('.item_block', element);
            var $loading = $(c5t);
            var $fixed = $(b5t);
            var $container = $('<div class="fixed-container"></div>').appendTo($fixed);
            var $control = $(r5t);
            var tabCApp;
            var $pMask = $('<div class="fixed show" id="fixed_pmask"></div>');
            $listItem.on("click", function (event) {
                if ($(window).width() > 1100) {
                    var T5t = "h";
                    T5t += "ref";
                    var D5t = ".item_l";
                    D5t += "ink";
                    var url = $(D5t, this).attr(T5t);
                    postMethod.load(url);
                    $(this).blur();
                    return false;
                }
            });
            var postMethod = {
                _this: this,
                _inited: false,
                load: function (url) {
                    var C5t = "b";
                    C5t += "o";
                    C5t += "dy";
                    $(C5t).css("overflow", "hidden");
                    $loading.appendTo('body');
                    $fixed.appendTo('body');
                    $container.load(url + " #postWrapper", function (data) {
                        $("#listContent", $container).remove();
                        postMethod.init();
                        $loading.remove();
                        postMethod.show();
                    });
                },
                change: function (direction) {
                    $loading.appendTo('body');
                },
                init: function () {
                    var P5t = "c";
                    P5t += "Scrol";
                    P5t += "lba";
                    P5t += "r";
                    var j5t = "#p";
                    j5t += "ostI";
                    j5t += "nfo .descriptio";
                    j5t += "n";
                    var g5t = "<div clas";
                    g5t += "s=\"cl";
                    g5t += "ear\"></";
                    g5t += "div>";
                    var v5t = "#imageW";
                    v5t += "rapper,#im";
                    v5t += "ageWrapper .content_list .item";
                    v5t += "_block";
                    $(v5t).height($(window).height());
                    tabCApp = this._this.layoutSlider($('#imageWrapper', $container), {
                        lazyLoad: true
                    });
                    $("#postInfo", $container).prepend($control);
                    $control.after(g5t);
                    $(j5t, $container).addClass(P5t);
                },
                show: function () {
                    var m5t = "bo";
                    m5t += "dy";
                    $pMask.appendTo(m5t);
                    $pMask.css("visibility", "visible");
                    TweenMax.set($pMask, {
                        scaleX: 0,
                        opacity: 1,
                        force3D: 1
                    });
                    TweenMax.to($pMask, 1, {
                        scaleX: 1,
                        force3D: 1,
                        ease: Quart.easeInOut,
                        onComplete: function () {
                            $fixed.css("visibility", "visible");
                            TweenMax.to($pMask, .5, {
                                opacity: 0,
                                ease: Quart.easeInOut,
                                onComplete: function () {
                                    var J5t = "hi";
                                    J5t += "dd";
                                    J5t += "en";
                                    $pMask.css("visibility", J5t);
                                    postMethod.addEvent();
                                }
                            });
                        }
                    });
                },
                hide: function () {
                    var O5t = "vi";
                    O5t += "s";
                    O5t += "ible";
                    TweenMax.set($pMask, {
                        scaleX: 0,
                        opacity: 1,
                        force3D: 1
                    });
                    $pMask.css("visibility", O5t);
                    TweenMax.to($pMask, .7, {
                        scaleX: 1,
                        force3D: 1,
                        ease: Quart.easeInOut,
                        onComplete: function () {
                            $fixed.css({
                                "display": "none"
                            });
                            TweenMax.to($pMask, .3, {
                                opacity: 0,
                                ease: Quart.easeInOut,
                                onComplete: function () {
                                    var Y5t = "h";
                                    Y5t += "i";
                                    Y5t += "d";
                                    Y5t += "den";
                                    $pMask.css({
                                        "visibility": Y5t,
                                        "opacity": 1
                                    }).remove();
                                    postMethod.destroy();
                                }
                            });
                        }
                    });
                },
                addEvent: function () {
                    var z8t = ".button.inf";
                    z8t += "o";
                    var G8t = ".b";
                    G8t += "utt";
                    G8t += "o";
                    G8t += "n.close";
                    var p8t = ".button.pr";
                    p8t += "ev";
                    var I8t = "keydo";
                    I8t += "wn";
                    var F8t = "mo";
                    F8t += "usewhe";
                    F8t += "el";
                    var t8t = "#imageWrapper .";
                    t8t += "o";
                    t8t += "wl-stage";
                    var f8t = "translated.owl.carou";
                    f8t += "sel";
                    var Q8t = "translate.owl";
                    Q8t += ".car";
                    Q8t += "ousel";
                    var mkControl = 1,
                        _this = this;
                    $('#imageWrapper', $container).on(Q8t, function (event) {
                        mkControl = 0;
                    }).on(f8t, function (event) {
                        mkControl = 1;
                    });
                    $(t8t, $container).on(F8t, function (event, delta) {
                        if (!mkControl) return;
                        mkControl = true;
                        if (event.deltaY < 0) {
                            tabCApp.trigger('next.owl');
                        } else {
                            tabCApp.trigger('prev.owl');
                        }
                        event.preventDefault();
                    });
                    $(window).on(I8t, function (event) {
                        if (!mkControl) return;
                        mkControl = true;
                        var keyCode = event.keyCode;
                        if (keyCode == 39) {
                            tabCApp.trigger('next.owl');
                        } else if (keyCode == 37) {
                            var S8t = "p";
                            S8t += "r";
                            S8t += "ev.o";
                            S8t += "wl";
                            tabCApp.trigger(S8t);
                        } else if (keyCode == 38) {} else if (keyCode == 37) {}
                    });
                    $(p8t, $control).on("click", function () {
                        var i8t = "pr";
                        i8t += "ev";
                        postMethod.change(i8t);
                    });
                    $(G8t, $control).on("click", function () {
                        postMethod.removeEvent();
                        postMethod.hide();
                    });
                    $(z8t, $control).on("click", function () {
                        var o8t = "activ";
                        o8t += "e";
                        var l8t = "#imageWrapper .owl-";
                        l8t += "carousel .owl-stage-ou";
                        l8t += "ter";
                        mkControl = 0;
                        var _button = this;
                        var $owlStageOuter = $(l8t, $container);
                        if ($(_button).hasClass(o8t)) {
                            var X8t = "ac";
                            X8t += "ti";
                            X8t += "v";
                            X8t += "e";
                            $(_button).removeClass(X8t);
                            TweenMax.to(_button, .3, {
                                x: 0,
                                force3D: 1,
                                ease: Quart.easeInOut,
                                onComplete: function () {
                                    var W8t = "#imageWrapper ";
                                    W8t += ".owl-item.acti";
                                    W8t += "ve";
                                    TweenMax.to($("#postInfo", $container), .5, {
                                        x: 0,
                                        force3D: 1,
                                        ease: Quart.easeInOut
                                    });
                                    TweenMax.to($("#postContent", $container), .5, {
                                        css: {
                                            "margin-right": 400
                                        },
                                        ease: Quart.easeInOut
                                    });
                                    TweenMax.to($(W8t, $container), .5, {
                                        width: $(window).width() - 400,
                                        ease: Quart.easeInOut,
                                        onComplete: function () {
                                            tabCApp.data('owl.carousel').onResize();
                                            mkControl = 1;
                                        }
                                    });
                                }
                            });
                        } else {
                            $(_button).addClass('active');
                            $owlStageOuter.height($(window).height());
                            TweenMax.to($("#postInfo", $container), .5, {
                                x: 380,
                                force3D: 1,
                                ease: Quart.easeInOut
                            });
                            TweenMax.to($("#postContent", $container), .5, {
                                css: {
                                    "margin-right": 0
                                },
                                ease: Quart.easeInOut
                            });
                            TweenMax.to($('#imageWrapper .owl-item.active', $container), .5, {
                                width: $(window).width(),
                                ease: Quart.easeInOut,
                                onComplete: function () {
                                    var d8t = "owl";
                                    d8t += ".";
                                    d8t += "carouse";
                                    d8t += "l";
                                    var L8t = "hei";
                                    L8t += "g";
                                    L8t += "h";
                                    L8t += "t";
                                    $owlStageOuter.css(L8t, "auto");
                                    tabCApp.data(d8t).onResize();
                                    TweenMax.to(_button, .5, {
                                        x: -81,
                                        force3D: 1,
                                        ease: Quart.easeInOut,
                                        onComplete: function () {
                                            mkControl = 1;
                                        }
                                    });
                                }
                            });
                        };
                    });
                    var _w = $(window).width(),
                        _h = $(window).height();
                    $(window).on("resize.layoutAjaxProject", function () {
                        if ((_w != $(window).width() || _h != $(window).height()) && $(window).width() < 1100) {
                            postMethod.removeEvent();
                            postMethod.destroy();
                        }
                    });
                },
                removeEvent: function () {
                    var e8t = "keydown resize.l";
                    e8t += "ayoutAjaxProject";
                    var s8t = "m";
                    s8t += "o";
                    s8t += "usewhee";
                    s8t += "l";
                    var w8t = "#imageWrapper .o";
                    w8t += "wl-stage";
                    var B8t = "translate";
                    B8t += ".owl.carouse";
                    B8t += "l translated.owl.carousel";
                    var x8t = "cl";
                    x8t += "ick";
                    $('.button', $control).off(x8t);
                    $('#imageWrapper', $container).off(B8t);
                    $(w8t, $container).off(s8t);
                    $(window).off(e8t);
                },
                destroy: function () {
                    var h8t = "s";
                    h8t += "t";
                    h8t += "y";
                    h8t += "le";
                    var U8t = "st";
                    U8t += "yl";
                    U8t += "e";
                    var N8t = ".button.in";
                    N8t += "fo";
                    var u8t = ".con";
                    u8t += "tent";
                    u8t += "_";
                    u8t += "list";
                    var A8t = ".cScroll";
                    A8t += "bar";
                    $(A8t, $container).mCustomScrollbar("destroy");
                    $(u8t, $('#imageWrapper', $container)).data('owl.carousel').destroy();
                    $(N8t, $control).removeClass('active').attr(U8t, "");
                    $control.remove();
                    $container.html('');
                    $fixed.css({
                        "display": "block",
                        "visibility": "hidden"
                    }).remove();
                    $pMask.remove();
                    $("body").attr(h8t, "");
                }
            };
        },
        onResize: function (event) {
            if (!YY.browser.mobile) {
                if (this.sliderHeight == 0) {
                    var k8t = "#topSlider .content_list,#topSlider .content_list .";
                    k8t += "item_block";
                    $(k8t).height($(window).height() - this.topSliderDiff);
                }
            }
            if (this.singleScreen) {
                var n8t = "#inde";
                n8t += "xPage";
                var q8t = ".moduleCI";
                q8t += "tem";
                q8t += ".act";
                q8t += "ive";
                var R8t = "#";
                R8t += "site";
                R8t += "content,#indexPage > .module";
                $(R8t).height($(window).height() - this.scOffsetTop - this.scOffsetBottom);
                var moduleIndex = $(q8t).index();
                var $module = this.$modules.eq(moduleIndex);
                var top = $module.position().top;
                TweenMax.set(n8t, {
                    y: -top,
                    force3D: 1
                });
            }
            this.__super.onResize.call(this);
        },
        scrollTop: 0,
        onScroll: function () {
            this.__super.onScroll.call(this);
            if (this.singleScreen) {
                var Z8t = "#si";
                Z8t += "tec";
                Z8t += "o";
                Z8t += "ntent";
                var V8t = "#ind";
                V8t += "exPage";
                this.scrollTop = -CSSPlugin._internals.getTransform($(V8t)[0]).y;
                this.wow.config.scrollContainer.scrollTop = this.scrollTop + $(Z8t).height() / 2;
            } else {
                this.scrollTop = $(window).scrollTop();
            }
            if (!YY.browser.mobile) $(".module.bgShow.bgParallax").each(function (index, element) {
                var M8t = "p";
                M8t += "x";
                $(element).css("background-position-y", ($(element).position().top - this.scrollTop) / 2 + M8t);
            }.bind(this));
            if (this.$control) {
                for (var index = 0; index < this.$modules.length; index++) {
                    var $module = this.$modules.eq(index);
                    var $moduleCItem = $(".moduleCItem").eq(index);
                    if (this.scrollTop >= $module.position().top && this.scrollTop < $module.position().top + $module.height() || index == $(".module").length - 1 && this.scrollTop == $(document).height() - $(window).height()) {
                        if (!$moduleCItem.hasClass('active')) {
                            var E8t = "#";
                            E8t += "/in";
                            E8t += "de";
                            E8t += "x/m";
                            var y8t = "ac";
                            y8t += "tiv";
                            y8t += "e";
                            $(".moduleCItem.active").removeClass('active');
                            $moduleCItem.addClass(y8t);
                            document.location.hash = E8t + index + "/";
                            if (index == 0) {
                                var H8t = "n";
                                H8t += "o";
                                H8t += "n";
                                H8t += "e";
                                var K8t = "bloc";
                                K8t += "k";
                                var a8t = "dis";
                                a8t += "pla";
                                a8t += "y";
                                if (this.$control.css(a8t) == K8t) this.$control.css("display", H8t);
                                this.topSliderApp.stopAuto();
                            } else {
                                var r8t = "di";
                                r8t += "spl";
                                r8t += "ay";
                                var b8t = "no";
                                b8t += "ne";
                                var c8t = "displa";
                                c8t += "y";
                                if (this.$control.css(c8t) == b8t) this.$control.css(r8t, "block");
                            }
                        }
                        break;
                    }
                }
            }
        }
    });
    YY.Page.postMain = function () {
        this.__super = YY.Page.baseMain.prototype;
        YY.Page.baseMain.call(this);
        if (!YY.browser.mobile) $(".scrollFixed").each(function (index, element) {
            if ($(document).height() - $(window).height() > $(element).height()) {
                var D8t = "#";
                D8t += "h";
                D8t += "e";
                D8t += "ader";
                var offsetTop = parseInt($(element).data("sf-top"));
                var pt = $(element).parent().position().top - $(D8t).height() - offsetTop;
                $(element).data("pt", pt);
            }
        });
        if (this.interfaceFun) this.interfaceFun.call(this);
    };
    __extends(YY.Page.postMain, YY.Page.baseMain);
    $.extend(YY.Page.postMain.prototype, {
        layoutInit: function () {
            var T8t = "s";
            T8t += "r";
            T8t += "c";
            this.__super.layoutInit();
            $("img.lazy").lazyload({
                data_attribute: T8t
            });
        },
        onResize: function (event) {
            if (!YY.browser.mobile && $(window).width() < 1180) {
                $(".scrollFixed").each(function (index, element) {
                    if ($(".scrollFixed").css("position") == "fixed") {
                        var C8t = ".scrollFi";
                        C8t += "xed";
                        $(C8t).css({
                            "position": ""
                        });
                    }
                });
            }
        },
        onScroll: function () {
            this.__super.onScroll.call(this);
            if (!YY.browser.mobile && $(window).width() > 1180) $(".scrollFixed").each(function (index, element) {
                var v8t = "p";
                v8t += "t";
                var pt = $(element).data("pt");
                if ($(element).data(v8t)) {
                    if ($(window).scrollTop() > pt) {
                        var j8t = "posi";
                        j8t += "tion";
                        var g8t = ".sc";
                        g8t += "r";
                        g8t += "oll";
                        g8t += "Fixed";
                        if ($(g8t).css(j8t) != "fixed") {
                            var P8t = "fi";
                            P8t += "x";
                            P8t += "e";
                            P8t += "d";
                            $(".scrollFixed").css({
                                "position": P8t
                            });
                        }
                    } else {
                        if ($(".scrollFixed").css("position")) {
                            var m8t = ".scr";
                            m8t += "o";
                            m8t += "llFixed";
                            $(m8t).css({
                                "position": ""
                            });
                        }
                    }
                }
            });
        }
    });
    window.onerror = function () {};
    $(function () {
        var O8t = "he";
        O8t += "ad s";
        O8t += "cr";
        O8t += "ipt";
        var J8t = "da";
        J8t += "t";
        J8t += "a-ma";
        J8t += "in";
        "use strict";
        var dataMain = $("script[data-main]").attr(J8t);
        $(O8t).remove();
        if (dataMain && YY.Page[dataMain]) new YY.Page[dataMain]();
        YY.browser.mobile && FastClick.attach(document.body);
    });
    self.YY = YY;
}(window));