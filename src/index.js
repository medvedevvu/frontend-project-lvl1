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
