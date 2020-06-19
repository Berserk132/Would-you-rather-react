import React, { Component } from "react"
import { connect } from "react-redux"
import UserLeaderBoard from "./UserLeaderBoard"


class LeaderBoard extends Component {
  render() {

    const {users} = this.props

    return (
      <div>
        <ul>
          {Object.keys(users).map((u) => (

              <li key={users[u].id}>
                <UserLeaderBoard user={users[u]} />
              </li>
          ))}
        </ul>
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

export default connect(mapStateToProps)(LeaderBoard);
