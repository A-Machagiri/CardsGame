import { combineReducers } from 'redux';
import { START_GAME, DRAW_CARD, END_GAME, UPDATE_LEADERBOARD } from './actions';

// Initial state for game state
const initialGameState = {
  gameStarted: false,
  cardsRemaining: 0,
  gameWon: false,
};

// Game reducer
const gameReducer = (state = initialGameState, action) => {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        gameStarted: true,
        cardsRemaining: action.payload.cardsRemaining,
      };
    case DRAW_CARD:
      return {
        ...state,
        cardsRemaining: action.payload.cardsRemaining,
        gameWon: action.payload.gameWon,
      };
    case END_GAME:
      return {
        ...state,
        gameStarted: false,
        cardsRemaining: 0,
        gameWon: false,
      };
    default:
      return state;
  }
};

// Initial state for leaderboard
const initialLeaderboardState = {
  leaderboard: [],
};

// Leaderboard reducer
const leaderboardReducer = (state = initialLeaderboardState, action) => {
  switch (action.type) {
    case UPDATE_LEADERBOARD:
      return {
        ...state,
        leaderboard: action.payload.leaderboard,
      };
    default:
      return state;
  }
};

// Combine reducers
const rootReducer = combineReducers({
  game: gameReducer,
  leaderboard: leaderboardReducer,
});

export default rootReducer;
