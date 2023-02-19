import clsx from 'clsx';

import Card from '@components/Card';
import styles from '@styles/GamePage.module.css';
import getImgs from '@helpers/getImgs';

function GamePage() {
  return (
    <div className={clsx(styles.cardContainer)}>
      {getImgs.map((img) => (
        <Card key={img.id} imgUrl={img.src} />
      ))}
    </div>
  );
}

export default GamePage;
