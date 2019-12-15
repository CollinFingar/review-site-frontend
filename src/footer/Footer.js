import React from 'react';
import styled, {withTheme} from 'styled-components';

const FooterWrapper = styled.div`
  // width: 100%;
  overflow: hidden;
  background-color: ${props => props.theme.light};
  color: white;
  text-align: center;
  height: 20px;
  margin-top: 15px;
  display: flex;
  justify-content: space-evenly;
  padding: 15px;
  color: ${props => props.theme.bgDark};
  vertical-align: middle;

  div {
    vertical-align: middle;
    height: 16px;
    display: flex;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <div>
        AVERAGE OUTLOOKS
      </div>
      <div>
        Created by Collin Fingar
      </div>
    </FooterWrapper>
  )
}

export default withTheme(Footer);
