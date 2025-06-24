import React from "react";
import Rumours from "./components/Rumours";
import SquadOverview from "./components/SquadOverview";
import SummaryStats from "./components/SummaryStats";

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>IbroxIntel</h1>
        <SummaryStats />
      </header>
      <main>
        <Rumours />
        <SquadOverview />
      </main>
    </div>
  );
}

export default App;
