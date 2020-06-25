import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { setAuthedUser, LOG_OUT } from "../actions/authedUser";
import { Redirect, withRouter} from "react-router-dom";

const defaultSelect = "Select...";


class SignIn extends Component {
  
  constructor(props) {
    super(props);
    this.selected = ""
    this.selected = defaultSelect;
    
  }

    

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };

    console.log(from)

    const handleSubmit = (event) => {
      event.preventDefault();
      if (this.selected === defaultSelect) alert("Please Select a user");
      else {
        const { dispatch } = this.props;
        dispatch(setAuthedUser(this.selected));
        
      }
    };

    const handleChange = (event) => {
      this.selected = event.target.value;
    };


    if (this.props.authedUser !== LOG_OUT) {
      return <Redirect to={from.pathname} />;
    }
    return (
        <div>
            <h1>Hello</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formGridState">
              <Form.Label>Choose User</Form.Label>
              <Form.Control
                as="select"
                onChange={handleChange}
                value={this.selected.value}
              >
                <option key="default" value={defaultSelect}>
                  {defaultSelect}
                </option>
                {this.props.usersIds.map((id) => (
                  <option key={id} id={id}>
                    {id}
                  </option>
                ))}
              </Form.Control>
              <Button type="submit" size="lg" block>
                Login
              </Button>
            </Form.Group>
          </Form>
        </div>
      );
    } 
}


function mapStateToProps({ users, authedUser }) {

  

  return {
    authedUser,
    usersIds: Object.keys(users),
  };
}

export default connect(mapStateToProps)(withRouter(SignIn));
