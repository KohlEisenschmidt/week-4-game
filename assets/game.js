



$(document).ready(function(){
    
    var numbertoguess =0;
    var wins = 0;
    var losses =0;
    var yourscore =0; 
    
    

     var targetNumber=Math.floor(Math.random()*101) +19;
    $("#Number-To-Guess").text(targetNumber);

    


     var crystalRcounter=Math.floor(Math.random()*11) +1;
    $("#crystals").on("click", "#crystal-imageR", function() {
        yourscore = yourscore + crystalRcounter 

        alert("New score: " + yourscore);

        $("#score").text(yourscore);

    if (yourscore === targetNumber) {
        alert("you win!");
        wins++;
        $("#wins").text(wins);
    }

    else if (yourscore >= targetNumber) {
        alert("You lose!!");
        losses++
        $("#losses").text(losses);
    }
    });

    var crystalBcounter=Math.floor(Math.random()*11) +1;
    $("#crystals").on("click", "#crystal-imageB", function() {
        yourscore = yourscore + crystalBcounter 
    
        alert("New score: " + yourscore);

        $("#score").text(yourscore);

    if (yourscore === targetNumber) {
        alert("you win!");
        wins++;
        $("#wins").text(wins);
    }

    else if (yourscore >= targetNumber) {
        alert("You lose!!");
        losses++
        $("#losses").text(losses);
    }
    });
    
    var crystalYcounter=Math.floor(Math.random()*11) +1;
    $("#crystals").on("click", "#crystal-imageY", function() {
        yourscore = yourscore + crystalYcounter 
    
        alert("New score: " + yourscore);

        $("#score").text(yourscore);

    if (yourscore === targetNumber) {
        alert("you win!");
        wins++;
        $("#wins").text(wins);
    }

    else if (yourscore >= targetNumber) {
        alert("You lose!!");
        losses++
        $("#losses").text(losses);
    }
    });
    
    var crystalGcounter=Math.floor(Math.random()*11) +1;
    $("#crystals").on("click", "#crystal-imageG", function() {
        yourscore = yourscore + crystalGcounter 
    
        alert("New score: " + yourscore);

        $("#score").text(yourscore);

    if (yourscore === targetNumber) {
        alert("you win!");
        wins++;
        $("#wins").text(wins);
    }

    else if (yourscore >= targetNumber) {
        alert("You lose!!");
        losses++
        $("#losses").text(losses);
    }
    });
       
    var reset = function(){
        if (wins++){
        numbertoguess =0;
        yourscore =0; 
        }
        if (losses++){
        numbertoguess =0;
        yourscore =0;    
        }
    }



});





