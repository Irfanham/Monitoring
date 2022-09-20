import "./chart.css";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
function Chart({ title, data, dataKey, grid }) {
  return (
    <>
      <div className="chartContainer">
        <div className="side">
          <div className="chartSide"></div>
        </div>
        <div className="chart">
          <h3 className="chartTitle"> {title}</h3>
          <ResponsiveContainer width="100%" aspect={4 / 1}>
            <AreaChart data={data}>
              <XAxis dataKey="name" stroke="blue" />
              <Area type="monotone" dataKey={dataKey} stroke="blue" />
              <Tooltip />
              {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}
export default Chart;
