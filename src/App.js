import * as S from './style';

function App() {
  return (
    <S.Background>
      <S.Frame>
        <S.Title>Calculadora!</S.Title>
        <S.Display>
            012345678
        </S.Display>
        <S.Keyboard>
          <S.Button>C</S.Button>
          <S.Button></S.Button>
          <S.Button></S.Button>
          <S.Button>+</S.Button>

          <S.Button>7</S.Button>
          <S.Button>8</S.Button>
          <S.Button>9</S.Button>
          <S.Button>-</S.Button>

          <S.Button>4</S.Button>
          <S.Button>5</S.Button>
          <S.Button>6</S.Button>
          <S.Button>*</S.Button>

          <S.Button>1</S.Button>
          <S.Button>2</S.Button>
          <S.Button>3</S.Button>
          <S.Button>/</S.Button>

          <S.Button>0</S.Button>
          <S.Button></S.Button>
          <S.Button></S.Button>
          <S.Button>=</S.Button>
        </S.Keyboard>
      </S.Frame>
    </S.Background>
  );
}

export default App;