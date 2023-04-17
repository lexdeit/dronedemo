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
            <video autoPlay loop muted className={styles.iframer}>
                <source src='./dronevideo.webm' type='video/webm' />
            </video>
            {/* <iframe src="https://www.youtube.com/embed/tU8BuomMd-4?&autoplay=1&loop=1&mute=1&showinfo=0&controls=0" className={styles.iframer} /> */}

            <section className={styles.section} id='home'>
                <motion.img
                    initial={{ scale: 0, y: -200 }}
                    animate={{ scale: 1.5, y: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                    src="./dronefullhd.png" alt="Drone" className={styles.imagen} />


                <motion.h1
                    initial={{ y: 200 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5 }}
                >DroneTech</motion.h1>

                <motion.h2
                    initial={{ y: 200 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1 }}
                >¡Tu visión en las alas de la innovación!</motion.h2>
                <p className={styles.parrafo}>Somos líderes en drones, con soluciones innovadoras para agricultura, construcción, inspección industrial y más. Confía en nuestra tecnología de vanguardia y servicio al cliente excepcional para llevar tu negocio a nuevas alturas.</p>


                <motion.div
                    variants={containerAnimation}
                    initial="hidden"
                    whileInView="visible"
                    className={styles.parent}>

                    <motion.div
                        variants={iconTechVariants}
                        className={styles.gradientborder}>
                        <span className={styles.icono1} />
                        <p>5 Directions</p>
                    </motion.div>

                    <motion.div
                        variants={iconTechVariants}
                        className={styles.gradientborder}>
                        <span className={styles.icono2} />
                        <p>Hyperlapse</p>
                    </motion.div>

                    <motion.div
                        variants={iconTechVariants}
                        className={styles.gradientborder}
                    >

                        <span className={styles.icono3} />
                        <p>1080p/60fps</p>
                    </motion.div>

                    <motion.div
                        variants={iconTechVariants}
                        className={styles.gradientborder}
                    >
                        <span className={styles.icono4} />
                        <p>60 mins battery</p>
                    </motion.div>

                    <motion.div
                        variants={iconTechVariants}
                        className={styles.gradientborder}
                    >
                        <span className={styles.icono5} />
                        <p>Track 3.0</p>
                    </motion.div>

                    <motion.div
                        variants={iconTechVariants}
                        className={styles.gradientborder}
                    >
                        <span className={styles.icono6} />
                        <p>Return Home</p>
                    </motion.div>


                </motion.div>

            </section>


        </>
    )
}

export default Home;