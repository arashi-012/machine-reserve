import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material"
import type { ModalType } from "../organisms/ReservationTable";

type Props = {
    open: boolean
    setModal: React.Dispatch<React.SetStateAction<ModalType>>;
}

export const ReserveModal = (props: Props) => {

    const {open, setModal} = props;

    const onClickClose =()=>{
        setModal("none");
    }

    const onClickReserve =()=>{
        setModal("error");
    }

    return (
        <Dialog open={open}>
            <DialogTitle>予約の確認</DialogTitle>
            <DialogContent>
                <Typography>この時間帯を予約しますか？</Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClickClose} color="error">キャンセル</Button>
                <Button variant="contained" color="primary" onClick={onClickReserve}>
                    予約する
                </Button>
            </DialogActions>
        </Dialog>
    )
}