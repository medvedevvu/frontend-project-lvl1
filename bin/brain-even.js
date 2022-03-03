#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { wrongAnswer, greeting, main } from '../src/index.js';
import { newRandomEven, normAnswer, EgualFunc } from '../src/utils.js';

const vbeginMessage = 'Answer "yes" if the number is even, otherwise answer "no".';
const vUserQestion = () => normAnswer(readlineSync.question('Your answer: '));
main(greeting(), wrongAnswer, vbeginMessage, vUserQestion, EgualFunc, newRandomEven);
