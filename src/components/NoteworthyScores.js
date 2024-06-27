import React from 'react';
import {Link} from 'react-router-dom'

const NoteworthyScores = () => {
    return (
        <div>
            <h1>Noteworthy Scores</h1>  
            <p>Not exactly my best, but these are some honorable mentions that made me laugh</p>
            <img src="public/images/notable.jpg" alt="noteworthy score" style={{width: '100%', height: 'auto'}}/>
            <Link to="/"> <button>Home</button></Link>
            <Link to="/recent-scores"><button>Recent Scores</button></Link>
            <Link to="/high-scores"><button>Highest Scores</button></Link>
       
        </div>
    );
};

export default NoteworthyScores;