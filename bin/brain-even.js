#!/usr/bin/env node
import readlineSync from 'readline-sync';

const isEven = (x) => x % 2 === 0;

const newRandom = () => Math.floor(Math.random() * 100);

const greeting = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const normAnswer = (w) => {
  const rule = ['yes', 'no'];
  if (rule.indexOf(w) === 0 || rule.indexOf(w) === 1) {
    return w;
  }
  return 'no';
};

const main = (pUserName) => {
  const userName = pUserName;
  const message = 'Answer "yes" if the number is even, otherwise answer "no".';
  const correctAnswer = 'Correct!';
  const finalMessage = `Congratulations, ${userName}`;
  let timesToTry = 3;
  console.log(`${message}`);

  while (timesToTry > 0) {
    const newRnd = newRandom();
    console.log(`Question: ${newRnd}`);
    const userAnswer = normAnswer(readlineSync.question('Your answer: '));
    const second = userAnswer === 'yes' ? 'no' : 'yes';
    if (
      (isEven(newRnd) && userAnswer === 'yes')
      || (!isEven(newRnd) && userAnswer === 'no')
    ) {
      console.log(`${correctAnswer}`);
      timesToTry -= 1;
    } else {
      const errorMessage = `'${userAnswer}' is wrong answer ;(. `.concat(
        `Correct answer was '${second}'.\nLet's try again, ${userName}!`,
      );
      console.log(`${errorMessage}`);

      return;
    }
  }
  console.log(`${finalMessage}`);
};

main(greeting());
