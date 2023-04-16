import styles from './Drone3d.module.css';
import Spline from '@splinetool/react-spline';



const Drone3d = () => {
    return (
        <>
            <section id='3d' >
                <div className={styles.parent}>


                    <div className={styles.div1}>
                        <h1>Descubre qué se siente al tener un Drone</h1>
                        <p>Haz clic en la imagen y arrastra para verla.</p>
                    </div>

                    <div className={styles.div2}>
                        <Spline scene="https://prod.spline.design/P15TFiL3nUHTyBDo/scene.splinecode" />
                    </div>


                </div>
            </section>
        </>
    )
}

export default Drone3d;