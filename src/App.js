import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import VendorRegistration from './pages/VendorRegistration';
import VendorSignIn from './pages/VendorSignIn';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
    
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vendor-registration" element={<VendorRegistration />} />
            <Route path="/vendor-signin" element={<VendorSignIn />} />

            VendorSignIn
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

      </div>
    </Router>
  );
}

export default App;