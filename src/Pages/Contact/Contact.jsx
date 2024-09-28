import styles from './Contact.module.css'
import LinkedIn from '../../Images/linkedin.png'
import GitHub from '../../Images/GitHub.svg'
import Email from '../../Images/Email.png'
import EmailClick from '../../Hooks/emailClick'

export default function Contact(){
    return(
        <section id='contact' className={styles.contact}>
            <div className={styles.mainContainer}>
                <h2 className={styles.heading}>
                    <span className={styles.headingTitle}>Contact</span>
                    <span className={styles.headingSubtitle}>You can contact me in any of those social below. I will be contacting you back as soon as possible!</span>
                </h2>
                <div className={styles.social}>
                    <a href="https://www.linkedin.com/in/davi-j-manoel/" target='_blank' className={styles.socialLink}><img className={styles.socialImages} src={LinkedIn} alt="Linkedin link" /></a>
                    <a href="https://github.com/Davi-J-Manoel" target='_blank' className={styles.socialLink}><img className={styles.socialImages} src={GitHub} alt="GitHub Link" /></a>
                    <a className={styles.socialLink} onClick={EmailClick}><img className={styles.socialImages} src={Email} alt="Email address" /></a>
                </div>
                    <div id='copiedAlert'  className={styles.copiedContainer} style={{visibility: "hidden", opacity: "0"}}>
                        <div className={styles.copiedAlert}>
                            <p className={styles.copiedText}>Email Copied!</p>
                        </div>
                    </div>
            </div>
        </section>
    )
}