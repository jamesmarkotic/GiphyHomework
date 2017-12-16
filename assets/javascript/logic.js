// Global Variables
var topics = ['penguin', 'cow', 'duck', 'aardvark', 'wombat', 'cat', 'dog', 'pig', 'moose', 'dolphin'];


function animalsDisp() {

      var animal = $(this).attr("data-animal");
      console.log(this)
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=qtoEqSmgfJN7xaLsZYhzDJkxZ2jIM6yt&limit=10";

      $("#gifsDiv").empty();

      $.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {
          var results = response.data;
          for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div class='item' style='float: left;padding: 5px'>");
            var rating = results[i].rating;
            var p = $("<p>").text("Rating: " + rating);
            var animalImage = $("<img>");
            animalImage.attr('data-still', results[i].images.fixed_height_still.url)
            animalImage.attr('data-animate', results[i].images.fixed_height.url)
            animalImage.attr('data-state', 'still')
            animalImage.attr("src", results[i].images.fixed_height.url);
            gifDiv.prepend(p);
            gifDiv.prepend(animalImage);
            $("#gifsDiv").prepend(gifDiv);
          }
        });

//Just Haven't gotten animate of gif to work
        // $("img").on("click", function() {
        //       alert('In click!')
        //       var state = $(this).attr("data-state");
        //       if (state === "still") {
        //         $(this).attr("src", $(this).attr("data-animate"));
        //         $(this).attr("data-state", "animate");
        //       } else {
        //         $(this).attr("src", $(this).attr("data-still"));
        //         $(this).attr("data-state", "still");
        //       }
        // });
    };


function Animals() {
        $("#buttonDiv").empty();
        for (var i = 0; i < topics.length; i++) {
          var derp = $("<button style='margin:  5px 5px'>");
          derp.addClass("animal");
          derp.attr("data-animal", topics[i]);
          derp.text(topics[i]);
          $("#buttonDiv").append(derp);
        }
      }

$('#submit').on('click', function () {
        var animal = $("#animal-input").val().trim();
        topics.push(animal);
        Animals();
})

$(document).on("click", ".animal", animalsDisp);



Animals();
