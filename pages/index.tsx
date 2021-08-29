/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */

import Image from 'next/image';
import Layout from '../components/Layout';

function Home() {
  return (
    <>
      <Layout pageTitle="Home Page">
        <Image src="/food1.png" width={200} height={200} alt="profile" />
        <h1>hai reza</h1>
      </Layout>
    </>
  );
}

export default Home;
