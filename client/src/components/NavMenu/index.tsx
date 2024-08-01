import styles from "./NavMenu.module.scss";
import HamburguerMenu from "components/HamburguerMenu";
import MenuLinks from "components/MenuLinks";
import useMediaQuery from "@mui/material/useMediaQuery";
import { IconButton, Stack, Typography } from "@mui/material";
import Adresses from "./Adresses";
import MenuLink from "components/MenuLinks/MenuLink";
import HomeIcon from '@mui/icons-material/Home';


export default function NavMenu() {

  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <header className={styles.header} >
      <MenuLink hrefPage="/" > <IconButton><HomeIcon /></IconButton> </MenuLink>
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