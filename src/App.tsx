import React from 'react';
import logo from './logo.svg';
import './App.css';
import AR from './components/AR';
import ARButton from './components/ARButton';

function App() {
  return (
    <div className="App">
       <header className='header'>A</header>
       <div className='content' id="capture">
        <AR />
       </div>
       <ARButton />
      <footer className='footer'>A</footer>
    </div>
  );
}

export default App;
