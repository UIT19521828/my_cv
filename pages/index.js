import Head from 'next/head'
import HomeScene from './HomeScene'
import AboutScene from './AboutScene'
import Loader from './Loader'
import SkillScene from './SkillScene'
import styles from '../styles/Index.module.scss'

import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const [loading, setLoading] = useState(true);
  const scroll = useRef(null);

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
            <Parallax pages={5} heigh='auto' className={styles.prlax} ref={scroll}>
              <ParallaxLayer
                offset={0} className={styles.logo} speed={0.3}>
                <picture>
                  <motion.img src='/logo.svg' alt='' width={85} height={85}
                     transition={ { duration: 1.6 } }
                     layoutId="loading-logo"
                  />
                </picture>
              </ParallaxLayer>
              
              <HomeScene scroll={scroll}/>
              <AboutScene/>
              <SkillScene/>
              <div className={styles.working_on}>
                <div className={styles.img}>
                  <Image src='/onprogess.png' alt=''  layout='fill'/>
                </div>
              </div>
            </Parallax>
          </div>
        )}
    </AnimatePresence>
  )
}
