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

function reset (){
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
}

function getCharacter(){

    var input = document.getElementById('name').value

    $.ajax({
        url: 'https://thronesapi.com/api/v2/Characters',
        success: function(data) {
            console.log(data);
            var filterdName = data.filter(function(charName){
                return charName.fullName.includes(input)
            })
            console.log(filterdName);
            $('#characters').html('')
            filterdName.forEach(function (element) {
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
    })
}