
import { Box } from "@mui/material";

export default function GreenIcon({ icon: Icon, bgcolor = "primary.main", color = "common.white" }) {
  return (
    <Box
      sx={{
        width: 56,
        height: 56,
        borderRadius: 3,
        bgcolor,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mx: "auto",
        mb: 2,
      }}
    >
      <Icon sx={{ color }} />
    </Box>
  );
}