import React from 'react';

const VeiksmigaisIznakums = () => (
  <div style={cardStyle}>
    <h3 style={titleStyle}>☀ Happy Path Scenario</h3>
    <p>Tas ir "veiksmīgā iznākuma" scenārijs jeb <b>Blue Sky</b> scenārijs — ceļš, kurā lietotājs sasniedz mērķi bez kļūdām un šķēršļiem.</p>
  </div>
);

const cardStyle = { background: '#222', padding: '20px', borderRadius: '12px', marginBottom: '15px', borderLeft: '5px solid #00dfd8' };
const titleStyle = { color: '#00dfd8', marginTop: 0 };
export default VeiksmigaisIznakums;