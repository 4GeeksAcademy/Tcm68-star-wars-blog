import React, { useContext, useEffect } from "react";
import Characters from "../component/Characters.jsx";
import Planets from "../component/Planets.jsx";
import Vehicles from "../component/Vehicles.jsx"
import { Context } from '../store/appContext.js';


import "../../styles/home.css";

const Home = () => {

	const { actions,store } = useContext(Context)
	
	useEffect(()=>{
		actions.getDataCharacters();
		actions.getDataPlanets();
		actions.getDataVehicles();
		
	  },[]);



	  
	  const handleDelete = (index) => {
		actions.deleteFavorite(index);
	  };
	

	
	return(
	<div className="text-center mx-auto ">



			<h1>Characters</h1>

<div className="d-flex list">
        {store.char.map((char, index) => (
		<Characters
		key={index}
		index={index}
        char={char}
		/>
        ))}
      </div>

	  
	  <h1>Planets</h1>
	  <div className="d-flex list">
        {store.planet.map((planet, index) => (
		<Planets
		key={index}
		index={index}
        planet={planet}
		/>
        ))}
</div>

		<h1>Vehicles</h1>
		<div className="d-flex list">
        {store.vehicle.map((vehicle, index) => (
		<Vehicles
		key={index}
		index={index}
        vehicle={vehicle}
		/>
        ))}
		</div>
		
	</div>
);};

export default Home;