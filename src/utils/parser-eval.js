function evaluateSquareRoot(expression) {
  let result = "";
  let stack = [];
  let innerExpression = "";
  let j = null;
  function parse(expression, i) {
    j = i;
    if (expression[i] == "√") {
      result = Math.sqrt(parse(expression, i + 1));
    }
     else if (expression[i] >= "0" && expression[i] <= "9") {
      innerExpression += expression[i];
      if (stack.length) parse(expression, i + 1);
      if(expression[i + 1] >= "0" && expression[i + 1] <= "9") parse(expression, i + 1);
      else result = evaluate(innerExpression);
    } else if (expression[i] == "(") {
      stack.push(expression[i], i + 1);
      innerExpression += expression[i];
      parse(expression, i + 1);
    } else if ("+-/*%".includes(expression[i])) {
      innerExpression += expression[i];
      parse(expression, i + 1);
    } else if (expression[i] == ")") {
      if (stack.length === 0) {
        return;
      } else {
        stack.pop();
        innerExpression += expression[i];
        result = evaluate(innerExpression);
      }
    }
    
    return result;
  }

  for (let i = 0; i < expression.length; i++) {
    if (expression[i] == "√") {
      expression =
        expression.slice(0, i) + parse(expression, i) + expression.slice(j + 1);
    } else continue;
  }

  return expression;
}



function infixToPostfix(expression) {
  let precedence = { "+": 1, "-": 1, "*": 2, "/": 2, "%": 2, '²': 3 };
  let output = [];
  let operatorStack = [];

  expression = evaluateSquareRoot(expression);

  // Tokenize the expression
  let tokens = expression.match(/\d+\.?\d*|[+\-*%/()²]/g);

  console.log(tokens);

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
    console.log(postfix);
    for (let token of postfix) {    
      if (!isNaN(token)) {
        stack.push(parseFloat(token));
      } else{
        let b = stack.pop();
        let a = stack.length > 0 ? stack.pop() : null;
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
          case "²":
            stack.push(Math.pow(b, 2));
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
