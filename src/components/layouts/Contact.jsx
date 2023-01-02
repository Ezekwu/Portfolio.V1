import { StyledContact } from "../styles/Contact.styled"
import { motion } from "framer-motion"
import { variants } from "../animations/variants"
const Contact = () => {
    const {transitionYFunc } = variants
    const contactTitle = "Let's connect and work together"
    const titleArr = contactTitle.split(' ')

    return (
        <StyledContact>
            <div className="wrapper container">
                <motion.div 
                    className="contact-text_wrapper"
                    variants={transitionYFunc(.2).parent}
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
                <p className="contact-desc">
                    Are you looking for a front-end engineer for freelance, part-time or full-time jobs?    <br />  Reach out to me.
                </p>
                <a href="">Send am email</a>
            </div>
        </StyledContact>
    )
}

export default Contact