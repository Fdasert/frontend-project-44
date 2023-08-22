import { greetings, askUser, operatorChoice } from '../index.js';

const getCalcNumber = () => {
  const name = greetings();
  const maxQuestions = 3;
  let correctAnswers = 0;

  for (let i = 0; i < maxQuestions; i += 1) {
    console.log('What is the result of the expression?');

    const operators = ['+', '-', '*'];
    const randomOperator = operators[Math.floor(Math.random() * operators.length)];

    const randomNum = Math.floor(Math.random() * 10);
    const randomNumNumberTwo = Math.floor(Math.random() * 10);
    const question = `${randomNum} ${randomOperator} ${randomNumNumberTwo}`;

    const correctAnswer = operatorChoice(randomNum, randomOperator, randomNumNumberTwo);

    const userAnswer = askUser(`Question: ${question}`);
    const parsedUserAnswer = +userAnswer;

    if (parsedUserAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`'${userAnswer}' is the wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      break;
    }
  }

  if (correctAnswers === maxQuestions) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default getCalcNumber;
