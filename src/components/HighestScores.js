import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const HighScores = () => {
  return (
    <div>
      <h1>Highest Scores</h1>
      <p>These are currently the highest scores I have in the game.</p>

      <div class="button-container">
      <ButtonGroup aria-label="Basic example">
            <Link to="/"><Button variant="outline-secondary">Home</Button>{'  '}</Link>
            <Link to="/recent-scores"><Button variant="outline-secondary">Recent Scores</Button>{'  '}</Link> 
            <Button variant="secondary">Highest Scores</Button>{'  '}
            <Link to="/noteworthy-scores"><Button variant="outline-secondary">Noteworthy Scores</Button>{'  '}</Link>
            </ButtonGroup>
      </div>
      <div class="score-images">
        <img
          src="public/images/high.jpg"
          alt="high score"
          style={{ width: "100%", height: "auto" }}
        />
        <img
          src="public/images/high2.jpg"
          alt="high score"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default HighScores;
