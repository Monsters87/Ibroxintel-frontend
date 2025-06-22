import React, { useEffect, useState } from "react";

export default function Home() {
  const [players, setPlayers] = useState([]);
  const [rumours, setRumours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("https://ibroxintel-backend-production.up.railway.app/api/players").then(res => res.json()),
      fetch("https://ibroxintel-backend-production.up.railway.app/api/rumours").then(res => res.json())
    ])
      .then(([playersData, rumoursData]) => {
        setPlayers(playersData);
        setRumours(rumoursData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  return (
    <main style={{ maxWidth: '700px', margin: '2rem auto', padding: '1rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2rem', color: '#003087', textAlign: 'center' }}>IbroxIntel</h1>
      <p style={{ textAlign: 'center', marginBottom: '1rem' }}>Live Rangers FC Transfer Rumour Tracker</p>

      {loading ? (
        <p style={{ textAlign: 'center' }}>Loading...</p>
      ) : (
        <>
          <section>
            <h2 style={{ color: "#003087" }}>🔵 Squad</h2>
            {players.map((player) => (
              <div key={player.id} style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1rem' }}>
                <h3>{player.name}</h3>
                <p><strong>Position:</strong> {player.position}</p>
                <p><strong>Value:</strong> {player.value}</p>
              </div>
            ))}
          </section>

          <section>
            <h2 style={{ color: "#003087", marginTop: "2rem" }}>📰 Transfer Rumours</h2>
            {rumours.length === 0 ? (
              <p>No rumours found.</p>
            ) : (
              rumours.map((rumour) => (
                <div key={rumour.id} style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1rem', background: '#f9f9f9' }}>
                  <p><strong>Player:</strong> {rumour.player}</p>
                  <p><strong>Source:</strong> {rumour.source}</p>
                  <p><strong>Credibility:</strong> {rumour.credibility}</p>
                </div>
              ))
            )}
          </section>
        </>
      )}
    </main>
  );
}
