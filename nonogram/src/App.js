import gameData from "./gameData";
import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import "./App.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  margin: "5px",
  padding: theme.spacing(2),
  textAlign: "center",
  borderRadius: "5px",
  width: "20px",
  height: "20px",
  color: theme.palette.text.secondary,
}));

function CreateGrid_X(arr) {
  var grid = [];
  for (var i = 0; i < arr.length; i++) {
    var counts = [];
    var count = 0;
    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == 1) {
        count++;
        if (j == arr[i].length - 1) {
          counts.push(count);
        }
      } else if (count != 0) {
        counts.push(count);
        count = 0;
      }
    }
    grid.push(counts);
  }
  return grid;
}

function CreateGrid_Y(arr) {
  var grid = [];
  arr = transpose(arr);
  for (var i = 0; i < arr.length; i++) {
    var counts = [];
    var count = 0;
    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == 1) {
        count++;
        if (j == arr[i].length - 1) {
          counts.push(count);
        }
      } else if (count != 0) {
        counts.push(count);
        count = 0;
      }
    }
    grid.push(counts);
  }
  return grid;
}

function transpose(arr) {
  var grid = [];
  for (var i = 0; i < arr[0].length; i++) {
    var a = [];
    for (var j = 0; j < arr.length; j++) {
      a.push(arr[j][i]);
    }
    grid.push(a);
  }
  return grid;
}

function Y_init(arr, max) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < max - arr[i].length + 1; j++) {
      arr[i].push("");
    }
  }
  return arr;
}

function App() {
  var answerGrid = gameData[0].answer;
  var gridData = [CreateGrid_X(answerGrid), CreateGrid_Y(answerGrid)];
  console.log(gridData[1]);
  var grid_Y = transpose(
    Y_init(CreateGrid_Y(answerGrid), answerGrid[0].length)
  );
  console.log();
  return (
    <div>
      <h1>Test React</h1>
      <div class="game">
        <Box>
          {Array.from(answerGrid).map((_, x) => (
            <Grid container>
              {Array.from(answerGrid[x].map((_, y) => <Item></Item>))}
            </Grid>
          ))}
        </Box>
        <Box>
          {Array.from(gridData[0]).map((_, x) => (
            <Grid container>
              {Array.from(
                gridData[0][x].map((_, y) => <Item>{gridData[0][x][y]}</Item>)
              )}
            </Grid>
          ))}
        </Box>
      </div>
      <Box>
        {Array.from(grid_Y).map((_, x) => (
          <Grid container>
            {Array.from(grid_Y[x].map((_, y) => <Item>{grid_Y[x][y]}</Item>))}
          </Grid>
        ))}
      </Box>
    </div>
  );
}

export default App;
