#!/usr/bin/env node
import readlineSync from 'readline-sync';

const newRandom = () => {
  const a = Math.floor(Math.random() * 100);
  const b = Math.floor(Math.random() * 100);
  const opt = () => {
    const value = Math.floor(Math.random() * 10);
    let opts = '';
    if (value >= 0 && value <= 3) {
      opts = '+';
    } else if (value >= 4 && value <= 6) {
      opts = '*';
    } else if (value >= 7 && value <= 10) {
      opts = '-';
    }
    return opts;
  };
  const expr = `${a} ${opt()} ${b}`;
  const doExpr = () => {
    const el = expr.split(' ');
    const aIn = Number.parseInt(el[0], 10);
    const optI = el[1];
    const bIn = Number.parseInt(el[2], 10);
    let res = 0;
    if (optI === '+') {
      res = aIn + bIn;
    } else if (optI === '-') {
      res = aIn - bIn;
    } else if (optI === '*') {
      res = aIn * bIn;
    }
    return res;
  };
  return [expr, doExpr()];
};

const greeting = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const userName = greeting();
const message = 'What is the result of the expression?';
const correctAnswer = 'Correct!';
const finalMessage = `Congratulations, ${userName}`;

let timesToTry = 3;

console.log(`${message}`);
const main = () => {
  while (timesToTry > 0) {
    const [expr, answer] = newRandom();
    console.log(`Question: ${expr}`);
    let userAnswer = readlineSync.question('Your answer: ');
    userAnswer = Number.parseInt(userAnswer, 10);
    if (answer === userAnswer) {
      console.log(`${correctAnswer}`);
      timesToTry -= 1;
    } else {
      const errorMessage = `'${userAnswer}' is wrong answer ;(. `.concat(
        `Correct answer was '${answer}'.\nLet's try again, ${userName}!`,
      );
      console.log(`${errorMessage}`);

      return;
    }
  }
  console.log(`${finalMessage}`);
};

main();
