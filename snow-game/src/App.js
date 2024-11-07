import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // Estado para la posición del jugador
  const [playerPosition, setPlayerPosition] = useState({ x: 50, y: 50 });

  // Estado para los objetos en la nieve
  const [snowItems] = useState([
    { x: 100, y: 150 },
    { x: 300, y: 200 },
    { x: 500, y: 100 },
  ]);

  // Manejar el movimiento del jugador
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowUp") {
        setPlayerPosition((prevPos) => ({ ...prevPos, y: prevPos.y - 10 }));
      } else if (event.key === "ArrowDown") {
        setPlayerPosition((prevPos) => ({ ...prevPos, y: prevPos.y + 10 }));
      } else if (event.key === "ArrowLeft") {
        setPlayerPosition((prevPos) => ({ ...prevPos, x: prevPos.x - 10 }));
      } else if (event.key === "ArrowRight") {
        setPlayerPosition((prevPos) => ({ ...prevPos, x: prevPos.x + 10 }));
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="App">
      <h1>Snow Game</h1>

      {/* Jugador */}
      <div
        className="player"
        style={{
          left: `${playerPosition.x}px`,
          top: `${playerPosition.y}px`,
          position: 'absolute',
          width: '50px',
          height: '50px',
          backgroundColor: 'blue',
        }}
      ></div>

      {/* Objetos en la nieve */}
      {snowItems.map((item, index) => (
        <div
          key={index}
          className="snow-item"
          style={{
            left: `${item.x}px`,
            top: `${item.y}px`,
            position: 'absolute',
            width: '30px',
            height: '30px',
            backgroundColor: 'white',
            borderRadius: '50%',
          }}
        ></div>
      ))}
    </div>
  );
}

export default App;
