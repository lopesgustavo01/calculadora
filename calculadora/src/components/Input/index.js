import { InputContainer } from "./Styles";

function Input({currentNumber}) {
    return (
      <InputContainer>
        <input disabled value={currentNumber} placeholder="0"/>
      </InputContainer>
    );
  }
  
  export default Input;
  