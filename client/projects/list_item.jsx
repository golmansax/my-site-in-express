'use strict';

import React from 'react';
import FragmentsBlock from '../fragments/block';
import Image from '../images/image';

export default class ProjectsListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='projects-list-item'>
        <div className='container'>
          <div className='projects-list-item-left'>
            <img src={this.props.images[0]} />
          </div>
          <div className='projects-list-item-right'>
            <h2><a href={this.props.url}>{this.props.name}</a></h2>
            <dl>
              <dt>Position:</dt>
              <dd>Software Engineer (May - 2014)</dd>
              <dt>Stack:</dt>
              <dd>Rails, ReactJS, Haml, Sass, PostgreSQL, Heroku</dd>
              <dt>Joined when:</dt>
              <dd>Team had 3 employees (2 engineers)</dd>
              <dt>Involved with:</dt>
              <dd>
                Helped create the engineering culture as an early employee
                Practice agile development through full code coverage and strong integration tests
                Focus on customer satisfaction through integrating user feedback and fast response times to support requests
                Comfortable with full stack of website development, from code architecting to frontend design
              </dd>
            </dl>
          </div>
        </div>
      </div>
    );
  }
}

ProjectsListItem.propTypes = {
  name: React.PropTypes.string.isRequired
};
