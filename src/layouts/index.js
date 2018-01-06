import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TemplateWrapper extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <main>{children()}</main>
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
