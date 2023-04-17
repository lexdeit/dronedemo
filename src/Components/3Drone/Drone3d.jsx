import styles from './Drone3d.module.css';
import { lazy, Suspense } from 'react';
const Spline = lazy(() => import('@splinetool/react-spline'));



const Drone3d = ({ isScreenBig }) => {
    return (
        <>
            <section id='3d' >
                <div className={styles.parent}>


                    <div className={styles.div1}>
                        <h5 className={styles.titulo}>Descubre</h5>
                        {isScreenBig && <h1 style={{ margin: 0 }}>Qué se siente tener un Drone</h1> &&
                            <p>Haz clic en la imagen y arrastra para verla.</p>}
                    </div>

                    <div className={styles.div2}>
                        <Suspense fallback={<div>Cargando...</div>}>
                            {isScreenBig && <Spline scene="https://prod.spline.design/P15TFiL3nUHTyBDo/scene.splinecode" />}
                        </Suspense>
                    </div>


                </div>
            </section>
        </>
    )
}

export default Drone3d;