import { Typography, Box } from "@mui/material";
import React from "react";

export default function Nav() {
  return (
    <Box
      component="nav"
      sx={{ display: "flex", justifyContent: "space-between", py: 3, mx: 5 }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          component="img"
          src="/logo.png"
          sx={{ width: "40px" }}
          alt="smswithoutborders logo"
        />
        <Typography variant="h6" sx={{ marginLeft: "8px" }}>
          SMSWithoutBorders
        </Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box
          className="cards"
          sx={{
            display: "flex",

            borderRadius: 7,
            p: 1,
            px: 2,
            justifyItems: "space-between",
          }}
        >
          <Typography sx={{ mx: 4 }} textAlign={"center"}>
            Technologies
          </Typography>
          <Typography sx={{ mr: 4 }} textAlign={"center"}>
            Documentations
          </Typography>
          <Typography sx={{ mr: 4 }} textAlign={"center"}>
            Papers
          </Typography>
        </Box>
        <Typography
          className="cards"
          sx={{ borderRadius: 7, px: 3, py: 1, ml: 2 }}
        >
          Donate
        </Typography>
      </Box>
    </Box>
  );
}
