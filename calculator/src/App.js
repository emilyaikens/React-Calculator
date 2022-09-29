import logo from './logo.svg';
import './App.css';
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

  return (
    <div className="App">
      <Body>
        <Display value="0" />
        <ButtonContainer>
          {buttonValues.flat().map((btn, i) => {
              return (
                <Button 
                    key={i}
                    className={btn === '0' ? 'zero' : ''}
                    value={btn}
                    onClick={() => {console.log({btn})}}/>
              )
          })}
          
        </ButtonContainer>
      </Body>
    </div>
  );
}

export default App;
