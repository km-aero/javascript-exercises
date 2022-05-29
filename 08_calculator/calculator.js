const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numArray) {
	let sum = 0;

	for (let i = 0; i < numArray.length; i++) {
    sum += numArray[i]; 
  };

  return Number(sum);
};

const multiply = function(numArray) {
  let total = 1;

  for (let i = 0; i < numArray.length; i++) {
    total *= numArray[i];
  };

  return total;
};

const power = function(num1, num2) {
  return num1 ** num2;
};

const factorial = function(num) {
  let total = 1;

	for (let i = num; i > 0; i--) {
    total *= i;
  };

  return total;
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
