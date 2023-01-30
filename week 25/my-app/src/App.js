import './App.css';
import { SketchPicker } from 'react-color';
import { Chart } from "react-google-charts";

// ------ Pie Chart ------//
const data = [
  ["Task", "Hours per Day"],
  ["Work", 8],
  ["Eat", 2],
  ["Training", 1],
  ["Stady", 2],
  ["Housework", 4],
  ["Sleep", 7],
];

const options = {
  title: "My Daily Activities",
  is3D: true,
};


function App() {
  return (
    <div className="App">
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width="100%"
        height="350px"
        legendToggle
      />
      <SketchPicker />

    </div>
    );
  }

export default App;
