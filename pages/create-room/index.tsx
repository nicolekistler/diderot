import { useState } from 'react';
import Head from 'next/head'
import Layout from '@/components/Layout'
import Button from '@/components/Button'
import NumberInput from '@/components/NumberInput'

export default function Home() {
  const [numPlayers, setNumPlayers] = useState();
  const [numRounds, setNumRounds] = useState();

  return (
    <>
      <Head>
        <title>Art Critic | Create a Room</title>
        <meta name="description" content="You, your friends, and a canvas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <NumberInput label='Number of Players' initialNumber={4} maxNumber={12} setNumber={setNumPlayers}/>
        <NumberInput label='Number of Rounds' initialNumber={3} maxNumber={10} setNumber={setNumRounds}/>
        <Button text='Launch Room' href='/' />
        <Button text='Go Back' href='/' secondary />
      </Layout>
    </>
  )
}
