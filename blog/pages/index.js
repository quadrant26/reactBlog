import React from 'react'
import Head from 'next/head'

import Header from '../components/Header'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Home</title>
      </Head>

      <Header />
    </div>
  )
}
