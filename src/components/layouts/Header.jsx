import { StyledHeader } from "../styles/Header.styled"
import Navbar from "./Navbar"
import CustomSvg1 from '../../assets/images/Custom Svg 1.png'
import CustomSvg2 from '../../assets/images/Custom Svg 2.png'
import { motion } from "framer-motion"
import { variants } from "../animations/variants"
import DownSvg from '../../assets/svg/12-arrow-down-outline(1).gif'
const Header = () => {
    const heroTitle = "Hello, i'm Ezekwu Jeremiah, a Front-end Engineer based in Enugu Nigeria."
    const titleArr = heroTitle.split(' ')

    const { transitionYFunc, fadeInFunc } = variants;

    
    return (
        <StyledHeader >
            <Navbar />
            <motion.div 
            className="svg1"
            variants={fadeInFunc(0)}
            animate="animate"
            initial="initial"
            >
                <img src={CustomSvg1} alt="" />
            </motion.div>

            <motion.div 
            className="svg2"
            variants={fadeInFunc(.5)}
            animate="animate"
            initial="initial">
                <img src={CustomSvg2} alt="" />
            </motion.div>

            <div className="container wrapper">
                <motion.div 
                className="hero-text_wrapper"
                variants={transitionYFunc(1.2).parent}
                animate="animate"
                initial="initial">
                    {
                        titleArr.map((word, index)=>(
                            <span 
                            className="span-parent" 
                            key={index}
                            >
                                <motion.span 
                                className="span-child"
                                variants={transitionYFunc().child}>
                                    {word}
                                </motion.span>
                            </span>
                        ))
                    }
                </motion.div>
                
            </div>

            <motion.div 
            className="down-svg container wrapper"
            variants={fadeInFunc(0).child}
            animate="animate"
            initial="initial">
                <div className="scroll-container">
                    <img src={DownSvg} alt="" />
                    <p>Scroll down</p>
                </div>
            </motion.div>

        </StyledHeader>
    )
}

export default Header