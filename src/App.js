import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Home from "./pages/Home";
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <Route exact path="/" component={Home} />
    </>

  );
}

export default App;
