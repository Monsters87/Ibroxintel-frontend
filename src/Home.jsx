import React, { useEffect, useState } from "react";

export default function Home() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Now using proxy path for Netlify to forward to backend
    fetch("/api/players")
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
    <main style={{ maxWidth: '600px', margin: '2rem auto', padding: '1rem' }}>
      <h1 style={{ fontSize: '2rem', color: '#003087', textAlign: 'center' }}>
        IbroxIntel
      </h1>
      <p style={{ textAlign: 'center', marginBottom: '1rem' }}>
        Live Rangers FC Transfer Rumour Tracker
      </p>
      {loading ? (
        <p style={{ textAlign: 'center' }}>Loading...</p>
      ) : players.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No rumours found.</p>
      ) : (
        <div>
          {players.map((player) => (
            <div
              key={player.id}
              style={{
                border: "1px solid #ccc",
                padding: "1rem",
                borderRadius: "0.5rem",
                marginBottom: "1rem",
              }}
            >
              <h2 style={{ margin: 0, color: "#003087" }}>{player.name}</h2>
              <p style={{ margin: "0.25rem 0" }}>
                <strong>Position:</strong> {player.position}
              </p>
              {player.value && (
                <p style={{ margin: "0.25rem 0" }}>
                  <strong>Value:</strong> {
