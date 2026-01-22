import React from 'react';
import IezimeInfo from './components/IezimeInfo';
import LietotajstastsFormat from './components/LietotajstastsFormat';
import ScenarijuVeidosana from './components/ScenarijuVeidosana';
import RubikaKubs from './components/RubikaKubs';
import VeiksmigaisIznakums from './components/VeiksmigaisIznakums';
import './App.css';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#1a1a1a', color: 'white', minHeight: '100vh', padding: '20px' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: '#646cff' }}>Funkcionālās iezīmes izveide</h1>
      </header>
      
      <main style={{ maxWidth: '800px', margin: '0 auto', background: '#242424', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
        <IezimeInfo />
        <LietotajstastsFormat />
        <ScenarijuVeidosana />
        <RubikaKubs />
        <VeiksmigaisIznakums />
      </main>
    </div>
  );
}

export default App;