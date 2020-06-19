import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {handleInitialData} from '../actions/shared'
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import Home from "./Home";
import QuestionViewController from "./questions/QuestionViewController";
import LeaderBoard from "./LeaderBoard";
import AddQuestion from "./questions/AddQuestion";






class App extends Component {

    componentDidMount = () => {
        
        const {dispatch} = this.props
        dispatch(handleInitialData());
    }

    render() {

      return (
        <Router>
          <Fragment>
            <LoadingBar />
            <div className="container">
              {this.props.loading === true ? null : (
                <div>
                  <Route path="/" exact component={Home} />
                  <Route path="/question/:id" component={QuestionViewController} />
                  <Route path="/leaderboard" component={LeaderBoard}/>
                  <Route path="/add" component={AddQuestion}/>

                </div>
              )}
            </div>
          </Fragment>
        </Router>
      );
    }
}

function mapStateToProps({ authedUser}) {
  

  return {

    loading: authedUser === "",
  };
}

export default connect(mapStateToProps)(App)