import React from 'react';
import {Link} from 'react-router-dom'

const RecentScores = () => {
    return (
        <div>
            <h1>Recent Scores</h1>  
            <p>These are my most recent plays.</p>
            <img src="public/images/recent.jpg" alt="recent score" style={{width: '100%', height: 'auto'}}/>
            <img src="public/images/recent2.jpg" alt="recent score" style={{width: '100%', height: 'auto'}}/>
           <Link to="/"><button>Home</button></Link> 
          <Link to="/high-scores"> <button>Highest Scores</button></Link> 
        <Link to="/noteworthy-scores"><button>Noteworthy Scores</button></Link>
        </div>
    );
};

export default RecentScores;