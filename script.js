var quizData = [
  {question: "What does DOM stand for?", options: ["Document Object Model", "Data Object Management", "Display Object Method", "Digital Ordinance Model"], correct:0},
  {question: "Which keyword declares a variable in JavaScript?", options: ["int","let","string","varies"], correct:1},
  {question: "What symbol starts a single-line comment?", options: ["//","<!-- -->","#","/* */"], correct:0},
  {question: "Which company created JavaScript?", options: ["Microsoft","Google","Netscape","Apple"], correct:2},
  {question: "Correct extension for JavaScript files?", options: [".js",".java",".javascript",".jvs"], correct:0},
  {question: "Which operator is used to assign a value?", options: ["=","==","===",":"], correct:0},
  {question: "How do you write 'Hello' in an alert box?", options: ["alert('Hello')","msg('Hello')","prompt('Hello')","console('Hello')"], correct:0},
  {question: "Which method adds an element at the end of an array?", options: ["push()","add()","append()","insert()"], correct:0},
  {question: "Which is NOT a JavaScript data type?", options: ["Number","Boolean","Character","Object"], correct:2},
  {question: "What will typeof [] return?", options: ["array","object","list","undefined"], correct:1},
  {question: "How to declare a constant?", options: ["constant","const","let","var"], correct:1},
  {question: "Which is the correct way to write an IF statement?", options: ["if x=5","if(x==5)","if x==5 then","if x=5 then"], correct:1},
  {question: "How to write a for loop in JS?", options: ["for(i=0; i<5; i++)","loop(i=0;i<5)","repeat(5)","for i in range(5)"], correct:0},
  {question: "Which keyword stops a loop?", options: ["stop","break","exit","end"], correct:1},
  {question: "Which function converts JSON string to object?", options: ["JSON.parse()","JSON.stringify()","parse.JSON()","convert.JSON()"], correct:0}
];

var currentQuestion = 0;
var score = 0;

function showQuestion() {
  var q = quizData[currentQuestion];
  document.getElementById("question").textContent = q.question;
  var optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  for (var i = 0; i < q.options.length; i++) {
    var btn = document.createElement("button");
    btn.textContent = (i+1) + ". " + q.options[i];
    btn.setAttribute("data-index", i);
    btn.onclick = checkAnswer;
    optionsDiv.appendChild(btn);
  }
}

function checkAnswer() {
  var selected = parseInt(this.getAttribute("data-index"));
  if (selected === quizData[currentQuestion].correct) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz").style.display = "none";
  var resultDiv = document.getElementById("result");
  resultDiv.textContent = "You got " + score + " out of " + quizData.length + " correct. ";
  if (score === quizData.length) resultDiv.textContent += "Perfect! 🌟";
  else if (score >= quizData.length * 0.7) resultDiv.textContent += "Great job! 👍";
  else if (score >= quizData.length * 0.4) resultDiv.textContent += "Not bad! Keep practicing 💪";
  else resultDiv.textContent += "Try again! 🚀";

  document.getElementById("restart-btn").style.display = "inline-block";
}

document.getElementById("restart-btn").onclick = function() {
  currentQuestion = 0;
  score = 0;
  document.getElementById("quiz").style.display = "block";
  document.getElementById("restart-btn").style.display = "none";
  document.getElementById("result").textContent = "";
  showQuestion();
};
 
showQuestion();