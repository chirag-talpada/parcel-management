import React, { useContext } from "react";
import "./DataModel.css";
import { convertToKg } from "../../../../utils/helper";
import { appContext } from "../../../../Context/AppContext";

const DataModel = ({ setModel, model }) => {
  const { truckData, updateTruckData, updatePackages, packages } =
    useContext(appContext);

  const removePkg = (id) => {
    let newPackages = truckData[model.label].filter((pkg) => pkg.id !== id);
    let oldData = { ...truckData };

    let removedPackage = truckData[model.label].find((pkg) => pkg.id === id);

    updatePackages([removedPackage,...packages]);

    oldData[model.label] = newPackages;
    updateTruckData(oldData);
  };

  return (
    <div className="model">
      <div className="data-model">
        <div className="model-close-panel">
          <span
            className="close-model"
            onClick={() => setModel({ isOpen: false, label: "" })}
          >
            X
          </span>
        </div>
        <div className="model-content">
          <table>
            <thead>
              <tr>
                <td>ID</td>
                <td>Package in KG</td>
                <td>action</td>
              </tr>
            </thead>
            <tbody>
              {truckData[model.label].map((data, i) => {
                return (
                  <tr key={i}>
                    <td>{data.id}</td>
                    <td>{convertToKg(data.gram)}</td>
                    <td>
                      <span
                        className="deletePkg"
                        onClick={() => removePkg(data.id)}
                      >
                        delete
                      </span>
                    </td>
                  </tr>
                );
              })}
              {truckData[model.label].length === 0 && (
                <tr>
                  <td colSpan={3}>Package not found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataModel;
