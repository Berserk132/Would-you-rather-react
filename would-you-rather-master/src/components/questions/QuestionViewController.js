import React, { Component } from "react";
import { connect } from "react-redux";
import checkQuestions from "../../utils/helper";
import UnansweredQuestion from "./UnansweredQuestion";
import AnsweredQuestion from "./AnsweredQuestion";


class QuestionViewController extends Component {
    
    

    render() {

        const {
          isQuestionNotAnswered,
          voteOne,
          voteTwo,
          authedUserAnswer,
        } = this.props;

        return (
          <div>
            {isQuestionNotAnswered ? (
              <UnansweredQuestion 
              id={this.props.id} />
            ) : (
              <AnsweredQuestion 
              id={this.props.id} 
              voteOne={voteOne} 
              voteTwo={voteTwo}
              authedUserAnswer={authedUserAnswer} />
            )}
          </div>
        );
    }
}   

function mapStateToProps({authedUser, questions, users},  props ) {
    
    const { id } = props.match.params;

    const isQuestionNotAnswered = checkQuestions(questions[id], authedUser)

    // get the number of votes for every option 
    // vote one
    const voteOne = questions[id].optionOne.votes.length

    // vote two
    const voteTwo = questions[id].optionTwo.votes.length

    // the answer of authedUser
    const authedUserAnswer = users[authedUser].answers[id]
    
    return {
      id,
      isQuestionNotAnswered,
      voteOne,
      voteTwo,
      authedUserAnswer
    };
}

export default connect(mapStateToProps)(QuestionViewController)