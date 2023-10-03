import './App.css';
import Contact from './Component/Contact.js';
import About from './Routes/About.js';
import Service from './Routes/Service.js';
import Home from './Routes/Home.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="/service" element={<Service/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
      <Navbar />
    </div>
  );
}

export default App;
