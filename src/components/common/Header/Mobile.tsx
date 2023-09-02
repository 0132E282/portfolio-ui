import { Box, Typography } from "@mui/material";

function HeaderMobile() {
  return (
    <Box component="header" display={{ xs: "block", lg: "none" }}>
      <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold", color: "red" }}>
        This is header mobile
      </Typography>
    </Box>
  );
}

export default HeaderMobile;