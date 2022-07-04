import { CardProject } from '@components/block';
import { ColumnsWiden, Container, Section } from '@components/containers';
import SubTitle from '@components/typography/SubTitle';
import { groupFunction } from '@libs/utils';
import { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ProjectList = ({ projects }) => {
  const [projectsGroup, setProjectsGroup] = useState([]);

  useEffect(() => {
    setProjectsGroup(groupFunction(projects));
  }, [projects]);

  return (
    <Section>
      <Container>
        <SubTitle className='text-center mb-5'>ÚLTIMOS PROYECTOS</SubTitle>
        {projectsGroup.length > 0 && projectsGroup.map((group, index) => (
          <ColumnsWiden key={`project-group-${index}`} >
            {group.map(project => (
              <Col key={project.id}
                className='transition-base'
                md={6} >
                <a href={project.link} target='_blank' rel="noreferrer">
                  <CardProject
                    key={project.id}
                    name={project.name}
                    image={project.thumbnail} />
                </a>
              </Col>
            ))}
          </ColumnsWiden>
        ))}
      </Container>
    </Section>
  );
};

ProjectList.propTypes = {
  projects: PropTypes.array
};

export default ProjectList;
