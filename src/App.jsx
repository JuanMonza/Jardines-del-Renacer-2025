import React from 'react';
import Header from './components/Header.jsx';
import UmbralDePaz from './components/UmbralDePaz.jsx';
import Servicios from './components/Servicios.jsx';
import Galeria from './components/Galeria.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <UmbralDePaz />
        <Servicios />
        <Galeria />
      </main>
    </>
  );
}

export default App;