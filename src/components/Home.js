import React from 'react';
import { Link }  from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>About Me</h1>  
            <p>This is the home page of my portfolio.</p>
            <Link to="/recent-scores"><button>Recent Scores</button></Link> 
            <Link to="/high-scores"> <button>Highest Scores</button></Link>
            <Link to="/noteworthy-scores"><button>Noteworthy Scores</button></Link>
        </div>
    );
};

export default Home;