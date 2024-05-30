import { Box, Drawer, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import styles from './HamburguerMenu.module.scss';


export default function HamburguerMenu({ children }: any) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <IconButton edge="start" aria-label="menu" onClick={() => setIsOpen(true)}>
                <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={isOpen} onClose={() => setIsOpen(false)}>
                <Box p={2} width='250px' textAlign='center' role="presentation">
                    {children}
                </Box>
            </Drawer>
        </>
    )
}