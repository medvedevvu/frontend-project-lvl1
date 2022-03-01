#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { wrongAnswer, greeting } from '../src/index.js';
import { newRandomCalc } from '../src/utils.js';

const main = (puserGreet, beginMessage, fUserQestion, fEgualFunc) => {
  const userName = puserGreet;
  const message = beginMessage;
  const correctAnswer = 'Correct!';
  const finalMessage = `Congratulations, ${userName}`;

  let timesToTry = 3;

  console.log(`${message}`);

  while (timesToTry > 0) {
    const [newRnd, answer] = newRandomCalc();
    console.log(`Question: ${newRnd}`);
    const userAnswer = fUserQestion();
    if (fEgualFunc(newRnd, answer, userAnswer)) {
      console.log(`${correctAnswer}`);
      timesToTry -= 1;
    } else {
      wrongAnswer([answer, userAnswer, userName]);
      return;
    }
  }
  console.log(`${finalMessage}`);
};

const vbeginMessage = 'What is the result of the expression?';
const vUserQestion = () => Number.parseInt(readlineSync.question('Your answer: '), 10);
const vEgualFunc = (rnd, a, b) => a === b;
main(greeting(), vbeginMessage, vUserQestion, vEgualFunc);
