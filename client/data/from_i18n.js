import i18n from '../../server/my_i18n';
import ProjectsArray from '../projects/array';

export default function getDataFromI18n() {
  return {
    metaData: i18n.t('meta_data:metaData'),

    people: i18n.t('people:people'),

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
          projectPath: `/portfolio/work#${project.slug}`,
          type: 'workProject',
        });
        return project;
      }),
  };
}
