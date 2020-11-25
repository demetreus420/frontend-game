import React from 'react';

export const Menu = (props) => {
  return (
    <div className='Menu'>
      {props.children}
      <div className='ScoreBoard'>
        <div className="player-score">Player-1 : {(props.first > localStorage['player1']) ? props.first: localStorage['player1']}</div>
        <div className="player-score">Player-2 : {(props.second > localStorage['player2']) ? props.second: localStorage['player2']}</div>
      </div>
    </div>
  );
};
