import React, { Component} from 'react';
import {hot} from 'react-hot-loader';
import { retrieveAuthors } from './dataService/dataService';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  browserHistory
} from 'react-router-dom';

import Home from './home/Home.js';
import Thoughts from './thoughts/Thoughts';
import Reviews from './reviews/Reviews';
import About from './about/About';
import Notfound from './notfound';
import NavBar from './navBar/NavBar';
import Footer from './footer/Footer';
import { ThemeProvider } from 'styled-components';
import styled, { createGlobalStyle } from 'styled-components';
import theme from './styles/theme';

const AppComp = styled.div`
  padding-top: 40px;
`;

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:700&display=swap');

  body {
    font-family: 'Roboto', sans-serif;
    background-color: ${props => props.theme.bgDark};
    margin: 0px;
    color: ${props => props.theme.light};
  }

`

class App extends Component{
  componentDidMount() {
    retrieveAuthors((d) => console.log(d), (e) => console.log(e))
  }

  render(){
    return(
      <ThemeProvider theme={ theme }>
        <Router history={browserHistory} basename={process.env.PUBLIC_URL}>
        <GlobalStyle/>
          <AppComp>
            <NavBar/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/thoughts" component={Thoughts} />
              <Route path="/reviews" component={Reviews} />
              <Route path="/about" component={About} />
              <Route component={Notfound} />
            </Switch>
            <Footer/>
          </AppComp>
        </Router>
      </ThemeProvider>
      
    );
  }
}

export default hot(module)(App);
