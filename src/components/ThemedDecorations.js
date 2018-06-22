// Code ThemedDecoration Component Here
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class ThemedDecoration extends React.Component {
  render () {
    return (
      <div>
        <div className={this.props.theme}>{this.props.chidren}</div>
        <div className={this.props.theme}>{this.props.chidren}</div>
        <div className={this.props.theme}>{this.props.chidren}</div>
      </div>
    )
  }
}
