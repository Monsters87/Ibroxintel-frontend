import React, { useEffect, useState } from "react";

export default function Home() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://ibroxintel-backend-production.up.railway.app/api/players")
      .then((res) => res.json())
      .then((data) => {
        setPlayers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching players:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem", textAlign: "center" }}>
      <h1 style={{ color: "#003399", fontSize: "2.5rem" }}>IbroxIntel</h1>
      <p style={{ marginBottom: "1rem" }}>Live Rangers FC Transfer Rumour Tracker</p>
      {loading ? (
        <p>Loading...</p>
      ) : players.length === 0 ? (
        <p>No rumours found.</p>
      ) : (
        players.map((player) => (
          <div
            key={player.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "1rem",
              marginBottom: "1rem",
              maxWidth: "400px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <h2>{player.name}</h2>
            <p><strong>Position:</strong> {player.position}</p>
            <p><strong>Value:</strong> {player.value}</p>
          </div>
        ))
      )}
    </div>
  );
}
