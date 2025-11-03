import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material"

type Props = {
    machine: string
    setMachine: (machine: string)=>void
}

export const SelectMachine = (props: Props) => {
    const {machine, setMachine} = props;
    const machines = ["パワーラック", "スミスマシン", "インクラインベンチ"];
    return (
        <>
            <Box display="flex" justifyContent="center" mb={2} marginTop={2}>
                <FormControl sx={{ minWidth: 200 }}>
                    <InputLabel>マシンを選択</InputLabel>
                    <Select
                        value={machine}
                        label="マシンを選択"
                        onChange={(e) => setMachine(e.target.value)}
                    >
                        {machines.map((m) => (
                            <MenuItem key={m} value={m}>{m}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
        </>
    )
}