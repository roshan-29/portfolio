import './app.scss';
import About from './components/About/About';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Parallax from './components/Parallax/Parallax';
import './index.css'
import Projects from './components/Projects/Projects';
import { TimelineDemo } from './TimelinePage';
 
import { BrowserRouter } from 'react-router-dom';
import GlobeDemo from './Globaldemo';
import Contact from './components/Contact/Contact';
function App() {
  return (
     <BrowserRouter>
    <div>
      <section id="HOMEPAGE">
        <Navbar />

        <Hero />
      </section>
      <section >
        <Parallax />
      </section>
      <section id="SKILLS">
        <About />
      </section>
      <section className="section1" >
        <Projects />
      </section>
     
      <section className="section-project" id="PROJECTS">  <TimelineDemo /> </section>
     

      <section id="CONTACT" ><Contact/> </section>
    </div>
      </BrowserRouter>
  );
}

export default App;
