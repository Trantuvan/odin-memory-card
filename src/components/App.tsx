import { useState } from 'react';
import clsx from 'clsx';

import styles from '@styles/App.module.css';
import { GamePage, WelcomePage } from '@pages/index';
import { Header } from './common';

function App() {
  const [showGamePage, setShow] = useState(true);
  const [currScore, setCurrScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);

  const handleClick = (e: React.MouseEvent, index: number) => {
    const indexSelected = selectedCards.find((cardIndex) => cardIndex === index);
    console.log({
      isSelectedCard: indexSelected,
      index,
    });

    if (indexSelected) {
      console.log('card selected');
      setBestScore(currScore);
    } else {
      console.log('add new card');
      setSelectedCards((prevCards) => [...prevCards, index]);
      setCurrScore((prevScore) => prevScore + 1);
    }
  };

  return (
    <div className={clsx(styles.app)}>
      <Header currScore={currScore} bestScore={bestScore} isHidden={!showGamePage} />
      {showGamePage ? (
        <GamePage handleClick={handleClick} />
      ) : (
        <WelcomePage handleTogglePage={() => setShow(!showGamePage)} />
      )}
    </div>
  );
}

export default App;
