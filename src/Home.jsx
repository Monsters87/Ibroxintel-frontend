// FRONTEND: src/Home.jsx

import React, { useEffect, useState } from "react";

export default function Home() {
  const [players, setPlayers] = useState([]);
  const [rumours, setRumours] = useState([]);

  useEffect(() => {
    fetch("https://ibroxintel-backend-production.up.railway.app/api/players")
      .then((res) => res.json())
      .then((data) => {
        console.log("Players fetched:", data);
        setPlayers(data);
      })
      .catch((err) => console.error("Error fetching players:", err));

    fetch("https://ibroxintel-backend-production.up.railway.app/api/rumours")
      .then((res) => res.json())
      .then((data) => {
        console.log("Rumours fetched:", data);
        setRumours(data);
      })
      .catch((err) => console.error("Error fetching rumours:", err));
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem", textAlign: "center" }}>
      <h1 style={{ color: "#003399", fontSize: "2.5rem" }}>IbroxIntel</h1>
      <p style={{ fontSize: "1.2rem" }}>Live Rangers FC Transfer Rumour Tracker</p>

      <h2 style={{ marginTop: "2rem" }}>🔵 Squad</h2>
      {players.map((player) => (
        <div key={player.id} style={{ marginBottom: "0.5rem" }}>
          {player.name} - {player.position} - {player.value}
        </div>
      ))}

      <h2 style={{ marginTop: "2rem" }}>🗞️ Transfer Rumours</h2>
      {rumours.length === 0 ? (
        <p>No rumours found.</p>
      ) : (
        rumours.map((rumour) => (
          <div key={rumour.id} style={{ marginBottom: "0.5rem" }}>
            {rumour.player} — {rumour.source} ({rumour.credibility})
          </div>
        ))
      )}
    </div>
  );
}
