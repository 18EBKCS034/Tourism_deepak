import React, { Component } from 'react'

import Navbar from './Navbar';




export class Header extends Component {

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
      <>


      <div class="parent" >
        <div id="header" >

                             <form class="search1">
                                <input type="text" class="searchTerm1 " placeholder="What are you looking for?" name="name" id="name" required/>
                                
                            </form>
          <div id="headerBody">

            <div class="split left ">
              <div class="centered ">
                <h1 id="head">Travel Booking Engine Integrate in any website.</h1>

              </div>
              <p class="info">
                You are free to choose the design, platform and programming language you are comfortable with. Integrate ready-to-go-LIVE travel plugin in any website and convert it to a real-time travel booking portal within 5 mins. 100% private  branded, connect with the supplier of your choice within a fraction of second. Multiple payment gateways integrated with wholesale rates.
               </p>

              <button class="button button1">Watch us</button>
              <button class="button button2">About us</button>


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
      </>

    )

  }
}
export default Header
