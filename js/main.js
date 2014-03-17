/*
 * jQuery Form Tips 1.2.6
 * By Manuel Boy (http://www.manuelboy.de)
 * Copyright (c) 2012 Manuel Boy
 * Licensed under the MIT License: http://www.opensource.org/licenses/mit-license.php
 */

(function(a){a.fn.formtips=function(b){var c=a.extend({tippedClass:"tipped"},b);return this.each(function(){var b=a(this);var d=a(b).attr("type");if(d!="file"&&d!="checkbox"&&d!="radio"){a(b).bind("focus",function(){var b=a(this).attr("title");if(a(this).val()==b){a(this).val("").removeClass(c.tippedClass)}return true});a(b).bind("blur",function(){var b=a(this).attr("title");if(a(this).val()==""){a(this).val(b).addClass(c.tippedClass)}return true});var e=a(b).attr("title");if(a(b).val()==""||a(b).val()==a(this).attr("title")){a(b).val(e).addClass(c.tippedClass)}else{a(b).removeClass(c.tippedClass)}a(b).parentsUntil("form").parent().submit(function(){var d=a(b).attr("title");if(a(b).val()==d){a(b).val("").removeClass(c.tippedClass)}})}})}})(jQuery);

function equalHeight(group) {
    var tallest = 0;
    group.each(function() {
        thisHeight = $(this).height();
        if(thisHeight > tallest) {
            tallest = thisHeight;
        }
    });
    group.height(tallest);
};
jQuery.extend(verge);
jQuery(function($){
    var desktop = true,
        tablet = false,
        mobile = false;

    $('input[title]').formtips();

    $(window).load(function() {
        
        $('.link').on('click', function(e) {
            e.preventDefault();
            $(this).closest('.slide-l__item').toggleClass('active').children('.slide-l__item__main').slideToggle();

        });

        $(".sert__main__item").fancybox({
            padding:0,
            helpers : {
                title   : {
                    type: 'outside'
                },
                thumbs  : {
                    width   : 50,
                    height  : 50
                }
            }
        });

        $(window).resize(function() {
            resizedw();

            if ($.viewportW() >= 1024) {
                desktop = true;
                tablet = false;
                mobile = false;
            }
            if ($.viewportW() >= 768 && $.viewportW() <= 1023) {
                desktop = false;
                tablet = true;
                mobile = false;
            } else {
                if ($.viewportW() <= 767) {
                    desktop = false;
                    tablet = false;
                    mobile = true;
                }
            }


            $('.partner__item').height('auto');
            equalHeight($('.partner__item'));

            $('.prod-l__main__item .img').height('auto');
            equalHeight($('.prod-l__main__item .img'));

            $('.design__l, .design__r').height('auto');
            equalHeight($('.design__l, .design__r'));
        }).resize();

        clearTimeout(doit);
        doit = setTimeout(function () {
            resizedw();
        }, 500);

        $('.slider').caroufredsel({
            height: 460,
            width: 1440,
            auto: false,
            items:{
                width: 1440,
                height: 460
            },
            pagination: $('.sl-pagination')
        });

        $('.p-slider').caroufredsel({
            width: 1160,
            auto: false,
            responsive: true,
            items: {
                width: 373,
                visible: 3
            },
            scroll: {
                items: 1
            },
            next: {
                button: $('.control_next')
            },
            prev: {
                button: $('.control_prev')
            }
        });

        $('.top-scroll').on('click', function(e) {
            e.preventDefault();

            $('body, html').animate({'scrollTop': 0}, 200);
        });

        $(window).on('scroll', function() {

            if($(document).scrollTop() >= $(window).height()){
                $('.content-wrap').addClass('scrolled'); 
            } else{
                $('.content-wrap').removeClass('scrolled'); 
            }
            
        });

    });

    var doit;
    function resizedw() {
       $('.p-slider').each(function () {
            $(this).trigger('stop', true);
            $(this).trigger('configuration', ['debug', false, true]);

            if(!(desktop)){
               
                $(this).trigger('configuration', ['items.visible', 1]);
            }else{
                
                $(this).trigger('configuration', ['items.visible', 3]);
            }
            

            $(this).trigger('play', true);

            setTimeout(function() {}, 1000);
            
        });

    }



});