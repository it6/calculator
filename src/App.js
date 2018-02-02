import React, { Component } from 'react';

class App extends Component {
  state = {
    summary: ''
  };

  calculateResult(inputCalculation) {
    const operations = inputCalculation.split(/[\d]/).filter(Boolean),
      numbers = inputCalculation.split(/[%x+\-÷]+/);

    // let result = ;
    for (var i = 1; i < numbers.length; i++) {
      // result = operate(numbers[i])
    }
    console.log(numbers, operations);
  }

  handleClick = event => {
    const operators = ['+', '-', '%', '*', '/'];

    switch (event.target.innerText) {
      case '=':
        this.calculateResult(this.state.summary.slice());
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
    return (
      <div className="calculator" onClick={this.handleClick}>
        <div className="row top">{this.state.summary}</div>
        <div className="row">
          <CalcButton value="AC" />
          <CalcButton value="+/_" />
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
