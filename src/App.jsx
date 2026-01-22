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

// Atjauninātie stili App.jsx failā

const appContainerStyle = {
  backgroundColor: '#111',
  color: 'white',
  minHeight: '100vh',
  fontFamily: 'Inter, system-ui, sans-serif',
  padding: '0 20px', // Pievieno sānmalu atstarpes visai lapai
  boxSizing: 'border-box' // Nodrošina, ka padding nepalielina kopējo platumu
};

const layoutGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', // Samazināts minmax, lai labāk ietilptu mazākos ekrānos
  gap: '30px',
  maxWidth: '1200px',
  margin: '0 auto', // Centrē režģi
  padding: '20px 0 40px 0', // Atstarpes augšā un apakšā
  width: '100%' 
};

const theoryColumnStyle = { 
  display: 'flex', 
  flexDirection: 'column',
  gap: '15px' // Pievieno atstarpi starp pašām mazajām komponentēm
};

const tableColumnStyle = { background: '#000', borderRadius: '24px', padding: '10px' };

export default App;