import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


class Question extends Component {


  render() {

    const {question} = this.props

    return (
      <div className="question">
        <div className="question-header">
          <h5>{question.author} asks:</h5>
        </div>
        <div className="question-body">
          <div className="question-left">
            <img
              src={this.props.avatar}
              alt={`Avatar of some flowers`}
              className="question-avatar"
            />
          </div>
          <div className="question-right">
            <h3>Would you rather</h3>

            <div>
              <p>{question.optionOne.text}</p>
            </div>
            <h5>Or</h5>
            <div>
              <p>{question.optionTwo.text}</p>
            </div>
            <div>
              <Link to={`/question/${question.id}`}>
                <button className="view-poll-btn">View Poll</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions }, {id}) {
  return {
    question: questions[id],
  };
}

export default connect(mapStateToProps)(Question)