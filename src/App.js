import React from 'react';

import './styles/styles.sass'

import Header from './components/Header.js';
import ToDo from './components/ToDo.js'
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <ToDo />
      </main>
      <Footer />
    </div>
  );
}

export default App;
