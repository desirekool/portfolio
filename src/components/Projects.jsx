import ProjectsCard from './ProjectsCard';
import SectionTitle from './SectionTitle';

const Projects = ({projects}) => {
  const basicProjects = projects.filter((project) => project.level === 'basic');
  const intermediateProjects = projects.filter(
    (project) => project.level === 'int'
  );
  const advancedProjects = projects.filter(
    (project) => project.level === 'adv'
  );
  return (
    <section className='py-20 align-element' id='projects'>
      <SectionTitle text='web creations' />
      <SectionTitle text='Advanced' />
      <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
        {advancedProjects.map((project) => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
      <SectionTitle text='mid Level' />
      <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
        {intermediateProjects.map((project) => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
      <SectionTitle text='Basic Projects' />
      <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
        {basicProjects.map((project) => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>  
    </section>
  );
};
export default Projects;
