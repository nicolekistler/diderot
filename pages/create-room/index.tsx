import Head from 'next/head'
import Layout from '@/components/Layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Art Critic | Create a Room</title>
        <meta name="description" content="You, your friends, and a canvas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        Create Room Page
      </Layout>
    </>
  )
}
