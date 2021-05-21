import React, { Component } from 'react'
import { NavLink, Route, Switch } from 'react-router-dom';
import Home from './Home'
import Loginform from './Loginform'

import About from './About';
import Hotel from './Hotel';
import Hotelregister from './Hotelregister';

export class Navbar extends Component {

  componentDidMount(){
    document.getElementById('name')
        .addEventListener('keyup', function(event) {
            if (event.code === 'Enter')
            {
                event.preventDefault();
                document.querySelector('form').submit();
            }
        });
  }

    render() {
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
        
                                <input type="text" class="searchTerm" placeholder="What are you looking for?" name="name" id="name" required />
                                
                           </form>

                        </div>

                        <div class="topnav" id="top1">

                          
                            <NavLink className="active" to="/home"><i class="fa fa-fw fa-home"></i>Home</NavLink>
                            <NavLink to="/hotelRegister"><i class="fa fa-hotel"></i> Hotels</NavLink>
                            <NavLink to="/about"><i class="fa fa-fw fa-file"></i>About</NavLink>
                            <NavLink to="/Login"><i class="fa fa-fw fa-user"></i>Login</NavLink>

                            
                        </div>
                    </div>

                </div>
                <Switch>

                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/hotelRegister" component={Hotelregister} />
                    <Route path="/login" component={Loginform} />
                </Switch>
            
            </div>
        )
    }
}

export default Navbar
