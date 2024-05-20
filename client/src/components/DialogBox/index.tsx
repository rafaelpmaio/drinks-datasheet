import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Button,
} from "@mui/material/";
import { IoIosSend, IoMdCloseCircle  } from "react-icons/io"
import { useState } from "react";
import btnStyle from "components/Button/Button.module.scss"

interface DialogBoxProps {
    title: string,
    contentText: any,
    buttonText: any,
    handleSubmit?: (event:any) => any,
    onClick?:(event: any) => any,
    className?: any,
    submit?: boolean
    disabled?: boolean
}
export default function DialogBox({ title, contentText, buttonText, handleSubmit, onClick, className, submit, disabled }: DialogBoxProps) {

    const [open, openChange] = useState(false);

    const handleOpenPopup = () => {
        openChange(true);
    };
    const handleClosePopup = () => {
        openChange(false);
    };


    return (
        <div>
            <span onClick={handleOpenPopup} className={className ? className : btnStyle.default_button}>
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
                            <Button 
                                type={submit ? "submit" : "submit"} 
                                color="success" 
                                variant="contained"
                                disabled={disabled}
                                endIcon={<IoIosSend />}
                                onClick={onClick}
                                >
                                submit
                            </Button>
                            <Button
                                color="error"
                                variant="contained"
                                onClick={handleClosePopup}
                                endIcon={<IoMdCloseCircle />}
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