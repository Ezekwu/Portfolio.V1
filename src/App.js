import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage';
import Project from './pages/Project';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/project' element={<Project/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
