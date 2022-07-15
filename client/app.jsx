import React from 'react';
import Header from './components/header';
import PageContainer from './components/page-container';
import Home from './pages/home';

function App() {
  return (
    <>
      <Header/>
      <PageContainer >
        <Home />
        </ PageContainer>
    </>
  );
}

export default App;
