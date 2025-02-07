import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import HomeHub from './pages/HomeHub';
import Courageegude from './pages/Courageegude';
import ScrollToTop from './components/layouts/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/project/HomeHub" element={<HomeHub />} />
          <Route path="/project/Courageegude" element={<Courageegude />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
