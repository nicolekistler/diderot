import Head from 'next/head'
import Header from '../components/Header'
import Input from '../components/Input'
import Button from '../components/Button'
import Layout from '@/components/Layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Art Critic</title>
        <meta name="description" content="May the best brush strokes win" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
          <Header />
          <Input />
          <Button text='Create New Room' href="/create-room" />
          <Button text='Join Existing Room' href="/join-room" secondary />
      </Layout>
    </>
  )
}
