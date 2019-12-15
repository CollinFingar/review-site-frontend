import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Content from '../components/Content';

class About extends React.Component {
  render() {
    return (
      <div>
        <SectionTitle text={'ABOUT'} />
        <Content>
          <span>review site coming soon...</span>
        </Content>
      </div>
    )
  }
}
export default About;
