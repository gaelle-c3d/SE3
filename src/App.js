import logo from './logo.svg';
import './App.css';
import Header from './components/header.tsx'
import { Component } from 'react';
import Navbar from './components/navbar.tsx';
import Footer from './components/footer';
import Viewer from './components/viewer';

function App() {
  return (
    <div className="App">
    
      <div className="App-header">
        <p>three JS    coming soon     </p>
    </div>
 <Navbar>
      </Navbar>
      
      <Viewer></Viewer>
    <Footer></Footer>

    </div>

  );
}

export default App;
