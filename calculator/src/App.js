import './App.css';
import {useState} from "react";
import Body from "./Body";
import Display from "./Display";
import ButtonContainer from "./ButtonContainer";
import Button from "./Button";

const buttonValues = [
  ['AC', '±', '%', '÷'],
  ['7', '8', '9', '×'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '=']
]

function App() {

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
                        ? invertClickHandler
                        : button === "%"
                        ? percentClickHandler
                        : button === "="
                        ? equalsClickHandler
                        : button === "÷" || button === "×" || button === "-" || button === "+"
                        ? signClickHandler
                        : button === "."
                        ? commaClickHandler
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
