import readlineSync from 'readline-sync';

export const startGame = (
  beginMessage,
  getRightAnswer,
) => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const userName = name;

  const message = beginMessage;
  const CORRECT_ANSWER_MESSAGE = 'Correct!';
  const FINAL_MESSAGE = `Congratulations, ${userName}!`;
  const MAX_TIMES_TRY = 3;

  console.log(`${message}`);

  for (let timesToTry = 0; timesToTry < MAX_TIMES_TRY; timesToTry += 1) {
    const [newRandomValue, rightAnswer] = getRightAnswer();
    console.log(`Question: ${newRandomValue}`);

    const stringAnswer = readlineSync.question('Your answer: ');
    const numberAnswer = Number.parseInt(stringAnswer, 10);

    let userAnswer;
    if (Number.isNaN(numberAnswer)) {
      const rule = ['yes', 'no'];
      if (rule.includes(stringAnswer)) {
        userAnswer = stringAnswer;
      }
      userAnswer = 'no';
    } else {
      userAnswer = numberAnswer;
    }

    if (rightAnswer === userAnswer) {
      console.log(`${CORRECT_ANSWER_MESSAGE}`);
    } else {
      const [userRigthAnswer, userWrongAnswer] = [rightAnswer, userAnswer];
      const errorMessage = `'${userWrongAnswer}' is wrong answer ;(. `.concat(
        `Correct answer was '${userRigthAnswer}'.\nLet's try again, ${userName}!`,
      );
      console.log(`${errorMessage}`);
      return;
    }
  }
  console.log(`${FINAL_MESSAGE}`);
};

export default startGame;
