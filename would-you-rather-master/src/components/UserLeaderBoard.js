import React, { Component } from "react";
import { connect } from "react-redux";

class UserLeaderBoard extends Component {
  render() {
    const { user} = this.props;


    const answers = user.answers;
    const answersLength = Object.keys(answers).length;

    const questionLength = user.questions.length;

    return (
      <div className="question">
        <div className="question-body">
          <div className="question-left">
            <img
              src={user.avatarURL}
              alt={`Avatar of some flowers`}
              className="question-avatar"
            />
          </div>
          <div className="leaderboard-question-right">
            <h3>{user.name}</h3>

            <div className="leaderBoard-line">
              <p>Answered Questions</p>
              <p>{answersLength}</p>
            </div>

            <div className="leaderBoard-line">
              <p>Created Questions</p>
              <p>{questionLength}</p>
            </div>
          </div>
          <div className="leaderBoard-base">
            <div className="leaderBoard-header">
              <p>Score</p>
            </div>
            <div className="leaderBoard-score">
              <div className="circle">
                <p>{answersLength + questionLength}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default connect()(UserLeaderBoard);
