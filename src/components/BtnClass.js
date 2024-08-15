import React, {Component} from 'react';

export default class BtnClass extends Component {
  render() {
    const buttonColor = this.props.select === this.props.name ? 'bg-emerald-300' : 'bg-amber-100';
    return (
      <button
        className={`w-12 sm:w-16 rounded-full border-2 border-slate-500 shadow-lg transition-all duration-300 hover:scale-125 ${buttonColor}`}
        onClick={this.props.onPress}>
        <img src={`/img/${this.props.name}-btn.png`} alt={this.props.name} />
      </button>
    );
  }
}
