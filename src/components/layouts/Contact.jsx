import { StyledContact } from "../styles/Contact.styled"
import { motion } from "framer-motion"
import { variants } from "../animations/variants"
const Contact = () => {
    const {transitionYFunc, fadeInFunc } = variants
    const contactTitle = "Let's connect and work together."
    const titleArr = contactTitle.split(' ')

    return (
        <StyledContact>
            <div className="wrapper container">
                <motion.div 
                    className="contact-text_wrapper"
                    variants={transitionYFunc(.3).parent}
                    whileInView="animate"
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
                <motion.p 
                className="contact-desc"
                variants={fadeInFunc()}
                    whileInView="animate"
                    initial="initial">
                    Are you looking for a front-end engineer for freelance, part-time or full-time jobs?    <br />  Reach out to me.
                </motion.p>
                <motion.a href="" 
                className="email"
                variants={fadeInFunc(.1)}
                    whileInView="animate"
                    initial="initial">Send an email</motion.a>
                <motion.p 
                className="links-desc"
                variants={fadeInFunc(.2)}
                    whileInView="animate"
                    initial="initial">
                    connect with me via these platforms:
                </motion.p>
                <motion.div 
                className="links"
                variants={fadeInFunc(.3)}
                    whileInView="animate"
                    initial="initial">
                    <a href="">Github</a>
                    <div className="circle"></div>
                    <a href="">linkedin</a>
                    <div className="circle"></div>
                    <a href="">Twitter</a>
                </motion.div>
            </div>
        </StyledContact>
    )
}

export default Contact