import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google' 
import styles from '@/styles/Home.module.css'; //imports styles from home.module.css
import Navigation from './ui/Navigation';
import Page from './ui/Page'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Adam's Portfolio Page</title>
        <meta name="description" content="Adam's Portfolio Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        
        <Navigation />
        <Page />
        <Page />
        <Page />
      </main>
    </>
  )
}
