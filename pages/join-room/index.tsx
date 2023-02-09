import Layout from '@/components/Layout'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Art Critic | Join a Room</title>
        <meta name="description" content="Art Critic Join a Room" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        Join Room Page
      </Layout>
    </>
  )
}
