import React from 'react';

const LietotajstastsFormat = () => (
  <div style={cardStyle}>
    <h3 style={titleStyle}>📝 User Story formāts</h3>
    <p>Lietotājstāsts palīdz saprast mērķi:</p>
    <ul style={{ listStyle: 'none', padding: 0, color: '#42b883' }}>
      <li>👤 <b>As an</b> [Actor]</li>
      <li>⚙️ <b>I want</b> [system behavior]</li>
      <li>🎯 <b>So as to achieve</b> [goal]</li>
    </ul>
  </div>
);

const cardStyle = { background: '#222', padding: '20px', borderRadius: '12px', marginBottom: '15px', borderLeft: '5px solid #42b883' };
const titleStyle = { color: '#42b883', marginTop: 0 };
export default LietotajstastsFormat;