(function($) {
    "use strict";

    var $window = $(window);
    var $body = $('body');

    /* Preloader Effect */
    $window.on('load', function() {
        $(".preloader").fadeOut(600);
    });

    /* Sticky Header */
    if ($('.main-header').length) {
        $window.on('resize', function() {
            setHeaderHeight();
        });

        function setHeaderHeight() {
            $("header.main-header").css("height", $('header .header-sticky').outerHeight());
        }

        $window.on("scroll", function() {
            var fromTop = $(window).scrollTop();
            setHeaderHeight();
            var headerHeight = $('header .header-sticky').outerHeight()
            $("header .header-sticky").toggleClass("hide", (fromTop > headerHeight + 100));
            $("header .header-sticky").toggleClass("active", (fromTop > 600));
        });
    }

    /* Slick Menu JS */
    if ($('#menu').length) {
        $('#menu').slicknav({
            label: '',
            prependTo: '.responsive-menu'
        });
    }

    if ($("a[href='#top']").length) {
        $(document).on("click", "a[href='#top']", function() {
            $("html, body").animate({
                scrollTop: 0
            }, "slow");
            return false;
        });
    }

    /* Skill Bar */
    if ($('.skills-progress-bar').length) {
        $('.skills-progress-bar').waypoint(function() {
            $('.skillbar').each(function() {
                $(this).find('.count-bar').animate({
                    width: $(this).attr('data-percent')
                }, 2000);
            });
        }, {
            offset: '70%'
        });
    }

    /* Youtube Background Video JS */
    if ($('#herovideo').length) {
        var myPlayer = $("#herovideo").YTPlayer();
    }

    /* Init Counter */
    if ($('.counter').length) {
        $('.counter').counterUp({
            delay: 6,
            time: 3000
        });
    }

    /* Zoom Gallery screenshot */
    if ($('.gallery-items').length) {
        $('.gallery-items').magnificPopup({
            delegate: 'a',
            type: 'image',
            closeOnContentClick: false,
            closeBtnInside: false,
            mainClass: 'mfp-with-zoom',
            image: {
                verticalFit: true,
            },
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300,
                opener: function(element) {
                    return element.find('img');
                }
            }
        });
    }

    /* Contact form validation */
    var $contactform = $("#contactForm");
    if ($contactform.length) {
        $contactform.validator({
            focus: false
        }).on("submit", function(event) {
            if (!event.isDefaultPrevented()) {
                event.preventDefault();
                submitForm();
            }
        });

        function submitForm() {
            $.ajax({
                type: "POST",
                url: "form-process.php",
                data: $contactform.serialize(),
                success: function(text) {
                    if (text === "success") {
                        formSuccess();
                    } else {
                        submitMSG(false, text);
                    }
                }
            });
        }

        function formSuccess() {
            $contactform[0].reset();
            submitMSG(true, "Message Sent Successfully!")
        }

        function submitMSG(valid, msg) {
            if (valid) {
                var msgClasses = "h4 text-success";
            } else {
                var msgClasses = "h4 text-danger";
            }
            $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
        }
    }

    /* Popup Video */
    if ($('.popup-video').length) {
        $('.popup-video').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: true
        });
    }

    /* Service Item List Start */
    var $service_item_list = $('.service-item-list');
    if ($service_item_list.length) {
        var $service_item = $service_item_list.find('.service-item');
        if ($service_item.length) {
            $service_item.on({
                mouseenter: function() {
                    if (!$(this).hasClass('active')) {
                        $service_item.removeClass('active');
                        $(this).addClass('active');
                    }
                }
            });
        }
    }

    /* Page Testimonial Item Active Start */
    var $page_testimonials = $('.page-testimonials');
    if ($page_testimonials.length) {
        var $testimonial_item = $page_testimonials.find('.testimonial-item');
        if ($testimonial_item.length) {
            $testimonial_item.on({
                mouseenter: function() {
                    if (!$(this).hasClass('active')) {
                        $testimonial_item.removeClass('active');
                        $(this).addClass('active');
                    }
                }
            });
        }
    }

})(jQuery);