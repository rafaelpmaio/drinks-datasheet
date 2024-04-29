import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Button,
} from "@mui/material/";
import { useState } from "react";

interface DialogBoxProps {
    title: string,
    contentText: any,
    buttonText: any,
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => any,
    className: string
}
export default function DialogBox({ title, contentText, buttonText, handleSubmit, className }: DialogBoxProps) {

    const [open, openChange] = useState(false);

    const handleOpenPopup = () => {
        openChange(true);
    };
    const handleClosePopup = () => {
        openChange(false);
    };

    return (
        <div>
            <span onClick={handleOpenPopup} className={className}>
                {buttonText}
            </span>
            <Dialog open={open}>
                <DialogTitle> {title} </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {contentText}
                    </DialogContentText>
                    <DialogActions>
                        <form onSubmit={handleSubmit}>
                            <Button type="submit" color="success" variant="contained">
                                submit
                            </Button>
                            <Button
                                color="error"
                                variant="contained"
                                onClick={handleClosePopup}
                            >
                                close
                            </Button>
                        </form>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </div>
    )
}