import React, { Component } from 'react'
import Home from './Home'


export class Header extends Component {


  render() {
    return (
      <div class="parent" >
        <div id="header" >
          {/* <div class="brand1">

            <nav class="navbar navbar-expand-sm ">
              {/* <!-- Brand/logo --> */}
          {/* < a class="navbar-brand" href="#" > */}
          {/* <!-- INLINE CSS --> */}
          {/* < img src="https://www.pngitem.com/pimgs/m/452-4527362_santa-cruz-mountains-logo-hd-png-download.png" /> */}
          {/* <!-- INLINE CSS --> */}
          {/* < span id="brandname" > NAINI-TAL</span > */}
          {/* </a> */}

          {/* <!-- Links --> */}
          {/* <div class="header_nav" >
                
                  <div id="navigation">
                    <a class="nav-link" href="#">Home</a>
                  </div>
                
                   <div id="navigation">
                    <a class="nav-link" href="#"> Services</a>
                    </div>

                    <div id="navigation">
                    <a class="nav-link" href="#">Our Services</a>
                    </div>

                    <div id="navigation">
                    <a class="nav-link" href="#">Contact Us</a>
                    </div>
              </div>
              <div class="login">
              <form  class="d-flex" >
                {/* <!-- JAVASCRIPT for  --> */}
          {/* <button class="btn1" type="submit"> */}
          {/* <i class="fa fa-user"></i>Log_IN */}
          {/* </button> */}
          {/* /</div>  <button class="btn2" type="submit"> */}
          {/* <i class="fa fa-lock"></i> Sign_UP */}
          {/* </button> */}
          {/* </form> */}
          {/* </div> */}
          {/* </nav> */}

          {/* </div> */}

          <div class="topnav"id="myTopnav">
            <div class="header1">
                      <div class="header2">
                       <a href="#default" class="logo">
                        < img src="https://www.pngitem.com/pimgs/m/452-4527362_santa-cruz-mountains-logo-hd-png-download.png" />
                          < span id="brandname" > NAINI-TAL</span >
                       </a>
                      </div>
                  <div class="topnav" id="top1">
                       <a class="active" href="#home"><i class="fa fa-fw fa-home"></i>Home</a>
                       <a href="#contact"><i class="fa fa-fw fa-envelope"></i>Contact</a>
                       <a href="#about">About</a>
                       <a href="#login"><i class="fa fa-fw fa-user"></i>Login</a>
                    </div>
            </div>
          </div>
          

          <div id="headerBody">

            <div class="split left ">
              <div class="centered ">
                <h1 id="head">Travel Booking Engine      Integrate in any website.</h1>

              </div>
              <p class="info">
                You are free to choose the design, platform and programming language you are comfortable with. Integrate ready-to-go-LIVE travel plugin in any website and convert it to a real-time travel booking portal within 5 mins. 100% private  branded, connect with the supplier of your choice within a fraction of second. Multiple payment gateways integrated with wholesale rates.
               </p>

              <button class="button button1">View Demo</button>
              <button class="button button2">Contact us</button>


              <div id="headlogo">

                <img src="https://www.adivaha.com/images/iso-certified.png" />
                &nbsp;&nbsp;&nbsp;
                <img src="https://www.adivaha.com/images/isoimg.png" />
                &nbsp;&nbsp;&nbsp;
                <img src="https://www.adivaha.com/images/pci-compliance-adivaha.png" />
              </div>
            </div>

          </div>
          <div id="img" >
            <img class="img1" src="image/i2.png" />
          </div>
        </div>

      </div>


    )

  }
}
export default Header
