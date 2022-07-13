import React, { useRef, useState } from 'react'
import styles from '/styles/Skill.module.scss'
import { motion } from 'framer-motion'

export default function Logo({src, name, color}) {
    const note = useRef(null);
    const [isHover, setHover] = useState(false);

    return (
        <div className={styles.full_ic}>
            <picture>
                <motion.img 
                    initial={{
                        y: 10,
                    }}
                    whileHover={()=>{
                        setHover(true);
                        return{
                            y: 0,
                            transition: {
                                type: 'spring',
                                bounce: 0.3,
                                duration: 1,
                            }
                        };
                    }}
                    onHoverEnd={()=>{
                        setHover(false);
                    }}
                    src={src} alt='' className={styles.icon}
                />
            </picture>
            <div className={styles.ic_name} ref={note}>
            <style jsx>{`
                p {
                    color: #${color}; 
                    opacity: ${isHover ? '1' : '0'} !important;
                }
            `}</style>
                <p>{name}</p>
            </div>
        </div>
    )
}
