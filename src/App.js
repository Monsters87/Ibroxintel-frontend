
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [players, setPlayers] = useState([]);
  const [rumours, setRumours] = useState([]);

  useEffect(() => {
    axios.get("/api/players").then(res => setPlayers(res.data));
    axios.get("/api/rumours").then(res => setRumours(res.data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">IbroxIntel</h1>
      <h2 className="text-lg font-semibold">Squad Overview</h2>
      <div>
        {players.map(player => (
          <div key={player.id}>
            <p>{player.name} - {player.position} - {player.value}</p>
          </div>
        ))}
      </div>
      <h2 className="text-lg font-semibold mt-6">Transfer Rumours</h2>
      <div>
        {rumours.map(rumour => (
          <div key={rumour.id}>
            <p>{rumour.player} from {rumour.source} - {rumour.credibility}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
