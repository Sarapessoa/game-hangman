import './keyboard.css';
import Key from '../Key';

const keyboardLetters = [
    'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
    'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
    'Z', 'X', 'C', 'V', 'B', 'N', 'M'
  ];
  
  function Keyboard() {
    return (
      <div className="keyboard">
        {keyboardLetters.map((letter) => (
          <Key key={letter} {...{ letter }} />
        ))}
      </div>
    );
  }

export default Keyboard;