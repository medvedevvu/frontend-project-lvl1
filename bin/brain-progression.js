#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { wrongAnswer, greeting, main } from '../src/index.js';
import { newRandomProgress } from '../src/utils.js';

const vbeginMessage = 'What number is missing in progression?';
const vUserQestion = () => Number.parseInt(readlineSync.question('Your answer: '), 10);
const vEgualFunc = (rnd, a, b) => a === b;
main(greeting(), wrongAnswer, vbeginMessage, vUserQestion, vEgualFunc, newRandomProgress);
