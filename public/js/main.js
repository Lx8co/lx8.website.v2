$(document).ready(function(){
  $('.parallax').parallax();

  $(document).ready(function(){
    $('.slider').slider({full_width: true});
  });

});


// /*
//  Author: Lx8.co
//  Description: All the interactivity of the site
//  - Scrolling menu
// */
//
// $(function() {
//
//     $(window).scroll(function() {
//         var windowHeight = $(window).height();
//         var windowScrollPosTop = $(window).scrollTop();
//         var windowScrollPosBottom = windowHeight + windowScrollPosTop;
//         /* Taking the header height */
//         var objectOffset = $('.nav-wrapper').offset();
//         var objectOffsetTop = objectOffset.top;
//
//         $('.scrollShow').html(windowScrollPosTop);
//
//         if ( windowScrollPosBottom > objectOffsetTop ) {
//           $(.nav-wrapper).addclass('.nav-fixed');
//         };
//
//
//
//     })
// });
