import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
    
  const navigate = useNavigate();

  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      gap={2}
    >
      <Typography variant="h2" color="error">
        404
      </Typography>
      <Typography variant="h5">ページが見つかりません</Typography>
      <Typography color="text.secondary">
        URLが間違っているか、ページが削除された可能性があります。
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/")}
      >
        ホームに戻る
      </Button>
    </Box>
  );
};
