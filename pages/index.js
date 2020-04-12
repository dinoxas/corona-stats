import { createGlobalStyle } from 'styled-components';
import Stats from '../components/Stats';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import CountryForm from '../components/CountryForm';
import Head from 'next/head';
import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  body {
    background: rgb(250, 250, 250);
  }
  
`;

export default function IndexPage() {
  return (
    <Fragment>
      <Head>
        <title>COVID-19 Stats</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta property='og:title' content='COVID-19 Stats' />
        <meta property='og:description' content='Global stats of COVID-19' />
        <meta
          property='og:image'
          content='https://dinoxas-corona.netlify.com/logo.png'
        />
        <link rel='icon' type='image/x-icon' href='favicon.ico' />
        <link
          rel='stylesheet'
          href='https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css'
          integrity='sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh'
          crossorigin='anonymous'
        />
      </Head>
      <GlobalStyle />
      <Nav />
      <Container>
        <Row>
          <Col md={12}>
            <CountryForm />
          </Col>

          <Col md={12}>
            <h5 className='mb-3 text-center'>Global</h5>
            <Stats url='https://covid19.mathdro.id/api'></Stats>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Fragment>
  );
}
