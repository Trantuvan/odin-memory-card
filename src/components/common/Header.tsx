import clsx from 'clsx';

import logo from '@assets/imgs/logo.png';
import styles from '@styles/Header.module.css';

type HeaderProps = {
  isHidden: boolean;
};

function Header({ isHidden }: HeaderProps) {
  return (
    <header>
      <img src={logo} alt="logo img" />
      <div
        className={clsx(styles.scores, {
          [styles.hidden]: isHidden,
        })}
      >
        <div className={clsx(styles.scoreLeft)}>
          Current Score <span className={clsx(styles.scoreBox)}>0</span>
        </div>
        <div className={clsx(styles.scoreRight)}>
          Best Score <span className={clsx(styles.scoreBox)}>0</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
