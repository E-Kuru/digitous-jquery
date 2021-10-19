$(function(){
console.log('Beggins here');

$.ajax({
    url: 'https://thronesapi.com/api/v2/Characters',
    success: function(e) {
        console.log(e);
        e.forEach(function (element) {
            document.getElementById('characters').innerHTML += 
                `
            <div class="card" style="width: 18rem;">
            <img src="${element.imageUrl}" class="card-img-top">
            <div class="card-body">
              <h3 class="card-title">${element.firstName} ${element.lastName}</h5>
              <h5 class="card-title">${element.title}</h5>
            </div>
          </div>
          `
        });
    }
});

})