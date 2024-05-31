import { motion, AnimatePresence } from 'framer-motion'
import Head from 'next/head'

import Footer from '@/components/footer'
import Header from '@/components/header'
import { ActiveIdProvider } from '@/context/active-id'
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

        <title>Mastree - Bawialnie, Antresole, Stolarka, Laser CNC, Frezowanie</title>
        <meta name="description" content="Specjalizujemy się w antresolach drewnianych, zabudowach bawialni, stolarce ogrodowej i meblowej oraz usługach CNC. Zapraszamy do zapytań"/>

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://mastree.pl"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Bawialnie, Antresole, Stolarka, Laser CNC, Frezowanie"/>
        <meta property="og:description" content="Specjalizujemy się w antresolach drewnianych, zabudowach bawialni, stolarce ogrodowej i meblowej oraz usługach CNC. Zapraszamy do zapytań"/>
        <meta property="og:image" content="https://mastree.stronazen.pl/antresole/1600/8D1A3506.jpg"/>

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="mastree.pl"/>
        <meta property="twitter:url" content="https://mastree.pl"/>
        <meta name="twitter:title" content="Bawialnie, Antresole, Stolarka, Laser CNC, Frezowanie"/>
        <meta name="twitter:description" content="Specjalizujemy się w antresolach drewnianych, zabudowach bawialni, stolarce ogrodowej i meblowej oraz usługach CNC. Zapraszamy do zapytań"/>
        <meta name="twitter:image" content="https://mastree.stronazen.pl/antresole/1600/8D1A3506.jpg"/>
      </Head>
      <ActiveIdProvider>
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
      </ActiveIdProvider>
    </>
  )
}
