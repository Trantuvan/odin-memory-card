import styles from '@styles/GamePage.module.css';
import Card from '@components/Card';
import img01 from '@assets/imgs/cards/card01.png';
import clsx from 'clsx';

function GamePage() {
  return (
    <div className={clsx(styles.cardContainer)}>
      <Card imgUrl={img01} />
      <Card imgUrl={img01} />
      <Card imgUrl={img01} />
    </div>
  );
}

export default GamePage;
