#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { wrongAnswer, greeting, main } from '../src/index.js';
import { newRandomCalc, EgualFunc } from '../src/utils.js';

const vbeginMessage = 'What is the result of the expression?';
const vUserQestion = () => Number.parseInt(readlineSync.question('Your answer: '), 10);
main(greeting(), wrongAnswer, vbeginMessage, vUserQestion, EgualFunc, newRandomCalc);
