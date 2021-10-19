$(function(){

    $(".btn").click(function(){
        $("#square").animate({
            width: '500px'
        }, 2000, function() { 
        });
    });
})