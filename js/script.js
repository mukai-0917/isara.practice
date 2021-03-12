$(function(){

 
    $('header a,#second a').click(function(){

      var target=$($(this).attr('href')).offset().top;

      target-=60;

      $('html,body').animate({scrollTop:target},500);

      return false;
    })

    $(window).on('load resize', function(){
      var winW = $(window).width();
      var devW = 768;
      if (winW <= devW) {
        $('.head1').hide();
        $('.head2').show();
      } else {
        $('.head2').hide();
        $('.head1').show();
      }
    });

    $('.puestion-box p').hide();

    $('.puestion-box a').addClass('mark1');

    $('.puestion-box a').click(function(){

      $(this).next('p').slideToggle(200);

      if($(this).hasClass('mark1')){
        $(this).removeClass().addClass('mark2');
      }else{
        $(this).removeClass().addClass('mark1');
      }

      return false;
    })

    $(window).scroll(function(){
      if($(window).scrollTop()<100){
        $('button').fadeOut();
      }else{
        $('button').fadeIn();
      }
    });

    $('button').click(function(){
      $('html, body').animate({scrollTop:0},500);
      return false;
    });

    var $win = $(window);

  $win.on('load resize', function() {
    var windowWidth = window.innerWidth;

    if (windowWidth < 768) {
      
      $('.eleven-right').hide();

      $('.eleven-box').addClass('mark1')

      $('.eleven-box').click(function(){

        $(this).children('.eleven-right').stop(true).slideToggle(200);
      })
    } else{
      $('.eleven-right').show();
    }
  });
  



})