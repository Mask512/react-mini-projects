import { useEffect, useState } from 'react';

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState('hex');
  const [color, setColor] = useState('#000000');

  function randomColorUtility(len) {
    return Math.floor(Math.random() * len);
  }

  function handleHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += hex[randomColorUtility(hex.length)];
    }
    setColor(color);
  }

  function handleRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    setColor(`rgb(${r},${g},${b})`)
  }

  useEffect(()=> {
    typeOfColor === 'rgb' ? handleRgbColor() : handleHexColor() ;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeOfColor]);

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: color,
      }}
    >
      <button onClick={() => setTypeOfColor('hex')}>Create HEX Color</button>
      <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
      <button onClick={typeOfColor === 'hex' ? handleHexColor : handleRgbColor}>
        Generate Random Color
      </button>
      <div
        style={{
          display: 'grid',
          placeItems: 'center',
          height: '100svh',
          fontSize: '3rem'
        }}
      >
        {typeOfColor === 'hex' ? 'Hex ' : 'RGB '}color: {color}
      </div>
    </div>
  );
}
