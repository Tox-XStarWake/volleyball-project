// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;

// Serve static files from the React app
app.use(express.static('client/build'));

// Example API endpoint for stats
app.get('/api/stats', (req, res) => {
    // Replace with your MongoDB or Google Sheets integration
    res.json({
        games: [
            { id: 1, date: '2024-10-20', opponent: 'Team A', score: '25-20', topPlayer: 'Player 1' },
            { id: 2, date: '2024-10-22', opponent: 'Team B', score: '20-25', topPlayer: 'Player 2' },
        ],
    });
});

// Serve the frontend
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
 