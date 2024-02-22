import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import GameBoard from './GameBoard';
import Leaderboard from './Leaderboard';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Exploding Kittens Game</h1>
        <GameBoard />
        <Leaderboard />
      </div>
    </Provider>
  );
};

export default App;
