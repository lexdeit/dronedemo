import styles from './Footer.module.css';

const Footer = () => {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.parent}>

                    <div className={styles.div1}>
                        <a href="">
                            <h4>Overview</h4>
                        </a>

                    </div>

                    <div className={styles.div2}>
                        <a href="">
                            <h4>Tech Specs</h4>
                        </a>
                    </div>

                    <div className={styles.div3}>
                        <a href="">
                            <h4>Reviews</h4>
                        </a>
                    </div>

                    <div className={styles.div4}>
                        <span className={styles.facebook} />
                        <span className={styles.instagram} />
                        <span className={styles.email} />
                    </div>



                </div>
                <div className={styles.derechos}>
                    <h5>Copyright 2023 DroneTech Inc. All rights reserved. Privacy Policy | Terms of Use Sales | Legal Site</h5>
                </div>

            </section>
        </>
    )
}

export default Footer;