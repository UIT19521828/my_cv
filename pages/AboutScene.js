import React from 'react';
import styles from '../styles/About.module.scss';
import { motion } from "framer-motion";
import SvgBasketball from './components/Basketball';
import SvgAstronaut from './components/Astronaut';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebook, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const motionParag = {
    enter: {
        transition: {
            staggerChildren: 0.45,
        }
    },
}

const variant = {
    init: {
        opacity: 0,
        x: 50,
    },
    enter: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1.5,
            ease: [0.6, 0.01, -0.05, 0.95],
        }
    }
}

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

            <Row style={{marginTop: '-2rem',}}>
                <div className={styles.container}>
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: "20vw",
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition:{
                                type: 'spring',
                                bounce: 0.2,
                                duration: 3,
                            }
                        }}
                        viewport={{once: true}}
                    >
                        <SvgBasketball className={styles.img1}/>
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.95,
                            y: 20,
                        }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                            y: 0,
                            transition: {
                                duration: 0.6,
                            }
                        }}
                    >
                        <h1 className={styles.header}>Small Introduction</h1>
                        <p className={styles.parag}>I&#39;m currently studying at University of Technology, Ho Chi Minh City,
                             with the major is developing software using C#, Java.<br/><br/>
                            To pursue a dream of someday I will make my own game, I always desire to learn and discovery new thing.
                            This website whose I create for both purpose of trying new programming language, new framework, new library
                            and making an awesome portfolio for my career.
                        </p>
                    </motion.div>    
                </div>    
            </Row>

            <Row>
                <Col xs={12} md={6}>
                    <div className={styles.container3}>
                        <h1 className={styles.header}>My Curriculum Vitae</h1>
                        <p>
                            Download My    &nbsp;  
                            <a>
                                <FontAwesomeIcon icon={faDownload}/>&nbsp;&nbsp;Resume
                            </a>
                        </p>
                    </div>
                </Col>

                <Col xs={12} md={6}>
                    <div className={styles.container2}>
                        <div>
                            <h1 className={styles.header}>My Social Media</h1>
                            <motion.p
                                variants={motionParag}
                                initial='init'
                                whileInView='enter'
                            >
                                <motion.div variants={variant}>
                                    <FontAwesomeIcon icon={faGithub} className={styles.icon}
                                        style={{color: '#6e5494'}}/>
                                    <a href='https://github.com/UIT19521828'
                                        target='_blank' rel="noreferrer"
                                        className={styles.a} 
                                    >github.com/UIT19521828</a>
                                </motion.div>
                                <motion.div variants={variant}>
                                    <FontAwesomeIcon icon={faFacebook} className={styles.icon}
                                        style={{color: '#0072ff'}}/>
                                    <a href='https://www.facebook.com/manh.phanhuy.754/'
                                        target='_blank' rel="noreferrer"
                                        className={styles.a}
                                    >fb.com/manh.phanhuy.754</a>
                                </motion.div>
                                <motion.div variants={variant}>
                                    <FontAwesomeIcon icon={faLinkedin} className={styles.icon}
                                        style={{color: '#0A66C2'}}/>
                                    <a href='https://www.linkedin.com/in/manh-phan-huy-332u24/'
                                        target='_blank' rel="noreferrer"
                                        className={styles.a}
                                    >linkedin.com/in/manh-phan-huy</a>
                                </motion.div>
                                <motion.div variants={variant}>
                                    <FontAwesomeIcon icon={faGoogle} className={styles.icon}
                                        style={{color: '#ff9966'}}/>
                                    <text className={styles.text}>phanhuymanh1409@gmail.com</text>
                                </motion.div>
                            </motion.p>
                        </div>
                        
                        <motion.div
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
                                    duration: 3,
                                }
                            }}
                            viewport={{once: true}}
                        >
                            <SvgAstronaut />
                        </motion.div>
                    </div>
                </Col>
                
            </Row>  
        </Container>
    </div>
    
  )
}