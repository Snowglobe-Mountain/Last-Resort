import Head from 'next/head'
import ThemeToggle from '../components/theme-toggle'

const Home = (): JSX.Element => {
  return (
    <div className='py-0 px-8'>
      <Head>
        <title>Skyward Sword Randomizer Tracker</title>
        <meta name='description' content='A web tracker for The Legend of Zelda: Skyward Sword Randomizer.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='bg-white dark:bg-black min-h-screen p-2 flex flex-col'>
        <div className='text-end'>
          <ThemeToggle />
        </div>
      </main>
    </div>
  )
}

export default Home
