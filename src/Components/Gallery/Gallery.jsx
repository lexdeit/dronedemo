import styles from './Gallery.module.css';


const Gallery = () => {
    return (
        <>
            <section className={styles.section}>

                <h2>Desde el diseño exterior hasta la estructura interna, cada detalle ha sido cuidadosamente analizado y optimizado.</h2>

                <div className={styles.parent}>

                    <div className={styles.div1}>
                        <img src="sportscar.jpg" alt="" className={styles.imagen} />
                    </div>

                    <div className={styles.div2}>
                        <video autoPlay loop className={styles.video}>
                            <source src='./video1.mp4' />
                        </video>
                    </div>

                    <div className={styles.div3}>
                        <video autoPlay loop className={styles.video}>
                            <source src='./video2.mp4' />
                        </video>
                    </div>

                </div>

                {/* Galleria 2 */}
                <div className={styles.parent2}>

                    <div className={styles.div4}>
                        <img src="gallery1.png" alt="" className={styles.imagen} />

                    </div>

                    <div className={styles.div5}>
                        <img src="gallery2.png" alt="" className={styles.imagen} />

                    </div>

                    <div className={styles.div6}>
                        <img src="gallery3.png" alt="" className={styles.imagen} />
                    </div>

                </div>

            </section>
        </>
    )
}

export default Gallery;