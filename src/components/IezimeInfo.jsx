import React from 'react';

const IezimeInfo = () => (
  <div style={cardStyle}>
    <h3 style={titleStyle}>⚡ Kas ir funkcionālā iezīme?</h3>
    <p>Tā ir sistēmas funkcionalitāte, kas atbalsta biznesa iespējas. Minimālais sastāvs: <b>Virsraksts</b> un <b>Scenārijs</b>.</p>
  </div>
);

const cardStyle = { background: '#222', padding: '20px', borderRadius: '12px', marginBottom: '15px', borderLeft: '5px solid #646cff' };
const titleStyle = { color: '#646cff', marginTop: 0 };
export default IezimeInfo;