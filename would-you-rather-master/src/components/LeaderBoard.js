import React, { Component } from "react"
import { connect } from "react-redux"
import UserLeaderBoard from "./UserLeaderBoard"


class LeaderBoard extends Component {
  render() {

    const { users, result } = this.props;
    console.log(result);
    return (
      <div>
        <ul>
          {result.map((u) => (

              <li key={u.user}>
                <UserLeaderBoard user={users[u.user]} />
              </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions, users }) {
  
  
  const usersId = Object.keys(users);
  
  const usersToBeSorted = usersId.map(user => {

    const answers = users[user].answers;

    const answersLength = Object.keys(answers).length;
    const questionLength = users[user].questions.length;

    return {
        user,
        total: answersLength + questionLength,
    };
  })

  const result = usersToBeSorted.sort((a, b) => (a.total < b.total) ? 1 : -1);

  return {
    authedUser,
    questions,
    users,
    result
  };
}

export default connect(mapStateToProps)(LeaderBoard);
