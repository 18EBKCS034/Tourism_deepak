import React, { useState, useEffect } from "react";
import style from "../style/header.module.css";
import HeaderForm from "./HeaderForm";
import ResponsiveHeader from "./ResponsiveHeader";
import { NavLink, Switch, Route } from 'react-router-dom';
import style2 from '../style/heroSection.module.css'
import Home2 from "./Home2";
import Login from './Login';
import Hotelregister from './Hotelregister';
import SearchPage from './SearchPage'
import { useDispatch, useSelector } from "react-redux";
import Profile from "./Profile";
import Hotelpage from "./Hotelpage";
import Dashboard from "./Dashboard";
import AddRoom from './AddRoom';
import axios from "axios";
import { baseURL } from "../config";
import AddPlace from "./AddPlace";

export default function Header() {
  // const history = useHistory();

  const isLogin = useSelector(state => state.isLogin);
  const dispatch = useDispatch();
  const [city, setcity] = useState("");
  const [admin, setadmin] = useState("");
  const [gener, setgener] = useState("All");

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
    var uid = localStorage.getItem("LOGIN_ID");
       axios.post(baseURL+'getUser?id='+uid).then((res)=>{
            setadmin(res.data.data[0].Admin);
       });
  });

  function logout(){
    dispatch( {type:"LOGIN_FALSE"} );
    dispatch( {type:"LOGGEDOUT"} );
    localStorage.setItem("LOGIN_ID", "no");
    window.location.reload(true);             
}

function search(){
    var data = {
        city : city,
        gener : gener
    }
    dispatch({type:"SEARCHED",payload:data});
}

  return (
    <>
      <div
        className={style.animatedBg}
        style={{ transform: translateHeader ? "translateY(-0px)" : "" }}
      ></div>
      <ResponsiveHeader translateHeader={translateHeader} />
      <div className={`${style.Header}`}>
        <NavLink to='/' exact>
        <a
          href="#"
          className={style.logo}
          style={{ color: translateHeader ? "red" : "white" }}
        >
          <span className="d-none d-xl-block">MyTrip</span>
        </a>
        <div className={style.searchDiv}>
            <select onChange={(e)=>{setcity(e.target.value);}} >
              <option value=''>Select a City</option>
              <option value='Delhi'>Delhi</option>
              <option value='Mumbai'>Mumbai</option>
              <option value='Kolkata'>Kolkata</option>
              <option value='Chennai'>Chennai</option>
              <option value='Bangalore'>Bangalore</option>
              <option value='Dehradun'>Dehradun</option>
              <option value='Jaipur'>Jaipur</option>
              <option value='Goa'>Goa</option>
            </select>
            <select onChange={(e)=>{setgener(e.target.value);}} >
            <option value='All'>All</option>
              <option value='Hotel'>Hotels</option>
              <option value='Place'>Tourist Places</option>
            </select>
            <NavLink to='/SearchPage' exact><button onMouseOver={()=>{search();}}>SEARCH</button></NavLink>
        </div>
        </NavLink>
        <HeaderForm translateHeader={translateHeader} />
        <div className={`ml-auto ${style.actionBtn}`}>
          {admin=="true"?"":<NavLink to={isLogin?'/Hotelregister':'/Login'} exact>
          <a href="#" style={{ color: translateHeader ? "#222222" : "white" }}>
            Register Hotel
          </a>
          </NavLink>}
          {admin=="true"?<NavLink to='/AddPlace' exact>
          <a href="#" style={{ color: translateHeader ? "#222222" : "white" }}>
            Add Tourist Place
          </a>
          </NavLink>:''}
          {isLogin?<NavLink to='/Dashboard' exact>
          <a href="#" style={{ color: translateHeader ? "#222222" : "white" }}>
            Dashboard
          </a>
          </NavLink>:''}
          {isLogin?<a style={{ color: translateHeader ? "#222222" : "white" }} onClick={()=>{logout();}}>
                Logout
          </a>:""}
          
        </div>
        
      </div>
      
      <div
      className={style2.HeroSection}
      style={{ backgroundImage: "url('/images/heroSectionBg.png')" }}
    >
      
      <h1>Go Near</h1>
      {/* <NavLink to='/SearchPage' exact>
      <Button>Explore</Button>
      </NavLink> */}
    </div>
    
    <Switch>
    <Route path='/Profile' exact component={Profile}>
      </Route>
      <Route path='/Hotelpage' exact component={Hotelpage}>
      </Route>
      <Route path='/Login' exact component={Login}>
      </Route>
      <Route path='/Hotelregister' exact component={Hotelregister}>
      </Route>
      <Route path='/' exact component={Home2}>
      </Route>
      <Route path='/SearchPage' exact component={SearchPage}></Route>
      <Route path='/Dashboard' exact component={Dashboard}></Route>
      <Route path='/AddRoom' exact component={AddRoom}></Route>
      <Route path='/AddPlace' exact component={AddPlace}></Route>


    </Switch>
    </>
  );
}
