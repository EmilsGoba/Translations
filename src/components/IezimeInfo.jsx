import React from 'react';

const IezimeInfo = () => (
  <section style={sectionStyle}>
    <h3>Kas ir funkcionālā iezīme?</h3>
    <p>Funkcionālā iezīme (Feature) ir sistēmas funkcionalitāte, kas nodrošina kādu biznesa iespēju[cite: 9].</p>
    <ul>
      <li><b>Sastāvs:</b> Minimāli sastāv no nosaukuma un scenārija[cite: 10].</li>
      <li><b>Mērķis:</b> Skaidri aprakstīt sistēmas uzvedību tā, lai to saprastu visi iesaistītie, un ļaut to automātiski pārbaudīt[cite: 29, 30].</li>
    </ul>
  </section>
);

const sectionStyle = { padding: '15px', borderBottom: '1px solid #444', textAlign: 'left' };
export default IezimeInfo;