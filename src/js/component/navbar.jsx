import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from '../store/appContext.js';
import "/workspaces/Tcm68-star-wars-blog/src/styles/Navbar.css"; 


export const Navbar = () => {

    const { actions,store } = useContext(Context)
	
	useEffect(()=>{
		actions.getDataCharacters();
		actions.getDataPlanets();
		actions.getDataVehicles();
		
	  },[]);



	  
	  const handleDelete = (index) => {
		actions.deleteFavorite(index);
	  };
	





	  return (
        <nav className="star-wars-nav">
            <div className="logo me-auto">STAR WARS</div>
            <div className="dropend">
                <button className="btn btn-warning dropdown-toggle ms-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Favorites {store.favorites.length}
                </button>
                <ul className="dropdown-menu mx-auto">
                    {store.favorites.map((favorite, index) => {
                        return (
                            <li style={{ color: "rgb(255, 179, 0" }} key={index}>
                                <h2>
                                    {favorite}
                                    <box-icon
                                        type='solid'
                                        class='bx-lg  bx-tada-hover'
                                        color="orange"
                                        name='trash-alt'
                                        onClick={() => handleDelete(index)}
                                    >
                                    </box-icon>
                                </h2>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    );
};


