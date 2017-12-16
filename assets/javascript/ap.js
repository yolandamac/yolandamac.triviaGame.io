$( document ).ready(function() {
  var thirtySec = setTimeout(thirtySecMark, 30000);
  var sixtySec = setTimeout(timeUp, 60000);

function thirtySecMark() {
  $("#time-left").html("<div>30 Seconds Left!</h2>");
}

function timeUp() {
  $("#time-left").html("<h2>Time's Up!</h2>");
  endGame();
}


var pos = 0, quiz, quiz_status, questionSection, choices, answerA, answerB, answerC, answerD, correct = 0;


var questions = [
  ["How many movies did Elvis Presley make as an actor?", "9", "20", "31", "50", "C"],
  ["What is Elvis Presley's most commercially successful movie?", "Love Me Tender", "Jailhouse Rock", "G.I. Blues", "Blue Hawaii", "D"],
  ["What happened to Dolores Hart, Elvis' co-star in 'Loving You' and 'King Creole'?", "Won an Oscar", "Became a Nun", "Became a Web Developer", "Directed the Rest of His Movies", "B"],
  ["What part of his image did Elivs lose after returning to films from his army service?", "His Sideburns", "Wearing Glasses", "Wearing a Watch", "His Moustache", "A"],
  ["What did Elvis do to keep in shape while making movies?", "Kick Boxing", "Weight Lifting", "Karate", "Jogging", "C"]
];

renderQuestion();

$(".button").click(checkAnswer);

function get(x){
  return document.getElementById(x);
}

function renderQuestion(){
  quiz = get("questionSection");


  question = questions[pos][0];
  answerA = questions[pos][1];
  answerB = questions[pos][2];
  answerC = questions[pos][3];
  answerD = questions[pos][4];
  quiz.innerHTML = "<h3>"+question+"</h3>";


  quiz.innerHTML += "<input type='radio' name='choices' value='A'> "+answerA+"<br>";
  quiz.innerHTML += "<input type='radio' name='choices' value='B'> "+answerB+"<br>";
  quiz.innerHTML += "<input type='radio' name='choices' value='C'> "+answerC+"<br>";
  quiz.innerHTML += "<input type='radio' name='choices' value='D'> "+answerD+"<br><br>";
}

function checkAnswer(){
  var choice;
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
      break;
    }
  }


  if (choice == null) {
    return;
  }


  if(choice == questions[pos][5]){

    correct++;
  }



  pos++;

 if(isGameOver()) {
    endGame();


 } else {
  renderQuestion();

 }

}

function isGameOver () {

  if(pos === 5) {
    return true;
  }
  return false;
}

function endGame () {
    clearTimeout(thirtySec);
    clearTimeout(sixtySec);
    $(".button").hide();
    $("#questionSection").html("<h2>You got "+correct+" of "+questions.length+" questions correct</h2>");

    pos = 0;
    correct = 0;

}


});

