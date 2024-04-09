import { motion, AnimatePresence } from 'framer-motion'

import Header from '@/components/header'

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
          exit={{ x: '100%' }}
          transition={{ ease: 'linear' }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  )
}
