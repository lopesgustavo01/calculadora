import { ButtonContainer } from "./Styles";

function Button({label, onClick}) {
    return (
      <ButtonContainer onClick={onClick}>
        {label}
      </ButtonContainer>
    );
  }
  
  export default Button;
  