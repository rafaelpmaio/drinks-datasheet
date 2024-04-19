import styles from './Footer.module.scss'
import githubLogo from 'assets/images/github.png'
import linkedinLogo from 'assets/images/linkedin.png'
import { Link } from 'react-router-dom'

export default function Footer() {

    return (
        <footer className={styles.footer}>
            <address className={styles.footer_adress}>
                <Link to='https://www.linkedin.com/in/rafael-de-paiva-maio/' >
                    <img className={styles.footer_logo} src={linkedinLogo} alt="linkedin logo" />
                </Link>
                <Link to='https://github.com/rafaelpmaio/' >
                    <img className={styles.footer_logo} src={githubLogo} alt="github logo" />
                </Link>
            </address>
        </footer>
    )
};