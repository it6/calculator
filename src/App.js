import React, { Component } from 'react';

class App extends Component {
  state = {
    summary: ''
  };

  handleClick = event => {
    this.setState({
      summary: this.state.summary.concat(event.target.innerText)
    });
  };

  render() {
    return (
      <div className="calculator" onClick={this.handleClick}>
        <div className="row top">{this.state.summary}</div>
        <div className="row">
          <CalcButton value="AC" />
          <CalcButton value="+/_" />
          <CalcButton value="%" />
          <CalcButton value="÷" />
        </div>

        <div className="row">
          <CalcButton value="7" />
          <CalcButton value="8" />
          <CalcButton value="9" />
          <CalcButton value="x" />
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
  return <div className="button">{props.value}</div>;
}

export default App;
