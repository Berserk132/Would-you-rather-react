import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import {submitAnswerHandler} from '../../actions/questions'


class UnansweredQuestion extends Component {
  state = {
    answer: "optionOne",
  };

  onChangeHandler = (value) => {
    this.setState(() => ({
      answer: value,
    }));
  };

  onClickHandler = () => {

    const {dispatch, id} = this.props

    const question = { questionId: id, selectedOption: this.state.answer };

    dispatch(submitAnswerHandler(question))
  }
  render() {
    const { id, users, questions } = this.props;

    const avatar = users[questions[id].author].avatarURL;
    const question = questions[id];

    console.log(this.state.answer);
    return (
      <div className="question">
        <div className="question-header">
          <h5>{question.author} asks:</h5>
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
            <h3>Would you rather</h3>

            <fieldset>
              <Form.Group>
                <div sm={10}>
                  <Form.Check
                    type="radio"
                    onChange={() => this.onChangeHandler("optionOne")}
                    label={question.optionOne.text}
                    name="formHorizontalRadios"
                    id="optionOneRadio"
                  />
                  <h4>Or</h4>
                  <Form.Check
                    type="radio"
                    onChange={() => this.onChangeHandler("optionTwo")}
                    label={question.optionTwo.text}
                    name="formHorizontalRadios"
                    id="optionTwoRadio"
                  />
                </div>
              </Form.Group>
            </fieldset>
            <div>
              <button
                className="view-poll-btn"
                onClick={() => this.onClickHandler()}
              >
                Submit Vote
              </button>
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

export default connect(mapStateToProps)(UnansweredQuestion);
