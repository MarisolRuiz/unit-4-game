// Computer selects a random number between 19-120 and displays it on the screen
// Each Crystal has a random hidden value between 1-12
// When user clicks on a crystal, it will add a specific amount of points to the players total score
// User wins if their total score matches the random number from the beginning of the game - wins go up by 1
// User loses if their schore goes above the random number - losses go up by 1
// The game restarts whenever the user winds or loses
// When the game begins again, the user should see a new random random number. Also, all the crystals will have four new hidden values

$(document).ready(function() {

    var wins = 0;
    var losses = 0;
    var score = 0;
   
        var randomNumber = Math.floor(Math.random() * (120 - 19) + 19);
    
        $("#targetNumber").text(randomNumber);
        $("#totalScore").text(score);
        $("#wins").text("Wins:" + " " + wins);
        $("#losses").text("Losses:" + " " + losses);
    
        var crystalImages = ["./assets/images/red.png", "./assets/images/blue.png" , "./assets/images/yellow.png" , "./assets/images/green.png"];
        
        function setData() {
            for (var i = 0; i < crystalImages.length; i++) {
    
            var image = $('<img>');
    
            image.addClass('ghostImage');
    
            image.attr('src', crystalImages[i]);
    
            image.attr('data-crystalvalue', Math.floor(Math.random() * 12) + 1);
    
            $("#crystals").append(image);
    
            }
        }
    
        setData();
        
        
        $(".ghostImage").on("click", function () {
    
            var crystalValue = ($(this).data("crystalvalue"));
    
            score = score + crystalValue;
    
            $("#totalScore").text(score);
    
            if (score === randomNumber) {
                wins++;
                $("#wins").text("Wins:" + " " + wins);
                $("#outcome").text("WINNER!");
    
            }else if (score > randomNumber) {
                losses++;
                $("#losses").text("Losses:" + " " + losses);
                $("#outcome").text("You Lose!");
            }
            if (score === randomNumber || score > randomNumber) {
                // Selection of new random number
                randomNumber = Math.floor(Math.random() * (120 - 19) + 19);
                score = 0;
                $("#targetNumber").text(randomNumber);
                $("#totalScore").text(score);
        
    
            }
    
        });
    
    });
    
    
    
    