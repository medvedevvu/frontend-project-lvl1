export const formatAnswer = (answer) => {
  const rule = ['yes', 'no'];
  if (rule.includes(answer)) {
    return answer;
  }
  return 'no';
};

export default formatAnswer;
