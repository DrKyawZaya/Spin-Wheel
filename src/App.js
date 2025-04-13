import React, { useState } from "react";

export default function SpinWheel() {
  const [angle, setAngle] = useState(0);
  const [selectedPrize, setSelectedPrize] = useState(null);
  const [prizes, setPrizes] = useState(["🍕 Pizza", "🎁 Gift", "💸 $100", "🎫 Ticket", "📱 Phone", "🚗 Car"]);
  const [newPrize, setNewPrize] = useState("");

  const spinWheel = () => {
    const randomIndex = Math.floor(Math.random() * prizes.length);
    const newAngle = 360 * 5 + (360 / prizes.length) * randomIndex;
    setAngle(newAngle);
    setSelectedPrize(prizes[randomIndex]);
  };

  const addPrize = () => {
    if (newPrize.trim() !== "") {
      setPrizes([...prizes, newPrize]);
      setNewPrize("");
    }
  };

  const clearPrizes = () => {
    setPrizes([]);
    setSelectedPrize(null);
  };

  const getSegmentStyle = (index) => {
    const rotation = (360 / prizes.length) * index;
    const radius = 120;
    const angleInRadians = (rotation * Math.PI) / 180;
    const x = radius * Math.cos(angleInRadians);
    const y = radius * Math.sin(angleInRadians);

    return {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: `translate(${x}px, ${y}px) rotate(${rotation}deg)` ,
      transformOrigin: 'center center',
      fontSize: '1rem',
      fontWeight: 'bold',
      color: '#000',
      textAlign: 'center',
      pointerEvents: 'none'
    };
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#fff',
      fontFamily: 'sans-serif'
    }}>
      <h1 style={{ color: '#333', fontSize: '2rem', marginBottom: '1rem' }}>🎡 Random Spin Wheel</h1>

      <div style={{ position: 'relative' }}>
        <div
          style={{
            width: 300,
            height: 300,
            borderRadius: '50%',
            border: '4px solid #999',
            background: '#fff',
            transform: `rotate(${angle}deg)`,
            transition: 'transform 4s ease-out',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {prizes.map((prize, i) => (
            <div key={i} style={getSegmentStyle(i)}>
              <div style={{ transform: `rotate(${-((360 / prizes.length) * i)}deg)` }}>{prize}</div>
            </div>
          ))}
        </div>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '2rem'
        }}>
          🎯
        </div>
      </div>

      <button
        onClick={spinWheel}
        style={{
          marginTop: '2rem',
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          backgroundColor: '#333',
          color: '#fff',
          border: 'none',
          borderRadius: '1rem',
          cursor: 'pointer'
        }}
      >
        Spin!
      </button>

      {selectedPrize && (
        <h2 style={{ marginTop: '1.5rem', color: '#222' }}>You got: {selectedPrize}</h2>
      )}

      <div style={{ marginTop: '2rem', display: 'flex', gap: '0.5rem' }}>
        <input
          type="text"
          value={newPrize}
          onChange={(e) => setNewPrize(e.target.value)}
          placeholder="Enter new prize"
          style={{
            padding: '0.5rem',
            fontSize: '1rem',
            borderRadius: '0.5rem',
            border: '1px solid #ccc'
          }}
        />
        <button
          onClick={addPrize}
          style={{
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '0.5rem',
            cursor: 'pointer'
          }}
        >
          Add
        </button>
        <button
          onClick={clearPrizes}
          style={{
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            backgroundColor: '#dc3545',
            color: '#fff',
            border: 'none',
            borderRadius: '0.5rem',
            cursor: 'pointer'
          }}
        >
          Clear All
        </button>
      </div>

      {prizes.length > 0 && (
        <ul style={{ marginTop: '1rem', color: '#000' }}>
          {prizes.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
