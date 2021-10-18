$(function(){

    $(".btn").click(function(){
        $('#bg').css('position','relative')
        $('#bg').animate({
            top:'15px',
            left:'100px'
        }, 2000, function() { 
        });
    });
})