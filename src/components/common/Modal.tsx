/* eslint-disable react/display-name */
import { forwardRef } from 'react';
import styles from '@styles/Modal.module.css';
import clsx from 'clsx';

type ModalProps = {
  isWon: boolean;
  handleIsWon: React.Dispatch<React.SetStateAction<boolean>>;
  handleCloseModal: () => void;
};

const Modal = forwardRef<HTMLDialogElement, ModalProps>(({ handleCloseModal, isWon, handleIsWon }, ref) => {
  const content = isWon ? (
    <div>
      <h2 className={clsx(styles.heading)}>Bravo!</h2>
      <p className={clsx(styles.content)}>
        All 20 unique and mysterious plant species thrive and bloom under your expert care.
      </p>
    </div>
  ) : (
    <div>
      <h2 className={clsx(styles.heading)}>Curses!</h2>
      <p className={clsx(styles.content)}>
        This seed has already been sprouted, therefore rekindle your spirit and venture forth once more.
      </p>
    </div>
  );

  return (
    <dialog ref={ref} className={clsx(styles.modal)}>
      {content}
      <button
        type="button"
        className={clsx(styles.btn, styles.btnRight)}
        onClick={() => {
          handleIsWon(false);
          handleCloseModal();
        }}
      >
        Play Again
      </button>
    </dialog>
  );
});

export default Modal;
