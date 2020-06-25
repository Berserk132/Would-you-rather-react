import React, { Component } from "react";
import { connect } from "react-redux";
import checkQuestions from "../../utils/helper";
import UnansweredQuestion from "./UnansweredQuestion";
import AnsweredQuestion from "./AnsweredQuestion";
import {Redirect} from 'react-router-dom';

class QuestionViewController extends Component {
    
    

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

        const {
          isQuestionNotAnswered,
          voteOne,
          voteTwo,
          authedUserAnswer,
        } = this.props;


        if (voteOne === null || voteTwo === null) {
          return <Redirect to={`/not-found`} />;
        }

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
    let isQuestionNotAnswered = null
    let voteOne = null;
    let voteTwo = null;
    let authedUserAnswer = null;
    
    if (questions[id] !== undefined){

      isQuestionNotAnswered = checkQuestions(questions[id], authedUser);

      // get the number of votes for every option
      // vote one
       voteOne = questions[id].optionOne.votes.length;

      // vote two
       voteTwo = questions[id].optionTwo.votes.length;

      // the answer of authedUser
       authedUserAnswer = users[authedUser].answers[id];
    }
    
    
    return {
      id,
      isQuestionNotAnswered,
      voteOne,
      voteTwo,
      authedUserAnswer
    };
}

export default connect(mapStateToProps)(QuestionViewController)