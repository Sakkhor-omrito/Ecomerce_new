$(function($){
//menu js
$('.mobile_menu_left ul li').on('click',function(){
//   $('.mobile_menu_left ul li').removeClass('active');
  $(this).toggleClass('active');
});
//toggle category menu js
$('.toggle_catergory_header').on('click',function(){
  $('.toggle_catergory_header i.fa-angle-down').toggleClass('toggle_icon');
  $('.toggle_catergory_menu').slideToggle(500);
});


  //banner js
  $('.banner_slider').slick({
    autoplay:true,
    dots:true,
    prevArrow:false,
    nextArrow:false,
    dotsClass:'banner_dots',
    autoplaySpeed:2000,
    speed:2000,
  });
// middle slider
  //wow js
  $('.best_catergory_slide').slick({
    autoplay:true,
    dots:true,
    prevArrow:false,
    nextArrow:false,
    dotsClass:'banner_dots',
    autoplaySpeed:2000,
    speed:2000,
  });
  //wow js
  new WOW().init();

  // swipper js
  var swiper = new Swiper(".product_list_slider", {
    slidesPerView: 1,
    grid: {
      rows: 3,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
    breakpoints: {
     
      500: {
        slidesPerView: 2,
        grid: {
          rows: 2,
        },
      },
      992: {
        slidesPerView: 3,
      },
    },

  });

  //menu js
  let menutop=$('#header_menu').offset().top;
 
  //scroll effect 
  $(window).on('scroll',function(){
     let scrollToTop=$(window).scrollTop();
    
     // menu js
     if(scrollToTop>400){
      $('#header_menu').addClass("menufix");
     }else{
      $('#header_menu').removeClass("menufix");
     }
  });

  //back to top
  $('.backTOp').on('click',function(){
  
    $("html,body").animate({
      scrollTop:0
    },500);
  });

  // product part slick
  $('.swipper_slider').slick({
    autoplay:false,
    dots:false,
    prevArrow:'<i class="fa-solid fa-angle-left swipper_arrow service_left"></i>',
    nextArrow:'<i class="fa-solid fa-angle-right swipper_arrow  service_right"></i>',
    dotsClass:'swipper_slider',
    autoplaySpeed:2000,
    speed:2000,
  });
// zoom js
// $('.imgZoom').mooZoom(options);

// zoom js
// $('.imgZoom').mooZoom({

  // <a href="https://www.jqueryscript.net/tags.php?/Magnifying Glass/">Magnifying Glass</a> options
//   zoom: {
//     width: 100,
//     height: 100,
//     zIndex: 600,
//   },

//   // Overlay options
//   overlay: {
//     opacity: 0.65,
//     zIndex: 500,
//     backgroundColor: '#ffffff',
//     fade: false,
//   },

//   // Options for the magnified image
//   detail: {
//     opacity: 1,
//     zIndex: 600,
//     margin: {
//       top: 0,
//       left: 0,
//     },                    
//     fade: false,
//   },

//   // duration of animation in ms
//   animationDuration: 1000,

// });

var options = {
  zoom: {
      width:100,
      height: 100,
      zIndex: 600
  },
  overlay: {
      opacity: 0.65,
      zIndex: 500,
      backgroundColor: '#000000',
      fade: true
  },
  detail: {
      zIndex: 600,
      margin: {
          top: 0,
          left: 10
      },
      fade: true
  }
};
jQuery(document).ready(function() {
  jQuery('.imgZoom').mooZoom(options);
});

});