import readlineSync from 'readline-sync';

const greet = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

const play = () => {
  console.log('Welcome to the Brain Games!');
  greet();
};

export {
  greet,
  play,
};
