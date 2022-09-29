import './App.css';
import {useState} from "react";
import Body from "./Body";
import Display from "./Display";
import ButtonContainer from "./ButtonContainer";
import Button from "./Button";

const buttonValues = [
  ['AC', '±', '%', '÷'],
  ['7', '8', '9', 'x'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '=']
]

function App() {

  // this handler gets triggered if any of the number are clicked. It gets
  // the value of the button and adds that to the current number value
  const numClickHandler = (n) => {
    n.preventDefault();
    const value = n.target.innerHTML; //gets value from button
    if (calculation.num.length < 16) {
      setCalculation({
        ...calculation, 
        num: calculation.num === 0 && value === '0' 
        ? '0' 
        : calculation.num % 1 === 0
        ? Number(calculation.num + value)
        : calculation.num + value,
        result: !calculation.sign ? 0 : calculation.result,
      });
    };
  };

  // this handler gets triggered when a decimal point is clicked. 
  const dotClickHandler = (d) => {
    d.preventDefault();
    const value = d.target.innerHTML;
    setCalculation({
      ...calculation,
      num: !calculation.num.toString().includes('.') //only add to value if there's not already a .
      ? calculation.num + value : calculation.num,
    });
  };

  // this handler gets triggered when a sign is pressed (plus, minus, divide, multiply)
  const signClickHandler = (s) => {
    s.preventDefault();
    const value = s.target.innerHTML;
    setCalculation ({
      ...calculation,
      sign: value, 
      result: ! calculation.result && calculation.num 
      ? calculation.num : calculation.result,
      num: 0,
    });
  };

  // this handler basically does the math when the equals button is clicked
  const equalsClickHandler = () => {
    if (calculation.sign && calculation.num) {
      const math = (a, b, sign) =>
        sign === '+' ? a + b 
        : sign === '-' ? a - b
        : sign === 'x' ? a * b
        : a / b;

      setCalculation ({
        ...calculation,
        result: calculation.num === "0" && calculation.sign === '÷'
        ? "No division by 0"
        : math (Number(calculation.result), Number(Calculation.num), calculation.sign),
        sign: '', //reset sign
        num: 0, //reset number
      });
    };
  };

  //this handler changes from negative to positive and positive to negative
  // when the ± button is clicked
  const negposClickHandler = () => {
    setCalculation ({
      ...calculation,
      num: calculation.num ? calculation.num * -1 : 0,
      result: calculation.result ? calculation.result * -1 : 0,
      sign: '',
    });
  };

  const percentClickHandler = () => {
    // parseFloat returns a floating point number
    let num = calculation.num ? parseFloat(calculation.num) : 0;
    let result = calculation.result ? parseFloat(calculation.result) : 0;
    setCalculation({
      ...calculation,
      num: (num /= 100),
      result: (result /= 100)
    });
  };

  // ********** use state *********************************** //
  const [calculation, setCalculation] = useState ({
    sign: '',
    num: 0, 
    result: 0,
    })

  return (

    <div className="App">
      <Body>
        <Display value={calculation.num ? calculation.num : calculation.result} />
        <ButtonContainer>
          {buttonValues.flat().map((button, index) => {
              return (
                <Button 
                    key={i}
                    className={button === '0' ? 'zero' : ''}
                    value={btn}
                    onClick={
                      button === "AC"
                        ? resetClickHandler
                        : button === "±"
                        ? negposClickHandler
                        : button === "%"
                        ? percentClickHandler
                        : button === "="
                        ? equalsClickHandler
                        : button === "÷" || button === "x" || button === "-" || button === "+"
                        ? signClickHandler
                        : button === "."
                        ? dotClickHandler
                        : numClickHandler
                    }
                  />
              )
          })}
          
        </ButtonContainer>
      </Body>
    </div>
  );
}

export default App;
