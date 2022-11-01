import gameData from "./gameData";
import Board from "./Board";

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

function App() {
  var answerGrid = gameData[0].answer;
  var gridData = [CreateGrid_X(answerGrid), CreateGrid_Y(answerGrid)];
  console.log(gridData);
  return (
    <div>
      <h1>Test React</h1>
      <Board />
    </div>
  );
}

export default App;
