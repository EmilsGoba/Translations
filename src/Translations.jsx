import React from 'react';

// 1. Šūnas komponente - nodrošina vienotu polsterējumu un stilu
const TableCell = ({ children, isHeader = false, isBold = false }) => {
  const style = {
    padding: '12px 15px',
    textAlign: 'left',
    borderBottom: isHeader ? '2px solid #646cff' : '1px solid #333',
    fontWeight: isBold || isHeader ? 'bold' : 'normal',
    color: isHeader ? '#646cff' : 'white'
  };

  return isHeader ? <th style={style}>{children}</th> : <td style={style}>{children}</td>;
};

// 2. Rindas komponente - apstrādā viena termina attēlošanu
const TableRow = ({ english, latvian }) => {
  return (
    <tr>
      <TableCell isBold>{english}</TableCell>
      <TableCell>{latvian}</TableCell>
    </tr>
  );
};

// 3. Galvenā komponente
const Translations = () => {
  const terms = [
    { en: 'Feature', lv: 'Funkcionalitāte / Iezīme' },
    { en: 'Background', lv: 'Konteksts / Priekšvēsture' },
    { en: 'Scenario', lv: 'Scenārijs' },
    { en: 'Scenario Outline', lv: 'Scenārija paraugs' },
    { en: 'Examples', lv: 'Piemēri' },
    { en: 'Given', lv: 'Kad / Dots' },
    { en: 'When', lv: 'Ja' },
    { en: 'Then', lv: 'Tad' },
    { en: 'And', lv: 'Un' },
    { en: 'But', lv: 'Bet' }
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ color: '#646cff', textAlign: 'center' }}>Gherkin termini</h2>
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        backgroundColor: '#1a1a1a',
        borderRadius: '8px',
        overflow: 'hidden'
      }}>
        <thead>
          <tr>
            <TableCell isHeader>Angļu valodā</TableCell>
            <TableCell isHeader>Latviešu valodā</TableCell>
          </tr>
        </thead>
        <tbody>
          {terms.map((term, index) => (
            <TableRow key={index} english={term.en} latvian={term.lv} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Translations;