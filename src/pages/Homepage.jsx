import Aboutme from "../components/layouts/Aboutme"
import Header from "../components/layouts/Header"
import Skills from "../components/layouts/Skills"
import Projects from "../components/layouts/Projects"
const Homepage = () => {
    return (
        <div>
            <Header />
            <Aboutme />
            <Skills />
            <Projects />
        </div>
    )
}

export default Homepage