import React from 'react';

const ScenarijuVeidosana = () => (
  <div style={cardStyle}>
    <h3 style={titleStyle}>🎬 Scenāriju veidošana</h3>
    <p>Vienai iezīmei var būt <b>neierobežots skaits</b> scenāriju. Tie apraksta funkciju no dažādiem skatpunktiem, izmantojot <i>Given-When-Then</i> struktūru.</p>
  </div>
);

const cardStyle = { background: '#222', padding: '20px', borderRadius: '12px', marginBottom: '15px', borderLeft: '5px solid #ff4d4d' };
const titleStyle = { color: '#ff4d4d', marginTop: 0 };
export default ScenarijuVeidosana;