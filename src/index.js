import readlineSync from 'readline-sync';

export const setWrongAnswer = (paramArray) => {
  const [userRigthAnswer, userWrongAnswer, userName] = paramArray;
  const errorMessage = `'${userWrongAnswer}' is wrong answer ;(. `.concat(
    `Correct answer was '${userRigthAnswer}'.\nLet's try again, ${userName}!`,
  );
  console.log(`${errorMessage}`);
};

export const setGreeting = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const formatAnswer = (answer) => {
  const rule = ['yes', 'no'];
  if (rule.includes(answer)) {
    return answer;
  }
  return 'no';
};

export const startGame = (
  // userGreet,
  // wrongAnswer,
  beginMessage,
  getRightAnswer,
) => {
  const userName = setGreeting();// userGreet;
  const message = beginMessage;
  const correctAnswerMessage = 'Correct!';
  const finalMessage = `Congratulations, ${userName}!`;
  const timesToTryBorder = 3;

  console.log(`${message}`);

  for (let timesToTry = 0; timesToTry < timesToTryBorder; timesToTry += 1) {
    const [newRandomValue, rightAnswer] = getRightAnswer();
    console.log(`Question: ${newRandomValue}`);

    const stringAnswer = readlineSync.question('Your answer: ');
    const numberAnswer = Number.parseInt(stringAnswer, 10);
    const userAnswer = Number.isNaN(numberAnswer) ? formatAnswer(stringAnswer) : numberAnswer;

    if (rightAnswer === userAnswer) {
      console.log(`${correctAnswerMessage}`);
    } else {
      setWrongAnswer([rightAnswer, userAnswer, userName]);
      return;
    }
  }
  console.log(`${finalMessage}`);
};
