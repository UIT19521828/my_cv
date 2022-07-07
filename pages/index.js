import Head from 'next/head'
import HomeScene from './HomeScene'
import Image from 'next/image'
import AboutScene from './AboutScene'
import Loader from './Loader'

import styles from '../styles/Index.module.scss'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { motion, AnimatePresence } from "framer-motion";
import { useState } from 'react'

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <AnimatePresence>
      <Head>
        <title>PHM&apos;s Portfolio</title>
        <meta name="description" content="My Personal Portfolio" />
        <link rel="icon" href="/logo.svg" />
      </Head>
        {loading ? (
          <motion.div key='loader'>
            <Loader setLoading={setLoading}/>
          </motion.div>
        ):(
          <div>                      
            <Parallax pages={3}>
              <ParallaxLayer
                offset={0} className={styles.logo} speed={0.3}>
                <picture>
                  <motion.img src='/logo.svg' alt='' width={80} height={80}
                     transition={ { duration: 1.6 } }
                     layoutId="loading-logo"
                  />
                </picture>
              </ParallaxLayer>
              <HomeScene/>
              <AboutScene/>
            </Parallax>
          </div>
        )}
    </AnimatePresence>
  )
}
