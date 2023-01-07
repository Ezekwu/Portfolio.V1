import { StyledProjectDesc } from "../components/styles/ProjectDesc"
import courage from '../assets/images/projects/courageportfolio/courage-ss1.png'
import courageabout from '../assets/images/projects/courageportfolio/courage-ss2-aboutme.png'
import courageaccordion from '../assets/images/projects/courageportfolio/courage-ss3-accordion.png'
import NavbarSimp from "../components/layouts/NavbarSimp"
import FooterSimp from "../components/layouts/FooterSimp"


const Courageegude = () => {
    return (
        <StyledProjectDesc>
            <NavbarSimp />
            <div className="wrapper container">
                <h2 className="title">Courage Egbude</h2>
                <div className="link">
                    <a href="https://courageegbude.netlify.app/" target="_blank" rel="noreferrer">Live-site</a>
                    <a href="https://coin-trackk.netlify.app/" target="_blank" rel="noreferrer">Repository</a>
                </div>
                <div 
                className="thumbnail">
                    <img src={courage} alt="" />
                </div>
                <div className="div">
                    <h3>Intro</h3>
                    <p className="padding-0">This was a portfilo website for Courage Egbude, a UI/UX designer based in lagos, Nigeria.</p>
                </div>
                <div className="div">
                    <h3>Duration</h3>
                    <p className="padding-0">21st Oct - 4th Nov 2022</p>
                </div>
                <div className="div">
                    <h3>Technologies used</h3>
                    <p className="padding-0">React, Styled-Components, Framer-Motion</p>
                </div>
                <div 
                className="thumbnail">
                    <img src={courageabout} alt="" />
                </div>
                <div 
                className="thumbnail">
                    <img src={courageaccordion} alt="" />
                </div>
                <div className="div">
                    <h3>Problems I faced building this project</h3>
                    <p className="padding-0">This project was relatively easy for me cause it is pretty straight forward. However, i had to approach the project in an orgarnized manner, creating reusable components that will be used throughout the website so as to make my code clean, readable, and maintainable.</p>
                </div>
                <div className="border"></div>
            </div>
            <FooterSimp />
        </StyledProjectDesc>
    )
}

export default Courageegude