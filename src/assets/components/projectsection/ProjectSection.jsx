import ProjectDiv from "../projectdiv/ProjectDiv";
import './projectsection.css'

const ProjectSection = () => {
    return (
        <>
            <h3 id="headerProjects">PROJECTS</h3>
            <article className="projects">
                <ProjectDiv
                    header = "Project 1"
                />
                <ProjectDiv
                    header = "Project 2"
                />
                <ProjectDiv
                    header = "Project 3"
                />
            </article>
        </>
    );
}

export default ProjectSection;