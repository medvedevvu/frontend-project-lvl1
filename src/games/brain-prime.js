import readlineSync from 'readline-sync';
import { wrongAnswer, greeting, main } from '../index.js';
import { newRandomPrime, normAnswer, EgualFunc } from '../utils.js';

const vbeginMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const vUserQestion = () => normAnswer(readlineSync.question('Your answer: '));
const play = () => main(
  greeting(),
  wrongAnswer,
  vbeginMessage,
  vUserQestion,
  EgualFunc,
  newRandomPrime,
);

export default play;
