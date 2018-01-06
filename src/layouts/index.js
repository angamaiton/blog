import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { Wrapper, Container } from '../components/Wrapper';

class TemplateWrapper extends Component {
  render() {
    const { children } = this.props;
    return (
      <Wrapper>
        <Container>
          <Header />
          <main>{children()}</main>
        </Container>
      </Wrapper>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
