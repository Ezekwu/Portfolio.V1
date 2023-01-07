import { StyledNavbar } from "../styles/Navbar.styled"
import { Link } from "react-router-dom"
const NavbarSimp = () => {
    return (
        <StyledNavbar>
            <div 
            className="container wrapper"
            >
                <Link 
                className="logo"
                to='/'
                >
                    Ezekwu.
                </Link>

                <div className="links-container">
                    <a href="" className="resume">Resume</a>
                </div>

            </div>
        </StyledNavbar>
    )
}

export default NavbarSimp