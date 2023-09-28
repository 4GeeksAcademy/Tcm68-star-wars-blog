import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetDetails = () => {
	
	const {  store } = useContext(Context)

	const [imageSource, setImageSource] = useState(`https://starwars-visualguide.com/assets/img/planets/${store.onePlanet.result.uid}.jpg`);

	function handleImageError() {

		setImageSource("https://images.unsplash.com/photo-1518331483807-f6adb0e1ad23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2669&q=80");
	  }
    

	return (

		<div className="text-center mx-auto ">

			<h1>Planet Details</h1>

			{JSON.stringify(store.onePlanet) !== '{}' ?(
			<div className="card text-start mx-auto"
				style={{ width: "60%" }} key="index">
				<img src={imageSource} onError={handleImageError} className="card-img-top mx-auto mt-2" style={{ height: "60%", objectFit: "cover", borderRadius: "20px",width: "50%" }}  alt="..." />
				<div className="card-body" style={{ height: "13rem", overflow: "scroll" }}>
					<h5 className="card-title">Name: {store.onePlanet.result.properties.name} </h5>

					<div className="row">
						<div className="col-12 mx-auto">
							<h5 className="row ">Description:</h5>
							<p className="col "><i color="orange" className='bx-pull-left bx bx-tada-hover bxs-quote-alt-left bx-lg' />Planets in this expansive universe offer a breathtaking array of landscapes and ecosystems. From lush, forested worlds to barren desert landscapes and icy tundras, each planet boasts its own unique geography and climate. These celestial bodies serve as the backdrop for epic adventures and are home to a diverse array of species and cultures, making them an integral part of the franchise's rich storytelling.</p>
							<div className="row">
								<h5 className="col ">Population:</h5>
								<p className="col ">{store.onePlanet.result.properties.population}</p>
								<h5 className="col ">Terrain:</h5>
								<p className="col ">{store.onePlanet.result.properties.terrain}</p>
								<h5 className="col ">Diameter:</h5>
								<p className="col ">{store.onePlanet.result.properties.diameter}</p>
								<h5 className="col ">Orbital period:</h5>
								<p className="col ">{store.onePlanet.result.properties.orbital_period}</p>
								
							</div>
						</div>



					</div>
				</div>




				<Link to="/home" className="btn btn-warning m-3">Back to Home</Link>

			</div>
			):(
				<h1>No only one selected</h1>
			)}
		</div>
	)


};

export default PlanetDetails;