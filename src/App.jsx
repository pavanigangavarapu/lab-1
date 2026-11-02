
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('white');

  function changeColor() {
    setColor(color === 'white' ? 'black' : 'white');
  }

  return (
    <div style={{
      backgroundColor: color,
      color: color === 'white' ? 'black' : 'white',
      height: '100vh',
      textAlign: 'center',
      paddingTop: '50px'
    }}>

      <h1>Background Color Changer</h1>

      <button onClick={changeColor}>
        Change Background
      </button>

    </div>
  );
}

export default App;
