import styles from './Letters.module.css';

const Letters = () => {
    return (
        <>
            <div className={styles.principal}>
                <video autoPlay loop muted className={styles.video}>
                    <source src='./hyperlapse.mp4'/>
                </video>

                {/* <iframe src="https://www.youtube.com/embed/45X0Q1d6Jwk?&autoplay=1&loop=1&mute=1&showinfo=0&controls=0"  className={styles.video}/> */}

                <h5 className={styles.titulo}>DroneX</h5>
            </div>
        </>
    )
}

export default Letters;