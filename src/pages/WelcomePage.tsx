/* eslint-disable react/no-unescaped-entities */
import clsx from 'clsx';

import styles from '@styles/WelcomePage.module.css';
import { useState } from 'react';

type WelcomePageProps = {
  handleTogglePage: () => void;
};

function WelcomePage({ handleTogglePage }: WelcomePageProps) {
  const [showRule, setRule] = useState(false);

  const guideContent =
    showRule === false ? (
      <>
        Forge a garden where no two blooms are ever the same.
        <br /> <span>∾</span> <br />
        A bounty of unique and mysterious plant seedlings await your cultivation.
        <br /> <span>∾</span> <br />
        Successfully grow 20 of them and ascend to the throne of the Floral Master!
      </>
    ) : (
      <>
        Choose a card, but don't click on the same one twice.
        <br /> <span>∾</span> <br />
        Each correct choice gives you 1 point.
        <br /> <span>∾</span> <br />
        Score 20 points and win the game!
      </>
    );
  return (
    <div className={clsx(styles.welcomeSection)}>
      <p className={clsx(styles.guideBox)}>{guideContent}</p>
      <div className={clsx(styles.actions)}>
        <button type="button" className={clsx(styles.btn, styles.btnLeft)} onClick={() => setRule(!showRule)}>
          {showRule ? 'Fantasy Realm' : 'Show Rule'}
        </button>
        <button type="button" className={clsx(styles.btn, styles.btnRight)} onClick={handleTogglePage}>
          Play
        </button>
      </div>
    </div>
  );
}

export default WelcomePage;
