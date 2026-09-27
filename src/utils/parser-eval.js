function infixToPostfix(expression) {
  let precedence = { "+": 1, "-": 1, "*": 2, "/": 2, "%": 2, '²': 3, '√': 3 };
  let output = [];
  let operatorStack = [];

  //expression = evaluateSquareRoot(expression); 

  // Tokenize the expression
  let tokens = expression.match(/\d+\.?\d*|[+\-*%/()²√]/g);

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
    console.log("Postfix:", postfix);
    for (let token of postfix) {    
      if (!isNaN(token)) {
        stack.push(parseFloat(token));
      } else{
        let a, b;
        switch (token) {
          case "+":
            b = stack.pop();
             a = stack.length > 0 ? stack.pop() : null;
            stack.push(a + b);
            break;
          case "-":
             b = stack.pop();
             a = stack.length > 0 ? stack.pop() : null;
            stack.push(a - b);
            break;
          case "*":
             b = stack.pop();
             a = stack.length > 0 ? stack.pop() : null;    
            stack.push(a * b);
            break;
          case "/":
             b = stack.pop();
             a = stack.length > 0 ? stack.pop() : null;
            if (b === 0) {
              throw new Error("Division by zero");
            }
            stack.push(a / b);
            break;
          case "%":
             b = stack.pop();
             a = stack.length > 0 ? stack.pop() : null;
            if (b === 0) {
              throw new Error("Division by zero");
            }
            stack.push(a % b);
            break;
          case "²":
             b = stack.pop();
            
            stack.push(Math.pow(b, 2));
            break;
          case "√":
             b = stack.pop();
            stack.push(Math.sqrt(b));
            break;
          default:
            throw new Error("Invalid operator");
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
