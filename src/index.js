import readlineSync from 'readline-sync';

export const wrongAnswer = (paramArray) => {
  const [second, uAnswer, uName] = paramArray;
  const errorMessage = `'${uAnswer}' is wrong answer ;(. `.concat(
    `Correct answer was '${second}'.\nLet's try again, ${uName}!`,
  );
  console.log(`${errorMessage}`);
};

export const greeting = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const main = (puserGreet, fwrongAnswer, beginMessage, fUserQestion, fEgualFunc, fRnd) => {
  const userName = puserGreet;
  const message = beginMessage;
  const correctAnswer = 'Correct!';
  const finalMessage = `Congratulations, ${userName}!`;

  let timesToTry = 3;

  console.log(`${message}`);

  while (timesToTry > 0) {
    const [newRnd, answer] = fRnd();
    console.log(`Question: ${newRnd}`);
    const userAnswer = fUserQestion();
    if (fEgualFunc(answer, userAnswer)) {
      console.log(`${correctAnswer}`);
      timesToTry -= 1;
    } else {
      fwrongAnswer([answer, userAnswer, userName]);
      return;
    }
  }
  console.log(`${finalMessage}`);
};
