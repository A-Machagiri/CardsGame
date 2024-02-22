import React, { useEffect, useState } from 'react';
// import { getLeaderboard } from './api';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    // fetchLeaderboard();
  }, []);

//   const fetchLeaderboard = async () => {
//     try {
//       const response = await getLeaderboard();
//       setLeaderboard(response.data);
//     } catch (error) {
//       console.error('Error fetching leaderboard:', error);
//     }
//   };

  return (
    <div>
      <h2>Leaderboard</h2>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((user, index) => (
            <tr key={index}>
              <td>{user.username}</td>
              <td>{user.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
