const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	return numbers.reduce((total, number) => total + number, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((total, number) => total * number, 1);
};

const power = function(base, exponent) {
  let result = base;
	for (let n = 1; n < exponent; n++) {
    result = result * base;
  };
  return result;
};

const factorial = function(n) {
	let number = n;
  let result = 1;
  while (number > 0) {
    result = result * number;
    number -= 1;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
