import React, { useContext } from "react";
import { appContext } from "../../../../Context/AppContext";
import "./Sidebar.css";
import { convertToKg } from "../../../../utils/helper";

const Sidebar = () => {
  const { packages } = useContext(appContext);

  const handleOnDrag = (e, id) => {
    e.dataTransfer.setData("pkg-id", id);
  };

  return (
    <div className="packages-sidebar">
      {packages.map((pkg) => {
        return (
          <div
            key={pkg.id}
            className="pkg-card"
            draggable
            onDragStart={(e) => handleOnDrag(e, pkg.id)}
          >
            <div className="id-label">ID : {pkg.id}</div>
            <div className="grams-label">KG : {convertToKg(pkg.gram)}</div>
          </div>
        );
      })}
      {packages.length === 0 && (
        <div className="pkg-card">
          <div className="grams-label">Empty Packages</div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
