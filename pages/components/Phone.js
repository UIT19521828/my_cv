import React from 'react'
import styles from '/styles/Skill.module.scss'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';

import "swiper/css";

const images = [
    '/coach1.png',    
    '/coach2.png',
    '/coach3.png',
    '/coach4.png',
    '/coach5.png',    
    '/coach6.png',
];

export default function Phone() {

  return (
    <motion.div className={styles.phone}
      initial={{
        opacity: 0,
        rotateY: 180,
      }}
      whileInView={{
        opacity: 1,
        rotateY: 0,
        transition: {
          duration: 1.5,
        }
      }}
    >
      <Swiper
        loop={true} spaceBetween={5}
        grabCursor={true}
        className={styles.pic}
      >
          {
            images.map((item, index) => (
                <SwiperSlide key={index}>
                  <Image src={item} alt="" layout='fill' objectFit='contain'/>
                </SwiperSlide>
            ))
          }
      </Swiper>  
    </motion.div>
   
  )
}
