#!/usr/bin/env node
import playGame from '../src/index.js';
import getQuestionAndAnswer from '../src/games/gcd.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

playGame(gameDescription, getQuestionAndAnswer);
