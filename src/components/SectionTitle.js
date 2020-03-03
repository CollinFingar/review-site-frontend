import React from 'react';
import styled, { withTheme } from 'styled-components';

const Container = styled.div`
  text-align: center;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 60px;
  // line-height: 4px;
  text-align: center;
  margin: 0px;
  // margin-bottom: 15px;
  color: ${props => props.theme.bodyTextColor};
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: -moz-none;
  -o-user-select: none;
  user-select: none;

  @media (max-width: 675px) {
    font-size: 28px;
    line-height: 13px;
  }
`;

const Divider = styled.div`
  height: 3px;
  max-width: ${props => props.theme.width || 1024}px;
  width: 80%;
  margin: auto;
  background-color: teal;
  margin-bottom: 10px;
`;

const Divider2 = styled.div`
  height: 3px;
  max-width: ${props => props.theme.width || 1024}px;
  width: 60%;
  margin: auto;
  background-color: ${props => props.theme.bodyTextColor};
  margin-bottom: 10px;
`;

const Header = styled.div`
  // padding-top: 30px;
  display: inline-block;
  margin: auto;
  background-color: ${props => props.theme.light};
`;

const SectionTitle = ({text}) => {
  return (
    <Container>
      <Header>
        <Title>{text}</Title>
        <Divider/>
        <Divider2/>
      </Header>
    </Container>
  )
}

export default SectionTitle;
