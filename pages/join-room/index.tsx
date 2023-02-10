import { useState } from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import Input from '@/components/Input'
import Button from '@/components/Button'

export default function JoinRoom() {
  const [ roomCode, setRoomCode ] = useState('')

  const handleClick = (e: React.MouseEvent) => {
      console.log('eeeee')
  }

  return (
    <>
      <Head>
        <title>Art Critic | Join a Room</title>
        <meta name="description" content="Art Critic Join a Room" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
          <Input setValue={setRoomCode} value={roomCode} label='Enter the Room Code'></Input>
          <Button text='Join Room' onClickOverride={handleClick} />
          <Button text='Go Back' href="/" secondary />
      </Layout>
    </>
  )
}
