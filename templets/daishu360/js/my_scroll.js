$(function($){
    var _h = $(window).height();
    var _w = $(window).width();
    if (_w < 1440) {
        $("#leftScroll").hide();
    }
    $(window).resize(function(event) {
        var _w = $(window).width();
        if (_w < 1440) {
            $("#leftScroll").hide();
        }else{
            $("#leftScroll").show();
        }
    });

    $(window).scroll(function(){

        var _flag_1 = true;

        var _scrollTop = $(window).scrollTop();

        if (_scrollTop < 499) {
            $("#leftScroll").stop().animate({
                top: '-560px'
            },500);
        } else if (_scrollTop > 499 && _flag_1) {
            _flag_1 = false;
            $("#leftScroll").stop().animate({
                top: '200px'               
            },800);
        }

        var offsets = [],
            targets = [],
            scrollHeight = $(window)[0].scrollHeight || Math.max($('body')[0].scrollHeight, document.documentElement.scrollHeight);

        $('body')
            .find('#leftScroll ul.scroll_floor_list li > a')
            .map(function () {
                var $el   = $(this);
                var href  = $el.attr('data-floor');
                var $href = $('#'+href);

                return ($href
                && $href.length
                && $href.is(':visible')
                && [[$href['offset']().top, href]]) || null;
            })
            .sort(function (a, b) { return a[0] - b[0]; })
            .each(function () {
                offsets.push(this[0]);
                targets.push(this[1]);
            });

        var scrollTop = $(window).scrollTop();
        var maxScroll = scrollHeight - $(window).height();
        var i;

        if (scrollTop >= maxScroll) {
            i = targets[targets.length - 1];
            return activate(i);
        }

        if (scrollTop <= offsets[0]) {
            i = targets[0];
            return activate(i);
        }

        for (i = offsets.length; i--;) {
            scrollTop >= offsets[i]
            && (!offsets[i + 1] || scrollTop < offsets[i + 1])
            && activate(targets[i]);
        }
    });

    function activate(target) {
        $('#leftScroll ul.scroll_floor_list li > a')
            .parentsUntil('#leftScroll', '.active')
            .removeClass('active');
        $('#leftScroll ul.scroll_floor_list li > a'+'[data-floor="' + target + '"]')
            .parents('li')
            .addClass('active');
    }

    $("#leftScroll .floor_item a").click(function(event) {
        var $this = $(this);
        var $parent = $this.parent();
        var _id = $(this).attr('data-floor');
        if ($this.hasClass('floor_totop')) {
            $('body,html').animate({scrollTop:0},1000);
        }
        if (_id) {
            var _top = $("#"+_id).offset().top + 1;
            $("body,html").animate({scrollTop:_top},1000);
            $parent.addClass("active").siblings().removeClass("active");
        }
    });
});