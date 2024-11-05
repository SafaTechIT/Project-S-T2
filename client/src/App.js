import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, CssBaseline } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Notifications from './pages/Notifications';
import Messages from './pages/Messages'; // وارد کردن صفحه پیام‌ها

function App() {
  return (
    <Router>
      <CssBaseline />
      <Container maxWidth="lg">
        <Navbar />
        <div className='main-content' style={{ display: 'flex', padding: '20px' }}>
          <Sidebar />
          <main style={{ flex: 1 }}>
            <AnimatePresence>
              <Routes>
                <Route 
                  path="/" 
                  element={
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <Home />
                    </motion.div>
                  } 
                />
                <Route 
                  path="/profile" 
                  element={
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <Profile />
                    </motion.div>
                  } 
                />
                <Route 
                  path="/notifications" 
                  element={
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <Notifications />
                    </motion.div>
                  } 
                />
                <Route 
                  path="/messages"  // مسیر جدید برای صفحه پیام‌ها
                  element={
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <Messages />
                    </motion.div>
                  } 
                />
              </Routes>
            </AnimatePresence>
          </main>
        </div>
      </Container>
    </Router>
  );
}

export default App;