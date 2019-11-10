import React from 'react';

import { Container, CardInfo } from './styles';

export default function Card(){
    return (
      <>
        <Container>
          <img src="../../images/a.png" alt="j" />
          <CardInfo>
            icono
            <h1>Gasto</h1>
            <h2>Gs.0</h2>
          </CardInfo>
        </Container>
      </>
    );
}