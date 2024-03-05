import React, { useState } from 'react';
import { CirclePicker } from 'react-color';

const RGBColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState('#ff0000');

  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>RGB Color Picker</h1>
      <CirclePicker color={selectedColor} onChange={handleColorChange} />

      <div style={{ marginTop: '20px' }}>
        <h2>Selected Color:</h2>
        <div
          style={{
            width: '50px',
            height: '50px',
            backgroundColor: selectedColor,
            margin: '10px auto',
          }}
        ></div>
        <p>Hex: {selectedColor}</p>
      </div>
    </div>
  );
};

export default RGBColorPicker;