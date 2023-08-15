#!/usr/bin/env node
import readlineSync from 'readline-sync';

const greetings = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const name = greetings();
const maxQuestions = 3;
let correctAnswers = 0;
let gameIsOver = false;

const askUser = (question) => {
  console.log(`Question: ${question}`);
  return readlineSync.question('Your answer: ');
};

const checkAnswer = (question, userAnswer, userName) => {
  if ((question % 2 === 0 && userAnswer === 'yes') || (question % 2 !== 0 && userAnswer === 'no')) {
    console.log('Correct!');
    correctAnswers += 1;
  } else {
    console.log(`'yes' is the wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
    gameIsOver = true;
  }
};

console.log('Answer "yes" if the number is even, otherwise answer "no" ');

for (let i = 0; i < maxQuestions; i += 1) {
  if (gameIsOver) {
    break;
  }

  const question = Math.floor(Math.random() * 100);
  const userAnswer = askUser(question);

  checkAnswer(question, userAnswer, name);

  if (correctAnswers === maxQuestions) {
    break;
  }
}

if (correctAnswers === maxQuestions) {
  console.log(`Congratulations, ${name}!`);
}

export default greetings;
