import React from 'react';

import GlobalStyle from './styles/global';

import Header from './components/Header';
import Card from './components/Card';

function App() {
  return (
    <>
      <Header/>

      <Card />
      <GlobalStyle />
    </>
  );
}

export default App;