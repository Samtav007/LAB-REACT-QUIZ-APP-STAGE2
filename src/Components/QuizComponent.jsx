import React, { Component } from "react";
import Data from "../../resources/quizQuestion.json";

export default class QuizComponent extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  clickPrev = () => {
    let ques = this.state.count == 0 ? Data.length - 1 : this.state.count - 1;
    this.setState({
      count: ques,
    });
  };

  clickNext = () => {
    let ques = this.state.count == Data.length - 1 ? 0 : this.state.count + 1;
    this.setState({
      count: ques,
    });
  };

  clickQuit = () => {
    window.confirm("Are you sure that you want to quit ?");
  };
  render() {
    return (
      <div className="main">
        <div className="Box">
          <h1>Question</h1>
          <div className="no">
            <span>{this.state.count + 1} </span>
            of <span>{Data.length}</span>
          </div>
          <div className="ques">{Data[this.state.count].question}</div>

          <div className="options">
            <div className="option">{Data[this.state.count].optionA}</div>
            <div className="option">{Data[this.state.count].optionB}</div>
            <div className="option">{Data[this.state.count].optionC}</div>
            <div className="option">{Data[this.state.count].optionD}</div>
          </div>

          <div className="controls">
            <button className="previous" onClick={this.clickPrev}>
              previous
            </button>
            <button className="next" onClick={this.clickNext}>
              next
            </button>
            <button className="quit" onClick={this.clickQuit}>
              quit
            </button>
          </div>
        </div>
      </div>
    );
  }
}
