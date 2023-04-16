import styles from './Menu.module.css';


const Menu = () => {
    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.parent}>

                    <div className={styles.div1}>
                        <h3>DroneTech</h3>
                    </div>


                    <div className={styles.div2}>
                        <a href="#home">
                            <h3>Home</h3>
                        </a>

                        <a href="#services">
                            <h3>Services</h3>
                        </a>

                        <a href="#accesories">
                            <h3>Accesories</h3>
                        </a>

                        <a href="#gallery">
                            <h3>Gallery</h3>
                        </a>
                    </div>


                    <div className={styles.div3}>
                        <button>Comprar</button>
                    </div>
                </div>

            </nav>
        </>
    )
}

export default Menu;