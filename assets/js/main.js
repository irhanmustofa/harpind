/*=== Javascript function indexing hear===========

1.counterUp ----------(Its use for counting number)
2.stickyHeader -------(header class sticky)
3.wowActive ----------( Waw js plugins activation)
4.swiperJs -----------(All swiper in this website hear)
5.salActive ----------(Sal animation for card and all text)
6.textChanger --------(Text flip for banner section)
7.timeLine -----------(History Time line)
8.datePicker ---------(On click date calender)
9.timePicker ---------(On click time picker)
10.timeLineStory -----(History page time line)
11.vedioActivation----(Vedio activation)
12.searchOption ------(search open)
13.cartBarshow -------(Cart sode bar)
14.sideMenu ----------(Open side menu for desktop)
15.Back to top -------(back to top)
16.filterPrice -------(Price filtering)

==================================================*/

(function ($) {
    'use strict';
  
    var drJs = {
        m: function (e) {
            drJs.d();
            drJs.methods();
        },
        d: function (e) {
            this._window = $(window),
            this._document = $(document),
            this._body = $('body'),
            this._html = $('html')
        },
        methods: function (e) {
            drJs.wowActive();
            drJs.swiperActivation();
            drJs.wowActive();
            drJs.counterUp();
            drJs.stickyHeader();
            drJs.searchOption();
            drJs.metismenu();
            drJs.sideMenu();
            drJs.datePicker();
            drJs.timePicker();
            drJs.imageSlideGsap();
            drJs.vedioActivation(); 
            drJs.galleryPopUp(); 
            drJs.backToTopInit(); 
            drJs.progressAvtivation(); 
            drJs.gsapTextanim(); 
            drJs.smoothScroll(); 
            drJs.preloader(); 
            drJs.cartNumberIncDec(); 
            drJs.cartBarshow(); 

        },
        
        wowActive: function () {
          new WOW().init();
        },

        // swiper js activation
        swiperActivation: function (e) {
          $(document).ready(function () {
            var swiper = new Swiper(".mySwiper-banner", {
              spaceBetween: 0,
              loop: true,
              hashNavigation: {
                watchState: true,
              },
              pagination: {
                el: ".swiper-pagination",
                clickable: true,
              },
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
              autoplay: {
                delay: 7000,
              },
            });
          });
          $(document).ready(function () {
            var swiper = new Swiper(".mySwiper-about-feedback", {
              spaceBetween: 0,
              loop: true,
              hashNavigation: {
                watchState: true,
              },
              pagination: {
                el: ".swiper-pagination",
                clickable: true,
              },
              autoplay: {
                delay: 2000,
              },
            });
          });
          
          $(document).ready(function () {
            var swiper = new Swiper(".project-details-carousel", {
              spaceBetween: 0,
              loop: true,
              hashNavigation: {
                watchState: true,
              },
              pagination: {
                el: ".swiper-pagination",
                clickable: true,
              },
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
              autoplay: {
                delay: 2000,
              },
            });
          });
          $(document).ready(function () {
            var swiper = new Swiper(".aircondition-testimonials", {
              spaceBetween: 0,
              loop: true,
              hashNavigation: {
                watchState: true,
              },
              pagination: {
                el: ".swiper-pagination",
                clickable: true,
              },
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
              autoplay: {
                delay: 2000,
              },
            });
          });
          $(document).ready(function () {
            var swiper = new Swiper(".project-home-one", {
              slidesPerView: 5,
              spaceBetween: 10,
              slidesPerGroup: 1,
              // centeredSlides: true,
              // centeredSlides: true,
              loop: true,
              autoplay: {
                delay: 3000,
              },
              loopFillGroupWithBlank: true,
              pagination: {
                el: ".swiper-pagination",
                clickable: true,
              },
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
              breakpoints: {
                1500: {
                  slidesPerView: 4,
                },
                1199: {
                  slidesPerView:3,
                },
                991: {
                  slidesPerView: 3,
                },
                767: {
                  slidesPerView: 2,
                },
                575: {
                  slidesPerView: 1,
                },
                0: {
                  slidesPerView: 1,
                }
              },
            });
          });
          $(document).ready(function () {
            var swiper = new Swiper(".mySwiper-product-6", {
              slidesPerView: 4,
              spaceBetween: 10,
              slidesPerGroup: 1,
              // centeredSlides: true,
              // centeredSlides: true,
              loop: true,
              autoplay: {
                delay: 3000,
              },
              loopFillGroupWithBlank: true,
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
              breakpoints: {
                1500: {
                  slidesPerView: 4,
                },
                1199: {
                  slidesPerView:3,
                },
                991: {
                  slidesPerView: 3,
                },
                767: {
                  slidesPerView: 2,
                },
                575: {
                  slidesPerView: 1,
                },
                0: {
                  slidesPerView: 1,
                }
              },
            });
          });
          $(document).ready(function () {
            var swiper = new Swiper(".mySwiper-h1-solari-product", {
              slidesPerView: 3,
              spaceBetween: 30,
              slidesPerGroup: 1,
              // centeredSlides: true,
              // centeredSlides: true,
              loop: true,
              autoplay: {
                delay: 2500,
              },
              loopFillGroupWithBlank: true,
              pagination: {
                el: ".swiper-pagination",
                clickable: true,
              },
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
              breakpoints: {
                1500: {
                  slidesPerView: 3,
                },
                1199: {
                  slidesPerView:3,
                },
                991: {
                  slidesPerView: 2,
                },
                767: {
                  slidesPerView: 1,
                },
                575: {
                  slidesPerView: 1,
                },
                0: {
                  slidesPerView: 1,
                }
              },
            });
          });
          $(document).ready(function () {
            var swiper = new Swiper(".team-swiper-ac", {
              slidesPerView: 4,
              spaceBetween: 10,
              slidesPerGroup: 1,
              loop: true,
              autoplay: {
                delay: 3000,
              },
              loopFillGroupWithBlank: true,
              pagination: {
                el: ".swiper-pagination",
                clickable: true,
              },
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
              breakpoints: {
                1500: {
                  slidesPerView: 4,
                },
                1199: {
                  slidesPerView:3,
                },
                991: {
                  slidesPerView: 3,
                },
                767: {
                  slidesPerView: 2,
                },
                575: {
                  slidesPerView: 1,
                },
                0: {
                  slidesPerView: 1,
                }
              },
            });
          });
          $(document).ready(function () {
            var swiper = new Swiper(".case-swiper-ac", {
              slidesPerView: 1.8,
              spaceBetween: 24,
              slidesPerGroup: 1,
              centeredSlides: true,
              centeredSlides: true,
              loop: true,
              autoplay: {
                delay: 3000,
              },
              loopFillGroupWithBlank: true,
              pagination: {
                el: ".swiper-pagination",
                clickable: true,
              },
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
              breakpoints: {
                1500: {
                  slidesPerView: 1.8,
                },
                1199: {
                  slidesPerView:1.8,
                },
                991: {
                  slidesPerView: 2,
                },
                767: {
                  slidesPerView: 1,
                },
                575: {
                  slidesPerView: 1,
                },
                0: {
                  slidesPerView: 1,
                }
              },
            });
          });
          $(document).ready(function () {
            var swiper = new Swiper(".swiper-feedback-solar", {
              slidesPerView: 2,
              spaceBetween: 24,
              slidesPerGroup: 1,
              loop: true,
              autoplay: {
                delay: 3000,
              },
              loopFillGroupWithBlank: true,
              pagination: {
                el: ".swiper-pagination",
                clickable: true,
              },
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
              breakpoints: {
                1500: {
                  slidesPerView:2,
                },
                1199: {
                  slidesPerView:2,
                },
                991: {
                  slidesPerView: 1,
                },
                767: {
                  slidesPerView: 1,
                },
                575: {
                  slidesPerView: 1,
                },
                0: {
                  slidesPerView: 1,
                }
              },
            });
          });
          $(document).ready(function () {
            var swiper = new Swiper(".mySwiper-h-2-c", {
              slidesPerView: 3.8,
              spaceBetween: 24,
              slidesPerGroup: 1,
              centeredSlides: true,
              centeredSlides: true,
              loop: true,
              autoplay: {
                delay: 3000,
              },
              loopFillGroupWithBlank: true,
              pagination: {
                el: ".swiper-pagination-h2-c",
                clickable: true,
              },
              breakpoints: {
                1500: {
                  slidesPerView: 3,
                },
                1199: {
                  slidesPerView:2,
                },
                991: {
                  slidesPerView: 2,
                },
                767: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                575: {
                  slidesPerView: 1,
                },
                0: {
                  slidesPerView: 1,
                }
              },
            });
          });

          $(document).ready(function () {
            var swiper = new Swiper(".mySwiper-h3-project", {
              slidesPerView: 3.6,
              spaceBetween: 24,
              slidesPerGroup: 1,
              centeredSlides:false,
              loop: true,
              autoplay: {
                delay: 3000,
              },
              loopFillGroupWithBlank: false,
              breakpoints: {
                1500: {
                  slidesPerView: 3,
                },
                1199: {
                  slidesPerView: 3,
                },
                991: {
                  slidesPerView: 3,
                },
                767: {
                  slidesPerView: 2,
                },
                575: {
                  slidesPerView: 1,
                },
                0: {
                  slidesPerView: 1,
                }
              },
            });
          });

          $(document).ready(function(){
            var swiper = new Swiper(".mySwiper-banner-2", {
              pagination: {
                el: ".swiper-pagination-b2",
                clickable: true
              },
                navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
              effect: 'slide',
              loop: true,
              autoplay: {
                delay: 5000,
              },
            });
          });

          $(document).ready(function(){
            var swiper = new Swiper(".mySwiper-testimonials-solari", {
              pagination: {
                el: ".swiper-pagination",
                clickable: true
              },
              loop: true,
              autoplay: {
                delay: 3000,
              },
            });
          });

          $(document).ready(function(){
            var swiper = new Swiper(".mySwiper-banener-four-water", {
              speed: 500,
              effect: 'fade',
              pagination: {
                el: ".swiper-pagination",
                clickable: true
              },
              loop: true,
              autoplay: {
                delay: 5000,
              },
            });
          });
          
          $(document).ready(function(){
            var swiper = new Swiper(".mySwiper-category-soalr", {
              slidesPerView: 4,
              spaceBetween: 24,
              slidesPerGroup: 1,
              centeredSlides:false,
              mousewheel: {
                invert: true,
                releaseOnEdges: true
              },
              loop: true,
              autoplay: {
                delay: 3000,
              },
              loopFillGroupWithBlank: false,
              pagination: {
                el: ".swiper-pagination",
                type: "progressbar",
              },
              breakpoints: {
                1500: {
                  slidesPerView: 3,
                },
                1199: {
                  slidesPerView: 2,
                },
                991: {
                  slidesPerView: 3,
                },
                767: {
                  slidesPerView: 2,
                },
                575: {
                  slidesPerView: 1,
                },
                0: {
                  slidesPerView: 1,
                }
              },
            });
          });

          $(document).ready(function(){
              var swiper = new Swiper(".swiper-container-h1", {
                  direction: "horizontal",
                  effect: "slide",
                  autoplay: false,
                  parallax: true,
                  speed: 1600,
                  rtl: true,
                  loop: true,
                  loopFillGroupWithBlank: !0,
                  keyboard: {
                    enabled: true,
                    onlyInViewport: true
                  },
                  scrollbar: {
                    el: ".swiper-scrollbar",
                    hide: false,
                    draggable: true
                  },
                  navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  },
                  pagination: {
                      el: ".swiper-pagination",
                      type: "bullets",
                      clickable:"true"
                    }
                });
          });


        },

        // waw js activation
        wowActive: function () {
          new WOW().init();
        },

        // counter up
        counterUp: function (e) {
          $('.counter').counterUp({
              delay: 10,
              time: 2000
            });
            $('.counter').addClass('animated');
            $('h3').addClass('animated fadeIn');
        },

        // sticky header activation
        stickyHeader: function (e) {
          $(window).scroll(function () {
              if ($(this).scrollTop() > 150) {
                  $('.header--sticky').addClass('sticky')
              } else {
                  $('.header--sticky').removeClass('sticky')
              }
          })
        },

        // search popup
        searchOption: function () {
          $(document).on('click', '#search', function () {
            $(".search-input-area").addClass("show");
            $("#anywhere-home").addClass("bgshow");
          });
          $(document).on('click', '#close', function () {
            $(".search-input-area").removeClass("show");
            $("#anywhere-home").removeClass("bgshow");
          });
          $(document).on('click', '#anywhere-home', function () {
            $(".search-input-area").removeClass("show");
            $("#anywhere-home").removeClass("bgshow");
          });
        },

        metismenu:function(){
          $('#mobile-menu-active').metisMenu();
        },
        // side menu desktop
        sideMenu:function(){
          $(document).on('click', '#menu-btn', function () {
            $("#side-bar").addClass("show");
            $("#anywhere-home").addClass("bgshow");
          });
          $(document).on('click', '.close-icon-menu', function () {
            $("#side-bar").removeClass("show");
            $("#anywhere-home").removeClass("bgshow");
          });
          $(document).on('click', '#anywhere-home', function () {
            $("#side-bar").removeClass("show");
            $("#anywhere-home").removeClass("bgshow");
          });
          $(document).on('click', '.onepage .mainmenu li a', function () {
            $("#side-bar").removeClass("show");
            $("#anywhere-home").removeClass("bgshow");
          });
        },

        // date picker
        datePicker: function () {
          jQuery(document).ready(function () {
            jQuery('#datepicker').datepicker({
                format: 'dd-mm-yyyy',
                startDate: '+1d'
            });
          });
        },

        // time picker
        timePicker: function () {
          $(function() {
            $('#timepicker').timepicker({
              //timeFormat: 'h:mm p',
              dynamic: false,
              dropdown: true,
              scrollbar: true
            });
          });
        },

        // image slide gsap
        imageSlideGsap: function () {
          $(document).ready(function(){
            gsap.to(".images", {
              scrollTrigger:{
                // trigger: ".images",
                start: "top bottom", 
                end: "bottom top", 
                scrub: 1,
                // markers: true
              },
              x: -250,
            })
          });
          $(document).ready(function(){
            gsap.to(".images-r", {
              scrollTrigger:{
                // trigger: ".images",
                start: "top bottom", 
                end: "bottom top", 
                scrub: 1,
                // markers: true
              },
              x: 250,
            })
          });
          $(document).ready(function(){
            gsap.to(".images-2", {
              scrollTrigger:{
                // trigger: ".images",
                start: "top bottom", 
                end: "bottom top", 
                scrub: 1,
                // markers: true
              },
              y: -290,
            })
          });
        },

        vedioActivation: function (e) {
          $('#play-video, .play-video').on('click', function (e) {
              e.preventDefault();
              $('.video-overlay').addClass('open');
              $(".video-overlay").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/Giek094C_l4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
          });

          $('.video-overlay, .video-overlay-close').on('click', function (e) {
              e.preventDefault();
              close_video();
          });

          $(document).keyup(function (e) {
              if (e.keyCode === 27) {
                  close_video();
              }
          });

          function close_video() {
              $('.video-overlay.open').removeClass('open').find('iframe').remove();
          };
        },
        galleryPopUp: function (e) {
            // Gallery image hover
            $( ".img-wrapper" ).hover(
              function() {
                $(this).find(".img-overlay").animate({opacity: 1}, 600);
              }, function() {
                $(this).find(".img-overlay").animate({opacity: 0}, 600);
              }
            );

            // Lightbox
            var $overlay = $('<div id="overlay"></div>');
            var $image = $("<img>");
            var $prevButton = $('<div id="prevButton"><i class="fa fa-chevron-left"></i></div>');
            var $nextButton = $('<div id="nextButton"><i class="fa fa-chevron-right"></i></div>');
            var $exitButton = $('<div id="exitButton"><i class="fa fa-times"></i></div>');

            // Add overlay
            $overlay.append($image).prepend($prevButton).append($nextButton).append($exitButton);
            $("#gallery").append($overlay);

            // Hide overlay on default
            $overlay.hide();

            // When an image is clicked
            $(".img-overlay").click(function(event) {
              // Prevents default behavior
              event.preventDefault();
              // Adds href attribute to variable
              var imageLocation = $(this).prev().attr("href");
              // Add the image src to $image
              $image.attr("src", imageLocation);
              // Fade in the overlay
              $overlay.fadeIn("slow");
            });

            // When the overlay is clicked
            $overlay.click(function() {
              // Fade out the overlay
              $(this).fadeOut("slow");
            });

            // When next button is clicked
            $nextButton.click(function(event) {
              // Hide the current image
              $("#overlay img").hide();
              // Overlay image location
              var $currentImgSrc = $("#overlay img").attr("src");
              // Image with matching location of the overlay image
              var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
              // Finds the next image
              var $nextImg = $($currentImg.closest(".image").next().find("img"));
              // All of the images in the gallery
              var $images = $("#image-gallery img");
              // If there is a next image
              if ($nextImg.length > 0) { 
                // Fade in the next image
                $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
              } else {
                // Otherwise fade in the first image
                $("#overlay img").attr("src", $($images[0]).attr("src")).fadeIn(800);
              }
              // Prevents overlay from being hidden
              event.stopPropagation();
            });

            // When previous button is clicked
            $prevButton.click(function(event) {
              // Hide the current image
              $("#overlay img").hide();
              // Overlay image location
              var $currentImgSrc = $("#overlay img").attr("src");
              // Image with matching location of the overlay image
              var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
              // Finds the next image
              var $nextImg = $($currentImg.closest(".image").prev().find("img"));
              // Fade in the next image
              $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
              // Prevents overlay from being hidden
              event.stopPropagation();
            });

            // When the exit button is clicked
            $exitButton.click(function() {
              // Fade out the overlay
              $("#overlay").fadeOut("slow");
            });
        },

        backToTopInit: function () {
          $(document).ready(function(){
          "use strict";
      
          var progressPath = document.querySelector('.progress-wrap path');
          var pathLength = progressPath.getTotalLength();
          progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
          progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
          progressPath.style.strokeDashoffset = pathLength;
          progressPath.getBoundingClientRect();
          progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
          var updateProgress = function () {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
          }
          updateProgress();
          $(window).scroll(updateProgress);	
          var offset = 50;
          var duration = 550;
          jQuery(window).on('scroll', function() {
            if (jQuery(this).scrollTop() > offset) {
              jQuery('.progress-wrap').addClass('active-progress');
            } else {
              jQuery('.progress-wrap').removeClass('active-progress');
            }
          });				
          jQuery('.progress-wrap').on('click', function(event) {
            event.preventDefault();
            jQuery('html, body').animate({scrollTop: 0}, duration);
            return false;
          })
          
          
        });
  
        },

        progressAvtivation: function(){
          $(window).scroll(function () {
            if ($(this).scrollTop() > 250) {
              var bars = document.querySelectorAll('.meter > span');
              console.clear();
              setInterval(function(){
                bars.forEach(function(bar){
                  var getWidth = parseFloat(bar.dataset.progress);
                  for(var i = 0; i < getWidth; i++) {
                    bar.style.width = i + '%';
                  }
                });
              }, 100);
            }
          })
        },

        gsapTextanim: function(){
          $(document).ready(function(){
            let addAnimation = function () {
              $(".skew-up").each(function (index) {
                const text = new SplitType($(this), {
                  types: "lines, words",
                  lineClass: "word-line"
                });    let textInstance = $(this);
                let line = textInstance.find(".word-line");
                let word = line.find(".word");    let tl = gsap.timeline({
                  scrollTrigger: {
                    trigger: textInstance,
                    start: "top 85%",
                    end: "top 85%",
                    onComplete: function () {
                      $(textInstance).removeClass("skew-up");
                    }
                  }
                });    tl.set(textInstance, { opacity: 1 }).from(word, {
                  y: "100%",
                  skewX: "-5",
                  duration: 2,
                  stagger: 0.03,
                  ease: "expo.out"
                });
              });
             };addAnimation();window.addEventListener("resize", function (event) {
                if ($(window).width() >= 992) {addAnimation(); }
             });
          });
        },

        smoothScroll: function (e) {
          $(document).on('click', '.onepage a[href^="#"]', function (event) {
            event.preventDefault();
        
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 2000);
          });
        },

        preloader:function(){

          var preload = $("#elevate-load");
  
          if (preload.length){
            window.addEventListener('load',function(){
              document.querySelector('#elevate-load').classList.add("loaded")  ;
            }); 
          };
  
        },
        cartNumberIncDec: function(){
          $(document).ready(function(){
            
          $(function () {
            $(".button").on("click", function () {
              var $button = $(this);
              var $parent = $button.parent();
              var oldValue = $parent.find('.input').val();
        
              if ($button.text() == "+") {
                var newVal = parseFloat(oldValue) + 1;
              } else {
                // Don't allow decrementing below zero
                if (oldValue > 1) {
                  var newVal = parseFloat(oldValue) - 1;
                } else {
                  newVal = 1;
                }
              }
              $parent.find('a.add-to-cart').attr('data-quantity', newVal);
              $parent.find('.input').val(newVal);
            });
          });
          });
        },

        // cart bar show
        cartBarshow: function () {
          // Cart Bar show & hide
          $(document).on('click', '.cart-icon', function () {
            $(".cart-bar").addClass("show");
            $("#anywhere-home").addClass("bgshow");
          });
          $(document).on('click', '.close-cart', function () {
            $(".cart-bar").removeClass("show");
            $("#anywhere-home").removeClass("bgshow");
          });
          $(document).on('click', '#anywhere-home', function () {
            $(".cart-bar").removeClass("show");
            $("#anywhere-home").removeClass("bgshow");
          });
        }
        
    }

    drJs.m();
  })(jQuery, window) 







