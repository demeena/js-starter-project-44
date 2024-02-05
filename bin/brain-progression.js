#!/usr/bin/env node
import playGame from '../src/index.js';
import getQuestionAndAnswer from '../src/games/progression.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

playGame(gameDescription, getQuestionAndAnswer);
