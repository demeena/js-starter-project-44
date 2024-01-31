import readlineSync from 'readline-sync';

const playGame = () => {
  const isEven = (number) => number % 2 === 0;

  const getCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const roundsCount = 3;
  for (let round = 0; round < roundsCount; round += 1) {
    const question = Math.floor(Math.random() * 100);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    const correctAnswer = getCorrectAnswer(question);

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
export default playGame;
