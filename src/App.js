import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home'
import About from './component/About';
import NotesState from './context/NotesState';

function App() {
  return (
    <Fragment>
      <NotesState>
        <Router>
          <Navbar />
          <div className='container'>
            <Routes>
              <Route path='/Home' element={<Home />} />
              <Route path='/About' element={<About />} />
            </Routes>
          </div>
        </Router>
      </NotesState>
    </Fragment>
  );
}

export default App;
