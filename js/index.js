import $ from "jquery";

$(function(){
  $('ul.all>li').on('mouseenter',function(e){    
    $('.prev').css('cursor','pointer');
    $('.next').css('cursor','pointer');
  })

  // gallery 준비하기
  const wli = $('ul.all>li').width();
  // console.log(wli)
  $('ul.all>li:last').prependTo('ul.all');
  $('ul.all').css('margin-left','-'+wli+'px');

 
  timer();
  setInterval(timer,3000);
  ani();
  btn();
})



//  aside event



function ani(){
  const wli = $('ul.all>li').width();
  $('.slide>.prev').on('click',function(e){
    $('ul.all').animate({marginLeft:'+='+wli+'px'},
    function(){
    $('ul.all>li:last').prependTo('ul.all');
    $('ul.all').css('margin-left','-'+wli+'px');
    })
  })
 
  $('.slide>.next').on('click',function(e){
    $('ul.all').animate({marginLeft:'-='+wli+'px'},
    function(){
      $('ul.all').css('margin-left','-'+wli+'px');
      $('ul.all>li:first').appendTo('ul.all');
    })    
  })
}
  
function timer(){
  const wli = $('ul.all>li').width();
    $('ul.all').animate({marginLeft:'-='+wli+'px'},
    function(){
      $('ul.all').css('margin-left','-'+wli+'px');
      $('ul.all>li:first').appendTo('ul.all');
    })
}

function btn(){
  $('.slide').on('mouseenter',function(e){
    $('.prev').css('display','block')
    $('.next').css('display','block')
  })
  $('.slide').on('mouseleave',function(e){
    $('.prev').css('display','none')
    $('.next').css('display','none')
  })
}

// bootstrap




  