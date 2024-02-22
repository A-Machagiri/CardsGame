import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGame, drawCard } from './actions';

const GameBoard = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const gameStarted = useSelector(state => state.gameStarted);
  const cardsRemaining = useSelector(state => state.cardsRemaining);
  const gameWon = useSelector(state => state.gameWon);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleStartGame = () => {
    dispatch(startGame(username));
  };

  const handleDrawCard = () => {
    dispatch(drawCard());
  };

  return (
    <div>
      {!gameStarted && (
        <div>
          <input type="text" value={username} onChange={handleUsernameChange} placeholder="Enter your username" />
          <button onClick={handleStartGame}>Start Game</button>
        </div>
      )}

      {gameStarted && !gameWon && (
        <div>
          <h2>Cards Remaining: {cardsRemaining}</h2>
          <button onClick={handleDrawCard}>Draw Card</button>
        </div>
      )}

      {gameWon && (
        <div>
          <h2>Congratulations, you won!</h2>
        </div>
      )}
    </div>
  );
};

export default GameBoard;
