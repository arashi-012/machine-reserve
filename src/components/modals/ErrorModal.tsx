import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material"
import type { ModalType } from "../organisms/ReservationTable";

type Props = {
    open: boolean
    setModal: React.Dispatch<React.SetStateAction<ModalType>>;
    errors: string
}

export const ErrorModal = (props: Props) => {

    const {open, setModal, errors} = props;

    const onClickClose =()=>{
        setModal("none");
    }

    return (
        <Dialog open={open}>
            <DialogTitle>エラーが発生しました</DialogTitle>
            <DialogContent>
                <Typography>{errors}</Typography>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" color="primary" onClick={onClickClose}>
                    戻る
                </Button>
            </DialogActions>
        </Dialog>
    )
}