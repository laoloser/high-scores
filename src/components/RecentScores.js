import React from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const RecentScores = () => {
    return (
        <div>
            <h1>Recent Scores</h1>  
            <p>These are my most recent plays.</p>
            
            <div class="button-container">
            <ButtonGroup aria-label="Basic example">
            <Link to="/"><Button variant="outline-secondary">Home</Button>{'  '}</Link>
            <Button variant="secondary">Recent Scores</Button>{'  '}
            <Link to="/high-scores"><Button variant="outline-secondary">Highest Scores</Button>{'  '}</Link>
            <Link to="/noteworthy-scores"><Button variant="outline-secondary">Noteworthy Scores</Button>{'  '}</Link>
            </ButtonGroup>
        </div>
        <div class="score-images">
        
        <img src="public/images/recent.jpg" alt="recent score" style={{width: '100%', height: 'auto'}}/>
        <img src="public/images/recent2.jpg" alt="recent score" style={{width: '100%', height: 'auto'}}/>
        </div>
        </div>
       
    );
};

export default RecentScores;