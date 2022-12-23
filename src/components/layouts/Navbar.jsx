import { StyledNavbar } from "../styles/Navbar.styled"
const Navbar = () => {
    return (
        <StyledNavbar>
            <div className="container wrapper">
                <div className="logo">
                    Ezekwu.
                </div>

                <div className="links-container">
                    <ul className="links">
                        <li><a href="">About</a></li>
                        <li><a href="">Skills</a></li>
                        <li><a href="">Projects</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                    
                    <a href="" className="resume">Resume</a>
                </div>

            </div>
        </StyledNavbar>
    )
}

export default Navbar