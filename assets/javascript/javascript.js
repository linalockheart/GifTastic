// Global Variables

var topics = ["Pokemon", "Family Guy", "South Park", "Kim Possible", "Spongebob Squarepants",
            "Rugrats", "Doug", "Animaniacs", "Daria", "Powerpuff Girls", "The Simpsons",
            "Hey Arnold!", "Arthur","Recess", "Dexter's Laboratory", "Sailor Moon", "Aaahh!!! Real Monsters",
            "Magic School Bus", "Batman: The Animated Series", "Angry Beavers", "Rocket Power", "Digimon"];

// var gifsDisplayed = 10;

// var gifRating = "PG13";

// Functions 

function createButtons(){
	for(var i = 0; i < topics.length; i++) {
		var newButton = $("<button>");
		newButton.addClass("cartoon-btn"); //for styling in CSS
		newButton.attr("data-cartoon", topics[i]);
		newButton.html(topics[i]);
		$("#button-container").append(newButton);
    }

    $("button").on("click", function() {
        var cartoon = $(this).attr("data-cartoon");
        console.log(cartoon);

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        cartoon + "&api_key=1iAR8M7tDiwTHFtGCIIKpbicRTTCb1Aj";
        console.log(queryURL);

          
    $.ajax({
        url: queryURL,
        method: "GET"
    })

        .then(function(response) {
            var results = response.data;
            console.log(results);

            for (var i = 0; i < 15; i++) {
                var cartoonDiv = $("<div>");
                var p = $("<p>").text("Rating: " + results[i].rating);
                var cartoonImage = $("<img>");
                cartoonImage.attr("src", results[i].images.fixed_height_still.url);
                cartoonDiv.append(p);
                cartoonDiv.append(cartoonImage);
                $("#gifs-appear-here").prepend(cartoonDiv);
              }




    })
})







          
  

      };

// Call Functions

createButtons();

// $(document).ready(function(){
// 	createButtons();
	// $("#submit").on("click", function(){
	// 	event.preventDefault();
	// 	addButton($("#cartoon-show").val().trim());
	// 	$("#cartoon-show").val("");
	// });
// });
