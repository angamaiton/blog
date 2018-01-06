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
        <Brand to="/">Kjartan Angamaiton</Brand>
        <Navigation>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/blog">Blog</Link>
        </Navigation>
      </Navbar>
    );
  }
}

export default Header;
