import { StyledProject } from '../styles/Project.styled';
import { motion } from 'framer-motion';
import { variants } from '../animations/variants';
import { Link } from 'react-router-dom';
const Project = ({ project }) => {
  const { transitionX, fadeInFunc, scaleAnimate } = variants;
  const aboutTitle = project.name;
  const titleArr = aboutTitle.split(' ');
  return (
    <StyledProject>
      <div className="project">
        <div className="details">
          <motion.div
            className="project-name_wrapper"
            variants={transitionX().parent}
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
          <motion.p
            variants={fadeInFunc(0.05)}
            viewport={{ once: true }}
            whileInView="animate"
            initial="initial"
            className='description'
            >{project.description}</motion.p>
          <motion.p
            className="duration"
            variants={fadeInFunc(0.05)}
            viewport={{ once: true }}
            whileInView="animate"
            initial="initial"
          >
            {project.duration}
          </motion.p>

          <motion.div
            className="tech-stack"
            variants={fadeInFunc(0.1)}
            whileInView="animate"
            viewport={{ once: true }}
            initial="initial"
          >
            {project.technologies.map((tech, index) => (
              <p key={index}>{tech}</p>
            ))}
          </motion.div>

          <motion.div
            className="links"
            variants={fadeInFunc(0.2)}
            whileInView="animate"
            viewport={{ once: true }}
            initial="initial"
          >
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noreferrer">
                Repository
              </a>
            )}
            <a href={project.liveSite} target="_blank" rel="noreferrer">
              Live-site
            </a>
          </motion.div>
        </div>
        <motion.div
          className="thumbnail"
          variants={fadeInFunc(0.8)}
          whileInView="animate"
          viewport={{ once: true }}
          initial="initial"
        >
          <img src={project.thumbnail} alt="" />
        </motion.div>
      </div>
      <motion.div
        className="border"
        variants={scaleAnimate()}
        whileInView="animate"
        viewport={{ once: true }}
        initial="initial"
      ></motion.div>
    </StyledProject>
  );
};

export default Project;
