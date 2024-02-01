const getQuestionAndAnswer = () => {
  const num1 = Math.floor(Math.random() * 200);
  const num2 = Math.floor(Math.random() * 200);
  const operations = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operations.length);
  const randomOperation = operations[randomIndex];

  let correctAnswer;
  if (randomOperation === '+') {
    correctAnswer = num1 + num2;
  } else if (randomOperation === '-') {
    correctAnswer = num1 - num2;
  } else if (randomOperation === '*') {
    correctAnswer = num1 * num2;
  } else {
    throw new Error(`Unknown operation: ${randomOperation}`);
  }

  const question = `${num1} ${randomOperation} ${num2}`;
  return [question, String(correctAnswer)];
};

export default getQuestionAndAnswer;
