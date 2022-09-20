// import logo from "./logo.svg";
import "./App.css";
import Topbar from "./components/topbar/Topbar";
import Chart from "./components/chart/Chart";
import Featured from "./components/featured/Featured";
function App() {
  return (
    <>
      <div className="App">
        <Topbar />
        <Chart />
        <Featured />
      </div>
    </>
  );
}

export default App;
