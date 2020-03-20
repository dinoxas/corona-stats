import { createGlobalStyle } from "styled-components";
import Stats from "../components/Stats";
import Nav from "../components/Nav";
import CountrySelector from "../components/CountrySelector";
import Head from "next/head";
import { useState } from "react";
import { Container, Row, Col, Button, Collapse } from "react-bootstrap";

const GlobalStyle = createGlobalStyle`
  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  
  .toggle-button {
    display: block;
    margin: 20px auto;
    max-width: 200px;
  }
`;

export default function IndexPage() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Head>
        <title>COVID-19 Stats</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
        <Button
          className="toggle-button"
          variant="info"
          onClick={() => setOpen(!open)}
        >
          {open === false ? `Show ` : `Hide `} world stats
          {open === false ? ` +` : ` -`}
        </Button>
        <Collapse in={open}>
          <Row>
            <Col md={12}>
              <h5 className="mt-3 text-center">World</h5>
              <Stats url="https://covid19.mathdro.id/api"></Stats>
            </Col>
          </Row>
        </Collapse>

        <Row>
          <Col md={12}>
            {" "}
            <CountrySelector></CountrySelector>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
