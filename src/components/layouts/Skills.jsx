import { StyledSkills } from '../styles/Skills.styled';
import { motion } from 'framer-motion';
import { variants } from '../animations/variants';
import { skills } from '../../data/skills';
import Card from './Card';
const Skills = () => {
  const aboutTitle = 'My skills';
  const titleArr = aboutTitle.split(' ');
  const { transitionX, fadeInFunc } = variants;
  return (
    <StyledSkills id="skills">
      <div className="container wrapper">
        <div className="col-1">
          <motion.div
            className="about-text_wrapper"
            variants={transitionX(0.04).parent}
            whileInView="animate"
            viewport={{ once: true }}
            initial="initial"
          >
            {titleArr.map((word, index) => (
              <div className="span-parent" key={index}>
                <motion.div
                  className="span-child"
                  variants={transitionX().child}
                >
                  {word}
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="col-2"
          variants={fadeInFunc(1)}
          whileInView="animate"
          viewport={{ once: true }}
          initial="initial"
        >
          {skills.map((skill) => (
            <Card img={skill.img} name={skill.name} />
          ))}
        </motion.div>
      </div>
    </StyledSkills>
  );
};

export default Skills;
