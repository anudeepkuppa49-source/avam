import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TopBar from './components/TopBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import Media from './pages/Media';
import Resources from './pages/Resources';
import Dashboard from './pages/Dashboard';
import OurWork from './pages/OurWork';
import './App.css';

function App() {
  return (
    <Router>
      <TopBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/media" element={<Media />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/our-work" element={<OurWork />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
