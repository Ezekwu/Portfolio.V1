import { StyledHeader } from "../styles/Header.styled"
import Navbar from "./Navbar"
import CustomSvg1 from '../../assets/images/Custom Svg 1.png'
import CustomSvg2 from '../../assets/images/Custom Svg 2.png'
import { motion } from "framer-motion"
import { variants } from "../animations/variants"
import DownSvg from '../../assets/svg/12-arrow-down-outline(1).gif'
const Header = () => {
    const heroTitle = "Hi, i'm Ezekwu Jeremiah, a front-end engineer based in Enugu Nigeria."
    const titleArr = heroTitle.split(' ')

    const {transitionX, transitionY } = variants;

    return (
        <StyledHeader >
            <Navbar />
            <div className="svg1">
                <img src={CustomSvg1} alt="" />
            </div>

            <div className="svg2">
                <img src={CustomSvg2} alt="" />
            </div>

            <div className="container wrapper">
                <motion.div 
                className="hero-text_wrapper"
                variants={transitionY.parent}
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
                                variants={transitionY.child}>
                                    {word}
                                </motion.span>
                            </span>
                        ))
                    }
                </motion.div>
            </div>

            <div className="down-svg container wrapper">
                <div className="scroll-container">
                    <img src={DownSvg} alt="" />
                    <p>Scroll down</p>
                </div>
            </div>

        </StyledHeader>
    )
}

export default Header