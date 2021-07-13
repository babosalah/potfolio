
$(document).ready(function(){

    $(".card").mouseover(
        function(){
    
           $(".ddd").show(3000).hide(3000);
         //  $("p").show();
         //$("p").hide() ; 
    
        });
    });


$(function(){

   
    
    // scroll to top
    
    $('#scroll-to-top').click(function(){
        $("html,body").animate({scrollTop: 0},1000)
     });
    
    
     //trigger nice croll
     $('html').niceScroll({
    
        cursorcolor: '#051e34' ,
        cursorwidth: '9px',
        corsorborder: '1px solid #d31336',
        corsorborderradius:0,
        zindex:99999
    
     });
     //////////////////

     $(".services").click({

    function () {
        $(".card").hidde();
        
    } })

    
    });




      
      
        