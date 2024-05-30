import styles from "./NavMenu.module.scss";
import { Link } from "react-router-dom";
import githubLogo from 'assets/images/github.png'
import linkedinLogo from 'assets/images/linkedin.png'
import HamburguerMenu from "components/HamburguerMenu";
import MenuLinks from "components/MenuLinks";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Typography } from "@mui/material";

export default function NavMenu() {

  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <header className={styles.header} >
      <nav className={styles.nav}>
        {isSmallScreen
          ? <HamburguerMenu>
              <Typography variant="h6">Menu</Typography>
              <MenuLinks />
          </HamburguerMenu>
          : <MenuLinks />
        }
      </nav>
      <address className={styles.address}>
        <Link to='https://www.linkedin.com/in/rafael-de-paiva-maio/' >
          <img className={styles.address_logo} src={linkedinLogo} alt="linkedin logo" />
        </Link>
        <Link to='https://github.com/rafaelpmaio/' >
          <img className={styles.address_logo} src={githubLogo} alt="github logo" />
        </Link>
      </address>
    </header>
  )
}