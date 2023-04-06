/* global Shuffle */


(function (fn) {
        if (typeof jQuery === 'undefined') {
            throw 'Requires jQuery to be loaded first';
        }
        fn(jQuery);
    }

    (function ($) {
        "use strict";

        // Shuffle
        $('.shuffle-js').each(function (i, el) {

            var $el = $(el),
                $shuffle = $(el).find('.shuffle-items'),
                shuffleInstance = new Shuffle($shuffle[0], {
                    itemSelector: '.shuffle-item'
                }),
                $filters = $el.find("[data-filter]"),
                $searchFilter = document.querySelector('.js-shuffle-search');

            $searchFilter.addEventListener('keyup', _handleSearchKeyup.bind(this));

            // filters functionality
            $filters.on('click', function (e) {
                e.preventDefault();
                $el.find('.shuffle-empty').css('display', 'none');
                var filter,
                    $filter = $(this);
                try {
                    filter = JSON.parse($filter.data('filter'));
                } catch (exc) {
                    filter = $filter.data('filter');
                }
                $filters.removeClass('active');
                $filter.addClass('active');

                shuffleInstance.filter(filter);
                $searchFilter.value = '';
            });

            function _handleSearchKeyup(evt) {
                const searchText = evt.target.value.toLowerCase();
                $el.find('.shuffle-empty').css('display', 'none');
                $filters.removeClass('active');
                shuffleInstance.filter(($el, shuffleInstance) => {
                    const titleElement = $el.querySelector('.card__title');
                    const titleText = titleElement.textContent.toLowerCase().trim();
                    return titleText.indexOf(searchText) != -1;
                });
            }

            shuffleInstance.on(Shuffle.EventType.LAYOUT, function () {
                $(window).trigger('resize');
                $el.find('.shuffle-empty').css('display', shuffleInstance.visibleItems ? 'none' : 'block');
            });
        });
    }));

// Shuffle
$('.shuffle-js').each(function (i, el) {

    var $el = $(el),
        $shuffle = $(el).find('.shuffle-items'),
        shuffleInstance = new Shuffle($shuffle[0], {
            itemSelector: '.shuffle-item'
        }),
        $filters = $el.find("[data-filter]"),
        $searchFilter = document.querySelector('.js-shuffle-search');

    $searchFilter.addEventListener('keyup', _handleSearchKeyup.bind(this));

    $filters.on('click', function (e) {
        e.preventDefault();
        $el.find('.shuffle-empty').css('display', 'none');
        var filter,
            $filter = $(this);
        try {
            filter = JSON.parse($filter.data('filter'));
        } catch (exc) {
            filter = $filter.data('filter');
        }
        $filters.removeClass('active');
        $filter.addClass('active');
        shuffleInstance.filter(filter);
        $searchFilter.textContent = '';
    });

    function _handleSearchKeyup(evt) {
        const searchText = evt.target.value.toLowerCase();
        $el.find('.shuffle-empty').css('display', 'none');
        $filters.removeClass('active');
        shuffleInstance.filter(($el, shuffleInstance) => {
            const titleElement = $el.querySelector('.card__title');
            const titleText = titleElement.textContent.toLowerCase().trim();
            return titleText.indexOf(searchText) != -1;
        });
    }

    shuffleInstance.on(Shuffle.EventType.LAYOUT, function () {
        $(window).trigger('resize');
        $el.find('.shuffle-empty').css('display', shuffleInstance.visibleItems ? 'none' : 'block');
    });
});

function popitup(url, windowName) {
    var newwindow = window.open(url, windowName, 'height=600,width=600');
    if (window.focus) {
        newwindow.focus()
    }
    return false;
}