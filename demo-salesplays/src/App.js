import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SearchPage from './SearchPage';
import ResultsPage from './ResultsPage';
import logo from './logo.png';
function App() {
  return (
    <Router>
      <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
        <ul>
          <li>
            <Link to="/">Search Page</Link>
          </li>
          <li>
            <Link to="/results">Results Page</Link>
          </li>
        </ul>
        <img src={logo} alt="logo" style={{ height: '60px', marginTop: '10px', marginRight: '15px' }} />
      </nav>

      <Routes>
        <Route index element={<SearchPage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </Router>
  );
}

export default App;





