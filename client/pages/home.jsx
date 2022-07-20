import React, { useContext } from 'react';
import Redirect from '../components/redirect';
import AppContext from '../lib/app-context';

function Home() {
  const { user } = useContext(AppContext);

  if (!user) {
    return <Redirect to="sign-in" />;
  }

  return <h1>React Home</h1>;
}

export default Home;
