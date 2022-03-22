import {
  setWrongAnswer, setGreeting, setMainFunc, isEqual,
} from '../index.js';

const getNewRandomGcd = () => {
  const a = Math.floor(Math.random() * 100);
  const b = Math.floor(Math.random() * 100);
  const getTwoNumbers = (x, y) => {
    if ((typeof x !== 'number') || (typeof y !== 'number')) {
      return false;
    }
    let x1 = Math.abs(x);
    let y1 = Math.abs(y);
    while (y1) {
      const t = y1;
      y1 = x1 % y1;
      x1 = t;
    }
    return x1;
  };
  const expressionStr = `${a} ${b}`;
  const rightAnswer = getTwoNumbers(a, b);
  return [expressionStr, rightAnswer];
};

const beginMessage = 'Find the greatest common divisor of given numbers';
const kindOfQuestion = 'number';
const play = () => setMainFunc(
  setGreeting(),
  setWrongAnswer,
  beginMessage,
  kindOfQuestion,
  isEqual,
  getNewRandomGcd,
);

export default play;
