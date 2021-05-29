import React, { useEffect } from 'react';
import '../style/SearchPage.css';
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";
import axios from 'axios';
import { useState} from 'react';
import { useSelector } from 'react-redux';
import {baseURL} from '../config';

function SearchPage() {

    const [hotel, sethotel] = useState([]);

    const City = useSelector(state => state.searchData);

    useEffect(() => {
        axios.post(baseURL+'listHotel').then((res)=>{
            sethotel(res.data.data);
        });
    }, []);
    
    var hotelList = hotel.map((h)=>{
        if(h.HotelDetails.city == City){
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
                            price={h.HotelDetails.price}
                        />
                   </li>
        }
    });

    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                {/* <Button variant="outlined">More filters</Button> */}
            </div>
            {hotelList}
        </div>
    )
}

export default SearchPage
