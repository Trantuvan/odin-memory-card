import styles from '@styles/Card.module.css';
import clsx from 'clsx';

type CardProps = {
  imgUrl: string;
  index: number;
  handleClick: (index: number) => void;
};

function Card({ imgUrl, index, handleClick }: CardProps) {
  return (
    <button className={clsx(styles.card)} type="button" onClick={() => handleClick(index)}>
      <img className={clsx(styles.cardImg)} src={imgUrl} alt="card img" />
    </button>
  );
}

export default Card;
