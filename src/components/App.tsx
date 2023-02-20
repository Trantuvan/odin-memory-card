import { useRef, useState } from 'react';
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

  const handleClick = (e: React.MouseEvent, index: number): undefined => {
    const indexSelected = selectedCards.find((cardIndex) => cardIndex === index);
    console.log({
      isSelectedCard: indexSelected,
      index,
    });

    // *lose Case
    if (indexSelected) {
      console.log('card selected');
      setBestScore(currScore);
      modalRef.current?.showModal();

      // *reset selectedCards & currentScore
      setSelectedCards([]);
      setCurrScore(0);
      return undefined;
    }

    if (currScore === 20) {
      console.log(`currScore: ${currScore}`);
      setIsWon(true);
      modalRef.current?.showModal();

      // *reset selectedCards & currentScore
      setSelectedCards([]);
      setCurrScore(0);
      return undefined;
    }

    console.log('add new card');
    setSelectedCards((prevCards) => [...prevCards, index]);
    setCurrScore((prevScore) => prevScore + 1);

    return undefined;
  };

  return (
    <div className={clsx(styles.app)}>
      <Header currScore={currScore} bestScore={bestScore} isHidden={!showGamePage} />
      {showGamePage ? (
        <GamePage handleClick={handleClick} />
      ) : (
        <WelcomePage handleTogglePage={() => setShow(!showGamePage)} />
      )}
      <Modal ref={modalRef} isWon={isWon} handleIsWon={setIsWon} handleCloseModal={() => modalRef.current?.close()} />
    </div>
  );
}

export default App;
