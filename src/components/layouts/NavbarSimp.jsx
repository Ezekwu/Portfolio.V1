import { StyledNavbar } from '../styles/Navbar.styled';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const NavbarSimp = () => {
  const [activeNavbar, setActiveNavbar] = useState(false);

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
      <div className={activeNavbar ? 'main-nav active-dark' : 'main-nav'}>
        <div className="container wrapper ">
          <Link className="logo" to="/">
            Ezekwu.
          </Link>
        </div>
      </div>
    </StyledNavbar>
  );
};

export default NavbarSimp;
