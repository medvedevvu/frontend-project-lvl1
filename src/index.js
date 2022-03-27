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
  userGreetFunc,
  wrongAnswerFunc,
  beginMessage,
  kindUsersQestionFunc,
  equalFunc,
  getNewRandomAndRightAnswer,
) => {
  const userName = userGreetFunc;
  const message = beginMessage;
  const correctAnswerMessage = 'Correct!';
  const finalMessage = `Congratulations, ${userName}!`;
  const timesToTryBorder = 3;

  console.log(`${message}`);

  for (let timesToTry = 0; timesToTry < timesToTryBorder; timesToTry += 1) {
    const [newRandomValue, rightAnswer] = getNewRandomAndRightAnswer();
    console.log(`Question: ${newRandomValue}`);

    let userQestionFunc;
    if (kindUsersQestionFunc === 'number') {
      userQestionFunc = () => Number.parseInt(readlineSync.question('Your answer: '), 10);
    } else {
      userQestionFunc = () => formatAnswer(readlineSync.question('Your answer: '));
    }
    const userAnswer = userQestionFunc();

    if (equalFunc(rightAnswer, userAnswer)) {
      console.log(`${correctAnswerMessage}`);
    } else {
      wrongAnswerFunc([rightAnswer, userAnswer, userName]);
      return;
    }
  }
  console.log(`${finalMessage}`);
};

export const isEqual = (a, b) => a === b;
