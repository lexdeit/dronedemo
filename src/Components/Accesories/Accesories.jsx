import styles from './Accesories.module.css';
import { useViewportScroll, useTransform, motion } from 'framer-motion';

const Accesories = () => {
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 0.7], [0, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.7], [0, 1]);


    return (
        <section
            id='accesories'
            className={styles.section}
        >
            <h1>Accesories</h1>
            <motion.div
                style={{ scale, opacity }}
                className={styles.parent}>


                <motion.div
                    className={styles.div1}>

                    <div>
                        <h1>VR Glasess</h1>
                        <h3>From $700</h3>
                        <p>¡Vuela como nunca antes! Experimenta la emoción de ver en tiempo real la cámara de tu dron con nuestros VR Glasses de alta calidad. ¡Sumérgete en una experiencia de vuelo única en realidad virtual!</p>

                    </div>

                    <div>
                        <img src="./vr.png" alt="" className={styles.imagen} />
                    </div>
                </motion.div>


                <motion.div
                    className={styles.div2}>

                    <div >
                        <h2 className={styles.subtitulo}>DroneX Lock Protector</h2>
                        <h3>From $129</h3>
                    </div>

                    <div className={styles.item2}>
                        <img src="./protector.png" alt="" className={styles.imagen5} />
                    </div>
                </motion.div>

                <motion.div
                    className={styles.div3}>
                    <div>

                        <h2 className={styles.subtitulo} >Spare Propellers</h2>
                        <h3>From $129</h3>
                    </div>
                    <div className={styles.item2}>

                        <img src="./sparepropellers.png" alt="" className={styles.imagen5} />
                    </div>
                </motion.div>


                <motion.div
                    className={styles.div4}>
                    <div>
                        <h2 className={styles.subtitulo}>Intelligent Battery</h2>
                        <h3>From $229</h3>
                    </div>

                    <div className={styles.item2}>
                        <img src="./DJIMAVIC.png" alt="" className={styles.imagen5} />
                    </div>

                </motion.div>

                <motion.div
                    className={styles.div5}>
                    <div>
                        <h2 className={styles.subtitulo}>High Speed</h2>
                        <h3>From $60</h3>
                    </div>

                    <div className={styles.item2}>
                        <img src="./sdcard.png" alt="SDCard High Speed" className={styles.imagen5} />
                    </div>


                </motion.div>

            </motion.div>

        </section>
    )
}

export default Accesories;