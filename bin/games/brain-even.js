#!/usr/bin/env node
import { greetings, checkAnswer, askUser } from '../../src/index.js';

const name = greetings();

const maxQuestions = 3;
let correctAnswers = 0;
let gameIsOver = false;

console.log('Answer "yes" if the number is even, otherwise answer "no". ');

for (let i = 0; i < maxQuestions; i += 1) {
  if (gameIsOver) {
    break;
  }

  const question = Math.floor(Math.random() * 100);
  const userAnswer = askUser(`Question: ${question}`);

  const result = checkAnswer(question, userAnswer, name, correctAnswers, gameIsOver);
  correctAnswers = result.correctAnswers;
  gameIsOver = result.gameIsOver;

  if (correctAnswers === maxQuestions) {
    console.log(`Congratulations, ${name}!`);
    break;
  }
}
