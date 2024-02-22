// Action types
export const START_GAME = 'START_GAME';
export const DRAW_CARD = 'DRAW_CARD';
export const END_GAME = 'END_GAME';
export const UPDATE_LEADERBOARD = 'UPDATE_LEADERBOARD';

// Action creators
export const startGame = (username) => ({
  type: START_GAME,
  payload: { username },
});

export const drawCard = () => ({
  type: DRAW_CARD,
});

export const endGame = () => ({
  type: END_GAME,
});

export const updateLeaderboard = (leaderboard) => ({
  type: UPDATE_LEADERBOARD,
  payload: { leaderboard },
});
