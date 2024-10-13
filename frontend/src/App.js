import { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import LoginForm from './components/LoginPage';
import AdminDashboard from './components/AdminDashboard';
import EmployeeDashboard from './components/EmployeeDashboard';
import About from './components/AboutPage';
import Features from './components/Features';
import Hello from './components/hello';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [savedUsername, setSavedUsername] = useState('');
  const [savedisAdmin, setSavedIsAdmin] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    const userName = localStorage.getItem('userName');
    const is_admin = localStorage.getItem('isAdmin') === '1' ? true: false;
    if (userId && userName) {
      setIsLoggedIn(true);
      setSavedUsername(userName);
      setSavedIsAdmin(is_admin);
    }
  }, []);

  console.log("app ",savedisAdmin);

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} savedUsername={savedUsername} setSavedUsername={setSavedUsername} savedIsAdmin={savedisAdmin} setSavedIsAdmin={setSavedIsAdmin} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginForm setIsLoggedIn={setIsLoggedIn} setSavedUsername={setSavedUsername} setSavedIsAdmin={setSavedIsAdmin}/>} />
        <Route path='/about' element={<About />} />
        <Route path='/hello' element={<Hello />} />
        <Route path='/features' element={<Features />} />
        <Route path='/admin-dashboard' element={<AdminDashboard />} />
        <Route path='/employee-dashboard' element={<EmployeeDashboard />} />
      </Routes>
    </>
  );
}

export default App;
