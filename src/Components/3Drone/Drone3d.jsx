import styles from './Drone3d.module.css';
import { lazy, Suspense, useState } from 'react';
const Spline = lazy(() => import('@splinetool/react-spline'));
import Button from '../Buttons/Button';



const Drone3d = ({ isScreenBig }) => {
    const [showAnimation, setshowAnimation] = useState(false);

    return (
        <>
            <section id='3d' >
                <div className={styles.parent}>


                    <div className={styles.div1}>
                        {isScreenBig && (
                            <>
                                <h5 className={styles.titulo}>Descubre</h5>
                                {showAnimation && <p>Haz clic en la imagen y arrastra para verla.</p>}
                                <Button info={"Discover"} onClick={() => setshowAnimation(!showAnimation)} />
                            </>
                        )}

                    </div>

                    <div className={styles.div2}>

                        {!showAnimation && (
                            <>
                                <h1>Escena 3D</h1>
                                <p>Haz clic en el boton para verla.</p>
                            </>
                        )}
                        <Suspense fallback={<div>Cargando...</div>}>
                            {showAnimation && <Spline scene="https://prod.spline.design/P15TFiL3nUHTyBDo/scene.splinecode" />}
                        </Suspense>
                    </div>


                </div>
            </section>
        </>
    )
}

export default Drone3d;