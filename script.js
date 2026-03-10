const questions = [
  {
    text: "「赤」は英語で？",
    choices: ["Red","Read"],
    answer: 0
  },
  {
    text: "「海」は英語で？",
    choices: ["Sea","See"],
    answer: 0
  },
  {
    text: "「聞く」は英語で？",
    choices: ["Hear","Here"],
    answer: 0
  },
  {
    text: "「壊す」は英語で？",
    choices: ["Break","Brake"],
    answer: 0
  },
  {
    text: "「細胞」は英語で？",
    choices: ["Cell","Sell"],
    answer: 0
  },
];

let current = 0;

function showQuestion() {
  
  const q = questions[current];
  
  document.getElementById("question").textContent = q.text;
  
  const btnA = document.getElementById("btnA");
  const btnB = document.getElementById("btnB");
  
  btnA.textContent = q.choices[0];
  btnB.textContent = q.choices[1];
  
  btnA.disabled = false;
  btnB.disabled = false;
  btnNext.disabled = true;
  document.getElementById("result").textContent = "";
}

function answer(choice) {
  
  const q = questions[current];
  
  const btnA = document.getElementById("btnA");
  const btnB = document.getElementById("btnB");
  
  if (choice === q.answer) {
    document.getElementById
    ("result").textContent = "Correct!";
  }else{
    document.getElementById
    ("result").textContent = "Incorrect...";
  }
  btnA.disabled = true;
  btnB.disabled = true;
  btnNext.disabled = false;
}

function next() {
  
  if (current < questions.length -1) {
    current++;
    showQuestion();
  }else{
    document.getElementById
    ("result").textContent = "Finish";
  }
}

window.onload = function() {
  showQuestion();
 }; 
