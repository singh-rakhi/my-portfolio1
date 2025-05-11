// import logo from './logo.svg';
import Nav from './components/Nav';
import Body from './components/Body';

import Footer from './components/Footer';
import './App.css';
import './index.css';
import './components/HelpSection';
import './components/InfoSection';
import './components/ProjectsSection';
import './components/SkillsSection'
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import InfoSection from './components/InfoSection';
import HelpSection from './components/HelpSection';



function App() {
  return (
    <div className="App">
      <div className=" font-source min-h-screen flex flex-col">
      <Nav />
      <Body />
        <SkillsSection/>
        <ProjectsSection/>
        <InfoSection/>
        <HelpSection/>
      <Footer />
      
    </div>
    </div>
  );
}


export default App;
