import React from 'react'
import styles from '/styles/Skill.module.scss'
import { motion, AnimatePresence } from 'framer-motion'

const variants = {
    init: {
        y: -40,
        opacity: 0,
    },  
    enter: (i)=>{
        const delay = i * 0.35;
        return{
            y: 0,
            opacity: 1,
            transition: {
                delay,
                duration: 0.75,
            }   
        };
    },
};

export default function Gallery() {
  return (
    <AnimatePresence>
        <motion.div className={styles.gallerysection} 
            initial='init'
            whileInView='enter'
        >
            <motion.div variants={variants} custom={3}>
                <picture>
                    <img src='/film3.png' alt='' className={styles.img1} variants={variants}/>
                </picture>
            </motion.div>
            <motion.div variants={variants} custom={2}>
                <picture>
                    <img src='/film2.png' alt='' className={styles.img2} variants={variants}/>
                </picture>
            </motion.div>
            <motion.div variants={variants} custom={1}>
                <picture>
                    <img src='/film1.png' alt='' className={styles.img3} variants={variants}/>
                </picture>
            </motion.div>

        </motion.div>
    </AnimatePresence>
  )
}