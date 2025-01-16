import Typography from "@mui/joy/Typography";
import CircularProgress from "@mui/joy/CircularProgress";
import { useCountUp } from "use-count-up";
import "./Progress.css";
import { useContext } from "react";
import { DashboardContext } from "../../../../context/DashboardContext";
const Progress = ({ color_2, color_1, end, title, variant_1 }) => {
  const { isDarkTheme } = useContext(DashboardContext);
  const { value: value2, reset } = useCountUp({
    isCounting: true,
    duration: 1,
    start: 0,
    end: end,
  });
  const numericValue = parseFloat(value2);

  return (
    <div className="progress">
      <div className="progress_header">
        <CircularProgress
          size="lg"
          {...(isDarkTheme ? { color: color_1 } : { color: color_2 })}
          variant={variant_1}
          determinate
          value={numericValue}
        >
          <Typography sx={{ color: "var(--text-color)" }}>
            {numericValue}%
          </Typography>
        </CircularProgress>
        <button onClick={reset}>Reload</button>
      </div>
      <div className="summary">
        <h2 className="summary_title">{title}</h2>
        <span className="summary_info">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
          molestiae unde recusandae libero cum minus voluptates iste illum iure
          dicta?
        </span>
      </div>
    </div>
  );
};
export default Progress;
