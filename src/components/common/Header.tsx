import clsx from 'clsx';

import logo from '@assets/imgs/logo.png';
import styles from '@styles/Header.module.css';

type HeaderProps = {
  isHidden: boolean;
  currScore: number;
  bestScore: number;
};

function Header({ isHidden, currScore, bestScore }: HeaderProps) {
  return (
    <header className={clsx(styles.header)}>
      <img src={logo} alt="logo img" />
      <div
        className={clsx(styles.scores, {
          [styles.hidden]: isHidden,
        })}
      >
        <div className={clsx(styles.scoreLeft)}>
          Current Score <span className={clsx(styles.scoreBox)}>{currScore}</span>
        </div>
        <div className={clsx(styles.scoreRight)}>
          Best Score <span className={clsx(styles.scoreBox)}>{bestScore}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
