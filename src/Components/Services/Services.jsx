import styles from './Services.module.css';
import Button from '../Buttons/Button';
import { useViewportScroll, useTransform, motion } from 'framer-motion';


const Services = () => {
    // const { scrollYProgress } = useViewportScroll();
    // const scale = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
    // const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

    return (
        <>
            <section id="services" className={styles.services}>


                <motion.div
                    // style={{ scale, opacity }}
                    className={styles.parent}>

                    <div className={styles.div1}>

                        <div>
                            <h1 className={styles.titulo}>Stay Flying Longer-Up to 60mns</h1>
                            <p>
                                Los drones son vehículos aéreos no tripulados que han revolucionado diversos campos, desde la fotografía y la videografía, hasta la agricultura y la inspección de infraestructuras. Existen drones con diferentes capacidades de vuelo, y algunos modelos pueden permanecer en el aire durante hasta 60 minutos sin necesidad de aterrizar.
                            </p>
                            <Button info={"Descubre"} />
                        </div>


                        <div>
                            <img src="./DJI-Mavic-Pro-Drone-PNG-File.png" alt="" className={styles.imagen} />
                        </div>
                    </div>

                    <div className={styles.div2}>

                        <h1 className={styles.titulo}>Intuitive Remote Controller</h1>

                        <p>¡Descubre el control remoto intuitivo para drones! Nuestro controlador ha sido diseñado pensando en la comodidad y facilidad de uso.</p>

                        <img src="./Drone-PNG-Photo.png" alt="" className={styles.imagen} />
                    </div>


                    <div className={styles.div3}>
                        <img src="https://images.unsplash.com/photo-1508444845599-5c89863b1c44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="" />
                    </div>


                    <div className={styles.div4}>
                        <img src="./Drone-PNG.png" alt="" className={styles.imagen} />
                        <h1 className={styles.titulo}>Velocidad de Nuestro Drone</h1>
                        <p>Nuestro drone es conocido por su increíble velocidad, lo que lo convierte en una verdadera maravilla tecnológica en el mundo de los drones. </p>

                    </div>


                </motion.div>
            </section>
        </>
    )
}

export default Services;
