import React, { useState, useEffect } from "react";
import style from "../style/header.module.css";
import HeaderForm from "./HeaderForm";
import ResponsiveHeader from "./ResponsiveHeader";
import { NavLink, Switch, Route } from 'react-router-dom';
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import style2 from '../style/heroSection.module.css'
import Home2 from "./Home2";
import Signup from './Signup';
import Login from './Login';
import Host from './Host';

export default function Header() {
  const history = useHistory();
  

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
          <span className="d-none d-xl-block">Take A Trip</span>
        </a>
        </NavLink>
        <HeaderForm translateHeader={translateHeader} />
        <div className={`ml-auto ${style.actionBtn}`}>
          <NavLink to='/Host' exact>
          <a href="#" style={{ color: translateHeader ? "#222222" : "white" }}>
            Become a host
          </a>
          </NavLink>
          <a href="#" style={{ color: translateHeader ? "#222222" : "" }}>
            <i class="fas fa-globe"></i>
          </a>
          <div class="dropdown">
            <a
              className={style.dropdownBtn}
              href="#"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ border: translateHeader ? "1px solid #cccccc" : "" }}
            >
              <i class="fas fa-bars"></i>
              <i class="fas fa-user-circle"></i>
            </a>
            <div
              class="dropdown-menu dropdown-menu-right"
              aria-labelledby="dropdownMenuButton"
            >
              <NavLink to='/Signup' exact>
              <a class="dropdown-item" href="#">
                Sign up
              </a>
              </NavLink>
              <NavLink to='/Login' exact>
              <a class="dropdown-item" href="#">
                Login in
              </a>
              </NavLink>
              <NavLink to='/Host' exact>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">
                Host your home
              </a>
              </NavLink>
            </div>
          </div>
        </div>
        
      </div>
      
      <div
      className={style2.HeroSection}
      style={{ backgroundImage: "url('/images/heroSectionBg.png')" }}
    >
      
      <h1>Go Near</h1>
      <Button onClick={() => history.push('/search')} variant='outlined'>Explore Nearby</Button>
    </div>
    
    <Switch>
      <Route path='/Signup' exact component={Signup}>
      </Route>
      <Route path='/Login' exact component={Login}>
      </Route>
      <Route path='/Host' exact component={Host}>
      </Route>
      <Route path='/' exact component={Home2}>
      </Route>

    </Switch>
    </>
  );
}
