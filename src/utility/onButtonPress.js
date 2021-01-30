const hasPrecedence = (op1, op2) => {
  if (op2 === '(' || op2 === ')') return false;
  return !((op1 === '×' || op1 === '÷')
    && (op2 === '+' || op2 === '-'));
};

const applyOp = (b, op, a) => {
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '×':
      return a * b;
    case '÷':
      if (b === 0) {
        throw new Error('Cannot divide by zero');
      }
      return a / b;
    default:
      return 0;
  }
};

const calculate = (string) => {
  try {
    const infix = [];
    let currNum = '';
    let isDec = false;
    let currDec = '';
    for (let i = 0; i < string.length; i += 1) {
      const ch = string.charAt(i);
      switch (ch) {
        case '(':
        case ')':
        case '÷':
        case '×':
        case '-':
        case '+':
          if (currNum.length + currDec.length > 0) {
            infix.push(parseFloat(`${currNum}.${currDec}`));
            currNum = '';
            currDec = '';
            isDec = false;
          }
          infix.push(ch);
          break;

        case '.':
          isDec = true;
          break;

        default:
          if (isDec) {
            currDec += ch;
          } else {
            currNum += ch;
          }
      }
    }

    if (currNum.length + currDec.length > 0) {
      infix.push(parseFloat(`${currNum}.${currDec}`));
    }

    if (infix.length <= 2) {
      return '';
    }

    const operators = [];
    const operands = [];

    infix.forEach((val) => {
      if (typeof val === 'number') {
        operands.push(val);
      } else if (val === '(') {
        operators.push(val);
      } else if (val === ')') {
        while (operators[operators.length - 1] !== '(') {
          operands.push(
            applyOp(
              operands.pop(),
              operators.pop(),
              operands.pop(),
            ),
          );
        }
        operators.pop();
      } else {
        while (
          operators.length !== 0
          && hasPrecedence(val, operators[operators.length - 1])) {
          operands.push(applyOp(operands.pop(), operators.pop(), operands.pop()));
        }
        operators.push(val);
      }
    });

    // remaining elements of which brackets are not closed
    while (operators.length !== 0) {
      const ch = operators.pop();
      if (ch !== '(') {
        operands.push(applyOp(operands.pop(), ch, operands.pop()));
      }
    }

    return operands.pop();
  } catch (e) {
    return 'Error';
  }
};

const clear = (setQuery, setAns) => {
  setAns('');
  setQuery('0');
};

const openBracket = (setQuery) => {
  setQuery((t) => {
    if (t === '0') {
      return '(';
    } if (!Number.isNaN(t.charAt(t.length - 1) * 1)) {
      return `${t}×(`;
    }
    return `${t}(`;
  });
};

const countBrac = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i += 1) {
    switch (str.charAt(i)) {
      case '(':
        count += 1;
        break;
      case ')':
        count -= 1;
        break;
      default:
    }
  }
  return count;
};

const closeBracket = (setQuery) => {
  setQuery((t) => {
    const count = countBrac(t);
    if (count > 0 && t.charAt(t.length - 1) === '.') {
      return `${t.substr(t, t.length - 1)})`;
    }
    if (count <= 0 || (Number.isNaN(t.charAt(t.length - 1) * 1) && t.charAt(t.length - 1) !== ')')) {
      return t;
    }
    return `${t})`;
  });
};

const operation = (val, setQuery) => {
  setQuery((t) => {
    const ch = t.charAt(t.length - 1);
    if (Number.isNaN(ch * 1)) {
      if (ch === '(' && val === '-') {
        return `${t}0${val}`;
      }
      if (ch === '(') {
        return t;
      }

      if (ch === ')') {
        return t + val;
      }
      if (ch === '.') {
        return `${t}0${val}`;
      }
      return t.substr(0, t.length - 1) + val;
    }
    return t + val;
  });
};

const checkPointValid = (query) => {
  for (let i = query.length - 1; i >= 0; i -= 1) {
    const ch = query.charAt(i);
    if (ch === '.') return false;
    if (Number.isNaN(ch * 1)) {
      return true;
    }
  }
  return true;
};

const point = (setQuery) => {
  setQuery((t) => {
    const ch = t.charAt(t.length - 1);
    if (ch === ')') {
      return t;
    }
    if (checkPointValid(t)) {
      return `${t}.`;
    }
    return t;
  });
};

const number = (val, setQuery, setAns) => {
  let ans = '';

  setQuery((t) => {
    let rv;
    if (t === '0') {
      rv = val;
    } else
    if (t.length > 1
      && t.charAt(t.length - 1) === '0'
      && Number.isNaN(t.charAt(t.length - 2) * 1)
      && t.charAt(t.length - 2) !== '.') {
      rv = t.substr(0, t.length - 1) + val;
    } else if (t.charAt(t.length - 1) === ')') {
      rv = `${t}×${val}`;
    } else {
      rv = t + val;
    }
    ans = `${calculate(rv)}`;
    return rv;
  });

  setAns(() => ans);
};

const backspace = (setQuery, setAns) => {
  let ans = '';
  setQuery((t) => {
    if (t.length === 1) {
      return '0';
    }
    const rv = t.substr(0, t.length - 1);
    ans = calculate(rv);
    return rv;
  });

  setAns(() => {
    if (Number.isNaN(ans)) {
      return '';
    }
    return `${ans}`;
  });
};

const equal = (ans, setQuery, setAns) => {
  setAns(() => '');

  setQuery((t) => {
    if (ans === '') {
      return t;
    }
    if (!Number.isNaN(ans.charAt(ans.length - 1) * 1)) {
      return `${ans}`;
    }
    return '0';
  });
};

const illegalHandler = () => {

};

const onButtonPress = (val, ans, setQuery, setAns) => {
  try {
    switch (val) {
      case 'C':
        clear(setQuery, setAns);
        break;
      case '(':
        openBracket(setQuery);
        break;
      case ')':
        closeBracket(setQuery);
        break;
      case '÷':
      case '×':
      case '-':
      case '+':
        operation(val, setQuery, setAns);
        break;
      case '=':
        equal(ans, setQuery, setAns);
        break;
      case '9':
      case '8':
      case '7':
      case '6':
      case '5':
      case '4':
      case '3':
      case '2':
      case '1':
      case '0':
        number(val, setQuery, setAns);
        break;
      case '.':
        point(setQuery);
        break;
      case '<':
        backspace(setQuery, setAns);
        break;
      default:
        illegalHandler(setQuery, setAns);
    }
  } catch (e) {
    setAns('');
  }
};

export default onButtonPress;
