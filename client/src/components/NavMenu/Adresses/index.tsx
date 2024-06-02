import { Link } from "react-router-dom";
import githubLogo from 'assets/images/github.png'
import linkedinLogo from 'assets/images/linkedin.png'
import styles from "./Adresses.module.scss";

export default function Adresses() {
    return (
        <>
            <address className={styles.address}>
                <Link to='https://www.linkedin.com/in/rafael-de-paiva-maio/' >
                    <img className={styles.address_logo} src={linkedinLogo} alt="linkedin logo" />
                </Link>
                <Link to='https://github.com/rafaelpmaio/' >
                    <img className={styles.address_logo} src={githubLogo} alt="github logo" />
                </Link>
            </address>
        </>
    )
}