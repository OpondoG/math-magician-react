import React from 'react';
import '../App.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calContainer">
        <div className="calculator-grid">
          <div className="output">
            <div className="previous-operand" />
            <div className="current-operand" />
          </div>

          <button type="button" className="btn">
            AC
          </button>
          <button type="button" className="btn">
            +/-
          </button>
          <button type="button" className="btn">
            %
          </button>
          <button type="button" className="btn function-btn">
            ÷
          </button>
          <button type="button" className="btn">
            7
          </button>
          <button type="button" className="btn">
            8
          </button>
          <button type="button" className="btn">
            9
          </button>
          <button type="button" className="btn function-btn">
            &times;
          </button>
          <button type="button" className="btn">
            4
          </button>
          <button type="button" className="btn">
            5
          </button>
          <button type="button" className="btn">
            6
          </button>
          <button type="button" className="btn function-btn">
            -
          </button>
          <button type="button" className="btn">
            1
          </button>
          <button type="button" className="btn">
            2
          </button>
          <button type="button" className="btn">
            3
          </button>
          <button type="button" className="btn function-btn">
            +
          </button>
          <button type="button" className="span-two">
            0
          </button>
          <button type="button" className="btn">
            .
          </button>
          <button type="button" className="btn function-btn">
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
