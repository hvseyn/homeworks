import ProjectSection from "../ProjectSection"
import About from "../About"
import Contact from "../Contact";
import Location from "../Location";

function PageContent() {
    return <div className="w3-content w3-padding" style={{ maxWidth: '1564px' }}>
        <ProjectSection />
        <About />
        <Contact />
        <Location />
    </div>
}

export default PageContent