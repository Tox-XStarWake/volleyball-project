// client/src/App.js
import React, { useEffect, useState } from 'react';

function App() {
    const [stats, setStats] = useState([]);

    useEffect(() => {
        fetch('/api/stats')
            .then((response) => response.json())
            .then((data) => setStats(data.games));
    }, []);

    return (
        <div>
            <h1>Team Stats</h1>
            <ul>
                {stats.map((game) => (
                    <li key={game.id}>
                        {game.date} - {game.opponent}: {game.score} (Top Player: {game.topPlayer})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App; 
