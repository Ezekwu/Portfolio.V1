import { StyledNavbar } from "../styles/Navbar.styled"
import { motion } from "framer-motion"
import { variants } from "../animations/variants"
import { Link } from "react-router-dom"
const Navbar = () => {
    const {fadeDownFunc} = variants
    return (
        <StyledNavbar>
            <motion.div 
            className="container wrapper"
            variants={fadeDownFunc(1)}
                animate="animate"
                initial="initial">
                <Link 
                className="logo"
                to='/'
                >
                    Ezekwu.
                </Link>

                <div className="links-container">
                    <ul className="links">
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    
                    <a href="" className="resume">Resume</a>
                </div>

            </motion.div>
        </StyledNavbar>
    )
}

export default Navbar