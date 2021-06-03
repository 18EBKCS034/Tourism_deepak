import React, { useEffect, useState } from 'react'
import '../style/profile.css';
import axios from 'axios';
import { baseURL } from '../config';
import { useSelector } from 'react-redux';
import styles from '../style/dashboard.module.css';
import { NavLink } from 'react-router-dom';
import SearchResult2 from "./SearchResult2";
import SearchResult3 from "./SearchResult3";
import PlaceResult from "./PlaceResult";

export default function Dashboard() {

    const id = useSelector(state => state.UserData);
    const [hotel, sethotel] = useState([]);
    const [email, setemail] = useState("");
    const [name, setname] = useState("");
    const [admin, setadmin] = useState("");
    const [place, setplace] = useState([]);

    useEffect(() => {
       var uid = localStorage.getItem("LOGIN_ID");
       axios.post(baseURL+'getUser?id='+uid).then((res)=>{
            setemail(res.data.data[0].email);
            setname(res.data.data[0].name);
            setadmin(res.data.data[0].Admin);
       });
       axios.post(baseURL+'listHotel').then((res)=>{
            sethotel(res.data.data);
       });
       axios.post(baseURL+'listPlace').then((res)=>{
            setplace(res.data.data);
       });
    }, []);

    function updateName(){
      
          var data = {
              id:id,
              name: name,
          }
          axios.post(baseURL+"updateName", data).then((res)=>{
              // alert(res.data.data);
              window.location.reload(true);
          });
        document.getElementById('update').style.display = 'none';
        document.getElementById('btnprofiles').style.display = 'block';
  }

  function show(){
      document.getElementById('update').style.display = 'block';
      document.getElementById('btnprofiles').style.display = 'none';
  }

  var hotelList = hotel.map((h)=>{
    if(h.HotelDetails.userId == id){
        return <li key={h._id}>
                    <SearchResult2
                        img1={baseURL+h.HotelImages[0]}
                        img2={baseURL+h.HotelImages[1]}
                        img3={baseURL+h.HotelImages[2]}
                        img4={baseURL+h.HotelImages[3]}
                        img5={baseURL+h.HotelImages[4]}
                        img6={baseURL+h.HotelImages[5]}
                        img7={baseURL+h.HotelImages[6]}
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
                        id={h._id}
                        star={h.HotelDetails.star}
                        taxi={h.HotelDetails.taxi}
                        airport={h.HotelDetails.airport}
                    />
               </li>
    }
});

    var hotelList2 = hotel.map((h)=>{
        return <li key={h._id}>
                    <SearchResult3
                        img1={baseURL+h.HotelImages[0]}
                        img2={baseURL+h.HotelImages[1]}
                        img3={baseURL+h.HotelImages[2]}
                        img4={baseURL+h.HotelImages[3]}
                        img5={baseURL+h.HotelImages[4]}
                        img6={baseURL+h.HotelImages[5]}
                        img7={baseURL+h.HotelImages[6]}
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
                        id={h._id}
                        star={h.HotelDetails.star}
                        taxi={h.HotelDetails.taxi}
                        airport={h.HotelDetails.airport}
                        name={h.HotelDetails.name}
                        email={h.HotelDetails.email}
                    />
                </li>
    });

    var tourList = place.map((t)=>{
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
    });

    return (
        <div>
            <div>
                <h2 id="profiles">Your Dashboard</h2>

                <div class="cards">
                    <h1>{name}</h1>
                    <p class="titles">{email}</p>
                    <div id='update' style={{display:"none"}}>
                    <input type='text' value={name} onChange={(e)=>{setname(e.target.value);}} placeholder='Enter New Name'></input>
                    <button onClick={()=>{updateName();}}>Update</button>
                    </div>

                    <p><button id="btnprofiles" onClick={()=>{show();}}>Update Name</button></p>
                </div>
            </div>
            {admin == "true"?
            <div>
                <h2 id='profiles'>Your Posted Tourist Places</h2>
               <div>
                    {tourList}
                </div>
               <h2 id='profiles'>List Of All Hotels</h2>
               <div>
                    {hotelList2}
                </div>
            </div>
            :
            <div>
                <h2 id='profiles'>Your Posted Hotels</h2>
               <div>
                    {hotelList}
                </div>
                <NavLink to='/Hotelregister' exact><button className={styles.linkBtn}>Register Hotels</button></NavLink>
            </div>
            }
        </div>
    )
}
