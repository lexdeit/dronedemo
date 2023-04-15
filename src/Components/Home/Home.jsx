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

                <img src="./principal.png" alt="Drone" className={styles.imagen} />

                <h1>Let's fly higher</h1>
                <p className={styles.parrafo}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione eaque placeat eligendi porro consectetur animi voluptatibus excepturi pariatur, ullam, a perspiciatis fugiat, voluptatum dolores voluptatem incidunt! Asperiores fuga ducimus dolorem!</p>

                <div className={styles.parent}>
                    <div><p>5 directions of obstacle sensing</p></div>
                    <div><p>Hyperlapse</p></div>
                    <div><p>4K/60FPS</p></div>
                    <div><p>60 mins flight time</p></div>
                    <div><p>Active Track 3.0</p></div>
                    <div><p>Return Home</p></div>
                </div>

            </section>


        </>
    )
}

export default Home;