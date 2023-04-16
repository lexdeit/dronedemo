import styles from './Gallery.module.css';
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
    hidden: { y: -200, opacity: 0, },
    visible: {
        y: 0, opacity: 1, transition: {
        }
    },
}

const Gallery = () => {
    return (
        <>
            <section className={styles.section}>
                <hr />
                <h2>Desde el diseño exterior hasta la estructura interna, cada detalle ha sido cuidadosamente analizado y optimizado.</h2>

                <motion.div
                    variants={containerAnimation}
                    initial="hidden"
                    whileInView="visible"
                    className={styles.parent}>


                    <motion.div
                        variants={iconTechVariants}
                        className={styles.div1}>
                        <img src="sportscar.jpg" alt="" className={styles.imagen} />
                    </motion.div>


                    <motion.div
                        variants={iconTechVariants}
                        className={styles.div2}>
                        <video autoPlay loop className={styles.video}>
                            <source src='./video1.mp4' />
                        </video>
                    </motion.div>


                    <motion.div
                        variants={iconTechVariants}
                        className={styles.div3}>
                        <video autoPlay loop className={styles.video}>
                            <source src='./video2.mp4' />
                        </video>
                    </motion.div>

                </motion.div>

                {/* Galleria 2 */}
                <motion.div
                    variants={containerAnimation}
                    initial="hidden"
                    whileInView="visible"
                    className={styles.parent2}>

                    <motion.div
                        variants={iconTechVariants}
                        className={styles.div4}>
                        <img src="gallery1.png" alt="" className={styles.imagen} />

                    </motion.div>

                    <motion.div
                        variants={iconTechVariants}
                        className={styles.div5}>
                        <img src="gallery2.png" alt="" className={styles.imagen} />

                    </motion.div>

                    <motion.div
                        variants={iconTechVariants}
                        className={styles.div6}>
                        <img src="gallery3.png" alt="" className={styles.imagen} />
                    </motion.div>

                </motion.div>

            </section>
        </>
    )
}

export default Gallery;