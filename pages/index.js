import axios from 'axios';
import Head from 'next/head';

import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Results from '../components/Results';
import request from '../utils/request';

export default function Home({ results }) {
  console.log(results);
  return (
    <div className=''>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* header */}
      <Header />

      {/* navbar */}
      <Navbar />
      {/* results */}
      <Results results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre || 'fetchTrending';
  const { data } = await axios.get(`
    https://api.themoviedb.org/3${request[genre].url}
  `);
  return {
    props: {
      results: data.results,
    },
  };
}
