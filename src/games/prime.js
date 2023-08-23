import {
  greetings,
  askUser,
  getRandomNumber,
  checkPrime,
} from '../index.js';

const getPrime = () => {
  const maxQuestions = 3;
  let correctAnswers = 0;

  const name = greetings();

  console.log('Answer "yes" if the given number is prime. Otherwise, answer "no".');

  for (let i = 0; i < maxQuestions; i += 1) {
    const numberToCheck = getRandomNumber();
    const userAnswer = askUser(numberToCheck);
    const isPrime = checkPrime(numberToCheck);

    let expectedAnswer;
    if (isPrime === 'prime') {
      expectedAnswer = 'yes';
    } else {
      expectedAnswer = 'no';
    }

    if (userAnswer === expectedAnswer) {
      correctAnswers += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is the wrong answer ;(. Correct answer was '${expectedAnswer}'\nLet's try again, ${name}!`);
      break;
    }
  }

  if (correctAnswers === maxQuestions) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default getPrime;
