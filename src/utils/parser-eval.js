function evaluateSquareRoot(expression) {
  let resultExpression = "";
  let stack = [];
  let expressions = [];
  function parse(expression, i) {
    if (expression[i] == "√") {
      resultExpression += expression[i];
      parse(expression, i + 1);
    } else if (expression[i] >= "0" && expression[i] <= "9") {
      resultExpression += expression[i];
      if (stack.length) parse(expression, i + 1);
    } else if (expression[i] == "(") {
      stack.push(expression[i], i + 1);
      resultExpression += expression[i];
      parse(expression, i + 1);
    } else if ("+-/*%".includes(expression[i])) {
      resultExpression += expression[i];
      parse(expression, i + 1);
    } else if (expression[i] == ")") {
      if (stack.length === 0) {
        return;
      } else {
        stack.pop();
        resultExpression += expression[i];
      }
    }

    return resultExpression;
  }

  for (let i = 0; i < expression.length; i++) {
    if (expression[i] == "√") {
      expressions.push(parse(expression, i));
      resultExpression = "";
    } else continue;
  }

  return expressions;
}

function infixToPostfix(expression) {
  let precedence = { "+": 1, "-": 1, "*": 2, "/": 2, "%": 2 };
  let output = [];
  let operatorStack = [];

  console.log(evaluateSquareRoot(expression));
  // Tokenize the expression
  let tokens = expression.match(/\d+\.?\d*|[+\-*%/()]/g);

  for (let token of tokens) {
    if (!isNaN(token)) {
      output.push(token);
    } else if (token === "(") {
      operatorStack.push(token);
    } else if (token === ")") {
      while (
        operatorStack.length > 0 &&
        operatorStack[operatorStack.length - 1] !== "("
      ) {
        output.push(operatorStack.pop());
      }
      operatorStack.pop(); // Remove the '('
    } else if (precedence[token]) {
      while (
        operatorStack.length > 0 &&
        operatorStack[operatorStack.length - 1] !== "(" &&
        precedence[operatorStack[operatorStack.length - 1]] >= precedence[token]
      ) {
        output.push(operatorStack.pop());
      }
      operatorStack.push(token);
    }
  }

  while (operatorStack.length > 0) {
    output.push(operatorStack.pop());
  }

  return output;
}

function evaluate(expression) {
  try {
    let stack = [];
    let postfix = infixToPostfix(expression);
    for (let token of postfix) {
      if (!isNaN(token)) {
        stack.push(parseFloat(token));
      } else {
        let b = stack.pop();
        let a = stack.pop();
        switch (token) {
          case "+":
            stack.push(a + b);
            break;
          case "-":
            stack.push(a - b);
            break;
          case "*":
            stack.push(a * b);
            break;
          case "/":
            stack.push(a / b);
            break;
          case "%":
            stack.push(a % b);
            break;
        }
      }
    }

    return stack.pop();
  } catch (error) {
    console.log(error);
    throw new Error("Invalid expression");
  }
}

export { evaluate };
