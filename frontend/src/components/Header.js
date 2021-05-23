import React, { useState, useEffect } from "react";
import style from "../style/header.module.css";
import style2 from "../style/heroSection.module.css";
import Home from "./Home";
import Loginform from "./Loginform";
import Hotelregister from "./Hotelregister";
import ResponsiveHeader from "./ResponsiveHeader";
import {NavLink,Switch,Route} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";

export default function Header() {

  const [city, setcity] = useState("");

  const [translateHeader, setTranslateHeader] = useState(false);
  function handleScroll(e) {
    const wScroll = window.scrollY;
    if (wScroll >= 50) {
      setTranslateHeader(true);
    } else {
      setTranslateHeader(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
  });

  const islogin = useSelector(state => state.isLogin);
    const dispatch = useDispatch();

    function logout(){
        dispatch( {type:"LOGIN_FALSE"} );
        dispatch( {type:"LOGGEDOUT"} );
        localStorage.setItem("LOGIN_ID", "no");
    }

    function search(){
        alert(city);
        dispatch({type:"SEARCHED",payload:city});
    }

  return (
    <>
      <div
        className={style.animatedBg}
        style={{ transform: translateHeader ? "translateY(-0px)" : "" }}
      ></div>
      <ResponsiveHeader translateHeader={translateHeader} />
      <div className={`${style.Header}`}>
        <a
          href="#"
          className={style.logo}
          style={{ color: translateHeader ? "red" : "white" }}
        >
          <span className="d-none d-xl-block">Take A Trip</span>
        </a>
        <div>
            <select onChange={(e)=>{setcity(e.target.value)}}>
                <option value=''>Select City</option>
                <option value='Delhi'>Delhi</option>
                <option value='Mumbai'>Mumbai</option>
                <option value='Bangalore'>Bangalore</option>
                <option value='Chennai'>Chennai</option>
                <option value='Jaipur'>Jaipur</option>
            </select>
            <button onClick={()=>{search();}}>
              <i class="fas fa-search"></i>
              <span className="ml-2">Search</span>
            </button>
        </div>
        <div className={`ml-auto ${style.actionBtn}`}>
          <a href="#" style={{ color: translateHeader ? "#222222" : "" }}>
            <i class="fas fa-globe"></i>
          </a>
              {islogin?"":<NavLink to='/login' exact><a class="dropdown-item" href="#">
                Login in
              </a></NavLink>}
              <NavLink to={islogin?'/register':'/login'} exact><a class="dropdown-item" href="#">
                Register Hotel
              </a></NavLink>
              {islogin?<a onClick={()=>{logout();}} class="dropdown-item" href="#">
                Logout
              </a>:""}
        </div>
      </div>
      <div
      className={style2.HeroSection}
      style={{ backgroundImage: "url('/images/heroSectionBg.png')" }}
    >
      <h1>Go Near</h1>
      <button>Explore nearby stays</button>
    </div>
      <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/login' exact component={Loginform}></Route>
          <Route path='/register' exact component={Hotelregister}></Route>
      </Switch>
    </>
  );
}
