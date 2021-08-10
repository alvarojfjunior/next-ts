import Head from 'next/head'

export const Mika = (): JSX.Element => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
        <h1> Mika's page <a href="/store"> Go to second page </a> </h1>
    </main>

    <footer>


    </footer>
  </div>
)

export default Mika
