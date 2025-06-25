import React from 'react';

const SquadOverview = () => {
  const squad = [
    { name: 'Todd Cantwell', position: 'Midfielder', value: '£3.5M' },
    { name: 'James Tavernier', position: 'Defender', value: '£4M' },
    { name: 'Jack Butland', position: 'Goalkeeper', value: '£2M' }
  ];

  return (
    <div className="squad-overview">
      <h2>Squad Overview</h2>
      <ul>
        {squad.map((player, index) => (
          <li key={index}>
            {player.name} – {player.position} – {player.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SquadOverview;
