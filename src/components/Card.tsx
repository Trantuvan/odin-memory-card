import styles from '@styles/Card.module.css';
import clsx from 'clsx';

type CardProps = {
  imgUrl: string;
  index: number;
  handleClick: (e: React.MouseEvent, index: number) => void;
};

function Card({ imgUrl, index, handleClick }: CardProps) {
  return (
    <button className={clsx(styles.card)} type="button" onClick={(e) => handleClick(e, index)}>
      <img className={clsx(styles.cardImg)} src={imgUrl} alt="card img" />
    </button>
  );
}

export default Card;
