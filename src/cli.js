// src/cli.js

import readlineSync from 'readline-sync'; // Импортируем библиотеку

// Функция для приветствия пользователя
const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export default greetUser; // Экспортируем функцию для использования в других файлах
