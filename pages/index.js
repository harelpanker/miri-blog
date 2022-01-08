import Head from 'next/head';
import Featured from '../components/home/Featured';
import Header from '../components/home/Header';
import Footer from '../components/layout/Footer';
import { getPosts } from '../services';

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Miri Blog</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Header />
        <Featured posts={posts} />
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
