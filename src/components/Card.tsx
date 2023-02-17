import styles from '@styles/Card.module.css';
import clsx from 'clsx';

type CardProps = {
  imgUrl: string;
};

function Card({ imgUrl }: CardProps) {
  return (
    <button className={clsx(styles.card)} type="button">
      <img className={clsx(styles.cardImg)} src={imgUrl} alt="card img" />
    </button>
  );
}

export default Card;
