import React from 'react'
import styles from '/styles/Skill.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';

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
    <Swiper
      loop={true} spaceBetween={5}
      grabCursor={true}
      className={styles.phone}
    >
        {
          images.map((item, index) => (
              <SwiperSlide key={index}>
                  <picture>
                      <img src={item} alt="" className={styles.pic}/>
                  </picture>
              </SwiperSlide>
          ))
        }
    </Swiper>  
   
  )
}
