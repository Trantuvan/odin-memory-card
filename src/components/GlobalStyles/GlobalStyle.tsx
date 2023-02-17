import '@styles/normalize.css';
import '@styles/reset.css';
import '@styles/index.css';
import { ReactNode } from 'react';

type TGlobalStyles = {
  children: ReactNode;
};

function GlobalStyle({ children }: TGlobalStyles) {
  return <div>{children}</div>;
}

export default GlobalStyle;
