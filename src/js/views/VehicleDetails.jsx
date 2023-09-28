import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const VehicleDetails = () => {
	
	const { store } = useContext(Context)

	
	const [imageSource, setImageSource] = useState(`https://starwars-visualguide.com/assets/img/starships/${store.oneVehicle.result.uid}.jpg`);


	function handleImageError() {

		setImageSource("https://images.unsplash.com/photo-1518331483807-f6adb0e1ad23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2669&q=80");
	  }
    


	return (

		<div className="text-center mx-auto ">

			<h1>StarShip Details</h1>

			{JSON.stringify(store.oneVehicle) !== '{}' ?(
			<div className="card text-start mx-auto"
				style={{ width: "60%" }} key="index">
				<img src={imageSource} onError={handleImageError} className="card-img-top mx-auto mt-2" style={{ height: "60%", objectFit: "cover", borderRadius: "20px",width: "50%" }}  alt="..." />
				<div className="card-body mx-auto" style={{ height: "16rem", overflow: "scroll",width: "80%" }}>
					<h5 className="card-title">Name: {store.oneVehicle.result.properties.name} </h5>

					<div className="row">
						<div className="col-12 mx-auto">z
							<h5 className="row ">Description:</h5>
							<p className="col "><i color="orange" className='bx-pull-left bx bx-tada-hover bxs-quote-alt-left bx-lg' /> Spaceships and cruisers in this iconic franchise are known for their diverse designs and functionalities. From nimble fighters to imposing capital ships, these spacecraft traverse the vastness of space, engaging in epic battles and adventures. With their intricate details and innovative technology, these ships have captured the imagination of fans worldwide, becoming an integral part of the franchise's rich lore.</p>
							<div className="row">
								<h5 className="col ">Model:</h5>
								<p className="col ">{store.oneVehicle.result.properties.model}</p>
								<h5 className="col ">Manufacturer:</h5>
								<p className="col ">{store.oneVehicle.result.properties.manufacturer}</p>
								<h5 className="col ">Passengers:</h5>
								<p className="col ">{store.oneVehicle.result.properties.passengers}</p>
								<h5 className="col ">Max speed:</h5>
								<p className="col ">{store.oneVehicle.result.properties.max_atmosphering_speed}</p>
								<h5 className="col ">Class:</h5>
								<p className="col ">{store.oneVehicle.result.properties.starship_class}</p>
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

export default VehicleDetails;