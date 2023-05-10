import React from "react";
import "./ProgressBar.css";
import { convertToKg } from "../../../../utils/helper";

const ProgressBar = ({ progressBar}) => {

  return (
    <div className="progress-div">
      <div className="progress-bar">
        <div style={{ width: `${progressBar.percentage}%` }} className="progress"></div>
      </div>
      <div className="progress-data">
        {`(${ convertToKg(progressBar.exists)} kg / ${ convertToKg(progressBar.capacity)} kg)`}
      </div>
    </div>
  );
};

export default ProgressBar;
