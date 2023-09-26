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


<div className="dropend">
				<button className="btn btn-warning dropdown-toggle  m-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites {store.favorites.length}
				</button>
				<ul className="dropdown-menu mx-auto">
					{
						store.favorites.map((favorite, index)=> {
							
							return (
								
							<li style={{color:"rgb(255, 179, 0"}}  key={index}><h2>{favorite}
							 <box-icon type='solid' class='bx-lg  bx-tada-hover' color="orange" name='trash-alt'onClick={() => handleDelete(index)}
							>
							</box-icon>
							{/* <span onClick={() => handleDelete(index)}>X</span> */}
							
							</h2>
							</li>
							)
						})
					}
				</ul>
			</div>

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