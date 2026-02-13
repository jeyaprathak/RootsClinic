import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PregnancyRelated from './pages/PregnancyRelated';
import FertilityIssues from './pages/FertilityIssues';
import ServiceDetail from './pages/ServiceDetail';
import BlogDetail from './pages/BlogDetail';
import GeneralGynecologic from './pages/GeneralGynegologic';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pregnancy-related" element={<PregnancyRelated />} />
            <Route path="/fertility-issues" element={<FertilityIssues />} />
            <Route path="/general-gynecologic" element={<GeneralGynecologic />} />
            <Route path="/service/:id" element={<ServiceDetail />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;