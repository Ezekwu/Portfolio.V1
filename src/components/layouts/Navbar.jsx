import { StyledNavbar } from "../styles/Navbar.styled"
import { motion } from "framer-motion"
import { variants } from "../animations/variants"
const Navbar = () => {
    const {fadeDownFunc} = variants
    return (
        <StyledNavbar>
            <motion.div 
            className="container wrapper"
            variants={fadeDownFunc(1)}
                animate="animate"
                initial="initial">
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

            </motion.div>
        </StyledNavbar>
    )
}

export default Navbar