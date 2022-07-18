import React, { useState, useEffect } from 'react';
import Header from './components/header';
import PageContainer from './components/page-container';
import Auth from './pages/auth-page';
import parseRoute from './lib/parse-route';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [route, setRoute] = useState(parseRoute(window.location.hash));

  useEffect(() => {
    window.addEventListener('hashchange', () => {
      setRoute(parseRoute(window.location.hash));
    });
  });

  return (
    <>
      <Header />
      <PageContainer>
        <Auth />
      </PageContainer>
    </>
  );
}

export default App;
