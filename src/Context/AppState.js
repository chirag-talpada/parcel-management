import React from 'react'
import { appContext } from "./AppContext";
import { packages_Data } from "../services/getPackages";
import { useState } from "react";
import { TRUCK_TYPE } from '../utils/constant';


const AppState = ({children}) => {

    const initialtruckData={
        [TRUCK_TYPE.LARGE]:[],
        [TRUCK_TYPE.MEDIUM]:[],
        [TRUCK_TYPE.SMALL]:[]
    };

    

    const [packages,setPackages]=useState(packages_Data);
    const [truckData,setTruckData]=useState(initialtruckData);

    const updatePackages=(packages)=>{
        setPackages(packages);
    }
   
    const updateTruckData=(packages)=>{
        setTruckData(packages);
    }

  return (
    <appContext.Provider value={{packages,updatePackages,truckData,updateTruckData}}>
        {children}
    </appContext.Provider>
  )
}

export default AppState