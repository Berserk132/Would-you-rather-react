import React, {Component} from 'react'
import { Tabs,Tab } from "react-bootstrap";
import UnansweredQuestionsViewer from './questions/UnansweredQuestionsViewer';
import AnsweredQuestionsViewer from './questions/AnsweredQuestionsViewer';
import { connect } from "react-redux";
import {Redirect} from 'react-router-dom';


class Home extends Component {


    
    render() {

        if (this.props.authedUser === "") {
          return <Redirect to="/signin" />;
        }

        return (
          <div className="container-tabs">
            <Tabs
              className=""
              id="UnansweredQuestions"
              defaultActiveKey="UnansweredQuestions"
            >
              <Tab eventKey="UnansweredQuestions" title="UnansweredQuestions">
                <UnansweredQuestionsViewer />
              </Tab>
              <Tab eventKey="AnsweredQuestions" title="AnsweredQuestions">
                <AnsweredQuestionsViewer />
              </Tab>
            </Tabs>
          </div>
        );
    }
}


function mapStateToProps({ authedUser }) {
  return {
    authorized: authedUser !== "",
    authedUser,
  };
}

export default connect(mapStateToProps)(Home);