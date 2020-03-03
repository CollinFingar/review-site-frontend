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
          <h3>Featured</h3>
          <div>
            <div style={{backgroundColor: 'teal', width: 'calc(25% - 10px)', margin: '5px', height: '300px', display: 'inline-block'}}></div>
            <div style={{backgroundColor: 'teal', width: 'calc(25% - 10px)', margin: '5px', height: '300px', display: 'inline-block'}}></div>
            <div style={{backgroundColor: 'teal', width: 'calc(25% - 10px)', margin: '5px', height: '300px', display: 'inline-block'}}></div>
            <div style={{backgroundColor: 'teal', width: 'calc(25% - 10px)', margin: '5px', height: '300px', display: 'inline-block'}}></div>
          </div>
          <h3>Recent</h3>
          <div>
            <div style={{
              width: '100%',
              margin: '5px',
              height: '100px',
              verticalAlign: 'top'}}>
                <div style={{
                  width: '200px',
                  height: '100%',
                  backgroundColor: 'teal',
                  display: 'inline-block',
                  verticalAlign: 'top'
                }}/>
                <div style={{
                  display: 'inline-block',
                  width: 'calc(100% - 200px)',
                  height: '100%',
                  verticalAlign: 'top'
                }}>
                  <div>Title</div>
                  <div>Content</div>
                </div>
            </div>
            <div style={{
              width: '100%',
              margin: '5px',
              height: '100px',
              verticalAlign: 'top'}}>
                <div style={{
                  width: '200px',
                  height: '100%',
                  backgroundColor: 'teal',
                  display: 'inline-block',
                  verticalAlign: 'top'
                }}/>
                <div style={{
                  display: 'inline-block',
                  width: 'calc(100% - 200px)',
                  height: '100%',
                  verticalAlign: 'top'
                }}>
                  <div>Title</div>
                  <div>Content</div>
                </div>
            </div>
            <div style={{
              width: '100%',
              margin: '5px',
              height: '100px',
              verticalAlign: 'top'}}>
                <div style={{
                  width: '200px',
                  height: '100%',
                  backgroundColor: 'teal',
                  display: 'inline-block',
                  verticalAlign: 'top'
                }}/>
                <div style={{
                  display: 'inline-block',
                  width: 'calc(100% - 200px)',
                  height: '100%',
                  verticalAlign: 'top'
                }}>
                  <div>Title</div>
                  <div>Content</div>
                </div>
            </div>
            <div style={{
              width: '100%',
              margin: '5px',
              height: '100px',
              verticalAlign: 'top'}}>
                <div style={{
                  width: '200px',
                  height: '100%',
                  backgroundColor: 'teal',
                  display: 'inline-block',
                  verticalAlign: 'top'
                }}/>
                <div style={{
                  display: 'inline-block',
                  width: 'calc(100% - 200px)',
                  height: '100%',
                  verticalAlign: 'top'
                }}>
                  <div>Title</div>
                  <div>Content</div>
                </div>
            </div>
            <div style={{
              width: '100%',
              margin: '5px',
              height: '100px',
              verticalAlign: 'top'}}>
                <div style={{
                  width: '200px',
                  height: '100%',
                  backgroundColor: 'teal',
                  display: 'inline-block',
                  verticalAlign: 'top'
                }}/>
                <div style={{
                  display: 'inline-block',
                  width: 'calc(100% - 200px)',
                  height: '100%',
                  verticalAlign: 'top'
                }}>
                  <div>Title</div>
                  <div>Content</div>
                </div>
            </div>
          </div>
          
        </Content>
      </div>
    );
  }
}

export default withTheme(Home);
