import { Timeline } from "./components/ui/timeline";
import './components/ui/Timeline.scss';
import {AnimatedPinDemo, AnimatedPinDemo2, AnimatedPinDemo3, AnimatedPinDemo4, AnimatedPinDemo5} from './3dpinproject'
export function TimelineDemo() {
  const data = [
    {
      title: "YOUTUBE CLONE",
      content: (
        <div>
         <div className="grid grid-cols-2 gap-4 ">
            <AnimatedPinDemo />
          </div>
          <p className="about-project">
            During my internship as a Front-End Developer at Inventeron
            Technology, I developed a YouTube clone application using React JS.
            The app fetches video data dynamically through Rapid API, mimicking
            YouTube's functionality for searching, displaying, and viewing
            videos.
          </p>
         
        </div>
      ),
    },
    {
      title: "PET SHOP ",
      content: (
        <div>
         <div className="grid grid-cols-2 gap-4 ">
            <AnimatedPinDemo2 />
          </div>
          <p className="about-project">
            Developed a comprehensive database project serves as a centralized
            repository for pet shop details. Leveraging SQL for efficient data
            storage and retrieval, the project enables users to access
            information about various pets effortlessly. The user-friendly front
            end, built with HTML and CSS while PHP serves as the server
            language.
          </p>
         
        </div>
      ),
    },

    {
      title: "MOVIEFLIX",
      content: (
        <div>
        <div className="grid grid-cols-2 gap-4">
            <AnimatedPinDemo3 />
          </div>
          <p className="about-project">
            Designed and developed a dynamic website using HTML, CSS, and
            JavaScript, dedicated to showcasing a renowned actor's movie
            collections and music catalog. Implemented interactive features to
            enable users to explore the actor's filmography and music,
            demonstrating my ability to create engaging web experiences.
          </p>

          
        </div>
      ),
    },
    {
      title: "PORTFOLIO ",
      content: (
        <div>
        <div className="grid grid-cols-2 gap-4">
            <AnimatedPinDemo4 />
          </div>
          <p className="about-project">
            Developed a personal portfolio website using React, showcasing my
            skills, projects, and achievements. Leveraged React's
            component-based architecture to create a dynamic and responsive user
            interface, demonstrating my proficiency in modern web development
            technologies and design.
          </p>
          
        </div>
      ),
    },

    {
      title: "CONNECT CARE",
      content: (
        <div>
         <div className="grid grid-cols-2 gap-4">
            <AnimatedPinDemo5 />
          </div>
          <p className="about-project">

            Connect Care is food donation App developed using Flutter and
            Supabase in which donors can donate and recipients can receive the
            excess food with the involvement of Volunteers.
          </p>
         
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
