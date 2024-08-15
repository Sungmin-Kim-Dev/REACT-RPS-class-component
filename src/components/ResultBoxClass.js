import React, {Component} from 'react';

export default class ResultBoxClass extends Component {
  render() {
    let result = '';
    if (this.props.title === 'Computer' && this.props.result !== 'Draw' && this.props.result !== 'Ready') {
      result = this.props.result === 'Win' ? 'Lose' : 'Win';
    } else {
      result = this.props.result;
    }
    const borderColor = result === 'Win' ? 'border-red-500' : result === 'Lose' ? 'border-blue-500' : 'border-stone-600';
    return (
      <div className={`my-result border-4 ${borderColor} flex flex-col gap-4 px-2 py-4 shadow-xl`}>
        <p className="result-title text-3xl text-center">{this.props.title}</p>
        <img className={result === 'Lose' ? 'grayscale' : ''} src={`/img/${this.props.name}-big.png`} alt={this.props.name} />
        <p className="result text-2xl text-center">{result}</p>
      </div>
    );
  }
}
