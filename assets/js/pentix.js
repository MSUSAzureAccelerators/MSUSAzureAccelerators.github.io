/*! Pentix v.1.0 - 2020-12-27 */

/* global Pentix: true, console */
/*
    Pentix core functions
*/
(function (fn) {
    if (typeof jQuery === 'undefined') {
        throw 'Pentix Core requires jQuery to be loaded first';
    }
    Pentix = {};
    fn(jQuery, Pentix);
}(function ($, pex) {
    "use strict";
    
    /* Check/Convert types */
    pex.isInt = function (value){
        return Number(value) === value && value % 1 === 0;
    };
    pex.isFloat = function (value){
        return value === Number(value) && value % 1 !== 0;
    };
    pex.startsWith = function (needle, haystack){
        return (haystack + '').lastIndexOf((needle + ''), 0) === 0;
    };
    pex.toNumber = function (value, noSet, toInt){
        var type = typeof(value);
        if( type !== 'string' && type !== 'number' ){
            return typeof(noSet) !== 'undefined' ? noSet : null;
        }
        value = Number( value );
        return isNaN(value) ? (typeof(noSet) !== 'undefined' ? noSet : null) : (toInt ? Math.round(value) : value );
    };
    // taken from https://stackoverflow.com/questions/2970525/converting-any-string-into-camel-case
    pex.camelize = function (str) {
        return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
            if (+match === 0){
                return ""; // or if (/\s+/.test(match)) for white spaces
            }
            return index === 0 ? match.toLowerCase() : match.toUpperCase();
        });
    };


    /* Functions */
    // return first argument
    pex.returnFirst = function (val){
        return val;
    };
    // run functions
    pex.run = function (funcs){
        if( !funcs ){
            return;
        }
        var
            args = [].slice.call(arguments, 1),
            type = typeof(funcs),
            ret = true
        ;
        if( type === 'function' ){
            ret = funcs.apply(Pentix, args) !== false;
        }else if( type === 'object' ){
            $.each(funcs, function (i, fn){
                if( (ret = pex.run.apply(Pentix, [fn].concat(args))) === false){
                    return false;
                }
            });
        }
        return ret;
    };
    // quick use apply
    pex.apply = function (func, context, args){
        return typeof(func) === 'function' ? func.apply(context, args) : null;
    };


    /* Helpers */
    // escape string for use in regexp
    pex.escapeRegExp = function (str) {
        return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    };
    // make first letter uppercase
    pex.ucfirst = function (str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    // make first letter lowercase
    pex.lcfirst = function (str){
        return str.charAt(0).toLowerCase() + str.slice(1);
    };
    // return random id
    pex.randomId = function (obj) {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1)
            ;
        }
        var ret = s4() + s4();
        // if id exists within @obj - re-create id
        return obj && typeof(obj[ret]) !== 'undefined' ? pex.randomId(obj) : ret;
    };
    // return alpha-numeric string
    pex.onlyAlphaNumeric = function (string){
        return (string + '').replace(/[^a-z0-9]/gi,'');
    };
    // return float length
    pex.getFloatLength = function(value){
        if( !pex.isFloat(value) ){
            return 0;
        }
        value = (value + "").split('.');
        return value.length > 1 ? value[1].length : 0;
    };

    // throw custom exception
    var CustomException = function (message, data){
        this.message = message;
        this.name = "Custom exception";
        this.data = data;
    };
    pex.throw = function (message, data){
        throw new CustomException(message, data);
    };
    // split text
    pex.splitText = function (val, by){
        if( val instanceof Array ){
            return val;
        }
        if( !(val && typeof(val) === 'string') ){
            return [];
        }
        var
            ret = [],
            reg = new RegExp("(([^" + by + "'\"]*)*('[^']*[']?)*(\"[^\"]*[\"]?)*)*", 'g')
        ;
        val.replace(reg, function (test) {
            if( test ){
                ret.push(test);
            }
        });
        return ret;
    };
    // quick use text split to words
    pex.splitWords = function (val){
        return pex.splitText(val, "\\s");
    };
    // returns value within min and max, if loop = true than with a loop like behaviour, i.e inRange(10, 1, 8) = 2
    pex.inRange = function (value, min, max, loop){
        var maxVal = pex.toNumber(max),
            minVal = pex.toNumber(min)
        ;
        if( maxVal !== null && value > maxVal){
            return loop ? pex.inRange(2*maxVal - value, min, maxVal) : maxVal;
        }
        if( minVal !== null && value < minVal){
            return loop ? pex.inRange(minVal - value, minVal, maxVal) : minVal;
        }
        return value;
    };

    /* DOM Elements */
    pex.$w = $(window);
    pex.$doc = $(document);
    pex.loaded = false;
    // Mark page load
    pex.$w.on('load', function (){
        pex.loaded = true;
    });

    /*
        Loads image from src
        returns $.Deferred
    */
    pex.loadImage = function (src){
        var dfd = $.Deferred(),
            imageSrc = src
        ;
        $('<img>')
            .on({
                'load' : function (){
                    dfd.resolve(imageSrc);
                    $(this).remove();
                },
                'error' : function (){
                    dfd.reject();
                    $(this).remove();
                }
            })
            .attr('src', imageSrc)
        ;
        return dfd;
    };

    /* Extend default datatypes */
    if (!Object.keys) {
        Object.keys = function (obj) {
            var keys = [];
            for(var i in obj){
                if(obj.hasOwnProperty(i)){
                    keys.push(i);
                }
            }
            return keys;
        };
    }

    /* Debug */
    pex.debug = {
        enabled : false,
        log : function (){
            if( pex.debug && window.console ){
                console.log( msg );
            }
            return pex;
        }
    };


    /* Functions List */
    var fns = {}; // functions lists collection
    pex.fns = {
        // add functions to functions list
        add : function (name){
            if( typeof(name) !== 'string' || !name ){
                return false;
            }
            fns[name] = fns[name] || [];
            var args = [].slice.call(arguments, 1);
            if(args.length){
                fns[name] = fns[name].concat(args);
            }
            return true;
        },
        // remove function list
        remove : function (name){
            if( typeof(name) !== 'string' || !name ){
                return false;
            }
            delete fns[name];
            return true;
        },
        // get function list
        get : function (name){
            return fns[name] || [];
        },
        // execute function list
        run : function (name){
            if( !fns[name] ){
                return false;
            }
            var args = [].slice.call(arguments, 1);
            for (var i = 0; i < fns[name].length; i++) {
                if(fns[name][i].apply(pex, args) === false){
                    return false;
                }
            }
            return true;
        }
    };

    /* Lazy image load */
    var lazyIds = {},
        inView = function (el, off){
            var $el = $(el),
                rect = el.getBoundingClientRect(),
                height = (window.innerHeight || document.documentElement.clientHeight) + off,
                width = (window.innerWidth || document.documentElement.clientWidth) + off
            ;

            return (
                (rect.top <= height || rect.bottom <= height) &&
                (rect.left <= width || rect.right <= width)
            );
        },
        lazyload = function (el){
            var $el = $(el);
            if( !$el.is('.lazy') ){
                var id = pex.randomId(lazyIds),
                    fn = function (){
                        if( $el.is(':visible') && inView($el, 100) ){
                            var src = $el.data('pexLazy');
                            $('[data-lazy="' + src + '"]').triggerHandler('pexLazyLoaded');
                            pex.loadImage(src)
                                .done(function (src){
                                    $('[data-lazy="' + src + '"]').attr('src', src);
                                })
                            ;
                        }
                    }
                ;
                lazyIds[id] = true;
                pex.$w.on('DOMContentLoaded.pexLazy_' + id + ' load.pexLazy_' + id + ' resize.pexLazy_' + id + ' scroll.pexLazy_' + id, fn);
                pex.$doc.on('pexShow.pexLazy_' + id, fn);
                $el.addClass('lazy').on('pexLazyLoaded', function (){
                    pex.$w.off('.pexLazy_' + id);
                    pex.$doc.off('.pexLazy_' + id);
                    $el.off('pexLazyLoaded');
                    delete lazyIds[id];
                    $el = id = null;
                });
            }
            return pex;
        }
    ;
    pex.fns.add('init', function ($container, findFn){
        $container[findFn]('[data-lazy]').each(function (i, el){
            lazyload(el);
        });
    });
    pex.lazyload = lazyload;

    /* Keys methods */
    pex.keys = {
        // create new unique keys array from arguments
        create : function (){
            var keys = [],
                obj = {},
                i, j, list
            ;
            for (i = 0; i < arguments.length; i++) {
                list = arguments[i];
                if( typeof(list) === 'string' ){
                    if( !obj[list] ){
                        keys.push(list);
                        obj[list] = true;
                    }
                }else if( list instanceof Array ){
                    for (j = 0; j < list.length; j++) {
                        if( !obj[list[j]] ){
                            keys.push(list[j]);
                            obj[list[j]] = true;
                        }
                    }
                }
            }
            list = null;
            return keys;
        },
        // check if @keys contains keys
        has : function (keys){
            var search = pex.keys.create.apply(pex, [].slice.call(arguments, 1));
            if( keys && keys.length && search.length ){
                for (var i = 0; i < search.length; i++) {
                    if( jQuery.inArray(search[i], keys) > -1 ){
                        return true;
                    }
                }
            }
            return false;
        },
        // remove key
        remove : function (keys){
            var list = pex.keys.create(keys),
                search = pex.keys.create.apply(pex, [].slice.call(arguments, 1)),
                i, ind
            ;
            if( list.length && search.length ){
                for (i = search.length - 1; i >= 0; i--) {
                    ind = jQuery.inArray(search[i], list);
                    if( ind > -1 ){
                        list.splice(ind, 1);
                    }
                }
            }
            return list;
        }
    };

    /* Block */
    var applyBlockClasses = function($block, action){
        var actionName = action === 'hide' ? 'hide' : 'show',
            actionClasses = $block.data(actionName + 'BlockClass'),
            reverceActionClasses = $block.data( (action === 'hide' ? 'show' : 'hide') + 'BlockClass')
        ;
        if( actionClasses ){
            $block.addClass( actionClasses );
        }else{
            $block[actionName]();
        }
        if( reverceActionClasses ){
            $block.removeClass( reverceActionClasses );
        }
    };
    pex.block = {
        find : function (val){
            if (val instanceof $){
                return val;
            }
            var blocks = (val + '').split(';'),
                $blocks = $([])
            ;
            for (var i = 0; i < blocks.length; i++) {
                $blocks = $blocks.add( $('[data-block="' + blocks[i] + '"]') );
            }
            return $blocks;
        },
        hide : function (name){
            var $blocks = pex.block.find(name);
            $blocks.each(function(i, block){
                applyBlockClasses( $(block), 'hide' );
            });
            return pex;
        },
        show : function (name){
            var $blocks = pex.block.find(name);
            $blocks.each(function(i, block){
                applyBlockClasses( $(block), 'show' );
            });
            return pex;
        },
        action : function (name, action){
            if( pex.block.hasOwnProperty(action) ){
                return pex.block[action](name);
            }
            return pex;
        }
    };

    /* Plugin helpers */
    pex.plugin = {
        // set/get plugin instance options
        options : function (context, opts, defaults, allowed){
            var options = $.extend({}, context.__hasOptions ? {} : defaults || {}, opts || {});
            context.__hasOptions = true;
            if( allowed ){
                var i, name;
                for (i = 0; i < allowed.length; i++) {
                    name = allowed[i];
                    if( typeof(context[name]) === 'function' && typeof options[name] !== 'undefined' ){
                        context[name](options[name], options);
                    }
                }
            }else{
                $.each(options, function (name, val){
                    if( typeof(context[name]) === 'function' ){
                        context[name](val, options);
                    }
                });
            }
            return context;
        },
        // set/get plugin instance option
        provideOption : function (context, name, args, fn, _prop, _actProp){
            var propName = _prop || 'opts',
                actPropName = _actProp || propName
            ;
            if( !args.length ){
                return context[actPropName][name] || null;
            }else if( typeof fn === 'function' ){
                args.unshift(context, name);
                context[propName][name] = fn.apply(context, args);
            }else{
                context[propName][name] = args[0];
            }
            return context;
        },
        // extend plugin prototype with set/get options methods
        provideOptions : function (plugin, options, provideSetter, defaults, _prop, _actProp){
            var allowed = [],
                propName = _prop || 'opts',
                actPropName = _actProp || propName
            ;
            plugin.prototype[propName] = {};
            plugin.prototype[actPropName] = {};
            $.each(options, function (name, value){
                if( value ){
                    if( typeof value === 'function' ){
                        plugin.prototype[name] = function (){
                            return pex.plugin.provideOption(this, name, [].slice.call(arguments), value, propName, actPropName);
                        };
                    }else{
                        plugin.prototype[name] = function (){
                            return pex.plugin.provideOption(this, name, [].slice.call(arguments), null, propName, actPropName);
                        };
                    }
                    allowed.push(name);
                }
            });
            if( provideSetter ){
                plugin.prototype.options = function (options){
                    this[propName] = this[propName] || {};
                    this[actPropName] = this[actPropName] || {};
                    pex.plugin.options(this, options, defaults, allowed);
                    return this;
                };
            }
        },
        // extend plugin prototype with status related methods
        provideStatus : function (plugin, startStatus, name){
            var propName = name || 'status';
            plugin.prototype.is = function (val){
                return this[propName] === val;
            };
            plugin.prototype.not = function (val){
                return this[propName] !== val;
            };
            if( startStatus ){
                if( startStatus instanceof Array ){
                    plugin.prototype.isStarted = function (){
                        return jQuery.inArray(this[propName], startStatus) >= 0;
                    };
                }else{
                    plugin.prototype.isStarted = function (){
                        return this[propName] === startStatus;
                    };
                }
            }
        },
        // extend plugin prototype with keys related methods
        provideKeys : function (plugin, name){
            var propName = name || 'keysList';
            plugin.prototype[propName] = [];
            plugin.prototype.keys = function (){
                if( arguments.length === 0 ){
                    return this[propName].slice();
                }
                this[propName] = pex.keys.create.apply(pex, [].slice.call(arguments));
                return this;
            };
            plugin.prototype.addKeys = function (){
                var args = [].slice.call(arguments);
                args.unshift(this[propName]);
                this[propName] = pex.keys.create.apply(pex, args);
                return this;
            };
            plugin.prototype.hasKeys = function (){
                var args = [].slice.call(arguments);
                args.unshift(this[propName]);
                return pex.keys.has.apply(pex, args);
            };
            plugin.prototype.removeKeys = function (){
                var args = [].slice.call(arguments);
                args.unshift(this[propName]);
                pex.keys.remove.apply(pex, args);
                return this;
            };
        }
    };

    /* Actions - for fast actions/plugins setup */
    var actionsList = {}; // list of actions/plugins setups
    pex.action = {
        // check if action exists
        has : function (name){
            return !!actionsList[name];
        },
        // add/set action is in list
        set : function (name, fn, alt){
            if( typeof fn !== 'function' ){
                return;
            }
            if( typeof name === 'string' ){
                actionsList[name] = fn;
            }
            if( alt instanceof Array ){
                for (var i = 0; i < alt.length; i++) {
                    pex.action.set(alt[i], fn);
                }
            }else if(typeof alt === 'string'){
                actionsList[alt] = fn;
            }
        },
        // setup action
        setup : function (name, el, opts){
            if( !pex.action.has(name) ){
                pex.throw('Action "' + name + '" not found!', el);
            }
            return actionsList[name]($(el), opts);
        }
    };

    /* Field spin */
    var getSpinValue = function (val, spinVal, decrement){
            var value = pex.toNumber(val, 0),
                spinValue = pex.toNumber(spinVal, 1),
                valueLength = pex.getFloatLength(value),
                spinValueLength = pex.getFloatLength(spinValue),
                rest = valueLength > spinValueLength ? valueLength : spinValueLength
            ;
            return (value + ( decrement ? - spinValue : spinValue )).toFixed(rest);
        },
        spinFieldValue = function ($field, spinVal, decrement){
            var fieldVal = pex.toNumber($field.val(), 0),
                value = pex.inRange(
                    getSpinValue(fieldVal, spinVal, decrement),
                    $field.attr('min'),
                    $field.attr('max')
                )
            ;
            if( fieldVal !== value ){
                $field.val(value).triggerHandler('pexcheck');
            }
        }
    ;
    pex.action.set('field-increment', function ($el){
        var $field = $el.closest('.field-wrap').find('.field-control'),
            fn = function (){
                var fieldVal = pex.toNumber($field.val(), 0),
                    limit = pex.toNumber($field.attr('max'))
                ;
                if( limit !== null && fieldVal >= limit ){
                    $el.addClass('disabled');
                } else {
                    $el.removeClass('disabled');
                }
            }
        ;
        fn();
        $field.on('blur pexcheck', function() {
            fn();
        });
        $el.on('click', function (){
            spinFieldValue($field);
        });
    });
    pex.action.set('field-decrement', function ($el){
        var $field = $el.closest('.field-wrap').find('.field-control'),
            fn = function (){
                var fieldVal = pex.toNumber($field.val(), 0),
                    limit = pex.toNumber($field.attr('min'))
                ;
                if( limit !== null && fieldVal <= limit ){
                    $el.addClass('disabled');
                } else {
                    $el.removeClass('disabled');
                }
            }
        ;
        fn();
        $field.on('blur pexcheck', function() {
            fn();
        });
        $el.on('click', function (){
            spinFieldValue($field, 1, true);
        });
    });
    pex.action.set('field-wheel-spin', function ($el){
        $el
            .off('.fieldWheelSpin')
            .on('mousewheel.fieldWheelSpin DOMMouseScroll.fieldWheelSpin', function(e){
                e.preventDefault();
                e.stopPropagation();
                spinFieldValue($(this), 1, e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0 ? false : true);
            })
        ;
    });
    pex.action.set('field-arrows-spin', function ($el){
        if( $el.data('spinKeyInterval') ){
            clearInterval( $el.data('spinKeyInterval') );
        }
        if( $el.data('spinClickTimer') ){
            clearTimeout( $el.data('spinClickTimer') );
        }
        var spinValue = 1;
        $el
            .off('.arrowsSpin')
            .data({
                'spinKey' : false,
                'spinFunc' : false,
                'spinClickTimer' : false,
                'spinKeyInterval' : false
            })
            .on({
                'keydown.arrowsSpin' : function(e){
                    if( $el.data('spinKey') ){ return; }
                    var
                        activeKey = e.keyCode,
                        func = false
                    ;
                    switch(activeKey){
                        case 38: //up arrow
                            func = function(){
                                spinFieldValue( $el, spinValue );
                            };
                            break;
                        case 40: //down arrow
                            func = function(){
                                spinFieldValue( $el, spinValue, true );
                            };
                            break;
                    }

                    if( func ){
                        $el.data({
                            'spinKey' : activeKey,
                            'spinFunc' : func,
                            'spinClickTimer' : setTimeout(function(){
                                if( $el.data('spinClickTimer') ){
                                    clearTimeout($el.data('spinClickTimer'));
                                    $el.data('spinClickTimer', false);
                                }
                                $el.data('spinKeyInterval', setInterval(func, 20, 0, false));
                            }, 150, false)
                        });
                    }
                    else{
                        $el.data('spinKey', false);
                    }
                },
                'keyup.arrowsSpin' : function(e){
                    var activeKey = $el.data('spinKey');
                    if( !activeKey || activeKey !== e.keyCode ){ return; }
                    if( $el.data('spinKeyInterval') ){
                        clearInterval( $el.data('spinKeyInterval') );
                    }
                    if( $el.data('spinClickTimer') ){
                        clearTimeout( $el.data('spinClickTimer') );
                        var func = $el.data('spinFunc');
                        func();
                    }
                    $el.data({
                        'spinKey' : false,
                        'spinFunc' : false,
                        'spinClickTimer' : false,
                        'spinKeyInterval' : false
                    });
                }
            })
        ;
    });

    /* Block actions */
    pex.action.set('show-block', function ($el, opts){
        if( $el.is('input, option') ){
            var $checks = $([]),
                eventName = 'change'
            ;
            if( $el.is('option') ){
                $checks = $el.closest('select');
            }else if( $el.is('input[type="radio"]') ){
                $checks = $el.closest('form, body').find('[name="' + $el.attr('name') + '"]');
            }else{
                $checks = $el;
            }
            $checks.on(eventName, function(){
                pex.block.action($el.data('blockName'), $el.is(':checked') || $el.is(':selected') ? 'show' : 'hide');
            });
        }else{
            $el.on('click', function(e){
                e.preventDefault();
                pex.block.show($(this).data('blockName'));
            });
        }
    });

    /* Tabs */
    var Tabs = function ($el, opts){
        var context = this;
        context.$root = $el;
        context.$tabs = $el.find('[data-tab]').data('pex__Tabs', context);
        context.$tabsContent = $el.find('[data-tab-content]').data('pex__Tabs', context);

        context.options(opts);
        context.$tabs.on('click.pex__Tabs', function (e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: context.$root.offset().top - ($(window).height() / 2)
            }, 300);
            context.current($(this).data('tab'));
        });

        if( !context.opts.current ){
            var $currTab = context.$tabs.filter('.active');
            if( !$currTab.length ){
                $currTab = context.$tabs.first();
            }
            context.current($currTab.data('tab'));
        }
        context.$root.data('pex__Tabs', context);
    };

    Tabs.prototype = {
        getCurrentTab : function (){
            return this.opts.current === false ? $([]) : this.$tabs.filter('[data-tab="' + this.opts.current + '"]');
        }
    };

    pex.plugin.provideOptions(Tabs, {
        current : function (context, name, val){
            var current = context.opts.current || false,
                next = false,
                type = typeof val
            ;
            if( type === 'string' ){
                next = val;
            }else if( type === 'number' ){
                next = context.$tabs.eq(val - 1).data('tab');
            }
            if( next && current !== next){
                var $currTab = context.$tabs.filter('[data-tab="' + next + '"]'),
                    $currContent = context.$tabsContent.filter('[data-tab-content="' + next + '"]')
                ;
                if( $currTab.length && $currContent.length ){
                    context.$root.trigger('tabPreShow', [context, $currTab, $currContent]);
                    context.$tabs.removeClass('active');
                    context.$tabsContent.removeClass('active');
                    if( current ){
                        context.$tabsContent.filter('[data-tab-content="' + current + '"]')
                            .addClass('hiding')
                            .fadeOut(500, function(){
                                $(this).removeClass('hiding');
                            })
                        ;
                    }
                    current = next;
                    $currTab.addClass('active');
                    $currContent
                        .addClass('showing')
                        .addClass('active')
                        .fadeIn(500, function(){
                            $(this).removeClass('showing');
                            context.$root.trigger('tabShown', [context, $currTab, $currContent]);
                        })
                    ;
                }
            }
            return current;
        }
    }, true);

    pex.action.set('active-tab-line', function ($el){
        var $tabs = $el.closest('[data-action-role="tabs"]'),
            fn = function($currTab){
                if( $currTab.length ){
                    $el
                        .css('width', $currTab.width())
                        .offset({
                            left : $currTab.offset().left
                        })
                    ;
                }
            }
        ;
        if( $tabs.data('pex__Tabs') ){
            fn($tabs.data('pex__Tabs').getCurrentTab());
        }
        $tabs.on('tabPreShow', function(e, context, $currTab){
            fn($currTab);
        });
        $(window).on('resize', function(){
            fn($tabs.data('pex__Tabs').getCurrentTab());
        });
    });

    pex.action.set('tabs', function ($el, opts){
        var tabsObj = $el.data('pex__Tabs');
        if( !(tabsObj instanceof Tabs) ){
            tabsObj = new Tabs($el, opts);
        }
        return tabsObj;
    });
    pex.action.set('show-tab', function ($el, opts){
        $el.on('click', function(e){
            e.preventDefault();
            var tabname = $(this).data('tabName'),
                tabsObj = $('[data-tab="' + tabname + '"]').data('pex__Tabs')
            ;
            if( tabsObj ){
                $('html, body').animate({
                    scrollTop: tabsObj.$root.offset().top - ($(window).height() / 2)
                }, 300);
                tabsObj.current(tabname);
            }
        });
    });

    /* Cover image */
    var coverimage = function (el){
        var $el = $(el);
        if( !$el.is('.covered') ){
            var fn = function (){
                $el.addClass('hide').after(
                    $('<span>').addClass('cover-image').css('backgroundImage', "url(" + $el.attr('src') + ")" )
                );
            };
            if( $el.is('[data-lazy]') ){
                $el.on('pexLazyLoaded', fn);
            }else{
                fn();
            }
        }
        return pex;
    };

    

    pex.fns.add('init', function ($container, findFn){
        $container[findFn]('[data-cover-image]:not(.cover)').each(function (i, el){
            coverimage(el);
        });
        $container[findFn]('[data-show-block]').each(function (i, el){
            $(el).off('.showBlock').on('click.showBlock', function(e){
                e.preventDefault();
                pex.block.show($(this).data('showBlock'));
            });
        });
        $container[findFn]('[data-hide-block]').each(function (i, el){
            $(el).off('.hideBlock').on('click.hideBlock', function(e){
                e.preventDefault();
                pex.block.hide($(this).data('hideBlock'));
            });
        });
        $container[findFn]('[data-close-block]').each(function (i, el){
            $(el).off('.closeBlock').on('click.closeBlock', function(e){
                e.preventDefault();
                pex.block.hide($(this).closest('[data-block]'));
            });
        });
        $container[findFn]('[data-action-role]').each(function (i, el){
            var $el = $(el),
                actions = pex.splitWords($el.data('actionRole')),
                key
            ;
            for (key = 0; key < actions.length; key++) {
                if( pex.action.has(actions[key]) ){
                    pex.action.setup(actions[key], $el);
                }
            }
        });
    });
    pex.coverimage = coverimage;

    /* Init */
    // apply Pentix functionality on elements
    $.fn.pexInit = function (findFn, silent){
        var _findFn = (findFn && $.inArray(findFn, ['filter']) > -1) ? findFn : 'find',
            i
        ;
        if( silent ){
            for (i = 0; i < this.length; i++) {
                pex.fns.run('init', $(this[i]), _findFn);
            }
        }else{
            $(this).trigger('pexInitStart');
            for (i = 0; i < this.length; i++) {
                var $el = $(this[i]);
                $el.trigger('pexBeforeInit');
                pex.fns.run('init', $el, _findFn);
                $el.trigger('pexAfterInit');
            }
            $(this).trigger('pexInitEnd');
        }
        return this;
    };
}));