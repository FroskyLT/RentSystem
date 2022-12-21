import { Alert, AlertTitle } from "@mui/material";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar"

export interface IToastProps {
    endRent: () => void;
}

export const Toast = (props: IToastProps) => <Snackbar
    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
    open={true}
    // onClose={handleClose}
    message="I love snacks"
>
    <Alert severity="info">
        <AlertTitle><strong>Nuomojamas dviratis</strong></AlertTitle>
        This is an information message!
        <Button onClick={props.endRent}>Baigti</Button>
    </Alert>
</Snackbar>

export default Toast;