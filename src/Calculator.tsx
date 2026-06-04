import { useState } from "react";
import { evaluate } from "./utils/parser-eval";

function Calculator() {
  const [expression, setExpression] = useState<string>("");

  const evaluateExpression = () => {
    try {
      let result: string = evaluate(expression);
      setExpression(result);
    } catch (error) {
      setExpression("Error");
    }
  };

  const writeDigit = (
    MouseEvent: React.MouseEvent<HTMLButtonElement>,
    digit: string,
  ) => {
    setExpression((prev) => prev + digit);
  };

  const remove = () => {
    setExpression("");
  };

  return (
    <div className="w-1/2 px-2 mx-auto my-auto">
      <div>
        <input
          type="text"
          className="text-left w-full bg-gray-200 rounded-2xl h-20 p-3 text-blue-950"
          value={expression}
          readOnly
        />
      </div>

      <div className="grid grid-cols-3">
        <button
          className="bg-blue-950 rounded-2xl h-16 m-2 text-white hover:bg-gray-200 hover:text-blue-950 cursor-pointer"
          onClick={remove}
        >
          C
        </button>
        <button
          className="bg-blue-950 rounded-2xl h-16 m-2 text-white hover:bg-gray-200 hover:text-blue-950"
          onClick={(e) => writeDigit(e, "3.141592654")}
        >
          π
        </button>
        <button
          className="bg-blue-950 rounded-2xl h-16 m-2 text-white hover:bg-gray-200 hover:text-blue-950"
          onClick={(e) => writeDigit(e, "√")}
        >
          √
        </button>

        <button
          className="bg-blue-950 rounded-2xl h-16 m-2 text-white hover:bg-gray-200 hover:text-blue-950"
          onClick={(e) => writeDigit(e, "²")}
        >
          x²
        </button>
        <button
          className="bg-blue-950 rounded-2xl h-16 m-2 text-white hover:bg-gray-200 hover:text-blue-950"
          onClick={(e) => writeDigit(e, "(")}
        >
          (
        </button>
        <button
          className="bg-blue-950 rounded-2xl h-16 m-2 text-white hover:bg-gray-200 hover:text-blue-950"
          onClick={(e) => writeDigit(e, ")")}
        >
          )
        </button>
        <button
          className="bg-blue-950 rounded-2xl h-16 m-2 text-white hover:bg-gray-200 hover:text-blue-950"
          onClick={(e) => writeDigit(e, "/")}
        >
          /
        </button>
        <button
          className="bg-blue-950 rounded-2xl h-16 m-2 text-white hover:bg-gray-200 hover:text-blue-950"
          onClick={(e) => writeDigit(e, "*")}
        >
          *
        </button>
        <button
          className="bg-blue-950 rounded-2xl h-16 m-2 text-white hover:bg-gray-200 hover:text-blue-950"
          onClick={(e) => writeDigit(e, "-")}
        >
          -
        </button>
        <button
          className="bg-blue-950 rounded-2xl h-16 m-2 text-white hover:bg-gray-200 hover:text-blue-950"
          onClick={(e) => writeDigit(e, "+")}
        >
          +
        </button>
        <button
          className="bg-blue-950 rounded-2xl h-16 m-2 text-white hover:bg-gray-200 hover:text-blue-950"
          onClick={(e) => writeDigit(e, "%")}
        >
          MOD
        </button>
        <button
          className="bg-blue-950 rounded-2xl h-16 m-2 text-white hover:bg-gray-200 hover:text-blue-950"
          onClick={(e) => writeDigit(e, "7")}
        >
          7
        </button>
        <button
          className="bg-blue-950 rounded-2xl h-16 m-2 text-white hover:bg-gray-200 hover:text-blue-950"
          onClick={(e) => writeDigit(e, "8")}
        >
          8
        </button>
        <button
          className="bg-blue-950 rounded-2xl h-16 m-2 text-white hover:bg-gray-200 hover:text-blue-950"
          onClick={(e) => writeDigit(e, "9")}
        >
          9
        </button>
        <button
          className="bg-blue-950 rounded-2xl h-16 m-2 text-white hover:bg-gray-200 hover:text-blue-950"
          onClick={(e) => writeDigit(e, "4")}
        >
          4
        </button>
        <button
          className="bg-blue-950 rounded-2xl h-16 m-2 text-white hover:bg-gray-200 hover:text-blue-950"
          onClick={(e) => writeDigit(e, "5")}
        >
          5
        </button>
        <button
          className="bg-blue-950 rounded-2xl h-16 m-2 text-white hover:bg-gray-200 hover:text-blue-950"
          onClick={(e) => writeDigit(e, "6")}
        >
          6
        </button>
        <button
          className="bg-blue-950 rounded-2xl h-16 m-2 text-white hover:bg-gray-200 hover:text-blue-950"
          onClick={(e) => writeDigit(e, "1")}
        >
          1
        </button>
        <button
          className="bg-blue-950 rounded-2xl h-16 m-2 text-white hover:bg-gray-200 hover:text-blue-950"
          onClick={(e) => writeDigit(e, "2")}
        >
          2
        </button>
        <button
          className="bg-blue-950 rounded-2xl h-16 m-2 text-white hover:bg-gray-200 hover:text-blue-950"
          onClick={(e) => writeDigit(e, "3")}
        >
          3
        </button>
        <button
          className="bg-blue-950 rounded-2xl h-16 m-2 text-white hover:bg-gray-2000 hover:text-blue-950"
          onClick={(e) => writeDigit(e, "0")}
        >
          0
        </button>
        <button
          className="bg-blue-950 rounded-2xl h-16 m-2 text-white hover:bg-gray-200 hover:text-blue-950"
          onClick={(e) => writeDigit(e, ".")}
        >
          .
        </button>
        <button
          className="bg-blue-950 rounded-2xl h-16 m-2 text-white hover:bg-gray-200 hover:text-blue-950"
          onClick={evaluateExpression}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
