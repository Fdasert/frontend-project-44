import readlineSync from 'readline-sync';

export function greetings() {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
}

export function checkEven(question, userAnswer, userName, correctAnswers, gameIsOver) {
  let updatedCorrectAnswers = correctAnswers;
  let updatedGameIsOver = gameIsOver;

  if ((question % 2 === 0 && userAnswer === 'yes') || (question % 2 !== 0 && userAnswer === 'no')) {
    console.log('Correct!');
    updatedCorrectAnswers += 1;
  } else {
    console.log(`'yes' is the wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
    updatedGameIsOver = true;
  }

  return { correctAnswers: updatedCorrectAnswers, gameIsOver: updatedGameIsOver };
}

export function askUser(question) {
  console.log(`Question: ${question}`);
  return readlineSync.question('Your answer: ');
}

export function operatorChoice(num1, operator, num2) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
}

export function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

export function checkGcd(firstNumber, secondNumber) {
  let a = firstNumber;
  let b = secondNumber;
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
}

export function getRandomProggresion() {
  const start = 5;
  const count = Math.floor(Math.random() * 6) + 5;
  const step = Math.floor(Math.random() * 10) + 1;

  const progression = [];
  const hiddenElem = Math.floor(Math.random() * count);

  for (let i = 0; i < count; i += 1) {
    const element = start + i * step;
    progression.push(element);
  }

  return { progression, hiddenElem };
}
