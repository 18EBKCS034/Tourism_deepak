import React, { useEffect, useState } from 'react'
import { NavLink, Route, Switch } from 'react-router-dom';
import Home from './Home'
import Loginform from './Loginform'
import About from './About';
import Hotelregister from './Hotelregister';
import { useDispatch, useSelector } from 'react-redux';

export default function Navbar() {

    const [city, setCity] = useState("");
    const islogin = useSelector(state => state.isLogin);
    const dispatch = useDispatch();

    useEffect(() => {
        // document.getElementById('name')
        // .addEventListener('keyup', function(event) {
        //     if (event.code === 'Enter')
        //     {
        //         event.preventDefault();
        //         document.querySelector('form').submit();
        //     }
        // });
    }, []);

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
        <div>
            <div class="topnav" id="myTopnav">
                    <div class="header1">
                        <div class="header2">
                            <a href="#default" class="logo">
                                < img src="https://www.pngitem.com/pimgs/m/452-4527362_santa-cruz-mountains-logo-hd-png-download.png" />
                                < span id="brandname" > NAINI-TAL</span >
                            </a>
                         <form class="search">
    
                                <select onChange={(e)=>{setCity(e.target.value)}}>
                                    <option value="">Select City</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Jaipur">Jaipur</option>
                                    <option value="Mumbai">Mumbai</option>
                                </select>
                                <button style={{height:"40px",width:"120px",color:"white",border:"1px solid white",outlineStyle:"none",position:"absolute",left:"810px",top:"12px",fontWeight:"bold"}} onClick={()=>{search();}}>SEARCH</button>
                           </form>

                        </div>

                        <div class="topnav" id="top1">
                            <NavLink className="active" to="/"><i class="fa fa-fw fa-home"></i>Home</NavLink>
                            <NavLink to={islogin?"/hotelRegister":"/Login"}><i class="fa fa-hotel"></i> Register Hotel</NavLink>
                            {islogin?"":<NavLink to="/Login"><i class="fa fa-fw fa-user"></i>Login</NavLink>}
                            {islogin?<a style={{color:"white" ,cursor:"pointer"}} onClick={()=>{logout();}}><i class="fa fa-fw fa-user"></i>Logout</a>:""}
                        </div>
                    </div>

                </div>
                <Switch>

                    <Route path="/" exact component={Home} />
                    <Route path="/about" exact component={About} />
                    <Route path="/hotelRegister" exact component={Hotelregister} />
                    <Route path="/login" exact component={Loginform} />
                </Switch>
        </div>
    )
}
