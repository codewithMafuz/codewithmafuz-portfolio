import SectionHeading from './sectionHeading';
import { projectsData } from '@/lib/data';
import Project from './project';
import InViewWrapper from './inViewWrapper';

function Projects() {

    return (
        <InViewWrapper key='projects' id='projects'>
            <section className='' id='projects'>
                <SectionHeading>Projects</SectionHeading>
                {projectsData.map((project, index) => {
                    return <Project key={index}  {...project} />;
                })}
            </section>
        </InViewWrapper>
    );
}

export default Projects;
