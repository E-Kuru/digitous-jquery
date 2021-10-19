$(function(){

$.ajax({
    url: 'https://thronesapi.com/api/v2/Characters',
    success: function(e) {
        // console.log(e);
        e.forEach(function (element) {
            $('#characters').append(
                `
            <div class="card" style="width: 18rem;">
            <img src="${element.imageUrl}" class="card-img-top">
            <div class="card-body">
              <h3 class="card-title">${element.fullName}</h5>
              <h5 class="card-title">${element.title}</h5>
            </div>
          </div>
          `
            )
        });
    }
});
})

function getCharacter(){
    var name = document.getElementById('name')
    console.log(name.value);
    $.ajax({
        url: 'https://thronesapi.com/api/v2/Characters',
        success: function(data) {
            console.log(data);
            data.filter(function(e){
                return e.fullName === 'Jon Snow'
            })
        }
    })
}