#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { wrongAnswer, greeting, main } from '../src/index.js';
import { newRandomGcd, EgualFunc } from '../src/utils.js';

const vbeginMessage = 'Find the greatest common divisor of given numbers';
const vUserQestion = () => Number.parseInt(readlineSync.question('Your answer: '), 10);
main(greeting(), wrongAnswer, vbeginMessage, vUserQestion, EgualFunc, newRandomGcd);
