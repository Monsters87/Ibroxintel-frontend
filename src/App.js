import React, { useEffect, useState } from "react";

function App() {
  const [players, setPlayers] = useState([]);
  const [rumours, setRumours] = useState([]);

  useEffect(() => {
    fetch("https://ibroxintel-backend-production.up.railway.app/api/players")
      .then((res) => res.json())
      .then(setPlayers)
      .catch(console.error);

    fetch("https://ibroxintel-backend-production.up.railway.app/api/rumours")
      .then((res) => res.json())
      .then(setRumours)
      .catch(console.error);
  }, []);

  return (
    <div style={{ padding: "1rem", fontFamily: "Arial" }}>
      <h1>IbroxIntel</h1>
      <h2>Squad Overview</h2>
      <ul>
        {players.map((player) => (
          <li key={player.id}>{player.name} – {player.position} – {player.value}</li>
        ))}
      </ul>
      <h2>Transfer Rumours</h2>
      <ul>
        {rumours.map((rumour) => (
          <li key={rumour.id}>{rumour.player} – {rumour.source} – Credibility: {rumour.credibility}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;