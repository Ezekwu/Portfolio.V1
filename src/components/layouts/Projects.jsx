import { StyledProjects } from "../styles/Projects.styled"
import { variants } from "../animations/variants"
import { motion } from "framer-motion"
import Cointrakk from '../../assets/images/projects/cointrackk/coin-track-ss-1.png'
import Project from "./Project"
import { projects } from "../../data/projects"
const Projects = () => {
    const aboutTitle = "My Projects."
    const titleArr = aboutTitle.split(' ')

    const {transitionYFunc, widthAnimate} = variants
    return (
        <StyledProjects>
            <div className="container wrapper">
                <div className="title">
                    <motion.div 
                    className="about-text_wrapper"
                    variants={transitionYFunc(0.04).parent}
                    whileInView="animate"
                    initial="initial">
                        {
                            titleArr.map((word, index)=>(
                                <div className="span-parent" key={index}>
                                    <motion.div 
                                    className="span-child"
                                    variants={transitionYFunc().child}>
                                        {word}
                                    </motion.div>
                                </div>
                            ))
                        }
                        
                    </motion.div>

                    <motion.div className="underline"
                    variants={widthAnimate(1)}
                    whileInView="animate"
                    initial="initial"
                    ></motion.div>

                </div>
                {
                    projects.map((project, index)=>(
                        <Project key={index} project={project}/>
                    ))
                }
                
            </div>
        </StyledProjects>
    )
}

export default Projects