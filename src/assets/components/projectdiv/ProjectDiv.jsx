import './projectdiv.css'

const ProjectDiv = (props) => {
    return (
        <div className='divProject'>
            <>
            <h3>{props.header}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, totam.</p>
            <p>JavaScript React Sass</p>
            </>
        </div>
    );
}

export default ProjectDiv;