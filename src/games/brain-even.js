import readlineSync from 'readline-sync';
import { wrongAnswer, greeting, main } from '../index.js';
import { newRandomEven, normAnswer, EgualFunc } from '../utils.js';

const vbeginMessage = 'Answer "yes" if the number is even, otherwise answer "no".';
const vUserQestion = () => normAnswer(readlineSync.question('Your answer: '));
const play = () => main(
  greeting(),
  wrongAnswer,
  vbeginMessage,
  vUserQestion,
  EgualFunc,
  newRandomEven,
);

export default play;
