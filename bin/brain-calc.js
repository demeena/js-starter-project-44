#!/usr/bin/env node
import playGame from '../src/index.js';
import getQuestionAndAnswer from '../src/games/calc.js';

const gameDescription = 'What is the result of the expression?';
playGame(gameDescription, getQuestionAndAnswer);
