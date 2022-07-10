import React from 'react'
import styles from '../styles/Skill.module.scss'
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from "framer-motion";
import Phone from './components/Phone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUnity, faJava, faJsSquare, faReact, } from '@fortawesome/free-brands-svg-icons'

import Image from 'next/image';

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
            <Col md={12} lg={6} className='order-md-2'>
                <div style={{marginLeft: '1.5rem',}}>
                    <p style={{fontSize: '2.5rem', }}>
                        <span >
                            <Image src='/CSharp.svg' alt='' width={40} height={40} />
                        </span>
                        &nbsp;  &nbsp;
                        <FontAwesomeIcon icon={faUnity}/>
                    </p>
                    
                    <p className={styles.parag}>
                        I can program full-stack C# app with both winform and .NET framework. 
                        I also have some game develop experience using 
                        <span style={{color: 'GrayText'}}> Unity </span> and 
                        <span style={{color: '#F2671F'}}> PlayFab </span>
                    </p>
                </div>
            </Col>
            <Col md={12} lg={6} className='order-md-1'>
                <div className={styles.gallerysection}>
                    <picture>
                        <img src='/film3.png' alt='' className={styles.img1}/>
                        <img src='/film2.png' alt='' className={styles.img2}/>
                        <img src='/film1.png' alt='' className={styles.img3}/>
                    </picture>
                </div>
            </Col>
        </Row>

        <Row style={{marginTop: '-1rem', marginLeft: '-3rem'}}>
            <Col xs={6}>
                <div style={{marginLeft: '1.5rem',}} className={styles.alignRight}>
                    <p style={{fontSize: '2.5rem',}}>
                       <text className={styles.h1} 
                        style={{
                            color: '#5382A1',
                        }}
                        ><FontAwesomeIcon icon={faJava} fontSize='2.5rem'/> Java</text>
                    </p>
                    
                    <p className={styles.parag}>
                        I know to code back-end of Java app and using 
                        <span style={{color: '#FFA712'}}> Firebase </span>/
                        <span style={{color: '#1666E3'}}> G</span>
                        <span style={{color: '#DF3E31'}}>o</span>
                        <span style={{color: '#EAAC27'}}>o</span>
                        <span style={{color: '#1666E3'}}>g</span>
                        <span style={{color: '#16944E'}}>l</span>
                        <span style={{color: '#DF3E31'}}>e </span>
                         functions like
                         Cloud Messaging, Push Notification, Cloud Function, Admob
                    </p>
                </div>
            </Col>
            <Col xs={6}>
                <Phone/>
            </Col>
            
        </Row>

        <Row styles={{marginTop: '2rem',}}>
            <Col xs={12} lg={6}>
                <div style={{marginLeft: '1.5rem',}}>
                    <p style={{fontSize: '2.5rem',}}>
                        <text className={styles.h1} 
                        style={{
                            color: '#f7b733',
                        }}
                        ><FontAwesomeIcon icon={faJsSquare} fontSize='2.5rem' color='#f7df1e'/> JavaScript</text>
                    </p>
                    
                    <p className={styles.parag}>
                        I&apos;m still learing about JavaScript. I can do&nbsp;
                        <span style={{color: '#61DBFB'}}>
                            <FontAwesomeIcon icon={faReact} 
                            /> React Native 
                        </span>
                        &nbsp;or web app with Next.js
                    </p>
                </div>
            </Col>

            <Col xs={12} lg={6}>
            <div style={{marginLeft: '1.5rem',}}>
                    <p style={{fontSize: '2.5rem',}}>
                        <text className={styles.h1} 
                        style={{
                            color: '#f7b733',
                        }}
                        >Common Library Use</text>
                    </p>
                    
                    <p className={styles.parag}>
                        I&apos;m still learing about JavaScript. I can do&nbsp;
                        <span style={{color: '#61DBFB'}}>
                            <FontAwesomeIcon icon={faReact} 
                            /> React Native 
                        </span>
                        &nbsp;or web app with Next.js
                    </p>
                </div>
            </Col>
        </Row>
        
    </Container>
  )
}
