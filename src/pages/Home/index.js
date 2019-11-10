import React from 'react';

import {Row, Col} from 'react-bootstrap';

import Header from '../../components/Header';
import Card from '../../components/Card';
import { Container } from './style';

export default function Home(){
    return (
        <>
          <Header/>

          <Container>
            <Row>
              <Col><Card/></Col>
              <Col><Card/></Col>
              <Col><Card/></Col>
            </Row>
          </Container>
        </>
    );
}