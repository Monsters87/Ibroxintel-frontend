import React, { useEffect, useState } from "react";

function Home() {
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
        console.error("Failed to fetch players:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem", textAlign: "center" }}>
      <h1 style={{ color: "#003399", fontSize: "2.5rem" }}>IbroxIntel</h1
