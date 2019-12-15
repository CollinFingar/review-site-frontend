import React from 'react';
import styled, { withTheme } from 'styled-components';

const ContentWrapper = styled.div`
  max-width: ${props => props.theme.width || 1024}px;
  background-color: ${props => props.theme.bgLight};
  margin: auto;
  min-height: 95vh;
  // border-radius: 4px;
  padding: 10px;
`;

const Content = (props) => {
  return (
    <ContentWrapper>
      { props.children }
    </ContentWrapper>
  );
}

export default withTheme(Content);
