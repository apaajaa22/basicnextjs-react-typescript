/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { ReactNode } from 'react';
import Head from 'next/head';
import Footer from '../Footer';
import Header from '../Header';
import styles from './Layout.module.css';

interface LayoutProps {
  children: ReactNode
  pageTitle: String
}

function Layout(props: LayoutProps) {
  const { children, pageTitle } = props;
  return (
    <>
      <Head>
        <title>
          Next Js |
          {' '}
          {pageTitle}
        </title>
        <meta name="description" content="Website NextJs Basic" />
      </Head>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
