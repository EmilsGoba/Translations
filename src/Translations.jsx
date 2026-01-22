import React from 'react';
import TableRow from './TableRow'; // Importējam jauno komponenti

const Translations = () => {
  const terms = [
    { en: 'Feature', lv: 'Funkcionalitāte / Iezīme' },
    { en: 'Scenario', lv: 'Scenārijs' },
    { en: 'Given', lv: 'Kad / Dots' },
    { en: 'When', lv: 'Ja' },
    { en: 'Then', lv: 'Tad' }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#1a1a1a' }}>
        <thead>
          <tr style={{ backgroundColor: '#242424', color: '#646cff' }}>
            <th style={{ padding: '12px 15px', textAlign: 'left' }}>Angļu valodā</th>
            <th style={{ padding: '12px 15px', textAlign: 'left' }}>Latviešu valodā</th>
          </tr>
        </thead>
        <tbody>
          {terms.map((term, index) => (
            <TableRow 
              key={index} 
              english={term.en} 
              latvian={term.lv} 
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Translations;