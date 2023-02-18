import clsx from 'clsx';
import { useLayoutEffect, useState } from 'react';

import Card from '@components/Card';
import { importAllImgs } from '@helpers/index';
import styles from '@styles/GamePage.module.css';

function GamePage() {
  const [urlArr, setUrlArr] = useState<
    {
      id: string;
      urlObj: URL;
    }[]
  >();

  useLayoutEffect(() => {
    async function getImgs() {
      const data = await importAllImgs();
      console.log(data);
      setUrlArr(data);
    }
    getImgs();
  }, []);

  return (
    <div className={clsx(styles.cardContainer)}>
      {urlArr?.map((url) => (
        <Card key={url.id} imgUrl={url.urlObj.href} />
      ))}
    </div>
  );
}

export default GamePage;
