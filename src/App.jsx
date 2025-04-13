import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ResumePage from './pages/ResumePage';
import StarsCanvas from './components/3d/Background';
import Cursor from './components/Cursor';
import ScrollProgress from './components/ScrollProgress';
import { useLocation } from 'react-router-dom';

const AppContent = () => {
  const location = useLocation();
  const isResumePage = location.pathname === '/resume';

  return (
    <div className="relative z-0 bg-primary">
      <div className="relative z-10">
        {!isResumePage && <Navbar />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </div>
      <div className="fixed inset-0 z-0">
        <StarsCanvas />
      </div>
      <Cursor />
      <ScrollProgress />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
