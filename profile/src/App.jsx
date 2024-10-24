import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Kanun from '../../kanun/my-react-app/src/Page/Home.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Kan from '../../kanyarat/src/App.jsx'
import Main from '../page/profile.jsx'
import Home from '../../kanun/my-react-app/src/Page/Home.jsx';
import About from '../../kanun/my-react-app/src/Page/About';
import Project from '../../kanun/my-react-app/src//Page/Project.jsx';

import Home1 from '../../kanyarat/src/Page/Mainindex.jsx';
import About1 from '../../kanyarat/src/Page/About.jsx';
import Performance1 from '../../kanyarat/src/Page/Performance.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/kanun" element={<Kanun />} />
          <Route path="/kan" element={<Kan />} />
          <Route path="/about" element={<About />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about1" element={<About1 />} />
          <Route path="/performance1" element={<Performance1 />} />
          <Route path="/home1" element={<Home1 />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
