import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, CssBaseline } from '@mui/material';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Notifications from './pages/Notifications';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        <div style={{ display: 'flex', padding: '20px' }}>
          <Sidebar />
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/notifications" element={<Notifications />} />
            </Routes>
          </main>
        </div>
      </Container>
    </Router>
  );
}

export default App;