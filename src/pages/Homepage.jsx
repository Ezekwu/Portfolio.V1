import Aboutme from '../components/layouts/Aboutme';
import Header from '../components/layouts/Header';
import Skills from '../components/layouts/Skills';
import Projects from '../components/layouts/Projects';
import Contact from '../components/layouts/Contact';
import Footer from '../components/layouts/Footer';
const Homepage = () => {
  return (
    <div>
      <Header />
      <Aboutme />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Homepage;
