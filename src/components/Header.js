import React, { Component } from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { Brand, Link, NonFunctionalLink } from './Link';

const Navigation = styled.nav`
  display: flex;
  align-items: center;
`;

const Navbar = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
`;

class Header extends Component {
  render() {
    return (
      <Navbar>
        NAVBAR
        <Navigation />
      </Navbar>
    );
  }
}

export default Header;
