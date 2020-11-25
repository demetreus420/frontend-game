import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { Menu } from './components/Menu';
import { MenuBar } from './components/MenuBar';
import Tetris from './components/Tetris';

const App = () => {
  const [first, changeFirst] = React.useState();
  const [second, changeSecond] = React.useState();

  return (
    <div className='App'>
      <BrowserRouter>
        <Menu stateScores={{ first: first, second: second }}>
          <Link to='/single-player'>
            <MenuBar text='Single Player' />
          </Link>
          <Link to='/two-players'>
            <MenuBar text='Multi Player' />
          </Link>
        </Menu>
        <Switch>
          <Route path='/single-player'>
            <Tetris PLAYER_TYPE='single' />
          </Route>
          <Route path='/two-players'>
            <Tetris PLAYER_TYPE='single' changeSecond={changeSecond} />
            <Tetris PLAYER_TYPE='multi' changeFirst={changeFirst} />
          </Route>
          <Route exact path='/'></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
