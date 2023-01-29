// swiper 
(function () {
    "use strict";

    var carousels = function () {
        $(".owl-carousel1").owlCarousel({
            loop: true,
            center: true,
            margin: 0,
            responsiveClass: true,
            nav: false,
            navText: ["<img src=''>", "<img src='mynextimage.png'>"],
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                680: {
                    items: 2,
                    nav: false,
                    loop: false
                },
                1000: {
                    items: 3,
                    nav: true
                }
            }
        });
    };

    (function ($) {
        carousels();
    })(jQuery);
})();


// time

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    return {
        'total': t,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes ).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 1800 * 1000);
initializeClock('order-time', deadline);

// form
function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}
var button = document.querySelector('.button');
var footer = document.querySelector('#form');

button.addEventListener('click', () => {
    scrollTo(form);
})

function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}
var button = document.querySelector('.button2');
var footer = document.querySelector('#form');

button.addEventListener('click', () => {
    scrollTo(form);
})

var telInput = document.querySelectorAll('input[type="tel"]');

for (var i = 0; i < telInput.length; i++) {
    telInput[i].oninput = function () {
        dpcm(this);
    }
}

function dpcm(input) {
    var value = input.value;
    var re = /[^0-9\-\(\)\+\ ]/gi;
    if (re.test(value)) {
        value = value.replace(re, '');
        input.value = value;
    }
}
  

