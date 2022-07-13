import React from 'react'
import styles from '../styles/Skill.module.scss'
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from "framer-motion";
import Phone from './components/Phone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUnity, faJsSquare, faReact, } from '@fortawesome/free-brands-svg-icons'

import Logo from './components/Logo';
import Image from 'next/image';

const variants = {

};

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
                    
                    <p className={styles.parag}>
                        I can program full-stack C# app by .NET Core and Framework. 
                        I also have some game develop experience using 
                        <span style={{color: 'gray'}}> 
                            &nbsp;<FontAwesomeIcon icon={faUnity}/>
                            Unity 
                        </span> and 
                        <span style={{color: '#F2671F'}}> PlayFab </span>
                    </p>
                </div>
            </Col>
            <Col xs={12} xl={6} className='order-xl-1'>
                <div className={styles.gallerysection}>
                    <picture>
                        <img src='/film3.png' alt='' className={styles.img1}/>
                        <img src='/film2.png' alt='' className={styles.img2}/>
                        <img src='/film1.png' alt='' className={styles.img3}/>
                    </picture>
                </div>
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
                    <div style={{fontSize: '2.5rem', marginBottom: '-0.5rem'}}>
                        <text className={styles.text}
                            style={{
                                color: '#f7b733',
                            }}
                        >Commonly Used Library</text>
                    </div>
                    
                    <div className={styles.icon_container}>
                        <Logo src='/bootstrap5.svg' name='BootStrap' color='8513FB'/>
                        <Logo src='/f-motion.svg' name='FramerMotion' color='F000B3'/>
                        <Logo src='/react-spring.svg' name='ReactSpring' color='F4AAAA'/>
                        <Logo src='/swiper.svg' name='Swiper' color='0080FF'/>
                        <Logo src='/mui.svg' name='MaterialUI' color='0081CB'/>
                    </div>
                </div>
            </Col>
        </Row>

        <Row>
            <Col xs={12}>
                <div className={styles.db}>
                    <p>Database I Can Use</p>
                        
                    <div className={styles.icon_container}>
                        <Logo src='/firebase.svg' name='Firebase' color='FFCA28'/>
                        <Logo src='/mongodb.svg' name='MongoDB' color='6CAC48'/>
                        <Logo src='/postgresql.svg' name='PostgreSQL' color='336791'/>
                        <Logo src='/mysql.svg' name='MySQL' color='005B7C'/>
                    </div>
                </div>
            </Col>
        </Row>
        
    </Container>
  )
}
