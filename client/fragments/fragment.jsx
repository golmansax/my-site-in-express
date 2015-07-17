'use strict';

import React from 'react';
import { Link } from 'react-router';
import GithubFragment from './github_fragment';

export default class Fragment extends React.Component {
  render() {
    if (this.props.routeName) {
      return (
        <Link to={this.props.routeName} params={this.props.params}>
          {this.props.text}
        </Link>
      );
    } else if (this.props.github) {
      return <GithubFragment github={this.props.github} />;
    } else if (this.props.url) {
      return <a href={this.props.url}>{this.props.text || this.props.url}</a>;
    } else {
      return <span>{this.props.text}</span>;
    }
  }
}
Fragment.propTypes = {
  url: React.PropTypes.string,
  text: React.PropTypes.string,
  routeName: React.PropTypes.string,
  params: React.PropTypes.object
};
