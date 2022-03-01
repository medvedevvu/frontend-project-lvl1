#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { wrongAnswer, greeting } from '../src/index.js';
import { newRandomEven, normAnswer } from '../src/utils.js';

const isEven = (x) => x % 2 === 0;

const main = (puserGreet, beginMessage, fUserQestion, fEgualFunc) => {
  const userName = puserGreet;
  const message = beginMessage;
  const correctAnswer = 'Correct!';
  const finalMessage = `Congratulations, ${userName}`;

  let timesToTry = 3;

  console.log(`${message}`);
  while (timesToTry > 0) {
    const [newRnd, answer] = newRandomEven();
    console.log(`Question: ${newRnd}`);
    const userAnswer = fUserQestion();
    if (fEgualFunc(newRnd, answer, userAnswer)) {
      console.log(`${correctAnswer}`);
      timesToTry -= 1;
    } else {
      wrongAnswer([userAnswer === 'yes' ? 'no' : 'yes', userAnswer, userName]);
      return;
    }
  }
  console.log(`${finalMessage}`);
};

const vbeginMessage = 'Answer "yes" if the number is even, otherwise answer "no".';
const vUserQestion = () => normAnswer(readlineSync.question('Your answer: '));
const vEgualFunc = (rnd, a, b) => (isEven(rnd) && b === 'yes') || (!isEven(rnd) && b === 'no');
main(greeting(), vbeginMessage, vUserQestion, vEgualFunc);
