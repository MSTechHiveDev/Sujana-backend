import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import LabsPage from './pages/LabsPage';
import SportsPage from './pages/SportsPage';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route path="/labs" element={<LabsPage />} />
        <Route path="/sports" element={<SportsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
