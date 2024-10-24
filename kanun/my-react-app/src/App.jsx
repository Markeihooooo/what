import { Routes, Route } from 'react-router-dom';
import Home from './Page/Home';
import About from './Page/About';
import Project from './Page/Project'
import './App.css';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </div>
  );
};

export default App;
