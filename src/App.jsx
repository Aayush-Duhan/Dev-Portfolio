import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import StarsCanvas from './components/3d/Background';
import Cursor from './components/Cursor';

const App = () => {
  return (
    <Router>
      <div className="relative z-0 bg-primary">
        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Projects />
                <Contact />
              </>
            } />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
        <div className="fixed inset-0 z-0">
          <StarsCanvas />
        </div>
        <Cursor />
      </div>
    </Router>
  );
};

export default App;
