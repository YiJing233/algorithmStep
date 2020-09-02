// 剑指 Offer 20. 表示数值的字符串

// 请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。
// 例如，字符串"+100"、"5e2"、"-123"、"3.1416"、"-1E-16"、"0123"都表示数值，
// 但"12e"、"1a3.14"、"1.2.3"、"+-5"及"12e+5.4"都不是。


/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  let pointer = 0;
  let isValid;

  const scanSignedInteger = (s) => {
    if (s[pointer] === '+' || s[pointer] === '-') {
      pointer++;
    }
    return scanUnsignedInteger(s);
  };

  const scanUnsignedInteger = (s) => {
    const temp = pointer;
    while (s[pointer] >= '0' && s[pointer] <= '9') {
      pointer++;
    }
    return s[temp] >= '0' && s[temp] <= '9';
  };

  while (s[pointer] === ' ') {
    pointer++;
  }

  isValid = scanSignedInteger(s);

  if (s[pointer] === '.') {
    pointer++;
    if (scanUnsignedInteger(s)) {
      isValid = true;
    }
  }

  if (s[pointer] === 'e' || s[pointer] === 'E') {
    pointer++;
    if (isValid) {
      isValid = scanSignedInteger(s);
    }
  }

  while (s[pointer] === ' ') {
    pointer++;
  }

  if (s[pointer] !== undefined) {
    return false;
  }
  return isValid;
};