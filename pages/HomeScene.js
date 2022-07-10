import styles from '../styles/Home.module.scss'
import Image from 'next/image'
import VanillaTilt from 'vanilla-tilt';
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Container, Col, Row } from 'react-bootstrap';

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}


export default function HomeScene() {
  return (
    <Container fluid='true'>
      <Row>
        <Col xl lg={8} md sm={12}>
        <motion.div className={styles.col_intro}
          initial={{
            opacity: 0,
            x: -400,
            rotate: 10,
          }}
          animate={{
            opacity: 1,
            x: 0,
            rotate: 0,
            transition: {
              delay: 0.6,
              duration: 1.5,
            }
          }}
        >
          <div className={styles.title}>
              Hi, my name is
          </div>
          <div className={styles.row_jump}>
            <text className={styles.jumpchar}>P</text>
            <text className={styles.jumpchar}>H</text>
            <text className={styles.jumpchar}>A</text>
            <text className={styles.jumpchar}>N</text>
            <text className={styles.jumpchar}>-</text>
            <text className={styles.jumpchar}>H</text>
            <text className={styles.jumpchar}>U</text>
            <text className={styles.jumpchar}>Y</text>
            <text className={styles.jumpchar}>-</text>
            <text className={styles.jumpchar}>M</text>
            <text className={styles.jumpchar}>Ạ</text>
            <text className={styles.jumpchar}>N</text>
            <text className={styles.jumpchar}>H</text>
          </div>
          
          <div className={styles.paragraph}>
            And this is my online resume.
          </div>  

          <Tilt className={styles.card}>
            <p>
              class <span>Program</span><br/>
              <text>&#123;</text><br/>
              &emsp;&emsp;static void <i>Main</i><text>(</text>string<text>[] args)</text><br/>
              <text>&emsp;&emsp;&#123;</text><br/>
              <text>&emsp;&emsp;&emsp;&emsp;Console.</text><i>WriteLine</i><text>&#40;</text>
                <code>&#34;Hello World&#34;</code><text>&#41;;</text><br/>
              &emsp;&emsp;&emsp;&emsp;<i>MyCV</i> <text>phm = </text> new <i>MyCV</i><text>();</text><br/>
              <text>&emsp;&emsp;&#125;</text><br/>
              <text>&#125;</text><br/>
              class <span>MyCV</span><br/>
              <text>&#123;</text><br/>
              &emsp;&emsp;public void <i>AboutMe</i><text>()&#123;&#125;</text><br/>
              &emsp;&emsp;public void <i>Experience</i><text>()&#123;&#125;</text><br/>
              &emsp;&emsp;public void <i>Contract</i><text>()&#123;&#125;</text><br/>
              <text>&#125;</text><br/>
            </p> 
          </Tilt>         
        </motion.div>
        </Col>

        <Col xl={3} className="d-none d-xl-block">
        <div className={styles.snowcontainer}>
          <div className={styles.snowflex1}>
            <div className={styles.cloud}/>
            <div className={styles.snow}>
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className={styles.snowflex2}>
            <Image className={styles.svgsnow}
              src='/snowman.svg' alt='' width={400} height={300} />
          </div>
        </div>
        </Col>
        
        <Col lg xl={3} md sm={12}>
        <motion.div className={styles.apack}
          initial={{
            opacity:0,
            rotateX: 180,
          }}
          animate={{
            opacity: 1,
            rotateX: 0,
            transition: {
              delay: 1.2,
              duration: 1.5,
            }
          }}
        >
          <div className={styles.aborder}>
            <div className={styles.avatar}>
              <Image src='/myface.jpg' alt='My Face' layout='fill'/>
              <h2>Software Engineering student at UIT
                <br/><span>4th year</span>
              </h2>
              <a href='#'>Contract me</a>
            </div>
          </div>
        </motion.div>
        </Col>
      </Row>
    </Container> 
  )
}