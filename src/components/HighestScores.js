import React from 'react';
import { Link } from 'react-router-dom';

const HighScores = () => {
    return (
        <div>
            <h1>Highest Scores</h1>  
            <p>These are currently the highest scores I have in the game.</p>
            <img src="public/images/high.jpg" alt="high score" style={{width: '100%', height: 'auto'}}/>
            <img src="public/images/high2.jpg" alt="high score" style={{width: '100%', height: 'auto'}}/>
            <Link to="/"><button>Home</button></Link>
            <Link to="/recent-scores"><button>Recent Scores</button></Link>
           
            <Link to="/noteworthy-scores"><button>Noteworthy Scores</button></Link>
        </div>
    );
};

export default HighScores;