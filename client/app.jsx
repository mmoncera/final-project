import React, { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import Header from './components/header';
import PageContainer from './components/page-container';
import Auth from './pages/auth';
import Home from './pages/home';
import parseRoute from './lib/parse-route';
import AppContext from './lib/app-context';

function App() {
  const [user, setUser] = useState(null);
  const [isAuthorizing, setIsAuthorizing] = useState(true);
  const [route, setRoute] = useState(parseRoute(window.location.hash));

  useEffect(() => {
    window.addEventListener('hashchange', () => {
      setRoute(parseRoute(window.location.hash));
    });
    const token = window.localStorage.getItem('react-context-jwt');
    const user = token ? jwtDecode(token) : null;
    setUser(user);
    setIsAuthorizing(false);
  }, []);

  function handleSignIn(result) {
    const { user, token } = result;
    window.localStorage.setItem('react-context-jwt', token);
    setUser(user);
  }

  function renderPage() {
    const { path } = route;
    if (path === '') {
      return <Home />;
    }
    if (path === 'sign-in' || path === 'sign-up') {
      return <Auth />;
    }
  }

  const contextValue = { user, route, handleSignIn };

  if (isAuthorizing) {
    return null;
  }

  return (
    <AppContext.Provider value={contextValue}>
      <>
        <Header />
        <PageContainer>{renderPage()}</PageContainer>
      </>
    </AppContext.Provider>
  );
}

export default App;
