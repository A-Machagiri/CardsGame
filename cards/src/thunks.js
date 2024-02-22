import { startGameAPI, drawCardAPI, getLeaderboardAPI } from './api';
import { startGame, drawCard, updateLeaderboard } from './actions';

export const startGameThunk = (username) => async (dispatch) => {
  try {
    const response = await startGameAPI(username);
    // Dispatch action to update state based on response
    dispatch(startGame(response.data));
  } catch (error) {
    // Handle error
    console.error('Error starting game:', error);
  }
};

export const drawCardThunk = () => async (dispatch) => {
  try {
    const response = await drawCardAPI();
    // Dispatch action to update state based on response
    dispatch(drawCard(response.data));
  } catch (error) {
    // Handle error
    console.error('Error drawing card:', error);
  }
};

export const fetchLeaderboardThunk = () => async (dispatch) => {
  try {
    const response = await getLeaderboardAPI();
    // Dispatch action to update leaderboard state based on response
    dispatch(updateLeaderboard(response.data));
  } catch (error) {
    // Handle error
    console.error('Error fetching leaderboard:', error);
  }
};
