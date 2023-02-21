import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import styles from '@styles/App.module.css';
import { GamePage, WelcomePage } from '@pages/index';
import { Header, Modal } from './common';

function App() {
  const [showGamePage, setShow] = useState(true);
  const [isWon, setIsWon] = useState(false);
  const [currScore, setCurrScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);

  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    // *win case
    if (currScore === 20) {
      console.log(`currScore: ${currScore}`);
      setBestScore(currScore);
      setIsWon(true);
      modalRef.current?.showModal();
    }
  }, [currScore]);

  const handleClick = (e: React.MouseEvent, index: number): undefined => {
    const indexSelected = selectedCards.find((cardIndex) => cardIndex === index);
    console.log({
      isSelectedCard: indexSelected,
      index,
    });

    if (indexSelected) {
      // *click the same card
      console.log('card selected');
      setBestScore(currScore);
      modalRef.current?.showModal();
      return undefined;
    }
    // *click different card
    console.log('add new card');
    setSelectedCards((prevCards) => [...prevCards, index]);
    setCurrScore((prevScore) => prevScore + 1);

    return undefined;
  };

  const handleRestState = () => {
    // *reset selectedCards & currentScore
    setSelectedCards([]);
    setCurrScore(0);
  };

  return (
    <div className={clsx(styles.app)}>
      <Header currScore={currScore} bestScore={bestScore} isHidden={!showGamePage} />
      {showGamePage ? (
        <GamePage handleClick={handleClick} />
      ) : (
        <WelcomePage handleTogglePage={() => setShow(!showGamePage)} />
      )}
      <Modal
        ref={modalRef}
        isWon={isWon}
        handleIsWon={setIsWon}
        handleCloseModal={() => modalRef.current?.close()}
        handleReset={handleRestState}
      />
    </div>
  );
}

export default App;
