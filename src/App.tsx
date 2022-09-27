import React from 'react';
// import logo from './logo.svg';
import './App.css';
import AR from './components/AR';
import ARButton from './components/ARButton';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='content' id="capture">
        <AR />
      </div>
      <ARButton />
      <Footer />
    </div>
  );
}

export default App;
