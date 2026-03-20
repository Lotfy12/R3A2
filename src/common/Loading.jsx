import "./Loading.css";
import { useState, useEffect } from "react";
import LinearProgress from "@mui/material/LinearProgress";

const Loading = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 5));
    }, 200);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="loading">
      <div className="loading-bar">
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{ height: 5, width: "100%" }}
        />
        <p className="progress-text">{progress}%</p>
      </div>
    </div>
  );
};

export default Loading;
