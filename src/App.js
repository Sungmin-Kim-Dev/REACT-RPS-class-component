import './App.css';
import {useState} from 'react';
import Btn from './components/Btn';
import ResultBox from './components/ResultBox';

// 1. 박스 2개 - 타이틀, 사진, 결과 텍스트
// 2. 가위 바위 보 버튼
// 3. 버튼을 누르면 그 값을 왼쪽 박스에 표시
// 4. 컴퓨터는 랜덤 선택
// 5. 3, 4의 결과에 따라 승패 판단
// 6. 결과에 따라 테두리 색 - 이기면 빨강, 지면 파랑, 비기면 검정

function App() {
  const choice = ['rock', 'paper', 'scissors'];
  const getRandom = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };
  const getResult = (user, com) => {
    if (user === com) {
      return 'Draw';
    } else if (user === 'rock') {
      return com === 'scissors' ? 'Win' : 'Lose';
    } else if (user === 'paper') {
      return com === 'rock' ? 'Win' : 'Lose';
    } else if (user === 'scissors') {
      return com === 'paper' ? 'Win' : 'Lose';
    }
  };
  const [userSelect, setUserSelect] = useState(null);
  const [comSelect, setComSelect] = useState(null);
  const [result, setResult] = useState('Ready');
  const play = (e) => {
    const user = e.target.alt;
    setUserSelect(user);
    const com = getRandom(choice);
    setComSelect(com);
    setResult(getResult(user, com));
  };

  return (
    <div className="p-4 flex flex-col items-center">
      <div className="result-text text-center my-6 text-4xl sm:text-6xl">{result === 'Win' || result === 'Lose' ? `You ${result}!` : result}</div>
      <div className="result-box max-w-[712px] grid grid-cols-2 gap-4">
        <ResultBox title="You" name={userSelect ? userSelect : 'unknown'} result={result}></ResultBox>
        <ResultBox title="Computer" name={comSelect ? comSelect : 'unknown'} result={result}></ResultBox>
      </div>
      <div className="buttons mt-8 flex gap-6 justify-center">
        <Btn name="rock" select={userSelect} onPress={play}></Btn>
        <Btn name="paper" select={userSelect} onPress={play}></Btn>
        <Btn name="scissors" select={userSelect} onPress={play}></Btn>
      </div>
    </div>
  );
}

export default App;
