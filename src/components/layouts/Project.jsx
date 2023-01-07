import { StyledProject } from "../styles/Project.styled"
import { motion } from "framer-motion"
import { variants } from "../animations/variants"
import { Link } from "react-router-dom"
const Project = ({ project }) => {
    const {  transitionX, fadeInFunc, scaleAnimate } = variants
    const aboutTitle = project.name
    const titleArr = aboutTitle.split(' ')
    return (
        <StyledProject>
            <div className="project">
                    <div className="details">
                        <motion.div 
                        className="project-name_wrapper"
                        variants={transitionX().parent}
                        whileInView="animate"
                        initial="initial">
                            {
                                titleArr.map((word, index)=>(
                                    <div className="span-parent" key={index}>
                                        <motion.div 
                                        className="span-child"
                                        variants={transitionX().child}>
                                            {word}
                                        </motion.div>
                                    </div>
                                ))
                            }
                            
                        </motion.div>
                        <motion.p 
                        className="duration"
                        variants={fadeInFunc(.05)}
                        whileInView="animate"
                        initial="initial">
                            {project.duration}
                        </motion.p>

                        <motion.div 
                        className="tech-stack"
                        variants={fadeInFunc(.1)}
                        whileInView="animate"
                        initial="initial">
                            {
                                project.technologies.map((tech, index)=>(
                                    <p key={index}>{tech}</p>
                                ))
                            }
                        </motion.div>

                        <motion.div 
                        className="links"
                        variants={fadeInFunc(.2)}
                        whileInView="animate"
                        initial="initial">
                            <a href={project.githubLink} target='_blank' rel="noreferrer">Repository</a>
                            <a href={project.liveSite} target='_blank' rel="noreferrer">Live-site</a>
                        </motion.div>

                        
                        <motion.div
                        variants={fadeInFunc(.4)}
                        whileInView="animate"
                        initial="initial">
                            <Link 
                            to={project.viewMoreLink}
                            className="View-more"> 
                                View More
                            </Link>
                        </motion.div>
                    </div>
                    <motion.div 
                    className="thumbnail"
                    variants={fadeInFunc(.8)}
                    whileInView="animate"
                    initial="initial"
                    >
                        <img src={project.thumbnail} alt="" />
                    </motion.div>
                </div>  
                <motion.div 
                className="border"
                variants={scaleAnimate()}
                    whileInView="animate"
                    initial="initial"></motion.div>
        </StyledProject>
    )
}

export default Project