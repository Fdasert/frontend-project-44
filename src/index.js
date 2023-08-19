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
  }
}
export function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

export function checkGcd(firstNumber, secondNumber) {
  while (firstNumber !== secondNumber) {
    if (firstNumber > secondNumber) {
      firstNumber = firstNumber - secondNumber;
    } else {
      secondNumber = secondNumber - firstNumber;
    }
  }
  return firstNumber;
}
