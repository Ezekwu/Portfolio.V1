import { StyledNavbar } from '../styles/Navbar.styled';
import { motion } from 'framer-motion';
import { variants } from '../animations/variants';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Resume from '../../assets/document/Ezekwu-Jeremiah-Ifeanyi.-ResumeV5.pdf';
const Navbar = () => {
  const { fadeDownFunc } = variants;
  const [activeNavbar, setActiveNavbar] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  const toggleNav = () => {
    setMobileNav((prevState) => !prevState);
  };

  const closeNav = () => {
    setMobileNav(false);
  };

  const showActiveNav = () => {
    if (window.scrollY >= 120) {
      setActiveNavbar(true);
    } else {
      setActiveNavbar(false);
    }
  };

  window.addEventListener('scroll', showActiveNav);

  return (
    <StyledNavbar>
      <div className={activeNavbar ? `main-nav active` : `main-nav`}>
        <motion.div
          className="container wrapper"
          variants={fadeDownFunc(1)}
          animate="animate"
          initial="initial"
        >
          <Link className="logo" to="/">
            Ezekwu.
          </Link>

          <div
            className={
              mobileNav ? 'links-container show-menu' : 'links-container'
            }
          >
            <ul className="links">
              <li onClick={closeNav}>
                <a href="#about">About</a>
              </li>
              <li onClick={closeNav}>
                <a href="#skills">Skills</a>
              </li>
              <li onClick={closeNav}>
                <a href="#projects">Projects</a>
              </li>
              <li onClick={closeNav}>
                <a href="#contact">Contact</a>
              </li>
              <a href={Resume} download className="resume">
                Resume
              </a>
            </ul>
          </div>
          <div className="toggle-menu" onClick={toggleNav}>
            {mobileNav ? (
              <i class="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </div>
        </motion.div>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
