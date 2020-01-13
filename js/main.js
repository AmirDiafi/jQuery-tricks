

$(document).ready(function () {
    'use strict';

        $.extend($.expr[':'], {
            moreThan100Pixles: function (element) {
                if ($(element).height() > 100) {
                    return $(element);
                }
            }
        });
    $('.extend:moreThan100Pixles').css({
        background: '#900'
    })

    // Start Make My First Own Plugin

    $.fn.makeRed = function () {
        $(this).css({
            color: '#900'
        });
        return(this)
    };

    $('.make-red').makeRed();

    // Start Center Plugin

    // $.fn.centeringMe = function () {
    //     $(this).css({
    //         position: 'absolute',
    //         left: ($(window).width() - $(this).width()) / 2,
    //         top: ($(window).height() - $(this).heigth()) / 2
    //     });
    // };

    // $('.centering-me').centeringMe();

    // Start Countdown
       var countdown = setInterval(function () {
           var counter = parseInt($('.countdown').text());
           if (counter !== 0) {
               $('.countdown').text(counter - 1)
           } else {
               clearInterval(countdown);
               $('.countdown').text('Finished..!')
           }
        }, 100);

        // Start Infinity Animation

        (function animateInfinite() {
            $('i.fa-hand-point-down').animate({
                top: '-50px',
            }, 1000, function () {
                $(this).animate({
                    top:0
                });
                animateInfinite();
    
            })
        })();

        // Start Generate Option Inside DOM Tree

        for (var i = 1900; i <= 2015; i++){
            $('<option>', {value: i, text: i}).appendTo($('.genereta-option'));
        }

        // Start Slider

        var  myItem = $('.item');

        $(myItem).first().animate({
            width: '95%'
        })

        $('.info').click(function () {
            $(this).next('.item').animate({
                width: '95%'
            }).siblings('.item').animate({
                width: 0
            })
        })


        // Start Switch Link href

        $('link[href*="mode"]').attr('href', localStorage.getItem('selected-mode'));

        $('button').click(function () {
            $('link[href*="mode"]').attr('href','css/' + $(this).val() + '.css');
            localStorage.setItem('selected-mode', 'css/' + $(this).val() + '.css');
        })

        // Start Accordion

        $('.accordion div.details').first().css({
            display: 'block'
        });
        $('.accordion div.head').click (function () {
            $(this).next().slideToggle().siblings('div.details').slideUp()
        })

        


});