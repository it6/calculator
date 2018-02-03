import React, { Component } from 'react';

class App extends Component {
  state = {
    summary: ''
  };

  calculateResult(inputCalculation) {
    let operations = inputCalculation
        .split(/[\d]/)
        .filter(Boolean)
        .filter(val => val !== '.'),
      numbers = inputCalculation.split(/[%*+/\-]+/).map(Number),
      result = numbers.reduce((number1, number2, index) => {
        switch (operations[index - 1]) {
          case '+':
            return number1 + number2;
          case '-':
            return number1 - number2;
          case '%':
            return number1 % number2;
          case '*':
            return number1 * number2;
          case '/':
            return number1 / number2;
        }
      });
    this.setState({ summary: result.toString() });
  }

  handleClick = event => {
    const operators = ['+', '-', '%', '*', '/'];

    switch (event.target.innerText) {
      case '=':
        this.calculateResult(this.state.summary.slice());
        break;
      case 'C':
        this.setState({ summary: '' });
        break;
      case '+':
      case '%':
      case '/':
      case '*':
      case '-':
      case '.':
        if (
          operators.includes(this.state.summary.slice(-1)) &&
          operators.includes(event.target.innerText)
        ) {
          break;
        }
      default:
        this.setState({
          summary: this.state.summary.concat(event.target.innerText)
        });
        break;
    }
  };

  render() {
    let buttonsArray = [
      'C',
      '%',
      '/',
      '7',
      '8',
      '9',
      '*',
      '4',
      '5',
      '6',
      '-',
      '1',
      '2',
      '3',
      '+',
      '0',
      '.',
      '='
    ];
    return (
      <div className="calculator" onClick={this.handleClick}>
        <div className="row top">{this.state.summary}</div>
        <div className="row">
          <CalcButton value="C" />
          <CalcButton value="%" />
          <CalcButton value="/" />
        </div>

        <div className="row">
          <CalcButton value="7" />
          <CalcButton value="8" />
          <CalcButton value="9" />
          <CalcButton value="*" />
        </div>

        <div className="row">
          <CalcButton value="4" />
          <CalcButton value="5" />
          <CalcButton value="6" />
          <CalcButton value="-" />
        </div>

        <div className="row">
          <CalcButton value="1" />
          <CalcButton value="2" />
          <CalcButton value="3" />
          <CalcButton value="+" />
        </div>

        <div className="row">
          <CalcButton value="0" />
          <CalcButton value="." />
          <CalcButton value="=" />
        </div>
      </div>
    );
  }
}

function CalcButton(props) {
  return <button className="button">{props.value}</button>;
}

export default App;
