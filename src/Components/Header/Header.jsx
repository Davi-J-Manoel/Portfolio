import styles from './Header.module.css'
import menu from '../../Images/ham-menu.svg'
import closeMenu from '../../Images/ham-menu-close.svg'
import { scrollAbout, scrollHome, scrollHomeIcon, scrollProjects, scrollContact} from '../../Hooks/Scrolls/scrollClick'
import toggleDisplay from '../../Hooks/toggleDisplay'

export default function Header() {
    return (
        <header>
            <div className={styles.preloadImage}></div>
            <a onClick={scrollHomeIcon} className={styles.iconLink} >
                <div className={styles.icon}>
                    <img src="" alt="SAM Icon" style={{ display: "none" }} />
                </div>
            </a>
            <div onClick={toggleDisplay} className={styles.menu}>
                <img id='openMenu' src={menu} alt="openMenu" />
                <img style={{ display: "none" }} id='closeMenu' src={closeMenu} alt="closeMenu" />
            </div>
            <ul id='mobileMenu' className={styles.mobileMenu} >
                <li><a onClick={scrollHome} className={styles.menuLinks}>Home</a></li>
                <li><a onClick={scrollAbout} className={styles.menuLinks}>About</a></li>
                <li><a onClick={scrollProjects} className={styles.menuLinks}>Projects</a></li>
                <li><a onClick={scrollContact} className={styles.menuLinks}>Contact</a></li>
            </ul>
            <ul className={styles.headerUl}>
                <li><a onClick={scrollHome} className={styles.headerLinks}>Home</a></li>
                <li><a className={styles.headerLinks} onClick={scrollAbout}>About</a></li>
                <li><a onClick={scrollProjects} className={styles.headerLinks}>Projects</a></li>
                <li><a onClick={scrollContact} className={styles.headerLinks}>Contact</a></li>
            </ul>
        </header>
    )
}