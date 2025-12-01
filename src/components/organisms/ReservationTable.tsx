import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { useState } from "react";
import { ReserveModal } from "../modals/ReserveModal";
import { ErrorModal } from "../modals/ErrorModal";
import { useErrorContext } from "../../contexts/error/useErrorContext";

type Reservation = {
    machine: string;
    time: string;
    reserved: boolean;
    name?: string;
};

type Props = {
    machine: string;
}
export type ModalType = "none" | "reserve" | "success" | "error";

export const ReservationTable = (props: Props) => {
    const { machine } = props;

    // モーダルの種類
    const [modal, setModal] = useState<ModalType>("none");

    // エラーコンテキスト
    const errorContext = useErrorContext();

    // 予約ボタン
    const onClickReserve = () => {
        setModal("reserve");
    }

    // データの取得はAPIを使って行う。
    const initialReservations: Reservation[] = [
        { machine: "スミスマシン", time: "10:00 - 11:00", reserved: true, name: "山田太郎" },
        { machine: "パワーラック", time: "09:00 - 10:00", reserved: false },
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
                                        : (<Button variant="contained" onClick={onClickReserve}>予約</Button>)}
                                    </TableCell>
                                </TableRow>) : (<TableRow></TableRow>)
                        ))}
                    </TableBody>

                </Table>
            </TableContainer>

            {/*モーダルの制御 */}
            {modal === "reserve" && (<ReserveModal open={true} setModal={setModal} />)}
            {modal === "error" && (<ErrorModal open={true} setModal={setModal} errors={errorContext.error} />)}
        </>
    )
}