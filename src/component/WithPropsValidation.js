import React, { Component } from 'react';

const withPropsValidation = (WrappedComponent) => {
    console.log("WrappedComponent",WrappedComponent);
  return class extends Component {
    componentDidMount() {
      if (!this.props.text || typeof this.props.text !== 'string') {
        console.error('Invalid props detected. Component will not mount.');
      }
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};
export default withPropsValidation;