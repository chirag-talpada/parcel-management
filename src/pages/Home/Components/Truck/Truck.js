import React,{useContext} from 'react'
import './Truck.css'
import tk from '../../../../assets/img/tk.png'
import { appContext } from '../../../../Context/AppContext'
import { convertToKg } from '../../../../utils/helper'

const Truck = ({label}) => {


  const {updatePackages,packages,truckData,updateTruckData}=useContext(appContext);

    const handleOnDragOver=(e)=>{
        e.preventDefault();
        console.log(e.target);
        
        e.target.closest('.Truck-div').classList.add('onHoverUp');
        
    }

    const handleOnDragLeave=(e)=>{
        e.target.closest('.Truck-div').classList.remove('onHoverUp');
    }

    const handleOnDrop=(e,label)=>{
        
        
        
        e.target.closest('.Truck-div').classList.remove('onHoverUp');
        const packages_id=e.dataTransfer.getData('pkg-id');
    
        const filterPackages=packages.filter(pkg => pkg.id!==Number(packages_id));
        const storePackage=packages.find(pkg => pkg.id===Number(packages_id));
        
        if(label==="large"){
            if( convertToKg(storePackage.gram)<=10 ){
                return false
            }   
        }
        
        if(label==="medium"){
            if(!(convertToKg(storePackage.gram)>=1 && convertToKg(storePackage.gram)<=10)){
                return false
            }   
        }
        
        if(label==="small"){
            if( !(convertToKg(storePackage.gram)<1) ){
                return false
            }   
        }


        const oldTruckData={...truckData};
        oldTruckData[label].push(storePackage);

        updatePackages(filterPackages);
        updateTruckData(oldTruckData);
        console.log(truckData);
        
       
        

    }

  return (
    <div className={('Truck-div ')+(label)} onDrop={(e)=>handleOnDrop(e,label)} onDragLeave={handleOnDragLeave} onDragOver={handleOnDragOver}>
        <div className='truck-label'>
            {label}
        </div>
        <div className='truck-img'>
            <img src={tk} alt='truck' />
        </div>
    </div>
  )
}

export default Truck