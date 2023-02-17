import { useState } from 'react';
import clsx from 'clsx';

import styles from '@styles/App.module.css';
import { GamePage, WelcomePage } from '@pages/index';
import { Header } from './common';

function App() {
  const [showGamePage, setShow] = useState(false);

  return (
    <div className={clsx(styles.app)}>
      <Header isHidden={!showGamePage} />
      {showGamePage ? <GamePage /> : <WelcomePage handleTogglePage={() => setShow(!showGamePage)} />}
    </div>
  );
}

export default App;
