import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CreateDeck from './components/CreateDeck';
import ReviewDeck from './pages/ReviewDeck';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/create-deck" element={<CreateDeck/>}/>
          <Route path="/review-deck" element={<ReviewDeck/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
