import { AppProps } from '../interfaces';

import styles from '../styles/Layout.module.scss';

import Footer from './Footer';
import Nav from './Nav';

const Layout = ({ children }: AppProps) => {
  return (
    <>
      <Nav />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
