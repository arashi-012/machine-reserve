import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { useState } from "react";
import { Modal } from "../atoms/Modal";

type Reservation = {
    machine: string;
    time: string;
    reserved: boolean;
    name?: string;
};

type Props = {
    machine: string;
}

export const ReservationTable = (props: Props) => {

    const { machine } = props;

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const initialReservations: Reservation[] = [
        { machine: "パワーラック", time: "09:00 - 10:00", reserved: false },
        { machine: "スミスマシン", time: "10:00 - 11:00", reserved: true, name: "山田太郎" },
        { machine: "インクラインベンチ", time: "11:00 - 12:00", reserved: false },
        { machine: "パワーラック", time: "12:00 - 13:00", reserved: false },
        { machine: "スミスマシン", time: "13:00 - 14:00", reserved: true, name: "佐藤花子" },
        { machine: "インクラインベンチ", time: "14:00 - 15:00", reserved: false },
    ];
    return (
        <>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>時間</TableCell>
                            <TableCell>状態</TableCell>
                            <TableCell></TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {initialReservations.map((reservations, index) => (
                            reservations.machine === machine ? (
                                <TableRow key={index}>
                                    <TableCell>{reservations.time}</TableCell>
                                    <TableCell>{reservations.reserved ? (reservations.name) : ("-")}
                                    </TableCell>
                                    <TableCell>{reservations.reserved ? (<Button color="error">キャンセル</Button>)
                                        : (<Button variant="contained" onClick={handleOpen}>予約</Button>)}
                                    </TableCell>
                                </TableRow>) : (<TableRow></TableRow>)

                        ))}
                    </TableBody>

                </Table>
            </TableContainer>

            <Modal open={open} handleClose={handleClose} />
        </>
    )
}