import React from 'react';
import {Link} from 'react-router-dom'
import {Button, ButtonGroup} from 'react-bootstrap';


const NoteworthyScores = () => {
    return (
        <div>
            <h1>Noteworthy Scores</h1>  
            <p>Not exactly my best, but these are some honorable mentions that made me laugh</p>
            
            <div class="button-container">
            <ButtonGroup aria-label="Basic example">
            <Link to="/"><Button variant="outline-secondary">Home</Button>{'  '}</Link>
            <Link to="/recent-scores"><Button variant="outline-secondary">Recent Scores</Button>{'  '}</Link> 
            <Link to="/high-scores"><Button variant="outline-secondary">Highest Scores</Button>{'  '}</Link>
            <Button variant="secondary">Noteworthy Scores</Button>{'  '}
            </ButtonGroup>
            </div>
            <div class="score-images">
            <img src="public/images/notable.jpg" alt="noteworthy score" style={{width: '100%', height: 'auto'}}/>
            </div>
        </div>
    );
};

export default NoteworthyScores;