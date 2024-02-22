import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import rootReducer from './reducers';

// Middleware
const middleware = [thunk];

// Initial state
const initialState = {
  gameStarted: false,
  cardsRemaining: 0,
  gameWon: false,
  leaderboard: [],
};

// Create store
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
