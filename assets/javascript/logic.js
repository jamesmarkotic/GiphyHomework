// Global Variables
var topics = ['Penguin', 'Cow', 'Duck', 'Aardvark', 'Wombat'];

$('#cow').on('click', function () {
  console.log('I have been clicked!');
  alert('hey');
});


// $("button").on("click", function() {
//   alert('Hey!');
//       var animal = $(this).attr("data-animal");
//       console.log(this)
//       var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//         animal + "&api_key=qtoEqSmgfJN7xaLsZYhzDJkxZ2jIM6yt&limit=10";
//
//       $.ajax({
//           url: queryURL,
//           method: "GET"
//         })
//         .done(function(response) {
//           var results = response.data;
//
//           for (var i = 0; i < results.length; i++) {
//             var gifDiv = $("<div class='item'>");
//
//             var rating = results[i].rating;
//
//             var p = $("<p>").text("Rating: " + rating);
//
//             var personImage = $("<img>");
//             personImage.attr("src", results[i].images.fixed_height.url);
//
//             gifDiv.prepend(p);
//             gifDiv.prepend(personImage);
//
//             $("#gifsDiv").prepend(gifDiv);
//           }
//         });
//     });
