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

const ThemeSwitcher = styled.button`
  appearance: none;
  -webkit-appearance: none;
  border: 0;
  background: rgba(255, 255, 255, 0.5);
  opacity: 0.2;
  border-radius: 50%;
  position: fixed;
  bottom: calc(2vw + 0.5em);
  left: calc(2vw + 0.5em);
  height: 2em;
  width: 2em;
  padding: 0.25em;
  text-align: center;
  transition: opacity 0.2s ease-out;
  font-size: 1.5em;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  & svg {
    display: block;
    height: 100%;
    width: 100%;
  }

  & span {
    display: none;
  }
`;

class Header extends Component {
  render() {
    const { language, changeLanguage, changeMode, mode } = this.props;
    const otherMode = mode === 'day' ? 'night' : 'day';
    return (
      <Navbar>
        <Brand to="/">Kjartan Angamaiton</Brand>
        <Navigation>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/blog">Blog</Link>
          <ThemeSwitcher onClick={() => changeMode(otherMode)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
            >
              <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
            </svg>
          </ThemeSwitcher>
        </Navigation>
      </Navbar>
    );
  }
}

export default Header;
