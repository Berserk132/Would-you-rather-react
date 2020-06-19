import React, { Component } from "react";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import Question from "./Question";
import checkQuestions from "../../utils/helper";


class AnsweredQuestionsViewer extends Component {
  render() {
    const { questionId, users, questions } = this.props;

    return (
      <div className="container">
        <LoadingBar />
        {this.props.loading === true ? null : (
          <ul>

            {questionId.map((id) => (
              <li key={id}>
                <Question
                  id={id}
                  avatar={users[questions[id].author].avatarURL}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions, users }) {
  
    const filteredQuestions = Object.keys(questions).filter((question) => {
        return !checkQuestions(questions[question], authedUser);
    });

    return {
        loading: authedUser === "",
        questionId: filteredQuestions.sort(
        (a, b) => questions[b].timestamp - questions[a].timestamp
        ),
        authedUser,
        questions,
        users,
    };
}

export default connect(mapStateToProps)(AnsweredQuestionsViewer);
