import styles from "@/styles/Home.module.css";

export default function Navbar(){
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <h2>Laptronix Tech</h2>
                </div>
                <ul className={styles['nav-links']}>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#technologies">Technologies</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className={styles.hamburger}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </header>
    )
}
