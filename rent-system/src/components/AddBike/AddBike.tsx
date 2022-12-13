import styles from './addBike.module.scss';

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

export const AddBike = ({ isOpen, handleClose }: { isOpen: boolean, handleClose: () => void }) => {
    const submitHandler = (e: any) => {
        e.preventDefault();
        handleClose();
    }

    return (
        <Dialog
            title="Dialog With Custom Width"
            sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
            maxWidth="xs"
            open={isOpen}
        >
            <DialogTitle>Naujas dviratis</DialogTitle>
            <form onSubmit={submitHandler}>
                <DialogContent dividers className={styles.form}>
                    <TextField label="Pavadinimas" name="name" />
                    <TextField label="Tipas" name="type" />
                    <TextField label="Kaina" name="price" />
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>Atšaukti</Button>
                    <Button type='submit'>Sukurti</Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}
