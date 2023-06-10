import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Deu from './Deu'
import Home from './Deu/pages/Home'
import About from './Deu/pages/About'
import Contact from './Deu/pages/Contact'
import Faq from './Deu/pages/Faq'
import Calculate from './Deu/pages/Calculate'
import Terms from './Deu/pages/Terms';
import Privacy from './Deu/pages/Privacy';
import NotFounds from './NotFounds'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Deu />} >
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/calculate" element={<Calculate />} />
          <Route path="/terms" element={<Terms/>}/>
          <Route path='/privacy' element={<Privacy/>} />
        </Route>
        <Route path="/*" element={<NotFounds />} />
      </Routes>
    </Router>
  );
}

export default App;
