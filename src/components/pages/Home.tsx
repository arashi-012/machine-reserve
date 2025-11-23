import { Box, Card, CardContent, Typography } from "@mui/material"
import { ReservationTable } from "../organisms/ReservationTable";
import { useState } from "react";
import { SelectMachine } from "../organisms/SelectMachine";


export const Home = () => {
    const [machine, setMachine] = useState("パワーラック");

    return (
        <>

            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
                sx={{ backgroundColor: "#f5f5f5" }}
            >
                <Card sx={{ width: 400, p: 2, boxShadow: 3 }}>
                    <CardContent >
                        <Typography textAlign="center">予約テーブル</Typography>
                        <SelectMachine machine={machine} setMachine={setMachine} />
                        <ReservationTable machine={machine}/>
                    </CardContent>
                </Card>

            </Box>

        </>

    )
}