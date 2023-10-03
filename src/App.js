import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './theme/ThemeContext';

import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetails';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:projectID' element={<ProjectDetail />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
