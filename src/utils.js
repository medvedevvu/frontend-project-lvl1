export const formatAnswer = (answer) => {
  const rule = ['yes', 'no'];
  if (rule.indexOf(answer) === 0 || rule.indexOf(answer) === 1) {
    return answer;
  }
  return 'no';
};

export default formatAnswer;
