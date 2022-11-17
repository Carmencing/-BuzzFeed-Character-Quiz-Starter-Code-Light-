document.addEventListener('DOMContentLoaded', buzzfeedQuiz, false);

function buzzfeedQuiz() {

  // task 4: declare variables for the html elements you'll use as selectors later. You need the submit button, display div, and all three inputs for your questions.

  let button = document.querySelector(".submit");
  let displayResult = document.querySelector(".displayResult");
  let q1 = document.querySelector(".q1");
  let q2 = document.querySelector(".q2");
  let q3 = document.querySelector(".q3");
  let q4 = document.querySelector(".q4");
  let submit = document.querySelector(".submit");

  // task 5: declare variables for values we'll set later. You'll need one for an image source, a result and a score for each question.
  let togedemaruPic = "https://img.pokemondb.net/artwork/large/togedemaru.jpg";
  let dedennePic = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/702.png";
  let pachirisuPic = "https://img.pokemondb.net/artwork/large/pachirisu.jpg";
  let emolgaPic = "https://archives.bulbagarden.net/media/upload/b/b4/587Emolga.png";
  let morpekoPic = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/877.png";

  let userScore = 0;



  button.onclick = function() {

    // task 6: Declare user input variables for each of your questions. If you have three questions, you should have three variables. These variables should equal the value of the user input for each question.
    let q1Response = q1.value;
    let q2Response = q2.value;
    let q3Response = q3.value;
    let q4Response = q4.value;

    // task 7: create a conditional statement for the responses to Question 1 based on the user input.
    if (q1Response === "gummy bears") {
      userScore += 2;
    } else if (q1Response === "dove chocolate") {
      userScore += 3;
    } else if (q1Response === "pop rocks") {
      userScore += 4;
    } else {
      userScore += 5;
    }




    // task 8: create a conditional statement for the responses to Question 2 based on the user input.

    if (q2Response === "white") {
      userScore += 2;
    } else if (q2Response === "gray") {
      userScore += 3;
    } else if (q2Response === "black") {
      userScore += 4;
    } else {
      userScore += 5;
    }



    // task 9: create a conditional statement for the responses to Question 3 based on the user input.
    if (q3Response === "tennis shoes") {
      userScore += 2;
    } else if (q3Response === "boots") {
      userScore += 3;
    } else if (q3Response === "sandals") {
      userScore += 4;
    } else {
      userScore += 5;
    }

    //question 4
    if (q4Response === "dyed a natural color") {
      userScore += 2;
    } else if (q4Response === "my natural color") {
      userScore += 3;
    } else if (q4Response === "dyed an unnatural color") {
      userScore += 4;
    } else {
      userScore += 5;
    }



    // task 10: declare a variable for the total score of the quiz and set it equal to the sum of each question score.


   
    // task 11: create a conditional statement for the result to the quiz based on the total score. Using string interpolation, display these to the page: the result, an image that corresponds and a message to go with it.
    if (userScore <= 8) {
      displayResult.innerHTML = "Togedemaru";
      displayResult.insertAdjacentHTML('beforeend', `<img src = ${togedemaruPic}>`)
    } else if (userScore >= 9 && userScore <= 13) {
      displayResult.innerHTML = "Dedenne";
      displayResult.insertAdjacentHTML('beforeend', `<img src = ${dedennePic}>`)
    } else if (userScore >= 14 && userScore <= 16) {
      displayResult.innerHTML = "Pachirisu";
      displayResult.insertAdjacentHTML('beforeend', `<img src = ${pachirisuPic}>`)
    } else if (userScore >= 17 && userScore <= 19) {
      displayResult.innerHTML = "Emolga";
      displayResult.insertAdjacentHTML('beforeend', `<img src = ${emolgaPic}>`)
    }
    else {
      displayResult.innerHTML = "Morpeko";
      displayResult.insertAdjacentHTML('beforeend', `<img src = ${morpekoPic}>`)
    }
 console.log(userScore);






  };
}