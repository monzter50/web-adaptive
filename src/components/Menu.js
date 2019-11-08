import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Menu = () =>{
    return(
        <div className="menu theme--primary">
            <div className="flex">
                <div className="menu-item">
                    <span className="menu-icon">
                        <FontAwesomeIcon icon="home"/>
                    </span>
                    <p className="menu-text">Inicio</p>
                </div>
                <div className="menu-item">
                    <span  className="menu-icon">
                        <FontAwesomeIcon icon="heart"/>
                    </span>
                    <p className="menu-text">Parques</p>
                </div>
                <div className="menu-item">
                    <span  className="menu-icon">
                        <FontAwesomeIcon icon="map"/>
                    </span>
                    <p className="menu-text">Tours</p>
                </div>
                <div className="menu-item">
                    <span  className="menu-icon">
                        <FontAwesomeIcon icon="star"/>
                        
                    </span>
                    <p className="menu-text">Actividades</p>
                </div>
                <div className="menu-item">
                    <span  className="menu-icon">
                        <FontAwesomeIcon icon="place-of-worship"/>
                    </span>
                    <p className="menu-text">Hospedaje</p>
                </div>
                <div className="menu-item">
                    <span  className="menu-icon">
                        <FontAwesomeIcon icon="hand-holding-usd"/>
                    </span>
                    <p className="menu-text">Ahorra</p>
                </div>
            </div>
        </div>
    )
}
export default Menu