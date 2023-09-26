import React from 'react';
import { Context } from '../store/appContext.js';
import { useContext, useState } from 'react';

import {  useNavigate } from 'react-router-dom';



import "../../styles/home.css";



const Planets = ({planet}) => {
  const {  actions } = useContext(Context);
const navigate = useNavigate()



	const [imageSource, setImageSource] = useState(`https://starwars-visualguide.com/assets/img/planets/${planet.result.uid}.jpg`);
 

        
  const handleDetails = (id) => {
		actions.detailPlanet(id);
    navigate("/planet-details")
	  };
    


     
	function handleImageError() {
		setImageSource("https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2669&q=80");
	  }
    
    
    return(

      
	<div className="text-center mt-5">
    
       
        <div className="card  m-2"  
       style={{width:"18rem"}}>
        <img src={imageSource} onError={handleImageError} className="card-img-top" style={{height:"18rem",objectFit:"cover",borderRadius:"20px"}} alt="..."/>
        <div className="card-body" style={{height:"16rem",overflow:"scroll"}}>
        <h5 className="card-title"> {planet.result.properties.name}</h5>
       
            <div>
              <p className="card-text"><span>Population:</span> {planet.result.properties.population}</p>
              <p className="card-text"><span>Terrain:</span>{planet.result.properties.terrain} </p>
            </div>
         

<button onClick={() => handleDetails(planet.result.uid)} className="btn btn-warning m-3">Details</button>


    <button href="#" className="btn btn-warning m-3 " onClick={() => {
									actions.setFavoritesPlanets(planet)
								}}  ><strong>♥</strong></button>
  </div>
</div>



	
	</div>
);};

export default Planets;