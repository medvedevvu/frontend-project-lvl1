#!/usr/bin/env node
import readlineSync from 'readline-sync';

const isEven = (x) => x % 2 === 0;

const newRandom = () => [Math.floor(Math.random() * 100), -1];

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

const main = (puserGreet, beginMessage, fUserQestion, fEgualFunc) => {
  const userName = puserGreet;
  const message = beginMessage; 
  const correctAnswer = 'Correct!';
  const finalMessage = `Congratulations, ${userName}`;
  
  let timesToTry = 3;
  
  console.log(`${message}`);
  while (timesToTry > 0) {
    const [newRnd, answer] = newRandom();
    console.log(`Question: ${newRnd}`);
    const userAnswer = fUserQestion(); 
    if ( fEgualFunc(newRnd, answer, userAnswer) )
    {
      console.log(`${correctAnswer}`);
      timesToTry -= 1;
    } else {
      const [second, uAnswer, uName] = [userAnswer === 'yes' ? 'no' : 'yes', userAnswer, userName];
      const errorMessage = `'${uAnswer}' is wrong answer ;(. `.concat(
        `Correct answer was '${second}'.\nLet's try again, ${uName}!`,
      );
      console.log(`${errorMessage}`);

      return;
    }
  }
  console.log(`${finalMessage}`);
};

const vbeginMessage = 'Answer "yes" if the number is even, otherwise answer "no".';
const vUserQestion = () => normAnswer(readlineSync.question('Your answer: '));
const vEgualFunc = (rnd, a, b) =>  (isEven(rnd) && b === 'yes') || (!isEven(rnd) && b === 'no'); 
main(greeting(), vbeginMessage, vUserQestion,vEgualFunc);
