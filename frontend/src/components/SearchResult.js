import React from 'react';
import '../style/SearchResult.css';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";

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
    price,
}) {
    return (
        <div className='searchResult'>
            <img src={img} alt="" />
            <FavoriteBorderIcon className="searchResult__heart" />

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
                    </div>
                </div>

                <div className="searchResult__infoBottom">
                    <div className="searchResult__stars">
                        <StarIcon className="searchResult__star" />
                        <p>
                            {/* <strong>{star}</strong> */}
                        </p>
                    </div>
                    <div className='searchResults__price'>
                        <h2>{price+"/night"}</h2>
                        {/* <p>{total}</p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult
