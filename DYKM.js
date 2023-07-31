import readlinesync from "readline-sync";

//defining vars and all
var uName = readlinesync.question("Enter your name: ");
console.log("CAUTION ENTER ONLY IN LOWER CASE")
console.log("Welcome " + uName + " let us begin the quiz.");

//highscores 
var highScores = [ {
  name: "Satish",
  HScore: 5
}, {
  name: "Harsh",
  Hscore: 5
}, {
  name: "Samrat",
  HScore: 5
}, {
  name: "Anju",
  Hscore: 5
}];

var score = 0;


//questions and Answers
var questions = [ {
  question: "in which month was samrat born?? ",
  answer: "july"
} , {
  question: "What is samrat's most commonly used nickname? ? ",
  answer: "sam"
}, {
  question: "What is Samrat's pet name?? ",
  answer: "akshu"
} , {
  question: "What is Samrat's elder brother's first name? ",
  answer: "harsh"
} , {
  question: "In which year was Samrat Vashisht born? ",
  answer: "2005"
}];



function play(question, answer) {
  var userAns = readlinesync.question("Your question is: " + question);
  if (userAns.toLowerCase == answer) {
    console.log("You are correct!");
    score = score + 1;
  } else {
    console.log("Oops, you got this wrong :(");
    console.log("The correct answer is " + answer)
  }
  console.log("Your Score is: " + score);
}
for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}
if (score<2) {
  console.log("You can do better")
} else {
  console.log("Thank you for playing!")
}
console.log("~~~~~~~~")