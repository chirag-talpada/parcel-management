import React from "react";
import "./TruckContainer.css";
import Truck from "../Truck/Truck";
import { TRUCK_TYPE } from "../../../../utils/constant";

const TruckContainer = () => {
  const list = [
    { label: TRUCK_TYPE.LARGE },
    { label: TRUCK_TYPE.MEDIUM },
    { label: TRUCK_TYPE.SMALL },
  ];

  return (
    <div className="trucks-container">
      {list.map((type) => {
        return <Truck label={type.label} />;
      })}
    </div>
  );
};

export default TruckContainer;
