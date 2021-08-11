import React,{ useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';

import AuthContext from './context/AuthContext';

import { Login, OrdersPanel } from './pages';

const App = () => {
  // Auth token as a state value providing to context
  const [userAuthToken, setUserAuthToken] = useState('');

  useEffect(() => {
    if(localStorage.getItem('token') !== null){
      const token = localStorage.getItem("token"); // user token
      setUserAuthToken(token);
    }
  },[])

  return(
    <BrowserRouter>
      <AuthContext.Provider value={{userAuthToken, setUserAuthToken}}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/panel" component={OrdersPanel} />
          <Route path="/" component={Login} /> { /* to be changed */}
        </Switch>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
