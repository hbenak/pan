import $ from 'jquery'

$(function(){               
  var $win = $(window);
  var $box = $('.box-video-player');

  $win.on("click.Bst", function(event){      
    if ( $box.has(event.target).length == 0 && !$box.is(event.target)){
      $('iframe').attr('src', "https://www.youtube.com/embed/x-QKn_GxLwU?controls=0");
    } else {
      $('iframe').attr('src', "https://www.youtube.com/embed/x-QKn_GxLwU?rel=0&amp;autoplay=1");
    }
  });
});