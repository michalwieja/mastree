import { motion, AnimatePresence } from 'framer-motion'

import Header from '@/components/header'
import Footer from '@/components/footer'

import '@/styles/globals.css'

export default function App({ Component, pageProps, router }) {
  return (
    <>
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
