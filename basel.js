
$(function(){

   
    
    // scroll to top
    
    $('#scroll-to-top').click(function(){
        $("html,body").animate({scrollTop: 0},1000)
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


      
      
        
