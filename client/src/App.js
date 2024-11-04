import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
=======
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, CssBaseline } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
>>>>>>> dev
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Notifications from './pages/Notifications';
<<<<<<< HEAD
import './styles/App.css';
=======
>>>>>>> dev

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/notifications" component={Notifications} />
          </Switch>
        </div>
      </div>
=======
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
              </Routes>
            </AnimatePresence>
          </main>
        </div>
      </Container>
>>>>>>> dev
    </Router>
  );
}

export default App;