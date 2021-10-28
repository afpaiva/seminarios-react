import * as S from './style';
import { useState } from 'react';

function App() {

  const [display, setDisplay] = useState([]);
  const [firstOperand, setFirstOperand] = useState('');
  const [secondOperand, setSecondOperand] = useState('');
  const [operator, setOperator] = useState('');
  const [switchOperator, setSwitchOperator] = useState(false);

  const saveOp = (op) => {
    if (op === '+' ||
        op === '-' ||
        op === '*' ||
        op === '/'){
          setOperator(op);
          setSwitchOperator(true);
          setDisplay([]);
    }
    else{
      let disp = [...display, op];
      setDisplay([...display, op]);
      !switchOperator ?
        setFirstOperand(disp.join('')) :
        setSecondOperand(disp.join(''));
    }
  }

  const calculate = () => {
    setOperator('');
    switch(operator){
      case '+':
        setDisplay([Number(firstOperand) + Number(secondOperand)]);
        setFirstOperand([Number(firstOperand) + Number(secondOperand)]);
      break;
      case '-':
        setDisplay([Number(firstOperand) - Number(secondOperand)]);
        setFirstOperand([Number(firstOperand) - Number(secondOperand)]);
      break;
      case '*':
        setDisplay([Number(firstOperand) * Number(secondOperand)]);
        setFirstOperand([Number(firstOperand) * Number(secondOperand)]);
      break;
      case '/':
        setDisplay([(Number(firstOperand) / Number(secondOperand))]);
        setFirstOperand([(Number(firstOperand) / Number(secondOperand))]);
      break;
    }
  }

  const clear = () => {
    setDisplay([]);
    setOperator('');
    setFirstOperand('');
    setSecondOperand('');
    setSwitchOperator(false);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <S.Background>
      <S.Frame>
        <S.Title>React.JS calculator</S.Title>
        <S.Display>
            {display.join('').slice(0,15) + operator}
        </S.Display>
        <S.Keyboard onSubmit={handleSubmit}>

          <S.Button
            style={{gridColumn: '1/4'}}
            onClick={() => clear()}
          >C</S.Button>
          <S.Button
            onClick={() => saveOp('+')}
          >+</S.Button>

          <S.Button
           onClick={() => saveOp(7)}
          >7</S.Button>
          <S.Button
           onClick={() => saveOp(8)}
          >8</S.Button>
          <S.Button
           onClick={() => saveOp(9)}
          >9</S.Button>
          <S.Button
            onClick={() => saveOp('-')}
          >-</S.Button>

          <S.Button
           onClick={() => saveOp(4)}
          >4</S.Button>
          <S.Button
           onClick={() => saveOp(5)}
          >5</S.Button>
          <S.Button
           onClick={() => saveOp(6)}
          >6</S.Button>
          <S.Button
            onClick={() => saveOp('*')}
          >*</S.Button>

          <S.Button
           onClick={() => saveOp(1)}
          >1</S.Button>
          <S.Button
           onClick={() => saveOp(2)}
          >2</S.Button>
          <S.Button
           onClick={() => saveOp(3)}
          >3</S.Button>
          <S.Button
            onClick={() => saveOp('/')}
          >/</S.Button>

          <S.Button
           onClick={() => saveOp(0)}
          >0</S.Button>
          <S.Button
           onClick={() => saveOp('.')}
          >.</S.Button>
          <S.Button style={{gridColumn: '3/5'}}
            onClick={() => calculate()}
          >=</S.Button>

        </S.Keyboard>
        <S.Title>⚛ André F. Paiva</S.Title>
      </S.Frame>
    </S.Background>
  );
}

export default App;