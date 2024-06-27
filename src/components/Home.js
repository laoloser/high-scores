import React from 'react';
import { Link }  from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const Home = () => {
    return (
        <div>
            <h1>PJSK Score posting</h1>  
            <p>User : laoloser</p>
            <div class="button-container">
            <ButtonGroup aria-label="Basic example">
            <Button variant="secondary">Home</Button>{'  '}
            <Link to="/recent-scores"><Button variant="outline-secondary">Recent Scores</Button>{'  '}</Link> 
            <Link to="/high-scores"><Button variant="outline-secondary">Highest Scores</Button>{'  '}</Link>
            <Link to="/noteworthy-scores"><Button variant="outline-secondary">Noteworthy Scores</Button>{'  '}</Link>
            </ButtonGroup>
            </div>
        </div>
    );
};

export default Home;