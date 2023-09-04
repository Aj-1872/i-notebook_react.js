import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home'
import About from './component/About';

function App() {
  return (
    <Fragment>
      <Router>

        <Navbar />
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/About' element={<About />} />

        </Routes>

      </Router>
    </Fragment>
  );
}

export default App;
