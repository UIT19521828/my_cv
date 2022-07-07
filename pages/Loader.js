import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";
import styles from '../styles/Loader.module.scss';

const rectvar = {
    init: {
        x:5,
        y:5,
        opacity: 0,
        pathLength: 0,
    },
    go: {
        pathLength: 1,
        opacity: 1,
        transition: {
            pathLength: { type: "spring", duration: 2, bounce: 0 },
            opacity: { duration: 0.01 }
        },
    },
}

export default function Loader({setLoading}) {
  return (
    <div className={styles.main}>
        <motion.div className={styles.body}
            initial={{
                scale: 0.8,
                opacity: 1,
            }}
            animate={{
                opacity: 1,
                transition: {
                    duration: 2,
                }
            }}
            onAnimationComplete={()=> setLoading(false)}
            layoutId="loading-logo"
        >
            <svg width={110} height={260} className={styles.svgcontainerL}>
                <defs>
                    <linearGradient id="linear" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%"   stopColor="#8360c3"/>
                        <stop offset="100%" stopColor="#2ebf91"/>
                    </linearGradient>
                </defs>
                <motion.rect width={100} height={250} stroke='url(#linear)'
                    rx={50} strokeWidth={5}
                    fill='transparent' variants={rectvar}
                    initial='init' animate='go' 
                />
            </svg>
            <picture>
                <motion.img src='/polygon.svg' alt='' width={430} height={140} className={styles.polygon}
                    initial={{
                        y: -300,
                        opacity: 0,
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                        transition:{
                            type: 'spring',
                            bounce: 0.3,
                            duration: 2,
                        }
                    }}
                    
                />
            </picture>
            <svg width={110} height={260} className={styles.svgcontainerR}>
                <defs>
                    <linearGradient id="linear" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%"   stopColor="#8360c3"/>
                        <stop offset="100%" stopColor="#2ebf91"/>
                    </linearGradient>
                </defs>
                <motion.rect width={100} height={250} stroke='url(#linear)'
                    rx={50} strokeWidth={5} fill='transparent'
                    variants={rectvar}
                    initial='init' animate='go' 
                />
            </svg>
        </motion.div>
        
    </div>
  )
}