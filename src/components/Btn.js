import React from 'react';

const Btn = (props) => {
  const buttonColor = props.select === props.name ? 'bg-emerald-300' : 'bg-amber-100';
  return (
    <button className={`w-12 sm:w-16 rounded-full border-2 border-slate-500 shadow-lg transition-all duration-300 hover:scale-125 ${buttonColor}`} onClick={props.onPress}>
      <img src={`/img/${props.name}-btn.png`} alt={props.name} />
    </button>
  );
};

export default Btn;
