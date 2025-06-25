import React, { useEffect, useState } from 'react';
import './Rumours.css';

const Rumours = () => {
  const [rumours, setRumours] = useState([]);

  useEffect(() => {
    const fetchRumours = async () => {
      try {
        const response = await fetch('https://ibroxintel-api.up.railway.app/api/rumours');
        const data = await response.json();
        setRumours(data);
      } catch (error) {
        console.error('Error fetching rumours:', error);
      }
    };

    fetchRumours();
  }, []);

  const credibilityClass = (level) => {
    switch (level?.toLowerCase()) {
      case 'high': return 'cred-high';
      case 'medium': return 'cred-medium';
      case 'low': return 'cred-low';
      default: return 'cred-unknown';
    }
  };

  return (
    <div className="rumours-container">
      {rumours.length === 0 ? (
        <p className="empty-state">No rumours available.</p>
      ) : (
        rumours.map((rumour) => (
          <div key={rumour.id} className={`rumour-card ${credibilityClass(rumour.credibility)}`}>
            <div className="rumour-header">
              <h3>{rumour.player}</h3>
              <span className="credibility-label">{rumour.credibility} Credibility</span>
            </div>
            <div className="rumour-meta">
              <p className="source-name">{rumour.source}</p>
              {rumour.quote && <blockquote>{rumour.quote}</blockquote>}
              {rumour.stage && <p className="rumour-stage">Status: {rumour.stage}</p>}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Rumours;
