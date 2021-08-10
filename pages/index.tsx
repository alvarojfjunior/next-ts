import Head from 'next/head'

export const Home = (): JSX.Element => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
        <h1> Main page <a href="/store"> Go to second page </a> </h1>
    </main>

    <footer>


    </footer>
  </div>
)

export default Home
