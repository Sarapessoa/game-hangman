import React from 'react';

function Hangman(props) {
  const { attempts } = props;

  if (attempts > 6 || attempts < 0) {
    throw new Error(`O número de tentativas deve estar entre 0 e 6. Valor atual: ${attempts}`);
  }
  

  const parts = [
    <circle cx="80" cy="30" r="20" />,
    <line x1="80" y1="50" x2="80" y2="130" />,
    <line x1="80" y1="60" x2="30" y2="100" />,
    <line x1="80" y1="60" x2="130" y2="100" />,
    <line x1="80" y1="130" x2="30" y2="170" />,
    <line x1="80" y1="130" x2="130" y2="170" />
  ];

  console.log('parts:', parts.slice(0, 6 - attempts));

  return (
    <svg viewBox="0 0 200 200" width="200" height="200">
      {parts.slice(0, 6 - attempts)}
    </svg>
  );
}

export default Hangman;
