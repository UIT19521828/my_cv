import React from 'react'
import styles from '../styles/Skill.module.scss'
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from "framer-motion";
import Phone from './components/Phone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUnity, faJsSquare, faReact, } from '@fortawesome/free-brands-svg-icons'

import Logo from './components/Logo';
import Gallery from './components/Gallery';
import Image from 'next/image';

const library = {
    init:{
        x: -50,
        opacity: 0,
    },
    enter: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: 'anticipate'
        }
    }
};
const database = {
    init:{
        x: -30,
        y: 30,
        opacity: 0,
    },
    enter: {
        x: 0, y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: 'anticipate'
        }
    }
};
const parent1 = {
    enter: {
        transition: {
            staggerChildren: 0.3,
        }
    },
}
const parent2 = {
    enter: {
        transition: {
            staggerChildren: 0.2,
        }
    },
}
const variants={
    initLeft: {
        x: '-50vw',
    },
    initRight: {
        x: '50vw',
    },
    go: {
        x: 0,
        transition: {
            duration: 1.5,
        }
    }
}

export default function SkillScene() {
  return (
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
            <div className={styles.ribbon}>Skill</div>
        </motion.i>
        <Row style={{marginTop: '-2rem', marginLeft: '-3rem'}}>
            <Col xs={12} xl={6} className='order-xl-2'>
                <div style={{marginLeft: '1.5rem',}}>
                    <div className={styles.himg}>
                        <Image src='/CSharp.svg' alt='' layout='fill' objectFit='contain'/>
                    </div>
                    <motion.div className={styles.content}
                        initial='initLeft'
                        whileInView='go'
                    >
                        <motion.p className={styles.parag}
                            variants={variants}    
                        >
                            I can program full-stack C# app by .NET Core and Framework. 
                            I also have some game develop experience using 
                            <span style={{color: 'gray'}}> 
                                &nbsp;<FontAwesomeIcon icon={faUnity}/>
                                Unity 
                            </span> and 
                            <span style={{color: '#F2671F'}}> PlayFab </span>
                        </motion.p>
                    </motion.div>
                </div>
            </Col>
            <Col xs={12} xl={6} className='order-xl-1'>
                <Gallery/>
            </Col>
        </Row>

        <Row style={{marginTop: '-1rem',}}>
            <Col xs={6}>
                <div className={styles.alignRight}>
                    <div className={styles.rightlogo}>
                        <div className={styles.himg}>
                            <Image src='/java.svg' alt='' layout='fill' objectFit='cover'/>                      
                        </div>
                        <span> Java&nbsp;</span>
                    </div>
                    
                    <motion.div className={styles.content}
                        initial='initRight'
                        whileInView='go'
                    >
                        <motion.p className={styles.parag} variants={variants} >
                            I know to code back-end of Java/Kotlin app and using 
                            <span style={{color: '#FFA712'}}> Firebase </span>/
                            <span style={{color: '#1666E3'}}> G</span>
                            <span style={{color: '#DF3E31'}}>o</span>
                            <span style={{color: '#EAAC27'}}>o</span>
                            <span style={{color: '#1666E3'}}>g</span>
                            <span style={{color: '#16944E'}}>l</span>
                            <span style={{color: '#DF3E31'}}>e </span>
                            functions like
                            Cloud Messaging, Push Notification, Cloud Function, Admob
                        </motion.p>
                    </motion.div>
                </div>
            </Col>
            <Col xs={6} className={styles.flexcenter}>
                <Phone/>
            </Col>
            
        </Row>

        <Row style={{marginTop: '2rem', marginLeft: '-3rem'}}>
            <Col xs={12} lg={6}>
                <div style={{marginLeft: '1.5rem',}}>
                    <p style={{fontSize: '2.5rem', marginBottom: '-0.5rem'}}>
                        <text className={styles.text}
                            style={{
                                color: '#f7b733',
                            }}
                        ><FontAwesomeIcon icon={faJsSquare} color='#f7df1e'/> JavaScript</text>
                    </p>
                    
                    <motion.div className={styles.content}
                        initial='initLeft'
                        whileInView='go'
                    >
                        <motion.p className={styles.parag} variants={variants}>
                            I&apos;m still learing about JavaScript. I can do&nbsp;
                            <span style={{color: '#61DBFB'}}>
                                <FontAwesomeIcon icon={faReact} 
                                /> React Native 
                            </span>
                            &nbsp;or web app with Next.js
                        </motion.p>
                    </motion.div>
                </div>
            </Col>

            <Col xs={12} lg={6}>
                <div style={{marginLeft: '1.5rem',}}>
                    <div style={{fontSize: '2.5rem', marginBottom: '-0.5rem'}}>
                        <text className={styles.text}
                            style={{
                                color: '#f7b733',
                            }}
                        >Commonly Used Library</text>
                    </div>
                    
                    <motion.div className={styles.icon_container}
                        variants={parent1}
                        initial='init'
                        whileInView='enter'
                    >
                        <motion.div variants={library}>
                            <Logo src='/bootstrap5.svg' name='BootStrap' color='8513FB'/>
                        </motion.div>
                        <motion.div variants={library}>
                            <Logo src='/f-motion.svg' name='FramerMotion' color='F000B3'/>
                        </motion.div>
                        <motion.div variants={library}>
                            <Logo src='/react-spring.svg' name='ReactSpring' color='F4AAAA'/>
                        </motion.div>
                        <motion.div variants={library}>
                            <Logo src='/swiper.svg' name='Swiper' color='0080FF'/>
                        </motion.div>
                        <motion.div variants={library}>
                            <Logo src='/mui.svg' name='MaterialUI' color='0081CB'/>
                        </motion.div>
                    </motion.div>
                </div>
            </Col>
        </Row>

        <Row>
            <Col xs={12}>
                <div className={styles.flexcenter}>
                    <p>Database I Can Use</p>
                        
                    <motion.div className={styles.icon_container}
                        variants={parent2}
                        initial='init'
                        whileInView='enter'
                    >
                        <motion.div variants={database}>
                            <Logo src='/firebase.svg' name='Firebase' color='FFCA28'/>
                        </motion.div>
                        <motion.div variants={database}>
                            <Logo src='/mongodb.svg' name='MongoDB' color='6CAC48'/>
                        </motion.div>
                        <motion.div variants={database}>
                            <Logo src='/postgresql.svg' name='PostgreSQL' color='336791'/>
                        </motion.div>
                        <motion.div variants={database}>
                            <Logo src='/mysql.svg' name='MySQL' color='005B7C'/>
                        </motion.div>
                    </motion.div>
                </div>
            </Col>
        </Row>
        
    </Container>
  )
}
