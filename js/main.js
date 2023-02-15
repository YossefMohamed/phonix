
$(document).ready(function (){


$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();

        $('.opp').css({
        opacity: function() {
            var elementHeight = $(this).height(),
            opacity = ((elementHeight - scrollTop) / elementHeight);
            return opacity;}
            
    });
    
    
    
    
});

$(window).scroll(function() {

    
    if ( $(window).scrollTop() >= 280 ) {
        $('ul').css({'background-color':'white' , 'color': 'black','margin-top':'0'});
        $('.slanted').css({'padding-top': '25px','padding-bottom': '0' });
        $('nav').css({'position': 'fixed'});
          $('.buybut').css({ 'color': 'white'});
    } else {
        $('ul,.slanted,nav ,.butbuy').attr('style', '');

    }
    
    });


    var clicks = 0;

$('.saq').click(function() {
    if (clicks%2==0){
                $('.mob').css({display:'block'});

    } else{
        $('.mob').css({display:'none'});
    }
    ++clicks;
});
    
    
 $('button').click(function(){
     
  var x = $('input').val();   
     document.getElementsByTagName('h1').innerHTML= x ;
     
     
     
 });
 
var countDownDate = new Date("dec 5, 2024 15:37:25").getTime();

var x = setInterval(function() {

  
  var now = new Date().getTime();
  
  var distance = countDownDate - now;
 
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours; document.getElementById("mins").innerHTML = minutes;
    document.getElementById("secs").innerHTML = seconds;
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "EXPIRED";
  }
}, 1000);
    
    
    
    $('.carssa').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:2500,
    responsive:{
        0:{
            items:1.5
        },
        600:{
            items:2.5
        },
        1000:{
            items:3
            
        }
    }
})
    $('.ooww').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:2500,
    responsive:{
        0:{
            items:1.5
        },
        600:{
            items:2.5
        },
        1000:{
            items:5
            
        }
    }
})
    

    
    
});
  

