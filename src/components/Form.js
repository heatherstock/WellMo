import React, { Component } from 'react';
import Header from './Header';
import ScaleQuestionView from './ScaleQuestionView';
import OutputView from './OutputView';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstScaleScore: 50,
      savedFirstScaleScore: undefined,
      buttonClicked: false
    };
  }

  decider() {
    if (this.state.buttonClicked === true) {
      return 'output';
    } else return 'scaleQuestion';
  }

  handleTextBoxInput = event => // i.e. scaleInput
    this.setState({ firstScaleScore: event.target.value });

  handleDisplayClick = () => {
    let { firstScaleScore } = this.state;
    this.setState({
      savedFirstScaleScore: firstScaleScore,
      buttonClicked: true
    });
  };

  render() {
    const VIEWS = {
      scaleQuestion: (
        <ScaleQuestionView
          score={this.state.firstScaleScore}
          handleTextBoxInput={this.handleTextBoxInput}
          handleDisplayClick={this.handleDisplayClick}
        />
      ),
      output: <OutputView score={this.state.savedFirstScaleScore} />

    };
    return (
      <div>
        <Header />
        {VIEWS[this.decider()]}
      </div>
    );
  }
}

export default Form;
