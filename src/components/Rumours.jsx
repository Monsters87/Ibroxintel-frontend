import React, { useEffect, useState } from 'react';
import './Rumours.css';

const Rumours = () => {
  const [rumours, setRumours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRumours = async () => {
      try {
        const response = await fetch('https://ibroxintel-backend-production.up.railway.app/api/rumours');
        const data = await response.json();
        setRumours(data);
      } catch (error) {
        console.error('Error fetching rumours:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRumours();
  }, []);

  const credibilityColor = (level) => {
    switch (level) {
      case 'High': return 'high';
      case 'Medium': return 'medium';
      case 'Low': return 'low';
      default: return 'unknown';
    }
  };

  return (
    <div className="rumours-container">
      <h2>Transfer Rumours</h2>
      {loading ? (
        <p>Loading rumours...</p>
      ) : rumours.length === 0 ? (
        <p>No rumours available.</p>
      ) : (
        rumours.map((rumour) => (
          <div key={rumour.id} className={`rumour-card ${credibilityColor(rumour.credibility)}`}>
            <div className="rumour-info">
              <h3>{rumour.player}</h3>
              <p className="source">
                <a
                  href={`https://www.google.com/search?q=${encodeURIComponent(rumour.source)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {rumour.source}
                </a>
              </p>
              <span className="credibility">{rumour.credibility} Credibility</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Rumours;
