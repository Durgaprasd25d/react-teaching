import React, { useState } from 'react';

function ColorGame() {
  const [color, setColor] = useState('');
  const [validColor, setValidColor] = useState(true);

  // Function to check if the entered color is valid
  const isValidColor = (color) => {
    const testElement = document.createElement('div');
    testElement.style.color = color;
    return testElement.style.color !== '';
  };

  const handleChange = (e) => {
    const inputColor = e.target.value;
    setColor(inputColor);

    // Check if the color is valid
    if (isValidColor(inputColor)) {
      setValidColor(true);
    } else {
      setValidColor(false);
    }
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center transition-all duration-300 ${
        validColor ? '' : 'bg-gray-800'
      }`}
      style={{ backgroundColor: validColor ? color : '#f1f5f9' }}
    >
      <div className="bg-white p-8 rounded-lg shadow-xl w-96 text-center max-w-sm">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">Color Game</h2>
        <input
          type="text"
          placeholder="Type any color name, hex, rgb, hsl..."
          value={color}
          onChange={handleChange}
          className={`border p-3 w-full text-center rounded-md text-lg focus:outline-none transition ${
            validColor ? 'border-gray-300' : 'border-red-500'
          }`}
        />
        <p className={`mt-4 font-medium text-lg ${validColor ? 'text-gray-700' : 'text-red-500'}`}>
          {validColor ? `Current Color: ${color || 'None'}` : 'Invalid color! Try again.'}
        </p>
        <div className="mt-4">
          <p className="text-gray-600 font-medium">Try any valid CSS color:</p>
          <ul className="text-gray-500 list-disc pl-6">
            <li>Named Colors: red, blue, coral, etc.</li>
            <li>Hex: #ff6347, #00ff00, #000000, etc.</li>
            <li>RGB: rgb(255, 0, 0), rgb(100, 149, 237), etc.</li>
            <li>HSL: hsl(200, 100%, 50%), hsla(300, 70%, 70%, 0.6), etc.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ColorGame;
