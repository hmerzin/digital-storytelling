import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/home">Harry Merzin Digital Storytelling</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1}>
            <Link to="/lessons">Meaningful Lessons</Link>
          </NavItem>
          <NavItem eventKey={2}>
            <Link to="/passport">Passport Series</Link>
          </NavItem>
          <NavItem eventKey={2}>
            <Link to="/advice">Advice For Future Students</Link>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}
export default Navigation;
