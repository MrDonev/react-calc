import './App.css';
import { useState } from 'react';

const Calculator = () => {
  let [digitsRender, setsDigitsRender] = useState(0);
  function RenderDigits(digitButton) {
    setsDigitsRender((currValue) => {
      if (currValue === 0) {
        return digitButton;
      }
      if (
        isNaN(Number(digitButton)) &&
        digitsRender.charAt(digitsRender.length - 1) === digitButton
      ) {
        return digitsRender;
      }
      digitsRender = currValue + '' + digitButton;
      return digitsRender;
    });
  }
  function resetDigits() {
    setsDigitsRender(0);
  }
  function AC() {
    resetDigits();
  }

  function equals() {
    digitsRender=eval(digitsRender).toString()
    setsDigitsRender(digitsRender);
  }
  return (
    <section className="button-section">
      <div id="wrap-calc">
        <div className="digit-field">
          <div className="digits">{digitsRender}</div>
        </div>
        <div className="button-divs">
          <button name="AC" onClick={() => AC()}>
            AC
          </button>
          <button name="+/-">+/-</button>
          <button name="%">%</button>
          <button name="÷" onClick={() => RenderDigits('/')}>
            ÷
          </button>
        </div>
        <div className="button-divs">
          <button name="7" onClick={() => RenderDigits('7')}>
            7
          </button>
          <button name="8" onClick={() => RenderDigits('8')}>
            8
          </button>
          <button name="9" onClick={() => RenderDigits('9')}>
            9
          </button>
          <button name="x" onClick={() => RenderDigits('*')}>
            X
          </button>
        </div>
        <div className="button-divs">
          <button name="4" onClick={() => RenderDigits('4')}>
            4
          </button>
          <button name="5" onClick={() => RenderDigits('5')}>
            5
          </button>
          <button name="6" onClick={() => RenderDigits('6')}>
            6
          </button>
          <button name="-" onClick={() => RenderDigits('-')}>
            -
          </button>
        </div>
        <div className="button-divs">
          <button name="1" onClick={() => RenderDigits('1')}>
            1
          </button>
          <button name="2" onClick={() => RenderDigits('2')}>
            2
          </button>
          <button name="3" onClick={() => RenderDigits('3')}>
            3
          </button>
          <button name="+" onClick={() => RenderDigits('+')}>
            +
          </button>
        </div>
        <div className="button-divs">
          <button name="0" onClick={() => RenderDigits('0')}>
            0
          </button>
          <button name="." onClick={() => RenderDigits('.')}>
            .
          </button>
          <button id="equals" name="=" onClick={() => equals()}>
            =
          </button>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
