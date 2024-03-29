import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] });

import Layout from '@/components/layout';
import Header from '@/components/header';

import { getAllPosts } from '@/utils/events';
import Card from '@/components/card';

export default function Home({postData}) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Layout>
          <h1>FAI</h1>
          <p>Le giornate FAI</p>
          {postData?.map((events, index) => {
            <Card key={index} events={events} />
          })}
        </Layout>
      </main>
    </>
  )
}

export const getStaticProps = () => {
  const postData = getAllPosts();

  return {
    props: {
      postData,
    },
  };
};
