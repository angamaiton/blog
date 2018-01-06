import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'styled-theming';
import { connect } from 'react-redux';

import Header from '../components/Header';
import { Wrapper, Container } from '../components/Wrapper';

class TemplateWrapper extends Component {
  render() {
    const {
      changeLanguage,
      changeMode,
      location,
      language,
      mode,
      children,
    } = this.props;
    return (
      <ThemeProvider theme={{ mode }}>
        <Wrapper>
          <Container>
            <Header
              language={language}
              mode={mode}
              changeLanguage={changeLanguage}
              changeMode={changeMode}
            />
            <main>{children()}</main>
          </Container>
        </Wrapper>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = ({ mode, language }) => {
  return { mode, language };
};

const mapDispatchToProps = dispatch => {
  return {
    changeMode: mode => dispatch({ type: `CHANGE_MODE`, mode }),
    changeLanguage: language => dispatch({ type: `CHANGE_LANGUAGE`, language }),
  };
};

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(TemplateWrapper);
