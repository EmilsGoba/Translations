import React from 'react';

// Šūnas stils, lai nodrošinātu konsistenci
const tableCellStyle = {
  padding: '12px 15px',
  textAlign: 'left',
  borderBottom: '1px solid #333',
  color: 'white'
};

const TableRow = ({ english, latvian }) => {
  return (
    <tr style={{ transition: 'background-color 0.2s' }}>
      <td style={{ ...tableCellStyle, fontWeight: 'bold', color: '#646cff' }}>
        {english}
      </td>
      <td style={tableCellStyle}>
        {latvian}
      </td>
    </tr>
  );
};

export default TableRow;