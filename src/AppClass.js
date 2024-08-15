import React, {Component} from 'react';
import BtnClass from './components/BtnClass';
import ResultBoxClass from './components/ResultBoxClass';

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelect: null,
      comSelect: null,
      result: 'Ready',
    };
  }
  getRandom = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };
  getResult = (user, com) => {
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
  // setUserSelect = (user) => {
  //   this.setState({
  //     userSelect: user,
  //   });
  // };
  // setComSelect = (com) => {
  //   this.setState({
  //     comSelect: com,
  //   });
  // };
  setResult = (user, com) => {
    this.setState({
      userSelect: user,
      comSelect: com,
      result: this.getResult(user, com),
    });
  };
  play = (e) => {
    const choice = ['rock', 'paper', 'scissors'];
    const user = e.target.alt;
    // this.setUserSelect(user);
    const com = this.getRandom(choice);
    // this.setComSelect(com);
    this.setResult(user, com);
  };
  render() {
    return (
      <div className="p-4 flex flex-col items-center">
        <div className="result-text text-center my-6 text-4xl sm:text-6xl">
          {this.state.result === 'Win' || this.state.result === 'Lose' ? `You ${this.state.result}!` : this.state.result}
        </div>
        <div className="result-box max-w-[712px] grid grid-cols-2 gap-4">
          <ResultBoxClass title="You" name={this.state.userSelect ? this.state.userSelect : 'unknown'} result={this.state.result}></ResultBoxClass>
          <ResultBoxClass title="Computer" name={this.state.comSelect ? this.state.comSelect : 'unknown'} result={this.state.result}></ResultBoxClass>
        </div>
        <div className="buttons mt-8 flex gap-6 justify-center">
          <BtnClass name="rock" select={this.state.userSelect} onPress={this.play}></BtnClass>
          <BtnClass name="paper" select={this.state.userSelect} onPress={this.play}></BtnClass>
          <BtnClass name="scissors" select={this.state.userSelect} onPress={this.play}></BtnClass>
        </div>
      </div>
    );
  }
}
