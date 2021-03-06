import React from 'react';
import '../style/SearchResult.css';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function SearchResult({
    img,
    location,
    title,
    wifi,
    kitchen,
    bar,
    laundry,
    lift,
    parking,
    pool,
    spa, 
    star,
    id,
    taxi,
    airport
}) {

    const dispatch = useDispatch();

    function showDetails(){
        dispatch({type:"CLICKED",payload:id});
    }

    return (
        <div className='searchResult'>
            <img src={img} alt="" />

            <div className='searchResult__info'>
                <div className="searchResult__infoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>____</p>
                    <div>
                        {wifi?<img src='images/wifi.png' />:""}
                        {kitchen?<img src='images/food.png' />:""}
                        {laundry?<img src='images/laundry.png' />:""}
                        {bar?<img src='images/bar.png' />:""}
                        {parking?<img src='images/parking.png' />:""}
                        {lift?<img src='images/lift.png' />:""}
                        {pool?<img src='images/pool.png' />:""}
                        {spa?<img src='images/SPA.png' />:""}
                        {taxi?<img src='images/taxi.png' />:""}
                        {airport?<img src='images/airport.png' />:""}

                    </div>
                </div>

                <div className="searchResult__infoBottom">
                    <div className="searchResult__stars">
                        <StarIcon className="searchResult__star" />
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>
                    <div className='searchResults__price' >
                        <NavLink to='/Hotelpage' exact><button onMouseOver={()=>{showDetails()}} style={{ marginRight: "12px" , borderRadius: "25px" , padding: "6px" , backgroundColor: "tomato" , color: "white" }}>View Details</button></NavLink> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult
