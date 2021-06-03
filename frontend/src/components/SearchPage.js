import React, { useEffect } from 'react';
import '../style/SearchPage.css';
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";
import axios from 'axios';
import { useState} from 'react';
import { useSelector } from 'react-redux';
import {baseURL} from '../config';
import PlaceResult from './PlaceResult'

function SearchPage() {

    const [hotel, sethotel] = useState([]);
    const [place, setplace] = useState([]);
    const data = useSelector(state => state.searchData);

    useEffect(() => {
        axios.post(baseURL+'listHotel').then((res)=>{
            sethotel(res.data.data);
        });
        axios.post(baseURL+'listPlace').then((res)=>{
            setplace(res.data.data);
        });
    }, []);

    if(data.gener == "All"){
        var hotelList = hotel.map((h)=>{
            if(h.HotelDetails.city == data.city){
                return <li key={h._id}>
                            <SearchResult
                                img={baseURL+h.HotelImages[0]}
                                location={h.HotelDetails.location+","+h.HotelDetails.city}
                                title={h.HotelDetails.hotelname}
                                wifi={h.HotelDetails.wifi}
                                kitchen={h.HotelDetails.kitchen}
                                bar={h.HotelDetails.bar}
                                laundry={h.HotelDetails.laundry}
                                lift={h.HotelDetails.lift}
                                parking={h.HotelDetails.parking}
                                pool={h.HotelDetails.pool}
                                spa={h.HotelDetails.spa}
                                star={h.HotelDetails.star}
                                id={h._id}
                                taxi={h.HotelDetails.taxi}
                                airport={h.HotelDetails.airport}
                            />
                       </li>
            }    
        });

        var placeList = place.map((t)=>{
            if(t.PlaceDetails.city == data.city){
                return <li key={t._id}>
                        <PlaceResult 
                            img1={baseURL+t.PlaceImages[0]}
                            img2={baseURL+t.PlaceImages[1]}
                            img3={baseURL+t.PlaceImages[2]}
                            img4={baseURL+t.PlaceImages[3]}
                            img5={baseURL+t.PlaceImages[4]}
                            img6={baseURL+t.PlaceImages[5]}
                            img7={baseURL+t.PlaceImages[6]}
                            title={t.PlaceDetails.name}
                            desc={t.PlaceDetails.description}
                            id={t._id}
                       />
                    </li>
            }
        });
    }

    if(data.gener == "Hotel"){
        var hotelList = hotel.map((h)=>{
            if(h.HotelDetails.city == data.city){
                return <li key={h._id}>
                            <SearchResult
                                img={baseURL+h.HotelImages[0]}
                                location={h.HotelDetails.location+","+h.HotelDetails.city}
                                title={h.HotelDetails.hotelname}
                                wifi={h.HotelDetails.wifi}
                                kitchen={h.HotelDetails.kitchen}
                                bar={h.HotelDetails.bar}
                                laundry={h.HotelDetails.laundry}
                                lift={h.HotelDetails.lift}
                                parking={h.HotelDetails.parking}
                                pool={h.HotelDetails.pool}
                                spa={h.HotelDetails.spa}
                                star={h.HotelDetails.star}
                                id={h._id}
                                taxi={h.HotelDetails.taxi}
                                airport={h.HotelDetails.airport}
                            />
                       </li>
            }    
        });
    }

    if(data.gener == "Place"){
        var placeList = place.map((t)=>{
            if(t.PlaceDetails.city == data.city){
                return <li key={t._id}>
                        <PlaceResult 
                            img1={baseURL+t.PlaceImages[0]}
                            img2={baseURL+t.PlaceImages[1]}
                            img3={baseURL+t.PlaceImages[2]}
                            img4={baseURL+t.PlaceImages[3]}
                            img5={baseURL+t.PlaceImages[4]}
                            img6={baseURL+t.PlaceImages[5]}
                            img7={baseURL+t.PlaceImages[6]}
                            title={t.PlaceDetails.name}
                            desc={t.PlaceDetails.description}
                            id={t._id}
                       />
                    </li>
            }
        });
    }
    
    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
            </div>
            {hotelList}
            {placeList}
        </div>
    )
}

export default SearchPage
