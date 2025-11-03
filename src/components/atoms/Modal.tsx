import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material"

type Props = {
    open: boolean
    handleClose: () => void 
}

export const Modal = (props: Props) => {

    const {open, handleClose} = props;

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>予約の確認</DialogTitle>
            <DialogContent>
                <Typography>この時間帯を予約しますか？</Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="error">キャンセル</Button>
                <Button variant="contained" color="primary" onClick={handleClose}>
                    予約する
                </Button>
            </DialogActions>
        </Dialog>
    )
}