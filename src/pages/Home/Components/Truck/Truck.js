import React, { useContext, useState } from "react";
import "./Truck.css";
import tk from "../../../../assets/img/tk.png";
import { appContext } from "../../../../Context/AppContext";
import toast, { Toaster } from "react-hot-toast";
import DataModel from "../DataModel/DataModel";
import ProgressBar from "../ProgressBar/ProgressBar";
import { OnPackageDrop } from "./EventMethods";

const Truck = ({ label }) => {
  const app = useContext(appContext);
  const [model, setModel] = useState({ isOpen: false,label:'' });
  const [cssClass,setCssClass]=useState('');


  const handleOnDragOver = (e) => {
    e.preventDefault();
    setCssClass('onHoverUp');
  };

  const handleOnDragLeave = (e) => {
    setCssClass('');
  };

  const displayData = (label) => {
    setModel({ isOpen: true,label });
  };

 
  return (
    <>
      {model.isOpen && <DataModel setModel={setModel} model={model} />}
      <Toaster />
      <div
        className={`Truck-div ${label} ${cssClass}`}
        onDrop={(e) => OnPackageDrop(e, label,app,toast)}
        onDragLeave={handleOnDragLeave}
        onDragOver={handleOnDragOver}
        onClick={() => displayData(label)}
      >
        <div className="truck-label">{label}</div>
        <div className="truck-img">
          <img src={tk} alt="truck" />
        </div>
        <ProgressBar label={label} />
      </div>
    </>
  );
};

export default Truck;
