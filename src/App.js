import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row, Column } from "./styles";
import { useState } from 'react';

const App = () => {

  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');
  const [finishOperation, setFinishOperation] = useState(false)

  const handleClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  }

  const handleAddNumber = (number) => {

    if (finishOperation) {
      setCurrentNumber(number)
    } else {
      setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`);
    }
    setFinishOperation(false)
  }

  const handlerSumNumbers = () => {

    if (firstNumber === '0') {

      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('+');

    } else {

      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
      setFinishOperation(true)
      setFirstNumber('0')
    }
  }

  const handleMinusNumbers = () => {

    if (firstNumber === '0') {

      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('-');

    } else {
      
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
      setFinishOperation(true)
      setFirstNumber('0')

    }
  }

  const handleMultiplyNumbers = () => {

    if (firstNumber === '0') {

      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('x');

    } else {

      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
      setFinishOperation(true)
      setFirstNumber('0')

    }
  }

  const handleDivisorNumber = () => {

    if (firstNumber === '0') {

      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('/');

    } else {

      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
      setFinishOperation(true)
      setFirstNumber('0')

    }
  }


  const handleDelNumber = () => {

    if (currentNumber !== '0') {

      let newNumber = currentNumber.slice(0, -1)

      if (newNumber === '') {
        newNumber = '0'
      }

      setCurrentNumber(newNumber)

    } else {
      setCurrentNumber('0')
    }

  }


  const handleEquals = () => {

    setFinishOperation(true)

    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {

      switch (operation) {

        case '+':
          handlerSumNumbers();
          break;

        case '-':
          handleMinusNumbers();
          break;

        case 'x':
          handleMultiplyNumbers();
          break;

        case '/':
          handleDivisorNumber();
          break;

        default:
          break;

      }
    }

    setFirstNumber('0')

  }

  return (
    <Container>

      <Content>

        <Input value={currentNumber} />

        <Row>
          <Button label={"AC"} onClick={handleClear} />
          <Button label={"©"} />
          <Button label={"©"} />
          <Button label={"÷"} onClick={handleDivisorNumber} />
        </Row>

        <Row>
          <Button label={"7"} onClick={() => handleAddNumber('7')} />
          <Button label={"8"} onClick={() => handleAddNumber('8')} />
          <Button label={"9"} onClick={() => handleAddNumber('9')} />
          <Button label={"x"} onClick={handleMultiplyNumbers} />
        </Row>

        <Row>
          <Button label={"4"} onClick={() => handleAddNumber('4')} />
          <Button label={"5"} onClick={() => handleAddNumber('5')} />
          <Button label={"6"} onClick={() => handleAddNumber('6')} />
          <Button label={"-"} onClick={handleMinusNumbers} />
        </Row>

        <Row>
          <Button label={"1"} onClick={() => handleAddNumber('1')} />
          <Button label={"2"} onClick={() => handleAddNumber('2')} />
          <Button label={"3"} onClick={() => handleAddNumber('3')} />
          <Button label={"+"} onClick={handlerSumNumbers} />
        </Row>

        <Row>
          <Button label={"0"} onClick={() => handleAddNumber('0')} />
          <Button label={"."} onClick={() => handleAddNumber('.')} />
          <Button label={"<"} onClick={handleDelNumber} />
          <Button label={"="} onClick={handleEquals} />
        </Row>

      </Content>

    </Container>
  );
}

export default App;
