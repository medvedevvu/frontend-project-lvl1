#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { wrongAnswer, greeting, main } from '../src/index.js';
import { newRandomCalc } from '../src/utils.js';

const vbeginMessage = 'What is the result of the expression?';
const vUserQestion = () => Number.parseInt(readlineSync.question('Your answer: '), 10);
const vEgualFunc = (rnd, a, b) => a === b;
main(greeting(), wrongAnswer, vbeginMessage, vUserQestion, vEgualFunc, newRandomCalc);
