import clsx from 'clsx';

import Card from '@components/Card';
import styles from '@styles/GamePage.module.css';

type GamePageProps = {
  handleClick: (e: React.MouseEvent, index: number) => void;
  imgArr: { id: number; src: string }[];
};

function GamePage({ handleClick, imgArr }: GamePageProps) {
  return (
    <div className={clsx(styles.cardContainer)}>
      {imgArr.map((img) => (
        <Card key={img.id} index={img.id} imgUrl={img.src} handleClick={handleClick} />
      ))}
    </div>
  );
}

export default GamePage;
