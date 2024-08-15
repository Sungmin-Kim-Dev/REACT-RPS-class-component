import React from 'react';

const ResultBox = (props) => {
  let result = '';
  if (props.title === 'Computer' && props.result !== 'Draw' && props.result !== 'Ready') {
    result = props.result === 'Win' ? 'Lose' : 'Win';
  } else {
    result = props.result;
  }
  const borderColor = result === 'Win' ? 'border-red-500' : result === 'Lose' ? 'border-blue-500' : 'border-stone-600';
  return (
    <div className={`my-result border-4 ${borderColor} flex flex-col gap-4 px-2 py-4 shadow-xl`}>
      <p className="result-title text-3xl text-center">{props.title}</p>
      <img className={result === 'Lose' ? 'grayscale' : ''} src={`/img/${props.name}-big.png`} alt={props.name} />
      <p className="result text-2xl text-center">{result}</p>
    </div>
  );
};

export default ResultBox;
