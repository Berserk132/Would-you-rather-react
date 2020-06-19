import React, { Component } from "react";
import { connect } from "react-redux";
import ProgressBar from "react-bootstrap/ProgressBar";


class AnsweredQuestion extends Component {

    render () {

        const { id, users, questions, voteOne, voteTwo, authedUserAnswer } = this.props;

        const avatar = users[questions[id].author].avatarURL;
        const question = questions[id];

        // total number of votes
        const totalVotes = voteOne + voteTwo

        // calculate the perc of the two votes
        const voteOnePerc = ((voteOne/totalVotes) * 100).toFixed(2)
        const voteTwoPerc = ((voteTwo/totalVotes) * 100).toFixed(2)

        let firstDiv = ""
        let lastDiv = ""

        if (authedUserAnswer === "optionOne"){

            firstDiv = "vote-card-special"
            lastDiv = "vote-card";
        }
        else {

          firstDiv = "vote-card";
          lastDiv = "vote-card-special";
        }
          

        return (
          <div className="question">
            <div className="question-header">
              <h5>Asked by {question.author}:</h5>
            </div>
            <div className="question-body">
              <div className="question-left">
                <img
                  src={avatar}
                  alt={`Avatar of some flowers`}
                  className="question-avatar"
                />
              </div>
              <div className="question-right">
                <h3>Results:</h3>

                <div className={firstDiv}>
                  <p className="vote-card-header">
                    Would you rather be a {question.optionOne.text} ?
                  </p>
                  <ProgressBar
                    className="vote-card-progress"
                    variant="success"
                    animated="true"
                    now={voteOnePerc}
                    label={`${parseInt(voteOnePerc)}%`}
                  />

                  <h5 className="vote-card-footer">
                    {voteOne} out of {totalVotes} votes
                  </h5>
                </div>

                <div className={lastDiv}>
                  <p className="vote-card-header">
                    Would you rather be a {question.optionTwo.text} ?
                  </p>
                  <ProgressBar
                    className="vote-card-progress"
                    variant="success"
                    animated="true"
                    now={voteTwoPerc}
                    label={`${parseInt(voteTwoPerc)}%`}
                  />

                  <h5 className="vote-card-footer">
                    {voteTwo} out of {totalVotes} votes
                  </h5>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

function mapStateToProps({ authedUser, questions, users }) {
    
    return {
    authedUser,
    questions,
    users,
  };
}

export default connect(mapStateToProps)(AnsweredQuestion)