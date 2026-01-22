import React from 'react';
import TableRow from './TableRow';

const Translations = () => {
  const terms = [
    { en: 'Feature', lv: 'Funkcionālā iezīme' },
    { en: 'Scenario', lv: 'Scenārijs' },
    { en: 'Given', lv: 'Kad' },
    { en: 'When', lv: 'Ja' },
    { en: 'Then', lv: 'Tad' },
    { en: 'And', lv: 'Un' },
    { en: 'But', lv: 'Bet' },
    { en: 'Or', lv: 'Vai' },
    { en: 'Background', lv: 'Konteksts' },
    { en: 'Scenario Outline', lv: 'Scenārijs pēc parauga' },
    { en: 'Examples', lv: 'Piemēri' },
    { en: 'User Story', lv: 'Lietotājstāsts' },
    { en: 'Rule', lv: 'Noteikums' },
    { en: '#', lv: 'Komentārs' },
  ];

  const containerStyle = {
    background: 'linear-gradient(145deg, #0f0f0f, #1a1a1a)',
    borderRadius: '24px',
    padding: '40px',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    maxWidth: '800px',
    margin: '40px auto',
    backdropFilter: 'blur(10px)'
  };

  const headerTextStyle = {
    fontSize: '32px',
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: '30px',
    background: 'linear-gradient(to right, #646cff, #42b883)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    letterSpacing: '-1px'
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerTextStyle}>Gherkin Termini</h1>
      
      <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(100, 108, 255, 0.2)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', background: 'rgba(255, 255, 255, 0.02)' }}>
          <thead>
            <tr style={{ background: 'rgba(100, 108, 255, 0.1)' }}>
              <th style={headerCellStyle}>ANGĻU VALODĀ</th>
              <th style={headerCellStyle}>LATVIEŠU VALODĀ</th>
            </tr>
          </thead>
          <tbody>
            {terms.map((term, index) => (
              <TableRow key={index} english={term.en} latvian={term.lv} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const headerCellStyle = {
  padding: '18px 20px',
  textAlign: 'left',
  fontSize: '12px',
  fontWeight: 'bold',
  color: '#646cff',
  textTransform: 'uppercase',
  letterSpacing: '2px'
};

export default Translations;