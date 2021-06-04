const add = function(a, b) {
  return (a + b);	
};

const subtract = function(a, b) {
  return (a - b);
};

const sum = function(numbersArray) {
  const sumArray = numbersArray.reduce(function(sum, number) {
    return sum + number;
  }, 0);
  return sumArray;
	
};

const multiply = function(numbersArray) {
  const productArray = numbersArray.reduce(function(product, number) {
    return product * number;
  }, 1);
  return productArray;
};

const power = function(a, b) {
  return a ** b;	
};

const factorial = function(a) {
  if (a === 0) {
    return 1;
  } else if (a === 1) {
    return 1;
  } else {
    return a * factorial(a - 1);
  }
};


export {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
