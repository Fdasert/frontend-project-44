import { greetings, askUser, getRandomProggresion } from '../index.js';

const getProgression = () => {
  const maxQuestions = 3;
  let correctAnswers = 0;

  const name = greetings();
  console.log('What number is missing in the progression?');

  for (let i = 0; i < maxQuestions; i += 1) {
    const { progression, hiddenElem } = getRandomProggresion();
    const questionProgression = [...progression];

    questionProgression[hiddenElem] = '..';
    const question = `${questionProgression.join(', ')}`;

    const userAnswer = parseFloat(askUser(question));
    const correctAnswer = progression[hiddenElem];

    if (!Number.isNaN(userAnswer) && userAnswer === correctAnswer) {
      correctAnswers += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      break;
    }
  }

  if (correctAnswers === maxQuestions) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default getProgression;
