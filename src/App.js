import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AboutMe from './Aboutme';
import AnimatedText from './components/tes_anim';
import Projects from './Projects';
import Display from './Display';
import Contactme from './Contactme';
import Hobbies from './Hobbies';
import Modal from 'react-modal';
Modal.setAppElement('#root');


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/Home" element={<AnimatedText />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Display" element={<Display />} />
        <Route path="/Display/:elementname" element={<Display />} />
        <Route path="/Contactme" element={<Contactme />} />
        <Route path="/Hobbies" element={<Hobbies />} />
      </Routes>
    </Router>
  );
}

export default App;
