import { useReducer } from 'react';
import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import {
  Home,
  About,
  Events,
 Contact,
 Whoops404,
 Services
} from "./Pages";


function App() {

  
  return (
    <div>

    <div>
    <nav>
            <Link to="about">About</Link>
            <Link to="events">Events</Link>
            <Link to="contact">Contact</Link>
        </nav>
    </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path ="/about" element={<About />} > 
            <Route path ="services" element={<Services />} />
          
          </Route>
          <Route path ="/events" element={<Events />} />
          <Route path ="/contact" element={<Contact />} />
          <Route path ="*" element={<Whoops404 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
