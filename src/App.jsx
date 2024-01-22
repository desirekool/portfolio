import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { db } from "./backend/Firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";


const skillsCollection = "skills";
const aboutCollection = "abouts";
const projectsCollection = "projects";




const App = () => {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [about, setAbout] = useState([]);


  useEffect(() => {
    // const getAllSkills = async () => {
    //   const taskListRef = collection(db, skillsCollection);
    //   const q = query(taskListRef, orderBy("title"));
    //   const querySnapshot = await getDocs(q);
    //   const skills = [];      
    //   querySnapshot.forEach((doc) => {
    //     skills.push({
    //       id: doc.id,
    //       title: doc.data().title,
    //       icon: doc.data().icon,
    //       text: doc.data().text,
    //     });
    //   });
    //   setSkills(skills);      
    //   return skills;
    // };

    const getAllProjects = async () => {
      const projectsRef = collection(db, projectsCollection);
      const q = query(projectsRef, orderBy("level"));
      const querySnapshot = await getDocs(q);
      const projects = [];
      querySnapshot.forEach((doc) => {
        projects.push({
          id: doc.id,
          title: doc.data().title,
          img: doc.data().img,
          text: doc.data().text,
          url: doc.data().url,
          github: doc.data().github,
          level: doc.data().level,
        });
      });
      setProjects(projects);
      return projects;
    };

    // getAllSkills();

    getAllProjects();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects projects={projects}/>
    </>
  );
};
export default App;
