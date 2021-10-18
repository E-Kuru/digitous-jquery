$(function(){

    $(".btn").click(function(){
        $("#square").animate({
            'bottom':'0',
            'right':'0'
        }, 2000, function() { 
        });
    });
})