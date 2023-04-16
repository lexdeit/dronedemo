import styles from './Home.module.css';
import { motion } from 'framer-motion';

const containerAnimation = {
    hidden: { opacity: 1, }, visible: {
        opacity: 1, transition: {
            delayChildren: 0,
            staggerChildren: 0.2
        }
    }
}


//Animacion individual de cada icono
const iconTechVariants = {
    hidden: { y: 200, opacity: 0, },
    visible: {
        y: 0, opacity: 1, transition: {
        }
    },
}

const Home = () => {
    return (
        <>
            <video autoPlay loop controls className={styles.iframer}>
                <source src='./dronevideo.webm' type='video/webm' />
            </video>
            {/* <iframe src="https://www.youtube.com/embed/tU8BuomMd-4?&autoplay=1&loop=1&mute=1&showinfo=0&controls=0" className={styles.iframer} /> */}

            <section className={styles.section}>

                <img src="./dronefullhd.png" alt="Drone" className={styles.imagen} />

                <h1>Let's fly higher</h1>
                <p className={styles.parrafo}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione eaque placeat eligendi porro consectetur animi voluptatibus excepturi pariatur, ullam, a perspiciatis fugiat, voluptatum dolores voluptatem incidunt! Asperiores fuga ducimus dolorem!</p>

                <motion.div
                    variants={containerAnimation}
                    initial="hidden"
                    whileInView="visible"
                    className={styles.parent}>

                    <motion.div
                        variants={iconTechVariants}
                    >
                        <img src="./camera-drone.png" alt="" style={{ height: '3.5em', width: '3.5em' }} />
                        {/* <p>5 directions of obstacle sensing</p> */}
                    </motion.div>


                    <motion.div
                        variants={iconTechVariants}
                    >
                        <img src="./video.png" alt="" style={{ height: '3.5em', width: '3.5em' }} />
                        {/* <p>Hyperlapse</p> */}
                    </motion.div>

                    <motion.div
                        variants={iconTechVariants}
                    >
                        <img src="./4k-fullhd.png" alt="" style={{ height: '3.5em', width: '3.5em' }} />
                        {/* <p>4K/60FPS</p> */}
                    </motion.div>

                    <motion.div
                        variants={iconTechVariants}
                    >
                        <img src="./full-battery.png" alt="" style={{ height: '3.5em', width: '3.5em' }} />
                        {/* <p>60 mins flight time</p> */}
                    </motion.div>

                    <motion.div
                        variants={iconTechVariants}
                    >
                        <img src="./track.png" alt="" style={{ height: '3.5em', width: '3.5em' }} />
                        {/* <p>Active Track 3.0</p> */}
                    </motion.div>

                    <motion.div
                        variants={iconTechVariants}
                    >
                        <img src="./go-back.png" alt="" style={{ height: '3.5em', width: '3.5em' }} />
                        {/* <p>Return Home</p> */}
                    </motion.div>


                </motion.div>

            </section>


        </>
    )
}

export default Home;