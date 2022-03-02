export const newRandomCalc = () => {
  const a = Math.floor(Math.random() * 100);
  const b = Math.floor(Math.random() * 100);
  const opt = () => {
    const value = Math.floor(Math.random() * 10);
    let opts = '';
    if (value >= 0 && value <= 3) {
      opts = '+';
    } else if (value >= 4 && value <= 6) {
      opts = '*';
    } else if (value >= 7 && value <= 10) {
      opts = '-';
    }
    return opts;
  };
  const expr = `${a} ${opt()} ${b}`;
  const doExpr = () => {
    const el = expr.split(' ');
    const aIn = Number.parseInt(el[0], 10);
    const optI = el[1];
    const bIn = Number.parseInt(el[2], 10);
    let res = 0;
    if (optI === '+') {
      res = aIn + bIn;
    } else if (optI === '-') {
      res = aIn - bIn;
    } else if (optI === '*') {
      res = aIn * bIn;
    }
    return res;
  };
  return [expr, doExpr()];
};

export const newRandomEven = () => [Math.floor(Math.random() * 100), -1];

export const normAnswer = (w) => {
  const rule = ['yes', 'no'];
  if (rule.indexOf(w) === 0 || rule.indexOf(w) === 1) {
    return w;
  }
  return 'no';
};

export const newRandomGcd = () => {
  const a = Math.floor(Math.random() * 100);
  const b = Math.floor(Math.random() * 100);
  const gcdTwoNumbers = (x, y) => {
    if ((typeof x !== 'number') || (typeof y !== 'number')) {
      return false;
    }
    let x1 = Math.abs(x);
    let y1 = Math.abs(y);
    while (y1) {
      const t = y1;
      y1 = x1 % y1;
      x1 = t;
    }
    return x1;
  };
  const expr = `${a} ${b}`;
  const answer = gcdTwoNumbers(a, b);
  return [expr, answer];
};
