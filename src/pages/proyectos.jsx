import { Container, Section } from '@components/containers';
import { TabItem, Tabs } from '@components/ui';
import { useState } from 'react';
import configWeb from '../../configWeb.json';
import PropTypes from 'prop-types';
import { ProjectList } from '@components/sections';

export const getServerSideProps = () => {
  const projects = configWeb.projects;
  return {
    props: {
      projects
    }
  };
};

const Projects = ({ projects }) => {
  const [projectsGroup, setProjectsGroup] = useState(projects);
  const [activeTab, setIsActiveTab] = useState('all');

  const handleChangeTab = (category) => {
    setIsActiveTab(category);
    if (category === 'all') {
      setProjectsGroup(projects);
    } else {
      const projectsFilter = projects.filter(project => project.category === category);
      setProjectsGroup(projectsFilter);
    }
  };

  return (
    <>
      <Section className='pb-0'>
        <Container>
          <Tabs>
            <TabItem active={activeTab === 'all'} onClick={() => handleChangeTab('all')}>Todos</TabItem>
            <TabItem active={activeTab === 'branding'} onClick={() => handleChangeTab('branding')}>Branding</TabItem>
            <TabItem active={activeTab === 'webs'} onClick={() => handleChangeTab('webs')}>Páginas web</TabItem>
            <TabItem active={activeTab === 'landings'} onClick={() => handleChangeTab('landings')}>Landing pages</TabItem>
          </Tabs>
        </Container>
      </Section>
      <ProjectList projects={projectsGroup} />
    </>
  );
};

Projects.propTypes = {
  projects: PropTypes.array
};

export default Projects;
