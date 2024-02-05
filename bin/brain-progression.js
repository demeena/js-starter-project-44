#!/usr/bin/env node
import playGame from '../src/index.js';
import getQuestionAndAnswer from '../src/games/progression.js';

const gameDescription = 'What number is missing in the progression?';

playGame(gameDescription, getQuestionAndAnswer);
