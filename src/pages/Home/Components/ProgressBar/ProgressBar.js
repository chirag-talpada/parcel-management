import React, { useContext, useEffect, useState } from "react";
import "./ProgressBar.css";
import { convertToKg } from "../../../../utils/helper";
import { appContext } from "../../../../Context/AppContext";
import { CAPACITY } from "../../../../utils/constant";

const ProgressBar = ({label}) => {

  const app = useContext(appContext);

  const [progressBar, setProgressBar] = useState({
    percentage: 0,
    capacity: 0,
    exists: 0,
  });

  useEffect(() => {
    let total = app.truckData?.[label]?.reduce(
      (acc, curr) => acc + Number(curr.gram),
      0
    );
    let capacity = CAPACITY[label];

    let per = (total * 100) / capacity;
    setProgressBar({ percentage: per, capacity, exists: total });
  }, [label, app.truckData]);

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
