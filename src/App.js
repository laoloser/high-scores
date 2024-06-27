import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import RecentScores from './components/RecentScores';
import HighScores from './components/HighestScores';
import NoteworthyScores from './components/NoteworthyScores';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recent-scores" element={<RecentScores />} />
        <Route path="/high-scores" element={<HighScores />} />
        <Route path="/noteworthy-scores" element={<NoteworthyScores />} />
      </Routes>
    </Router>
  );
}

export default App;
