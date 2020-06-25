import React, { Component} from "react";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import { addQuestionHandler } from "../../actions/questions";
import { Redirect } from "react-router-dom";


class AddQuestion extends Component {

    constructor(props){

        super(props)
        this.optionOne = ""
        this.optionTwo = ""
        this.toHome = false
    }

    

    onClickHandler = () => {
        const {dispatch} = this.props

        dispatch(addQuestionHandler({optionOneText:this.optionOne.value, optionTwoText:this.optionTwo.value}))
        this.toHome = true
    };
    render() {

        if (this.props.authedUser === "") {
          return (
            <Redirect
              to={{
                pathname: `/signin`,
                state: { from: this.props.location },
              }}
            />
          );
        }

        if (this.toHome === true) {
          return <Redirect to="/" />;
        }

        return (
        
          <div className="question">
            <div className="question-header">
              <h3 style={{ textAlign: "center" }}>Create New Question</h3>
            </div>
            <div className="question-body">
              <div className="question-right">
                <h3>Would you rather</h3>

                <fieldset>
                  <Form.Group controlId="optionone">
                    <Form.Label>Option One</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Option One"
                      ref={(input) => (this.optionOne = input)}
                    />
                  </Form.Group>

                  <Form.Group controlId="optiontwo">
                    <Form.Label>Option Two</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Option Two"
                      ref={(input) => (this.optionTwo = input)}
                    />
                  </Form.Group>
                </fieldset>
                <div>
                  <button
                    className="view-poll-btn"
                    onClick={() => this.onClickHandler()}
                  >
                    Create Question
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

export default connect(mapStateToProps)(AddQuestion);
