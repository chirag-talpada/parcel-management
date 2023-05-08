import React from 'react'
import './TruckContainer.css'
import Truck from '../Truck/Truck'

const TruckContainer = () => {
  return (
    <div className='trucks-container'>
        <Truck label='large'/>
        <Truck label='medium' />
        <Truck label='small'/>
    </div>
  )
}

export default TruckContainer