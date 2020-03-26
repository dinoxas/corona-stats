import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { FaReact, FaNotesMedical } from "react-icons/fa";

function Nav() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">CoronApp</Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <FaReact
              color="#00d8ff"
              size="30"
              className="d-inline-block align-top ml-2 mr-2"
            />
            <FaNotesMedical
              size="30"
              color="#00d8ff"
              className="d-inline-block align-top"
            />
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav;
