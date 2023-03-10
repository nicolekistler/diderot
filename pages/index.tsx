import { useState } from 'react'
import Head from 'next/head'
import Input from '@/components/Input'
import Button from '@/components/Button'
import Layout from '@/components/Layout'

export default function Home() {
  const [ name, setName ] = useState('')

  return (
    <>
      <Head>
        <title>Art Critic</title>
        <meta name="description" content="May the best brush strokes win" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
          <Input setValue={setName} value={name} label='Enter your nickname' />
          <Button text='Create New Room' href="/create-room" />
          <Button text='Join Existing Room' href="/join-room" secondary />
      </Layout>
    </>
  )
}
