        //Part 1
        var userChoice;
        var randomNumber;
        var computerChoice;

        userChoice = prompt("heads or tails");

        randomNumber = Math.random();

        if (randomNumber < 0.5) {
          randomNumber = 0
        } else {
          randomNumber= 1
        }

        if (randomNumber == 0) {
            computerChoice = "heads";
        } else {
            computerChoice = "tails";
        }

        if (userChoice == computerChoice) {
            alert("You guessed right! The coin flip landed on " + userChoice);
        } else {
            if (computerChoice == "heads") {
                alert("Sorry, the coin flip landed on heads");
            }else if (computerChoice == "tails"){
                alert("Sorry, the coin flip landed on tails"); 
            }
        }
        
        //Part 2
        let birthYear;
        birthYear = prompt("What year were you born?");

        let userAge = 2023 - birthYear;

        if (userAge < 21) {
            alert("Sorry, you are not old enough to drink in the US");
        } else if (userAge == 21) {
            alert("You are old enough to drink in the US...barely");
        } else {
            alert("You are old enough to drink in the US");
        }