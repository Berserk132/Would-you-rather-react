import React, {Component} from 'react'
import { Tabs,Tab } from "react-bootstrap";
import UnansweredQuestionsViewer from './questions/UnansweredQuestionsViewer';
import AnsweredQuestionsViewer from './questions/AnsweredQuestionsViewer';


class Home extends Component {

    render() {
        
        return (
          <div className="container-tabs">
            <Tabs 
              className=""
              id="UnansweredQuestions"
              defaultActiveKey="UnansweredQuestions">
              <Tab eventKey="UnansweredQuestions" title="UnansweredQuestions">
                <UnansweredQuestionsViewer />
              </Tab>
              <Tab eventKey="AnsweredQuestions" title="AnsweredQuestions">
                  <AnsweredQuestionsViewer/>
              </Tab>
            </Tabs>
          </div>
        );
    }
}


export default Home;