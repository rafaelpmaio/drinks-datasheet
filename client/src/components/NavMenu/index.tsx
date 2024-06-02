import styles from "./NavMenu.module.scss";
import HamburguerMenu from "components/HamburguerMenu";
import MenuLinks from "components/MenuLinks";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Stack, Typography } from "@mui/material";
import Adresses from "./Adresses";

export default function NavMenu() {

  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <header className={styles.header} >
      <Adresses />
      <nav className={styles.nav}>
        {isSmallScreen
          ? <HamburguerMenu>
            <Stack spacing={2}>
              <Typography variant="h6">Menu</Typography>
              <MenuLinks />
            </Stack>
          </HamburguerMenu>
          : <MenuLinks />
        }
      </nav>
    </header>
  )
}