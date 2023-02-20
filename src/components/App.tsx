import { useState } from 'react';
import clsx from 'clsx';

import styles from '@styles/App.module.css';
import { GamePage, WelcomePage } from '@pages/index';
import { Header } from './common';

function App() {
  const [showGamePage, setShow] = useState(false);
  const [currScore, setCurrScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className={clsx(styles.app)}>
      <Header currScore={currScore} bestScore={bestScore} isHidden={!showGamePage} />
      {showGamePage ? <GamePage /> : <WelcomePage handleTogglePage={() => setShow(!showGamePage)} />}
    </div>
  );
}

export default App;
