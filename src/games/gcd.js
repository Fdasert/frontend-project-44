import {
  greetings,
  askUser,
  getRandomNumber,
  checkGcd,
} from '../index.js';

const getGcdNumber = () => {
  const maxQuestions = 3;
  let correctAnswers = 0;

  console.log('Welcome to the Brain Games!');
  const name = greetings();
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < maxQuestions; i += 1) {
    const firstNumber = getRandomNumber();
    const secondNumber = getRandomNumber();
    const question = `${firstNumber} ${secondNumber}`;

    const correctAnswer = checkGcd(firstNumber, secondNumber);
    const userAnswer = Number(askUser(question));

    if (userAnswer === correctAnswer) {
      correctAnswers += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${name}!`);
      break;
    }
  }

  if (correctAnswers === maxQuestions) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default getGcdNumber;
