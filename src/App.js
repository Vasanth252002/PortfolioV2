import './App.css';
import About from './Components/About/About';
import Certifications from './Components/Certifications/Certifications';
import Experience from './Components/Experience/Experience';
import Hero from './Components/Hero/Hero';
import NavBar from './Components/NavBar/NavBar';
import Projects from './Components/Projects/Projects';
import LeftSidebar from './Components/Sidebar/LeftSidebar';
import RightSidebar from './Components/Sidebar/RightSidebar';
import Footer from './Components/Footer/Footer';
import AppearOnView from './Components/Animations/AppearOnView';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="triple-render">
        <div className="leftSidebar-home"><LeftSidebar /></div>
        <div className="middle-home">
          <Hero />
          <AppearOnView delay={0}>
          <About/>
          </AppearOnView>

          <AppearOnView delay={0}>
          <Experience />
          </AppearOnView>

          <AppearOnView delay={0}>
          <Projects />
          </AppearOnView>

          <AppearOnView delay={0}>
          <Certifications />
          </AppearOnView>
          
          <Footer />
        </div>
        <div className="rightSidebar-home"><RightSidebar /></div>
      </div>
    </div>
  );
}

export default App;
