import { showLoading, hideLoading } from "react-redux-loading";
import { _saveQuestionAnswer, _getUsers, _getQuestions, _saveQuestion } from "../utils/_DATA";
import {receiveUsers} from './users'
export const GET_QUESTIONS = "GET_QUESTIONS"
export const SUBMIT_ANSWER = "SUBMIT_ANSWER";
export const ADD_QUESTION = "ADD_QUESTION";


export function addQuestion(question) {

  return {

    type: ADD_QUESTION,
    question
  }
}

export function addQuestionHandler(data) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());

    const object = {
      author: authedUser,
      optionOneText: data.optionOneText,
      optionTwoText: data.optionTwoText,
    };

    console.log(data)
    console.log(object);
    return _saveQuestion(object).then((question) => {
      dispatch(addQuestion(question));

      _getUsers().then((users) => {
        _getQuestions().then((questions) => {
          dispatch(receiveUsers(users));
          dispatch(recieveQuestions(questions));
          dispatch(hideLoading());
        });
      });
    });
  };
}

export function recieveQuestions(questions) {
  return {
    
    type: GET_QUESTIONS,
    questions,
  };
}


export function submitAnswer(data) {

  return {
    type: SUBMIT_ANSWER,
    questionId: data.qid,
    authedUser: data.authedUser,
    optionSelected: data.answer,
  };
}

export function submitAnswerHandler(data) {
    
  return (dispatch, getState) => {

    const {authedUser} = getState()

    dispatch(showLoading())

    const question = {
      authedUser: authedUser,
      qid: data.questionId,
      answer: data.selectedOption,
    }; 

    console.log(question)
    return _saveQuestionAnswer(question)
          .then(() => {

            dispatch(submitAnswer(question));

            _getUsers().then((users) => {
              _getQuestions().then((questions) => {
                dispatch(receiveUsers(users));
                dispatch(recieveQuestions(questions));
                dispatch(hideLoading());
              });
            }); 
          })
  };
  
}
