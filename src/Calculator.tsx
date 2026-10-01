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

  const removeAll = () => {
    setExpression("");
  };

  const remove = () => {
    setExpression((prev) => prev.slice(0, -1));
  };

  return (
      <div className="col-1 align-middle border-0 rounded-2xl bg-white p-6 shadow-lg">
        <div>
          <input
            type="text"
            className="text-left w-full bg-gray-100 rounded-2xl h-20 p-3 text-blue-950"
            value={expression}
            readOnly
          />
        </div>

        <div className="grid grid-cols-2">
          <button
            className="button"
            onClick={removeAll}
          >
            C
          </button>
          <button
            className="button"
            onClick={remove}
          >
            del
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <button
            className="button"
            onClick={(e) => writeDigit(e, "3.141592654")}
          >
            π
          </button>
          <button
            className="button"
            onClick={(e) => writeDigit(e, "√")}
          >
            √
          </button>

          <button
            className="button"
            onClick={(e) => writeDigit(e, "²")}
          >
            x²
          </button>
          <button
            className="button"
            onClick={(e) => writeDigit(e, "(")}
          >
            (
          </button>
          <button
            className="button"
            onClick={(e) => writeDigit(e, ")")}
          >
            )
          </button>
          <button
            className="button"
            onClick={(e) => writeDigit(e, "/")}
          >
            /
          </button>
          <button
            className="button"
            onClick={(e) => writeDigit(e, "*")}
          >
            *
          </button>
          <button
            className="button"
            onClick={(e) => writeDigit(e, "-")}
          >
            -
          </button>
          <button
            className="button"
            onClick={(e) => writeDigit(e, "+")}
          >
            +
          </button>
          <button
            className="button"
            onClick={(e) => writeDigit(e, "%")}
          >
            MOD
          </button>
          <button
            className="button"
            onClick={(e) => writeDigit(e, "7")}
          >
            7
          </button>
          <button
            className="button"
            onClick={(e) => writeDigit(e, "8")}
          >
            8
          </button>
          <button
            className="button"
            onClick={(e) => writeDigit(e, "9")}
          >
            9
          </button>
          <button
            className="button"
            onClick={(e) => writeDigit(e, "4")}
          >
            4
          </button>
          <button
            className="button"
            onClick={(e) => writeDigit(e, "5")}
          >
            5
          </button>
          <button
            className="button"
            onClick={(e) => writeDigit(e, "6")}
          >
            6
          </button>
          <button
            className="button"
            onClick={(e) => writeDigit(e, "1")}
          >
            1
          </button>
          <button
            className="button"
            onClick={(e) => writeDigit(e, "2")}
          >
            2
          </button>
          <button
            className="button"
            onClick={(e) => writeDigit(e, "3")}
          >
            3
          </button>
          <button
            className="button"
            onClick={(e) => writeDigit(e, "0")}
          >
            0
          </button>
          <button
            className="button"
            onClick={(e) => writeDigit(e, ".")}
          >
            .
          </button>
          <button
            className="button" 
            style={{ gridColumn:"3", backgroundColor: "oklch(28.2% 0.091 267.935)", color: "white" }}
            onClick={evaluateExpression}
          >
            =
          </button>
        </div>
      </div>
  );
}

export default Calculator;
