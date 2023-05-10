import React, { useContext,useState } from "react";
import "./Truck.css";
import tk from "../../../../assets/img/tk.png";
import { appContext } from "../../../../Context/AppContext";
import { convertToKg } from "../../../../utils/helper";
import toast, { Toaster } from "react-hot-toast";
import DataModel from "../DataModel/DataModel";

const Truck = ({ label }) => {
  const { updatePackages, packages, truckData, updateTruckData } =
    useContext(appContext);

    const [model,setModel] =useState({isOpen:false,data:[]});

  const handleOnDragOver = (e) => {
    e.preventDefault();
    console.log(e.target);

    e.target.closest(".Truck-div").classList.add("onHoverUp");
  };

  const handleOnDragLeave = (e) => {
    e.target.closest(".Truck-div").classList.remove("onHoverUp");
  };

  const handleOnDrop = (e, label) => {
    e.target.closest(".Truck-div").classList.remove("onHoverUp");
    const packages_id = e.dataTransfer.getData("pkg-id");

    const filterPackages = packages.filter(
      (pkg) => pkg.id !== Number(packages_id)
    );
    const storePackage = packages.find((pkg) => pkg.id === Number(packages_id));

    if (label === "large") {
      if (convertToKg(storePackage.gram) <= 10) {
        toast.error(`Package too small (must be greater than 10 kg)`)
        return false;
      }
    }

    if (label === "medium") {
      if (
        !(
          convertToKg(storePackage.gram) >= 1 &&
          convertToKg(storePackage.gram) <= 10
        )
      ) {
        toast.error(`Package can't be placed (package>=1 && package<=10 )`)
        return false;
      }
    }

    if (label === "small") {
      if (!(convertToKg(storePackage.gram) < 1)) {
        toast.error(`Package size is too large (must be less than 1 kg)`)
        return false;
      }
    }

    const oldTruckData = { ...truckData };
    oldTruckData[label].push(storePackage);

    updatePackages(filterPackages);
    updateTruckData(oldTruckData);
    toast.success(`Package Added to ${label} truck`)
  };

  const displayData=(label)=>{
    console.log(truckData[label]);
    setModel({isOpen:true,data:truckData[label]});
  }

  return (
    <>
    { model.isOpen && <DataModel setModel={setModel} model={model} />}
    <Toaster/>
      <div
        className={"Truck-div " + label}
        onDrop={(e) => handleOnDrop(e, label)}
        onDragLeave={handleOnDragLeave}
        onDragOver={handleOnDragOver}
        onClick={()=>displayData(label)}
      >
        <div className="truck-label">{label}</div>
        <div className="truck-img">
          <img src={tk} alt="truck" />
        </div>
      </div>
    </>
  );
};

export default Truck;
