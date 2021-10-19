$(function(){

    $(".btn").click(function(){
        $("#text").animate({
            'font-size': '50px'
        }, 2000, function() { 
        });
    });
})