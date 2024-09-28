import styles from "./Footer.module.css"

let year = new Date().getFullYear()

export default function Footer(){
    return(
        <div className={styles.footerContainer}>
            <p className={styles.footerText}>&copy; Copyright {year}. Made by <a className={styles.footerLink} href="https://www.linkedin.com/in/davi-manoel-1367b0181/" target="_blank">Davi Manoel</a></p>
        </div>
    )
}