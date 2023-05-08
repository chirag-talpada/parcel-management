import React from 'react'
import './Home.css'
import Sidebar from './Components/Sidebar/Sidebar'
import TruckContainer from './Components/TruckContainer/TruckContainer'

const Home = () => {
  return (
    <div className='home-Container'>
        <Sidebar/>
        <TruckContainer/>
    </div>
  )
}

export default Home