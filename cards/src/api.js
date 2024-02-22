import axios from 'axios';

const API_URL = 'http://localhost:8000'; // Your backend server URL

export const startGameAPI = (username) => {
  return axios.post(`${API_URL}/start-game`, { username });
};

export const drawCardAPI = () => {
  return axios.get(`${API_URL}/draw-card`);
};

export const getLeaderboardAPI = () => {
  return axios.get(`${API_URL}/leaderboard`);
};
