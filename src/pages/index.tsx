import type { NextPage } from 'next';

import Layout from '@/components/layout/layout';
import Seo from '@/components/seo';

const Home: NextPage = () => {
  return (
    <Layout>
      <Seo title='home' />

      <p className='text-cyan-100'>hello world</p>
    </Layout>
  );
};

export default Home;
