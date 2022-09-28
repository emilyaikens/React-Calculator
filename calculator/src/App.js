import logo from './logo.svg';
import './App.css';
import Body from "./Body";
import Display from "./Display";
import ButtonContainer from "./ButtonContainer";
import Button from "./Button";

function App() {

  return (
    <div className="App">
      <Body>
        <Display value="0" />
        <ButtonContainer>
          <Button className="" value="0" 
              onClick={() => {console.log("button clicked")}}/>
        </ButtonContainer>
      </Body>
    </div>
  );
}

export default App;
