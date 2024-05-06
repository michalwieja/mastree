import { motion, AnimatePresence } from 'framer-motion'
import Head from 'next/head'

import Header from '@/components/header'
import Footer from '@/components/footer'

import '@/styles/globals.css'

export default function App({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/favicon/site.webmanifest"/>
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
        <link rel="shortcut icon" href="/favicon/favicon.ico"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="msapplication-config" content="/favicon/browserconfig.xml"/>
        <meta name="theme-color" content="#ffffff"/>
      </Head>
      <Header />
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          transition={{ ease: 'linear' }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
      {router.pathname !== '/' && (
        <Footer/>
      )}
    </>
  )
}
