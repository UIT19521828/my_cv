import React from 'react';
import styles from '../styles/About.module.scss';
import { motion } from "framer-motion";
import SvgBasketball from './components/Basketball';
import SvgAstronaut from './components/Astronaut';
import { Container, Row, Col } from 'react-bootstrap';

export default function AboutScene() {
  return (
    <div>
        <Container className={styles.main} fluid='true'>
            <motion.i
                initial={{
                    opacity: 0,
                    x: "-20vw",
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition:{
                        type: 'spring',
                        bounce: 0.2,
                        duration: 1.5,
                    }
                }}
            >
                <div className={styles.ribbon}>About</div>
            </motion.i>      

            <Row>
                <div className={styles.container}>
                    <div>
                        <SvgBasketball className={styles.img1}/>
                    </div>
                    <div>
                        <h1 className={styles.header}>Small Introduction</h1>
                        <p className={styles.parag}>I&#39;m currently studying at University of Technology, Ho Chi Minh City,
                             with the main specialization is developing software using C#, Java.<br/><br/>
                            To pursue a dream of someday I will make my own game, I always desire to learn and discovery new thing.
                            This website whose I create for both purpose of trying new programming language, new framework, new library
                            and making an awesome cv for my career.
                        </p>
                    </div>    
                </div>    
            </Row>

            <Row>
                <div className={styles.container2}>
                    <div>
                        <h1 className={styles.header}>My Social Network</h1>
                        <a href='https://github.com/UIT19521828'
                        target='_blank' rel="noreferrer">
                            https://github.com/UIT19521828
                        </a>
                    </div>
                    
                    <div>
                        <SvgAstronaut />
                    </div>
                </div>
            </Row>
            
        </Container>
    </div>
    
  )
}