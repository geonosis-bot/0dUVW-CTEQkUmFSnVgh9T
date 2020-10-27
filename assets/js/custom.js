(function ($) {
  "use strict";

  var review_part_cotent = $(".review_part_cotent");
  if (review_part_cotent.length) {
    review_part_cotent.owlCarousel({
      items: 2,
      loop: true,
      dots: false,
      autoplay: true,
      margin: 40,
      autoplayHoverPause: true,
      autoplayTimeout: 5000,
      nav: true,
      navText: [
        '<span class="flaticon-left-arrow"></span>',
        '<span class="flaticon-arrow-pointing-to-right"></span>',
      ],
      responsive: {
        0: {
          nav: false,
          items: 1,
        },
        575: {
          nav: false,
          items: 2,
        },
        991: {
          nav: true,
          items: 1,
        },
        1200: {
          nav: true,
          items: 2,
        },
      },
    });
  }
  //   $('.popup-youtube, .popup-vimeo').magnificPopup({
  //     // disableOn: 700,
  //     type: 'iframe',
  //     mainClass: 'mfp-fade',
  //     removalDelay: 160,
  //     preloader: false,
  //     fixedContentPos: false
  //   });

  var review = $(".textimonial_iner");
  if (review.length) {
    review.owlCarousel({
      items: 1,
      loop: true,
      dots: true,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 5000,
      nav: false,
      responsive: {
        0: {
          margin: 15,
        },
        600: {
          margin: 10,
        },
        1000: {
          margin: 10,
        },
      },
    });
  }
  $(document).ready(function () {
    $("select").niceSelect();
  });
  // menu fixed js code
  $(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 50) {
      $(".main_menu").addClass("menu_fixed animated fadeInDown");
    } else {
      $(".main_menu").removeClass("menu_fixed animated fadeInDown");
    }
  });

  //   $(document).ready(function(){

  //     var owl_1 = $('#owl-1');
  //     var owl_2 = $('#owl-2');

  //     owl_1.owlCarousel({
  //       loop:true,
  //       margin:10,
  //       nav:false,
  //       items: 1,
  //       dots: false,
  //       navText: false,
  //       autoplay: true,

  //     });
  //  owl_2.find(".item").click(function(){
  //     var slide_index = owl_2.find(".item").index(this);
  //     owl_1.trigger('to.owl.carousel',[slide_index,300]);
  //   });

  //     owl_2.owlCarousel({
  //       margin:50,
  //       nav: true,
  //       items: 3,
  //       dots: false,
  //       center: true,
  //       loop:true,
  //       navText: false,
  //       autoplay: true,
  //       center: true
  //     });

  //   });

  // $('.counter').counterUp({
  //   time: 2000
  // });

  //   $('.slider').slick({
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     arrows: false,
  //     speed: 300,
  //     infinite: true,
  //     asNavFor: '.slider-nav-thumbnails',
  //     autoplay:true,
  //     pauseOnFocus: true,
  //     dots: true,
  //   });

  //   $('.slider-nav-thumbnails').slick({
  //     slidesToShow: 3,
  //     slidesToScroll: 1,
  //     asNavFor: '.slider',
  //     focusOnSelect: true,
  //     infinite: true,
  //     prevArrow: false,
  //     nextArrow: false,
  //     centerMode: true,
  //     responsive: [
  //       {
  //         breakpoint: 480,
  //         settings: {
  //           centerMode: false,
  //         }
  //       }
  //     ]
  //   });

  /**
   ***************** THE SPACE CUSTOM JS ********************
   **/
  var galleryScript = document.createElement("script");
  galleryScript.setAttribute(
    "src",
    "https://cdnjs.cloudflare.com/ajax/libs/ekko-lightbox/5.3.0/ekko-lightbox.min.js"
  );
  document.head.appendChild(galleryScript);

  // Image lightbox
  $(document).on("click", '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });

  // $(".store-products").slick({
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   //asNavFor: '.slider',
  //   focusOnSelect: true,
  //   infinite: true,
  //   arrows: true,
  //   //dots: true,
  //   //prevArrow: '',
  //   //nextArrow: '',
  //   centerMode: false,
  //   responsive: [
  //     {
  //       breakpoint: 769,
  //       settings: {
  //         slidesToShow: 3,
  //         centerMode: false,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         centerMode: true,
  //       },
  //     },
  //   ],
  // });

  $(".home-sponsor").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    //asNavFor: '.slider',
    focusOnSelect: true,
    infinite: true,
    arrows: true,
    //dots: true,
    //prevArrow: '',
    //nextArrow: '',
    centerMode: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
    ],
  });

  if ($(window).width() > 480) {
    // $(".carousel-sponsor").slick({
    //   slidesToShow: 4,
    //   slidesToScroll: 1,
    //   //asNavFor: '.slider',
    //   focusOnSelect: true,
    //   infinite: true,
    //   arrows: true,
    //   //dots: true,
    //   //prevArrow: '',
    //   //nextArrow: '',
    //   centerMode: false,
    //   responsive: [
    //     {
    //       breakpoint: 480,
    //       settings: {
    //         slidesToShow: 1,
    //         centerMode: true,
    //       },
    //     },
    //   ],
    // });
    // $(".slick-tecnici").slick({
    //   slidesToShow: 6,
    //   slidesToScroll: 1,
    //   //asNavFor: '.slider',
    //   focusOnSelect: true,
    //   infinite: true,
    //   arrows: true,
    //   //dots: true,
    //   //prevArrow: '',
    //   //nextArrow: '',
    //   centerMode: false,
    //   responsive: [
    //     {
    //       breakpoint: 480,
    //       settings: {
    //         slidesToShow: 1,
    //         centerMode: true,
    //       },
    //     },
    //   ],
    // });
  }

  /*$('.dirigenti-list').slick({
     slidesToShow: 4,
     slidesToScroll: 1,
     //asNavFor: '.slider',
     focusOnSelect: true,
     infinite: true,
     arrows: true,
     //dots: true,
     //prevArrow: '',
     //nextArrow: '',
     centerMode: true,
     responsive: [
     {
     breakpoint: 480,
     settings: {
     slidesToShow: 1,
     centerMode: false,
     }
     }
     ]
     });*/

  // Menu Sidebar Multi Level SPACE
  // $(document).ready(function () {
  //   if ($(window).width() <= 1024) {
  //     $("#menu-mobile").css("opacity", "1");
  //     $("#menu-mobile").multilevelpushmenu({
  //       //containersToPush: [$( '#menu-tools' )],
  //       collapsed: true,
  //       direction: "rtl",
  //       fullCollapse: true,
  //       backItemIcon: "fa fa-angle-left",
  //       groupIcon: "fa fa-angle-right",
  //       menuWidth: "80%", // '450px', '30em', '25%' will also work
  //       menuHeight: 1000,
  //       backText: "Indietro",
  //       backItemClass: "menu-indietro",
  //       preventItemClick: true,
  //       onExpandMenuStart: function () {
  //         console.log("menu si apre");
  //         $(".multilevelpushmenu_inactive")
  //           .removeClass("back-transp")
  //           .addClass("back-black");
  //       },
  //       onGroupItemClick: function () {
  //         console.log("Menu gruppo");
  //         var clickedTagName = $(arguments[0].target).prop("tagName");
  //         console.log(clickedTagName.toLowerCase());
  //         if (clickedTagName.toLowerCase() === "a") return false;
  //         return true;
  //       },
  //       onItemClick: function () {
  //         // First argument is original event object
  //         var event = arguments[0],
  //           // Second argument is menu level object containing clicked item (<div> element)
  //           $menuLevelHolder = arguments[1],
  //           // Third argument is clicked item (<li> element)
  //           $item = arguments[2],
  //           // Fourth argument is instance settings/options object
  //           options = arguments[3];

  //         // You can do some cool stuff here before
  //         // redirecting to href location
  //         // like logging the event or even
  //         // adding some parameters to href, etc...

  //         // Anchor href
  //         var itemHref = $item.find("a:first").attr("href");
  //         // Redirecting the page
  //         location.href = itemHref;
  //       },
  //     });
  //     $("#expand-menu").click(function () {
  //       console.log("cliccato menu tool");
  //       $("#collapse-menu").fadeIn(0);
  //       $("#expand-menu").fadeOut(0);
  //     });
  //     $("#collapse-menu").click(function () {
  //       $("#expand-menu").fadeIn(0);
  //       $("#collapse-menu").fadeOut(0);
  //     });
  //     $("#expand-menu").click(function () {
  //       $("#menu-mobile").multilevelpushmenu("expand");
  //     });
  //     $("#collapse-menu").click(function () {
  //       $("#menu-mobile").multilevelpushmenu("collapse");
  //     });
  //   } else {
  //     $("#menu-mobile").css("display", "none");
  //   }
  // });

  // pagina squadre The Space
  if ($("body").hasClass("squadre-dati") || $("body").hasClass("contatti")) {
    $(".container-fluid div a").click(function () {
      $(this).find("i").toggleClass("fa-plus fa-minus");
    });
  }

  // rimuoviamo classi padding per smartphone The Space
  if ($(window).width() <= 480) {
    console.log("Space rimuoviamo classe px-5 per Smartphone");
    $(".container-fluid").each(function () {
      if (!$(this).parents(".footer-area").length) {
        $(this).removeClass("px-5");
      }
    });
    $(".space-societa").removeClass("top50");
    //$('body').find('.container-fluid').removeClass('px-5');
  }

  // bootstrap dropdown menu preveniamo la chiusura
  $(document).on("click", ".dropdown-menu.dropdown-menu-form", function (e) {
    e.stopPropagation();
  });

  //rimuovo bordo quando il pannello è aperto
  $(".tab-pane a").each(function () {
    $(this).click(function () {
      var tagA = $(this);
      setTimeout(function () {
        var aria = tagA.attr("aria-expanded");
        if (aria == "true") {
          console.log("aperto");
          $(tagA).parent("div").addClass("no-border");
        } else {
          console.log("chiuso");
          $(tagA).parent("div").removeClass("no-border");
        }
      }, 50);
    });
  });

  $(".contatti .align-items-left a").each(function () {
    $(this).click(function () {
      var tagA = $(this);
      setTimeout(function () {
        var aria = tagA.attr("aria-expanded");
        if (aria == "true") {
          console.log("aperto");
          $(tagA).parent("div").addClass("no-border");
        } else {
          console.log("chiuso");
          $(tagA).parent("div").removeClass("no-border");
        }
      }, 50);
    });
  });

  $("#menu-mobile").click(function () {
    $(this).toggleClass("hiddenmenu");
  });

  // filtri notizie smartphone
  if ($(window).width() <= 480) {
    $(".select.search .fa-search").click(function () {
      $(this).parent().parent().toggleClass("allargati");
    });
  }

  // Gallery Nostra Sede
  let modalId = $("#image-gallery");

  $(document).ready(function () {
    loadGallery(true, "a.space-thumb");

    //This function disables buttons when needed
    function disableButtons(counter_max, counter_current) {
      $("#show-previous-image, #show-next-image").show();
      if (counter_max === counter_current) {
        $("#show-next-image").hide();
      } else if (counter_current === 1) {
        $("#show-previous-image").hide();
      }
    }

    /**
     *
     * @param setIDs        Sets IDs when DOM is loaded. If using a PHP counter, set to false.
     * @param setClickAttr  Sets the attribute for the click handler.
     */

    function loadGallery(setIDs, setClickAttr) {
      let current_image,
        selector,
        counter = 0;

      $("#show-next-image, #show-previous-image").click(function () {
        if ($(this).attr("id") === "show-previous-image") {
          current_image--;
        } else {
          current_image++;
        }

        selector = $('[data-image-id="' + current_image + '"]');
        updateGallery(selector);
      });

      function updateGallery(selector) {
        let $sel = selector;
        current_image = $sel.data("image-id");
        $("#image-gallery-title").text($sel.data("title"));
        $("#image-gallery-image").attr("src", $sel.data("image"));
        disableButtons(counter, $sel.data("image-id"));
      }

      if (setIDs == true) {
        $("[data-image-id]").each(function () {
          counter++;
          $(this).attr("data-image-id", counter);
        });
      }
      $(setClickAttr).on("click", function () {
        updateGallery($(this));
      });
    }
  });

  // build key actions
  $(document).keydown(function (e) {
    switch (e.which) {
      case 37: // left
        if (
          (modalId.data("bs.modal") || {})._isShown &&
          $("#show-previous-image").is(":visible")
        ) {
          $("#show-previous-image").click();
        }
        break;

      case 39: // right
        if (
          (modalId.data("bs.modal") || {})._isShown &&
          $("#show-next-image").is(":visible")
        ) {
          $("#show-next-image").click();
        }
        break;

      default:
        return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
  });

  //spostiamo blocco condivisione social mobile
  if ($(window).width() <= 480) {
    $(".utility").addClass("mt-4 mb-4");
    console.log("smartphone");
    $(".news-archive .container-fluid").each(function () {
      var utilityBlock = $(this).find(".utility").detach();
      $(".row", this).append(utilityBlock);
    });
  }

  /**
   *  ********************* FINE CUSTOM JS THE SPACE ***********************
   */

  //remove active class from all thumbnail slides
  $(".slider-nav-thumbnails .slick-slide").removeClass("slick-active");

  //set active class to first thumbnail slides
  $(".slider-nav-thumbnails .slick-slide").eq(0).addClass("slick-active");

  // On before slide change match active thumbnail to current slide
  $(".slider").on("beforeChange", function (
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    var mySlideNumber = nextSlide;
    $(".slider-nav-thumbnails .slick-slide").removeClass("slick-active");
    $(".slider-nav-thumbnails .slick-slide")
      .eq(mySlideNumber)
      .addClass("slick-active");
  });

  //UPDATED

  $(".slider").on("afterChange", function (event, slick, currentSlide) {
    $(".content").hide();
    $(".content[data-id=" + (currentSlide + 1) + "]").show();
  });

  //  $('.img-pop-up').magnificPopup({
  //   type: 'image',
  //   gallery:{
  //     enabled:true
  //   }
  // });

  $(window).on("load", function () {
    if (document.getElementById("portfolio")) {
      var $workGrid = $(".portfolio-grid").isotope({
        itemSelector: ".all",
      });
    }

    $(".portfolio-filter ul li").on("click", function () {
      $(".portfolio-filter ul li").removeClass("active");
      $(this).addClass("active");

      var data = $(this).attr("data-filter");
      $workGrid.isotope({
        filter: data,
      });
    });
  });

  // ------------------------------------------------
  // mobile menu toggle
  // ------------------------------------------------
  $(".mobile-menu-open").on("click", function () {
    $(".mobile-menu").fadeIn();
    $("html").addClass("mobile-menu-open");
  });

  $(".mobile-menu-close").on("click", function () {
    $(".mobile-menu").fadeOut();
    $("html").removeClass("mobile-menu-open");
  });

  $(".mobile-teams-menu-open").on("click", function () {
    $(".mobile-teams-menu").fadeIn();
  });

  $(".mobile-teams-menu-close").on("click", function () {
    $(".mobile-teams-menu").fadeOut();
  });

  $("ul > li.submenu > a").on("click", function () {
    console.log("click");
    $(this).next("ul").slideToggle();
  });

  // ------------------------------------------------
  // next matches effect scroll / carousel
  // ------------------------------------------------

  if ($(window).width() > 767) {
    $(".marquee").marquee({
      duration: 20000,
      delayBeforeStart: 0,
      direction: "left",
      startVisible: true,
      pauseOnHover: true,
      duplicated: true,
    });
  }

  if ($(window).width() <= 767) {
    $(".next-matches-carousel").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      focusOnSelect: false,
      infinite: true,
      arrows: false,
      autoplay: true,
    });
  }

  // ------------------------------------------------
  // sponsor carousel
  // ------------------------------------------------
  $(".carousel-sponsor").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    focusOnSelect: true,
    infinite: true,
    arrows: false,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
})(jQuery);
