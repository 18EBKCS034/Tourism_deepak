import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {baseURL} from '../config';
import '../style/Hotelpage.module.css';
import Footer from './Footer';
import RoomResult from './RoomResult';
export default function Hotelpage() {

    const dispatch = useDispatch();
    const id = useSelector(state => state.hotelID);
    const [images, setimages] = useState("");
    const [hotel, sethotel] = useState("");
    const [room, setroom] = useState([]);

    useEffect(() => {
        axios.post(baseURL+'detailHotel?id='+id).then((res)=>{
            sethotel( res.data.data[0].HotelDetails);
            setimages(res.data.data[0].HotelImages);
        });
        axios.post(baseURL+'listRoom').then((res)=>{
            setroom(res.data.data);
        });
        return () => {
            dispatch({type:"UNCLICKED"});
        }
    }, []);

    var roomList = room.map((r)=>{
        if(r.RoomDetails.hotelID == id){
            return <li key={r._id}>
                        <RoomResult 
                            id={r._id}
                            img1 ={baseURL+r.RoomImages[0]}
                            img2 ={baseURL+r.RoomImages[1]}
                            img3 ={baseURL+r.RoomImages[2]}
                            img4 ={baseURL+r.RoomImages[3]}
                            img5 ={baseURL+r.RoomImages[4]}
                            img6 ={baseURL+r.RoomImages[5]}
                            img7 ={baseURL+r.RoomImages[6]}
                            title={r.RoomDetails.roomname}
                            price={r.RoomDetails.price}
                            person={r.RoomDetails.person}
                            wifi={r.RoomDetails.wifi}
                            ac={r.RoomDetails.ac}
                            tv={r.RoomDetails.tv}
                            intercom={r.RoomDetails.intercom}
                            roomservice={r.RoomDetails.roomservice}
                            hotcoldwater={r.RoomDetails.hotcoldwater}
                            heater={r.RoomDetails.heater}
                            filter={r.RoomDetails.filter}
                            refrigerator={r.RoomDetails.refrigerator}
                            studytable={r.RoomDetails.studytable}
                            teamaker={r.RoomDetails.teamaker}
                        />
                    </li>
        }
    });

    return (
        <>
            
            <div class="pagestyle">

                <div class="row">
                    <div class="column" style={{display: "flex" , justifyContent: "center" , alignItems: "center" , marginLeft: "auto" , marginRight: "auto" , marginTop: "50px"}} >
                       
                        <div style={{width : "500px", height : "320px", background: "grey"}}>
                            <div style={{height: "320px"}} id='hotel' class="carousel slide" data-ride="carousel">
                                <ol class="carousel-indicators">
                                    <li data-target='#hotel' data-slide-to="0" class="active"></li>
                                    <li data-target='#hotel' data-slide-to="1"></li>
                                    <li data-target='#hotel' data-slide-to="2"></li>
                                    <li data-target='#hotel' data-slide-to="3"></li>
                                    <li data-target='#hotel' data-slide-to="4"></li>
                                    <li data-target='#hotel' data-slide-to="5"></li>
                                    <li data-target='#hotel' data-slide-to="6"></li>
                                </ol>
                                <div class="carousel-inner" style={{height: "320px",  width: "100%"}}>
                                    <div class="carousel-item active">
                                        <img style={{width: "100%" , height: "100%"}} src={baseURL+images[0]} alt="No Image"/>
                                    </div>
                                    <div  class="carousel-item">
                                        <img style={{width: "100%" , height: "100%"}} src={baseURL+images[1]} alt="No Image"/>
                                    </div>
                                    <div class="carousel-item">
                                        <img style={{width: "100%" , height: "100%"}} src={baseURL+images[2]} alt="No Image"/>
                                    </div>
                                    <div class="carousel-item">
                                        <img style={{width: "100%" , height: "100%"}} src={baseURL+images[3]} alt="No Image"/>
                                    </div>
                                    <div class="carousel-item">
                                        <img style={{width: "100%" , height: "100%"}} src={baseURL+images[4]} alt="No Image"/>
                                    </div>
                                    <div class="carousel-item">
                                        <img style={{width: "100%" , height: "100%"}} src={baseURL+images[5]} alt="NO Image"/>
                                    </div>
                                    <div class="carousel-item">
                                        <img style={{width: "100%" , height: "100%"}} src={baseURL+images[6]} alt="No Image"/>
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href='#hotel' role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href='#hotel' role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                           
                       
                        
                    <div className='searchResult__info '>
                        <div className="searchResult__infoTop">
                           
                            {/* NAME OF HOTEL */}
                            <h2 id="Hroomh2">{hotel.hotelname}</h2>


                            {/* ADDRESS */}
                            <h5>{hotel.location + " , " + hotel.city}</h5>


                            {/* DISCRIPTION OF HOTEL */}

                            <p>{hotel.description}</p>
                            <div>
                                {hotel.wifi?<img src='images/wifi.png' />:""}
                                {hotel.kitchen?<img src='images/food.png' />:""}
                                {hotel.laundry?<img src='images/laundry.png' />:""}
                                {hotel.bar?<img src='images/bar.png' />:""}
                                {hotel.parking?<img src='images/parking.png' />:""}
                                {hotel.lift?<img src='images/lift.png' />:""}
                                {hotel.pool?<img src='images/pool.png' />:""}
                                {hotel.spa?<img src='images/SPA.png' />:""}
                                {hotel.taxi?<img src='images/taxi.png' />:""}
                                {hotel.airport?<img src='images/airport.png' />:""}
                            </div>
                        </div>
                    </div>
                </div>
                



            </div>
      
                        <h2 id="pageh1">Our Rooms</h2>

                        <h2 id="pageh2">Select Your Room Type</h2>
                            <div>
                                {roomList}
                            </div>
        
        </div>
                    <div id="Hroomfooter">
                        <Footer/>
                    </div>
        </>
            
    )
}
