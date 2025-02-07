import { StyledContact } from '../styles/Contact.styled';
import { motion } from 'framer-motion';
import { variants } from '../animations/variants';
const Contact = () => {
  const { transitionYFunc, fadeInFunc } = variants;
  const contactTitle = "Let's connect and work together.";
  const titleArr = contactTitle.split(' ');

  return (
    <StyledContact id="contact">
      <div className="wrapper container">
        <motion.div
          className="contact-text_wrapper"
          variants={transitionYFunc(0.3).parent}
          whileInView="animate"
          initial="initial"
        >
          {titleArr.map((word, index) => (
            <span className="span-parent" key={index}>
              <motion.span
                className="span-child"
                variants={transitionYFunc().child}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </motion.div>
        <motion.p
          className="contact-desc"
          variants={fadeInFunc()}
          whileInView="animate"
          initial="initial"
        >
          Are you looking for a front-end engineer for freelance, part-time or
          full-time jobs? <br /> Reach out to me.
        </motion.p>
        <motion.a
          href="mailto:ezekwujerry@gmail.com"
          className="email"
          variants={fadeInFunc(0.1)}
          whileInView="animate"
          initial="initial"
        >
          Send an email
        </motion.a>
        <motion.p
          className="links-desc"
          variants={fadeInFunc(0.2)}
          whileInView="animate"
          initial="initial"
        >
          connect with me via these platforms:
        </motion.p>
        <motion.div
          className="links"
          variants={fadeInFunc(0.3)}
          whileInView="animate"
          initial="initial"
        >
          <a href="https://github.com/Ezekwu" target="_blank" rel="noreferrer">
            Github
          </a>
          <div className="circle"></div>
          <a
            href="https://linkedin.com/in/jerry-ezekwu"
            target="_blank"
            rel="noreferrer"
          >
            linkedin
          </a>
          <div className="circle"></div>
          <a
            href="https://twitter.com/i_ezekwu"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
          <div className="circle"></div>
          <a href="mailto:ezekwujerry@gmail.com">email</a>
        </motion.div>
      </div>
    </StyledContact>
  );
};

export default Contact;
