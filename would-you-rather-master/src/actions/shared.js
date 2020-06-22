import { _getUsers, _getQuestions } from "../utils/_DATA";
import { receiveUsers } from "./users";
import { recieveQuestions } from "./questions";
import { setAuthedUser } from "./authedUser";
import {showLoading, hideLoading} from 'react-redux-loading'


export function handleInitialData() {
    
    return (dispatch) => {
        dispatch(showLoading())
        return _getUsers()
            .then((users) => {

                _getQuestions()
                .then((questions) => {

                    dispatch(receiveUsers(users));
                    dispatch(recieveQuestions(questions));
                    dispatch(setAuthedUser(""));
                    dispatch(hideLoading())
                })
            })   
    }
}