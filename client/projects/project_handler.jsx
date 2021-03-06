import { PropTypes } from 'react';
import Helmet from 'react-helmet';
import NotFoundHandler from '../routes/not_found_handler';
import ProjectsList from '../projects/list';
import BreadcrumbsList from '../breadcrumbs/list';
import { getAllProjects, getTechnology } from '../data/store';
import { getPositionText } from '../positions/utils';
import { getPortfolioPath } from '../url_utils';

const PARENT_BREADCRUMBS = {
  workProject: {
    routeName: getPortfolioPath('/work'),
    text: 'Work',
  },
  sideProject: {
    routeName: getPortfolioPath('/side-projects'),
    text: 'Side Projects',
  },
  communityProject: {
    routeName: getPortfolioPath('/in-community'),
    text: 'Efforts in Community',
  },
};

const PROJECT_TYPE_LOOKUP = {};
Object.keys(PARENT_BREADCRUMBS).forEach((type) => {
  PROJECT_TYPE_LOOKUP[PARENT_BREADCRUMBS[type].routeName] = type;
});

const getFragmentText = (fragment) => (
  fragment.text ? fragment.text : fragment
);

function getProjectDescriptionText(description) {
  return Array.isArray(description) ?
      description.reduce((prev, curr) => prev + getFragmentText(curr), '') :
      description;
}

function getMetaDescription({
  createdFor, name, positions, description, technologies,
}) {
  const points = [];

  if (positions) {
    points.push(`${getPositionText(positions[0] || positions)}.`);
  }

  if (createdFor) {
    points.push(`For ${createdFor}.`);
  }

  points.push(`${name} — ${getProjectDescriptionText(description)}`);

  if (technologies) {
    const technologiesString = technologies.map((id) => getTechnology(id))
      .join(', ');
    points.push(`Uses ${technologiesString}.`);
  }

  return points.join(' ');
}

function getMetaData(project) {
  return {
    title: project.name,
    meta: [{
      name: 'description',
      content: getMetaDescription(project),
    }],
  };
}

const ProjectHandler = ({ params }) => {
  const myType = PROJECT_TYPE_LOOKUP[getPortfolioPath(`/${params.projectType}`)];
  const myProject = getAllProjects().find((project) => (
    project.slug === params.projectId && project.type === myType
  ));

  if (!myType || !myProject) {
    return <NotFoundHandler />;
  }

  return (
    <div>
      <Helmet {...(getMetaData(myProject))} />
      <BreadcrumbsList
        breadcrumbs={[
          PARENT_BREADCRUMBS[myProject.type],
          myProject.shortName || myProject.name,
        ]}
      />
      <ProjectsList projects={[myProject]} />
    </div>
  );
};

ProjectHandler.propTypes = {
  params: PropTypes.object.isRequired,
};

export default ProjectHandler;
