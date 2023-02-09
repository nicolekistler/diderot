import Head from 'next/head'
import Layout from '@/components/Layout'
import Input from '@/components/Input'
import Button from '@/components/Button'
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
          <Input label='Enter the Room Code'></Input>
          <Button text='Join Room' href="/create-room" />
          <Button text='Go Back' href="/" secondary />
      </Layout>
    </>
  )
}
