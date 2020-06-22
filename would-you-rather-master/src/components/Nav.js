import React, { Component } from "react";
import { connect } from "react-redux";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { setAuthedUser, LOG_OUT } from "../actions/authedUser";

class NavBar extends Component {


  handleLogout = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(setAuthedUser(LOG_OUT));
  };

  render() {
    const { authorized, authedUser } = this.props;
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <LinkContainer to="/">
          <Navbar.Brand>Would You Rather</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {authorized && (
              <LinkContainer exact to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
            )}
            {authorized && (<LinkContainer to="/Add">
              <Nav.Link>Add Question</Nav.Link>
            </LinkContainer>)
            }
            {authorized && (<LinkContainer to="/Leaderboard">
              <Nav.Link>Leaderboard</Nav.Link>
            </LinkContainer>
            )}
          </Nav>
          <Nav>
            <Navbar.Toggle />
            {authorized && <Nav.Link>Hello {authedUser}</Nav.Link>}
            {authorized && (
              <LinkContainer to="/signin">
                <Nav.Link onClick={(e) => this.handleLogout(e)}>
                  Logout
                </Nav.Link>
              </LinkContainer>
            )}
            {!authorized && (
              <LinkContainer to="/signin">
                <Nav.Link>Sign In</Nav.Link>
              </LinkContainer>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authorized: authedUser !== "",
    authedUser,
  };
}

export default connect(mapStateToProps)(NavBar);
