import './keyboard.css';
import React, { useState, useEffect } from 'react';

function KeyboardListener() {
  const [currentKey, setCurrentKey] = useState('');

  useEffect(() => {
    const handleKeyPress = (event) => {
      setCurrentKey(event.key.toUpperCase());
    };

    const handleClick = (event) => {
      setCurrentKey(event.target.textContent);
    };

    window.addEventListener('keydown', handleKeyPress);
    document.querySelectorAll('.keyboard-button').forEach((button) => {
      button.addEventListener('click', handleClick);
    });

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      document.querySelectorAll('.keyboard-button').forEach((button) => {
        button.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return (
    <div>
      <div className="current-key">{currentKey}</div>
    </div>
  );
}

export default KeyboardListener;
