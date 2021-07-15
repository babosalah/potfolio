
/*$(document).ready(function(){

    $(".card").mouseover(
        function(){
    
           $(".ddd").show(3000).hide(3000);
         //  $("p").show();
         //$("p").hide() ; 
    
        });
    });
*/
$(function(){

   
    
    // scroll to top
    
    $('#scroll-to-top').click(function(){
        $("html,body").animate({scrollTop: 0},1000)
     });
    
    
     //trigger nice croll
     $('html').niceScroll({
    
        cursorcolor: '#051e34' ,
        cursorwidth: '10px',
     
        corsorborderradius:0,
        zindex:99999
    
     });
     
    //smooth scroll
    //1
    $('.resume').click(function(){
    
        $('html , body').animate({
    
            scrollTop: $('.about-me').offset().top
    
        },1000);
    
    });
    //2
    $('.services').click(function(){
    
        $('html , body').animate({
    
            scrollTop: $('.service').offset().top
    
        },1500);
    
    });
//3


    $('.pricing').click(function(){
    
        $('html , body').animate({
    
            scrollTop: $('.pricing-plans').offset().top
    
        },1500);
    
    });
//4
$('.blog').click(function(){
    
    $('html , body').animate({

        scrollTop: $('.latest-post').offset().top

    },1500);

});


//5
    $('.contact').click(function(){
    
        $('html , body').animate({
    
            scrollTop: $('.cont').offset().top
    
        },2000);
    
    });

});


      
      
        
