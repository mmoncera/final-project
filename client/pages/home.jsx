import React, { useContext } from 'react';
import Redirect from '../components/redirect';
import { AppContext } from '../lib';

function Home() {
  const { user } = useContext(AppContext);

  if (!user) {
    return <Redirect to="sign-in" />;
  }

  return (
    <div className="row justify-content-center home-container-padding">
      <div className="col-sm-10 col-md-9 col-lg-7">
        <h1 className="text-center mb-4 font-rubik">Find an Event</h1>
        <form>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="food, drinks, fun..." aria-label="Username" />
            <input type="text" className="form-control" placeholder="location" aria-label="Server" />
            <button className="btn btn-primary"><i className="fa-solid fa-magnifying-glass"></i></button>
          </div>
        </form>
      </div>
    </div>
  );

}

export default Home;
