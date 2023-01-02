import Aboutme from "../components/layouts/Aboutme"
import Header from "../components/layouts/Header"
import Skills from "../components/layouts/Skills"
import Projects from "../components/layouts/Projects"
import Contact from "../components/layouts/Contact"
const Homepage = () => {
    return (
        <div>
            <Header />
            <Aboutme />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}

export default Homepage