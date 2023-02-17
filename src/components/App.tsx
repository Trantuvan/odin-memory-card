import clsx from 'clsx';

import styles from '@styles/App.module.css';
import { WelcomePage } from '@pages/index';
import { Header } from './common';

function App() {
  return (
    <div className={clsx(styles.app)}>
      <Header isHidden />
      <WelcomePage />
    </div>
  );
}

export default App;
