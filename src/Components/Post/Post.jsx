import styles from './Post.module.css';
import { motion } from 'framer-motion';

const Post = () => {
    return (
        <>



            <div className={styles.parent}>
                <video autoPlay loop muted className={styles.iframer}>
                    <source src='./droneflash.webm' type='video/webm' />
                </video>
                <div className={styles.div1}>
                </div>

                <div className={styles.div2}>

                    <video autoPlay loop muted className={styles.video}>
                        <source src='./yellow car.webm' />
                    </video>
                </div>

                <div className={styles.div3}>

                </div>

                <div className={styles.card}>
                    <h1 className={styles.titulo}>Gesture Mode</h1>
                    <p>Es fácil de usar, intuitivo y extremadamente divertido. ¡Descubre una nueva forma de volar con Gesture Mode en nuestro drone de última generación! ¡No esperes más y lleva tu experiencia de vuelo a un nivel completamente nuevo!</p>
                </div>

                <motion.img
                    initial={{ y: 40, x: 10 }}
                    animate={{ y: 0, x: 0 }}
                    transition={{
                        repeatType: "mirror",
                        duration: 1.5,
                        repeat: Infinity
                    }}
                    src="Drone-Background-PNG.png" alt="" className={styles.drone1} />

                <img src="Drone-Transparent-File.png" alt="" className={styles.drone2} />

            </div>
        </>
    )
}

export default Post;