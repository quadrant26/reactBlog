import React from 'react'
import Head from 'next/head'
import {Button} from 'antd'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Home</title>
      </Head>

      <div><Button>我是按钮</Button></div>
    </div>
  )
}
