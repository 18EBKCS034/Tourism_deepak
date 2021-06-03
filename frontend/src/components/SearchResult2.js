import React from 'react';
import '../style/SearchResult.css';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function SearchResult({
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
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
            <div style={{width : "500px", height : "320px", background: "grey"}}>
                    <div style={{height: "320px"}} id={id} class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target={'#'+id} data-slide-to="0" class="active"></li>
                            <li data-target={'#'+id} data-slide-to="1"></li>
                            <li data-target={'#'+id} data-slide-to="2"></li>
                            <li data-target={'#'+id} data-slide-to="3"></li>
                            <li data-target={'#'+id} data-slide-to="4"></li>
                            <li data-target={'#'+id} data-slide-to="5"></li>
                            <li data-target={'#'+id} data-slide-to="6"></li>
                        </ol>
                        <div class="carousel-inner" style={{height: "320px",  width: "100%"}}>
                            <div class="carousel-item active">
                                <img style={{width: "100%" , height: "100%"}} src={img1} alt="No Image"/>
                            </div>
                            <div  class="carousel-item">
                                <img style={{width: "100%" , height: "100%"}} src={img2} alt="No Image"/>
                            </div>
                            <div class="carousel-item">
                                <img style={{width: "100%" , height: "100%"}} src={img3} alt="No Image"/>
                            </div>
                            <div class="carousel-item">
                                <img style={{width: "100%" , height: "100%"}} src={img4} alt="No Image"/>
                            </div>
                            <div class="carousel-item">
                                <img style={{width: "100%" , height: "100%"}} src={img5} alt="No Image"/>
                            </div>
                            <div class="carousel-item">
                                <img style={{width: "100%" , height: "100%"}} src={img6} alt="NO Image"/>
                            </div>
                            <div class="carousel-item">
                                <img style={{width: "100%" , height: "100%"}} src={img7} alt="No Image"/>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href={'#'+id} role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href={'#'+id} role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>

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
                    <div className='searchResults__price'>
                        <NavLink to='/Hotelpage' exact><button onMouseOver={()=>{showDetails()}} style={{ marginRight: "12px" , borderRadius: "25px" , padding: "6px" , backgroundColor: "tomato" , color: "white" }}>View Details</button></NavLink> 
                        <NavLink to='/AddRoom' exact><button onMouseOver={()=>{showDetails()}} style={{ marginRight: "12px" , borderRadius: "25px" , padding: "6px" , backgroundColor: "tomato" , color: "white" }}>Add Rooms</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult
