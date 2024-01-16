import './nav.css'

const Nav = (props) => {
    return (
        <>
            <nav>
                <p>JS.</p>
                <div>
                    <a href="#">projects</a>
                    <a href="#">skills</a>
                    <a href="#">contact</a>
                    <a href="#">
                        <img src={props.img} alt="" />
                    </a>
                </div>
            </nav>
        </>
    );
}

export default Nav;