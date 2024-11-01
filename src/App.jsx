import './app.scss';
import About from './Components/about/About';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Parallax from './Components/Parallax/Parallax';
import './index.css'
import Projects from './components/Projects/Projects';
import { TimelineDemo } from './TimelinePage';
 
import { BrowserRouter } from 'react-router-dom';
import GlobeDemo from './Globaldemo';
import Contact from './components/Contact/Contact';
function App() {
  return (
     <BrowserRouter >
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
