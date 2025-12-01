import { Box, Button, Card, CardContent, TextField, Typography } from "@mui/material"
import { useNavigate } from "react-router";
import { useLoginContext } from "../../contexts/login/useLoginContext";
import { useState } from "react";

export const Login = () => {

    const navigate = useNavigate();
    const { setLoginAuth } = useLoginContext();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        // 仮ログインロジック（本番ではAPIと通信）
        if (email === "k.arashi0112@icloud.com" && password === "arashi") {
            setLoginAuth({
                auth: true,
                userName: "Arashi",
                email: email
            });
            navigate("/");
        } else {
            alert("メールアドレスまたはパスワードが違います");
        }
    };
    return (
        <>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
                sx={{ backgroundColor: "#f5f5f5" }}
            >
                <Card sx={{ width: 360, p: 2, boxShadow: 3 }}>
                    <CardContent>
                        <Typography variant="h5" textAlign="center" mb={2}>
                            モックログイン
                        </Typography>
                        <TextField
                            label="メールアドレス"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            label="パスワード"
                            variant="outlined"
                            type="password"
                            fullWidth
                            margin="normal"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{ mt: 2 }}
                            onClick={handleLogin}
                        >
                            ログイン
                        </Button>
                    </CardContent>
                </Card>
            </Box>

        </>
    )
}