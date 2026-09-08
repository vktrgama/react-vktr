import './App.css';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/Home';
import Dashboard from './Components/Projects';
import Projects from './Components/Projects';
import About from './Components/About';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Sidebar from './Components/Sidebar';

function App() {
  const user = 'Victor';
  
  return (
    <div class="page">
      <BrowserRouter>
          <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
          <Header />
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/dashboard" element={<Dashboard user={user}/>} />
              <Route path="/projects" element={ <Projects />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
