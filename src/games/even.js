const isEven = (number) => number % 2 === 0;

const getQuestionAndAnswer = () => {
  const question = Math.floor(Math.random() * 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default getQuestionAndAnswer;
