const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Allow frontend to access backend
app.use(express.json());

const rumours = [
  { id: 7, player: "Todd Cantwell", source: "BBC Sport", credibility: "High" },
  { id: 8, player: "James Tavernier", source: "Sky Sports", credibility: "Medium" },
  { id: 9, player: "Jack Butland", source: "Daily Record", credibility: "Low" }
];

app.get('/api/rumours', (req, res) => {
  res.json(rumours);
});

app.get('/', (req, res) => {
  res.send('IbroxIntel API is running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
