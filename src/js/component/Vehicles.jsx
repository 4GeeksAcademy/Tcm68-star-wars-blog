import React from 'react';
import { Context } from '../store/appContext.js';
import { useContext, useState } from 'react';

import {  useNavigate } from 'react-router-dom';


import "../../styles/home.css";




const Vehicles = ({vehicle}) => {
  const {  actions } = useContext(Context);
const navigate = useNavigate()



	const [imageSource, setImageSource] = useState(`https://starwars-visualguide.com/assets/img/starships/${vehicle.result.uid}.jpg`);
 

    
	function handleImageError() {
		setImageSource("https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2669&q=80");
	  }


     
           
    const handleDetails = (id) => {
      actions.detailVehicle(id);
      navigate("/vehicle-details")
      };
      
    
    
    return(

      
	<div className="text-center mt-5">
    
       
        <div className="card  m-2"  
       style={{width:"18rem"}} >
        <img src={imageSource} onError={handleImageError} className="card-img-top" style={{height:"18rem",objectFit:"cover",borderRadius:"20px"}} alt="..."/>
        <div className="card-body" style={{height:"16rem",overflow:"scroll"}}>
        <h5 className="card-title">{vehicle.result.properties.name}</h5>
   
            <div>
              <p className="card-text"><span>Model:</span>{vehicle.result.properties.model}</p>
              <p className="card-text"><span>Manufacturer:</span>{vehicle.result.properties.manufacturer} </p>
              <p className="card-text"><span>Passengers:</span>{vehicle.result.properties.passengers} </p>
            </div>
        

            <button onClick={() => handleDetails(vehicle.result.uid)} className="btn btn-warning m-3">Details</button>


    <button href="#" className="btn btn-warning m-3 " onClick={() => {
									actions.setFavoritesVehicles(vehicle)
								}}  ><strong>♥</strong></button>
  </div>
</div>



	
	</div>
);};

export default Vehicles;