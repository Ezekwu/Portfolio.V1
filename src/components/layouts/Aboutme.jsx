import { StyledAmoutme } from "../styles/Aboutme.styled"
import CodeSvg from '../../assets/svg/code-svgrepo-com.svg'
import StarSvg from '../../assets/svg/star-favourite-rating-svgrepo-com.svg'
import { motion } from "framer-motion"
import { variants } from "../animations/variants"
const Aboutme = () => {
    const aboutTitle = "About me"
    const titleArr = aboutTitle.split(' ')
    const {transitionX, transitionYFunc, fadeInStaggeredFunc  }  = variants
    return (
        
        <StyledAmoutme id="about">
            
            <div className="container wrapper">
                <div className="col-1">
                    <motion.div 
                    className="about-text_wrapper"
                    variants={transitionX(0.04).parent}
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
                </div>

                <motion.div 
                className="col-2"
                variants={fadeInStaggeredFunc(1).parent}
                whileInView="animate"
                initial="initial">
                    <motion.div 
                    className="point"
                    variants={fadeInStaggeredFunc().child}>
                        <img src={CodeSvg} alt="" />
                        <p>I am a meticulous front-end developer with 2 years of experience building responsive and interactive websites using React.</p>
                    </motion.div>
                    <motion.div 
                    className="point"
                    variants={fadeInStaggeredFunc().child}>
                        <img src={CodeSvg} alt="" />
                        <p>I am a good problem solver, often blending my creativity with my passion to provide efficient solutions for my clients</p>
                    </motion.div>
                    <motion.div 
                    className="point"
                    variants={fadeInStaggeredFunc().child}>
                        <img src={CodeSvg} alt="" />
                        <p>I love being part of a team that includes individuals that are passionate about their jobs, and execute their tasks to perfection</p>
                    </motion.div>
                    <motion.div 
                    className="point"
                    variants={fadeInStaggeredFunc().child}>
                        <img src={StarSvg} alt="" className="star-svg"/>
                        <p>Asides web-development, i love cooking, working out and listening to  some good music</p>
                    </motion.div>

                </motion.div>
            </div>
        </StyledAmoutme>
    )
}

export default Aboutme