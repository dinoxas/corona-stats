import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { FaReact, FaHospitalAlt } from 'react-icons/fa';

function Nav() {
  return (
    <Navbar style={{ background: '#fff', borderBottom: '1px solid #ccc' }}>
      <Container>
        <Navbar.Brand href='/'>
          <img src='logo.png' alt='covid-19' style={{ maxWidth: '120px' }} />
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <span>
            <img
              src='nhs.jpg'
              alt='nhs'
              style={{ maxWidth: '70px', marginTop: '5px' }}
            />
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav;
