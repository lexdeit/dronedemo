import styles from './Letters.module.css';
import { useEffect, useState } from 'react';

const Letters = ({ texto, size, isScreenBig }) => {

    return (
        <>
            <div className={styles.principal}>
                <video autoPlay loop muted className={styles.video}>
                    <source src='./hyperlapse.mp4' />
                </video>
                {isScreenBig && <h5 className={styles.titulo} style={{ fontSize: `${size}` }}>{texto}</h5>}
                {/* <iframe src="https://www.youtube.com/embed/45X0Q1d6Jwk?&autoplay=1&loop=1&mute=1&showinfo=0&controls=0"  className={styles.video}/> */}

                {!isScreenBig && <h5 className={styles.titulo}>{texto}</h5>}


            </div>
        </>
    )
}

export default Letters;