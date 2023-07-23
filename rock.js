const imoArr = ["✊", "🖐️", "✌️"];
const situation = ["Tie", "Won", "Loose"];
let oppoCount = 0;
let userCount = 0;
const winSound = new Audio("win.wav");
const loseSound = new Audio("lose.wav");

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");

const oppoStat = document.getElementById("oppoStat");
const userStat = document.getElementById("userStat");
const oppoScore = document.getElementById("oppoScore");
const userScore = document.getElementById("userScore");

const compair = (u) => {
  const randomNum = Math.floor(Math.random() * 3);
  console.log(randomNum);
  document.querySelector(".opponent").innerHTML = imoArr[randomNum];
  const o = randomNum;

  if (o === u) {
    oppoStat.innerHTML = situation[0];
    userStat.innerHTML = situation[0];
    winSound.pause();
    loseSound.pause();
  } else if (u === 0 && o === 2) {
    userCount += 1;
    userStat.innerHTML = situation[1];
    oppoStat.innerHTML = situation[2];
    userScore.innerHTML = userCount;
    loseSound.pause();
    winSound.currentTime = 0;
    winSound.play();
  } else if (u === 0 && o === 1) {
    oppoCount += 1;
    oppoStat.innerHTML = situation[1];
    userStat.innerHTML = situation[2];
    oppoScore.innerHTML = oppoCount;
    winSound.pause();
    loseSound.currentTime = 0;
    loseSound.play();
  } else if (u === 1 && o === 0) {
    userCount += 1;
    userStat.innerHTML = situation[1];
    oppoStat.innerHTML = situation[2];
    userScore.innerHTML = userCount;
    loseSound.pause();
    winSound.play();
  } else if (u === 1 && o === 2) {
    oppoCount += 1;
    oppoStat.innerHTML = situation[1];
    userStat.innerHTML = situation[2];
    oppoScore.innerHTML = oppoCount;
    winSound.pause();
    loseSound.currentTime = 0;
    loseSound.play();
  } else if (u === 2 && o === 1) {
    userCount += 1;
    userStat.innerHTML = situation[1];
    oppoStat.innerHTML = situation[2];
    userScore.innerHTML = userCount;
    loseSound.pause();
    winSound.currentTime = 0;
    winSound.play();
  } else {
    oppoCount += 1;
    oppoStat.innerHTML = situation[1];
    userStat.innerHTML = situation[2];
    oppoScore.innerHTML = oppoCount;
    winSound.pause();
    loseSound.currentTime = 0;
    loseSound.play();
  }
};

document.getElementById("reset").addEventListener("click", () => {
  oppoCount = 0;
  userCount = 0;
  userScore.innerHTML = userCount;
  oppoScore.innerHTML = oppoCount;

  document.querySelector(".user").innerHTML = imoArr[0];
  document.querySelector(".opponent").innerHTML = imoArr[0];
  oppoStat.innerHTML = "Opponent";
  userStat.innerHTML = "You";

  winSound.pause();
  loseSound.pause();
});

rock.addEventListener("click", () => {
  document.querySelector(".user").innerHTML = imoArr[0];

  compair(0);
});

paper.addEventListener("click", () => {
  document.querySelector(".user").innerHTML = imoArr[1];

  compair(1);
});

scissor.addEventListener("click", () => {
  document.querySelector(".user").innerHTML = imoArr[2];

  compair(2);
});
