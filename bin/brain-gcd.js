#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { wrongAnswer, greeting, main } from '../src/index.js';
import { newRandomGcd } from '../src/utils.js';

const vbeginMessage = 'Find the greatest common divisor of given numbers';
const vUserQestion = () => Number.parseInt(readlineSync.question('Your answer: '), 10);
const vEgualFunc = (rnd, a, b) => a === b;
main(greeting(), wrongAnswer, vbeginMessage, vUserQestion, vEgualFunc, newRandomGcd);
