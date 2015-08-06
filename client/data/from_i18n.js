'use strict';

import i18n from 'i18next';
import ProjectsArray from '../projects/array';

export default function getDataFromI18n() {
  return {
    communityProjects: ProjectsArray.from(i18n.t('community_projects:projects'))
      .map((project) => {
        Object.assign(project, {
          projectPath: `/in-community#${project.slug}`,
          type: 'communityProject',
        });
        return project;
      }),

    sideProjects: ProjectsArray.from(i18n.t('side_projects:projects'))
      .map((project) => {
        Object.assign(project, {
          projectPath: `/side-projects#${project.slug}`,
          type: 'sideProject',
        });
        return project;
      }),

    workProjects: ProjectsArray.from(i18n.t('work_projects:projects'))
      .map((project) => {
        Object.assign(project, {
          projectPath: `/work#${project.slug}`,
          type: 'workProject',
        });
        return project;
      }),

    resume: {
      work: i18n.t('resume:work'),
      education: i18n.t('resume:education'),
      other: i18n.t('resume:other'),
    },
  };
}
