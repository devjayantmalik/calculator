import React from "react";
import ResultBar from "./components/ResultBar";
import Button from "./components/Button";

class App extends React.Component {
  state = {
    equation: [],
    number: "",
    solution: 0,
  };

  _solveEquation = (equation) => {
    let result = 0;

    for (let i = 0; i < equation.length; i = i + 3) {
      const num1 = equation[i];
      const operator = equation[i + 1];
      const num2 = equation[i + 2];

      switch (operator) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "/":
          result = num1 / num2;
          break;
        case "*":
          result = num1 * num2;
          break;
        default:
          console.log(`invalid operator found: ${operator}`);
      }
    }

    return result;
  };

  _handleClear = () => {
    this.setState({ equation: [], number: "", solution: 0 });
  };

  _handleOperator = (operator) => {
    // add the number and operator to equation
    const equation = [
      ...this.state.equation,
      Number(this.state.number),
      operator,
    ];

    if (equation[equation.length - 1] === "=") {
      equation.pop();
    }
    this.setState({ equation: equation, number: "" });

    if (operator === "=") {
      // solve the equation and print the result
      const solution = this._solveEquation(equation);
      this.setState({ solution: solution, number: solution.toString() });
      return;
    }
  };

  _handleNumber = (num) => {
    this.setState({ number: `${this.state.number}${num}` });
  };

  render() {
    return (
      <main className="container mt-6 pl-3 pr-3 pt-3 pb-3">
        <section className="mb-3 mt-3 ">
          <ResultBar value={this.state.number || "0"} />
        </section>
        <section>
          <div className="columns is-mobile">
            <div className="column ">
              <Button title="C" isOperator onClick={this._handleClear} />
            </div>
            <div className="column">
              <Button title="0" onClick={this._handleNumber} />
            </div>
            <div className="column">
              <Button title="*" isOperator onClick={this._handleOperator} />
            </div>
            <div className="column">
              <Button title="/" isOperator onClick={this._handleOperator} />
            </div>
          </div>

          <div className="columns is-mobile">
            <div className="column">
              <Button title="7" onClick={this._handleNumber} />
            </div>
            <div className="column">
              <Button title="8" onClick={this._handleNumber} />
            </div>
            <div className="column">
              <Button title="9" onClick={this._handleNumber} />
            </div>
            <div className="column">
              <Button title="-" isOperator onClick={this._handleOperator} />
            </div>
          </div>

          <div className="columns is-mobile">
            <div className="column">
              <Button title="4" onClick={this._handleNumber} />
            </div>
            <div className="column">
              <Button title="5" onClick={this._handleNumber} />
            </div>
            <div className="column">
              <Button title="6" onClick={this._handleNumber} />
            </div>
            <div className="column">
              <Button title="+" isOperator onClick={this._handleOperator} />
            </div>
          </div>

          <div className="columns is-mobile">
            <div className="column">
              <Button title="1" onClick={this._handleNumber} />
            </div>
            <div className="column">
              <Button title="2" onClick={this._handleNumber} />
            </div>
            <div className="column">
              <Button title="3" onClick={this._handleNumber} />
            </div>
            <div className="column">
              <Button title="=" isOperator onClick={this._handleOperator} />
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default App;
