import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { FaReact } from "react-icons/fa";

function Nav() {
  return (
    <Navbar bg="light" style={{ borderBottom: "1px solid #ccc" }}>
      <Container>
        <Navbar.Brand href="/">
          <img src="logo.png" alt="covid-19" style={{ maxWidth: "120px" }} />
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <FaReact
              color="#333"
              size="36"
              className="d-inline-block align-top ml-2 mr-2"
            />
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav;
