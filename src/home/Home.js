import React, { Component } from "react";
import styled, { withTheme } from 'styled-components';
import Content from '../components/Content';
import SectionTitle from '../components/SectionTitle';

class Home extends Component{
  componentDidMount() {

  }

  render(){
    return(
      <div className="Home">
        <SectionTitle text={'AVERAGE OUTLOOKS'} />
        <Content>
          <span>review site coming soon...</span>
        </Content>
      </div>
    );
  }
}

export default withTheme(Home);
