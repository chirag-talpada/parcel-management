import React from "react";
import "./DataModel.css";
import { convertToKg } from "../../../../utils/helper";

const DataModel = ({setModel,model}) => {
  return (
    <div className="model">
      <div className="data-model">
        <div className="model-close-panel">
          <span className="close-model" onClick={()=>setModel({isOpen:false,data:[]})} >X</span>
        </div>
        <div className="model-content">
          <table>
            <thead>
              <tr>
                <td>ID</td>
                <td>Package in KG</td>
              </tr>
            </thead>
            <tbody>
                {model.data.map((data)=>{
                    return (<tr>
                        <td>{data.id}</td>
                        <td>{ convertToKg(data.gram) }</td>
                    </tr>)
                })}
                {model.data.length===0 &&
                <tr>
                    <td colSpan={2}>Package not found</td>
                </tr>
                }
            </tbody>
          </table>
          
        </div>
      </div>
    </div>
  );
};

export default DataModel;
