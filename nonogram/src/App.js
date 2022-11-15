import gameData from "./gameData";
import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import "./App.css";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

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
      arr[i].push(" ");
    }
  }
  return arr;
}
function GenerateGrid(arr) {
  var grid = [];
  for (var i = 0; i < arr.length; i++) {
    var a = [];
    for (var j = 0; j < arr[i].length; j++) {
      a.push(0);
    }
    grid.push(a);
  }
  return grid;
}
const Item = styled(Paper)(({ theme }) => ({
  margin: "3px",
  padding: theme.spacing(2),
  textAlign: "center",
  borderRadius: "1px",
  width: "10px",
  height: "10px",
  color: theme.palette.text.secondary,
}));

const Num = styled(Paper)(({ theme }) => ({
  margin: "2px",
  backgroundColor: "#222",
  color: "#fff",
  padding: theme.spacing(2),
  textAlign: "center",
  borderRadius: "5px",
  width: "10px",
  height: "10px",
  fontSize: "20px",
  fontFamily: "Galmuri11",
}));

function App() {
  var answerGrid = gameData[0].answer;
  var userGrid = GenerateGrid(answerGrid);
  var gridData = [CreateGrid_X(answerGrid), CreateGrid_Y(answerGrid)];
  let [gridActive, setGridActive] = React.useState(userGrid);

  const userClick = (x, y) => {
    setGridActive((prev) => {
      if (prev[x][y] == 1) prev[x][y] = 0;
      else prev[x][y] = 1;
      const tmp = { ...prev };
      return tmp;
    });
  };

  var grid_Y = transpose(
    Y_init(CreateGrid_Y(answerGrid), answerGrid[0].length)
  );

  return (
    <Container>
      <h1>네모네모 로직 | 00:00.00</h1>

      <div class="game">
        <Box>
          {Array.from(userGrid).map((_, x) => (
            <Grid container>
              {Array.from(
                userGrid[x].map((_, y) => (
                  <Item
                    onClick={(e) => {
                      userClick(x, y, e);
                      console.log(gridActive);
                    }}
                    id={gridActive[x][y] == 1 ? "active" : ""}
                  ></Item>
                ))
              )}
            </Grid>
          ))}
        </Box>
        <Box>
          {Array.from(gridData[0]).map((_, x) => (
            <Grid container>
              {Array.from(
                gridData[0][x].map((_, y) => (
                  <Num key={0} elevation={0}>
                    {gridData[0][x][y]}
                  </Num>
                ))
              )}
            </Grid>
          ))}
        </Box>
      </div>
      <Box>
        {Array.from(grid_Y).map((_, x) => (
          <Grid container>
            {Array.from(
              grid_Y[x].map((_, y) => (
                <Num key={0} elevation={0}>
                  {grid_Y[x][y]}
                </Num>
              ))
            )}
          </Grid>
        ))}
      </Box>
      <Button variant="outlined">제출</Button>
    </Container>
  );
}

export default App;
