import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import {handleInitialData} from '../actions/shared'
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import Home from "./Home";
import QuestionViewController from "./questions/QuestionViewController";
import LeaderBoard from "./LeaderBoard";
import AddQuestion from "./questions/AddQuestion";
import NavBar from './Nav'
import SignIn from "./SignIn";
import NoMatch from './NoMatch'




const NotFoundRedirect = () => <Redirect to="/not-found" />;


class App extends Component {

    componentDidMount = () => {
        
        const {dispatch} = this.props
        dispatch(handleInitialData());
    }

    render() {

      return (
        <Router>
          <Fragment>
            <NavBar />
            <LoadingBar />
            <div className="container">
              <div>
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route
                    path="/question/:id"
                    component={QuestionViewController}
                  />
                  <Route path="/leaderboard" component={LeaderBoard} />
                  <Route path="/add" component={AddQuestion} />
                  <Route path="/signin" component={SignIn} />
                  <Route path="/not-found" component={NoMatch} />
                  <Route component={NotFoundRedirect} />
                </Switch>
              </div>
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