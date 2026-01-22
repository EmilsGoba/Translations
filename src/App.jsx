import React from 'react';
import IezimeInfo from './components/IezimeInfo';
import LietotajstastsFormat from './components/LietotajstastsFormat';
import ScenarijuVeidosana from './components/ScenarijuVeidosana';
import RubikaKubs from './components/RubikaKubs';
import VeiksmigaisIznakums from './components/VeiksmigaisIznakums';
import Translations from './components/Translations';
import './App.css';

function App() {
  return (
    <div className="App" style={appContainerStyle}>
      <header style={{ textAlign: 'center', padding: '40px 0' }}>
        <h1 style={mainTitleStyle}>Gherkin & Features Masterclass</h1>
        <p style={{ color: '#888' }}>BCS - Behavior Driven Development kursi</p>
      </header>

      <div style={layoutGridStyle}>
        {/* Kreisā puse: Teorija */}
        <div style={theoryColumnStyle}>
          <IezimeInfo />
          <LietotajstastsFormat />
          <ScenarijuVeidosana />
          <RubikaKubs />
          <VeiksmigaisIznakums />
        </div>

        {/* Labā puse: Terminu tabula */}
        <div style={tableColumnStyle}>
          <Translations />
        </div>
      </div>
    </div>
  );
}

// Stili
const appContainerStyle = {
  backgroundColor: '#111',
  color: 'white',
  minHeight: '100vh',
  fontFamily: 'Inter, system-ui, sans-serif'
};

const mainTitleStyle = {
  fontSize: '3rem',
  background: 'linear-gradient(to right, #646cff, #42b883)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: '900'
};

const layoutGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
  gap: '30px',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px 40px 20px'
};

const theoryColumnStyle = { display: 'flex', flexDirection: 'column' };
const tableColumnStyle = { background: '#000', borderRadius: '24px', padding: '10px' };

export default App;