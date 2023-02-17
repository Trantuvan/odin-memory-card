import clsx from 'clsx';

import styles from '@styles/WelcomePage.module.css';
import { Header } from '@components/common';

function WelcomePage() {
  return (
    <div className={clsx(styles.welcomeSection)}>
      <Header isHidden />;
    </div>
  );
}

export default WelcomePage;
