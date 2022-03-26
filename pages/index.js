import Head from 'next/head'
import Image from 'next/image'
import Login from '../components/Login'
import { useMoralis } from 'react-moralis'
import Header from '../components/Header'
import Messages from '../components/Messages'
const Home = () => {
  const { isAuthenticated } = useMoralis()

  if (!isAuthenticated) return <Login />
  return (
    <div className="to h-screen overflow-hidden overflow-y-scroll bg-fuchsia-900 bg-gradient-to-b from-black">
      <Head>
        <title>Metaverse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-auto max-w-screen-2xl">
        {/* Header */}
        <Header />
        {/* Messages */}
        <Messages />
      </div>
    </div>
  )
}

export default Home
