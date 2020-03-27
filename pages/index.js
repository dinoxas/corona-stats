import { createGlobalStyle } from "styled-components";
import Stats from "../components/Stats";
import Nav from "../components/Nav";
// import CountrySelector from "../components/CountrySelector";
import CountryForm from "../components/CountryForm";
import Head from "next/head";
import { useState } from "react";
import { Container, Row, Col, Button, Collapse } from "react-bootstrap";

const GlobalStyle = createGlobalStyle`
  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  
  .toggle-button {
    display: block;
    margin: 10px auto 20px;
    max-width: 300px;

    @media (max-width: 600px) {
      width: 100%;
      max-width: none;
    }
  }
`;

export default function IndexPage() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Head>
        <title>COVID-19 Stats</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"
        />
      </Head>
      <GlobalStyle />
      <Nav />
      <Container fluid>
        <Row>
          <Col md={12}>
            <h1 className="text-center mt-3 h2">COVID-19 Stats</h1>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <CountryForm />
          </Col>

          <Col md={12}>
            <Button
              className="toggle-button"
              variant="info"
              onClick={() => setOpen(!open)}
            >
              {open === false ? `Show ` : `Hide `} world data
              {open === false ? ` +` : ` -`}
            </Button>
            <Collapse in={open}>
              <Row>
                <Col md={12}>
                  <Stats url="https://covid19.mathdro.id/api"></Stats>
                </Col>
              </Row>
            </Collapse>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
