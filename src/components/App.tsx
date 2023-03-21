/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import styles from '@styles/App.module.css';
import { GamePage, WelcomePage } from '@pages/index';
import { getImgs, shuffle } from '@helpers/index';
import { Header, Modal } from './common';

function App() {
  const [showGamePage, setShow] = useState(false);
  const [isWon, setIsWon] = useState(false);
  const [currScore, setCurrScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [imgArr, setImgArr] = useState<{ id: number; src: string }[]>(() => getImgs);

  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    // *win case
    if (currScore === 20) {
      setBestScore(currScore);
      setIsWon(true);
      modalRef.current?.showModal();
    }
  }, [currScore]);

  const handleClick = (index: number): undefined => {
    const indexSelected = selectedCards.find((cardIndex) => cardIndex === index);
    // *shuffle imgArr when clicked
    // *shuffle takes in arr return new Array<T>
    setImgArr(shuffle(imgArr));

    if (indexSelected) {
      // *click the same card
      const isCurrGreater = currScore > bestScore;
      isCurrGreater ? setBestScore(currScore) : setBestScore(bestScore);
      modalRef.current?.showModal();
      return undefined;
    }
    // *click different card
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
        <GamePage handleClick={handleClick} imgArr={imgArr} />
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
