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
        
        // $('#reset-button').click(function(){
        //     $('#characters').empty()
        //     e.forEach(function (element) {
        //         $('#characters').append(
        //             `
        //         <div class="card" style="width: 18rem;">
        //         <img src="${element.imageUrl}" class="card-img-top">
        //         <div class="card-body">
        //           <h3 class="card-title">${element.fullName}</h5>
        //           <h5 class="card-title">${element.title}</h5>
        //         </div>
        //       </div>
        //       `
        //         )
        //     });
        // })

        $('#name').keyup(function(){
            var input = $('#name').val().toLowerCase()
            var filterdName = e.filter(function(charName){
                var lower = charName.fullName.toLowerCase()
                return lower.includes(input)
            })
            // console.log(filterdName);
            $('#characters').empty()
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
        })

        $('#sort').click(function(){
            var sorted = e.sort(function(a, b){
                if(a.fullName < b.fullName) { return -1; }
                if(a.fullName > b.fullName) { return 1; }
            })
            
            $('#characters').empty()
            sorted.forEach(function (element) {
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
        })
    }
});
})

// function reset (){
//     $.ajax({
//         url: 'https://thronesapi.com/api/v2/Characters',
//         success: function(e) {
//             // console.log(e);
//             e.forEach(function (element) {
//                 $('#characters').append(
//                     `
//                 <div class="card" style="width: 18rem;">
//                 <img src="${element.imageUrl}" class="card-img-top">
//                 <div class="card-body">
//                   <h3 class="card-title">${element.fullName}</h5>
//                   <h5 class="card-title">${element.title}</h5>
//                 </div>
//               </div>
//               `
//                 )
//             });
//         }
//     });
// }

// function getCharacter(){

//     var input = document.getElementById('name').value

//     $.ajax({
//         url: 'https://thronesapi.com/api/v2/Characters',
//         success: function(data) {
//             // console.log(data);
//             var filterdName = data.filter(function(charName){
//                 return charName.fullName.includes(input)
//             })
//             // console.log(filterdName);
//             $('#characters').html('')
//             filterdName.forEach(function (element) {
//                 $('#characters').append(
//                     `
//                 <div class="card" style="width: 18rem;">
//                 <img src="${element.imageUrl}" class="card-img-top">
//                 <div class="card-body">
//                   <h3 class="card-title">${element.fullName}</h5>
//                   <h5 class="card-title">${element.title}</h5>
//                 </div>
//               </div>
//               `
//                 )
//             });
    
//         }
//     })
// }