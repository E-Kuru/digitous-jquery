$(function (){

    $('.btn').click(function(){
        appear('#text')
    })

    function appear (e){
        $(e).show()
    }
})