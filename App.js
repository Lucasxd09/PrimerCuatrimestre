import React from 'react'
import Data from './components/hero/Data';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Versiones from './components/hero/VersionesInd';
import Actualidadind from './components/hero/ActualidadInd';
import AplicacionesInd from './components/hero/AplicacionesInd';

function App() {
  return (
    <>
      
      <Navbar />
      <Data />
      <Versiones />
      <Actualidadind />
      <Hero />
      <AplicacionesInd />
      
      
      
      
    </>
  );
}

export default App;
