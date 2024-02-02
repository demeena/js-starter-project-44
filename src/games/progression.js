const getQuestionAndAnswer = () => {
  const start = Math.round(Math.random() * 20);
  const step = Math.floor(Math.random() * 2) + 2;
  const length = Math.floor(Math.random() * 6) + 5;
  const sequence = [];
  for (let i = 0; i < length; i += 1) {
    sequence.push(start + i * step);
  }
  const randomIndex = Math.floor(Math.random() * sequence.length);
  const hidden = sequence[randomIndex];
  sequence[randomIndex] = '..';
  const question = sequence.join(' ');
  const correctAnswer = String(hidden);

  return [question, correctAnswer];
};

export default getQuestionAndAnswer;
