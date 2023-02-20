import clsx from 'clsx';

import Card from '@components/Card';
import styles from '@styles/GamePage.module.css';
import getImgs from '@helpers/getImgs';

type GamePageProps = {
  handleClick: (e: React.MouseEvent, index: number) => void;
};

function GamePage({ handleClick }: GamePageProps) {
  return (
    <div className={clsx(styles.cardContainer)}>
      {getImgs.map((img) => (
        <Card key={img.id} index={img.id} imgUrl={img.src} handleClick={handleClick} />
      ))}
    </div>
  );
}

export default GamePage;
