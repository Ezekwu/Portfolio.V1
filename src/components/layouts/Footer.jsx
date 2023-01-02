import { StyledFooter } from "../styles/Footer.styled"
const Footer = () => {
    return (
        <StyledFooter>
            <div className="container wrapper">
                <div className="col-1">
                    <h3>
                        Ezekwu.
                    </h3>
                    <p>Designed by Ezekwu Jeremiah &copy;</p>
                </div>

                <div className="col-2">
                    <ul className="links">
                        <li><a href="">About</a></li>
                        <li><a href="">Skills</a></li>
                        <li><a href="">Projects</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                    <ul className="socials">
                        <li><a href="">Github</a></li>
                        <li><a href="">Twitter</a></li>
                        <li><a href="">Linkedin</a></li>
                        <li><a href="">Gmail</a></li>
                    </ul>
                </div>
            </div>
        </StyledFooter>
    )
}

export default Footer