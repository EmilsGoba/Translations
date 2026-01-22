import React from 'react';

const RubikaKubs = () => (
  <div style={cardStyle}>
    <h3 style={titleStyle}>🎲 Rubika kuba metafora</h3>
    <p>Iezīme ir kā kubs — tā pati par sevi nemainās, bet mēs to "grozām", lai atrastu jaunus scenārijus, ierobežojumus un tehniskās nianses (NFR).</p>
  </div>
);

const cardStyle = { background: '#222', padding: '20px', borderRadius: '12px', marginBottom: '15px', borderLeft: '5px solid #f7b955' };
const titleStyle = { color: '#f7b955', marginTop: 0 };
export default RubikaKubs;