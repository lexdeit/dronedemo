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
            <section id="home" className={styles.background}>
                <video autoPlay loop controls>
                    <source src='./dronevideo.webm' type='video/webm' />
                </video>

                {/* <iframe src="https://www.youtube.com/embed/tU8BuomMd-4?&autoplay=1&loop=1&mute=1&showinfo=0&controls=0" /> */}


                <div className={styles.container}>

                    <img src="./principal.png" alt="" className={styles.drone} />

                    <h1>Let's fly higher</h1>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quidem quasi. Quos eos perspiciatis non molestiae qui eius praesentium provident sunt accusantium excepturi? Autem quas architecto natus, cupiditate aliquam recusandae.</p>

                    <h2>From $3,000</h2>

                </div>

                <motion.div
                    variants={containerAnimation}
                    initial="hidden"
                    whileInView="visible"
                    className={styles.parent}>

                    <motion.div
                        variants={iconTechVariants}
                        className={styles.div1}>
                        <span className={styles.item1} />
                        <p>5 Directions of obstacle sensing</p>
                    </motion.div>

                    <motion.div
                        variants={iconTechVariants}
                        className={styles.div2}>
                        <p>Hyperlapse</p>
                    </motion.div>

                    <motion.div
                        variants={iconTechVariants}
                        className={styles.div3}>
                        <p>4K/60fps</p>
                    </motion.div>

                    <motion.div
                        variants={iconTechVariants}
                        className={styles.div4}>
                        <p>60 minutes time flight</p>
                    </motion.div>

                    <motion.div
                        variants={iconTechVariants}
                        className={styles.div5}>
                        <p>Active Track 3.0</p>
                    </motion.div>

                    <motion.div
                        variants={iconTechVariants}
                        className={styles.div6}>
                        <p>Return to home</p>
                    </motion.div>


                </motion.div>

            </section>
        </>
    )
}

export default Home;