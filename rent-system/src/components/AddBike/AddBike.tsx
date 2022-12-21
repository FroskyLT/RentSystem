import styles from './addBike.module.scss';

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { IBike } from '../../model/interfaces';

export const AddBike = ({ isOpen, addBike, handleClose }: { isOpen: boolean, addBike: (bike: IBike) => void, handleClose: () => void }) => {
    const submitHandler = (e: any) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);
        const newBike: IBike = {
            bikeId: (new Date()).getTime(),
            name: data.get('name') as string,
            type: data.get('type') as string,
            status: "Laisvas",
            price: Number(data.get('price')) as number
        }
        addBike(newBike);
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
                    <TextField label="Pavadinimas" name="name" id="name" />
                    <TextField label="Tipas" name="type" id="type" />
                    <TextField label="Kaina" name="price" id="price" />
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>Atšaukti</Button>
                    <Button type='submit'>Sukurti</Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}
