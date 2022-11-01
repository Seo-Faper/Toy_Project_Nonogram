import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  width: "30px",
  height: "30px",
  color: theme.palette.text.secondary,
}));

export default function Board() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={5} columns={5}>
        {Array.from(Array(25)).map((_, index) => (
          <Grid key={index} item xs={1}>
            <Item>{index}</Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
