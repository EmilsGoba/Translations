import React, { useState } from 'react';

const TableRow = ({ english, latvian }) => {
  const [isHovered, setIsHovered] = useState(false);

  const rowStyle = {
    backgroundColor: isHovered ? 'rgba(100, 108, 255, 0.1)' : 'transparent',
    transform: isHovered ? 'scale(1.01)' : 'scale(1)',
    transition: 'all 0.2s ease-in-out',
    cursor: 'default',
  };

  const cellStyle = {
    padding: '16px 20px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    fontSize: '15px',
  };

  return (
    <tr 
      style={rowStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <td style={{ ...cellStyle, color: '#646cff', fontWeight: '800', letterSpacing: '0.5px' }}>
        {english}
      </td>
      <td style={{ ...cellStyle, color: '#e0e0e0', fontWeight: '400' }}>
        {latvian}
      </td>
    </tr>
  );
};

export default TableRow;