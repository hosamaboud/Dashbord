import Image from "../../../../assets/illustration.png";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Legend,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
} from "recharts";
import "./Analytics.css";
import { ThemeContext } from "../../../../context/ThemeContext";
import { useContext } from "react";

const Analytics = ({
  chart_i,
  chart_ii,
  chart_iii,
  chart_iv,
  title,
  subtitle,
  value,
}) => {
  const { darkTheme } = useContext(ThemeContext);
  const data00 = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
    },
  ];
  const data01 = [
    {
      name: "Group A",
      value: 400,
    },
    {
      name: "Group B",
      value: 300,
    },
    {
      name: "Group C",
      value: 300,
    },
    {
      name: "Group D",
      value: 200,
    },
    {
      name: "Group E",
      value: 278,
    },
    {
      name: "Group F",
      value: 189,
    },
  ];
  const data02 = [
    {
      name: "Group A",
      value: 2400,
    },
    {
      name: "Group B",
      value: 4567,
    },
    {
      name: "Group C",
      value: 1398,
    },
    {
      name: "Group D",
      value: 9800,
    },
    {
      name: "Group E",
      value: 3908,
    },
    {
      name: "Group F",
      value: 4800,
    },
  ];
  return (
    <div className={`analytics ${darkTheme && "dark"}`}>
      {chart_i && (
        <div>
          <header>
            <span className="followers">subscribers :</span>
            <span className="earnings">Earnings :</span>
          </header>
          <BarChart width={230} height={200} data={data00} margin={10}>
            <XAxis dataKey="name" />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill={`${darkTheme ? "#05454d" : "#82ca9d"}`} />
            <Bar dataKey="uv" fill={`${darkTheme ? "#810511" : "#8884d8"}`} />
          </BarChart>
        </div>
      )}
      {chart_ii && (
        <>
          <AreaChart width={230} height={210} data={data00} margin={10}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </>
      )}
      {chart_iii && (
        <>
          <PieChart
            className="pie_chart_container"
            width={300}
            height={300}
            margin={10}
          >
            <Pie
              data={data01}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={50}
              fill={`${darkTheme ? "#8884d8" : "#82ca9d"}`}
            />
            <Pie
              data={data02}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill={`${darkTheme ? "#82ca9d" : "#8884d8"}`}
              label
            />
          </PieChart>
        </>
      )}

      {chart_iv && (
        <div className="card">
          <h1 className="title">{title}</h1>
          <span className="value">{value}</span>
          <span className="subtitle">{subtitle}</span>
          <img className="image" loading="lazy" src={Image} alt="image" />
        </div>
      )}
    </div>
  );
};
export default Analytics;
