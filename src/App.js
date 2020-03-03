import React, { Component} from 'react';
import {hot} from 'react-hot-loader';
import { fetchAuthors } from './dataService/dataService';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  browserHistory
} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchContent } from './redux/actions';
import { getSomething } from './redux/selectors';


import Home from './home/Home.js';
import Thoughts from './thoughts/Thoughts';
import Reviews from './reviews/Reviews';
import About from './about/About';
import Notfound from './notfound';
import NavBar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';
import { ThemeProvider } from 'styled-components';
import styled, { createGlobalStyle } from 'styled-components';
import theme from './styles/theme';

import axios from 'axios';



const AppComp = styled.div`
  padding-top: 40px;
`;

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap');

  body {
    font-family: 'Josefin Sans', sans-serif;
    background-color: ${props => props.theme.bgDark};
    margin: 0px;
    color: ${props => props.theme.light};
    padding: 5px;
  }

`



// fetchData();

const App = ({ data }) => {
  // componentDidMount() {
  //   // retrieveAuthors((d) => console.log(d), (e) => console.log(e))
  //   const response = fetchAuthors(this.setData);
  //   axios.get('https://data.averageoutlooks.com/average-outlooks/items/authors?fields=*.*')
  //     .then((data) => {
  //       console.log('NEW!!', data);
  //     })
  //   // console.log('yep', response);
  // }

  // setData(data) {
  //   console.log('yep', data)
  // }

  console.log(data);

  return(
      <ThemeProvider theme={ theme }>
        <Router history={browserHistory} basename={process.env.PUBLIC_URL}>
        <GlobalStyle/>
          <AppComp>
            <NavBar/>
            <div id='meh'>{data.something}</div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/thoughts" component={Thoughts} />
              <Route exact path="/reviews" component={Reviews} />
              <Route path="/reviews/:slug" component={Reviews} />
              <Route path="/about" component={About} />
              <Route component={Notfound} />
            </Switch>
            <Footer/>
          </AppComp>
        </Router>
      </ThemeProvider>
      
    );
}

const mapStateToProps = state => {
  console.log('state.data', state.data);
  return { data: state.data };
};

export default connect(mapStateToProps, { fetchContent })(App);
