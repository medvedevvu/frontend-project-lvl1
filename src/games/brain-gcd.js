import readlineSync from 'readline-sync';
import { wrongAnswer, greeting, main } from '../index.js';
import { newRandomGcd, EgualFunc } from '../utils.js';

const vbeginMessage = 'Find the greatest common divisor of given numbers';
const vUserQestion = () => Number.parseInt(readlineSync.question('Your answer: '), 10);
const play = () => main(
  greeting(),
  wrongAnswer,
  vbeginMessage,
  vUserQestion,
  EgualFunc,
  newRandomGcd,
);

export default play;
