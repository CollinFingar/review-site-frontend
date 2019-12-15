import React from 'react';
import styled, { withTheme } from 'styled-components';

const Title = styled.h1`
  font-size: 60px;
  line-height: 40px;
  text-align: center;
  margin: 0px;
  margin-bottom: 15px;
  color: ${props => props.theme.bgDark};
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: -moz-none;
  -o-user-select: none;
  user-select: none;

  @media (max-width: 600px) {
    font-size: 30px;
    line-height: 20px;
  }
`;

const Header = styled.div`
  padding-top: 30px;
  background-color: ${props => props.theme.light};
`;

const SectionTitle = ({text}) => {
  return (
    <Header>
      <Title>{text}</Title>
    </Header>
  )
}

export default SectionTitle;
