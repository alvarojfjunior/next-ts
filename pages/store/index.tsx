import Head from 'next/head'
import Image from 'next/image'

export const Home = (): JSX.Element => (
  <div className="container">
    <Head>
      <title>Store</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1> Second page! <a href="/"> Back to main page! </a></h1>
    </main>
  </div>
)

export default Home
