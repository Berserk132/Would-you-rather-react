import { GET_QUESTIONS, SUBMIT_ANSWER, ADD_QUESTION } from "../actions/questions";


export default function questions(state = {}, action){

    switch (action.type) {
        case GET_QUESTIONS:
            
            return {
                ...state,
                ...action.questions
            }

        case ADD_QUESTION:

            return {
              ...state,
              [action.question.id]:action.question
            }
    
        case SUBMIT_ANSWER:

            return {
              ...state,
              [action.questionId]: {
                ...state[action.questionId],
                [action.optionSelected]: {
                  ...state[action.questionId][action.optionSelected],
                  votes: state[action.questionId][
                    action.optionSelected
                  ].votes.concat(action.authedUser),
                },
              },
            };
    
        default:
            return state
    }
}