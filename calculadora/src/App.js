import { Container, Content, Row } from "./styles";
import Button from "./components/Button";
import Input from "./components/Input";
import { useState } from "react";

function App() {
  const [currentNumber, setCurrentNumber] = useState(''); 
  const [firstNumber, setFirstNumber] = useState('');      
  const [operacao, setOperacao] = useState('');           

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev}${number}`);
  };

  // Função para gerenciar as operações
  const handleOperacao = (op) => {
    if (op === 'c') {
      setCurrentNumber('');
      setFirstNumber('');
      setOperacao('');
    } else if (currentNumber !== '') {
      if (firstNumber !== '') {
        if (op === '=') {
          const result = calculo(firstNumber, currentNumber, operacao);
          setCurrentNumber(String(result));
          setFirstNumber('');
          setOperacao('');
        } else {
          setOperacao(op);
        }
      } else {
        setFirstNumber(currentNumber);
        setCurrentNumber('');
        setOperacao(op);
      }
    }
  };

  // Função de cálculo
  const calculo = (num1, num2, op) => {
    console.log('Chamou calculo com op:', op, 'num1:', num1, 'num2:', num2);

    if (num1 !== '' && num2 !== '' && op !== '') {
      let result = 0;
      switch (op) {
        case '+':
          result = parseFloat(num1) + parseFloat(num2);
          break;
        case '-':
          result = parseFloat(num1) - parseFloat(num2);
          break;
        case '/':
          result = parseFloat(num1) / parseFloat(num2);
          break;
        case '*':
          result = parseFloat(num1) * parseFloat(num2);
          break;
        default:
          console.log('Operação inválida');
          return;
      }

      console.log('Resultado:', result);
      return result;
    }
  };

  return (
    <Container>
      <Content>
        <Input currentNumber={currentNumber} />
        <Row>
          <Button label={"x"} onClick={() => handleOperacao('*')} />
          <Button label={"/"} onClick={() => handleOperacao('/')} />
          <Button label={"C"} onClick={() => handleOperacao('c')} />
          <Button label={"X"} />
        </Row>
        <Row>
          <Button label={"7"} onClick={() => handleAddNumber('7')} />
          <Button label={"8"} onClick={() => handleAddNumber('8')} />
          <Button label={"9"} onClick={() => handleAddNumber('9')} />
          <Button label={"-"} onClick={() => handleOperacao('-')} />
        </Row>
        <Row>
          <Button label={"4"} onClick={() => handleAddNumber('4')} />
          <Button label={"5"} onClick={() => handleAddNumber('5')} />
          <Button label={"6"} onClick={() => handleAddNumber('6')} />
          <Button label={"+"} onClick={() => handleOperacao('+')} />
        </Row>
        <Row>
          <Button label={"1"} onClick={() => handleAddNumber('1')} />
          <Button label={"2"} onClick={() => handleAddNumber('2')} />
          <Button label={"3"} onClick={() => handleAddNumber('3')} />
          <Button label={"="} onClick={() => handleOperacao('=')} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
