import { CAPACITY, TRUCK_TYPE } from "../../../../../utils/constant";
import { convertToKg } from "../../../../../utils/helper";

export const OnPackageDrop = (e, label, app, toast) => {
  e.target.closest(".Truck-div").classList.remove("onHoverUp");
  const packages_id = e.dataTransfer.getData("pkg-id");

  const filterPackages = app.packages.filter(
    (pkg) => pkg.id !== Number(packages_id)
  );
  const storePackage = app.packages.find(
    (pkg) => pkg.id === Number(packages_id)
  );

  let package_gram = convertToKg(storePackage.gram);

  switch (label) {
    case TRUCK_TYPE.LARGE:
      if (package_gram <= 10) {
        toast.error(`Package too small (must be greater than 10 kg)`);
        return false;
      }
      break;
    case TRUCK_TYPE.MEDIUM:
      if (!(package_gram >= 1 && package_gram <= 10)) {
        toast.error(`Package can't be placed (package>=1 && package<=10 )`);
        return false;
      }
      break;
    case TRUCK_TYPE.SMALL:
      if (!(package_gram < 1)) {
        toast.error(`Package size is too large (must be less than 1 kg)`);
        return false;
      }
      break;

    default:
  }

  const oldTruckData = { ...app.truckData };

  if (oldTruckData[label]) {
    let total = oldTruckData[label].reduce(
      (acc, curr) => acc + Number(curr.gram),
      0
    );

    if (Number(storePackage.gram) + total > CAPACITY[label]) {
      toast.error(`Capacity exceeded for ${label} container`);
      return false;
    }
  }

  oldTruckData[label].push(storePackage);

  app.updatePackages(filterPackages);
  app.updateTruckData(oldTruckData);
  toast.success(`Package Added to ${label} truck`);
};
