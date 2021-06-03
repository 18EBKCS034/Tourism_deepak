import React, { useState } from "react";
import { useDispatch } from "react-redux";
import style from "../style/location.module.css";
import {NavLink} from 'react-router-dom'

export default function Location() {
  const [data, setData] = useState([
    { image: "delhi.jpeg", title: "Delhi"},
    { image: "banglore.jpeg", title: "Banglore"},
    {  image: "chennai.jpeg",  title: "Chennai" },
    { image: "dehradun.jpeg", title: "Dehradun" },
    { image: "goa.jpeg", title: "Goa" },
    {  image: "mumbai.jpeg",  title: "Mumbai",  },
    {  image: "jaipur.jpeg",title: "Jaipur"  },
    { image: "kolkata.jpeg", title: "Kolkata" },
  ]);
  const dispatch = useDispatch();

  function search(city,gener){
    var data = {
      city : city,
      gener : gener
  }
  dispatch({type:"SEARCHED",payload:data});
  }

  return (
    <div className={style.Location}>
      <div className="row m-0" style={{ minWidth: "750px" }}>
        {data.map((item) => (
          <div className="col-3  mb-3">
            <div className={style.LocationCard}>
              <NavLink to='/SearchPage' exact><img src={`/images/${item.image}`} alt="" onMouseOver={()=>{search(item.title,'All');}} /></NavLink>
              <div>
                <h6>{item.title}</h6>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
