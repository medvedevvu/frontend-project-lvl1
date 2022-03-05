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

const isEven = (x) => x % 2 === 0;

export const newRandomEven = () => {
  const rnd = Math.floor(Math.random() * 100);
  let res;
  if (isEven(rnd)) {
    res = [rnd, 'yes'];
  }
  if (!isEven(rnd)) {
    res = [rnd, 'no'];
  }
  return res;
};

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

export const newRandomProgress = () => {
  const pos = Math.floor(Math.random() * 10);
  const delta = Math.floor(Math.random() * 10);
  let index;
  let str = '';
  let item = 0;
  const rndArray = [];
  for (index = 0; index < 10; index += 1) {
    item += delta;
    rndArray.push(item);
    if (index === pos) {
      str = str.concat(' .. ');
    } else {
      str = str.concat(`${item}`, ' ');
    }
  }
  return [str.trim(), rndArray[pos]];
};

const isPrime = (x) => {
  if (x === 1) {
    return false;
  }
  let cnt = 0;
  let index;
  for (index = 1; index <= x; index += 1) {
    if ((x % index) === 0) {
      cnt += 1;
    }
  }
  return (cnt === 2);
};

export const newRandomPrime = () => {
  const samp = Math.floor(Math.random() * 100);
  const ans = isPrime(samp) ? 'yes' : 'no';
  return [samp, ans];
};

export const EgualFunc = (a, b) => a === b;

export const checkEnter = (x) => {
  let res;
  if (x !== null && x !== '' && x.length > 0) {
    res = x;
  } else {
    res = '-1';
  }
  return res;
};
