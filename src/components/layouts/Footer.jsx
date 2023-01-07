import { StyledFooter } from "../styles/Footer.styled"
const Footer = () => {
    return (
        <StyledFooter>
            <div className="container wrapper">
                <div className="col-1">
                    <h3>
                        Ezekwu.
                    </h3>
                    <p className="padding-0">Designed by Ezekwu Jeremiah &copy;</p>
                </div>

                <div className="col-2">
                    <ul className="links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                    </ul>
                    <ul className="socials">
                        <li><a href="https://github.com/Ezekwu"target='_blank' rel="noreferrer">Github</a></li>
                        <li><a href="https://twitter.com/i_ezekwu"target='_blank' rel="noreferrer">Twitter</a></li>
                        <li><a href="https://www.linkedin.com/in/jerry-ezekwu-63a0b822b/"target='_blank' rel="noreferrer">Linkedin</a></li>
                        <li><a href="">Gmail</a></li>
                    </ul>
                </div>
            </div>
        </StyledFooter>
    )
}

export default Footer