$(function(){

    $(".btn").click(function(){
        $('input').removeClass('is-invalid')
        $('input').removeClass('is-valid')
    if($('input').val().length >= 5){
        $('input').addClass('is-valid')
    }
    else{
        $('input').addClass('is-invalid')
    }
});
})