import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from '../pages/Home';
import Login from '../pages/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Mypage from '../pages/Mypage';
import { createGlobalStyle } from 'styled-components';
import Signup from '../pages/Signup';

const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
  }
  body{
    background: #fcfcfc;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/mypage" component={Mypage} />
          <Route exact path="/logout" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
