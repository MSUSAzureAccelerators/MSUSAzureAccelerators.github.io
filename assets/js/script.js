/* global Shuffle */


(function (fn) {
    if (typeof jQuery === 'undefined') {
        throw 'Requires jQuery to be loaded first';
    }
    fn(jQuery);
}(function ($) {
    "use strict";

    // Page loader
    $('body').addClass('loader-loading');
    var showPage = function(){
        $('body')
            .removeClass('loader-loading')
            .off('.pageLoader')
        ;
        $(window).trigger('resize').trigger('scroll');
    };
    $(window).on('load.pageLoader', showPage);
    //force page show if it's loading too long
    setTimeout(showPage, 60000); // 60000 ~ 1 minute
    
    //Initiate Pentix scripts for all elements within body
    $('body').pexInit();

    $('.menu-items .toggle-icon').on('click', function(){
        $(this).closest('li').toggleClass('active');
    });

    $('.accordion-item .accordion-title').on('click', function(){
        $(this).closest('.accordion-item').toggleClass('active');
    });

    

    // FlexSlider
    $('.flexslider').each(function(i, el){
        var $slider = $(el),
            $directions = $slider.find(".flex-custom-navigation a"),
            $controls = $slider.find(".flex-custom-controls"),
            options = {
                animation : "slide",
                selector : ".slides > .slide",
                controlsContainer: $controls,
                customDirectionNav: $directions,
                controlNav : !!$controls.length,
                directionNav : !!$directions.length,
                video : true
            }
        ;
        $slider.flexslider(options);
    });

    // Owl Carousel 2
    $('.owl-carousel').each(function(i, el){
        var $slider = $(el),
            data = $slider.data(),
            options = {
                nav : !!data.owlNav,
                dots : !!data.owlDots,
                margin : data.owlMargin || 0,
                autoplay : data.hasOwnProperty('autoplay') ? data.autoplay : true,
                autoplayHoverPause : true,
                center : !!data.owlCenter,
                items : data.owlItems || 3,
                loop : data.hasOwnProperty('owlLoop') ? !!data.owlLoop : true,
                responsive: {
                    0 : {
                        items : 1
                    },
                    768:{
                        items : 2
                    },
                    1200 : {
                        items : 3
                    }
                }
            }
        ;
        if( data.owlResponsive ){
            var values = data.owlResponsive.split(';'),
                responsive = {
                    0 : 1
                },
                sizes = [0, 768, 992, 1200]
            ;
            for (var ind = 0; ind < sizes.length && ind < values.length; ind++) {
                if( values[ind] ){
                    responsive[sizes[ind]] = {
                        items : parseInt(values[ind], 10)
                    };
                }
            }
            options.responsive = responsive;
        }
        if( data.owlSectionArrows ){
            var $navContainer = $slider.closest('section').find('.owl-custom-navigation');
            if ($navContainer.length) {
                options.nav = true;
                options.navContainer = $navContainer[0];
                options.navText = ['<i class="fas fa-angle-left" aria-hidden="true"></i>', '<i class="fas fa-angle-right" aria-hidden="true"></i>'];
            } else {
                options.nav = false;
            }
        }
        $slider.owlCarousel(options);
    });

    

    // Menu stick
    $('.stick-menu').each(function(i, el){
        var checkTimeout,
            unstickPos = $(el).offset().top + $(el).outerHeight(),
            scrollPos = $(window).scrollTop(),
            scrollDistance = 0,
            sticked = false,
            checkFn = function(check, show) {
                if (checkTimeout) {
                    clearTimeout(checkTimeout);
                    checkTimeout = false;
                }
                var $el = $(el),
                    $header = $el.closest('.header'),
                    shown = show || (check && $header.hasClass('sticked-menu'));
                $header.removeClass('sticked-menu');
                $header.css('height', '');
                unstickPos = $el.offset().top + $el.outerHeight();
                if (shown && scrollPos > unstickPos) {
                    $header
                        .height($header.height())
                        .addClass('sticked-menu');
                    unstickPos -= $el.outerHeight();
                    sticked = true;
                } else {
                    sticked = false;
                }
                if (!check) {
                    $(window).trigger('resize', ['skipCheck']);
                }
            };
        $(window).on('scroll', function(){
            var showDistance = 100,
                hideDistance = 50,
                newPos = $(window).scrollTop(),
                distance = newPos - scrollPos;
            scrollDistance = Math[distance > 0 ? 'max' : 'min'](scrollDistance, 0) + distance;
            scrollPos = newPos;
            if (sticked && (scrollPos <= unstickPos || scrollDistance >= hideDistance)) {
                checkFn(false, false);
            } else if (!sticked && scrollDistance <= -showDistance){
                checkFn(true, true);
            }
        });
        $(window).on('resize', function(e, param){
            scrollPos = $(window).scrollTop();
            if (param !== 'skipCheck'){
                checkTimeout = setTimeout(function() {
                    checkFn(true);
                }, 50);
            }
        });
    });

    // File field
    $('.field-file-control').each(function(i, el){
        var $el = $(el);
        // show file name in text input
        $el.on('change.fileField', function(){
                var $wrap = $(this).closest('.field-wrap'),
                    $old = $wrap.find('.field-file-old')
                ;
                $wrap.find('.field-control').val(!this.value && $old.length ? $old.attr('data-value') || $old.val() : this.value);
            })
            .triggerHandler('change.fileField')
        ;

        var $form = $el.closest('form');
        if( $form && $form.length ){
            $form
                .data('fileFields', ($form.data('fileFields') || $([])).add($el) )
                .off('.fileFields')
                .on('reset.fileFields', function(){
                    var $el = $(this);
                    setTimeout(function(){
                        $el.data('fileFields').each(function(i, field){
                            $(field).triggerHandler('change.fileField');
                        });
                    });
                })
            ;
        }

        // add on click events to show file selection window
        $el.closest('.field-wrap').find('.field-control, .field-file-btn').on('click', function(e){
            e.preventDefault();
            $el.trigger('click');
        });

        /*
            IE 10 and above, and modern browsers
            Show preview image, if it's image file upload
        */
        var reader = false,
            $root = $(el).closest('.field-type-image')
        ;
        if( !($root.length  && typeof(FileReader) !== 'undefined') ){
            return;
        }

        if( $root.find('.file-preview-image img') ){
            $root.addClass('has-file');
        }

        // add on click events to show file selection window
        $root.find('.file-preview').on('click', function(e){
            e.preventDefault();
            $el.trigger('click');
        });

        reader = new FileReader();
        
        reader.onloadstart = function(){
            $root.removeClass('has-file'); //Hide old image
        };
        reader.onload = function (e) {
            //Show new image
            $root.find('.file-preview-image')
                .empty()
                .html('<img src="' + e.target.result + '" alt="" />');
            $root.addClass('has-file');
        };
        
        // Set change event, unset any previous
        $el.on('change.imageField', function(){
            var files = this.files ? this.files : this.currentTarget.files;
            if( files.length ){
                reader.readAsDataURL( files[0] );
            }else{
                $root
                    .removeClass('has-file')
                    .find('.file-preview-image').empty()
                ;
            }
            
        });

        if( $form && $form.length ){
            $form
                .data('imageFields', ($form.data('imageFields') || $([])).add($el) )
                .off('.imageFields')
                .on('reset.imageFields', function(){
                    var $formEl = $(this);
                    setTimeout(function(){
                        $formEl.data('imageFields').each(function(i, field){
                            $(field).find('input[type="file"]').triggerHandler('change.imageField');
                        });
                    });
                })
            ;
        }
    });

    

    // Shuffle
    $('.shuffle-js').each(function(i, el){
        var $el = $(el),
            $shuffle = $(el).find('.shuffle-items'),
            shuffleInstance = new Shuffle($shuffle[0], {
                itemSelector: '.shuffle-item'
            }),
            $filters = $el.find("[data-filter]")
        ;
        $filters.on('click', function(e){
            e.preventDefault();
            $el.find('.shuffle-empty').css('display', 'none');
            var filter,
                $filter = $(this)
            ;
            try{
                filter = JSON.parse($filter.data('filter'));
            }catch(exc){
                filter = $filter.data('filter');
            }
            $filters.removeClass('active');
            $filter.addClass('active');
            
            shuffleInstance.filter(filter);
        });
        shuffleInstance.on(Shuffle.EventType.LAYOUT, function () {
            $(window).trigger('resize');
            $el.find('.shuffle-empty').css('display', shuffleInstance.visibleItems ? 'none' : 'block' );
        });
    });

    // Range slider
    var slDataOptions = ['min', 'max'],
        setValue = function($list, val){
            $list.each(function(i, el){
                var $el = $(el);
                if( $el.is('input, textarea, select') ){
                    $el.val(val);
                }else{
                    $el.html(val);
                }
            });
        }
    ;
    $('[data-ui-range-slider]').each(function(i, el){
        var $el = $(el),
            $slider = $el.find('.slider-container'),
            $from = $el.find('[data-slider-from]'),
            $to = $el.find('[data-slider-to]'),
            data = $el.data(),
            options = {
                range : true,
                values : [
                    $from.filter('input').first().val() || data.from || data.min || 0,
                    $to.filter('input').first().val() || data.to || data.max || 0
                ],
                create : function() {
                    setValue($from, options.values[0]);
                    setValue($to, options.values[1]);
                },
                slide : function( event, ui ) {
                    setValue($from, ui.values[0]);
                    setValue($to, ui.values[1]);
                }
            }
        ;
        for (var key = 0; key < slDataOptions.length; key++) {
            if( data.hasOwnProperty(slDataOptions[key]) ){
                options[slDataOptions[key]] = data[slDataOptions[key]];
            }
        }
        $slider.slider(options);
    });

    // Preview image / Product images preview
    $('[data-preview-image]').each(function(i, el){
        var $container = $(el),
            $current = $([]),
            $clone = $([]),
            name = $container.data('previewImage') || ''
        ;
        $('[data-preview-image-source="' + name + '"]').on('mouseenter.previewImage', function(){
            var $source = $(this);
            if( $current.is($source) ){
                return;
            }
            $clone.clearQueue().fadeOut(500, function(){
                $(this).remove();
            });
            $current = $source;
            $clone = $source.clone(true, true).removeClass().off('.previewImage').css({
                'display' : 'none',
                'transition' : 'none'
            }).appendTo($container).fadeIn(500);
        }).first().triggerHandler('mouseenter');
    });

    // Scroll Top
    var checkScroll = function(){
        if( $(window).scrollTop() > 0 ){
            $('.scroll-top').removeClass('disabled');
        }else{
            $('.scroll-top').addClass('disabled');
        }
    };
    checkScroll();
    $(window).on('scroll resize orientationchange focus', checkScroll);
    $('.scroll-top').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    // Show/hide categories
    $('ul.categories-list > li .open-sub-link').on('click', function(e){
        e.preventDefault();
        var $el = $(this),
            $current = $el.closest('li').toggleClass('active'),
            $ignore = $current.hasClass('active') ? $current : $([])
        ;
        $current.closest('ul').find('> li.active').not($ignore).removeClass('active');
    });

    /* Chosen - custeom selects*/
    $('.chosen-field select.field-control').each(function(i, el){
        var $field = $(el);
        $field.chosen({
            width : '100%',
            disable_search_threshold : 10
        });
    });

    /* User tickets */
    $('.user-tickets .user-ticket .item-header').on('click', function(e){
        e.preventDefault();
        var $ticket = $(this).closest('.user-ticket'),
            $other = $(this).closest('.user-tickets').find('.user-ticket').not($ticket)
        ;
        $ticket.toggleClass('active');
        $other.removeClass('active');
    });

    /* User orders */
    $('.user-orders .user-order .item-header').on('click', function(e){
        e.preventDefault();
        var $order = $(this).closest('.user-order'),
            $other = $(this).closest('.user-orders').find('.user-order').not($order)
        ;
        $order.toggleClass('active');
        $other.removeClass('active');
    });
}));

// Shuffle
$('.shuffle-js').each(function(i, el){
    var $el = $(el),
        $shuffle = $(el).find('.shuffle-items'),
        shuffleInstance = new Shuffle($shuffle[0], {
            itemSelector: '.shuffle-item'
        }),
        $filters = $el.find("[data-filter]")
    ;
    $filters.on('click', function(e){
        e.preventDefault();
        $el.find('.shuffle-empty').css('display', 'none');
        var filter,
            $filter = $(this)
        ;
        try{
            filter = JSON.parse($filter.data('filter'));
        }catch(exc){
            filter = $filter.data('filter');
        }
        $filters.removeClass('active');
        $filter.addClass('active');
        shuffleInstance.filter(filter);
    });
    shuffleInstance.on(Shuffle.EventType.LAYOUT, function () {
        $(window).trigger('resize');
        $el.find('.shuffle-empty').css('display', shuffleInstance.visibleItems ? 'none' : 'block' );
    });
});