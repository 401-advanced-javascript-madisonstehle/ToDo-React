import React from 'react';

import './styles/styles.sass'

import Header from './components/Header.js';
import ToDo from './components/ToDo.js'
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <ToDo />
      <Footer />
    </div>
  );
}

export default App;
