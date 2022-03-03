#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { wrongAnswer, greeting, main } from '../src/index.js';
import { newRandomPrime, normAnswer, EgualFunc } from '../src/utils.js';

const vbeginMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const vUserQestion = () => normAnswer(readlineSync.question('Your answer: '));
main(greeting(), wrongAnswer, vbeginMessage, vUserQestion, EgualFunc, newRandomPrime);
