import styles from './Accesories.module.css';

const Accesories = () => {
    return (
        <section id='accesories' className={styles.section}>
            <h1>Accesories</h1>
            <div className={styles.parent}>


                <div className={styles.div1}>

                    <div>
                        <h1>VR Glasess</h1>
                        <h3>From $700</h3>
                        <p>¡Vuela como nunca antes! Experimenta la emoción de ver en tiempo real la cámara de tu dron con nuestros VR Glasses de alta calidad. ¡Sumérgete en una experiencia de vuelo única en realidad virtual!</p>

                    </div>

                    <div>
                        <img src="./vr.png" alt="" className={styles.imagen} />
                    </div>
                </div>


                <div className={styles.div2}>

                    <div >
                        <h1>DroneX Lock Protector</h1>
                        <h3>From $129</h3>
                    </div>

                    <div className={styles.item2}>
                        <img src="./protector.png" alt="" className={styles.imagen5} />
                    </div>
                </div>

                <div className={styles.div3}>
                    <div>

                        <h1>Spare Propellers</h1>
                        <h3>From $129</h3>
                    </div>
                    <div className={styles.item2}>

                        <img src="./sparepropellers.png" alt="" className={styles.imagen5} />
                    </div>
                </div>


                <div className={styles.div4}>
                    <div>
                        <h1>Intelligent Battery</h1>
                        <h3>From $229</h3>
                    </div>

                    <div className={styles.item2}>
                        <img src="./DJIMAVIC.png" alt="" className={styles.imagen5} />
                    </div>

                </div>

                <div className={styles.div5}>
                    <div>
                        <h1>High Speed</h1>
                        <h3>From $60</h3>
                    </div>

                    <div className={styles.item2}>
                        <img src="./sdcard.png" alt="SDCard High Speed" className={styles.imagen5} />
                    </div>


                </div>

            </div>

        </section>
    )
}

export default Accesories;