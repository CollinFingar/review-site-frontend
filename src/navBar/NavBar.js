import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { withTheme } from 'styled-components';

const Bar = styled.nav`
  height: 40px;
  background-color: ${props => props.theme.light};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding 0px 20px;
  overflow: hidden;
  .primary {
    font-size: 22px;
    // width: 40%;
  }
  ul {
    margin-right: 30px;
    display: flex;
    li {
      
    }
  }
  a {
    margin: 0px 20px;
    // width: 20%;
    text-align: center;
    display: inline-block;
    height: 100%;
    color: ${props => props.theme.bgDark};
    text-decoration: none;
    vertical-align: middle;
    line-height: 40px;
    font-size: 16px;
    transition: .2s;
  }
  a:hover {
    color: ${props => props.theme.highlight};
  }
`;

const NavBar = (props) => {
  return (
    <Bar>
      
      <NavLink exact activeClassName="active" to="/" className="primary">
        AO
      </NavLink>
    
      <ul>
        <li>
          <NavLink activeClassName="active" to="/reviews">
            Reviews
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/thoughts">
            Thoughts
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/about">
            About
          </NavLink>
        </li>
      </ul>
    
      
    </Bar>
  );
}

export default withTheme(NavBar);
