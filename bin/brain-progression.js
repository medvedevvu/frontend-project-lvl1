#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { wrongAnswer, greeting, main } from '../src/index.js';
import { newRandomProgress, EgualFunc, checkEnter } from '../src/utils.js';

const vbeginMessage = 'What number is missing in the progression?';
const vUserQestion = () => Number.parseInt(checkEnter(readlineSync.question('Your answer: ')), 10);
main(greeting(), wrongAnswer, vbeginMessage, vUserQestion, EgualFunc, newRandomProgress);
