import './key.css';

const Key = ({letter}) => {
    return (
        <button className="keyboard-button" key={letter}>{letter}</button>
    )
}

export default Key;