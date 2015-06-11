'use strict';

import React from 'react';
import i18n from 'i18next';
import ProjectsArray from '../projects/array';

export function getAll() {
  var projects = ProjectsArray.from(i18n.t('work_projects:projects'))
    .map(function (project) {
      Object.assign(project, { projectPath: `/work#${project.slug}` });
      return project;
    });

  return projects;
}