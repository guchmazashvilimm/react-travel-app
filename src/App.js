import React from 'react';
import Navbar from './components/Navbar';
import Home from './routes/Home';
import Contact from './routes/Contact';
import Service from "./routes/Service";
import About from "./routes/About";
import image from "./assets/travel1.jpg";
import Hero from './components/Hero';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';
import SignUp from './routes/SignUp';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='Signup' element={<SignUp/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
